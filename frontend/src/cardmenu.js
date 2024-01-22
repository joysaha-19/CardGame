import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./cardmenu.css";
import "./borderproj.css";
import Fist from "./pics/fist.png";
import DoubleFist from "./pics/2fists.png";
import Sword from "./pics/level3sword.png";
import Shield from "./pics/Shield.png";
import Level3Shield from "./pics/Level2Shield.png";
import Level2Shield from "./pics/Level3Shield.png";
import Level1Support from "./pics/Level1Support.png";
import Level3Support from "./pics/Level2Support.png";
import Level2Support from "./pics/Level3Support.png";
import data1 from "./data1.json";
import batsymbol from "./pics/cardpics/batman.png"
//rgba(255, 0, 0, 1)

const outercirclearr = [
  "attacker outer-circle",
  "defender outer-circle",
  "healer outer-circle",
];

const outermostcirclearr = [
  "attblur outermost",
  "defblur outermost",
  "healblur outermost",
];
const anim = "grow 0.7s ease-out 0s 1 normal both";

const Ui = () => {
  const [characterindex,setcharacterindex]= useState(0);

  const [image, setimage] = useState(data1["Characters"][characterindex]["backgroundlocation"]);
  const [imageinitial, setimageinitial] = useState(data1["Characters"][characterindex]["backgroundlocation"]);
  const [health, sethealth] = useState("5%");
  const [strength, setstrength] = useState("5%");
  const [defense, setdefense] = useState("5%");
  const [speed, setspeed] = useState("5%");
  const [combat, setcombat] = useState("5%");
  const [animation, setanimation] = useState(false);
  const [ang, setang] = useState(45);
  const [prev, setprev] = useState(-1);
  const [arr, setarr] = useState(Array(data1["Characters"].length).fill(false));
  const [hoverarr, sethoverarr] = useState(Array(data1["Characters"].length).fill(false));
  const scrollref = useRef(null);
  const [height, setheight] = useState("200px");
  const [arrow, setarrow] = useState(0);
  const [bg1, setbg1] = useState("rgba(40, 150, 174, 0.793)");
  const [bg2, setbg2] = useState("rgba(65, 65, 66, 0.993)");
  const [viewinfo, setviewinfo] = useState("1");
  const [scalestats, setscalestats] = useState(1);
  const [scaleabilities, setscaleabilities] = useState(0);
  const [opstats, setopstats] = useState(1);
  const [opabilities, setopabilities] = useState(0);
  const [numcontent, setnumcontent] = useState(0);
  const [prevnav, setprevnav] = useState(0);
  const [backgroundnav, setbackgroundnav] = useState([
    "rgba(9, 196, 237, 0.496)",
    "transparent",
    "transparent",
  ]);

  let [abilityfocus, setabilityfocus] = useState([true, false, false]);
  const [currentabilityfocus,setcurrentabilityfocus]=useState(0);
  const L1abilities = [Fist, Shield, Level1Support];
  const L2abilities = [DoubleFist, Level2Shield, Level2Support];
  const L3abilities = [Sword, Level3Shield, Level3Support];
  const contents = [
    <div
      className="statscontent"
      style={{ transform: `scale(${scalestats})`, opacity: `${opstats}` }}
    >
      <div className="graphs">
        <div className="strengthparam label">
          <p className="parameter">STRENGTH</p>
        </div>
        <div className="strength">
          <div className="bar strengthbar" style={{ width: strength }}>
            <div className="offset"></div>
            {/* <p className="value">{strength}</p> */}
          </div>
        </div>
        <div className="healthparam label">
          <p className="parameter">HEALTH</p>
        </div>
        <div className="health">
          <div className="bar healthbar" style={{ width: health }}>
            <div className="offset"></div>
            <div className="endpoint"></div>
          </div>
        </div>
        <div className="defenseparam label">
          <p className="parameter">DEFENSE</p>
        </div>
        <div className="defense">
          <div className="bar defensebar" style={{ width: defense }}>
            <div className="offset"></div>
            <div className="endpoint"></div>
          </div>
        </div>
        <div className="speedparam label">
          <p className="parameter">SPEED</p>
        </div>
        <div className="speed">
          <div className="bar speedbar" style={{ width: speed }}>
            <div className="offset"></div>
            <div className="endpoint"></div>
          </div>
        </div>
        <div className="combatparam label">
          <p className="parameter">COMBAT</p>
        </div>
        <div className="combat">
          <div className="bar combatbar" style={{ width: combat }}>
            <div className="offset"></div>
            <div className="endpoint"></div>
          </div>
        </div>
      </div>
      <div className="levels">
        <div className="level strengthlevel">
          <div className="strengthcircle circle">
            <p className="levellabel">STRENGTH</p>
            <p className="levelnumber"> Lvl 1</p>
          </div>
        </div>
        <div className="level healthlevel">
          <div className="healthcircle circle">
            <p className="levellabel">HEALTH</p>
            <p className="levelnumber"> Lvl 1</p>
          </div>
        </div>
        <div className="level defenselevel">
          <div className="defensecircle circle">
            <p className="levellabel">DEFENSE</p>
            <p className="levelnumber"> Lvl 1</p>
          </div>
        </div>
        <div className="level speedlevel">
          <div className="speedcircle circle">
            <p className="levellabel">SPEED</p>
            <p className="levelnumber"> Lvl 1</p>
          </div>
        </div>
        <div className="level combatlevel">
          <div className="combatcircle circle">
            <p className="levellabel">COMBAT</p>
            <p className="levelnumber"> Lvl 1</p>
          </div>
        </div>
      </div>
    </div>,
    <div
      className="abilitiescontent"
      style={{
        transform: `scale(${scaleabilities})`,
        opacity: `${opabilities}`,
      }}
    >
      <div className="abilitynavbar">
        <div
          className="attackability nav"
          style={{ backgroundColor: backgroundnav[0] }}
          onClick={() => {
            movenav(0);
          }}
        >
          <p className="navlabel">ATTACK</p>
        </div>
        <div
          className="defenseability nav"
          style={{ backgroundColor: backgroundnav[1] }}
          onClick={() => {
            movenav(1);
          }}
        >
          {" "}
          <p className="navlabel">DEFENSE</p>
        </div>
        <div
          className="supportability nav"
          style={{ backgroundColor: backgroundnav[2] }}
          onClick={() => {
            movenav(2);
          }}
        >
          {" "}
          <p className="navlabel">SUPPORT</p>
        </div>
      </div>
      <div className="special1 special" onClick={() => focusonability(0)}>
        <div
          className="outercircleability"
          style={{ transform: abilityfocus[0] ? "scale(1.15)" : "scale(0)" }}
        ></div>
        <div className="circle">
          <img src={L1abilities[prevnav]} className="abilityimage"></img>
        </div>
      </div>

      <div className="special2 special" onClick={() => focusonability(1)}>
        <div
          className="outercircleability"
          style={{ transform: abilityfocus[1] ? "scale(1.15)" : "scale(0)" }}
        >
          {" "}
        </div>
        <div className="circle">
          <img src={L2abilities[prevnav]} className="abilityimage"></img>
        </div>
      </div>

      <div className="special3 special" onClick={() => focusonability(2)}>
        <div
          className="outercircleability"
          style={{ transform: abilityfocus[2] ? "scale(1.15)" : "scale(0)" }}
        >
          {" "}
        </div>
        <div className="circle">
          <img src={L3abilities[prevnav]} className="abilityimage"></img>
        </div>
      </div>
      <p className="ability1name abname">{data1["Characters"][characterindex]["abilitypanel"][prevnav][0]["abilityname"]}</p>
      <p className="ability2name abname">{data1["Characters"][characterindex]["abilitypanel"][prevnav][1]["abilityname"]}</p>
      <p className="ability3name abname">{data1["Characters"][characterindex]["abilitypanel"][prevnav][2]["abilityname"]}</p>
      <div className="abilitydescriptionbox">
        <div className="abilitydescription">
          <div className="abilitydescriptionname">
            <p className="abilityname">{data1["Characters"][characterindex]["abilitypanel"][prevnav][currentabilityfocus]["abilityname"]}</p>
          </div>
          <div className="abilitydescriptionlevel">
            <div className="circle">
              <p>Lvl&nbsp;{data1["Characters"][characterindex]["abilitypanel"][prevnav][currentabilityfocus]["abilitycurrentlevel"]}</p>
            </div>
          </div>
          <div className="abilitydescriptionother">
            <div className="abilitydescriptioninfo">
              <p>{data1["Characters"][characterindex]["abilitypanel"][prevnav][currentabilityfocus]["abilityinfo"]}</p>
            </div>
            <div className="abilitydescriptionstats">
              <div className="abilitydescriptionability">
                <p>{data1["Characters"][characterindex]["abilitypanel"][prevnav][currentabilityfocus]["abilityspecial"][data1["Characters"][characterindex]["abilitypanel"][prevnav][currentabilityfocus]["abilitycurrentlevel"]-1]}</p>
              </div>
              <div className="abilitydescriptionneed">
                <p>XP needed for upgrade: {data1["Characters"][characterindex]["abilitypanel"][prevnav][currentabilityfocus]["abilityupgradeneed"][data1["Characters"][characterindex]["abilitypanel"][prevnav][currentabilityfocus]["abilitycurrentlevel"]-1]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
  ];

  function focusonability(n) {
    abilityfocus = Array(3).fill(false);
    abilityfocus[n] = true;
    setcurrentabilityfocus(n);
    setabilityfocus(abilityfocus);
  }
  function movenav(n) {
    if (prevnav != n) {
      backgroundnav[prevnav] = "transparent";
      backgroundnav[n] = "rgba(9, 196, 237, 0.496)";
      setbackgroundnav(backgroundnav);
      setprevnav(n);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setstrength("60%");
      sethealth("40%");
      setdefense("30%");
      setspeed("70%");
      setcombat("50%");
    }, 200);
  });
 
  function swapcolor(n) {
    if (n == 1) {
      if (bg1 == "rgba(65, 65, 66, 0.993)") {
        setopabilities(0);
        setscaleabilities(0);
        setTimeout(() => {
          setnumcontent(0);
          setopstats(1);
          setscalestats(1);
        }, 210);

        let t = bg1;
        setbg1(bg2);
        setbg2(t);
      }
    }
    if (n == 2) {
      if (bg2 == "rgba(65, 65, 66, 0.993)") {
        setopstats(0);
        setscalestats(0);
        setTimeout(() => {
          setnumcontent(1);
          setopabilities(1);
          setscaleabilities(1);
        }, 210);
        let t = bg2;
        setbg2(bg1);
        setbg1(t);
      }
    }
  }

  function introincrease() {
    if (height == "200px") {
      setarrow(180);
      setheight("500px");
      setviewinfo("0");
    } else {
      setheight("200px");
      setarrow(0);
      setviewinfo("1");
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setang((prevang) => prevang + 1);
    }, 30);
  }, []);

  useEffect(() => {
    const desiredFPS = 27;
    const frameInterval = 1000 / desiredFPS;
    let lastFrameTime = 0;

    const performScroll = (timestamp) => {
      if (!lastFrameTime) lastFrameTime = timestamp;

      const timeSinceLastFrame = timestamp - lastFrameTime;

      if (timeSinceLastFrame >= frameInterval) {
        if (scrollref.current) {
          scrollref.current.scrollTop += 1;
        }
        lastFrameTime = timestamp;
      }

      requestAnimationFrame(performScroll);
    };

    requestAnimationFrame(performScroll);
  }, []);
  function hoverscale(index) {
    hoverarr[index] = true;
    sethoverarr(hoverarr);
  }

  function offhoverscale(index) {
    hoverarr[index] = false;
    sethoverarr(hoverarr);
  }

  function imagechange(a) {
    if (a != image) {
      setimageinitial(image);
      setimage(a);
      setanimation(true);
      setTimeout(()=>{
        setanimation(false);
      },200);
    }

  
  }

  function transformcard(index) {
    if (prev != -1) arr[prev] = false;
    arr[index] = true;
    setarr(arr);
    setprev(index);
    imagechange(data1["Characters"][index]["backgroundlocation"]);
    setcharacterindex(index);
  }

  const [anime, setanime] = useState(false);
  const arr2 = [
    <>
      <div className="blade"></div>
      <div className="handle"></div>
      <div className="support"></div>
    </>,
    <>
      <div className="plateleft"></div>
      <div className="plateright"></div>
    </>,

    <>
      <div className="horizontalheal1"></div>
      <div className="horizontalheal2"></div>

      <div className="verticalheal1"></div>
      <div className="verticalheal2"></div>
    </>,
  ];
  const [i, seti] = useState(0);
  const [inside, setinside] = useState(arr2[i]);

  const [outercircleclassname, setoutercircleclassname] = useState(
    outercirclearr[i]
  );
  const [outermostcircleclassname, setoutermostcircleclassname] = useState(
    outermostcirclearr[i]
  );

  function stagechange() {
    setinside(arr2[(i + 1) % 3]);
    setoutercircleclassname(outercirclearr[(i + 1) % 3]);
    setoutermostcircleclassname(outermostcirclearr[(i + 1) % 3]);
    setanime(true);
    console.log("clicked");
    setTimeout(() => {
      setanime(false);
    }, 200);
    seti((i + 1) % 3);
  }

  return (
    <div
      className="parentcontainer_proj1"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div>
        <img className="bgi" src={imageinitial}></img>
        <img
          className="bg"
          src={image}
          style={{
            animation: animation
              ? "moveimage 0.2s ease 0s 1 normal forwards"
              : "none",
          }}
        ></img>
        
        <div className="description">
          <div className="namebox">
            <div className="Title">
              <p className="name">{data1["Characters"][characterindex]["Name"]}</p>
              <div className="detbar">
                <div className="rod">
                  <div className="alias"></div>
                  <div className="origin"></div>
                  <div className="power"></div>
                </div>
              </div>
              <div className="detarea">
                <div className="aliasarea">
                  <p className="det-text-label">
                    Alias:&nbsp;<span className="det-text">{data1["Characters"][characterindex]["Alias"]}</span>
                  </p>
                </div>
                <div className="originarea">
                  <p className="det-text-label">
                    Origin:&nbsp;<span className="det-text">{data1["Characters"][characterindex]["Origin"]}</span>
                  </p>
                </div>
                <div className="powerarea">
                  <p className="det-text-label">
                    Power:&nbsp;<span className="det-text">{data1["Characters"][characterindex]["Power"]}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="glowcircle">
              <div className="inner-circle" onClick={stagechange}>
                <div className="base" style={{ animation: anim }}>
                  {inside}
                </div>
              </div>
              <div className={outercircleclassname}></div>
              <div className={outermostcircleclassname}></div>
              <div className="outermost-conic"></div>
            </div>
          </div>
          <div className="masterintrobox" style={{ height: height }}>
            <div className="introbox" ref={scrollref}>
              <p className="intro">
                <strong>CONFIDENTIAL</strong>: CASE FILE - {data1["Characters"][characterindex]["Casefile"]}
                <br></br>
                <br></br>
                <strong>Subject Name</strong>: {data1["Characters"][characterindex]["Casefile"]}
                <br></br>
                <br></br>
                <strong>Real Identity:</strong> {data1["Characters"][characterindex]["Alias"]}
                <br></br>
                <br></br>
                <strong>Background:</strong> {data1["Characters"][characterindex]["Background"]}
                <br></br>
                <br></br>
                <strong>Early Life and Education:</strong> {data1["Characters"][characterindex]["Earlylife"]}
                <br></br>
                <br></br>
                <strong>Modus Operandi:</strong>{data1["Characters"][characterindex]["ModusOperandi"]}
                <br></br>
                <br></br>
                {data1["Characters"][characterindex]["Conclusion"]}
              </p>
              <div className="pulldown" onClick={introincrease}>
                <div
                  className="arrow"
                  style={{ transform: `rotate(${arrow}deg)` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="infogrid" style={{ opacity: viewinfo }}>
            <div className="stats">
              <div
                className="lowbarbutton"
                style={{ backgroundColor: bg1 }}
                onClick={() => swapcolor(1)}
              >
                <p style={{transform:'  transform:skewX(20deg)'}}>STATS</p>
              </div>
            </div>
            <div className="abilities">
              <div
                className="lowbarbutton"
                style={{ backgroundColor: bg2 }}
                onClick={() => swapcolor(2)}
              >
                <p style={{transform:'  transform:skewX(20deg)'}}>ABILITIES</p>
              </div>
            </div>
            {contents[numcontent]}
          </div>
        </div>
        <div className="Cardtrailbox">
          <div className="Cardtrail">
            <div className="begin"></div>
            {arr.map((value, index) => {
              return (
                <>
                  <div
                    className="Cardarea"
                    style={{
                      background: value
                        ? `linear-gradient(${ang}deg, transparent 0%, transparent 5%, red 50%, transparent 95%, transparent 100%)`
                        : "none",
                      transform: value
                        ? "skewX(0deg) scale(1.25)"
                        : hoverarr[index]
                        ? "skewX(0deg) scale(1.2)"
                        : "skewX(0deg)",
                      opacity: value || hoverarr[index] ? "1" : "0.5",
                    }}
                    onMouseEnter={() => {
                      hoverscale(index);
                    }}
                    onMouseLeave={() => {
                      offhoverscale(index);
                    }}
                  >
                    <div
                      className="Cardeg"
                      onClick={() => transformcard(index)}
                    >
<img className="symbol" src={data1["Characters"][index]["imagelocation"]} />
                    </div>
                  </div>
                </>
              );
            })}
             <div className="end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ui;

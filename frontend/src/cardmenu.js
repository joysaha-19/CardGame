import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./cardmenu.css";
import "./borderproj.css";
import Batman from "./pics/bgs/batman.webp";
import Flash from "./pics/bgs/Flash.webp";
import Ironman from "./pics/bgs/ironman.jpg";
import Punisher from "./pics/bgs/punisher2.jpg";
import data from "./data.json";
import Joker from "./pics/bgs/joker.webp";
import Superman from "./pics/bgs/superman.webp";
import Fist from "./pics/fist.png";
import DoubleFist from "./pics/2fists.png";
import Sword from "./pics/level3sword.png";
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
  const [clicked, setclicked] = useState(false);
  const [imageinitial, setimageinitial] = useState("Flash");
  const [image, setimage] = useState(Batman);
  const [health, sethealth] = useState("5%");
  const [strength, setstrength] = useState("5%");
  const [defense, setdefense] = useState("5%");
  const [speed, setspeed] = useState("5%");
  const [combat, setcombat] = useState("5%");
  const [intro, setintro] = useState("");
  const [power, setpower] = useState("Martial Arts");
  const [origin, setorigin] = useState("Gotham City");
  const [alias, setalias] = useState("Bruce Wayne");
  const [alias1, setalias1] = useState("");
  const [name, setname] = useState("");
  const [animation, setanimation] = useState(false);
  const [ang, setang] = useState(45);
  const [prev, setprev] = useState(-1);
  const [arr, setarr] = useState(Array(75).fill(false));
  const [hoverarr, sethoverarr] = useState(Array(75).fill(false));
  const [scroll, setscroll] = useState(0);
  const scrollref = useRef(null);
  const [delay, setdelay] = useState(0);
  const [height, setheight] = useState("200px");
  const [arrow, setarrow] = useState(0);
  const [bg1, setbg1] = useState("rgba(40, 150, 174, 0.793)");
  const [bg2, setbg2] = useState("rgba(65, 65, 66, 0.993)");
  const [viewinfo, setviewinfo] = useState("1");
  const [scalestats, setscalestats] = useState(1);
  const [scaleabilities, setscaleabilities] = useState(0);
  const [opstats, setopstats] = useState(1);
  const [opabilities, setopabilities] = useState(0);
  const [numcontent,setnumcontent]=useState(0);
  const [prevnav, setprevnav]=useState(0);
  const [backgroundnav,setbackgroundnav]=useState(['rgba(9, 196, 237, 0.496)','transparent','transparent'])
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
      <div className="attackability nav" style={{backgroundColor:backgroundnav[0]}} onClick={()=>{movenav(0)}}><p className="navlabel">ATTACK</p></div>
      <div className="defenseability nav"style={{backgroundColor:backgroundnav[1]}}onClick={()=>{movenav(1)}}> <p className="navlabel">DEFENSE</p></div>
      <div className="supportability nav"style={{backgroundColor:backgroundnav[2]}}onClick={()=>{movenav(2)}}> <p className="navlabel">SUPPORT</p></div>
     
      </div>
      <div className="attackspecial1 special">
        <div className="circle">
          <img src={Fist} className="abilityimage"></img>
        </div>
      </div>

      <div className="attackspecial2 special">
        <div className="circle">
          <img src={DoubleFist} className="abilityimage"></img>
        </div>
      </div>

      <div className="attackspecial3 special">
        <div className="circle">
          <img src={Sword} className="abilityimage"></img>
        </div>
      </div>
      <p className="ability1name abname">Batarang Attack</p>
      <p className="ability2name abname">Stun Gun</p>
      <p className="ability3name abname">Knightmare</p>
    </div>,
  ];

function movenav(n){
if(prevnav!=n)
{
  
  backgroundnav[prevnav]='transparent';
  backgroundnav[n]='rgba(9, 196, 237, 0.496)';
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
  useEffect(() => {
    setTimeout(() => {
      const interval = setInterval(() => {
        setalias1((prevalias1) => {
          if (prevalias1.length < alias.length)
            return prevalias1 + alias[prevalias1.length];
          else {
            clearInterval(interval);
            return prevalias1;
          }
        });
      }, 100);
    }, 500);
  }, [delay]);
  function swapcolor(n) {
    if (n == 1) {
      if (bg1 == "rgba(65, 65, 66, 0.993)") {
        setopabilities(0);
        setscaleabilities(0);
        setTimeout(()=>{
          setnumcontent(0);
          setopstats(1);
          setscalestats(1);
        },210)
       

        let t = bg1;
        setbg1(bg2);
        setbg2(t);
      }
    }
    if (n == 2) {
      if (bg2 == "rgba(65, 65, 66, 0.993)") {
        setopstats(0);
        setscalestats(0);
        setTimeout(()=>{
          setnumcontent(1);
          setopabilities(1);
          setscaleabilities(1);
        },210)
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

  function hover(n, a, b) {
    if (a != image) {
      setimageinitial(image);

      setanimation(true);
      setimage(a);
    }

    setTimeout(() => {
      setanimation(false);
    }, 300);
    const ob = data[b];
    sethealth(ob["health"]);
    setstrength(ob["strength"]);
    setdefense(ob["defense"]);
    setspeed(ob["speed"]);
    setcombat(ob["combat"]);
    setintro(ob["introtext"]);
    setalias(ob["Alias"]);
    setorigin(ob["origin"]);
    setpower(ob["power"]);
    setname(ob["name"]);
  }

  function transformcard(index) {
    if (prev != -1) arr[prev] = false;
    arr[index] = true;
    setarr(arr);
    setprev(index);
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
              ? "moveimage 0.3s ease 0s 1 normal forwards"
              : "none",
          }}
        ></img>
        <div className="CollectionContainer">
          <div className="Collection1">
            <div
              className="_1 Card"
              onClick={() => hover(0, Punisher, "punisher")}
            >
              <div className="inmatter">
                <div className="image"></div>
              </div>
              {/* <p className="Number">1</p> */}
            </div>

            <div
              className="_2 Card"
              onClick={() => hover(1, Ironman, "ironman")}
            >
              <div className="inmatter">
                <div className="image"></div>
              </div>
              {/* <p  className="Number">2</p> */}
            </div>
            <div className="_3 Card" onClick={() => hover(2, Batman, "batman")}>
              <div className="inmatter">
                <div className="image"></div>
                <div className="intro"></div>
              </div>
              {/* <p  className="Number">3</p> */}
            </div>
            <div className="_4 Card" onClick={() => hover(3, Flash, "flash")}>
              <div className="inmatter">
                <div className="image">
                  {/* <div className="Name">
         <p className="halfup">THE FLASH </p>
         <p className="full">THE FLASH </p>
         <p className="fulldown">THE FLASH</p>
      </div> */}
                </div>
              </div>
              {/* <p  className="Number">4</p> */}
            </div>
          </div>
        </div>
        <div className="description">
          <div className="namebox">
            <div className="Title">
              <p className="name">The Batman</p>
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
                    Alias:&nbsp;<span className="det-text">{alias}</span>
                  </p>
                </div>
                <div className="originarea">
                  <p className="det-text-label">
                    Origin:&nbsp;<span className="det-text">{origin}</span>
                  </p>
                </div>
                <div className="powerarea">
                  <p className="det-text-label">
                    Power:&nbsp;<span className="det-text">{power}</span>
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
                <strong>CONFIDENTIAL</strong>: CASE FILE - THE DARK GUARDIAN
                <br></br>
                <br></br>
                <strong>Subject Name</strong>: The Dark Guardian
                <br></br>
                <br></br>
                <strong>Real Identity:</strong> Bruce Wayne
                <br></br>
                <br></br>
                <strong>Background:</strong> Bruce Wayne, known by his alias
                "The Dark Guardian," is a vigilante operating in Gotham-like
                city. His journey began with a personal tragedy: the loss of his
                parents, Thomas and Martha Wayne, who were victims of a violent
                crime. This event profoundly influenced Bruce, shaping his
                future and his vow to fight crime.
                <br></br>
                <br></br>
                <strong>Early Life and Education:</strong> Bruce grew up under
                the guardianship of his family's loyal butler, Alfred. A gifted
                child, he excelled in academics, martial arts, and investigative
                techniques. After reaching adulthood, Bruce embarked on a global
                journey, seeking training in various disciplines that would aid
                his crusade against crime.
                <br></br>
                <br></br>
                <strong>Return to His City: </strong>Upon returning, Bruce
                assumed control of Wayne Enterprises, a leading corporation in
                the city. Simultaneously, he began his nocturnal activities as
                The Dark Guardian. His goal: to dismantle the criminal
                underworld that plagued the city streets.
                <br></br>
                <br></br>
                <strong>Modus Operandi:</strong> Operating primarily at night,
                The Dark Guardian employs a combination of advanced technology,
                physical prowess, and psychological warfare. He does not possess
                superhuman powers but instead relies on his peak human strength,
                intelligence, and a vast array of gadgets and vehicles.
                <br></br>
                <br></br>
                <strong>Allies:</strong> <br></br>
                Alfred Pennyworth: Lifelong family butler and closest confidant.
                <br></br> Lucius Fox: Wayne Enterprises executive and developer
                of much of The Dark Guardian's technology. Various Protégés:
                Young individuals he has trained to aid in his mission, each
                with their unique skills and codenames.
                <br></br>
                <br></br>
                <strong>Notable Adversaries:</strong> <br></br>The Joker: A
                chaotic criminal mastermind with a penchant for elaborate
                schemes and a distinctive laugh.
                <br></br>The Riddler: A brilliant but twisted intellect,
                obsessed with puzzles and proving his superiority. Conclusion:
                <br></br>
                <br></br>
                The Dark Guardian is a pivotal figure in the fight against crime
                in his city. While his methods are often questioned, his impact
                on the city's criminal landscape is undeniable. He remains a
                symbol of fear for the criminal underworld and a controversial
                figure of justice for the citizens.
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
                <p>STATS</p>
              </div>
            </div>
            <div className="abilities">
              <div
                className="lowbarbutton"
                style={{ backgroundColor: bg2 }}
                onClick={() => swapcolor(2)}
              >
                <p>ABILITIES</p>
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
                        ? `linear-gradient(${ang}deg, transparent 0%, transparent 25%, white 50%, transparent 75%, transparent 100%)`
                        : "none",
                      transform: value
                        ? "skewX(-20deg) scale(1.25)"
                        : hoverarr[index]
                        ? "skewX(-20deg) scale(1.2)"
                        : "skewX(-20deg)",
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
                      {/* <img className="Cardeg 1"> </img> */}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ui;

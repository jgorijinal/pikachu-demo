const string = `
/*接下来我要画一个皮卡丘*/
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
*::after,
*::before {
  box-sizing: border-box;
}
body {
  background: #ffe600;
  min-height: 100vh;
}
#skin {
  position: relative;
}
.nose {
  width: 20px;
  height: 20px;
  border-color: black transparent transparent transparent;
  border-width: 10px;
  border-style: solid;
  position: relative;
  left: 50%;
  top: 200px;
  margin-left: -10px;
  z-index: 10;
}
@keyframes wave {
  0% {transform: rotate(0deg)};
  33%{transform: rotate(-10deg);}
  66%{transform: rotate(-10deg)}
  100%{transform: rotate(0deg)}
}
.nose:hover {
  animation:wave 100ms infinite linear;
}
.nose::before {
  content: "";
  width: 20px;
  height: 6px;
  background: black;
  display: block; /*6666*/
  margin-top: -16px;
  margin-left: -10px;
  border-radius: 20px 20px 0 0;
}
.eye {
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 160px;
  margin-left: -32px;
  background: #2e2e2e;
  border-radius: 100%;
  border: 1px solid black;
}
.left.eye {
  transform: translateX(-120px);
}
.right.eye {
  transform: translateX(120px);
}
.left.eye::before,
.right.eye::before {
  content: "";
  display: block;
  width: 27px;
  height: 27px;
  border: 1px solid black;
  border-radius: 100%;
  position: absolute;
  left: 12px;
  top: 2px;
  background: white;
}
.mouth {
  width: 250px;
  height: 250px;
  position: absolute;
  left: 50%;
  top: 220px;
  margin-left: -125px;
}
.lip {
  z-index: 1;
  background: #ffe600;
}
.mouth .up .lip.left {
  width: 100px;
  height: 30px;
  border: 3px solid black;
  position: relative;
  left: 25px;
  border-radius: 0 0 0 35px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: transparent;
  transform: rotate(-18deg);
}
.lip.left::before {
  content: '';
  display: block;
  width: 6px;
  height: 30px;
  position: absolute;
  right: -5px;
  bottom: 0;
  background: #ffe600;
}
.mouth .up .lip.right {
  width: 100px;
  height: 30px;
  border: 3px solid black;
  position: relative;
  left: 125px;
  top: -30px;
  border-radius: 0 0 35px 0;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: transparent;
  transform: rotate(18deg);
}
.lip.right::before {
  content: "";
  display: block;
  width: 6px;
  height: 30px;
  position: absolute;
  left: -5px;
  bottom: 0;
  background: #ffe600;
}
.down {
  width: 200px;
  height: 250px;
  position: relative;
  left: 26px;
  top: -46px;
  overflow: hidden;
}
.yuan1 {
  border: 3px solid black;
  width: 150px;
  height: 500px;
  border-radius: 50% 50% 50% 50%;
  position: absolute;
  left: 25px;
  top: -350px;
  background: #9b000a;
  overflow: hidden;
}
.yuan2 {
  width: 160px;
  height: 200px;
  position: absolute;
  left: -9px;
  bottom: -80px;
  border-radius: 50% 50% 0 0;
  background: #ff485f;
}
.face {
  width: 90px;
  height: 90px;
  border: 3px solid black;
  position: absolute;
  border-radius: 100%;
  top: 300px;
  left:50%;
  margin-left: -45px;
  background: red;
}
.left.face {
  transform: translateX(-180px);
}
.right.face {
  transform: translateX(180px);
}
`

const player = {
  n : 1,
  id: undefined,
  time: 100,
  init:()=>{
    player.play()
    player.bindEvents()
  },
  events: {
    '#btnPause':'pause',
    '#btnPlay':'play',
    '#btnSlow':'slow',
    '#btnNormal':'normal',
    '#btnFast':'fast'
  },
  bindEvents:()=>{
    for (let key in player.events) {
      if(player.events.hasOwnProperty(key)){
        const value = player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }
  },
  run : () => {
    player.n += 1;
    if (player.n > string.length) {
      window.clearInterval(player.id)
      return; //不执行下面的代码
    }
    document.querySelector('#demo1').innerHTML = string.substring(0, player.n);
    document.querySelector('#demo2').innerText = string.substring(0, player.n);
    document.querySelector('#demo2').scrollTo(0, 9999);
  },
  play:()=>{
    player.id = setInterval(player.run,player.time)
  },
  pause : ()=>{
    window.clearInterval(player.id)
  },
  slow : () => {
    player.pause()
    player.time = 200
    player.play()
  },
  normal : ()=>{
    player.pause()
    player.time = 100
    player.play()
  },
  fast : ()=>{
    window.clearInterval(player.id)
    player.time = 0
    player.play()
  }
}
player.init()


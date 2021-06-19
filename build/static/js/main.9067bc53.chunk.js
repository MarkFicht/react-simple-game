(this["webpackJsonpreact-simple-game"]=this["webpackJsonpreact-simple-game"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),a=n(4),r=n.n(a),s=(n(13),n(14),n(5)),c=n(6),l=n(2),p=n(8),d=n(7),u=(n(15),n(0)),m=function(e){var t=e.id;t.x,t.y;return Object(u.jsx)("div",{className:"tile \n        ".concat(e.playerPosition&&" player-position"," \n        ").concat(e.pointPosition&&" point-position"," \n        ").concat("right"===e.currentDirection&&e.score<20&&" player-position-right","\n        ").concat("up"===e.currentDirection&&e.score<20&&" player-position-up","\n        ").concat("left"===e.currentDirection&&e.score<20&&" player-position-left","\n        ").concat("down"===e.currentDirection&&e.score<20&&" player-position-down","\n        ").concat("right"===e.currentDirection&&e.score>=20&&" player-position-right2","\n        ").concat("up"===e.currentDirection&&e.score>=20&&" player-position-up2","\n        ").concat("left"===e.currentDirection&&e.score>=20&&" player-position-left2","\n        ").concat("down"===e.currentDirection&&e.score>=20&&" player-position-down2","\n        ")})},h=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={title:"React Simple Game",startButtonTitle:"PLAY",size:{x:7,y:7},score:0,bonusScore:20,displayScore:0,playerPosition:[1,1],pointPosition:[0,0],currentDirection:"right",inGame:!1,gameOver:!1,gameSpeed:220,timerId:null},e.componentDidMount=function(){window.addEventListener("keydown",e.keyEvent)},e.componentWillUnmount=function(){window.removeEventListener("keydown",e.keyEvent),clearInterval(e.state.timerId),e.setState({timerId:null})},e.startGame=function(){e.setState({startButtonTitle:"IN GAME",score:0,bonusScore:20,displayScore:0,playerPosition:[1,1],pointPosition:e.setPointPosition(),currentDirection:"right",inGame:!0,gameOver:!1,gameSpeed:220}),e.startMoving()},e.startMoving=function(){clearInterval(e.state.timerId),e.setState({timerId:setInterval(e.startInterval.bind(Object(l.a)(e)),e.state.gameSpeed)})},e.startInterval=function(){switch(console.log("Counting by "+e.state.gameSpeed+" ms."),e.state.currentDirection){case"right":e.moveRight();break;case"left":e.moveLeft();break;case"up":e.moveUp();break;case"down":e.moveDown();break;default:e.moveRight()}e.checkCollision(),e.state.gameOver||(e.checkPoint(),e.state.score<=20&&e.setSpeedGame())},e.moveRight=function(){var t=e.state.playerPosition;++t[0],e.setState({playerPosition:t})},e.moveLeft=function(){var t=e.state.playerPosition;--t[0],e.setState({playerPosition:t})},e.moveUp=function(){var t=e.state.playerPosition;--t[1],e.setState({playerPosition:t})},e.moveDown=function(){var t=e.state.playerPosition;++t[1],e.setState({playerPosition:t})},e.checkPoint=function(){var t=e.state,n=t.playerPosition,o=t.pointPosition,i=t.score,a=t.bonusScore,r=t.displayScore;e.setState({bonusScore:a-1}),n[0]===o[0]&&n[1]===o[1]&&e.setState({score:i+1,bonusScore:20,displayScore:r+i+a,pointPosition:e.setPointPosition()})},e.checkCollision=function(){var t=e.state,n=t.playerPosition,o=t.size;(n[0]>o.x||n[0]<1||n[1]>o.y||n[1]<1)&&(clearInterval(e.state.timerId),e.setState({score:0,bonusScore:20,startButtonTitle:"PLAY AGAIN",playerPosition:[1,1],pointPosition:[0,0],inGame:!1,gameOver:!0,gameSpeed:220,timerId:null}),alert("GAME OVER. YOUR SCORE: ".concat(e.state.displayScore)))},e.setSpeedGame=function(){var t=e.state.score;3===t?(e.setState({gameSpeed:200}),e.startMoving()):8===t?(e.setState({gameSpeed:185}),e.startMoving()):15===t?(e.setState({gameSpeed:160}),e.startMoving()):20===t&&(e.setState({gameSpeed:145}),e.startMoving())},e.setPointPosition=function(){var t=e.state.pointPosition,n=[];do{n=[Math.floor(Math.random()*e.state.size.x)+1,Math.floor(Math.random()*e.state.size.x)+1],console.log(" => ",n)}while(n[0]===t[0]&&n[1]===t[1]);return n},e.onChangeSize=function(t){var n=t.target.value.split("x");e.setState({size:{x:1*n[0],y:1*n[1]}})},e.keyEvent=function(t){87===t.keyCode|38===t.keyCode?e.setState({currentDirection:"up"}):83===t.keyCode|40===t.keyCode?e.setState({currentDirection:"down"}):65===t.keyCode|37===t.keyCode?e.setState({currentDirection:"left"}):68===t.keyCode|39===t.keyCode&&e.setState({currentDirection:"right"})},e}return Object(c.a)(n,[{key:"render",value:function(){for(var e=this,t=this.state,n=t.size,o=t.playerPosition,i=t.pointPosition,a=t.currentDirection,r=t.score,s=[],c=1;c<=n.y;c++)for(var l=1;l<=n.x;l++)s.push(Object(u.jsx)(m,{id:{x:l,y:c},playerPosition:o[0]===l&&o[1]===c,pointPosition:i[0]===l&&i[1]===c,currentDirection:a,score:r},"".concat(l,"/").concat(c)));return Object(u.jsxs)("main",{className:"board-wrapper",children:[Object(u.jsx)("header",{className:"header-wrapper",children:this.state.title}),Object(u.jsxs)("section",{className:"score-wrapper",children:["Score: ",this.state.displayScore]}),Object(u.jsxs)("section",{className:"game-speed-wrapper",children:["Game speed: ","".concat(this.state.gameSpeed,"ms")]}),Object(u.jsx)("section",{className:"tile-board-wrapper ".concat(10===n.x&&10===n.y?"tile-board-size-10":""),children:s}),Object(u.jsxs)("section",{className:"button-wrapper",children:[Object(u.jsx)("button",{onClick:function(t){return e.startGame()},disabled:this.state.inGame,children:this.state.startButtonTitle}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",value:"7x7",disabled:this.state.inGame,checked:7===n.x&&7===n.y,onChange:this.onChangeSize}),"7 x 7"]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",value:"10x10",disabled:this.state.inGame,checked:10===n.x&&10===n.y,onChange:this.onChangeSize}),"10 x 10"]})]})]})]})}}]),n}(i.a.Component);var y=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(h,{})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),o(e),i(e),a(e),r(e)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),v()}},[[17,1,2]]]);
//# sourceMappingURL=main.9067bc53.chunk.js.map
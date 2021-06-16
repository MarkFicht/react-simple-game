(this["webpackJsonpreact-simple-game"]=this["webpackJsonpreact-simple-game"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o),a=n(3),r=n.n(a),s=(n(12),n(13),n(4)),c=n(5),l=n(7),p=n(6),u=(n(14),n(0)),d=function(t){var e=t.id,n=e.x,o=e.y;return Object(u.jsx)("div",{className:"tile ".concat(t.playerPosition&&"player-position"," ").concat(t.pointPosition&&"point-position"),children:"".concat(n,"/").concat(o)})},m=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={title:"React Simple Game",size:{x:10,y:10},score:0,playerPosition:[1,1],pointPosition:[0,0],currentDirection:null,inGame:!1,gameOver:!1,timerId:null},t.componentDidMount=function(){window.addEventListener("keydown",t.keyEvent)},t.componentWillUnmount=function(){window.removeEventListener("keydown",t.keyEvent),clearInterval(t.state.timerId),t.setState({timerId:null})},t.startGame=function(){t.setState({inGame:!0,gameOver:!1,score:0,playerPosition:[1,1],pointPosition:[Math.floor(10*Math.random())+1,Math.floor(10*Math.random())+1],currentDirection:null}),t.startMoving()},t.startMoving=function(){t.setState({timerId:setInterval((function(){switch(console.log("Counting by 500ms"),t.state.currentDirection){case"right":t.moveRight();break;case"left":t.moveLeft();break;case"up":t.moveUp();break;case"down":t.moveDown();break;default:t.moveRight()}t.checkCollision(),t.checkPoint()}),500)})},t.moveRight=function(){var e=t.state.playerPosition;++e[1],t.setState({playerPosition:e})},t.moveLeft=function(){var e=t.state.playerPosition;--e[1],t.setState({playerPosition:e})},t.moveUp=function(){var e=t.state.playerPosition;--e[0],t.setState({playerPosition:e})},t.moveDown=function(){var e=t.state.playerPosition;++e[0],t.setState({playerPosition:e})},t.checkPoint=function(){var e=t.state,n=e.playerPosition,o=e.pointPosition,i=e.score;n[0]===o[0]&&n[1]===o[1]&&t.setState({score:i+1,pointPosition:[Math.floor(10*Math.random())+1,Math.floor(10*Math.random())+1]})},t.checkCollision=function(){var e=t.state,n=e.playerPosition,o=e.size;(n[0]>o.x||n[0]<1||n[1]>o.y||n[1]<1)&&(clearInterval(t.state.timerId),t.setState({gameOver:!0,inGame:!1,timerId:null}),alert("GAME OVER. YOUR SCORE: ".concat(t.state.score)))},t.keyEvent=function(e){87===e.keyCode|38===e.keyCode?t.setState({currentDirection:"up"}):83===e.keyCode|40===e.keyCode?t.setState({currentDirection:"down"}):65===e.keyCode|37===e.keyCode?t.setState({currentDirection:"left"}):68===e.keyCode|39===e.keyCode&&t.setState({currentDirection:"right"})},t}return Object(c.a)(n,[{key:"render",value:function(){for(var t=this,e=[],n=1;n<=this.state.size.x;n++)for(var o=1;o<=this.state.size.y;o++)e.push(Object(u.jsx)(d,{id:{x:n,y:o},playerPosition:this.state.playerPosition[0]===n&&this.state.playerPosition[1]===o,pointPosition:this.state.pointPosition[0]===n&&this.state.pointPosition[1]===o},"".concat(n,"/").concat(o)));return Object(u.jsxs)("main",{className:"board-wrapper",children:[Object(u.jsx)("header",{className:"header-wrapper",children:this.state.title}),Object(u.jsxs)("section",{className:"score-wrapper",children:["SCORE: ",this.state.score]}),Object(u.jsx)("section",{className:"tile-board-wrapper",children:e}),Object(u.jsx)("section",{className:"button-wrapper",children:Object(u.jsx)("button",{onClick:function(e){return t.startGame()},disabled:this.state.inGame,children:"Play Again"})})]})}}]),n}(i.a.Component);var h=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(m,{})})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,o=e.getFID,i=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),o(t),i(t),a(t),r(t)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.41c7ac1a.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(36)},21:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);n(21);var a=n(0),i=n.n(a),r=n(12),o=n.n(r),u=n(13),s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function c(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var l,v,d=n(9),h=n(4),f=n(3);!function(e){e[e.Up=0]="Up",e[e.Down=1]="Down",e[e.Left=2]="Left",e[e.Right=3]="Right"}(l||(l={})),function(e){e[e.Input=0]="Input",e[e.Note=1]="Note",e[e.Guess=2]="Guess"}(v||(v={}));var p,m="CHANGE_DIFFICULTY",y="NEW_GAME",k="VALIDATE_SOLUTION",g="TOGGLE_CELLs",w="SET_DIGIT",b="REMOVE_DIGIT",C="NAVIGATE_CELLS",E="TOGGLE_NOTE_MODE",O="UNDO",S="REDO",j=n(10),N=n(1),D=n(2),A=[!1,!1,!1,!1,!1,!1,!1,!1,!1],R=function(){function e(t){Object(N.a)(this,e),this.value=void 0,this.valid=void 0,this.solution=void 0,this.row=void 0,this.column=void 0,this.given=void 0,this.active=void 0,this.notes=void 0,this.guess=void 0,this.value=t?t.value:null,this.solution=t?t.solution:-1,this.row=t?t.row:-1,this.column=t?t.column:-1,this.given=!!t&&t.given,this.active=!!t&&t.active,this.valid=!t||t.valid,this.notes=t?t.notes:[].concat(A),this.guess=!!t&&t.guess}return Object(D.a)(e,[{key:"getSolution",value:function(){return this.solution}},{key:"getValue",value:function(){return this.value}},{key:"getRow",value:function(){return this.row}},{key:"getColumn",value:function(){return this.column}},{key:"isActive",value:function(){return this.active}},{key:"getBlock",value:function(){return this.row<=3?this.calculateBlock(0):this.row>=4&&this.row<=6?this.calculateBlock(1):this.calculateBlock(2)}},{key:"calculateBlock",value:function(e){return this.column<=3?e+1:this.column>=4&&this.column<=6?e+2:e+3}},{key:"isGiven",value:function(){return this.given}},{key:"validate",value:function(){var t=new e(this);return t.valid=null===this.value||this.value===this.solution,t}},{key:"isValid",value:function(){return this.valid}},{key:"setActive",value:function(t){var n=new e(this);return n.active=t,n}},{key:"setDigit",value:function(t,n){if(!this.active||this.given)return this;var a=new e(this);return n===v.Note?a.notes=this.notes.map(function(e,n){return n===t-1?!e:e}):a.guess?a.value=t:a.value=this.value===t?null:t,a.guess=n===v.Guess,a.valid=!0,a}},{key:"removeDigit",value:function(){if(!this.active)return this;var t=new e(this);return t.notes=[].concat(A),t.value=null,t.valid=!0,t}},{key:"isSolved",value:function(){return this.value===this.solution}},{key:"getNotes",value:function(){return this.notes}},{key:"isGuess",value:function(){return this.guess}}],[{key:"create",value:function(t,n,a,i){var r=new e;return r.solution=t,r.row=n,r.column=a,r.given=i,r.value=i?t:null,r}}]),e}(),I=function(){function e(t){Object(N.a)(this,e),this.cells=void 0,this.index=void 0,this.active=void 0,this.index=t?t.index:-1,this.active=!!t&&t.active,this.cells=t?t.cells:[]}return Object(D.a)(e,[{key:"getCells",value:function(){return this.cells}},{key:"validate",value:function(){var t=new e(this);return t.cells=this.cells.map(function(e){return e.validate()}),t}},{key:"getIndex",value:function(){return this.index}},{key:"toggleCell",value:function(t,n){if(this.index!==t&&!this.active)return this;var a=new e(this);return this.active?this.index===t?a.cells=this.cells.map(function(e){return e.setActive(!e.isActive()&&e.getColumn()===n)}):(a.active=!1,a.cells=this.cells.map(function(e){return e.isActive()?e.setActive(!1):e})):this.index===t&&(a.active=!0,a.cells=this.cells.map(function(e){return e.getColumn()===n?e.setActive(!0):e})),a}},{key:"isActive",value:function(){return this.active}},{key:"setDigit",value:function(t,n){if(!this.active)return this;var a=new e(this);return a.cells=this.cells.map(function(e){return e.setDigit(t,n)}),a}},{key:"removeDigit",value:function(){if(!this.active)return this;var t=new e(this);return t.cells=this.cells.map(function(e){return e.removeDigit()}),t}}],[{key:"create",value:function(t,n){var a=new e;return a.cells=Object(h.a)(t.map(function(e,t){var a=Object(j.a)(e,2),i=a[0],r=a[1];return R.create(i,n,t+1,r)})),a.index=n,a}}]),e}();!function(e){e[e.VeryEasy=30]="VeryEasy",e[e.Easy=36]="Easy",e[e.Normal=42]="Normal",e[e.Hard=48]="Hard",e[e.VeryHard=54]="VeryHard",e[e.Insane=60]="Insane"}(p||(p={}));var M=[[3,6,1,7,2,5,9,4,8],[5,8,7,9,6,4,2,1,3],[4,9,2,8,3,1,6,5,7],[6,3,8,2,5,9,4,7,1],[1,7,4,6,8,3,5,9,2],[2,5,9,1,4,7,8,3,6],[7,4,6,3,9,2,1,8,5],[9,2,3,5,1,8,7,6,4],[8,1,5,4,7,6,3,2,9]],z=function(){function e(t){Object(N.a)(this,e),this.difficulty=void 0,this.data=void 0,this.rows=void 0,this.activeCell=void 0,this.createdAt=void 0,this.difficulty=t?t.difficulty:p.Easy,this.data=t?t.data:[],this.rows=t?t.rows:[],this.activeCell=t?t.activeCell:{row:-1,column:-1},this.createdAt=t?t.createdAt:0}return Object(D.a)(e,[{key:"getRows",value:function(){return this.rows}},{key:"generateSudoku",value:function(){for(var e=0;e<42e4;e++)this.moveRowOrColumn();this.removeValues(),this.rows=this.data.map(function(e,t){return I.create(e,t+1)})}},{key:"removeValues",value:function(){for(var e=this.difficulty;e;){var t=Math.floor(9*Math.random()),n=Math.floor(9*Math.random()),a=Object(j.a)(this.data[t][n],2),i=a[0];a[1]&&(this.data[t][n]=[i,!1],--e)}}},{key:"moveRowOrColumn",value:function(){var e=this.getFromAndTo(),t=Object(j.a)(e,2),n=t[0],a=t[1];Math.round(Math.random())?this.moveColumn(n,a):this.moveRow(n,a)}},{key:"getFromAndTo",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;e=-1===e?Math.floor(3*Math.random()):e;var t=Math.floor(3*Math.random());if(t===e)return this.getFromAndTo(e);var n=Math.floor(3*Math.random());return[3*n+e,3*n+t]}},{key:"moveRow",value:function(e,t){var n=this.data[t];this.data[t]=this.data[e],this.data[e]=n}},{key:"moveColumn",value:function(e,t){this.data.forEach(function(n){var a=n[t];n[t]=n[e],n[e]=a})}},{key:"validate",value:function(){var t=new e(this);return t.rows=this.rows.map(function(e){return e.validate()}),t}},{key:"activateCell",value:function(t,n){var a=new e(this);return a.activeCell={row:t,column:n},a.rows=this.rows.map(function(e){return e.toggleCell(t,n)}),a}},{key:"setDigit",value:function(t,n){var a=new e(this);return a.rows=this.rows.map(function(e){return e.setDigit(t,n)}),a}},{key:"removeDigit",value:function(){var t=new e(this);return t.rows=this.rows.map(function(e){return e.removeDigit()}),t}},{key:"getSolvedNumbers",value:function(){for(var e=this.rows.reduce(function(e,t){return e.concat(t.getCells().map(function(e){return e.getValue()||0}),[])},[]),t=[],n=function(n){9===e.filter(function(e){return e===n}).length&&t.push(n)},a=1;a<=9;a++)n(a);return t}},{key:"navigate",value:function(e){var t=function(e){return 9===e?1:e+1},n=function(e){return 1===e?9:e-1};switch(e){case l.Up:this.activeCell.row=n(this.activeCell.row);break;case l.Down:this.activeCell.row=t(this.activeCell.row);break;case l.Right:this.activeCell.column=t(this.activeCell.column);break;case l.Left:this.activeCell.column=n(this.activeCell.column)}return this.activateCell(this.activeCell.row,this.activeCell.column)}},{key:"isSolved",value:function(){return this.rows.every(function(e){return e.getCells().every(function(e){return e.isSolved()})})}},{key:"getCreationTimestamp",value:function(){return this.createdAt}},{key:"isDigitSolved",value:function(e){return this.rows.every(function(t){return t.getCells().some(function(t){return t.getValue()===e&&t.isSolved()})})}}],[{key:"create",value:function(t){var n=new e;return n.difficulty=t,n.createdAt=Date.now(),n.data=M.map(function(e){return e.map(function(e){return[e,!0]})}),n.generateSudoku(),n}}]),e}(),x=function(e){var t=window.localStorage.getItem("DIFFICULTY");if(!t)return e;return+t}(p.Easy),G={difficulty:x,sudoku:{past:[],current:z.create(x).activateCell(1,1),future:[]},mode:v.Input};var V=Object(d.b)({game:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m:return e=n.payload,window.localStorage.setItem("DIFFICULTY",e.toString()),Object(f.a)({},t,{difficulty:n.payload,sudoku:{past:[],current:z.create(n.payload).activateCell(1,1),future:[]}});case y:return Object(f.a)({},t,{sudoku:{past:[],current:z.create(t.difficulty),future:[]}});case k:return Object(f.a)({},t,{sudoku:Object(f.a)({},t.sudoku,{current:t.sudoku.current.validate()})});case g:return Object(f.a)({},t,{sudoku:Object(f.a)({},t.sudoku,{current:t.sudoku.current.activateCell(n.payload.row,n.payload.column)})});case w:return Object(f.a)({},t,{sudoku:{past:[].concat(Object(h.a)(t.sudoku.past),[t.sudoku.current]),current:t.sudoku.current.setDigit(n.payload.digit,t.mode),future:[]}});case b:return Object(f.a)({},t,{sudoku:{past:[].concat(Object(h.a)(t.sudoku.past),[t.sudoku.current]),current:t.sudoku.current.removeDigit(),future:[]}});case C:return Object(f.a)({},t,{sudoku:Object(f.a)({},t.sudoku,{current:t.sudoku.current.navigate(n.payload.direction)})});case E:return Object(f.a)({},t,{mode:n.payload.mode});case O:if(!t.sudoku.past.length)return t;var a=t.sudoku.past.slice(-1)[0];return Object(f.a)({},t,{sudoku:{past:t.sudoku.past.slice(0,-1),current:a,future:[].concat(Object(h.a)(t.sudoku.future),[t.sudoku.current])}});case S:if(!t.sudoku.future.length)return t;var i=t.sudoku.future.slice(-1)[0];return Object(f.a)({},t,{sudoku:{past:[].concat(Object(h.a)(t.sudoku.past),[t.sudoku.current]),current:i,future:t.sudoku.future.slice(0,-1)}});default:return t}}});var T=n(6),L=n(5),U=n(7),H=(n(30),n(31),n(32),n(33),function(e){function t(){return Object(N.a)(this,t),Object(T.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(U.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"SudokuCell-container ".concat(this.calculateClasses()),style:this.calculateStyles(),ref:"cell",onClick:function(){return e.handleClick()}},this.renderContent())}},{key:"renderContent",value:function(){var e=this.props.cell.getValue();if(e)return i.a.createElement("span",{className:"SudokuCell-value ".concat(this.props.cell.isGuess()?"guess":"")},e);var t=this.props.cell.getNotes(),n="".concat(.76*Math.ceil(this.props.size/3),"px");return i.a.createElement("div",{className:"SudokuCell-notes"},t.map(function(e,t){return i.a.createElement("span",{className:"SudokuCell-note",key:t,style:{fontSize:n}},e?t+1:"")}))}},{key:"handleClick",value:function(){this.props.toggleCell(this.props.cell.getRow(),this.props.cell.getColumn())}},{key:"calculateStyles",value:function(){var e="".concat(this.props.size,"px");return{height:e,width:e,fontSize:"".concat(Math.floor(.68*this.props.size),"px")}}},{key:"calculateClasses",value:function(){var e=this.props.cell,t=e.getRow(),n={"even-block-cell":e.getBlock()%2===0,"given-cell":e.isGiven(),"invalid-cell":!0!==e.isValid(),"active-cell":e.isActive()};return Object(h.a)(Array(10)).forEach(function(e,a){return n["row-".concat(a,"-cell")]=t===a}),Object.keys(n).filter(function(e){return n[e]}).join(" ")}}]),t}(a.Component)),F=function(e){function t(){return Object(N.a)(this,t),Object(T.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(U.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"SudokuRow-container",style:this.getRowStyle()},this.renderRow())}},{key:"getRowStyle",value:function(){return{width:"".concat(this.props.rowSize,"px"),height:"".concat(this.getCellSize(),"px")}}},{key:"renderRow",value:function(){var e=this;return this.props.row.getCells().map(function(t,n){return i.a.createElement(H,Object.assign({},e.props,{cell:t,size:e.getCellSize(),key:n}))})}},{key:"getCellSize",value:function(){return this.props.rowSize/9}}]),t}(a.Component),B=(n(34),100),W=function(e){var t=function(t){e.mode===t?e.setMode(v.Input):e.setMode(t)},n=function(t){return e.mode===t?"active":""};return e.sudoku.isSolved()?null:i.a.createElement("div",{className:"Input-container",style:{height:"".concat(B,"px")}},i.a.createElement("div",{className:"Input-numbers"},Object(h.a)(Array(10).keys()).slice(1).map(function(t){return i.a.createElement("button",{key:t,onClick:function(){return e.setDigit(t)},className:e.sudoku.isDigitSolved(t)?"solved":""},t)})),i.a.createElement("div",{className:"Input-utils"},i.a.createElement("button",{disabled:!e.past.length,onClick:function(){return e.undo()}},"Undo"),i.a.createElement("button",{className:n(v.Note),onClick:function(){return t(v.Note)}},"Note"),i.a.createElement("button",{onClick:function(){return e.removeDigit()}},"Clear"),i.a.createElement("button",{className:n(v.Guess),onClick:function(){return t(v.Guess)}},"Guess"),i.a.createElement("button",{disabled:!e.future.length,onClick:function(){return e.redo()}},"Redo")))},_=function(e){function t(e){var n;return Object(N.a)(this,t),(n=Object(T.a)(this,Object(L.a)(t).call(this,e))).containerRef=void 0,n.setCellSize=function(){var e=n.containerRef.current;if(e){var t=e.getBoundingClientRect(),a=t.height-B,i=t.width,r=a<i?a:i,o=9*Math.floor(r/9);n.setState({rowSize:o})}else requestAnimationFrame(function(){n.setCellSize()})},n.containerRef=i.a.createRef(),n.state={rowSize:0},n}return Object(U.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Sudoku-container",ref:this.containerRef,style:this.calculateStyles()},this.renderRows(),this.renderSolvedOverlay())}},{key:"calculateStyles",value:function(){return this.state.rowSize?{height:"".concat(this.state.rowSize,"px")}:{}}},{key:"componentDidMount",value:function(){this.setCellSize()}},{key:"renderRows",value:function(){var e=this;return this.state.rowSize?this.props.sudoku.getRows().map(function(t,n){return i.a.createElement(F,Object.assign({row:t,key:n,rowSize:e.state.rowSize},e.props))}):null}},{key:"renderSolvedOverlay",value:function(){var e=this;if(!this.props.sudoku.isSolved())return null;var t=this.getDifficultyText(),n=Date.now()-this.props.sudoku.getCreationTimestamp();return i.a.createElement("div",{className:"Sudoku-solved",style:{width:"".concat(this.state.rowSize,"px"),height:"".concat(this.state.rowSize,"px"),marginLeft:"-".concat(this.state.rowSize/2,"px")}},i.a.createElement("div",{className:"Sudoku-solved-message"},i.a.createElement("h1",null,"You solved ",t," puzzle!"),i.a.createElement("p",null,"Ellapsed time: ",i.a.createElement("span",{className:"Sudoku-ellapsed"},this.formatMillisecons(n))),i.a.createElement("button",{onClick:function(){return e.props.createNewGame()}},"Start a new game")))}},{key:"formatMillisecons",value:function(e){var t=function(e){return Math.round(e).toString().padStart(2,"0")},n=t(e/1e3%60),a=t(e/6e4%60),i=t(e/36e5%24);return"".concat(i,":").concat(a,":").concat(n)}},{key:"getDifficultyText",value:function(){switch(this.props.difficulty){case p.VeryEasy:return"a very easy";case p.Easy:return"an easy";case p.Normal:return"a normal";case p.Hard:return"a hard";case p.VeryHard:return"a very hard";case p.Insane:return"an insane";default:return"an unknown"}}}]),t}(a.Component),Y=(n(35),[{label:"Very Easy",value:p.VeryEasy},{label:"Easy",value:p.Easy},{label:"Normal",value:p.Normal},{label:"Hard",value:p.Hard},{label:"Very Hard",value:p.VeryHard},{label:"Insane",value:p.Insane}]),K=function(e){return i.a.createElement("select",{className:"Options-difficulty",value:e.difficulty,onChange:function(t){var n=+t.target.value;e.changeDifficulty(n)}},Y.map(function(e){return i.a.createElement("option",{value:e.value,key:e.value},e.label)}))},J=function(e){return i.a.createElement("div",{className:"Options-container"},i.a.createElement("button",{className:"Options-new",onClick:e.createNewGame},"New Game"),i.a.createElement("button",{className:"Options-validate",onClick:e.validateSolution},"Validate"),i.a.createElement(K,e))};var P=function(e){function t(){var e,n;Object(N.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(T.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(i)))).handleKeyboard=function(e){var t=e.which;t>=49&&t<=57?n.props.setDigit(t-48):8===t||2===t?n.props.removeDigit():37===t?n.props.navigateCells(l.Left):38===t?n.props.navigateCells(l.Up):39===t?n.props.navigateCells(l.Right):40===t?n.props.navigateCells(l.Down):32===t?n.props.setMode(n.props.mode!==v.Note?v.Note:v.Input):27===t&&n.props.setMode(v.Input)},n}return Object(U.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("h1",null,"Sudoku")),i.a.createElement(J,this.props),i.a.createElement("div",{className:"App-content"},i.a.createElement(_,this.props),i.a.createElement(W,this.props)))}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyboard)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyboard)}}]),t}(a.Component),q=Object(u.b)(function(e){return{sudoku:e.game.sudoku.current,past:e.game.sudoku.past,future:e.game.sudoku.future,difficulty:e.game.difficulty,mode:e.game.mode}},{changeDifficulty:function(e){return{type:m,payload:e}},createNewGame:function(){return{type:y}},validateSolution:function(){return{type:k}},toggleCell:function(e,t){return{type:g,payload:{row:e,column:t}}},setDigit:function(e){return{type:w,payload:{digit:e}}},removeDigit:function(){return{type:b}},navigateCells:function(e){return{type:C,payload:{direction:e}}},setMode:function(e){return{type:E,payload:{mode:e}}},undo:function(){return{type:O}},redo:function(){return{type:S}}})(P),$=Object(d.c)(V);o.a.render(i.a.createElement(function(){return i.a.createElement(u.a,{store:$},i.a.createElement(q,null))},null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/sudoku",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/sudoku","/service-worker.js");s?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):c(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):c(t,e)})}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.3395c0e2.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{194:function(e,t,n){e.exports=n(327)},195:function(e,t,n){},205:function(e,t,n){},327:function(e,t,n){"use strict";n.r(t);n(195);var a=n(0),r=n.n(a),o=n(22),i=n.n(o),u=n(65),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(204);var s,d,f=n(46),h=n(27),v=n(20);!function(e){e[e.Up=0]="Up",e[e.Down=1]="Down",e[e.Left=2]="Left",e[e.Right=3]="Right"}(s||(s={})),function(e){e[e.Input=0]="Input",e[e.Note=1]="Note",e[e.Guess=2]="Guess"}(d||(d={}));var p,m="CHANGE_DIFFICULTY",y="NEW_GAME",g="VALIDATE_SOLUTION",k="TOGGLE_CELLs",b="SET_DIGIT",w="REMOVE_DIGIT",E="NAVIGATE_CELLS",O="TOGGLE_NOTE_MODE",C="UNDO",j="REDO",S=n(47),D=n(15),N=n(16),R=[!1,!1,!1,!1,!1,!1,!1,!1,!1],A=function(){function e(t){Object(D.a)(this,e),this.value=void 0,this.valid=void 0,this.solution=void 0,this.row=void 0,this.column=void 0,this.given=void 0,this.active=void 0,this.notes=void 0,this.guess=void 0,this.value=t?t.value:null,this.solution=t?t.solution:-1,this.row=t?t.row:-1,this.column=t?t.column:-1,this.given=!!t&&t.given,this.active=!!t&&t.active,this.valid=!t||t.valid,this.notes=t?t.notes:[].concat(R),this.guess=!!t&&t.guess}return Object(N.a)(e,[{key:"getSolution",value:function(){return this.solution}},{key:"getValue",value:function(){return this.value}},{key:"getRow",value:function(){return this.row}},{key:"getColumn",value:function(){return this.column}},{key:"isActive",value:function(){return this.active}},{key:"getBlock",value:function(){return this.row<=3?this.calculateBlock(0):this.row>=4&&this.row<=6?this.calculateBlock(1):this.calculateBlock(2)}},{key:"calculateBlock",value:function(e){return this.column<=3?e+1:this.column>=4&&this.column<=6?e+2:e+3}},{key:"isGiven",value:function(){return this.given}},{key:"validate",value:function(){var t=new e(this);return t.valid=null===this.value||this.value===this.solution,t}},{key:"isValid",value:function(){return this.valid}},{key:"setActive",value:function(t){var n=new e(this);return n.active=t,n}},{key:"setDigit",value:function(t,n){if(!this.active||this.given)return this;var a=new e(this);return n===d.Note?a.notes=this.notes.map(function(e,n){return n===t-1?!e:e}):a.guess?a.value=t:a.value=this.value===t?null:t,a.guess=n===d.Guess,a.valid=!0,a}},{key:"removeDigit",value:function(){if(!this.active)return this;var t=new e(this);return t.notes=[].concat(R),t.value=null,t.valid=!0,t}},{key:"isSolved",value:function(){return this.value===this.solution}},{key:"getNotes",value:function(){return this.notes}},{key:"isGuess",value:function(){return this.guess}}],[{key:"create",value:function(t,n,a,r){var o=new e;return o.solution=t,o.row=n,o.column=a,o.given=r,o.value=r?t:null,o}}]),e}(),x=function(){function e(t){Object(D.a)(this,e),this.cells=void 0,this.index=void 0,this.active=void 0,this.index=t?t.index:-1,this.active=!!t&&t.active,this.cells=t?t.cells:[]}return Object(N.a)(e,[{key:"getCells",value:function(){return this.cells}},{key:"validate",value:function(){var t=new e(this);return t.cells=this.cells.map(function(e){return e.validate()}),t}},{key:"getIndex",value:function(){return this.index}},{key:"toggleCell",value:function(t,n){if(this.index!==t&&!this.active)return this;var a=new e(this);return this.active?this.index===t?a.cells=this.cells.map(function(e){return e.setActive(!e.isActive()&&e.getColumn()===n)}):(a.active=!1,a.cells=this.cells.map(function(e){return e.isActive()?e.setActive(!1):e})):this.index===t&&(a.active=!0,a.cells=this.cells.map(function(e){return e.getColumn()===n?e.setActive(!0):e})),a}},{key:"isActive",value:function(){return this.active}},{key:"setDigit",value:function(t,n){if(!this.active)return this;var a=new e(this);return a.cells=this.cells.map(function(e){return e.setDigit(t,n)}),a}},{key:"removeDigit",value:function(){if(!this.active)return this;var t=new e(this);return t.cells=this.cells.map(function(e){return e.removeDigit()}),t}}],[{key:"create",value:function(t,n){var a=new e;return a.cells=Object(h.a)(t.map(function(e,t){var a=Object(S.a)(e,2),r=a[0],o=a[1];return A.create(r,n,t+1,o)})),a.index=n,a}}]),e}();!function(e){e[e.VeryEasy=30]="VeryEasy",e[e.Easy=36]="Easy",e[e.Normal=42]="Normal",e[e.Hard=48]="Hard",e[e.VeryHard=54]="VeryHard",e[e.Insane=60]="Insane"}(p||(p={}));var B=[[3,6,1,7,2,5,9,4,8],[5,8,7,9,6,4,2,1,3],[4,9,2,8,3,1,6,5,7],[6,3,8,2,5,9,4,7,1],[1,7,4,6,8,3,5,9,2],[2,5,9,1,4,7,8,3,6],[7,4,6,3,9,2,1,8,5],[9,2,3,5,1,8,7,6,4],[8,1,5,4,7,6,3,2,9]],I=function(){function e(t){Object(D.a)(this,e),this.difficulty=void 0,this.data=void 0,this.rows=void 0,this.activeCell=void 0,this.createdAt=void 0,this.difficulty=t?t.difficulty:p.Easy,this.data=t?t.data:[],this.rows=t?t.rows:[],this.activeCell=t?t.activeCell:{row:-1,column:-1},this.createdAt=t?t.createdAt:0}return Object(N.a)(e,[{key:"getRows",value:function(){return this.rows}},{key:"generateSudoku",value:function(){for(var e=0;e<42e4;e++)this.moveRowOrColumn();this.removeValues(),this.rows=this.data.map(function(e,t){return x.create(e,t+1)})}},{key:"removeValues",value:function(){for(var e=this.difficulty;e;){var t=Math.floor(9*Math.random()),n=Math.floor(9*Math.random()),a=Object(S.a)(this.data[t][n],2),r=a[0];a[1]&&(this.data[t][n]=[r,!1],--e)}}},{key:"moveRowOrColumn",value:function(){var e=this.getFromAndTo(),t=Object(S.a)(e,2),n=t[0],a=t[1];Math.round(Math.random())?this.moveColumn(n,a):this.moveRow(n,a)}},{key:"getFromAndTo",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;e=-1===e?Math.floor(3*Math.random()):e;var t=Math.floor(3*Math.random());if(t===e)return this.getFromAndTo(e);var n=Math.floor(3*Math.random());return[3*n+e,3*n+t]}},{key:"moveRow",value:function(e,t){var n=this.data[t];this.data[t]=this.data[e],this.data[e]=n}},{key:"moveColumn",value:function(e,t){this.data.forEach(function(n){var a=n[t];n[t]=n[e],n[e]=a})}},{key:"validate",value:function(){var t=new e(this);return t.rows=this.rows.map(function(e){return e.validate()}),t}},{key:"activateCell",value:function(t,n){var a=new e(this);return a.activeCell={row:t,column:n},a.rows=this.rows.map(function(e){return e.toggleCell(t,n)}),a}},{key:"setDigit",value:function(t,n){var a=new e(this);return a.rows=this.rows.map(function(e){return e.setDigit(t,n)}),a}},{key:"removeDigit",value:function(){var t=new e(this);return t.rows=this.rows.map(function(e){return e.removeDigit()}),t}},{key:"getSolvedNumbers",value:function(){for(var e=this.rows.reduce(function(e,t){return e.concat(t.getCells().map(function(e){return e.getValue()||0}),[])},[]),t=[],n=function(n){9===e.filter(function(e){return e===n}).length&&t.push(n)},a=1;a<=9;a++)n(a);return t}},{key:"navigate",value:function(e){var t=function(e){return 9===e?1:e+1},n=function(e){return 1===e?9:e-1};switch(e){case s.Up:this.activeCell.row=n(this.activeCell.row);break;case s.Down:this.activeCell.row=t(this.activeCell.row);break;case s.Right:this.activeCell.column=t(this.activeCell.column);break;case s.Left:this.activeCell.column=n(this.activeCell.column)}return this.activateCell(this.activeCell.row,this.activeCell.column)}},{key:"isSolved",value:function(){return this.rows.every(function(e){return e.getCells().every(function(e){return e.isSolved()})})}},{key:"getCreationTimestamp",value:function(){return this.createdAt}},{key:"isDigitSolved",value:function(e){return this.rows.every(function(t){return t.getCells().some(function(t){return t.getValue()===e&&t.isSolved()})})}}],[{key:"create",value:function(t){var n=new e;return n.difficulty=t,n.createdAt=Date.now(),n.data=B.map(function(e){return e.map(function(e){return[e,!0]})}),n.generateSudoku(),n}}]),e}(),T=function(e){var t=window.localStorage.getItem("DIFFICULTY");if(!t)return e;return+t}(p.Easy),M={difficulty:T,sudoku:{past:[],current:I.create(T).activateCell(1,1),future:[]},mode:d.Input};var L=Object(f.b)({game:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m:return e=n.payload,window.localStorage.setItem("DIFFICULTY",e.toString()),Object(v.a)({},t,{difficulty:n.payload,sudoku:{past:[],current:I.create(n.payload).activateCell(1,1),future:[]}});case y:return Object(v.a)({},t,{sudoku:{past:[],current:I.create(t.difficulty),future:[]}});case g:return Object(v.a)({},t,{sudoku:Object(v.a)({},t.sudoku,{current:t.sudoku.current.validate()})});case k:return Object(v.a)({},t,{sudoku:Object(v.a)({},t.sudoku,{current:t.sudoku.current.activateCell(n.payload.row,n.payload.column)})});case b:return Object(v.a)({},t,{sudoku:{past:[].concat(Object(h.a)(t.sudoku.past),[t.sudoku.current]),current:t.sudoku.current.setDigit(n.payload.digit,t.mode),future:[]}});case w:return Object(v.a)({},t,{sudoku:{past:[].concat(Object(h.a)(t.sudoku.past),[t.sudoku.current]),current:t.sudoku.current.removeDigit(),future:[]}});case E:return Object(v.a)({},t,{sudoku:Object(v.a)({},t.sudoku,{current:t.sudoku.current.navigate(n.payload.direction)})});case O:return Object(v.a)({},t,{mode:n.payload.mode});case C:if(!t.sudoku.past.length)return t;var a=t.sudoku.past.slice(-1)[0];return Object(v.a)({},t,{sudoku:{past:t.sudoku.past.slice(0,-1),current:a,future:[].concat(Object(h.a)(t.sudoku.future),[t.sudoku.current])}});case j:if(!t.sudoku.future.length)return t;var r=t.sudoku.future.slice(-1)[0];return Object(v.a)({},t,{sudoku:{past:[].concat(Object(h.a)(t.sudoku.past),[t.sudoku.current]),current:r,future:t.sudoku.future.slice(0,-1)}});default:return t}}});var G=n(24),V=n(23),z=n(25),W=(n(205),n(17)),U=n(18),F=function(e){function t(){return Object(D.a)(this,t),Object(G.a)(this,Object(V.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.container,onClick:function(){return e.handleClick()}},r.a.createElement("div",{className:this.calculateClasses()},this.renderContent()))}},{key:"renderContent",value:function(){var e=this.props.classes,t=this.props.cell.getValue();if(t)return r.a.createElement("span",{style:{fontSize:"".concat(this.props.size,"px")}},t);var n=this.props.cell.getNotes(),a="".concat(Math.ceil(this.props.size/3),"px"),o=[e.note1,e.note2,e.note3,e.note4,e.note5,e.note6,e.note7,e.note8,e.note9];return r.a.createElement(r.a.Fragment,null,n.map(function(e,t){return r.a.createElement("span",{className:o[t],key:t,style:{fontSize:a}},e?t+1:"")}))}},{key:"handleClick",value:function(){this.props.toggleCell(this.props.cell.getRow(),this.props.cell.getColumn())}},{key:"calculateClasses",value:function(){var e,t=this.props.classes,n=this.props.cell,a=n.getRow(),r=n.getColumn(),o=n.getBlock(),i=(e={},Object(W.a)(e,t.content,!0),Object(W.a)(e,t.thickBorderTop,1===a),Object(W.a)(e,t.thickBorderBottom,a%3===0),Object(W.a)(e,t.thickBorderLeft,1===r),Object(W.a)(e,t.thickBorderRight,r%3===0),Object(W.a)(e,t.dark,o%2===0),Object(W.a)(e,t.given,n.isGiven()),Object(W.a)(e,t.invalid,!n.isValid()),Object(W.a)(e,t.active,n.isActive()),e);return Object.keys(i).filter(function(e){return i[e]}).join(" ")}}]),t}(a.Component),H=Object(U.withStyles)(function(e){var t="solid 1px ".concat(e.palette.common.black),n="solid 2px ".concat(e.palette.common.black);return Object(U.createStyles)({container:{display:"flex",position:"relative",width:"11.111111%",paddingBottom:"11.111111%",textAlign:"center"},content:{position:"absolute",top:0,right:0,bottom:0,left:0,borderRight:t,borderBottom:t},thickBorderTop:{borderTop:n},thickBorderBottom:{borderBottom:n},thickBorderLeft:{borderLeft:n},thickBorderRight:{borderRight:n},dark:{backgroundColor:e.palette.grey[200]},given:{fontWeight:"bold"},active:{backgroundColor:e.palette.primary.light,color:e.palette.primary.contrastText},invalid:{backgroundColor:e.palette.error.light,color:e.palette.error.contrastText},note1:{position:"absolute",top:0,left:0,bottom:"66.666667%",right:"66.666667%"},note2:{position:"absolute",top:"0",left:"33.333333%",bottom:"66.666667%",right:"33.333333%"},note3:{position:"absolute",top:"0",left:"66.666667%",bottom:"66.666667%",right:"0"},note4:{position:"absolute",top:"33.333333%",left:"0",bottom:"33.333333%",right:"66.666667%"},note5:{position:"absolute",top:"33.333333%",left:"33.333333%",bottom:"33.333333%",right:"33.333333%"},note6:{position:"absolute",top:"33.333333%",left:"66.666667%",bottom:"33.333333%",right:"0"},note7:{position:"absolute",top:"66.666667%",left:"0",bottom:"0",right:"66.666667%"},note8:{position:"absolute",top:"66.666667%",left:"33.333333%",bottom:"0",right:"33.333333%"},note9:{position:"absolute",top:"66.666667%",left:"66.666667%",bottom:"0",right:"0"}})})(F),_=function(e){function t(){return Object(D.a)(this,t),Object(G.a)(this,Object(V.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.sudokuRow},this.renderRow())}},{key:"renderRow",value:function(){var e=this;return this.props.row.getCells().map(function(t,n){return r.a.createElement(H,{toggleCell:e.props.toggleCell,cell:t,size:e.getCellSize(),key:n})})}},{key:"getCellSize",value:function(){return this.props.rowSize/9}}]),t}(a.Component),P=Object(U.withStyles)(function(e){return Object(U.createStyles)({sudokuRow:{display:"flex",width:"100%"}})})(_),K=n(19),Y=100,J=function(e){return e.sudoku.isSolved()?null:r.a.createElement("div",{className:"Input-container",style:{width:"100%",paddingTop:"15px"}},r.a.createElement(K.g,null,r.a.createElement("div",{className:"Input-numbers"},Object(h.a)(Array(10).keys()).slice(1).map(function(t){return r.a.createElement(K.b,{color:"primary",label:t,key:t,onClick:function(){return e.setDigit(t)},style:{margin:"4px 2px 4px 2px"}})}))))},q=n(28),$=n.n(q),Q=function(e){function t(e){var n;return Object(D.a)(this,t),(n=Object(G.a)(this,Object(V.a)(t).call(this,e))).containerRef=void 0,n.setCellSize=function(){var e=n.containerRef.current;if(e){var t=e.getBoundingClientRect(),a=t.height-Y,r=t.width,o=a<r?a:r,i=9*Math.floor(o/9);n.setState({rowSize:i})}else requestAnimationFrame(function(){n.setCellSize()})},n.containerRef=r.a.createRef(),n.state={rowSize:0},n}return Object(z.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.container,ref:this.containerRef},r.a.createElement($.a,{className:e.sudokuPaper},this.renderRows()))}},{key:"componentDidMount",value:function(){this.setCellSize()}},{key:"renderRows",value:function(){var e=this;return this.state.rowSize?this.props.sudoku.getRows().map(function(t,n){return r.a.createElement(P,{row:t,key:n,rowSize:e.state.rowSize,toggleCell:e.props.toggleCell})}):null}},{key:"formatMillisecons",value:function(e){var t=function(e){return Math.round(e).toString().padStart(2,"0")},n=t(e/1e3%60),a=t(e/6e4%60),r=t(e/36e5%24);return"".concat(r,":").concat(a,":").concat(n)}}]),t}(a.Component),X=Object(U.withStyles)(function(e){return Object(U.createStyles)({container:{position:"relative",width:"100%",paddingBottom:"100%"},sudokuPaper:{position:"absolute",top:0,bottom:0,left:0,right:0,padding:e.spacing.unit}})})(Q);var Z=n(36),ee=n.n(Z),te=n(37),ne=n.n(te),ae=n(29),re=n.n(ae),oe=n(26),ie=n.n(oe),ue=n(112),ce=n.n(ue),le=n(61),se=n.n(le),de=n(38),fe=n.n(de),he=n(62),ve=n.n(he),pe=n(45),me=n.n(pe),ye=n(30),ge=n.n(ye),ke=n(31),be=n.n(ke),we=n(60),Ee=n.n(we),Oe=n(59),Ce=n.n(Oe),je=[{difficulty:p.VeryEasy,label:"Very Easy"},{difficulty:p.Easy,label:"Easy"},{difficulty:p.Normal,label:"Normal"},{difficulty:p.Hard,label:"Hard"},{difficulty:p.VeryHard,label:"Very Hard"},{difficulty:p.Insane,label:"Insane"}],Se=function(e){function t(e){var n;return Object(D.a)(this,t),(n=Object(G.a)(this,Object(V.a)(t).call(this,e))).state={drawerOpen:!1},n}return Object(z.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee.a,{position:"static"},r.a.createElement(ne.a,null,r.a.createElement(ie.a,{className:t.menuButton,color:"inherit",onClick:function(){return e.openDrawer()}},r.a.createElement(ce.a,null)),r.a.createElement(re.a,{variant:"h6",color:"inherit",className:t.grow},this.getBarText()),r.a.createElement(Ce.a,{classes:{label:t.notesToggle},label:"Take Notes",labelPlacement:"start",onClick:function(){return e.toggleMode()},control:r.a.createElement(Ee.a,{color:"default",checked:this.props.mode===d.Note})}))),r.a.createElement(se.a,{variant:"temporary",classes:{paper:t.drawerPaper},open:this.state.drawerOpen,onClose:function(){return e.closeDrawer()}},r.a.createElement(ve.a,null,r.a.createElement(me.a,{inset:!0},"Puzzle"),r.a.createElement(fe.a,null),r.a.createElement(ge.a,{button:!0,onClick:function(){return e.createNewGame()}},r.a.createElement(be.a,{primary:"New game"})),r.a.createElement(ge.a,{button:!0},r.a.createElement(be.a,{primary:"Reset"})),r.a.createElement(ge.a,{button:!0},r.a.createElement(be.a,{primary:"Validate",onClick:function(){return e.validate()}})),r.a.createElement(fe.a,null),r.a.createElement(me.a,{inset:!0},"Difficulty"),r.a.createElement(fe.a,null),this.renderDifficulties())))}},{key:"openDrawer",value:function(){this.setState({drawerOpen:!0})}},{key:"closeDrawer",value:function(){this.setState({drawerOpen:!1})}},{key:"renderDifficulties",value:function(){var e=this;return je.map(function(t){return r.a.createElement(ge.a,{button:!0,key:t.difficulty,selected:e.props.difficulty===t.difficulty,onClick:function(){return e.setDifficulty(t.difficulty)}},r.a.createElement(be.a,{primary:t.label}))})}},{key:"setDifficulty",value:function(e){this.closeDrawer(),this.props.changeDifficulty(e)}},{key:"validate",value:function(){this.closeDrawer(),this.props.validateSolution()}},{key:"getBarText",value:function(){var e=this,t=je.find(function(t){return t.difficulty===e.props.difficulty});return t?"".concat(t.label):""}},{key:"toggleMode",value:function(){this.props.mode===d.Note?this.props.setMode(d.Input):this.props.setMode(d.Note)}},{key:"createNewGame",value:function(){this.closeDrawer(),this.props.createNewGame()}}]),t}(a.Component),De=Object(U.withStyles)(function(e){var t;return Object(U.createStyles)({grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},drawerPaper:(t={},Object(W.a)(t,e.breakpoints.down("xs"),{minWidth:"70%"}),Object(W.a)(t,e.breakpoints.up("sm"),{minWidth:"40%"}),Object(W.a)(t,e.breakpoints.up("lg"),{minWidth:"30%"}),t),notesToggle:{color:e.palette.common.white}})})(Se),Ne=n(113),Re=n.n(Ne),Ae=n(115),xe=n.n(Ae),Be=n(114),Ie=n.n(Be),Te=Object(U.withStyles)(function(e){return Object(U.createStyles)({appBar:{top:"auto",bottom:0},toolbar:{alignItems:"center",justifyContent:"space-between"}})})(function(e){var t=e.classes;return r.a.createElement(ee.a,{position:"fixed",color:"default",className:t.appBar},r.a.createElement(ne.a,{className:t.toolbar},r.a.createElement(ie.a,{color:"inherit",disabled:!e.past.length,onClick:function(){return e.undo()}},r.a.createElement(Re.a,null)),r.a.createElement(ie.a,{color:"inherit",onClick:function(){return e.removeDigit()}},r.a.createElement(Ie.a,null)),r.a.createElement(ie.a,{color:"inherit",disabled:!e.future.length,onClick:function(){return e.redo()}},r.a.createElement(xe.a,null))))}),Me=n(63),Le=n.n(Me),Ge=Object(U.withStyles)(function(e){return Object(U.createStyles)({})})(function(e){var t=function(e){var t=function(e){return Math.round(e).toString().padStart(2,"0")},n=t(e/1e3%60),a=t(e/6e4%60),r=t(e/36e5%24);return"".concat(r,":").concat(a,":").concat(n)}(Date.now()-e.sudoku.getCreationTimestamp());return r.a.createElement(K.c,{disableBackdropClick:!0,disableEscapeKeyDown:!0,maxWidth:"xl",open:e.sudoku.isSolved(),fullWidth:!0},r.a.createElement(K.f,{id:"confirmation-dialog-title"},"Done!"),r.a.createElement(K.e,null,r.a.createElement(K.h,{variant:"body1",gutterBottom:!0},"You completed a ",function(){switch(e.difficulty){case p.VeryEasy:return"a very easy";case p.Easy:return"an easy";case p.Normal:return"a normal";case p.Hard:return"a hard";case p.VeryHard:return"a very hard";case p.Insane:return"an insane";default:return"an unknown"}}()," puzzle."),r.a.createElement(K.h,{variant:"body1"},"Ellapsed time: ",t)),r.a.createElement(K.d,null,r.a.createElement(K.a,{color:"primary",onClick:function(){e.createNewGame()}},"New Game")))}),Ve=function(e){function t(){var e,n;Object(D.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(G.a)(this,(e=Object(V.a)(t)).call.apply(e,[this].concat(r)))).handleKeyboard=function(e){var t=e.which;t>=49&&t<=57?n.props.setDigit(t-48):8===t||2===t?n.props.removeDigit():37===t?n.props.navigateCells(s.Left):38===t?n.props.navigateCells(s.Up):39===t?n.props.navigateCells(s.Right):40===t?n.props.navigateCells(s.Down):32===t?n.props.setMode(n.props.mode!==d.Note?d.Note:d.Input):27===t&&n.props.setMode(d.Input)},n}return Object(z.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Le.a,null),r.a.createElement(De,this.props),r.a.createElement("div",{className:"App-content"},r.a.createElement(X,this.props),r.a.createElement(J,this.props)),r.a.createElement(Ge,this.props),r.a.createElement(Te,this.props))}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyboard)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyboard)}}]),t}(a.Component),ze=Object(u.b)(function(e){return{sudoku:e.game.sudoku.current,past:e.game.sudoku.past,future:e.game.sudoku.future,difficulty:e.game.difficulty,mode:e.game.mode}},{changeDifficulty:function(e){return{type:m,payload:e}},createNewGame:function(){return{type:y}},validateSolution:function(){return{type:g}},toggleCell:function(e,t){return{type:k,payload:{row:e,column:t}}},setDigit:function(e){return{type:b,payload:{digit:e}}},removeDigit:function(){return{type:w}},navigateCells:function(e){return{type:E,payload:{direction:e}}},setMode:function(e){return{type:O,payload:{mode:e}}},undo:function(){return{type:C}},redo:function(){return{type:j}}})(Ve),We=Object(f.c)(L);i.a.render(r.a.createElement(function(){return r.a.createElement(u.a,{store:We},r.a.createElement(ze,null))},null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/sudoku",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/sudoku","/service-worker.js");c?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):l(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):l(t,e)})}}()}},[[194,1,2]]]);
//# sourceMappingURL=main.7a5d1314.chunk.js.map
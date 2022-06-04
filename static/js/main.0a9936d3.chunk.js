(this.webpackJsonpgobyexample=this.webpackJsonpgobyexample||[]).push([[0],{32:function(e,t,o){},44:function(e,t,o){"use strict";o.r(t);var n=o(1),i=o.n(n),r=o(18),c=o.n(r),a=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var l=o(23),g=o(3),d=o(19),h=o(20),j=o(11),u=o(21),b=o(26),m=o(0),f=function(e){return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"row justify-content-between border-bottom m-1 bg-primary",children:[Object(m.jsx)("div",{className:"d-flex flex-wrap align-content-center",children:Object(m.jsx)("div",{className:"col-md-auto",children:Object(m.jsx)("a",{href:"/",children:Object(m.jsx)("img",{src:"/gobyexample/go/logo.jpg",alt:"LocalShop"})})})}),Object(m.jsx)("div",{className:"col-md-auto",children:Object(m.jsx)("h2",{class:"text-white",children:Object(m.jsx)("span",{class:"footer-h3 text-white",children:"Learn Go By Example"})})}),Object(m.jsx)("div",{className:"col-md-auto"})]})})},p=function(e){var t=new Date;return Object(m.jsx)("div",{class:"row justify-content-left border-bottom m-5",children:Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{class:"d-flex flex-wrap align-content-center bg-white",children:[Object(m.jsxs)("div",{class:"col-md-auto ml-5",children:[Object(m.jsxs)("h3",{class:"footer-h3",children:["About",Object(m.jsx)("span",{style:{color:"#FFCC48"},children:"GoByExample"})]}),Object(m.jsxs)("p",{class:"font-weight-normal text-black",children:["\xa9 2018-",t.getFullYear(),"@Rupak Kumar."]})]}),Object(m.jsxs)("div",{class:"col-md-auto ml-5",children:[Object(m.jsxs)("p",{class:"font-weight-bold text-black",children:[Object(m.jsx)("i",{class:"fa fa-2x fa-map-marker"}),Object(m.jsx)("span",{children:" #202, LG Halli, Bengaluru - 560094"})]}),Object(m.jsxs)("p",{class:"font-weight-bold text-black",children:[Object(m.jsx)("i",{class:"fa fa-2x fa-phone"}),Object(m.jsx)("span",{children:" +91 9113584362"})]}),Object(m.jsxs)("p",{class:"font-weight-bold text-black",children:[Object(m.jsx)("i",{class:"fa fa-2x fa-envelope"}),Object(m.jsxs)("span",{children:[" ",Object(m.jsx)("a",{href:"mailto:admin@vlocalshop.in",children:"rupak.kumar.ambasta@gmail.com"})]})]})]}),Object(m.jsxs)("div",{class:"col",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{class:"font-weight-bold text-black",children:"About Me"}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{class:"font-weight-normal text-black",children:"A creative technologist, thought leader and problem solver with 20+ years of experience as development manager, team manager, architect and developer in various application and infrastructure domains."})]}),Object(m.jsx)("div",{})]})]})})})},x=(o(32),o(13));function O(){var e=Object(n.useState)(!1),t=Object(x.a)(e,2),o=t[0],i=t[1],r=function(){window.pageYOffset>300?i(!0):i(!1)};return Object(n.useEffect)((function(){window.addEventListener("scroll",r)}),[]),Object(m.jsx)("div",{className:"scroll-to-top",children:o&&Object(m.jsx)("div",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(m.jsx)("img",{src:"/gobyexample/icons/top.svg",alt:"Go to top"})})})}var v=o(22),w=o.n(v),y=function(e){Object(u.a)(o,e);var t=Object(b.a)(o);function o(e){var n;return Object(d.a)(this,o),(n=t.call(this,e)).state={showSideBar:!1,showSubscribeButton:!0},w()(Object(j.a)(n),"subscribe","post"),n}return Object(h.a)(o,[{key:"render",value:function(){return Object(m.jsx)(i.a.Fragment,{children:Object(m.jsxs)("div",{class:"container-fluid",children:[Object(m.jsx)(O,{}),Object(m.jsx)(f,{}),this.props.children,Object(m.jsx)(p,{})]})})}}]),o}(n.Component),k=function(e){return Object(m.jsx)("div",{class:"row justify-content-around border-bottom",children:Object(m.jsx)("div",{class:"row",children:Object(m.jsx)("div",{className:"col",children:Object(m.jsx)("a",{className:"footer-h3",href:"/gobyexample/logger",children:"Custom Logger for Go"})})})})},F=o(8),N=o.n(F),S=o(2),z=(o(34),o(35),o(36),function(e){var t=i.a.useState('\t#cmd/main.go\n        package main\n\n        import (\n            "github.com/rkumar-bengaluru/go/logger"\n        )\n        \n        func main() {\n            \tlogger.New().Info("default logger")\n        }\n'),o=Object(x.a)(t,2),n=o[0],r=o[1];return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h2",{children:"Logging in Go"}),Object(m.jsx)("p",{children:"As a experienced developer the first thing that comes in mind for a project is logging even for basic hello world in any programming language you start with is printing the hello message. However it would be great if we start with logging the hello message as any project you will end up there."}),Object(m.jsx)("h3",{children:"Limitation of Default Go Logger"}),Object(m.jsx)("p",{children:"I have spent most of time in Java and first thing i would like to see is what to log and and what is the level of the log example debug, info, warning, error. This default levelled based logging is missing in default log in Go. Not sure why they designed it that way probably they left it for open source developers to jump in and create that for Go :)"}),Object(m.jsx)("h4",{children:"Let's build a Custom Go Logger"}),Object(m.jsx)("p",{children:"So this is my first go lang project, build a logger with different levels of logging."}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("h5",{children:"Step 01"}),Object(m.jsx)("p",{children:"Go to your project root directory and run the following commands:"}),Object(m.jsx)(N.a,{value:"# go work init",highlight:function(e){return Object(S.highlight)(e,S.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}}),Object(m.jsx)("p",{children:"This will create your project workspace go.work. Inside the project root directory create 2 folders, cmd :- Keep your main.go source file, go runtime uses this and logger :- Keep your logger.go source code."})]}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("h5",{children:"Step 02"}),Object(m.jsx)("p",{children:"Will use Zap logger in the background and will provide abstraction of a custom logger for this project"}),Object(m.jsx)(N.a,{value:"\r #logger.go\r // first struct in go\r type Logger struct {\r log *zap.Logger\r }\r // define a function for Logger.\r func (logger *Logger) Info(msg string) {\r logger.log.Info(msg)\r }",highlight:function(e){return Object(S.highlight)(e,S.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}})]})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("h5",{children:"Step 03 - Create a New function to initialize logger"}),Object(m.jsx)(N.a,{value:"func New() *Logger {\r l, _ := zap.NewProduction()\r defer l.Sync()\r return &Logger{l}\r }",highlight:function(e){return Object(S.highlight)(e,S.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}})]}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("h5",{children:"Step 04 - import zapper packages"}),Object(m.jsx)(N.a,{value:'import (\r "go.uber.org/zap"\r "go.uber.org/zap/zapcore"\r "gopkg.in/natefinch/lumberjack.v2"\r )',highlight:function(e){return Object(S.highlight)(e,S.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}})]})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("h5",{children:"Step 05 - Create Module files"}),Object(m.jsx)(N.a,{value:"go mod init github.com/rkumar-bengaluru/go/logger",highlight:function(e){return Object(S.highlight)(e,S.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}}),Object(m.jsx)("p",{children:"This will create go.mod file"})]}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("h5",{children:"Step 06 - Install third party packages and resolve dependencies"}),Object(m.jsx)(N.a,{value:"go mod tidy",highlight:function(e){return Object(S.highlight)(e,S.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}})]})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("h5",{children:"Step 07 - Final Go.mod as below"}),Object(m.jsx)(N.a,{value:"module github.com/rkumar-bengaluru/go/logger\r go 1.18\r require (\r go.uber.org/zap v1.21.0\r gopkg.in/natefinch/lumberjack.v2 v2.0.0\r )\r require (\r github.com/BurntSushi/toml v1.1.0 // indirect\r go.uber.org/atomic v1.7.0 // indirect\r go.uber.org/multierr v1.6.0 // indirect\r )",highlight:function(e){return Object(S.highlight)(e,S.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}}),Object(m.jsx)("p",{children:"This will create go.mod file"})]}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("h5",{children:"Step 08 - Let's use this logger module we build in cmd module"}),Object(m.jsx)(N.a,{value:n,onValueChange:function(e){return r(e)},highlight:function(e){return Object(S.highlight)(e,S.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}})]})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("h5",{children:"Step 09 - Create main module"}),Object(m.jsx)(N.a,{value:"go mod init github.com/rkumar-bengaluru/go",highlight:function(e){return Object(S.highlight)(e,S.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}}),Object(m.jsx)("p",{children:"followed by install package dependencies"}),Object(m.jsx)(N.a,{value:"go mod tidy",highlight:function(e){return Object(S.highlight)(e,S.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}})]}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("h5",{children:"Step 10 - Use local workspace and Run the main module"}),Object(m.jsx)("p",{children:"In the project root directory, run the following commands"}),Object(m.jsx)(N.a,{value:"\r go work use ./cmd\r go work use ./logger\r go run github.com/rkumar-bengaluru/go\r ",highlight:function(e){return Object(S.highlight)(e,S.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}})]})]}),Object(m.jsxs)("p",{children:["You can find the complete source code",Object(m.jsx)("a",{href:"https://github.com/rkumar-bengaluru/go",target:"_blank",rel:"noreferrer",children:" here"})]})]})});c.a.render(Object(m.jsx)(l.a,{children:Object(m.jsx)(y,{children:Object(m.jsxs)(g.c,{children:[Object(m.jsx)(g.a,{exact:!0,path:"/gobyexample/",component:k}),Object(m.jsx)(g.a,{exact:!0,path:"/gobyexample/logger",component:z})]})})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/gobyexample",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/gobyexample","/firebase-messaging-sw.js");a?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):s(e)}))}}()}},[[44,1,2]]]);
//# sourceMappingURL=main.0a9936d3.chunk.js.map
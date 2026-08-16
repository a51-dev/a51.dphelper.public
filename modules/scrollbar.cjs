'use strict';var m={info:{title:"List",description:"Complete list of tools"},categories:["3party","system","financial","memory","numbers","time","path","file","forms","ui","other","development"]};var b={version:"4.5.2"};Object.defineProperty(globalThis,"dphelper",{value:new Proxy({},{}),writable:true,configurable:true,enumerable:false});Object.defineProperties(dphelper,{_list:{value:{scripts:[],sockets:[],...m},configurable:true,writable:true},version:{value:b.version,configurable:true,writable:true},isServer:{value:false,configurable:true,writable:true},isBrowser:{value:true,configurable:true,writable:true}});var n=dphelper;Object.defineProperty(n,"setProps",{value:(t,e,r)=>{Object.defineProperty(t,e.name,r||{writable:false,configurable:false,enumerable:false}),r?.lock&&Object.freeze(t[e.name]);},writable:false,configurable:false,enumerable:false});Object.defineProperty(n,"setDescription",{value:(t,e)=>{Object.defineProperties(n,{[t.name]:{value:e,writable:false,configurable:false,enumerable:false}}),Object.keys(e).map(r=>(Object.defineProperties(n[t.name],{[r]:{writable:false,configurable:false,enumerable:false}}),null)),n.setProps(n,t,{writable:false,configurable:false,enumerable:false}),n._list.scripts.push(t);}});var y={name:"scrollbar",active:true,subCommand:[{name:"custom",version:"0.0.2",example:"dphelper.scrollbar.custom(selector)",author:"Dario Passariello",creationDate:"20210101",lastMod:"20260220",type:"function",active:true,description:"Apply custom styles to the scrollbar for the selected elements.",env:"client",subCommand:[]},{name:"indicator",version:"0.0.2",example:"dphelper.scrollbar.indicator(selector)",author:"Dario Passariello",creationDate:"20210101",lastMod:"20260220",type:"function",active:true,description:"Add a scroll indicator to the selected elements.",env:"client",subCommand:[]},{name:"position.get",version:"0.0.2",example:"dphelper.scrollbar.position.get(selector)",author:"Dario Passariello",creationDate:"20210101",lastMod:"20260220",type:"function",active:true,description:"Get the current scroll position of the selected elements.",env:"client",subCommand:[]},{name:"position.set",version:"0.0.2",example:"dphelper.scrollbar.position.set(selector, position)",author:"Dario Passariello",creationDate:"20210101",lastMod:"20260220",type:"function",active:true,description:"Set the scroll position of the selected elements.",env:"client",subCommand:[]},{name:"smooth",version:"0.0.2",example:"dphelper.scrollbar.smooth(container, element, gap)",author:"Dario Passariello",creationDate:"20210101",lastMod:"20260220",type:"function",active:true,description:"Smoothly scroll to a specific element within a container with an optional gap.",env:"client",subCommand:[]},{name:"scrollTo",version:"0.0.2",example:"dphelper.scrollbar.scrollTo(container, element, gap)",author:"Dario Passariello",creationDate:"20210101",lastMod:"20260220",type:"function",active:true,description:"Scroll to a specific element within a container with an optional gap.",env:"client",subCommand:[]}]},v={custom:(t,e)=>{e.color_1=e?.color_1||"black",e.color_1_hover=e?.color_1_hover||"black",e.color_2=e?.color_2||"transparent",e.color_3=e?.color_3||"rgba(30,150,255,.5)",e.type=e?.type||"thin",e.behavior=e?.behavior||"smooth",e.width=e?.width||"16px",e.height=e?.height||"16px",e.rounded=e?.rounded||"10px",e.margin=e?.margin||0,e.border=e?.border||"5px",e.opacity=e?.opacity||1;let r=`  ${t}::-webkit-scrollbar {
                          scroll-behavior: ${e.behavior};
                          width: ${e.width};
                          height: ${e.height};
                        }
                      ${t}::-webkit-scrollbar-thumb {
                          opacity: ${e.opacity} !important;
                          -webkit-border-radius: ${e.rounded} !important;
                          -webkit-box-shadow: none !important;
                          box-shadow: none !important;
                          border-radius: ${e.rounded} !important;
                          background: ${e.color_1} !important;
                          background-clip: content-box !important;
                          border: ${e.border} solid transparent !important;
                          min-height: 2px !important;
                          min-width: 2px !important;
                        }
                        ${t}::-webkit-scrollbar-thumb:hover{
                          background: ${e.color_1_hover} !important;
                        }
                        ${t}::-webkit-scrollbar-thumb:active{
                            background: ${e.color_1} !important;
                            background-clip: content-box !important;
                            border: calc( ${e.border} - 1.5px ) solid transparent !important;
                        }
                        ${t}::-webkit-scrollbar-track {
                          background: ${e.color_2};
                          border-radius: ${e.rounded};
                        }
                        ${t}::-webkit-scrollbar-track:hover {
                            /*background: rgba(128,128,128,.15) !important;*/
                        }
                        ${t}::-webkit-scrollbar-track:vertical:hover {
                            /* border-left: 1px solid rgba(0,0,0,.1) !important; */
                        }
                        ${t}::-webkit-scrollbar-track:horizontal:hover {
                            /* border-top: 1px solid rgba(0,0,0,.1) !important; */
                        }
                        ${t}::-webkit-scrollbar-corner {
                          background:rgba(0,0,0,0)
                        }
                        /*
                        ${t}::-webkit-scrollbar-thumb:window-inactive {
                          background: ${e.color_3}
                        }
                        */
                        select::-webkit-scrollbar-thumb {
                            border: 4px solid hsl(0 0% 92% / 1) !important;
                        }
                        select::-webkit-scrollbar-track {
                            background: hsl(0 0% 92% / 1) !important;
                        }
                        select::-webkit-scrollbar-track:vertical,
                        select::-webkit-scrollbar-track:horizontal {
                            border-top: none !important;
                            border-left: none !important;
                        }
                      `,o=document.createElement("style");document.head.appendChild(o),o.innerHTML=r;},indicator:t=>{let e=document.querySelector(t.el),r=document.querySelector(".scrollindicator");if(!r){let o=document.createElement("div");o.classList.add("scrollindicator"),document.querySelector("header")?.appendChild(o),o.style.cssText=`
            height:5px;
            background:#65c45c;
            position:absolute;
            bottom:0;
            left:0;
            z-index:2
          `;}if(!t.el&&r){r.style.width="0%";return}try{let o=document.querySelector(".scrollindicator");e.addEventListener("scroll",function(a){o.style.width="0%";let c=Number(this.scrollTop),i=Number(this.scrollHeight-this.clientHeight),s=Math.min(Math.max(c/i*100),100);o.style.width=`${s}%`,o.click();}),e.addEventListener("popstate",a=>{o.style.width=0;});}catch(o){console.error(o);return}},position:{set:t=>{let e=typeof t=="string"?document.querySelector(t):t;if(!e)return;let r=[e.scrollTop,e.scrollLeft];r[0]!=null&&r[1]!=null&&localStorage.setItem(t,JSON.stringify(r));},get:t=>{if(localStorage.getItem(t))try{let e=localStorage.getItem(t),r=typeof t=="string"?document.querySelector(t):t;r&&e&&(r.scrollTop=e[0],r.scrollLeft=e[1]);}catch(e){console.error("Error getting scroll position:",e);}}},smooth:(t,e,r)=>{t===document&&(t=document.scrollingElement||document.documentElement||document.body.parentNode||document.body);let o=false,a=t.scrollTop,c=t===document.body&&document.documentElement?document.documentElement:t,i=l=>{l.preventDefault();let h=s(l);a+=-h*e,a=Math.max(0,Math.min(a,t.scrollHeight-c.clientHeight)),o||u();};t.addEventListener("mousewheel",i,{passive:false}),t.addEventListener("DOMMouseScroll",i,{passive:false});let s=l=>l.detail?l.wheelDelta?l.wheelDelta/l.detail/40*(l.detail>0?1:-1):-l.detail/3:l.wheelDelta/120,u=()=>{o=true;let l=(a-t.scrollTop)/r;t.scrollTop+=l,Math.abs(l)>.5?p(u):o=false;},p=dphelper.window.animationframe();},scrollTo:(t,e,r=0)=>{let o=document.querySelector(t),a=document.querySelector(e);o&&a&&o.scrollTo({top:a.offsetTop-r,behavior:"smooth"});}};dphelper?.setDescription(y,v);var P=dphelper.scrollbar;exports.scrollbar=P;
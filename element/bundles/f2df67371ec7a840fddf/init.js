(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1165:function(e,t){},1574:function(e,t,n){var i={"./":[226,9],"./ICanvasEffect":[1031,7,7],"./ICanvasEffect.ts":[1031,7,7],"./confetti":[425,9,0],"./confetti/":[425,9,0],"./confetti/index":[425,9,0],"./confetti/index.ts":[425,9,0],"./effect":[1032,9,8],"./effect.ts":[1032,9,8],"./fireworks":[426,9,1],"./fireworks/":[426,9,1],"./fireworks/index":[426,9,1],"./fireworks/index.ts":[426,9,1],"./index":[226,9],"./index.ts":[226,9],"./rainfall":[427,9,2],"./rainfall/":[427,9,2],"./rainfall/index":[427,9,2],"./rainfall/index.ts":[427,9,2],"./snowfall":[428,9,3],"./snowfall/":[428,9,3],"./snowfall/index":[428,9,3],"./snowfall/index.ts":[428,9,3],"./spaceinvaders":[429,9,4],"./spaceinvaders/":[429,9,4],"./spaceinvaders/index":[429,9,4],"./spaceinvaders/index.ts":[429,9,4],"./utils":[338,9],"./utils.ts":[338,9]};function a(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],a=t[0];return Promise.all(t.slice(2).map(n.e)).then((function(){return n.t(a,t[1])}))}a.keys=function(){return Object.keys(i)},a.id=1574,e.exports=a},1609:function(e,t){},1611:function(e,t,n){"use strict";t.a=n.p+"i18n/languages.5eff3b2.json"},1613:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return c}));var i=n(83),a=n.n(i);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const o={bgColor:"#d00",textColor:"#fff",fontFamily:"sans-serif",fontWeight:"bold",isUp:!1,isLeft:!1};class c{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a()(this,"browser",{ff:void 0!==window.InstallTrigger,opera:!!window.opera||navigator.userAgent.includes("Opera")}),a()(this,"params",void 0),a()(this,"canvas",void 0),a()(this,"baseImage",void 0),a()(this,"context",void 0),a()(this,"icons",void 0),a()(this,"isReady",!1),a()(this,"readyCb",()=>{}),this.params=r(r({},o),e),this.icons=c.getIcons(),this.canvas=document.createElement("canvas"),this.baseImage=document.createElement("img");const t=this.icons[this.icons.length-1];t.hasAttribute("href")?(this.baseImage.setAttribute("crossOrigin","anonymous"),this.baseImage.onload=()=>{this.canvas.height=this.baseImage.height>0?this.baseImage.height:32,this.canvas.width=this.baseImage.width>0?this.baseImage.width:32,this.context=this.canvas.getContext("2d"),this.ready()},this.baseImage.setAttribute("src",t.getAttribute("href"))):(this.canvas.height=this.baseImage.height=32,this.canvas.width=this.baseImage.width=32,this.context=this.canvas.getContext("2d"),this.ready())}reset(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.drawImage(this.baseImage,0,0,this.canvas.width,this.canvas.height)}options(e,t){const n={n:"number"==typeof e?Math.abs(e):e,len:(""+e).length,x:.4,y:.4,w:.6,h:.6};return t.isUp&&(n.y<.6?n.y=n.y-.4:n.y=n.y-2*n.y+(1-n.w)),t.isLeft&&(n.x<.6?n.x=n.x-.4:n.x=n.x-2*n.x+(1-n.h)),n.x=this.canvas.width*n.x,n.y=this.canvas.height*n.y,n.w=this.canvas.width*n.w,n.h=this.canvas.height*n.h,n}circle(e,t){const n=r(r({},this.params),t),i=this.options(e,n);let a=!1;2===i.len?(i.x=i.x-.4*i.w,i.w=1.4*i.w,a=!0):i.len>=3&&(i.x=i.x-.65*i.w,i.w=1.65*i.w,a=!0),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.drawImage(this.baseImage,0,0,this.canvas.width,this.canvas.height),this.context.beginPath();const s=Math.floor(i.h*(i.n>99?.85:1))+"px";if(this.context.font=`${n.fontWeight} ${s} ${n.fontFamily}`,this.context.textAlign="center",a?(this.context.moveTo(i.x+i.w/2,i.y),this.context.lineTo(i.x+i.w-i.h/2,i.y),this.context.quadraticCurveTo(i.x+i.w,i.y,i.x+i.w,i.y+i.h/2),this.context.lineTo(i.x+i.w,i.y+i.h-i.h/2),this.context.quadraticCurveTo(i.x+i.w,i.y+i.h,i.x+i.w-i.h/2,i.y+i.h),this.context.lineTo(i.x+i.h/2,i.y+i.h),this.context.quadraticCurveTo(i.x,i.y+i.h,i.x,i.y+i.h-i.h/2),this.context.lineTo(i.x,i.y+i.h/2),this.context.quadraticCurveTo(i.x,i.y,i.x+i.h/2,i.y)):this.context.arc(i.x+i.w/2,i.y+i.h/2,i.h/2,0,2*Math.PI),this.context.fillStyle=n.bgColor,this.context.fill(),this.context.closePath(),this.context.beginPath(),this.context.stroke(),this.context.fillStyle=n.textColor,"number"==typeof i.n&&i.n>999){const e=(i.n>9999?9:Math.floor(i.n/1e3))+"k+";this.context.fillText(e,Math.floor(i.x+i.w/2),Math.floor(i.y+i.h-.2*i.h))}else this.context.fillText(""+i.n,Math.floor(i.x+i.w/2),Math.floor(i.y+i.h-.15*i.h));this.context.closePath()}ready(){this.isReady||(this.isReady=!0,this.readyCb())}setIcon(t){e(()=>{this.setIconSrc(t.toDataURL("image/png"))})}setIconSrc(e){if(this.browser.ff||this.browser.opera){const t=this.icons[this.icons.length-1],n=window.document.createElement("link");this.icons=[n],n.setAttribute("rel","icon"),n.setAttribute("type","image/png"),window.document.getElementsByTagName("head")[0].appendChild(n),n.setAttribute("href",e),t.parentNode&&t.parentNode.removeChild(t)}else this.icons.forEach(t=>{t.setAttribute("href",e)})}badge(e,t){this.isReady?("string"==typeof e||e>0?this.circle(e,t):this.reset(),this.setIcon(this.canvas)):this.readyCb=()=>{this.badge(e,t)}}static getLinks(){const e=[],t=window.document.getElementsByTagName("head")[0].getElementsByTagName("link");for(let n=0;n<t.length;n++)/(^|\s)icon(\s|$)/i.test(t[n].getAttribute("rel"))&&e.push(t[n]);return e}static getIcons(){let e=c.getLinks();return 0===e.length&&(e=[window.document.createElement("link")],e[0].setAttribute("rel","icon"),window.document.getElementsByTagName("head")[0].appendChild(e[0])),e.forEach(e=>{e.setAttribute("type","image/png")}),e}}}).call(this,n(171).setImmediate)},21:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(13),a=n.n(i);async function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";""===e||e.endsWith("/")||(e+="/");const t=r(`${e}config.${document.domain}.json`),n=r(e+"config.json");try{const e=await t;if(0===Object.keys(e).length)throw new Error;return e}catch(e){return await n}}function r(e){return new Promise((function(t,n){a()({method:"GET",url:e,qs:{cachebuster:Date.now()}},(e,i,a)=>{try{if(e||i.status<200||i.status>=300)return i&&(404==i.status||0==i.status&&""==a)&&t({}),void n({err:e,response:i});t(JSON.parse(a))}catch(e){n({err:e})}})}))}},458:function(e,t){},459:function(e,t){},670:function(e,t){},674:function(e,t){},81:function(e,t,n){"use strict";n.r(t),n.d(t,"rageshakePromise",(function(){return $})),n.d(t,"preparePlatform",(function(){return Q})),n.d(t,"setupLogStorage",(function(){return J})),n.d(t,"loadConfig",(function(){return Y})),n.d(t,"loadOlm",(function(){return X})),n.d(t,"loadLanguage",(function(){return Z})),n.d(t,"loadSkin",(function(){return ee})),n.d(t,"loadTheme",(function(){return te})),n.d(t,"loadApp",(function(){return ne})),n.d(t,"showError",(function(){return ie})),n.d(t,"showIncompatibleBrowser",(function(){return ae})),n.d(t,"_t",(function(){return se}));var i=n(1058),a=n(1059),s=n.n(a),r=n(149),o=n(82),c=n.n(o),l=n(84),d=n(89),u=n(124),h=n(94),p=n(249),g=n(1),f=n(83),m=n.n(f),y=n(294),w=n(1612),b=n(87),v=n(477),C=n(91),O=n(186),x=n(98),I=n(170),E=n(105),k=n(204),A=n(92),S=n(600),j=n(152),N=n(1029),P=n(21),T=n(1613);class D extends y.e{constructor(){super(...arguments),m()(this,"_favicon",void 0)}async getConfig(){return Object(P.a)()}getHumanReadableName(){return"Vector Base Platform"}get favicon(){return this._favicon?this._favicon:this._favicon=new T.a}updateFavicon(){let e="#d00",t=this.notificationCount;this.errorDidOccur&&(t=t||"×",e="#f00"),this.favicon.badge(t,{bgColor:e})}setNotificationCount(e){this.notificationCount!==e&&(super.setNotificationCount(e),this.updateFavicon())}setErrorStatus(e){this.errorDidOccur!==e&&(super.setErrorStatus(e),this.updateFavicon())}startUpdater(){}getDefaultDeviceDisplayName(){return Object(l.a)("Unknown device")}}function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}const U=window.electron,B=navigator.platform.toUpperCase().includes("MAC");function L(e){["call_state"].includes(e.action)&&U.send("app_onAction",e)}class _ extends w.a{constructor(){super(),m()(this,"pendingIpcCalls",{}),m()(this,"nextIpcCallId",0),m()(this,"onIpcReply",(e,t)=>{if(void 0===t.id)return void g.a.warn("Ignoring IPC reply with no ID");if(void 0===this.pendingIpcCalls[t.id])return void g.a.warn("Unknown IPC payload ID: "+t.id);const n=this.pendingIpcCalls[t.id];delete this.pendingIpcCalls[t.id],t.error?n.reject(t.error):n.resolve(t.reply)}),U.on("seshatReply",this.onIpcReply)}async ipcCall(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];const a=++this.nextIpcCallId;return new Promise((t,i)=>{this.pendingIpcCalls[a]={resolve:t,reject:i},window.electron.send("seshat",{id:a,name:e,args:n})})}async supportsEventIndexing(){return this.ipcCall("supportsEventIndexing")}async initEventIndex(e,t){return this.ipcCall("initEventIndex",e,t)}async addEventToIndex(e,t){return this.ipcCall("addEventToIndex",e,t)}async deleteEvent(e){return this.ipcCall("deleteEvent",e)}async isEventIndexEmpty(){return this.ipcCall("isEventIndexEmpty")}async isRoomIndexed(e){return this.ipcCall("isRoomIndexed",e)}async commitLiveEvents(){return this.ipcCall("commitLiveEvents")}async searchEventIndex(e){return this.ipcCall("searchEventIndex",e)}async addHistoricEvents(e,t,n){return this.ipcCall("addHistoricEvents",e,t,n)}async addCrawlerCheckpoint(e){return this.ipcCall("addCrawlerCheckpoint",e)}async removeCrawlerCheckpoint(e){return this.ipcCall("removeCrawlerCheckpoint",e)}async loadFileEvents(e){return this.ipcCall("loadFileEvents",e)}async loadCheckpoints(){return this.ipcCall("loadCheckpoints")}async closeEventIndex(){return this.ipcCall("closeEventIndex")}async getStats(){return this.ipcCall("getStats")}async getUserVersion(){return this.ipcCall("getUserVersion")}async setUserVersion(e){return this.ipcCall("setUserVersion",e)}async deleteEventIndex(){return this.ipcCall("deleteEventIndex")}}class F extends D{constructor(){super(),m()(this,"eventIndexManager",new _),m()(this,"pendingIpcCalls",{}),m()(this,"nextIpcCallId",0),m()(this,"ssoID",Object(k.b)(32)),m()(this,"onUpdateDownloaded",async(e,t)=>{let{releaseNotes:n,releaseName:i}=t;b.a.dispatch({action:A.a.CheckUpdates,status:y.d.Ready}),this.shouldShowUpdate(i)&&Object(S.b)(await this.getAppVersion(),i,n)}),m()(this,"onIpcReply",(e,t)=>{if(void 0===t.id)return void g.a.warn("Ignoring IPC reply with no ID");if(void 0===this.pendingIpcCalls[t.id])return void g.a.warn("Unknown IPC payload ID: "+t.id);const n=this.pendingIpcCalls[t.id];delete this.pendingIpcCalls[t.id],t.error?n.reject(t.error):n.resolve(t.reply)}),b.a.register(L),U.on("check_updates",(e,t)=>{b.a.dispatch(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){m()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({action:A.a.CheckUpdates},function(e){return!0===e?{status:y.d.Downloading}:!1===e?{status:y.d.NotAvailable}:{status:y.d.Error,detail:e}}(t)))}),U.on("before-quit",(function(){g.a.log("element-desktop closing"),v.b()})),U.on("ipcReply",this.onIpcReply),U.on("update-downloaded",this.onUpdateDownloaded),U.on("preferences",()=>{b.a.fire(A.a.ViewUserSettings)}),U.on("userDownloadCompleted",(e,t)=>{let{id:n,name:i}=t;const a="DOWNLOAD_TOAST_"+n;j.a.sharedInstance().addOrReplaceToast({key:a,title:Object(l.a)("Download Completed"),props:{description:i,acceptLabel:Object(l.a)("Open"),onAccept:()=>{U.send("userDownloadAction",{id:n,open:!0}),j.a.sharedInstance().dismissToast(a)},dismissLabel:Object(l.a)("Dismiss"),onDismiss:()=>{U.send("userDownloadAction",{id:n})},numSeconds:10},component:N.a,priority:99})}),Object(I.i)("KeyBinding.switchToSpaceByNumber",I.c.NAVIGATION,{default:{ctrlOrCmdKey:!0,key:I.d},displayName:Object(l.c)("Switch to space by number")}),B?(Object(I.i)("KeyBinding.openUserSettings",I.c.NAVIGATION,{default:{commandKey:!0,key:E.a.COMMA},displayName:Object(l.c)("Open user settings")}),Object(I.i)("KeyBinding.previousVisitedRoomOrCommunity",I.c.NAVIGATION,{default:{commandKey:!0,key:E.a.SQUARE_BRACKET_LEFT},displayName:Object(l.c)("Previous recently visited room or community")}),Object(I.i)("KeyBinding.nextVisitedRoomOrCommunity",I.c.NAVIGATION,{default:{commandKey:!0,key:E.a.SQUARE_BRACKET_RIGHT},displayName:Object(l.c)("Next recently visited room or community")})):(Object(I.i)("KeyBinding.previousVisitedRoomOrCommunity",I.c.NAVIGATION,{default:{altKey:!0,key:E.a.ARROW_LEFT},displayName:Object(l.c)("Previous recently visited room or community")}),Object(I.i)("KeyBinding.nextVisitedRoomOrCommunity",I.c.NAVIGATION,{default:{altKey:!0,key:E.a.ARROW_RIGHT},displayName:Object(l.c)("Next recently visited room or community")})),this.ipcCall("startSSOFlow",this.ssoID)}async getConfig(){return this.ipcCall("getConfig")}getHumanReadableName(){return"Electron Platform"}supportsMultiLanguageSpellCheck(){return!B}setNotificationCount(e){this.notificationCount!==e&&(super.setNotificationCount(e),U.send("setBadgeCount",e))}supportsNotifications(){return!0}maySendNotifications(){return!0}displayNotification(e,t,n,i,a){navigator.userAgent.includes("Linux")&&(t=t.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const s=super.displayNotification(e,t,n,i,a),r=s.onclick;return s.onclick=()=>{null==r||r(),this.ipcCall("focusWindow")},s}loudNotification(e,t){U.send("loudNotification")}async getAppVersion(){return this.ipcCall("getAppVersion")}supportsAutoLaunch(){return!0}async getAutoLaunchEnabled(){return this.ipcCall("getAutoLaunchEnabled")}async setAutoLaunchEnabled(e){return this.ipcCall("setAutoLaunchEnabled",e)}supportsWarnBeforeExit(){return!0}async shouldWarnBeforeExit(){return this.ipcCall("shouldWarnBeforeExit")}async setWarnBeforeExit(e){return this.ipcCall("setWarnBeforeExit",e)}supportsAutoHideMenuBar(){return!B}async getAutoHideMenuBarEnabled(){return this.ipcCall("getAutoHideMenuBarEnabled")}async setAutoHideMenuBarEnabled(e){return this.ipcCall("setAutoHideMenuBarEnabled",e)}supportsMinimizeToTray(){return!B}async getMinimizeToTrayEnabled(){return this.ipcCall("getMinimizeToTrayEnabled")}async setMinimizeToTrayEnabled(e){return this.ipcCall("setMinimizeToTrayEnabled",e)}async canSelfUpdate(){const e=await this.ipcCall("getUpdateFeedUrl");return Boolean(e)}startUpdateCheck(){super.startUpdateCheck(),U.send("check_updates")}installUpdate(){U.send("install_update")}getDefaultDeviceDisplayName(){const e=h.a.get().brand;return Object(l.a)("%(brand)s Desktop (%(platformName)s)",{brand:e,platformName:navigator.userAgent.includes("Macintosh")?"macOS":navigator.userAgent.includes("FreeBSD")?"FreeBSD":navigator.userAgent.includes("OpenBSD")?"OpenBSD":navigator.userAgent.includes("SunOS")?"SunOS":navigator.userAgent.includes("Windows")?"Windows":navigator.userAgent.includes("Linux")?"Linux":"Unknown"})}screenCaptureErrorString(){return null}requestNotificationPermission(){return Promise.resolve("granted")}reload(){window.location.reload()}async ipcCall(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];const a=++this.nextIpcCallId;return new Promise((t,i)=>{this.pendingIpcCalls[a]={resolve:t,reject:i},window.electron.send("ipcCall",{id:a,name:e,args:n})})}getEventIndexingManager(){return this.eventIndexManager}async setLanguage(e){return this.ipcCall("setLanguage",e)}setSpellCheckLanguages(e){this.ipcCall("setSpellCheckLanguages",e).catch(e=>{g.a.log("Failed to send setSpellCheckLanguages IPC to Electron"),g.a.error(e)})}async getSpellCheckLanguages(){return this.ipcCall("getSpellCheckLanguages")}async getAvailableSpellCheckLanguages(){return this.ipcCall("getAvailableSpellCheckLanguages")}getSSOCallbackUrl(e){const t=super.getSSOCallbackUrl(e);return t.protocol="element",t.searchParams.set("element-desktop-ssoid",this.ssoID),t}startSingleSignOn(e,t,n,i){super.startSingleSignOn(e,t,n,i),C.a.createTrackedDialog("Electron","SSO",O.a,{title:Object(l.a)("Go to your browser to complete Sign In"),description:c.a.createElement(x.a,null)})}navigateForwardBack(e){this.ipcCall(e?"navigateBack":"navigateForward")}navigateToSpace(e){b.a.dispatch({action:A.a.SwitchSpace,num:e})}onKeyDown(e){let t=!1;switch(e.key){case E.a.SQUARE_BRACKET_LEFT:case E.a.SQUARE_BRACKET_RIGHT:!B||!e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(this.navigateForwardBack(e.key===E.a.SQUARE_BRACKET_LEFT),t=!0);break;case E.a.ARROW_LEFT:case E.a.ARROW_RIGHT:B||!e.altKey||e.metaKey||e.ctrlKey||e.shiftKey||(this.navigateForwardBack(e.key===E.a.ARROW_LEFT),t=!0)}if(!t&&!d.b.getValue("showCommunitiesInsteadOfSpaces")&&e.code.startsWith("Digit")&&"Digit0"!==e.code&&Object(E.d)(e)){const n=e.code.slice(5);this.navigateToSpace(parseInt(n,10)),t=!0}return t}async getPickleKey(e,t){try{return await this.ipcCall("getPickleKey",e,t)}catch(e){return null}}async createPickleKey(e,t){try{return await this.ipcCall("createPickleKey",e,t)}catch(e){return null}}async destroyPickleKey(e,t){try{await this.ipcCall("destroyPickleKey",e,t)}catch(e){}}}var K=n(13),M=n.n(K),V=n(1614),W=n.n(V);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}class G extends D{constructor(){super(),m()(this,"pollForUpdate",()=>this.getMostRecentVersion().then(e=>{const t=this.getNormalizedAppVersion("v1.10.4");return t!==e?(this.shouldShowUpdate(e)&&Object(S.b)(t,e),{status:y.d.Ready}):(Object(S.a)(),{status:y.d.NotAvailable})},e=>(g.a.error("Failed to poll for update",e),{status:y.d.Error,detail:e.message||e.status?e.status.toString():"Unknown Error"}))),"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js")}getHumanReadableName(){return"Web Platform"}supportsNotifications(){return Boolean(window.Notification)}maySendNotifications(){return"granted"===window.Notification.permission}requestNotificationPermission(){return new Promise((function(e,t){window.Notification.requestPermission(t=>{e(t)})}))}getMostRecentVersion(){return new Promise((e,t)=>{M()({method:"GET",url:"version",qs:{cachebuster:Date.now()}},(n,i,a)=>{if(n||i.status<200||i.status>=300)return null===n&&(n={status:i.status}),void t(n);e(this.getNormalizedAppVersion(a.trim()))})})}getNormalizedAppVersion(e){return new RegExp("^v[0-9]+.[0-9]+.[0-9]+(-.+)?$").test(e)?e.substr(1):e}getAppVersion(){return Promise.resolve(this.getNormalizedAppVersion("v1.10.4"))}startUpdater(){this.pollForUpdate(),setInterval(this.pollForUpdate,6e5)}async canSelfUpdate(){return!0}startUpdateCheck(){super.startUpdateCheck(),this.pollForUpdate().then(e=>{b.a.dispatch(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){m()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({action:A.a.CheckUpdates},e))})}installUpdate(){window.location.reload()}getDefaultDeviceDisplayName(){const e=new URL(window.location.href),t=[e.host,e.pathname.replace(/\/$/,"")].join(""),n=new W.a,i=n.getBrowser().name||"unknown browser";let a=n.getOS().name||"unknown OS";return"Mac OS"===a&&(a="macOS"),Object(l.a)("%(appName)s (%(browserName)s, %(osName)s)",{appName:t,browserName:i,osName:a})}screenCaptureErrorString(){return"https:"!==window.location.protocol?Object(l.a)("You need to be using HTTPS to place a screen-sharing call."):null}reload(){window.location.reload()}}class q extends G{setNotificationCount(e){if(!navigator.setAppBadge)return super.setNotificationCount(e);this.notificationCount!==e&&(this.notificationCount=e,navigator.setAppBadge(e).catch(e=>{g.a.error("Failed to update PWA app badge",e)}))}}var z=n(318);window.mxSendRageshake=function(e,t){const n=h.a.get().bug_report_endpoint_url;n?(void 0===t&&(t=!0),e&&e.trim()?Object(z.a)(n,{userText:e,sendLogs:t,progressCallback:g.a.log.bind(console)}).then(()=>{g.a.log("Bug report sent!")},e=>{g.a.error(e)}):g.a.error("Cannot send a rageshake without a message - please tell us what went wrong")):g.a.error("Cannot send a rageshake - no bug_report_endpoint_url configured")};const $=function(){const e=v.d(!1);return e.then(()=>{g.a.log("Initialised rageshake."),g.a.log("To fix line numbers in Chrome: Meatball menu → Settings → Ignore list → Add /rageshake\\.js$"),window.addEventListener("beforeunload",e=>{g.a.log("element-web closing"),v.b()}),v.a()},e=>{g.a.error("Failed to initialise rageshake: "+e)}),e}();function Q(){window.electron?(g.a.log("Using Electron platform"),u.a.set(new F)):window.matchMedia("(display-mode: standalone)").matches?(g.a.log("Using PWA platform"),u.a.set(new q)):(g.a.log("Using Web platform"),u.a.set(new G))}function J(){return h.a.get().bug_report_endpoint_url?v.e():(g.a.warn("No bug report endpoint set - logs will not be persisted"),Promise.resolve())}async function Y(){h.a.put(await u.a.get().getConfig()||{})}function X(){return s.a.init({locateFile:()=>i.a}).then(()=>{g.a.log("Using WebAssembly Olm")}).catch(e=>(g.a.log("Failed to load Olm: trying legacy version",e),new Promise((e,t)=>{const n=document.createElement("script");n.src="olm_legacy.js",n.onload=e,n.onerror=t,document.body.appendChild(n)}).then(()=>window.Olm.init()).then(()=>{g.a.log("Using legacy Olm")}).catch(e=>{g.a.log("Both WebAssembly and asm.js Olm failed!",e)})))}async function Z(){const e=d.b.getValue("language",null,!0);let t=[];e?t=[e]:l.f().forEach(e=>{t.push(...l.g(e))});try{await l.l(t),document.documentElement.setAttribute("lang",l.e())}catch(e){g.a.error("Unable to set language",e)}}async function ee(){g.a.log("Loading skin...");const[e,t]=await Promise.all([Promise.resolve().then(n.bind(null,107)),n.e(12).then(n.bind(null,1639))]);e.loadSkin(t),g.a.log("Skin loaded!")}async function te(){Object(p.h)()}async function ne(e){const t=await n.e(11).then(n.bind(null,1636));window.matrixChat=r.render(await t.loadApp(e),document.getElementById("matrixchat"))}async function ie(e,t){const i=(await n.e(13).then(n.bind(null,1637))).default;window.matrixChat=r.render(o.createElement(i,{title:e,messages:t}),document.getElementById("matrixchat"))}async function ae(e){const t=(await n.e(10).then(n.bind(null,1638))).default;window.matrixChat=r.render(o.createElement(t,{onAccept:e}),document.getElementById("matrixchat"))}const se=l.a}}]);
//# sourceMappingURL=init.js.map
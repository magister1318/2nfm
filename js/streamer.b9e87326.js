(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["streamer"],{"19b0":function(t,e,n){},"1ed6":function(t,e,n){},2532:function(t,e,n){"use strict";var i=n("23e7"),o=n("5a34"),s=n("1d80"),a=n("ab13");i({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~String(s(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},"5a34":function(t,e,n){var i=n("44e7");t.exports=function(t){if(i(t))throw TypeError("The method doesn't accept regular expressions");return t}},"6a01":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frow centered"},[n("DesktopCapturer",{ref:"capturer",attrs:{enableVideo:t.enableVideo,enableAudio:t.enableAudio,isMic:t.isMic,resolution:t.resolution},on:{isSharing:t.onIsSharing,gotStream:t.onGotStream,setDefaults:t.onSetDefaults}}),n("StreamerConnection",{ref:"connection",attrs:{bandwidth:t.bandwidth,codecs:t.codecs,roomId:t.room_id,roomPassword:t.room_password,privacy:t.privacy,enableVideo:t.enableVideo,enableAudio:t.enableAudio,isP2POnly:t.isP2POnly},on:{sessionId:t.onSessionId,viewerCount:t.onViewerCount,idTaken:t.onIdTaken}}),n("div",{staticClass:"col-md-1-2"},[n("router-link",{attrs:{id:"logo",to:"/"}},[n("LogoSvg")],1),n("div",{class:{live:t.isSharingOn&&t.sessionId},attrs:{id:"live-indicator"}},[t._v("LIVE")])],1),n("div",{staticClass:"col-md-1-2"},[t.useridAlreadyTaken?n("div",{attrs:{id:"id-taken"}},[t._v("Whoops,"),n("b",[t._v(" "+t._s(t.useridAlreadyTaken)+" ")]),t._v("already taken! Please choose another room name.")]):t._e(),t.isSharingOn&&t.sessionId?t._e():n("section",{attrs:{id:"setup-section"}},[n("label",{staticClass:"row-start",attrs:{id:"room-id-label"}},[n("span",{staticClass:"shrink-0"},[t._v("2n.fm/")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.room_id,expression:"room_id"}],attrs:{id:"room-id",type:"text",placeholder:"Random"},domProps:{value:t.room_id},on:{change:t.setRoomName,blur:t.setRoomName,input:function(e){e.target.composing||(t.room_id=e.target.value)}}})]),n("section",{attrs:{id:"options"}},[n("div",{staticClass:"label"},[t._v("Options")]),n("div",{staticClass:"label right-item",on:{click:function(e){t.showAdvancedOptions=!t.showAdvancedOptions}}},[t.showAdvancedOptions?t._e():n("div",{staticClass:"gear frow nowrap"},[n("GearSvg"),n("sup",[t._v("!")])],1),t.showAdvancedOptions?n("div",{staticClass:"x-icon frow centered"},[n("XSvg")],1):t._e()]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showAdvancedOptions,expression:"showAdvancedOptions"}],staticClass:"advanced"},[n("div",{staticClass:"frow centered"},[n("label",{staticClass:"row-center mb-0"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.isP2POnly,expression:"isP2POnly"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isP2POnly)?t._i(t.isP2POnly,null)>-1:t.isP2POnly},on:{change:function(e){var n=t.isP2POnly,i=e.target,o=!!i.checked;if(Array.isArray(n)){var s=null,a=t._i(n,s);i.checked?a<0&&(t.isP2POnly=n.concat([s])):a>-1&&(t.isP2POnly=n.slice(0,a).concat(n.slice(a+1)))}else t.isP2POnly=o}}}),t._v("Only send audio and video via peer-to-peer connections")])])]),n("div",{staticClass:"frow gutters"},[n("div",{staticClass:"col-xs-1-2"},[n("div",{staticClass:"settings-item"},[n("label",[t._v("Resolution"),n("select",{directives:[{name:"model",rawName:"v-model",value:t.resolution,expression:"resolution"}],attrs:{id:"resolutions"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.resolution=e.target.multiple?n:n[0]}}},[n("option",{attrs:{selected:""},domProps:{value:t.Resolutions.FitScreen}},[t._v("Fit Screen")]),n("option",{domProps:{value:t.Resolutions.Fit4K}},[t._v("4K (2160p)")]),n("option",{domProps:{value:t.Resolutions.Fit2K}},[t._v("2K (1440p)")]),n("option",{domProps:{value:t.Resolutions.Fit1080p}},[t._v("Full-HD (1080p)")]),n("option",{domProps:{value:t.Resolutions.Fit720p}},[t._v("HD (720p)")]),n("option",{domProps:{value:t.Resolutions.Fit480p}},[t._v("SD (480p)")]),n("option",{domProps:{value:t.Resolutions.Fit360p}},[t._v("SD (360p)")])])])])]),n("div",{staticClass:"col-xs-1-2"},[n("label",{staticClass:"row-start"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.privacy,expression:"privacy"}],attrs:{type:"radio",value:"private"},domProps:{checked:t._q(t.privacy,"private")},on:{change:function(e){t.privacy="private"}}}),t._v("Private Room")]),n("label",{staticClass:"row-start mb-0"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.privacy,expression:"privacy"}],attrs:{type:"radio",value:"public"},domProps:{checked:t._q(t.privacy,"public")},on:{change:function(e){t.privacy="public"}}}),t._v("Public Room")])]),n("div",{staticClass:"col-xs-1-2"},[n("label",{staticClass:"row-start"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.isMic,expression:"isMic"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isMic)?t._i(t.isMic,null)>-1:t.isMic},on:{change:function(e){var n=t.isMic,i=e.target,o=!!i.checked;if(Array.isArray(n)){var s=null,a=t._i(n,s);i.checked?a<0&&(t.isMic=n.concat([s])):a>-1&&(t.isMic=n.slice(0,a).concat(n.slice(a+1)))}else t.isMic=o}}}),t._v("Enable Microphone")])]),n("div",{staticClass:"col-xs-1-2"},[n("label",{staticClass:"row-start"},[t._v("Codec"),n("select",{directives:[{name:"model",rawName:"v-model",value:t.codecs,expression:"codecs"}],staticClass:"ml-5",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.codecs=e.target.multiple?n:n[0]}}},[n("option",{domProps:{value:t.Codecs.vp9}},[t._v("VP9 (Screensharing)")]),n("option",{domProps:{value:t.Codecs.vp8}},[t._v("VP8 (Gaming)")]),n("option",{attrs:{disabled:!t.isP2POnly},domProps:{value:t.Codecs.h264}},[t._v("H.264")])])])])])]),n("section",{attrs:{id:"stream-section"}},[n("div",{attrs:{id:"start"}},[n("div",{staticClass:"label"},[t._v("Start")]),n("div",{staticClass:"frow gutters"},[n("div",{staticClass:"col-xs-1-3"},[n("div",{staticClass:"stream-button",on:{click:function(e){return t.startStream(!0,!1)}}},[n("div",{staticClass:"frow column-center"},[n("VideoSvg"),t._v("Video Only"),n("div",{staticClass:"and-mic",class:{"opacity-100":t.isMic}},[t._v("& Mic")])],1)])]),n("div",{staticClass:"col-xs-1-3"},[n("div",{staticClass:"stream-button",on:{click:function(e){return t.startStream(!0,!0)}}},[n("div",{staticClass:"frow column-center"},[n("VideoAndAudioSvg"),t._v("Video + Audio"),n("div",{staticClass:"and-mic",class:{"opacity-100":t.isMic}},[t._v("& Mic")])],1)])]),n("div",{staticClass:"col-xs-1-3"},[n("div",{staticClass:"stream-button",on:{click:function(e){return t.startStream(!1,!0)}}},[n("div",{staticClass:"frow column-center"},[n("AudioSvg"),t._v("Audio Only"),n("div",{staticClass:"and-mic",class:{"opacity-100":t.isMic}},[t._v("& Mic")])],1)])])])])])]),t.isSharingOn&&t.sessionId?n("StopSection",{attrs:{sessionId:t.sessionId,viewerCount:t.viewerCount,stream:t.stream,privacy:t.privacy},on:{stopStream:t.stopStream}}):t._e()],1)],1)},o=[],s=(n("99af"),n("caad"),n("ac1f"),n("5319"),n("498a"),{FitScreen:"FitScreen",Fit4K:"Fit4K",Fit2K:"Fit2K",Fit1080p:"Fit1080p",Fit720p:"Fit720p",Fit480p:"Fit480p",Fit360p:"Fit360p"}),a=function t(e){switch(console.log("resolution:",e),e){case s.Fit4K:return{width:3840,height:2160};case s.Fit2K:return{width:2560,height:1440};case s.Fit1080p:return{width:1920,height:1080};case s.Fit720p:return{width:1280,height:720};case s.Fit480p:return{width:720,height:480};case s.Fit360p:return{width:640,height:360};case s.FitScreen:default:return(window||{}).screen||t(s.Fit480p)}},r={vp8:"vp8",vp9:"vp9",h264:"h264"},c=n("8923"),l=n("111a"),d=n("e277"),u=n("2821"),h=n("25ca"),v={functional:!0,render(t,e){const{_c:n,_v:i,data:o,children:s=[]}=e,{class:a,staticClass:r,style:c,staticStyle:l,attrs:d={},...u}=o;return n("svg",{class:[a,r],style:[c,l],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},d),...u},s.concat([n("path",{attrs:{d:"M24 13.616v-3.232l-2.869-1.02a9.445 9.445 0 00-.811-1.955l1.308-2.751-2.285-2.285-2.751 1.307a9.468 9.468 0 00-1.955-.811L13.616 0h-3.232L9.363 2.869a9.413 9.413 0 00-1.955.811L4.657 2.372 2.372 4.657 3.68 7.409a9.39 9.39 0 00-.811 1.955L0 10.384v3.232l2.869 1.02a9.39 9.39 0 00.811 1.955l-1.308 2.751 2.285 2.286 2.751-1.308a9.468 9.468 0 001.955.811L10.384 24h3.232l1.021-2.869a9.445 9.445 0 001.955-.811l2.751 1.308 2.285-2.286-1.308-2.751a9.445 9.445 0 00.811-1.955L24 13.616zM12 16a4 4 0 110-8 4 4 0 010 8z"}})]))}},p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"stop-section"}},[n("router-link",{attrs:{id:"public-link",to:t.sessionId,target:"_blank"}},[t._v(t._s("2n.fm/"+t.sessionId))]),n("div",{attrs:{id:"copy-button"},on:{click:function(e){return t.copyUrl()}}},[n("CopySvg")],1),t.copyNotification?n("div",{staticClass:"animate-fade-in",attrs:{id:"copy-notification"}},[t._v("Copied")]):t._e(),n("div",{staticClass:"viewer-count mt-20"},[n("span",{attrs:{id:"viewer-count-number"}}),t._v(t._s(t.viewerCount)+" "+t._s(1===t.viewerCount?"Viewer":"Viewers"))]),n("div",{staticClass:"frow mt-5 mb-30"},[n("div",{staticClass:"public-indicator",class:{public:"public"===t.privacy}},[t._v(t._s(t.privacy))])]),t.showPreview?n("Player",{staticClass:"mb-20",attrs:{stream:t.stream,receiverViewerCount:t.viewerCount,disableAutoplay:!0}}):t._e(),n("div",{staticClass:"frow row-between"},[n("button",{staticClass:"col-xs-2-5 streamer-control-buttons",attrs:{type:"button"},on:{click:t.stopStream}},[t._v("End Sharing")]),n("button",{staticClass:"col-xs-2-5 streamer-control-buttons",attrs:{type:"button"},on:{click:function(e){t.showPreview=!t.showPreview}}},[t._v(t._s(t.showPreview?"Hide Preview":"Show Preview"))])]),t._m(0)],1)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frow width-100 mt-20"},[n("a",{staticClass:"text-underline",attrs:{href:"https://caniuse.com/#search=getDisplayMedia",rel:"noreferrer",target:"_blank"}},[t._v("OS and Browser Limitations")])])}],f=(n("a9e3"),{functional:!0,render(t,e){const{_c:n,_v:i,data:o,children:s=[]}=e,{class:a,staticClass:r,style:c,staticStyle:l,attrs:d={},...u}=o;return n("svg",{class:[a,r],style:[c,l],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},d),...u},s.concat([n("path",{attrs:{d:"M18 6V0H0v18h6v6h18V6h-6zM6 16H2V2h14v4H6v10zm16 6H8V8h14v14z"}})]))}}),w=n("8137"),g={name:"StopSection",components:{CopySvg:f,Player:w["a"]},props:{stream:{type:MediaStream,default:null},sessionId:{type:String,default:null},viewerCount:{type:Number,default:0},privacy:{type:String,default:"private"}},data:function(){return{copyNotification:!1,showPreview:!1}},watch:{},methods:{copyUrl:function(){var t=this,e=document.getElementById("public-link"),n=document.createElement("input");n.setAttribute("value","https://".concat(e.innerText)),document.body.appendChild(n),n.select();var i=document.execCommand("copy"),o=document.getElementById("copy-notification");i?(document.body.removeChild(n),this.copyNotification=!0,setTimeout((function(){t.copyNotification=!1}),5e3)):o.innerText="Copy failed"},stopStream:function(){this.$emit("stopStream")}}},y=g,b=(n("779c"),n("2877")),S=Object(b["a"])(y,p,m,!1,null,"c3e5f46a",null),C=S.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},P=[],k=(n("4160"),n("159b"),n("96cf"),n("1da1")),A={name:"DesktopCapturer",props:{enableVideo:Boolean,enableAudio:Boolean,isMic:Boolean,resolution:{type:String,default:s.FitScreen}},data:function(){return{isSharing:!1}},watch:{isSharing:function(t){this.$emit("isSharing",t)}},methods:{setDefaults:function(){this.$emit("setDefaults"),this.isSharing=!1},startStream:function(){this.setDefaults(),this.isSharing=!0,this.captureDesktop()},stopStream:function(){this.isSharing=!1,this.setDefaults()},captureDesktop:function(){this.onAccessApproved()},onAccessApproved:function(){var t=this,e=a(this.resolution),n={video:{width:{ideal:e.width},height:{ideal:e.height}},audio:{autoGainControl:!1,echoCancellation:!1,noiseSuppression:!1,googDisableLocalEcho:!1}},i=function(){var t=Object(k["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.mediaDevices.getUserMedia({audio:!0,video:!1});case 3:e=t.sent,t.next=10;break;case 6:t.prev=6,t.t0=t["catch"](0),console.error("Error getting microphone",t.t0),alert("Your browser denied microphone access");case 10:return t.abrupt("return",e);case 11:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}(),o=function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getDisplayMedia(n);case 3:i=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.setDefaults();case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(){var n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=null,!0!==t.isMic){e.next=5;break}return e.next=4,i();case 4:n=e.sent;case 5:return e.next=7,o();case 7:s=e.sent,t.enableAudio&&0===s.getAudioTracks().length&&alert('Make sure to check the "Share audio" box in Google Chrome'),s.getAudioTracks().length>0&&(s.systemAudioId=s.getAudioTracks()[0].id),n&&(s.addTrack(n.getAudioTracks()[0]),s.micId=n.getAudioTracks()[0].id),t.gotStream(s);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();s()},gotStream:function(t){var e=this;t?(t.addEventListener("inactive",(function(){e.setDefaults()})),this.addStreamStopListener(t,(function(){e.setDefaults()})),this.$emit("gotStream",t)):this.setDefaults()},addStreamStopListener:function(t,e){var n="ended";"oninactive"in t&&(n="inactive"),t.addEventListener(n,(function(){e(),e=function(){}}),!1),t.getAudioTracks().forEach((function(t){t.addEventListener(n,(function(){e(),e=function(){}}),!1)})),t.getVideoTracks().forEach((function(t){t.addEventListener(n,(function(){e(),e=function(){}}),!1)}))}}},O=A,x=Object(b["a"])(O,_,P,!1,null,null,null),I=x.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},M=[],D=(n("2532"),n("3da5")),E=n("e854"),T={name:"StreamerConnection",props:{bandwidth:{type:Number,default:8192},codecs:{type:String,default:"vp8"},roomPassword:{type:String,default:""},roomId:{type:String,default:""},privacy:{type:String,default:"private"},enableVideo:{type:Boolean,default:!1},enableAudio:{type:Boolean,default:!1},isP2POnly:{type:Boolean,default:!1}},data:function(){return{connection:null}},mounted:function(){window.addEventListener("offline",this.setOffline,!1),window.addEventListener("online",this.setOnline,!1)},beforeDestroy:function(){window.removeEventListener("offline",this.setOffline,!1),window.removeEventListener("online",this.setOnline,!1),this.connection=null,delete this.connection},methods:{shareStreamUsingRTCMultiConnection:function(t){var e=this;this.connection=new RTCMultiConnection,this.connection.socketURL="https://api.2n.fm:9001/",this.connection.autoCloseEntireSession=!0,"public"===this.privacy&&(this.connection.publicRoomIdentifier="desktopCapture"),this.connection.socketMessageEvent="desktopCapture",this.connection.password=null,this.roomPassword&&this.roomPassword.length&&(this.connection.password=this.roomPassword),this.connection.enableLogs=!1,this.connection.session={audio:this.enableAudio,video:this.enableVideo,data:!0,oneway:!0},this.connection.candidates={stun:!0,turn:!this.isP2POnly},this.connection.iceTransportPolicy="all",this.connection.iceProtocols={tcp:!0,udp:!0},this.connection.optionalArgument={optional:[],mandatory:{}},this.connection.channel=this.connection.sessionid=this.connection.userid,this.roomId&&this.roomId.length&&(this.connection.channel=this.connection.sessionid=this.connection.userid=this.roomId),this.connection.autoReDialOnFailure=!0,this.connection.getExternalIceServers=!1,this.connection.extra.isP2POnly=this.isP2POnly,this.connection.iceServers=E["a"].getIceServers(!this.isP2POnly),this.connection.processSdp=function(t){return e.bandwidth&&e.bandwidth&&!isNaN(e.bandwidth)&&"NaN"!=e.bandwidth&&"number"==typeof e.bandwidth&&(t=F(t,e.bandwidth),t=D["a"].setVideoBitrates(t,{min:e.bandwidth,max:e.bandwidth})),t=e.enableAudio&&!e.enableVideo?D["a"].preferCodec(t,e.codecs):D["a"].preferCodec(t,r.h264),t},this.connection.sdpConstraints.mandatory={OfferToReceiveAudio:!1,OfferToReceiveVideo:!1},this.connection.onstream=this.connection.onstreamended=function(t){try{t.mediaElement.pause(),delete t.mediaElement}catch(e){console.error(e)}},this.connection.onUserIdAlreadyTaken=function(t){e.$emit("idTaken",t)},this.connection.dontCaptureUserMedia=!0,this.connection.attachStreams.push(t),!this.enableVideo&&this.connection.attachStreams[0].getVideoTracks().length>0&&this.connection.attachStreams[0].removeTrack(this.connection.attachStreams[0].getVideoTracks()[0]),t.systemAudioId&&(this.connection.extra.systemAudioId=t.systemAudioId),t.micId&&(this.connection.extra.micId=t.micId);var n="-",i=setInterval((function(){return e.connection?e.connection.isInitiator?(e.setViewerCount(0),void clearInterval(i)):(n+=" -",n.length>6&&(n="-"),void e.setViewerCount(n)):(e.setViewerCount(0),void clearInterval(i))}),500);this.connection.socketCustomEvent=this.connection.sessionid;var o=function(t,n,i){i&&alert(i),e.$emit("sessionId",e.connection.sessionid),e.setViewerCount(0),e.connection.socket.on(e.connection.socketCustomEvent,(function(t){t.receivedYourScreen&&e.setViewerCount(e.connection.isInitiator?e.connection.getAllParticipants().length:0)}))};this.connection.onSocketDisconnect=function(){e.connection.getAllParticipants().length>0||e.setDefaults()},this.connection.onSocketError=function(){alert("Unable to connect to the server. Please try again."),setTimeout((function(){e.setDefaults()}),1e3)},this.connection.onmessage=function(t){t.data.newChatMessage&&e.connection.send({receivedChatMessage:!0,checkmark_id:t.data.checkmark_id})},this.connection.open(this.connection.sessionid,o);this.connection.onleave=function(t){var n=e.connection.getAllParticipants(),i=n.length;n.includes(t.userid)&&i--,e.setViewerCount(i)},this.connection.onPeerStateChanged=function(){var t=e.connection.getAllParticipants().length;e.setViewerCount(e.connection.isInitiator?t:0)}},setViewerCount:function(t){this.$emit("viewerCount",t),this.connection&&(this.connection.extra.receiverViewerCount=t,this.connection.updateExtraData())},setOffline:function(){this.connection&&this.connection.attachStreams.length&&this.setDefaults()},setOnline:function(){this.connection&&this.setDefaults()},setDefaults:function(){if(this.connection){this.connection.attachStreams.forEach((function(t){try{t.getTracks().forEach((function(t){try{t.stop()}catch(e){console.error(e)}}))}catch(e){console.error(e)}}));try{this.connection.closeSocket()}catch(t){console.error(t)}this.connection=null}this.setViewerCount(0)}}};function F(t,e){return t=t.replace(/b=AS([^\r\n]+\r\n)/g,""),t=t.replace(/a=mid:video\r\n/g,"a=mid:video\r\nb=AS:"+e+"\r\n"),t}var R=T,L=Object(b["a"])(R,V,M,!1,null,null,null),N=L.exports,$={name:"Streamer",metaInfo:function(){return{title:"2N.fm ".concat(this.isSharingOn&&this.sessionId?"· ".concat(this.room_id," (").concat(this.viewerCount,")"):"")}},components:{LogoSvg:c["a"],VideoSvg:l["a"],AudioSvg:d["a"],VideoAndAudioSvg:u["a"],XSvg:h["a"],GearSvg:v,StopSection:C,DesktopCapturer:I,StreamerConnection:N},data:function(){return{isSharingOn:!1,sessionId:null,stream:null,desktop_id:null,constraints:null,room_password:"",room_id:window.localStorage.getItem("room_id")||"",resolution:s.FitScreen,codecs:r.vp8,bandwidth:null,enableVideo:!1,enableAudio:!1,streaming_method:"RTCMultiConnection",viewerCount:0,privacy:"private",useridAlreadyTaken:"",isMic:!1,showAdvancedOptions:!1,isP2POnly:!1}},computed:{Resolutions:function(){return s},Codecs:function(){return r}},watch:{isP2POnly:function(t){t||this.codecs!=r.h264||(this.codecs=r.vp8)}},mounted:function(){},methods:{startStream:function(t,e){if(this.enableVideo=t,this.enableAudio=e,this.$refs.connection.connection&&this.$refs.connection.connection.attachStreams[0])this.onSetDefaults();else{this.room_id="",window.localStorage.getItem("room_id")&&(this.room_id=window.localStorage.getItem("room_id"));var n=["streamer"];n.includes(this.room_id)?this.useridAlreadyTaken="streamer":this.$refs.capturer.startStream()}},stopStream:function(){this.$refs.capturer.stopStream(),this.stream=null},setRoomName:function(){this.room_id=this.room_id.trim().replace(/\s+/g,"-").replace(/[^a-zA-Z0-9-_]/g,"").toLowerCase(),window.localStorage.setItem("room_id",this.room_id)},setBandwidth:function(t){try{this.bandwidth=parseInt(t)}catch(e){this.bandwidth=null}},onGotStream:function(t){this.stream=t,this.stream.enableVideo=this.enableVideo,this.stream.enableAudio=this.enableAudio,this.$refs.connection.shareStreamUsingRTCMultiConnection(this.stream)},onSessionId:function(t){this.useridAlreadyTaken="",this.sessionId=t},onSetDefaults:function(){this.$refs.connection.setDefaults()},onIdTaken:function(t){this.useridAlreadyTaken=t,this.room_id=""},onIsSharing:function(t){this.isSharingOn=t,this.isSharingOn||(this.sessionId=null)},onViewerCount:function(t){this.viewerCount=t}}},B=$,K=(n("b158"),Object(b["a"])(B,i,o,!1,null,"acc2040c",null));e["default"]=K.exports},"779c":function(t,e,n){"use strict";var i=n("19b0"),o=n.n(i);o.a},ab13:function(t,e,n){var i=n("b622"),o=i("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[o]=!1,"/./"[t](e)}catch(i){}}return!1}},b158:function(t,e,n){"use strict";var i=n("1ed6"),o=n.n(i);o.a},caad:function(t,e,n){"use strict";var i=n("23e7"),o=n("4d64").includes,s=n("44d2"),a=n("ae40"),r=a("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:!r},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")}}]);
//# sourceMappingURL=streamer.b9e87326.js.map
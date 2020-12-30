(self.webpackChunk=self.webpackChunk||[]).push([[11],{2657:(t,e,s)=>{"use strict";s.d(e,{Z:()=>a});const r={props:{type:{type:String,default:"submit"},size:{type:String,default:"normal"}},computed:{classes:function(){return{"py-1.5 px-5 text-sm":"normal"===this.size,"py-1.5 px-4 text-xs":"small"===this.size}}}};const a=(0,s(1900).Z)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"inline-flex items-center font-semibold tracking-widest text-white bg-blue-500 rounded-md border-0 border-transparent transition duration-150 ease-in-out hover:bg-blue-600 active:bg-blue-900 focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",class:t.classes,attrs:{type:t.type}},[t._t("default")],2)}),[],!1,null,null,null).exports},2497:(t,e,s)=>{"use strict";s.d(e,{Z:()=>a});const r={name:"avatar-img",components:{UserAvatar:s(2241).Z}};const a=(0,s(1900).Z)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("user-avatar",{attrs:{src:t.$page.props.user.profile_photo_url,name:t.$page.props.user.name}})}),[],!1,null,null,null).exports},5096:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i});const r={name:"ImageViewer",props:["show","sources","startIndex"],data:function(){return{currentSrcIndex:0}},computed:{isFirstImg:function(){return 0===this.currentSrcIndex},isLastImg:function(){return this.currentSrcIndex===this.sources.length-1},currentSrc:function(){return this.sources[this.currentSrcIndex]}},watch:{startIndex:function(){this.currentSrcIndex=this.startIndex},show:{immediate:!0,handler:function(t){document.body.style.overflow=t?"hidden":null}}},methods:{next:function(){this.isLastImg||this.currentSrcIndex++},prev:function(){this.isFirstImg||this.currentSrcIndex--}}};var a=s(1900);const n=(0,a.Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("portal",{attrs:{to:"imageViewer"}},[s("transition",{attrs:{"enter-active-class":"duration-200","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"duration-75","leave-class":"opacity-100","leave-to-class":"opacity-0"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"fixed inset-0 bg-black bg-opacity-90"},[s("button",{staticClass:"absolute top-2 left-2 z-20 p-3 text-gray-100 rounded-full transition duration-150 ease-in-out focus:outline-none hover:bg-black hover:bg-opacity-70 focus:bg-opacity-70 focus:bg-gray-800",on:{click:function(e){return t.$emit("close")}}},[s("svg",{staticClass:"w-7 h-7",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])]),t._v(" "),s("img",{key:t.currentSrcIndex,staticClass:"object-contain w-full h-full",attrs:{src:t.currentSrc,alt:"image"}}),t._v(" "),s("div",{staticClass:"flex absolute inset-y-0 left-2 z-10 items-center sm:left-3"},[s("transition",{attrs:{"enter-active-class":"duration-200","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"duration-75","leave-class":"opacity-100","leave-to-class":"opacity-0"}},[t.isFirstImg?t._e():s("button",{staticClass:"p-1 text-gray-100 bg-black bg-opacity-40 rounded-full transition duration-150 ease-in-out focus:outline-none hover:bg-black hover:bg-opacity-70 focus:bg-gray-800",on:{click:function(e){return t.prev()}}},[s("svg",{staticClass:"w-8 h-8 sm:w-14 sm:h-14",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}})])])])],1),t._v(" "),s("div",{staticClass:"flex absolute inset-y-0 right-2 z-10 items-center sm:right-3"},[s("transition",{attrs:{"enter-active-class":"duration-200","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"duration-75","leave-class":"opacity-100","leave-to-class":"opacity-0"}},[t.isLastImg?t._e():s("button",{staticClass:"p-1 text-gray-100 bg-black bg-opacity-40 rounded-full transition duration-150 ease-in-out focus:outline-none hover:bg-black hover:bg-opacity-70 focus:bg-opacity-70 focus:bg-gray-800",on:{click:function(e){return t.next()}}},[s("svg",{staticClass:"w-8 h-8 sm:w-14 sm:h-14",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])])])],1)])])],1)}),[],!1,null,"e8f4e624",null).exports,o={name:"images-stack",props:{imageSources:{type:Array,default:[]},withImageViewer:{type:Boolean,default:!0},canDelete:{type:Boolean,default:!1}},components:{ImageViewer:n},data:function(){return{isImageViewerShown:!1,imageViewerStartIndex:0}},computed:{imagesWithClasses:function(){return[[],[{src:this.imageSources[0],classes:"row-span-2 col-span-2"}],[{src:this.imageSources[0],classes:"row-span-2"},{src:this.imageSources[1],classes:"row-span-2"}],[{src:this.imageSources[0],classes:"row-span-2"},{src:this.imageSources[1],classes:""},{src:this.imageSources[2],classes:""}],[{src:this.imageSources[0],classes:""},{src:this.imageSources[1],classes:""},{src:this.imageSources[2],classes:""},{src:this.imageSources[3],classes:""}]][this.imageSources.length]}},methods:{showImageViewer:function(t){this.imageViewerStartIndex=t,this.isImageViewerShown=!0},closeImageViewer:function(){this.isImageViewerShown=!1}}};const i=(0,a.Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid overflow-hidden grid-cols-2 grid-rows-2 gap-1 mt-4 h-64 rounded-2xl border md:h-72"},[t._l(t.imagesWithClasses,(function(e,r){return s("div",{staticClass:"relative select-none cursor-pointer",class:e.classes},[s("img",{key:r,staticClass:"object-cover w-full h-full",attrs:{src:e.src,alt:"image"},on:{click:function(e){return t.showImageViewer(r)}}}),t._v(" "),t.canDelete?s("div",{staticClass:"absolute top-2 left-2 text-white",on:{click:function(e){return t.$emit("delete",r)}}},[s("svg",{staticClass:"w-6 h-6",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"}})])]):t._e()])})),t._v(" "),s("image-viewer",{attrs:{show:t.isImageViewerShown,startIndex:t.imageViewerStartIndex,sources:t.imageSources},on:{close:t.closeImageViewer}})],2)}),[],!1,null,null,null).exports},6843:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i});var r=s(2241);const a={name:"Tweet",components:{ImagesStack:s(5096).Z,UserAvatar:r.Z},props:["body","user","images"],data:function(){return{retweets:65,likes:0,bookmarks:5}},computed:{},methods:{log:function(t){console.log(t)}}};var n=s(1900);const o={name:"TweetsList",components:{Tweet:(0,n.Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"overflow-hidden p-4 pb-1 mb-3 bg-white shadow transition duration-150 ease-in-out cursor-pointer sm:p-6 sm:pb-2 hover:bg-gray-50 sm:mb-0 last:sm:border-b-0 sm:border-b-2 sm:border-gray-200 sm:last:rounded-b-md sm:first:rounded-t-md",on:{click:function(t){}}},[s("header",{staticClass:"font-bold text-gray-700"},[s("div",{staticClass:"flex"},[s("user-avatar",{attrs:{src:t.user.profile_photo_url,name:"test"}}),t._v(" "),s("div",{staticClass:"ml-4 text-sm"},[s("inertia-link",{staticClass:"block",attrs:{href:"#"}},[t._v(t._s(t.user.name))]),t._v(" "),s("span",{staticClass:"font-normal text-gray-400"},[t._v("3 minutes ago")])],1)],1)]),t._v(" "),s("div",{staticClass:"my-4 -mx-4 border-t-2 border-gray-100 sm:-mx-6"}),t._v(" "),s("div",{staticClass:"pl-14"},[s("p",{staticClass:"max-w-xl"},[t._v(t._s(t.body))]),t._v(" "),t.images.length>0?s("images-stack",{attrs:{"image-sources":t.images.map((function(t){return t.url}))}}):t._e()],1),t._v(" "),s("div",{staticClass:"flex justify-around items-center pl-14 mt-1 text-sm text-gray-400"},[s("button",{staticClass:"flex flex-1 justify-center items-center py-2 rounded-md transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none hover:text-green-500",on:{click:function(t){t.stopPropagation()}}},[s("svg",{staticClass:"w-5 h-5 fill-current",attrs:{viewBox:"0 0 24 24"}},[s("g",[s("path",{attrs:{d:"M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"}})])]),t._v(" "),s("span",{staticClass:"mt-1 ml-1"},[t._v(t._s(t.retweets||""))])]),t._v(" "),s("button",{staticClass:"flex flex-1 justify-center items-center py-2 rounded-md transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none hover:text-pink-500",on:{click:function(t){t.stopPropagation()}}},[s("svg",{staticClass:"w-5 h-5 fill-current",attrs:{viewBox:"0 0 24 24"}},[s("g",[s("path",{attrs:{d:"M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"}})])]),t._v(" "),s("span",{staticClass:"mt-1 ml-1"},[t._v(t._s(t.likes||""))])]),t._v(" "),s("button",{staticClass:"flex flex-1 justify-center items-center py-2 rounded-md transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none hover:text-yellow-500",on:{click:function(t){t.stopPropagation()}}},[s("svg",{staticClass:"w-5 h-5 fill-current",attrs:{viewBox:"0 0 24 24"}},[s("g",[s("path",{attrs:{d:"M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"}})])]),t._v(" "),s("span",{staticClass:"mt-1 ml-1"},[t._v(t._s(t.bookmarks||""))])])])])}),[],!1,null,null,null).exports},props:["tweets"]};const i=(0,n.Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.tweets,(function(e){return s("Tweet",t._b({key:e.id},"Tweet",e,!1))})),1)}),[],!1,null,null,null).exports},2241:(t,e,s)=>{"use strict";s.d(e,{Z:()=>a});const r={name:"avatar-img",props:["src","name"]};const a=(0,s(1900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"overflow-hidden relative w-10 h-10 rounded-full"},[s("img",{staticClass:"object-cover absolute z-0 w-full h-full",attrs:{src:t.src,alt:t.name}}),t._v(" "),s("div",{staticClass:"absolute inset-0 rounded-full shadow-inner"})])}),[],!1,null,null,null).exports},4152:(t,e,s)=>{"use strict";s.d(e,{Z:()=>h});var r=s(1900);const a=(0,r.Z)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"flex items-center"},[e("svg",{attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M18.586 10.081c-1.439 0-1.35 2.802-2.029 4.071-.114.211-.425.184-.5-.044-.771-2.364-.419-8.108-2.51-8.108-2.189 0-1.648 7.433-2.5 10.462-.063.23-.381.25-.474.028-.9-2.161-.799-6.875-2.502-6.875-1.762 0-1.612 3.949-2.302 5.54-.091.213-.392.22-.493.01-.503-1.049-.664-3.165-2.564-3.165h-2.213c-.275 0-.499.224-.499.499s.224.501.499.501h2.213c1.572 0 1.038 3.484 2.854 3.484 1.684 0 1.502-3.79 2.223-5.47.088-.208.382-.202.466.006.805 2.047.79 6.98 2.641 6.98 2.077 0 1.337-7.856 2.443-10.621.083-.211.384-.222.479-.012 1.029 2.25.487 8.126 2.344 8.126 1.639 0 1.737-2.706 2.23-4.038.081-.212.373-.227.474-.027.516 1.001.846 2.572 2.4 2.572h2.235c.275 0 .499-.224.499-.499 0-.276-.224-.5-.499-.5h-2.235c-1.323 0-1.117-2.92-2.68-2.92z"}})])])}),[],!1,null,null,null).exports;const n={props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:function(){return["py-1","bg-white"]}}},data:function(){return{open:!1}},created:function(){var t=this,e=function(e){t.open&&27===e.keyCode&&(t.open=!1)};this.$once("hook:destroyed",(function(){document.removeEventListener("keydown",e)})),document.addEventListener("keydown",e)},computed:{widthClass:function(){return{48:"w-48"}[this.width.toString()]},alignmentClasses:function(){return"left"==this.align?"origin-top-left left-0":"right"==this.align?"origin-top-right right-0":"origin-top"}}};const o=(0,r.Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"relative"},[s("div",{on:{click:function(e){t.open=!t.open}}},[t._t("trigger")],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"fixed inset-0 z-40",on:{click:function(e){t.open=!1}}}),t._v(" "),s("transition",{attrs:{"enter-active-class":"transition ease-out duration-200","enter-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"absolute z-50 mt-2 rounded-md shadow-lg",class:[t.widthClass,t.alignmentClasses],staticStyle:{display:"none"},on:{click:function(e){t.open=!1}}},[s("div",{staticClass:"rounded-md shadow-xs",class:t.contentClasses},[t._t("content")],2)])])],1)}),[],!1,null,null,null).exports;const i={props:["href","as"]};const l=(0,r.Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",["button"==t.as?s("button",{staticClass:"block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",attrs:{type:"submit"}},[t._t("default")],2):s("inertia-link",{staticClass:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",attrs:{href:t.href}},[t._t("default")],2)],1)}),[],!1,null,null,null).exports;const c={props:["href","active"],data:function(){return{hover:!1,focus:!1}},computed:{classes:function(){return this.active?"text-blue-500":"hover:text-gray-700"},barClasses:function(){var t=[];return this.active?t+="bg-blue-500":this.focus?t+="bg-gray-300":this.hover&&(t+="bg-gray-200"),t}}};const u=(0,r.Z)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("inertia-link",{staticClass:"flex relative items-center px-1 pt-1 text-sm leading-5 text-gray-500 select-none focus:outline-none",class:t.classes,attrs:{href:t.href},on:{focus:function(e){t.focus=!0},blur:function(e){t.focus=!1},mouseover:function(e){t.hover=!0},mouseout:function(e){t.hover=!1}}},[t._t("default"),t._v(" "),s("div",{staticClass:"block absolute inset-x-0 bottom-0 -mx-2 h-1 rounded-t-md transition duration-150 ease-in-out",class:t.barClasses})],2)}),[],!1,null,null,null).exports;const d={props:["active","href","as"],computed:{classes:function(){return this.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"}}};const m=(0,r.Z)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",["button"==t.as?s("button",{staticClass:"w-full text-left",class:t.classes},[t._t("default")],2):s("inertia-link",{class:t.classes,attrs:{href:t.href}},[t._t("default")],2)],1)}),[],!1,null,null,null).exports;const p={name:"footer-nav-link",props:["active","href"],computed:{barClasses:function(){if(this.active)return"bg-blue-500"}}};const v=(0,r.Z)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("inertia-link",{staticClass:"relative flex-1 p-2 select-none focus:outline-none",class:[t.active?"text-blue-500":"text-gray-500"],attrs:{href:t.href}},[s("button",{staticClass:"py-2 w-full text-center rounded-md focus:outline-none",class:[t.active?"":"hover:bg-gray-100"]},[t._t("default"),t._v(" "),s("div",{staticClass:"block absolute inset-x-0 bottom-0 mx-6 h-1 rounded-t-md transition duration-150 ease-in-out",class:t.barClasses})],2)])}),[],!1,null,null,null).exports;const f={components:{CurrentUserAvatar:s(2497).Z,FooterNavLink:v,JetApplicationMark:a,JetDropdown:o,JetDropdownLink:l,JetNavLink:u,JetResponsiveNavLink:m},data:function(){return{showingNavigationDropdown:!1}},methods:{switchToTeam:function(t){this.$inertia.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},log:function(t){console.log(t)},logout:function(){axios.post(route("logout").url()).then((function(t){window.location="/"}))}}};const h=(0,r.Z)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pb-16 min-h-screen bg-gray-100"},[s("nav",{staticClass:"relative z-10 bg-white shadow"},[s("div",{staticClass:"px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"},[s("div",{staticClass:"flex justify-between h-16"},[s("div",{staticClass:"flex flex-shrink-0 items-center"},[s("inertia-link",{attrs:{href:t.route("home")}},[s("jet-application-mark",{staticClass:"block w-8 w-auto text-blue-500"})],1)],1),t._v(" "),s("div",{staticClass:"hidden space-x-8 font-bold sm:ml-10 sm:flex"},[s("jet-nav-link",{attrs:{href:t.route("home"),active:t.route().current("home")}},[t._v("\n                            Home\n                        ")]),t._v(" "),s("jet-nav-link",{attrs:{href:t.route("explore.top"),active:t.route().current("explore.*")}},[t._v("\n                            Explore\n                        ")]),t._v(" "),s("jet-nav-link",{attrs:{href:t.route("bookmarks.tweets"),active:t.route().current("bookmarks.*")}},[t._v("\n                            Bookmarks\n                        ")])],1),t._v(" "),s("div",{staticClass:"hidden select-none sm:flex sm:items-center sm:ml-6"},[s("div",{staticClass:"relative ml-3"},[s("jet-dropdown",{attrs:{align:"right",width:"48"},scopedSlots:t._u([{key:"trigger",fn:function(){return[t.$page.props.jetstream.managesProfilePhotos?s("button",{staticClass:"flex text-sm rounded-full border-2 border-transparent transition duration-150 ease-in-out focus:outline-none focus:border-gray-300"},[s("current-user-avatar")],1):s("button",{staticClass:"flex items-center text-sm font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"},[s("div",[t._v(t._s(t.$page.props.user.name))]),t._v(" "),s("div",{staticClass:"ml-1"},[s("svg",{staticClass:"w-4 h-4 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])])]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"block py-2 px-4 text-xs text-gray-400"},[t._v("\n                                        Manage Account\n                                    ")]),t._v(" "),s("jet-dropdown-link",{attrs:{href:t.route("profile.tweets",{username:t.$page.props.user.username||""}),active:t.route().current("profile.tweets")}},[t._v("\n                                        Profile\n                                    ")]),t._v(" "),s("jet-dropdown-link",{attrs:{href:t.route("settings.view"),active:t.route().current("settings.view")}},[t._v("\n                                        Settings\n                                    ")]),t._v(" "),t.$page.props.jetstream.hasApiFeatures?s("jet-dropdown-link",{attrs:{href:t.route("api-tokens.index")}},[t._v("\n                                        API Tokens\n                                    ")]):t._e(),t._v(" "),s("div",{staticClass:"border-t border-gray-100"}),t._v(" "),t.$page.props.jetstream.hasTeamFeatures?[s("div",{staticClass:"block py-2 px-4 text-xs text-gray-400"},[t._v("\n                                            Manage Team\n                                        ")]),t._v(" "),s("jet-dropdown-link",{attrs:{href:t.route("teams.show",t.$page.props.user.current_team)}},[t._v("\n                                            Team Settings\n                                        ")]),t._v(" "),t.$page.props.jetstream.canCreateTeams?s("jet-dropdown-link",{attrs:{href:t.route("teams.create")}},[t._v("\n                                            Create New Team\n                                        ")]):t._e(),t._v(" "),s("div",{staticClass:"border-t border-gray-100"}),t._v(" "),s("div",{staticClass:"block py-2 px-4 text-xs text-gray-400"},[t._v("\n                                            Switch Teams\n                                        ")]),t._v(" "),t._l(t.$page.props.user.all_teams,(function(e){return[s("form",{key:e.id,on:{submit:function(s){return s.preventDefault(),t.switchToTeam(e)}}},[s("jet-dropdown-link",{attrs:{as:"button"}},[s("div",{staticClass:"flex items-center"},[e.id==t.$page.props.user.current_team_id?s("svg",{staticClass:"mr-2 w-5 h-5 text-green-400",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}})]):t._e(),t._v(" "),s("div",[t._v(t._s(e.name))])])])],1)]})),t._v(" "),s("div",{staticClass:"border-t border-gray-100"})]:t._e(),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.logout(e)}}},[s("jet-dropdown-link",{attrs:{as:"button"}},[t._v("\n                                            Logout\n                                        ")])],1)]},proxy:!0}])})],1)]),t._v(" "),s("div",{staticClass:"flex items-center -mr-2 sm:hidden"},[s("button",{staticClass:"inline-flex justify-center items-center p-2 text-gray-400 rounded-md transition duration-150 ease-in-out hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500",on:{click:function(e){t.showingNavigationDropdown=!t.showingNavigationDropdown}}},[s("svg",{staticClass:"w-6 h-6",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"}},[s("path",{class:{hidden:t.showingNavigationDropdown,"inline-flex":!t.showingNavigationDropdown},attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}}),t._v(" "),s("path",{class:{hidden:!t.showingNavigationDropdown,"inline-flex":t.showingNavigationDropdown},attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])])])]),t._v(" "),s("div",{staticClass:"sm:hidden",class:{block:t.showingNavigationDropdown,hidden:!t.showingNavigationDropdown}},[s("div",{staticClass:"pt-4 pb-1 border-t border-gray-200"},[s("div",{staticClass:"flex items-center px-4"},[s("div",{staticClass:"flex-shrink-0"},[s("img",{staticClass:"w-10 h-10 rounded-full",attrs:{src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name}})]),t._v(" "),s("div",{staticClass:"ml-3"},[s("div",{staticClass:"text-base font-medium text-gray-800"},[t._v(t._s(t.$page.props.user.name))]),t._v(" "),s("div",{staticClass:"text-sm font-medium text-gray-500"},[t._v(t._s(t.$page.props.user.email))])])]),t._v(" "),s("div",{staticClass:"mt-3 space-y-1"},[s("jet-responsive-nav-link",{attrs:{href:t.route("profile.tweets",{username:t.$page.props.user.username||""}),active:t.route().current("profile.tweets")}},[t._v("\n                            Profile\n                        ")]),t._v(" "),s("jet-responsive-nav-link",{attrs:{href:t.route("settings.view"),active:t.route().current("settings.view")}},[t._v("\n                            Settings\n                        ")]),t._v(" "),t.$page.props.jetstream.hasApiFeatures?s("jet-responsive-nav-link",{attrs:{href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")}},[t._v("\n                            API Tokens\n                        ")]):t._e(),t._v(" "),s("form",{attrs:{method:"POST"},on:{submit:function(e){return e.preventDefault(),t.logout(e)}}},[s("jet-responsive-nav-link",{attrs:{as:"button"}},[t._v("\n                                Logout\n                            ")])],1),t._v(" "),t.$page.props.jetstream.hasTeamFeatures?[s("div",{staticClass:"border-t border-gray-200"}),t._v(" "),s("div",{staticClass:"block py-2 px-4 text-xs text-gray-400"},[t._v("\n                                Manage Team\n                            ")]),t._v(" "),s("jet-responsive-nav-link",{attrs:{href:t.route("teams.show",t.$page.props.user.current_team),active:t.route().current("teams.show")}},[t._v("\n                                Team Settings\n                            ")]),t._v(" "),s("jet-responsive-nav-link",{attrs:{href:t.route("teams.create"),active:t.route().current("teams.create")}},[t._v("\n                                Create New Team\n                            ")]),t._v(" "),s("div",{staticClass:"border-t border-gray-200"}),t._v(" "),s("div",{staticClass:"block py-2 px-4 text-xs text-gray-400"},[t._v("\n                                Switch Teams\n                            ")]),t._v(" "),t._l(t.$page.props.user.all_teams,(function(e){return[s("form",{key:e.id,on:{submit:function(s){return s.preventDefault(),t.switchToTeam(e)}}},[s("jet-responsive-nav-link",{attrs:{as:"button"}},[s("div",{staticClass:"flex items-center"},[e.id==t.$page.props.user.current_team_id?s("svg",{staticClass:"mr-2 w-5 h-5 text-green-400",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}})]):t._e(),t._v(" "),s("div",[t._v(t._s(e.name))])])])],1)]}))]:t._e()],2)])])]),t._v(" "),s("main",[s("transition",{attrs:{"enter-active-class":"duration-300 ease-out","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"duration-300 ease-out","leave-class":"opacity-100","leave-to-class":"opacity-0",mode:"out-in"}},[t._t("default")],2)],1),t._v(" "),s("footer",{staticClass:"flex fixed inset-x-0 bottom-0 z-30 justify-between bg-white border-t border-gray-200 shadow-md sm:hidden"},[s("footer-nav-link",{attrs:{href:t.route("home"),active:t.route().current("home")}},[s("svg",{staticClass:"inline-block w-6 h-6",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"}})])]),t._v(" "),s("footer-nav-link",{attrs:{href:t.route("explore.top"),active:t.route().current("explore.*")}},[s("svg",{staticClass:"inline-block",attrs:{width:"24",height:"24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[s("path",{attrs:{d:"M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm1.476 14.955c.988-.405 1.757-1.211 2.116-2.216l2.408-6.739-6.672 2.387c-1.006.36-1.811 1.131-2.216 2.119l-3.065 7.494 7.429-3.045zm-.122-4.286c.551.551.551 1.446 0 1.996-.551.551-1.445.551-1.996 0-.551-.55-.551-1.445 0-1.996.551-.551 1.445-.551 1.996 0z"}})])]),t._v(" "),s("footer-nav-link",{attrs:{href:t.route("bookmarks.tweets"),active:t.route().current("bookmarks.*")}},[s("svg",{staticClass:"inline-block w-6 h-6",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"}})])])],1),t._v(" "),s("portal-target",{attrs:{name:"modal",multiple:""}}),t._v(" "),s("portal-target",{staticClass:"relative z-50",attrs:{name:"imageViewer",multiple:""}})],1)}),[],!1,null,null,null).exports},9011:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>h});var r=s(4152),a=s(2497),n=s(2657);const o={name:"Card",computed:{hasHeader:function(){return!!this.$slots.header},hasActions:function(){return!!this.$slots.actions}}};var i=s(1900);const l=(0,i.Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"overflow-hidden bg-white shadow sm:rounded-md"},[s("div",{staticClass:"p-4 sm:p-6"},[t.hasHeader?s("header",{staticClass:"font-bold text-gray-700"},[t._t("header"),t._v(" "),s("div",{staticClass:"my-4 -mx-4 sm:-mx-6 border-t-2 border-gray-100"})],2):t._e(),t._v(" "),t._t("default")],2),t._v(" "),t.hasActions?s("div",{staticClass:"flex justify-between items-center p-3 py-2 mt-2 bg-gray-50"},[t._t("actions")],2):t._e()])}),[],!1,null,"6ac54299",null).exports;function c(t,e){var s;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(s=function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);"Object"===s&&t.constructor&&(s=t.constructor.name);if("Map"===s||"Set"===s)return Array.from(t);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return u(t,e)}(t))||e&&t&&"number"==typeof t.length){s&&(t=s);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o=!0,i=!1;return{s:function(){s=t[Symbol.iterator]()},n:function(){var t=s.next();return o=t.done,t},e:function(t){i=!0,n=t},f:function(){try{o||null==s.return||s.return()}finally{if(i)throw n}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,r=new Array(e);s<e;s++)r[s]=t[s];return r}const d={name:"tweet-form",components:{ImagesStack:s(5096).Z,CurrentUserAvatar:a.Z,VButton:n.Z,VCard:l},data:function(){return{form:this.$inertia.form({body:"",images:[]},{bag:"postTweet"}),imagesPreview:[],imagesError:""}},computed:{bodyWordsCountClasses:function(){return 0===this.form.body.length?"text-gray-600":this.form.body.length<=280?"text-green-500":"text-red-500"}},methods:{postTweet:function(){var t=this;this.form.images=this.$refs.images.files,this.form.post(route("tweets.store"),{preserveScroll:!0,onSuccess:function(){t.imagesPreview=[]}})},updateImagesPreview:function(){var t,e=this,s=c(this.$refs.images.files);try{for(s.s();!(t=s.n()).done;){var r=t.value,a=new FileReader;a.onload=function(t){4===e.imagesPreview.length?(e.imagesError="You may not have more than 4 images.",setTimeout((function(){e.imagesError=""}),2500)):e.imagesPreview.push(t.target.result)},a.readAsDataURL(r)}}catch(t){s.e(t)}finally{s.f()}},removeImagePreview:function(t){console.log(t),this.imagesPreview=this.imagesPreview.filter((function(e,s){return s!==t}))}}};const m=(0,i.Z)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n        Tweet something\n    ")]},proxy:!0},{key:"actions",fn:function(){return[s("div",{staticClass:"flex items-center text-blue-500"},[s("button",{on:{click:function(e){return t.$refs.images.click()}}},[s("input",{ref:"images",staticClass:"hidden",attrs:{type:"file",multiple:""},on:{change:t.updateImagesPreview}}),t._v(" "),s("svg",{staticClass:"w-6 h-6",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z","clip-rule":"evenodd"}})])])]),t._v(" "),s("v-button",{nativeOn:{click:function(e){return t.postTweet(e)}}},[t._v("Tweet")])]},proxy:!0}])},[t._v(" "),s("div",{staticClass:"flex"},[s("current-user-avatar"),t._v(" "),s("div",{staticClass:"pl-3 w-full"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.body,expression:"form.body"}],staticClass:"w-full rounded border-0 focus:bg-gray-50 focus:ring-0 focus:border-black",attrs:{name:"tweet",rows:"5",placeholder:"What's happening?"},domProps:{value:t.form.body},on:{input:function(e){e.target.composing||t.$set(t.form,"body",e.target.value)}}}),t._v(" "),s("div",{staticClass:"flex justify-between"},[s("div",[s("p",{staticClass:"ml-3 text-xs text-red-500"},[t._v(t._s(t.form.error("body")))]),t._v(" "),s("p",{staticClass:"ml-3 text-xs text-red-500"},[t._v(t._s(t.imagesError))])]),t._v(" "),s("span",{staticClass:"flex-shrink-0 ml-5 text-xs",class:t.bodyWordsCountClasses},[t._v(t._s(t.form.body.length)+" / 280")])]),t._v(" "),0!==t.imagesPreview.length?s("images-stack",{attrs:{"image-sources":t.imagesPreview,canDelete:!0},on:{delete:t.removeImagePreview}}):t._e()],1)],1)])}),[],!1,null,null,null).exports;const p={name:"sidebar",components:{VCard:l},data:function(){return{hashtags:["Lorem","ipsum","dolor","sit","amet","consectetur","adipisicing"]}}};const v=(0,i.Z)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n            Trends for you\n        ")]},proxy:!0}])},[t._v(" "),s("div",{staticClass:"space-y-4"},t._l(t.hashtags,(function(e){return s("div",[s("p",{staticClass:"font-bold text-gray-800"},[t._v("#"+t._s(e))]),t._v(" "),s("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v(t._s(Math.ceil(100*Math.random()))+"k Tweets")])])})),0)])}),[],!1,null,null,null).exports;const f={name:"Home",components:{TweetsList:s(6843).Z,TrendsSidebarSection:v,TweetForm:m},layout:r.Z,metaInfo:function(){return{title:"Home - Tweeter"}},data:function(){return{tweets:[{user:{name:"Mohammed Alhalwachi"},body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor lorem a ipsum iaculis pulvinar. Nunc consectetur placerat tincidunt. Nulla facilisi. Suspendisse erat curae.",images:["https://picsum.photos/1280/720","https://picsum.photos/500/500","https://picsum.photos/450/2860"],createdAt:""},{user:{name:"Mohammed Alhalwachi"},body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor lorem a ipsum iaculis pulvinar. Nunc consectetur placerat tincidunt. Nulla facilisi. Suspendisse erat curae.",images:["https://picsum.photos/1280/720","https://picsum.photos/500/500","https://picsum.photos/450/2860"],createdAt:""},{user:{name:"Mohammed Alhalwachi"},body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor lorem a ipsum iaculis pulvinar. Nunc consectetur placerat tincidunt. Nulla facilisi. Suspendisse erat curae.",images:["https://picsum.photos/1280/720","https://picsum.photos/500/500","https://picsum.photos/450/2860"],createdAt:""},{user:{name:"Mohammed Alhalwachi"},body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor lorem a ipsum iaculis pulvinar. Nunc consectetur placerat tincidunt. Nulla facilisi. Suspendisse erat curae.",images:["https://picsum.photos/1280/720","https://picsum.photos/500/500","https://picsum.photos/450/2860"],createdAt:""}]}}};const h=(0,i.Z)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container flex py-8 mx-auto space-x-2 space-x-4 max-w-7xl sm:p-4"},[s("div",{staticClass:"w-full md:w-3/4"},[s("tweet-form"),t._v(" "),s("div",{staticClass:"mt-8"},[s("TweetsList",{attrs:{tweets:t.tweets}})],1)],1),t._v(" "),s("aside",{staticClass:"hidden md:block w-1/4"},[s("trends-sidebar-section")],1)])}),[],!1,null,null,null).exports},1900:(t,e,s)=>{"use strict";function r(t,e,s,r,a,n,o,i){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=s,c._compiled=!0),r&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):a&&(l=i?function(){a.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}s.d(e,{Z:()=>r})}}]);
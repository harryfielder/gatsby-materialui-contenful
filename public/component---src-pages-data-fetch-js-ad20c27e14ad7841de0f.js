(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"D+OZ":function(e,t,a){"use strict";a.r(t);var o=a("q1tI"),n=a.n(o),r=a("Bl7J"),i=a("vrFN"),l=(a("f3/d"),a("rGqo"),a("yt8O"),a("Btvt"),a("r9w1")),c=a("Z3vd"),s=a("bSwy"),d=a.n(s);var p=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props,t=e.values,a=e.handleChange,o=e.fetchTours;return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{label:"country",margin:"normal",onChange:a("country"),variant:"outlined",defaultValue:t.country}),n.a.createElement("br",null),n.a.createElement(c.a,{variant:"contained",color:"primary",style:u.button,onClick:o,Search:!0,For:!0,Tours:!0},n.a.createElement(d.a,{style:{marginRight:10}}),"Search"))},o}(o.Component),u={button:{marginTop:20,marginBottom:20}},m=a("aXB2"),h=a("k1TG"),b=(a("17x9"),a("iuhU")),g=a("ye/S"),f=a("H2TA"),y=a("kKAo"),v=a("5AJ6"),S=Object(v.a)(o.createElement("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),x=Object(v.a)(o.createElement("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),C=Object(v.a)(o.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),E=Object(v.a)(o.createElement("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),k=a("TlQY"),z=a("PsDL"),O=a("NqtD"),w={success:o.createElement(S,{fontSize:"inherit"}),warning:o.createElement(x,{fontSize:"inherit"}),error:o.createElement(C,{fontSize:"inherit"}),info:o.createElement(E,{fontSize:"inherit"})},j=o.createElement(k.a,{fontSize:"small"}),T=o.forwardRef((function(e,t){var a=e.action,n=e.children,r=e.classes,i=e.className,l=e.closeText,c=void 0===l?"Close":l,s=e.color,d=e.icon,p=e.iconMapping,u=void 0===p?w:p,g=e.onClose,f=e.role,v=void 0===f?"alert":f,S=e.severity,x=void 0===S?"success":S,C=e.variant,E=void 0===C?"standard":C,k=Object(m.a)(e,["action","children","classes","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"]);return o.createElement(y.a,Object(h.a)({role:v,square:!0,elevation:0,className:Object(b.a)(r.root,r["".concat(E).concat(Object(O.a)(s||x))],i),ref:t},k),!1!==d?o.createElement("div",{className:r.icon},d||u[x]||w[x]):null,o.createElement("div",{className:r.message},n),null!=a?o.createElement("div",{className:r.action},a):null,null==a&&g?o.createElement("div",{className:r.action},o.createElement(z.a,{size:"small","aria-label":c,title:c,color:"inherit",onClick:g},j)):null)})),R=Object(f.a)((function(e){var t="light"===e.palette.type?g.a:g.e,a="light"===e.palette.type?g.e:g.a;return{root:Object(h.a)({},e.typography.body2,{borderRadius:e.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"}),standardSuccess:{color:t(e.palette.success.main,.6),backgroundColor:a(e.palette.success.main,.9),"& $icon":{color:e.palette.success.main}},standardInfo:{color:t(e.palette.info.main,.6),backgroundColor:a(e.palette.info.main,.9),"& $icon":{color:e.palette.info.main}},standardWarning:{color:t(e.palette.warning.main,.6),backgroundColor:a(e.palette.warning.main,.9),"& $icon":{color:e.palette.warning.main}},standardError:{color:t(e.palette.error.main,.6),backgroundColor:a(e.palette.error.main,.9),"& $icon":{color:e.palette.error.main}},outlinedSuccess:{color:t(e.palette.success.main,.6),border:"1px solid ".concat(e.palette.success.main),"& $icon":{color:e.palette.success.main}},outlinedInfo:{color:t(e.palette.info.main,.6),border:"1px solid ".concat(e.palette.info.main),"& $icon":{color:e.palette.info.main}},outlinedWarning:{color:t(e.palette.warning.main,.6),border:"1px solid ".concat(e.palette.warning.main),"& $icon":{color:e.palette.warning.main}},outlinedError:{color:t(e.palette.error.main,.6),border:"1px solid ".concat(e.palette.error.main),"& $icon":{color:e.palette.error.main}},filledSuccess:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.success.main},filledInfo:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.info.main},filledWarning:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.warning.main},filledError:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.error.main},icon:{marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9},message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiAlert"})(T);var L=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props.searchVisible;return console.log("Searching Status "+{isSearching:e}),n.a.createElement("div",null,n.a.createElement("h1",null,this.props.toursToRender))},o}(o.Component);function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var N=function(e){var t,a;function o(){for(var t,a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return(t=e.call.apply(e,[this].concat(o))||this).state={country:"Please Choose",sendCountry:"Not Set",searching:!1,person:"Harry"},t.handleChange=function(e){return function(a){var o;t.setState(((o={})[e]=a.target.value,o))}},t.fetchTours=function(){t.setState({sendCountry:t.state.country}),t.setState({search:!0});var e=M(t);fetch("https://randomuser.me/api/?results=1").then((function(e){return e.json()})).then((function(t){var a=t.results[0].name.first;e.setState({person:a}),console.log(a)})).catch((function(){}))},t}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.state,t={country:e.country,autoCompleteVar:e.autoCompleteVar};return n.a.createElement("div",null,n.a.createElement(p,{handleChange:this.handleChange,fetchTours:this.fetchTours,values:t}),n.a.createElement(R,{severity:"info"},"Working State: ",this.state.country),n.a.createElement("br",null),n.a.createElement(R,{severity:"success"},"Sent State: ",this.state.sendCountry),n.a.createElement(L,{toursToRender:this.state.person,searchVisible:this.state.searching}))},o}(o.Component);t.default=function(){return n.a.createElement(r.a,null,n.a.createElement(i.a,{title:"Test Data Fetch"}),n.a.createElement("h1",null,"Test Data Fetch"),n.a.createElement("p",null,"Using the G Adventures API."),n.a.createElement(N,null))}},Z3vd:function(e,t,a){"use strict";var o=a("aXB2"),n=a("k1TG"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),l=a("H2TA"),c=a("ye/S"),s=a("VD++"),d=a("NqtD"),p=r.forwardRef((function(e,t){var a=e.children,l=e.classes,c=e.className,p=e.color,u=void 0===p?"default":p,m=e.component,h=void 0===m?"button":m,b=e.disabled,g=void 0!==b&&b,f=e.disableElevation,y=void 0!==f&&f,v=e.disableFocusRipple,S=void 0!==v&&v,x=e.endIcon,C=e.focusVisibleClassName,E=e.fullWidth,k=void 0!==E&&E,z=e.size,O=void 0===z?"medium":z,w=e.startIcon,j=e.type,T=void 0===j?"button":j,R=e.variant,L=void 0===R?"text":R,M=Object(o.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),N=w&&r.createElement("span",{className:Object(i.a)(l.startIcon,l["iconSize".concat(Object(d.a)(O))])},w),A=x&&r.createElement("span",{className:Object(i.a)(l.endIcon,l["iconSize".concat(Object(d.a)(O))])},x);return r.createElement(s.a,Object(n.a)({className:Object(i.a)(l.root,l[L],c,"inherit"===u?l.colorInherit:"default"!==u&&l["".concat(L).concat(Object(d.a)(u))],"medium"!==O&&[l["".concat(L,"Size").concat(Object(d.a)(O))],l["size".concat(Object(d.a)(O))]],y&&l.disableElevation,g&&l.disabled,k&&l.fullWidth),component:h,disabled:g,focusRipple:!S,focusVisibleClassName:Object(i.a)(l.focusVisible,C),ref:t,type:T},M),r.createElement("span",{className:l.label},N,a,A))}));t.a=Object(l.a)((function(e){return{root:Object(n.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(c.c)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(c.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(c.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(c.c)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(c.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(c.c)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(c.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(p)},bSwy:function(e,t,a){"use strict";a("HAE/");var o=a("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a("q1tI")),r=(0,o(a("8/g6")).default)(n.default.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.default=r}}]);
//# sourceMappingURL=component---src-pages-data-fetch-js-ad20c27e14ad7841de0f.js.map
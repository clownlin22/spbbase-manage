(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"4Ofr":function(e,t,a){e.exports={themeColor:"antd-pro\\components\\-setting-drawer\\-theme-color-themeColor",title:"antd-pro\\components\\-setting-drawer\\-theme-color-title",colorBlock:"antd-pro\\components\\-setting-drawer\\-theme-color-colorBlock"}},"8TWP":function(e,t,a){"use strict";var n=a("284h"),l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Q9mQ");var o=l(a("diRs"));a("Awhp");var r=l(a("KrTs"));a("Pwec");var i=l(a("CtXQ"));a("T2oS");var u=l(a("W9HT")),d=l(a("pVnL")),c=l(a("lwsE")),s=l(a("W8MJ")),f=l(a("a1gu")),p=l(a("Nsbk")),m=l(a("7W2i"));a("Znn+");var h=l(a("ZTPi")),g=n(a("q1tI")),v=l(a("i8i4")),y=l(a("TSYQ")),b=l(a("SlZz")),E=l(a("btmg")),M=h.default.TabPane,k=function(e){function t(){var e,a;(0,c.default)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return a=(0,f.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(l))),a.onItemClick=function(e,t){var n=a.props.onItemClick,l=e.clickClose;n(e,t),l&&a.popover.click()},a.onClear=function(e){var t=a.props,n=t.onClear,l=t.clearClose;n(e),l&&a.popover.click()},a.onTabChange=function(e){var t=a.props.onTabChange;t(e)},a}return(0,m.default)(t,e),(0,s.default)(t,[{key:"getNotificationBox",value:function(){var e=this,t=this.props,a=t.children,n=t.loading,l=t.locale;if(!a)return null;var o=g.default.Children.map(a,function(t){var a=t.props.list&&t.props.list.length>0?"".concat(t.props.title," (").concat(t.props.list.length,")"):t.props.title;return g.default.createElement(M,{tab:a,key:t.props.name},g.default.createElement(b.default,(0,d.default)({},t.props,{data:t.props.list,onClick:function(a){return e.onItemClick(a,t.props)},onClear:function(){return e.onClear(t.props.name)},title:t.props.title,locale:l})))});return g.default.createElement(u.default,{spinning:n,delay:0},g.default.createElement(h.default,{className:E.default.tabs,onChange:this.onTabChange},o))}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.count,l=t.popupAlign,u=t.popupVisible,c=t.onPopupVisibleChange,s=t.bell,f=(0,y.default)(a,E.default.noticeButton),p=this.getNotificationBox(),m=s||g.default.createElement(i.default,{type:"bell",className:E.default.icon}),h=g.default.createElement("span",{className:f},g.default.createElement(r.default,{count:n,style:{boxShadow:"none"},className:E.default.badge},m));if(!p)return h;var b={};return"popupVisible"in this.props&&(b.visible=u),g.default.createElement(o.default,(0,d.default)({placement:"bottomRight",content:p,popupClassName:E.default.popover,trigger:"click",arrowPointAtCenter:!0,popupAlign:l,onVisibleChange:c},b,{ref:function(t){e.popover=v.default.findDOMNode(t)}}),h)}}]),t}(g.PureComponent);t.default=k,k.Tab=M,k.defaultProps={onItemClick:function(){},onPopupVisibleChange:function(){},onTabChange:function(){},onClear:function(){},loading:!1,clearClose:!1,locale:{emptyText:"No notifications",clear:"Clear"},emptyImage:"https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"}},AcjU:function(e,t,a){"use strict";var n=a("284h"),l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.getMenuMatchKeys=t.getFlatMenuKeys=void 0;var o=l(a("pVnL")),r=l(a("lSNA")),i=l(a("RIqP")),u=l(a("lwsE")),d=l(a("W8MJ")),c=l(a("a1gu")),s=l(a("Nsbk")),f=l(a("7W2i"));a("B9cy");var p=l(a("Ol7k")),m=n(a("q1tI")),h=l(a("bALw")),g=l(a("TSYQ")),v=l(a("mOP9")),y=l(a("mR0u")),b=n(a("oFg3")),E=a("S/9j"),M=p.default.Sider,k=function(e){var t=e.location.pathname,a=e.flatMenuKeys;return(0,E.urlToList)(t).map(function(e){return(0,b.getMenuMatches)(a,e)[0]}).filter(function(e){return e})},C=function e(t){return t.reduce(function(t,a){return t.push(a.path),a.children?t.concat(e(a.children)):t},[])};t.getFlatMenuKeys=C;var x=function(e,t){return t.reduce(function(t,a){return t.concat(e.filter(function(e){return(0,h.default)(e).test(a)}))},[])};t.getMenuMatchKeys=x;var N=function(e){function t(e){var a;return(0,u.default)(this,t),a=(0,c.default)(this,(0,s.default)(t).call(this,e)),a.isMainMenu=function(e){var t=a.props.menuData;return t.some(function(t){return!!e&&(t.key===e||t.path===e)})},a.handleOpenChange=function(e){var t=e.filter(function(e){return a.isMainMenu(e)}).length>1;a.setState({openKeys:t?[e.pop()]:(0,i.default)(e)})},a.flatMenuKeys=C(e.menuData),a.state={openKeys:k(e)},a}return(0,f.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e,t=this.props,a=t.logo,n=t.collapsed,l=t.onCollapse,i=t.fixSiderbar,u=t.theme,d=this.state.openKeys,c=n?{}:{openKeys:d},s=(0,g.default)(y.default.sider,(e={},(0,r.default)(e,y.default.fixSiderbar,i),(0,r.default)(e,y.default.light,"light"===u),e));return m.default.createElement(M,{trigger:null,collapsible:!0,collapsed:n,breakpoint:"lg",onCollapse:l,width:256,theme:u,className:s},m.default.createElement("div",{className:y.default.logo,id:"logo"},m.default.createElement(v.default,{to:"/"},m.default.createElement("img",{src:a,alt:"logo"}),m.default.createElement("h1",null,"SpbBase"))),m.default.createElement(b.default,(0,o.default)({},this.props,{mode:"inline",handleOpenChange:this.handleOpenChange,onOpenChange:this.handleOpenChange,style:{padding:"16px 0",width:"100%",overflowX:"hidden"}},c)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=t.pathname;return e.location.pathname!==a?{pathname:e.location.pathname,openKeys:k(e)}:null}}]),t}(m.PureComponent);t.default=N},BFsb:function(e,t,a){e.exports={content:"antd-pro\\components\\-setting-drawer\\index-content",blockChecbox:"antd-pro\\components\\-setting-drawer\\index-blockChecbox",item:"antd-pro\\components\\-setting-drawer\\index-item",selectIcon:"antd-pro\\components\\-setting-drawer\\index-selectIcon",color_block:"antd-pro\\components\\-setting-drawer\\index-color_block",title:"antd-pro\\components\\-setting-drawer\\index-title",handle:"antd-pro\\components\\-setting-drawer\\index-handle",productionHint:"antd-pro\\components\\-setting-drawer\\index-productionHint"}},BsfW:function(e,t,a){e.exports={list:"antd-pro\\components\\-notice-icon\\-notice-list-list",item:"antd-pro\\components\\-notice-icon\\-notice-list-item",meta:"antd-pro\\components\\-notice-icon\\-notice-list-meta",avatar:"antd-pro\\components\\-notice-icon\\-notice-list-avatar",iconElement:"antd-pro\\components\\-notice-icon\\-notice-list-iconElement",read:"antd-pro\\components\\-notice-icon\\-notice-list-read",title:"antd-pro\\components\\-notice-icon\\-notice-list-title",description:"antd-pro\\components\\-notice-icon\\-notice-list-description",datetime:"antd-pro\\components\\-notice-icon\\-notice-list-datetime",extra:"antd-pro\\components\\-notice-icon\\-notice-list-extra",notFound:"antd-pro\\components\\-notice-icon\\-notice-list-notFound",clear:"antd-pro\\components\\-notice-icon\\-notice-list-clear"}},IGtV:function(e,t,a){e.exports={fixedHeader:"antd-pro\\layouts\\-header-fixedHeader"}},IamK:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("bbsP");var l=n(a("/wGt")),o=n(a("pVnL")),r=n(a("q1tI")),i=n(a("AcjU")),u=function e(t){var a=[];return t.forEach(function(t){t.children&&(a=a.concat(e(t.children))),a.push(t.path)}),a},d=function(e){var t=e.isMobile,a=e.menuData,n=e.collapsed,d=e.onCollapse;return t?r.default.createElement(l.default,{visible:!n,placement:"left",onClose:function(){return d(!0)},style:{padding:0,height:"100vh"}},r.default.createElement(i.default,(0,o.default)({},e,{flatMenuKeys:u(a),collapsed:!t&&n}))):r.default.createElement(i.default,(0,o.default)({},e,{flatMenuKeys:u(a)}))},c=d;t.default=c},JwhZ:function(e,t,a){e.exports={head:"antd-pro\\components\\-top-nav-header\\index-head",light:"antd-pro\\components\\-top-nav-header\\index-light",main:"antd-pro\\components\\-top-nav-header\\index-main",wide:"antd-pro\\components\\-top-nav-header\\index-wide",left:"antd-pro\\components\\-top-nav-header\\index-left",right:"antd-pro\\components\\-top-nav-header\\index-right",logo:"antd-pro\\components\\-top-nav-header\\index-logo"}},NtFa:function(e,t,a){"use strict";var n=a("TqRt"),l=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Pwec");var o,r,i,u=n(a("CtXQ")),d=n(a("lwsE")),c=n(a("W8MJ")),s=n(a("a1gu")),f=n(a("Nsbk")),p=n(a("7W2i")),m=n(a("U+yc")),h=l(a("q1tI")),g=n(a("mOP9")),v=n(a("fqkP")),y=n(a("h3zL")),b=n(a("X5mu")),E=(o=(0,v.default)(600),i=function(e){function t(){var e,a;(0,d.default)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return a=(0,s.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(l))),a.toggle=function(){var e=a.props,t=e.collapsed,n=e.onCollapse;n(!t),a.triggerResizeEvent()},a}return(0,p.default)(t,e),(0,c.default)(t,[{key:"componentWillUnmount",value:function(){this.triggerResizeEvent.cancel()}},{key:"triggerResizeEvent",value:function(){var e=document.createEvent("HTMLEvents");e.initEvent("resize",!0,!1),window.dispatchEvent(e)}},{key:"render",value:function(){var e=this.props,t=e.collapsed,a=e.isMobile,n=e.logo;return h.default.createElement("div",{className:y.default.header},a&&h.default.createElement(g.default,{to:"/",className:y.default.logo,key:"logo"},h.default.createElement("img",{src:n,alt:"logo",width:"32"})),h.default.createElement(u.default,{className:y.default.trigger,type:t?"menu-unfold":"menu-fold",onClick:this.toggle}),h.default.createElement(b.default,this.props))}}]),t}(h.PureComponent),r=i,(0,m.default)(r.prototype,"triggerResizeEvent",[o],Object.getOwnPropertyDescriptor(r.prototype,"triggerResizeEvent"),r.prototype),r);t.default=E},PceP:function(e,t,a){"use strict";var n=a("TqRt"),l=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("bbsP");var o=n(a("/wGt"));a("fOrg");var r=n(a("+KLJ"));a("+L6B");var i=n(a("2/Rp"));a("miYZ");var u=n(a("tsqr"));a("/zsF");var d=n(a("PArb"));a("Pwec");var c=n(a("CtXQ"));a("5Dmo");var s=n(a("3S7+"));a("Mwp2");var f=n(a("VXEj"));a("BoS7");var p=n(a("Sdc0")),m=n(a("lwsE")),h=n(a("W8MJ")),g=n(a("a1gu")),v=n(a("Nsbk")),y=n(a("7W2i")),b=n(a("MVZn"));a("OaEy");var E,M,k,C=n(a("2fM7")),x=l(a("q1tI")),N=a("LLXN"),w=a("P5Jw"),P=a("MuoO"),S=n(a("BGR+")),T=n(a("BFsb")),I=n(a("WJM/")),W=n(a("Pjk0")),O=C.default.Option,q=function(e){var t=e.children,a=e.title,n=e.style;return x.default.createElement("div",{style:(0,b.default)({},n,{marginBottom:24})},x.default.createElement("h3",{className:T.default.title},a),t)},H=(E=(0,P.connect)(function(e){var t=e.setting;return{setting:t}}),E((k=function(e){function t(){var e,a;(0,m.default)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return a=(0,g.default)(this,(e=(0,v.default)(t)).call.apply(e,[this].concat(l))),a.state={collapse:!1},a.getLayoutSetting=function(){var e=a.props.setting,t=e.contentWidth,n=e.fixedHeader,l=e.layout,o=e.autoHideHeader,r=e.fixSiderbar;return[{title:(0,N.formatMessage)({id:"app.setting.content-width"}),action:x.default.createElement(C.default,{value:t,size:"small",onSelect:function(e){return a.changeSetting("contentWidth",e)},style:{width:80}},"sidemenu"===l?null:x.default.createElement(O,{value:"Fixed"},(0,N.formatMessage)({id:"app.setting.content-width.fixed"})),x.default.createElement(O,{value:"Fluid"},(0,N.formatMessage)({id:"app.setting.content-width.fluid"})))},{title:(0,N.formatMessage)({id:"app.setting.fixedheader"}),action:x.default.createElement(p.default,{size:"small",checked:!!n,onChange:function(e){return a.changeSetting("fixedHeader",e)}})},{title:(0,N.formatMessage)({id:"app.setting.hideheader"}),disabled:!n,disabledReason:(0,N.formatMessage)({id:"app.setting.hideheader.hint"}),action:x.default.createElement(p.default,{size:"small",checked:!!o,onChange:function(e){return a.changeSetting("autoHideHeader",e)}})},{title:(0,N.formatMessage)({id:"app.setting.fixedsidebar"}),disabled:"topmenu"===l,disabledReason:(0,N.formatMessage)({id:"app.setting.fixedsidebar.hint"}),action:x.default.createElement(p.default,{size:"small",checked:!!r,onChange:function(e){return a.changeSetting("fixSiderbar",e)}})}]},a.changeSetting=function(e,t){var n=a.props.setting,l=(0,b.default)({},n);l[e]=t,"layout"===e?l.contentWidth="topmenu"===t?"Fixed":"Fluid":"fixedHeader"!==e||t||(l.autoHideHeader=!1),a.setState(l,function(){var e=a.props.dispatch;e({type:"setting/changeSetting",payload:a.state})})},a.togglerContent=function(){var e=a.state.collapse;a.setState({collapse:!e})},a.renderLayoutSettingItem=function(e){var t=x.default.cloneElement(e.action,{disabled:e.disabled});return x.default.createElement(s.default,{title:e.disabled?e.disabledReason:"",placement:"left"},x.default.createElement(f.default.Item,{actions:[t]},x.default.createElement("span",{style:{opacity:e.disabled?"0.5":""}},e.title)))},a}return(0,y.default)(t,e),(0,h.default)(t,[{key:"render",value:function(){var e=this,t=this.props.setting,a=t.navTheme,n=t.primaryColor,l=t.layout,s=t.colorWeak,m=this.state.collapse;return x.default.createElement(o.default,{visible:m,width:300,onClose:this.togglerContent,placement:"right",handler:x.default.createElement("div",{className:T.default.handle},x.default.createElement(c.default,{type:m?"close":"setting",style:{color:"#fff",fontSize:20}})),onHandleClick:this.togglerContent,style:{zIndex:999}},x.default.createElement("div",{className:T.default.content},x.default.createElement(q,{title:(0,N.formatMessage)({id:"app.setting.pagestyle"})},x.default.createElement(W.default,{list:[{key:"dark",url:"https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg",title:(0,N.formatMessage)({id:"app.setting.pagestyle.dark"})},{key:"light",url:"https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg",title:(0,N.formatMessage)({id:"app.setting.pagestyle.light"})}],value:a,onChange:function(t){return e.changeSetting("navTheme",t)}})),x.default.createElement(I.default,{title:(0,N.formatMessage)({id:"app.setting.themecolor"}),value:n,onChange:function(t){return e.changeSetting("primaryColor",t)}}),x.default.createElement(d.default,null),x.default.createElement(q,{title:(0,N.formatMessage)({id:"app.setting.navigationmode"})},x.default.createElement(W.default,{list:[{key:"sidemenu",url:"https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg",title:(0,N.formatMessage)({id:"app.setting.sidemenu"})},{key:"topmenu",url:"https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg",title:(0,N.formatMessage)({id:"app.setting.topmenu"})}],value:l,onChange:function(t){return e.changeSetting("layout",t)}})),x.default.createElement(f.default,{split:!1,dataSource:this.getLayoutSetting(),renderItem:this.renderLayoutSettingItem}),x.default.createElement(d.default,null),x.default.createElement(q,{title:(0,N.formatMessage)({id:"app.setting.othersettings"})},x.default.createElement(f.default.Item,{actions:[x.default.createElement(p.default,{size:"small",checked:!!s,onChange:function(t){return e.changeSetting("colorWeak",t)}})]},(0,N.formatMessage)({id:"app.setting.weakmode"}))),x.default.createElement(d.default,null),x.default.createElement(w.CopyToClipboard,{text:JSON.stringify((0,S.default)(t,["colorWeak"]),null,2),onCopy:function(){return u.default.success((0,N.formatMessage)({id:"app.setting.copyinfo"}))}},x.default.createElement(i.default,{block:!0,icon:"copy"},(0,N.formatMessage)({id:"app.setting.copy"}))),x.default.createElement(r.default,{type:"warning",className:T.default.productionHint,message:x.default.createElement("div",null,(0,N.formatMessage)({id:"app.setting.production.hint"})," ",x.default.createElement("a",{href:"https://u.ant.design/pro-v2-default-settings",target:"_blank",rel:"noopener noreferrer"},"src/defaultSettings.js"))})))}}]),t}(x.PureComponent),M=k))||M),F=H;t.default=F},Pjk0:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5Dmo");var l=n(a("3S7+"));a("Pwec");var o=n(a("CtXQ")),r=n(a("q1tI")),i=n(a("BFsb")),u=function(e){var t=e.value,a=e.onChange,n=e.list;return r.default.createElement("div",{className:i.default.blockChecbox,key:t},n.map(function(e){return r.default.createElement(l.default,{title:e.title,key:e.key},r.default.createElement("div",{className:i.default.item,onClick:function(){return a(e.key)}},r.default.createElement("img",{src:e.url,alt:e.key}),r.default.createElement("div",{className:i.default.selectIcon,style:{display:t===e.key?"block":"none"}},r.default.createElement(o.default,{type:"check"}))))}))},d=u;t.default=d},SlZz:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=c,a("Mwp2");var l=n(a("VXEj"));a("Telt");var o=n(a("Tckk")),r=n(a("lSNA")),i=n(a("q1tI")),u=n(a("TSYQ")),d=n(a("BsfW"));function c(e){var t=e.data,a=void 0===t?[]:t,n=e.onClick,c=e.onClear,s=e.title,f=e.locale,p=e.emptyText,m=e.emptyImage,h=e.showClear,g=void 0===h||h;return 0===a.length?i.default.createElement("div",{className:d.default.notFound},m?i.default.createElement("img",{src:m,alt:"not found"}):null,i.default.createElement("div",null,p||f.emptyText)):i.default.createElement("div",null,i.default.createElement(l.default,{className:d.default.list},a.map(function(e,t){var a=(0,u.default)(d.default.item,(0,r.default)({},d.default.read,e.read)),c=e.avatar?"string"===typeof e.avatar?i.default.createElement(o.default,{className:d.default.avatar,src:e.avatar}):e.avatar:null;return i.default.createElement(l.default.Item,{className:a,key:e.key||t,onClick:function(){return n(e)}},i.default.createElement(l.default.Item.Meta,{className:d.default.meta,avatar:i.default.createElement("span",{className:d.default.iconElement},c),title:i.default.createElement("div",{className:d.default.title},e.title,i.default.createElement("div",{className:d.default.extra},e.extra)),description:i.default.createElement("div",null,i.default.createElement("div",{className:d.default.description,title:e.description},e.description),i.default.createElement("div",{className:d.default.datetime},e.datetime))}))})),g?i.default.createElement("div",{className:d.default.clear,onClick:c},f.clear," ",s):null)}},"WJM/":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5Dmo");var l=n(a("3S7+")),o=n(a("pVnL"));a("Pwec");var r=n(a("CtXQ")),i=n(a("QILm")),u=n(a("q1tI")),d=a("LLXN"),c=n(a("4Ofr")),s=function(e){var t=e.color,a=e.check,n=(0,i.default)(e,["color","check"]);return u.default.createElement("div",(0,o.default)({},n,{style:{backgroundColor:t}}),a?u.default.createElement(r.default,{type:"check"}):"")},f=function(e){var t=e.colors,a=e.title,n=e.value,o=e.onChange,r=t;return t||(r=[{key:"dust",color:"#F5222D"},{key:"volcano",color:"#FA541C"},{key:"sunset",color:"#FAAD14"},{key:"cyan",color:"#13C2C2"},{key:"green",color:"#52C41A"},{key:"daybreak",color:"#1890FF"},{key:"geekblue",color:"#2F54EB"},{key:"purple",color:"#722ED1"}]),u.default.createElement("div",{className:c.default.themeColor},u.default.createElement("h3",{className:c.default.title},a),u.default.createElement("div",{className:c.default.content},r.map(function(e){var t=e.key,a=e.color;return u.default.createElement(l.default,{key:a,title:(0,d.formatMessage)({id:"app.setting.themecolor.".concat(t)})},u.default.createElement(s,{className:c.default.colorBlock,color:a,check:n===a,onClick:function(){return o&&o(a)}}))})))},p=f;t.default=p},X5mu:function(e,t,a){"use strict";var n=a("284h"),l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("T2oS");var o=l(a("W9HT"));a("qVdP");var r=l(a("jsC+"));a("Telt");var i=l(a("Tckk"));a("lUTK");var u=l(a("BvKs"));a("Pwec");var d=l(a("CtXQ"));a("+BJd");var c=l(a("mr32")),s=l(a("MVZn")),f=l(a("lwsE")),p=l(a("W8MJ")),m=l(a("a1gu")),h=l(a("Nsbk")),g=l(a("7W2i")),v=n(a("q1tI")),y=a("LLXN"),b=l(a("wd/R")),E=l(a("bt/X")),M=l(a("8TWP")),k=l(a("h3zL")),C=function(e){function t(){return(0,f.default)(this,t),(0,m.default)(this,(0,h.default)(t).apply(this,arguments))}return(0,g.default)(t,e),(0,p.default)(t,[{key:"getNoticeData",value:function(){var e=this.props.notices,t=void 0===e?[]:e;if(0===t.length)return{};var a=t.map(function(e){var t=(0,s.default)({},e);if(t.datetime&&(t.datetime=(0,b.default)(e.datetime).fromNow()),t.id&&(t.key=t.id),t.extra&&t.status){var a={todo:"",processing:"blue",urgent:"red",doing:"gold"}[t.status];t.extra=v.default.createElement(c.default,{color:a,style:{marginRight:0}},t.extra)}return t});return(0,E.default)(a,"type")}},{key:"render",value:function(){var e=this.props,t=e.currentUser,a=e.fetchingNotices,n=e.onNoticeVisibleChange,l=e.onMenuClick,c=e.onNoticeClear,s=e.theme,f=v.default.createElement(u.default,{className:k.default.menu,selectedKeys:[],onClick:l},v.default.createElement(u.default.Item,{key:"userCenter"},v.default.createElement(d.default,{type:"user"}),v.default.createElement(y.FormattedMessage,{id:"menu.account.center",defaultMessage:"account center"})),v.default.createElement(u.default.Item,{key:"userinfo"},v.default.createElement(d.default,{type:"setting"}),v.default.createElement(y.FormattedMessage,{id:"menu.account.settings",defaultMessage:"account settings"})),v.default.createElement(u.default.Item,{key:"triggerError"},v.default.createElement(d.default,{type:"close-circle"}),v.default.createElement(y.FormattedMessage,{id:"menu.account.trigger",defaultMessage:"Trigger Error"})),v.default.createElement(u.default.Divider,null),v.default.createElement(u.default.Item,{key:"logout"},v.default.createElement(d.default,{type:"logout"}),v.default.createElement(y.FormattedMessage,{id:"menu.account.logout",defaultMessage:"logout"}))),p=this.getNoticeData(),m=k.default.right;return"dark"===s&&(m="".concat(k.default.right,"  ").concat(k.default.dark)),v.default.createElement("div",{className:m},v.default.createElement(M.default,{className:k.default.action,count:t.notifyCount,onItemClick:function(e,t){console.log(e,t)},locale:{emptyText:(0,y.formatMessage)({id:"component.noticeIcon.empty"}),clear:(0,y.formatMessage)({id:"component.noticeIcon.clear"})},onClear:c,onPopupVisibleChange:n,loading:a,popupAlign:{offset:[20,-16]},clearClose:!0},v.default.createElement(M.default.Tab,{list:p.notification,title:(0,y.formatMessage)({id:"component.globalHeader.notification"}),name:"notification",emptyText:(0,y.formatMessage)({id:"component.globalHeader.notification.empty"}),emptyImage:"https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"}),v.default.createElement(M.default.Tab,{list:p.message,title:(0,y.formatMessage)({id:"component.globalHeader.message"}),name:"message",emptyText:(0,y.formatMessage)({id:"component.globalHeader.message.empty"}),emptyImage:"https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg"}),v.default.createElement(M.default.Tab,{list:p.event,title:(0,y.formatMessage)({id:"component.globalHeader.event"}),name:"event",emptyText:(0,y.formatMessage)({id:"component.globalHeader.event.empty"}),emptyImage:"https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg"})),t.name?v.default.createElement(r.default,{overlay:f},v.default.createElement("span",{className:"".concat(k.default.action," ").concat(k.default.account)},v.default.createElement(i.default,{size:"small",className:k.default.avatar,src:t.avatar,alt:"avatar"}),v.default.createElement("span",{className:k.default.name},t.name))):v.default.createElement(o.default,{size:"small",style:{marginLeft:8,marginRight:8}}))}}]),t}(v.PureComponent);t.default=C},btmg:function(e,t,a){e.exports={popover:"antd-pro\\components\\-notice-icon\\index-popover",noticeButton:"antd-pro\\components\\-notice-icon\\index-noticeButton",icon:"antd-pro\\components\\-notice-icon\\index-icon",tabs:"antd-pro\\components\\-notice-icon\\index-tabs"}},ctiy:function(e,t,a){"use strict";var n=a("284h"),l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a("pVnL"));a("miYZ");var r=l(a("tsqr")),i=l(a("lwsE")),u=l(a("W8MJ")),d=l(a("a1gu")),c=l(a("Nsbk")),s=l(a("7W2i"));a("B9cy");var f=l(a("Ol7k")),p=n(a("q1tI")),m=a("LLXN"),h=l(a("MFj2")),g=a("MuoO"),v=l(a("usdK")),y=l(a("NtFa")),b=l(a("wWO0")),E=l(a("IGtV")),M=l(a("HZnN")),k=f.default.Header,C=function(e){function t(){var e,a;(0,i.default)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return a=(0,d.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(l))),a.state={visible:!0},a.getHeadWidth=function(){var e=a.props,t=e.isMobile,n=e.collapsed,l=e.setting,o=l.fixedHeader,r=l.layout;return t||!o||"topmenu"===r?"100%":n?"calc(100% - 80px)":"calc(100% - 256px)"},a.handleNoticeClear=function(e){r.default.success("".concat((0,m.formatMessage)({id:"component.noticeIcon.cleared"})," ").concat((0,m.formatMessage)({id:"component.globalHeader.".concat(e)})));var t=a.props.dispatch;t({type:"global/clearNotices",payload:e})},a.handleMenuClick=function(e){var t=e.key,n=a.props.dispatch;"userCenter"!==t?"triggerError"!==t?"userinfo"!==t?"logout"===t&&n({type:"login/logout"}):v.default.push("/account/settings/base"):v.default.push("/exception/trigger"):v.default.push("/account/center")},a.handleNoticeVisibleChange=function(e){if(e){var t=a.props.dispatch;t({type:"global/fetchNotices"})}},a.handScroll=function(){var e=a.props.autoHideHeader,t=a.state.visible;if(e){var n=document.body.scrollTop+document.documentElement.scrollTop;a.ticking||(a.ticking=!0,requestAnimationFrame(function(){a.oldScrollTop>n&&a.setState({visible:!0}),n>300&&t&&a.setState({visible:!1}),n<300&&!t&&a.setState({visible:!0}),a.oldScrollTop=n,a.ticking=!1}))}},a}return(0,s.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.handScroll,{passive:!0})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.handScroll)}},{key:"render",value:function(){var e=this.props,t=e.isMobile,a=e.handleMenuCollapse,n=e.setting,l=n.navTheme,r=n.layout,i=n.fixedHeader,u=this.state.visible,d="topmenu"===r,c=this.getHeadWidth(),s=u?p.default.createElement(k,{style:{padding:0,width:c},className:i?E.default.fixedHeader:""},d&&!t?p.default.createElement(b.default,(0,o.default)({theme:l,mode:"horizontal",Authorized:M.default,onCollapse:a,onNoticeClear:this.handleNoticeClear,onMenuClick:this.handleMenuClick,onNoticeVisibleChange:this.handleNoticeVisibleChange},this.props)):p.default.createElement(y.default,(0,o.default)({onCollapse:a,onNoticeClear:this.handleNoticeClear,onMenuClick:this.handleMenuClick,onNoticeVisibleChange:this.handleNoticeVisibleChange},this.props))):null;return p.default.createElement(h.default,{component:"",transitionName:"fade"},s)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.autoHideHeader||t.visible?null:{visible:!0}}}]),t}(p.PureComponent),x=(0,g.connect)(function(e){var t=e.user,a=e.global,n=e.setting,l=e.loading;return{currentUser:t.currentUser,collapsed:a.collapsed,fetchingNotices:l.effects["global/fetchNotices"],notices:a.notices,setting:n}})(C);t.default=x},gJ0l:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("B9cy");var l=n(a("Ol7k")),o=n(a("q1tI")),r=l.default.Footer,i=function(){return o.default.createElement(r,{style:{padding:0}})},u=i;t.default=u},h3zL:function(e,t,a){e.exports={header:"antd-pro\\components\\-global-header\\index-header",logo:"antd-pro\\components\\-global-header\\index-logo",menu:"antd-pro\\components\\-global-header\\index-menu",trigger:"antd-pro\\components\\-global-header\\index-trigger",right:"antd-pro\\components\\-global-header\\index-right",action:"antd-pro\\components\\-global-header\\index-action",search:"antd-pro\\components\\-global-header\\index-search",account:"antd-pro\\components\\-global-header\\index-account",avatar:"antd-pro\\components\\-global-header\\index-avatar",dark:"antd-pro\\components\\-global-header\\index-dark",name:"antd-pro\\components\\-global-header\\index-name"}},m8Tn:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("pVnL")),o=n(a("lwsE")),r=n(a("W8MJ")),i=n(a("a1gu")),u=n(a("Nsbk")),d=n(a("7W2i")),c=n(a("MVZn"));a("B9cy");var s=n(a("Ol7k")),f=n(a("q1tI")),p=n(a("ZFw/")),m=n(a("Y+p1")),h=n(a("Wwog")),g=a("MuoO"),v=a("E6Dt"),y=n(a("TSYQ")),b=n(a("bALw")),E=a("4zCG"),M=a("LLXN"),k=n(a("IamK")),C=n(a("HZnN")),x=(n(a("PceP")),n(a("mxmt"))),N=n(a("gJ0l")),w=n(a("ctiy")),P=n(a("R1Dz")),S=n(a("wOmh")),T=s.default.Content;function I(e,t,a){return e.map(function(e){if(!e.name||!e.path)return null;var n="menu";n=a?"".concat(a,".").concat(e.name):"menu.".concat(e.name);var l=(0,c.default)({},e,{name:(0,M.formatMessage)({id:n,defaultMessage:e.name}),locale:n,authority:e.authority||t});if(e.routes){var o=I(e.routes,e.authority,n);l.children=o}return delete l.routes,l}).filter(function(e){return e})}var W=(0,h.default)(I,m.default),O={"screen-xs":{maxWidth:575},"screen-sm":{minWidth:576,maxWidth:767},"screen-md":{minWidth:768,maxWidth:991},"screen-lg":{minWidth:992,maxWidth:1199},"screen-xl":{minWidth:1200,maxWidth:1599},"screen-xxl":{minWidth:1600}},q=function(e){function t(e){var a;return(0,o.default)(this,t),a=(0,i.default)(this,(0,u.default)(t).call(this,e)),a.state={rendering:!0,isMobile:!1,menuData:a.getMenuData()},a.matchParamsPath=function(e){var t=Object.keys(a.breadcrumbNameMap).find(function(t){return(0,b.default)(t).test(e)});return a.breadcrumbNameMap[t]},a.getPageTitle=function(e){var t=a.matchParamsPath(e);if(!t)return"Ant Design Pro";var n=(0,M.formatMessage)({id:t.locale||t.name,defaultMessage:t.name});return"".concat(n," - SpbBase")},a.getLayoutStyle=function(){var e=a.state.isMobile,t=a.props,n=t.fixSiderbar,l=t.collapsed,o=t.layout;return n&&"topmenu"!==o&&!e?{paddingLeft:l?"80px":"256px"}:null},a.getContentStyle=function(){var e=a.props.fixedHeader;return{margin:"24px 24px 0",paddingTop:e?64:0}},a.handleMenuCollapse=function(e){var t=a.props.dispatch;t({type:"global/changeLayoutCollapsed",payload:e})},a.getPageTitle=(0,h.default)(a.getPageTitle),a.getBreadcrumbNameMap=(0,h.default)(a.getBreadcrumbNameMap,m.default),a.breadcrumbNameMap=a.getBreadcrumbNameMap(),a.matchParamsPath=(0,h.default)(a.matchParamsPath,m.default),a}return(0,d.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.dispatch;t({type:"user/fetchCurrent"}),t({type:"setting/getSetting"}),this.renderRef=requestAnimationFrame(function(){e.setState({rendering:!1})}),this.enquireHandler=(0,E.enquireScreen)(function(t){var a=e.state.isMobile;a!==t&&e.setState({isMobile:t})})}},{key:"componentDidUpdate",value:function(e){this.breadcrumbNameMap=this.getBreadcrumbNameMap();var t=this.state.isMobile,a=this.props.collapsed;!t||e.isMobile||a||this.handleMenuCollapse(!1)}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.renderRef),(0,E.unenquireScreen)(this.enquireHandler)}},{key:"getContext",value:function(){var e=this.props.location;return{location:e,breadcrumbNameMap:this.breadcrumbNameMap}}},{key:"getMenuData",value:function(){var e=this.props.route.routes;return W(e)}},{key:"getBreadcrumbNameMap",value:function(){var e={},t=function t(a){a.forEach(function(a){a.children&&t(a.children),e[a.path]=a})};return t(this.getMenuData()),e}},{key:"renderSettingDrawer",value:function(){this.state.rendering;return null}},{key:"render",value:function(){var e=this,t=this.props,a=t.navTheme,n=t.layout,o=t.children,r=t.location.pathname,i=this.state,u=i.isMobile,d=i.menuData,m="topmenu"===n,h=this.matchParamsPath(r),g=f.default.createElement(s.default,null,m&&!u?null:f.default.createElement(k.default,(0,l.default)({logo:x.default,Authorized:C.default,theme:a,onCollapse:this.handleMenuCollapse,menuData:d,isMobile:u},this.props)),f.default.createElement(s.default,{style:(0,c.default)({},this.getLayoutStyle(),{minHeight:"100vh"})},f.default.createElement(w.default,(0,l.default)({menuData:d,handleMenuCollapse:this.handleMenuCollapse,logo:x.default,isMobile:u},this.props)),f.default.createElement(T,{style:this.getContentStyle()},f.default.createElement(C.default,{authority:h&&h.authority,noMatch:f.default.createElement(S.default,null)},o)),f.default.createElement(N.default,null)));return f.default.createElement(f.default.Fragment,null,f.default.createElement(p.default,{title:this.getPageTitle(r)},f.default.createElement(v.ContainerQuery,{query:O},function(t){return f.default.createElement(P.default.Provider,{value:e.getContext()},f.default.createElement("div",{className:(0,y.default)(t)},g))})),this.renderSettingDrawer())}}]),t}(f.default.PureComponent),H=(0,g.connect)(function(e){var t=e.global,a=e.setting;return(0,c.default)({collapsed:t.collapsed,layout:a.layout},a)})(q);t.default=H},mR0u:function(e,t,a){e.exports={logo:"antd-pro\\components\\-sider-menu\\index-logo",sider:"antd-pro\\components\\-sider-menu\\index-sider",fixSiderbar:"antd-pro\\components\\-sider-menu\\index-fixSiderbar",light:"antd-pro\\components\\-sider-menu\\index-light",icon:"antd-pro\\components\\-sider-menu\\index-icon"}},oFg3:function(e,t,a){"use strict";var n=a("284h"),l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.getMenuMatches=void 0;var o=l(a("pVnL")),r=l(a("lwsE")),i=l(a("W8MJ")),u=l(a("a1gu")),d=l(a("Nsbk")),c=l(a("7W2i"));a("Pwec");var s=l(a("CtXQ"));a("lUTK");var f=l(a("BvKs")),p=n(a("q1tI")),m=l(a("mOP9")),h=l(a("Y+p1")),g=l(a("Wwog")),v=l(a("bALw")),y=a("S/9j"),b=l(a("mR0u")),E=f.default.SubMenu,M=function(e){return"string"===typeof e&&0===e.indexOf("http")?p.default.createElement("img",{src:e,alt:"icon",className:b.default.icon}):"string"===typeof e?p.default.createElement(s.default,{type:e}):e},k=function(e,t){return e.filter(function(e){return!!e&&(0,v.default)(e).test(t)})};t.getMenuMatches=k;var C=function(e){function t(e){var a;return(0,r.default)(this,t),a=(0,u.default)(this,(0,d.default)(t).call(this,e)),a.getNavMenuItems=function(e,t){return e?e.filter(function(e){return e.name&&!e.hideInMenu}).map(function(e){var n=a.getSubMenuOrItem(e,t);return a.checkPermissionItem(e.authority,n)}).filter(function(e){return e}):[]},a.getSelectedMenuKeys=function(e){return(0,y.urlToList)(e).map(function(e){return k(a.flatMenuKeys,e).pop()})},a.getSubMenuOrItem=function(e){if(e.children&&!e.hideChildrenInMenu&&e.children.some(function(e){return e.name})){var t=e.name;return p.default.createElement(E,{title:e.icon?p.default.createElement("span",null,M(e.icon),p.default.createElement("span",null,t)):t,key:e.path},a.getNavMenuItems(e.children))}return p.default.createElement(f.default.Item,{key:e.path},a.getMenuItemPath(e))},a.getMenuItemPath=function(e){var t=e.name,n=a.conversionPath(e.path),l=M(e.icon),o=e.target;if(/^https?:\/\//.test(n))return p.default.createElement("a",{href:n,target:o},l,p.default.createElement("span",null,t));var r=a.props,i=r.location,u=r.isMobile,d=r.onCollapse;return p.default.createElement(m.default,{to:n,target:o,replace:n===i.pathname,onClick:u?function(){d(!0)}:void 0},l,p.default.createElement("span",null,t))},a.checkPermissionItem=function(e,t){var n=a.props.Authorized;if(n&&n.check){var l=n.check;return l(e,t)}return t},a.conversionPath=function(e){return e&&0===e.indexOf("http")?e:"/".concat(e||"").replace(/\/+/g,"/")},a.getSelectedMenuKeys=(0,g.default)(a.getSelectedMenuKeys,h.default),a.flatMenuKeys=a.getFlatMenuKeys(e.menuData),a}return(0,c.default)(t,e),(0,i.default)(t,[{key:"getFlatMenuKeys",value:function(e){var t=this,a=[];return e.forEach(function(e){e.children&&(a=a.concat(t.getFlatMenuKeys(e.children))),a.push(e.path)}),a}},{key:"render",value:function(){var e=this.props,t=e.openKeys,a=e.theme,n=e.mode,l=e.location.pathname,r=this.getSelectedMenuKeys(l);!r.length&&t&&(r=[t[t.length-1]]);var i={};t&&(i={openKeys:t});var u=this.props,d=u.handleOpenChange,c=u.style,s=u.menuData;return p.default.createElement(f.default,(0,o.default)({key:"Menu",mode:n,theme:a,onOpenChange:d,selectedKeys:r,style:c,className:"horizontal"===n?"top-nav-menu":""},i),this.getNavMenuItems(s))}}]),t}(p.PureComponent);t.default=C},wWO0:function(e,t,a){"use strict";var n=a("284h"),l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a("pVnL")),r=l(a("lwsE")),i=l(a("W8MJ")),u=l(a("a1gu")),d=l(a("Nsbk")),c=l(a("7W2i")),s=n(a("q1tI")),f=l(a("mOP9")),p=l(a("X5mu")),m=l(a("oFg3")),h=l(a("JwhZ")),g=function(e){function t(){var e,a;(0,r.default)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return a=(0,u.default)(this,(e=(0,d.default)(t)).call.apply(e,[this].concat(l))),a.state={maxWidth:void 0},a}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.theme,n=t.contentWidth,l=t.logo,r=this.state.maxWidth;return s.default.createElement("div",{className:"".concat(h.default.head," ").concat("light"===a?h.default.light:"")},s.default.createElement("div",{ref:function(t){e.maim=t},className:"".concat(h.default.main," ").concat("Fixed"===n?h.default.wide:"")},s.default.createElement("div",{className:h.default.left},s.default.createElement("div",{className:h.default.logo,key:"logo",id:"logo"},s.default.createElement(f.default,{to:"/"},s.default.createElement("img",{src:l,alt:"logo"}),s.default.createElement("h1",null,"SpbBase"))),s.default.createElement("div",{style:{maxWidth:r}},s.default.createElement(m.default,(0,o.default)({},this.props,{style:{border:"none",height:64}})))),s.default.createElement(p.default,this.props)))}}],[{key:"getDerivedStateFromProps",value:function(e){return{maxWidth:("Fixed"===e.contentWidth?1200:window.innerWidth)-280-165-40}}}]),t}(s.PureComponent);t.default=g}}]);
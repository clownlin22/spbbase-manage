(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{a4KE:function(e,t,a){"use strict";var s=a("284h"),i=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Mwp2");var n=i(a("VXEj")),r=i(a("lwsE")),d=i(a("W8MJ")),l=i(a("a1gu")),u=i(a("Nsbk")),o=i(a("7W2i")),c=s(a("q1tI")),f=a("LLXN"),m={strong:c.default.createElement("font",{className:"strong"},c.default.createElement(f.FormattedMessage,{id:"app.settings.security.strong",defaultMessage:"Strong"})),medium:c.default.createElement("font",{className:"medium"},c.default.createElement(f.FormattedMessage,{id:"app.settings.security.medium",defaultMessage:"Medium"})),weak:c.default.createElement("font",{className:"weak"},c.default.createElement(f.FormattedMessage,{id:"app.settings.security.weak",defaultMessage:"Weak"}),"Weak")},p=function(e){function t(){var e,a;(0,r.default)(this,t);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return a=(0,l.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(i))),a.getData=function(){return[{title:(0,f.formatMessage)({id:"app.settings.security.password"},{}),description:c.default.createElement(c.Fragment,null,(0,f.formatMessage)({id:"app.settings.security.password-description"}),"\uff1a",m.strong),actions:[c.default.createElement("a",null,c.default.createElement(f.FormattedMessage,{id:"app.settings.security.modify",defaultMessage:"Modify"}))]},{title:(0,f.formatMessage)({id:"app.settings.security.phone"},{}),description:"".concat((0,f.formatMessage)({id:"app.settings.security.phone-description"},{}),"\uff1a138****8293"),actions:[c.default.createElement("a",null,c.default.createElement(f.FormattedMessage,{id:"app.settings.security.modify",defaultMessage:"Modify"}))]},{title:(0,f.formatMessage)({id:"app.settings.security.question"},{}),description:(0,f.formatMessage)({id:"app.settings.security.question-description"},{}),actions:[c.default.createElement("a",null,c.default.createElement(f.FormattedMessage,{id:"app.settings.security.set",defaultMessage:"Set"}))]},{title:(0,f.formatMessage)({id:"app.settings.security.email"},{}),description:"".concat((0,f.formatMessage)({id:"app.settings.security.email-description"},{}),"\uff1aant***sign.com"),actions:[c.default.createElement("a",null,c.default.createElement(f.FormattedMessage,{id:"app.settings.security.modify",defaultMessage:"Modify"}))]},{title:(0,f.formatMessage)({id:"app.settings.security.mfa"},{}),description:(0,f.formatMessage)({id:"app.settings.security.mfa-description"},{}),actions:[c.default.createElement("a",null,c.default.createElement(f.FormattedMessage,{id:"app.settings.security.bind",defaultMessage:"Bind"}))]}]},a}return(0,o.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return c.default.createElement(c.Fragment,null,c.default.createElement(n.default,{itemLayout:"horizontal",dataSource:this.getData(),renderItem:function(e){return c.default.createElement(n.default.Item,{actions:e.actions},c.default.createElement(n.default.Item.Meta,{title:e.title,description:e.description}))}}))}}]),t}(c.Component),g=p;t.default=g}}]);
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=14)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(10);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t,n){var r=n(11),o=n(12);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},function(e,t){!function(){e.exports=this.React}()},function(e,t,n){"use strict";(function(e){var r=n(6),o=n.n(r),a=n(9),i=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function u(e){var t=e.attributes,n=void 0===t?{}:t,r=e.children,a=void 0===r?null:r,i=e.selfClose,s=void 0!==i&&i,c=e.tagName;return s?o.a.createElement(c,n):o.a.createElement(c,n,a)}var p=function(){function e(){}var t=e.prototype;return t.attribute=function(e,t){return t},t.node=function(e,t){return t},e}(),d=/(url|image|image-set)\(/i,f=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.attribute=function(e,t){return"style"===e&&Object.keys(t).forEach((function(e){String(t[e]).match(d)&&delete t[e]})),t},r}(p),m={a:{content:9,self:!1,type:105},address:{invalid:["h1","h2","h3","h4","h5","h6","address","article","aside","section","div","header","footer"],self:!1},audio:{children:["track","source"]},br:{type:9,void:!0},body:{content:127},button:{content:8,type:105},caption:{content:1,parent:["table"]},col:{parent:["colgroup"],void:!0},colgroup:{children:["col"],parent:["table"]},details:{children:["summary"],type:97},dd:{content:1,parent:["dl"]},dl:{children:["dt","dd"],type:1},dt:{content:1,invalid:["footer","header"],parent:["dl"]},figcaption:{content:1,parent:["figure"]},footer:{invalid:["footer","header"]},header:{invalid:["footer","header"]},hr:{type:1,void:!0},img:{void:!0},li:{content:1,parent:["ul","ol","menu"]},main:{self:!1},ol:{children:["li"],type:1},picture:{children:["source","img"],type:25},rb:{parent:["ruby","rtc"]},rp:{parent:["ruby","rtc"]},rt:{content:8,parent:["ruby","rtc"]},rtc:{content:8,parent:["ruby"]},ruby:{children:["rb","rp","rt","rtc"]},source:{parent:["audio","video","picture"],void:!0},summary:{content:8,parent:["details"]},table:{children:["caption","colgroup","thead","tbody","tfoot","tr"],type:1},tbody:{parent:["table"],children:["tr"]},td:{content:1,parent:["tr"]},tfoot:{parent:["table"],children:["tr"]},th:{content:1,parent:["tr"]},thead:{parent:["table"],children:["tr"]},tr:{parent:["table","tbody","thead","tfoot"],children:["th","td"]},track:{parent:["audio","video"],void:!0},ul:{children:["li"],type:1},video:{children:["track","source"]},wbr:{type:9,void:!0}};function h(e){return function(t){m[t]=c({},e,{},m[t])}}["address","main","div","figure","p","pre"].forEach(h({content:1,type:65})),["abbr","b","bdi","bdo","cite","code","data","dfn","em","i","kbd","mark","q","ruby","samp","strong","sub","sup","time","u","var"].forEach(h({content:8,type:73})),["p","pre"].forEach(h({content:8,type:65})),["s","small","span","del","ins"].forEach(h({content:8,type:9})),["article","aside","footer","header","nav","section","blockquote"].forEach(h({content:1,type:67})),["h1","h2","h3","h4","h5","h6"].forEach(h({content:8,type:69})),["audio","canvas","iframe","img","video"].forEach(h({type:89}));var y=Object.freeze(m),v=["applet","base","body","command","embed","frame","frameset","head","html","link","meta","noscript","object","script","style","title"],b=Object.keys(y).filter((function(e){return"canvas"!==e&&"iframe"!==e})),g=Object.freeze({alt:1,cite:1,class:1,colspan:3,controls:4,datetime:1,default:4,disabled:4,dir:1,height:1,href:1,id:1,kind:1,label:1,lang:1,loading:1,loop:4,media:1,muted:4,poster:1,role:1,rowspan:3,scope:1,sizes:1,span:3,start:3,style:5,src:1,srclang:1,srcset:1,target:1,title:1,type:1,width:1}),w=Object.freeze({class:"className",colspan:"colSpan",datetime:"dateTime",rowspan:"rowSpan",srclang:"srcLang",srcset:"srcSet"}),E=/^<(!doctype|(html|head|body)(\s|>))/i,O=/^(aria\x2D|data\x2D|[0-9A-Z_a-z\u017F\u212A]+:)/i,j=/{{{(\w+)\/?}}}/;function N(){if("undefined"!=typeof window&&"undefined"!=typeof document)return document.implementation.createHTMLDocument("Interweave")}var k=function(){function t(e,t,n,r){void 0===t&&(t={}),void 0===n&&(n=[]),void 0===r&&(r=[]),s(this,"allowed",void 0),s(this,"banned",void 0),s(this,"blocked",void 0),s(this,"container",void 0),s(this,"content",[]),s(this,"props",void 0),s(this,"matchers",void 0),s(this,"filters",void 0),s(this,"keyIndex",void 0),this.props=t,this.matchers=n,this.filters=[].concat(r,[new f]),this.keyIndex=-1,this.container=this.createContainer(e||""),this.allowed=new Set(t.allowList||b),this.banned=new Set(v),this.blocked=new Set(t.blockList)}var n=t.prototype;return n.applyAttributeFilters=function(e,t){return this.filters.reduce((function(t,n){return null!==t&&"function"==typeof n.attribute?n.attribute(e,t):t}),t)},n.applyNodeFilters=function(e,t){return this.filters.reduce((function(t,n){return null!==t&&"function"==typeof n.node?n.node(e,t):t}),t)},n.applyMatchers=function(e,t){var n=this,r={},o=this.props,a=e,i=0,s=null;return this.matchers.forEach((function(e){var u=e.asTag().toLowerCase(),p=n.getTagConfig(u);if(!o[e.inverseName]&&n.isTagAllowed(u)&&n.canRenderChild(t,p)){for(var d="";a&&(s=e.match(a));){var f=s,m=f.index,h=f.length,y=f.match,v=f.valid,b=f.void,g=l(f,["index","length","match","valid","void"]),w=e.propName+i;m>0&&(d+=a.slice(0,m)),v?(d+=b?"{{{"+w+"/}}}":"{{{"+w+"}}}"+y+"{{{/"+w+"}}}",n.keyIndex+=1,i+=1,r[w]={children:y,matcher:e,props:c({},o,{},g,{key:n.keyIndex})}):d+=y,e.greedy?(a=d+a.slice(m+h),d=""):a=a.slice(m+(h||y.length))}e.greedy||(a=d+a)}})),0===i?e:this.replaceTokens(a,r)},n.canRenderChild=function(e,t){return!(!e.tagName||!t.tagName)&&(!e.void&&(e.children.length>0?e.children.includes(t.tagName):!(e.invalid.length>0&&e.invalid.includes(t.tagName))&&(t.parent.length>0?t.parent.includes(e.tagName):!(!e.self&&e.tagName===t.tagName)&&Boolean(e&&e.content&t.type))))},n.convertLineBreaks=function(e){var t=this.props,n=t.noHtml,r=t.disableLineBreaks;if(n||r||e.match(/<((?:\/[ a-z]+)|(?:[ a-z]+\/))>/gi))return e;var o=e.replace(/\r\n/g,"\n");return o=(o=o.replace(/\n{3,}/g,"\n\n\n")).replace(/\n/g,"<br/>")},n.createContainer=function(t){var n=(e.INTERWEAVE_SSR_POLYFILL||N)();if(n){var r=this.props.containerTagName||"body",o="body"===r||"fragment"===r?n.body:n.createElement(r);return t.match(E)||(o.innerHTML=this.convertLineBreaks(this.props.escapeHtml?i()(t):t)),o}},n.extractAttributes=function(e){var t=this,n=this.props.allowAttributes,r={},o=0;return 1===e.nodeType&&e.attributes?(Array.from(e.attributes).forEach((function(a){var i=a.name,s=a.value,c=i.toLowerCase(),l=g[c]||g[i];if(t.isSafe(e)&&(c.match(O)||(n||l&&2!==l)&&!c.match(/^on/)&&!s.replace(/(\s|\0|&#x0([9AD]);)/,"").match(/(javascript|vbscript|livescript|xss):/i))){var u="style"===c?t.extractStyleAttribute(e):s;4===l?u=!0:3===l?u=parseFloat(String(u)):5!==l&&(u=String(u)),r[w[c]||c]=t.applyAttributeFilters(c,u),o+=1}})),0===o?null:r):null},n.extractStyleAttribute=function(e){var t={};return Array.from(e.style).forEach((function(n){var r=e.style[n];t[n.replace(/-([a-z])/g,(function(e,t){return t.toUpperCase()}))]=r})),t},n.getTagConfig=function(e){var t={children:[],content:0,invalid:[],parent:[],self:!0,tagName:"",type:0,void:!1};return y[e]?c({},t,{},y[e],{tagName:e}):t},n.isSafe=function(e){if("undefined"!=typeof HTMLAnchorElement&&e instanceof HTMLAnchorElement){var t=e.getAttribute("href");if(t&&"#"===t.charAt(0))return!0;var n=e.protocol.toLowerCase();return":"===n||"http:"===n||"https:"===n||"mailto:"===n||"tel:"===n}return!0},n.isTagAllowed=function(e){return!this.banned.has(e)&&!this.blocked.has(e)&&(this.props.allowElements||this.allowed.has(e))},n.parse=function(){return this.container?this.parseNode(this.container,this.getTagConfig(this.container.nodeName.toLowerCase())):[]},n.parseNode=function(e,t){var n=this,r=this.props,a=r.noHtml,i=r.noHtmlExceptMatchers,s=r.allowElements,l=r.transform,p=[],d="";return Array.from(e.childNodes).forEach((function(e){if(1===e.nodeType){var r=e.nodeName.toLowerCase(),f=n.getTagConfig(r);d&&(p.push(d),d="");var m,h=n.applyNodeFilters(r,e);if(!h)return;if(l){n.keyIndex+=1;var y=n.keyIndex;m=n.parseNode(h,f);var v=l(h,m,f);if(null===v)return;if(void 0!==v)return void p.push(o.a.cloneElement(v,{key:y}));n.keyIndex=y-1}if(n.banned.has(r))return;if(a||i&&"br"!==r||!n.isTagAllowed(r)||!s&&!n.canRenderChild(t,f))p=p.concat(n.parseNode(h,f.tagName?f:t));else{n.keyIndex+=1;var b=n.extractAttributes(h),g={tagName:r};b&&(g.attributes=b),f.void&&(g.selfClose=f.void),p.push(o.a.createElement(u,c({},g,{key:n.keyIndex}),m||n.parseNode(h,f)))}}else if(3===e.nodeType){var w=a&&!i?e.textContent:n.applyMatchers(e.textContent||"",t);Array.isArray(w)?p=p.concat(w):d+=w}})),d&&p.push(d),p},n.replaceTokens=function(e,t){if(!e.includes("{{{"))return e;for(var n=[],r=e,o=null;o=r.match(j);){var a=o,i=a[0],s=a[1],c=o.index,l=i.includes("/");0,c>0&&(n.push(r.slice(0,c)),r=r.slice(c));var u=t[s],p=u.children,d=u.matcher,f=u.props,m=void 0;if(l)m=i.length,n.push(d.createElement(p,f));else{var h=r.match(new RegExp("{{{/"+s+"}}}"));0,m=h.index+h[0].length,n.push(d.createElement(this.replaceTokens(r.slice(i.length,h.index),t),f))}r=r.slice(m)}return r.length>0&&n.push(r),0===n.length?"":1===n.length&&"string"==typeof n[0]?n[0]:n},t}();function x(e){var t,n=e.attributes,r=e.containerTagName,a=e.content,i=e.emptyContent,s=e.parsedContent,c=e.tagName,l=r||c||"div",p="fragment"===l||e.noWrap;if(s)t=s;else{var d=new k(a||"",e).parse();d.length>0&&(t=d)}return t||(t=i),p?o.a.createElement(o.a.Fragment,null,t):o.a.createElement(u,{attributes:n,tagName:l},t)}!function(){function e(e,t,n){s(this,"greedy",!1),s(this,"options",void 0),s(this,"propName",void 0),s(this,"inverseName",void 0),s(this,"factory",void 0),this.options=c({},t),this.propName=e,this.inverseName="no"+(e.charAt(0).toUpperCase()+e.slice(1)),this.factory=n||null}var t=e.prototype;t.createElement=function(e,t){return this.factory?o.a.createElement(this.factory,t,e):this.replaceWith(e,t)},t.doMatch=function(e,t,n,r){return void 0===r&&(r=!1),function(e,t,n,r){void 0===r&&(r=!1);var o=e.match(t instanceof RegExp?t:new RegExp(t,"i"));return o?c({match:o[0],void:r},n(o),{index:o.index,length:o[0].length,valid:!0}):null}(e,t,n,r)},t.onBeforeParse=function(e,t){return e},t.onAfterParse=function(e,t){return e}}();
/**
 * @copyright   2016-2019, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */t.a=function(e){var t=e.attributes,n=e.content,r=void 0===n?"":n,a=e.disableFilters,i=void 0!==a&&a,s=e.disableMatchers,c=void 0!==s&&s,u=e.emptyContent,p=void 0===u?null:u,d=e.filters,f=void 0===d?[]:d,m=e.matchers,h=void 0===m?[]:m,y=e.onAfterParse,v=void 0===y?null:y,b=e.onBeforeParse,g=void 0===b?null:b,w=e.tagName,E=void 0===w?"span":w,O=e.noWrap,j=void 0!==O&&O,N=l(e,["attributes","content","disableFilters","disableMatchers","emptyContent","filters","matchers","onAfterParse","onBeforeParse","tagName","noWrap"]),R=c?[]:h,_=i?[]:f,P=g?[g]:[],S=v?[v]:[];R.forEach((function(e){e.onBeforeParse&&P.push(e.onBeforeParse.bind(e)),e.onAfterParse&&S.push(e.onAfterParse.bind(e))}));var D=P.reduce((function(t,n){return n(t,e)}),r||""),C=new k(D,N,R,_),T=S.reduce((function(t,n){return n(t,e)}),C.parse());return o.a.createElement(x,{attributes:t,containerTagName:e.containerTagName,emptyContent:p,tagName:E,noWrap:j,parsedContent:0===T.length?void 0:T})}}).call(this,n(13))},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t,n){"use strict";
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var r=/["'&<>]/;e.exports=function(e){var t,n=""+e,o=r.exec(n);if(!o)return n;var a="",i=0,s=0;for(i=o.index;i<n.length;i++){switch(n.charCodeAt(i)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#39;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}s!==i&&(a+=n.substring(s,i)),s=i+1,a+=t}return s!==i?a+n.substring(s,i):a}},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(8),a=n(2),i=n.n(a),s=n(3),c=n.n(s),l=n(4),u=n.n(l),p=n(5),d=n.n(p),f=n(1),m=n.n(f);function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var o=m()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d()(this,n)}}var y=function(e){u()(n,e);var t=h(n);function n(){return i()(this,n),t.apply(this,arguments)}return c()(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.episodeRef,o=e.episodes,a=e.activateEpisode;return Object(r.createElement)("div",{className:t},"Select podcast Episode",Object(r.createElement)("select",{ref:n},o.map((function(e,t){return Object(r.createElement)("option",{key:e.id,value:e.id},e.title)}))),Object(r.createElement)("button",{onClick:a},"Go"))}}]),n}(wp.element.Component),v=n(7);function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var o=m()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d()(this,n)}}var g=function(e){u()(n,e);var t=b(n);function n(){return i()(this,n),t.apply(this,arguments)}return c()(n,[{key:"render",value:function(){return Object(r.createElement)(v.a,{content:this.props.audioPlayer})}}]),n}(r.Component);function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var o=m()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d()(this,n)}}var E=wp.i18n.__,O=wp.element.Component,j=wp.blockEditor.BlockControls,N=wp.components,k=N.Button,x=N.Toolbar,R=wp.apiFetch,_=function(e){u()(n,e);var t=w(n);function n(e){var r,o=e.className;i()(this,n),(r=t.apply(this,arguments)).episodeRef=React.createRef();var a=!0;r.props.attributes.audio_player&&(a=!1);var s={audioPlayer:r.props.attributes.audio_player||""};return r.state={className:o,editing:a,episode:s,episodes:[]},r}return c()(n,[{key:"componentDidMount",value:function(){var e=this;R({path:"ssp/v1/episodes"}).then((function(t){var n=[];Object.keys(t).map((function(e){var r={id:t[e].id,title:t[e].title.rendered};n.push(r)})),e.setState({episodes:n})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.editing,o=t.episodes,a=t.className,i=t.episode,s=this.props.setAttributes,c=Object(r.createElement)(j,{key:"controls"},Object(r.createElement)(x,null,Object(r.createElement)(k,{className:"components-icon-button components-toolbar__control",label:E("Select Podcast","seriously-simple-podcasting"),onClick:function(){e.setState({editing:!0})},icon:"edit"})));return n?Object(r.createElement)(y,{className:a,episodeRef:this.episodeRef,episodes:o,activateEpisode:function(){var t=e.episodeRef.current.value;R({path:"ssp/v1/audio_player?ssp_podcast_id="+t}).then((function(n){console.log(n);var r={episodeId:t,audioPlayer:n.audio_player};e.setState({episode:r,editing:!1}),s({id:t,audio_player:r.audioPlayer})}))}}):[c,Object(r.createElement)(g,{className:a,audioPlayer:i.audioPlayer})]}}]),n}(O);function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var o=m()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d()(this,n)}}var S=function(e){u()(n,e);var t=P(n);function n(){return i()(this,n),t.apply(this,arguments)}return c()(n,[{key:"render",value:function(){var e={overflow:"hidden"},t={background:"url("+this.props.episodeImage+")",WebkitBackgroundSize:"cover",backgroundSize:"cover"};return Object(r.createElement)("div",{className:this.props.className},Object(r.createElement)("div",{className:"ssp-player ssp-player-large","data-player-instance-number":"1","data-player-waveform-colour":"#fff","data-player-waveform-progress-colour":"#00d4f7","data-source-file":this.props.episodeFileUrl,id:"ssp_player_id_1",style:{background:"#222222"}},Object(r.createElement)("div",{className:"ssp-album-art-container"},Object(r.createElement)("div",{className:"ssp-album-art",style:t})),Object(r.createElement)("div",{style:e},Object(r.createElement)("div",{className:"ssp-player-inner",style:e},Object(r.createElement)("div",{className:"ssp-player-info"},Object(r.createElement)("div",{style:{width:"80%",float:"left"}},Object(r.createElement)("h3",{className:"ssp-player-title episode-title"},this.props.episodeTitle)),Object(r.createElement)("div",{className:"ssp-download-episode",style:{overflow:"hidden",textAlign:"right"}}),Object(r.createElement)("div",null," "),Object(r.createElement)("div",{className:"ssp-media-player"},Object(r.createElement)("div",{className:"ssp-custom-player-controls"},Object(r.createElement)("div",{className:"ssp-play-pause",id:"ssp-play-pause"},Object(r.createElement)("span",{className:"ssp-icon ssp-icon-play_icon"}," ")),Object(r.createElement)("div",{className:"ssp-wave-form"},Object(r.createElement)("div",{className:"ssp-inner"},Object(r.createElement)("div",{"data-waveform-id":"waveform_1",id:"waveform1",className:"ssp-wave"}))),Object(r.createElement)("div",{className:"ssp-time-volume"},Object(r.createElement)("div",{className:"ssp-duration"},Object(r.createElement)("span",{id:"sspPlayedDuration"},"00:00")," / ",Object(r.createElement)("span",{id:"sspTotalDuration"},this.props.episodeDuration)),Object(r.createElement)("div",{className:"ssp-volume"},Object(r.createElement)("div",{className:"ssp-back-thirty-container"},Object(r.createElement)("div",{className:"ssp-back-thirty-control",id:"ssp-back-thirty"},Object(r.createElement)("i",{className:"ssp-icon icon-replay"}," "))),Object(r.createElement)("div",{className:"ssp-playback-speed-label-container"},Object(r.createElement)("div",{className:"ssp-playback-speed-label-wrapper"},Object(r.createElement)("span",{"data-playback-speed-id":"ssp_playback_speed_1",id:"ssp_playback_speed1","data-ssp-playback-rate":1},"1X"))),Object(r.createElement)("div",{className:"ssp-download-container"},Object(r.createElement)("div",{className:"ssp-download-control"},Object(r.createElement)("a",{className:"ssp-episode-download",href:this.props.episodeDownloadUrl,target:"_blank",rel:"noopener noreferrer"},Object(r.createElement)("i",{className:"ssp-icon icon-cloud-download"}," ")))))))))))))}}]),n}(r.Component);function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var o=m()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d()(this,n)}}var C=wp.i18n.__,T=wp.element.Component,A=wp.blockEditor.BlockControls,I=wp.components,F=I.Button,B=I.Toolbar,L=wp.apiFetch,U=function(e){u()(n,e);var t=D(n);function n(e){var r,o=e.className;i()(this,n),(r=t.apply(this,arguments)).episodeRef=React.createRef();var a={episodeImage:r.props.attributes.image||"",episodeFileUrl:r.props.attributes.file||"",episodeTitle:r.props.attributes.title||"",episodeDuration:r.props.attributes.duration||"",episodeDownloadUrl:r.props.attributes.download||""},s=!0;return r.props.attributes.title&&(s=!1),r.state={editing:s,className:o,episodes:[],episode:a},r}return c()(n,[{key:"componentDidMount",value:function(){var e=this;L({path:"ssp/v1/episodes"}).then((function(t){var n=[];Object.keys(t).map((function(e){var r={id:t[e].id,title:t[e].title.rendered};n.push(r)})),e.setState({episodes:n})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.editing,o=t.episodes,a=t.className,i=this.props.setAttributes,s=Object(r.createElement)(A,{key:"controls"},Object(r.createElement)(B,null,Object(r.createElement)(F,{className:"components-icon-button components-toolbar__control",label:C("Select Podcast","seriously-simple-podcasting"),onClick:function(){e.setState({editing:!0})},icon:"edit"})));return n?Object(r.createElement)(y,{className:a,episodeRef:this.episodeRef,episodes:o,activateEpisode:function(){var t=e.episodeRef.current.value;L({path:"ssp/v1/episodes?include="+t}).then((function(n){var r={episodeId:t,episodeImage:n[0].episode_player_image,episodeFileUrl:n[0].meta.audio_file,episodeTitle:n[0].title.rendered,episodeDuration:n[0].meta.duration,episodeDownloadUrl:n[0].download_link};e.setState({episode:r,editing:!1}),i({id:t,image:r.episodeImage,file:r.episodeFileUrl,title:r.episodeTitle,duration:r.episodeDuration,download:r.episodeDownloadUrl})}))}}):[s,Object(r.createElement)(S,{className:this.state.className,episodeImage:this.state.episode.episodeImage,episodeFileUrl:this.state.episode.episodeFileUrl,episodeTitle:this.state.episode.episodeTitle,episodeDuration:this.state.episode.episodeDuration,episodeDownloadUrl:this.state.episode.episodeDownloadUrl})]}}]),n}(T);function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var o=m()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d()(this,n)}}var z=function(e){u()(n,e);var t=M(n);function n(){return i()(this,n),t.apply(this,arguments)}return c()(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.post;return n.audio_player?Object(r.createElement)(AudioPlayer,{className:t,audioPlayer:n.audio_player}):Object(r.createElement)(S,{className:t,episodeImage:n.episode_player_image,episodeFileUrl:n.meta.audio_file,episodeTitle:n.title.rendered,episodeDuration:n.meta.duration,episodeDownloadUrl:n.download_link})}}]),n}(r.Component);function H(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var o=m()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d()(this,n)}}var W=function(e){u()(n,e);var t=H(n);function n(){return i()(this,n),t.apply(this,arguments)}return c()(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.download,o=e.duration,a=n+"?ref=download",i=n+"?ref=new_window";return Object(r.createElement)("p",null,Object(r.createElement)("a",{href:a,title:t,className:"podcast-meta-download"},"Download file")," | ",Object(r.createElement)("a",{href:i,target:"_blank",title:t,className:"podcast-meta-new-window"},"Play in new window")," | ",Object(r.createElement)("span",{className:"podcast-meta-duration"},"Duration: ",o))}}]),n}(r.Component);function q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var o=m()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d()(this,n)}}var G=function(e){u()(n,e);var t=q(n);function n(){return i()(this,n),t.apply(this,arguments)}return c()(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.post,o="";return n.episode_featured_image&&(o=Object(r.createElement)("a",{className:"podcast-image-link",href:n.link,"aria-hidden":"true",tabIndex:"-1"},Object(r.createElement)("img",{src:n.episode_featured_image}))),Object(r.createElement)("article",{className:t},Object(r.createElement)("h2",null,Object(r.createElement)("a",{className:"entry-title-link",rel:"bookmark",href:n.link},n.title.rendered)),Object(r.createElement)("div",{className:"podcast-content"},o,Object(r.createElement)("p",null,Object(r.createElement)(v.a,{content:n.excerpt.rendered})),Object(r.createElement)(z,{className:t,post:n}),Object(r.createElement)(W,{className:t,title:n.title.rendered,download:n.download_link,duration:n.meta.duration})))}}]),n}(wp.element.Component);function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var o=m()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d()(this,n)}}wp.i18n.__;var X=wp.element.Component,Y=(wp.blockEditor.BlockControls,wp.components),Z=(Y.Button,Y.Toolbar,wp.apiFetch),J=function(e){u()(n,e);var t=V(n);function n(e){var r,o=e.className;return i()(this,n),(r=t.apply(this,arguments)).state={className:o,episodes:[]},r}return c()(n,[{key:"componentDidMount",value:function(){var e=this;Z({path:"ssp/v1/episodes"}).then((function(t){var n=[];Object.keys(t).map((function(e){var r=t[e];n.push(r)})),e.setState({episodes:n})}))}},{key:"render",value:function(){var e=this.state,t=e.className,n=e.episodes.map((function(e){return Object(r.createElement)(G,{key:e.id,className:t,post:e})}));return Object(r.createElement)("div",null,n)}}]),n}(X);Object(o.registerBlockType)("seriously-simple-podcasting/audio-player",{title:"Audio Player",icon:"controls-volumeon",category:"layout",supports:{multiple:!1},attributes:{id:{type:"string"},audio_player:{type:"string",source:"html",selector:"span"}},edit:_,save:function(e,t){var n=e.attributes,o=(n.id,n.audio_player);return Object(r.createElement)(g,{className:t,audioPlayer:o})}}),Object(o.registerBlockType)("seriously-simple-podcasting/castos-player",{title:"Castos Player",icon:"controls-volumeon",category:"layout",supports:{multiple:!1},attributes:{id:{type:"string"},image:{type:"string"},file:{type:"string"},title:{type:"string"},duration:{type:"string"},download:{type:"string"}},edit:U,save:function(e,t){var n=e.attributes,o=(n.id,n.image),a=n.file,i=n.title,s=n.duration,c=n.download;return Object(r.createElement)(S,{className:t,episodeImage:o,episodeFileUrl:a,episodeTitle:i,episodeDuration:s,episodeDownloadUrl:c})}}),Object(o.registerBlockType)("seriously-simple-podcasting/podcast-list",{title:"Podcast List",icon:"megaphone",category:"widgets",edit:J})}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4995:function(e,t,r){"use strict";r.d(t,{rm:function(){return ee},zo:function(){return re}});var n,i=r(7294),o={all:"all"},l="colors",s="sizes",a="space",c={gap:a,gridGap:a,columnGap:a,gridColumnGap:a,rowGap:a,gridRowGap:a,inset:a,insetBlock:a,insetBlockEnd:a,insetBlockStart:a,insetInline:a,insetInlineEnd:a,insetInlineStart:a,margin:a,marginTop:a,marginRight:a,marginBottom:a,marginLeft:a,marginBlock:a,marginBlockEnd:a,marginBlockStart:a,marginInline:a,marginInlineEnd:a,marginInlineStart:a,padding:a,paddingTop:a,paddingRight:a,paddingBottom:a,paddingLeft:a,paddingBlock:a,paddingBlockEnd:a,paddingBlockStart:a,paddingInline:a,paddingInlineEnd:a,paddingInlineStart:a,top:a,right:a,bottom:a,left:a,scrollMargin:a,scrollMarginTop:a,scrollMarginRight:a,scrollMarginBottom:a,scrollMarginLeft:a,scrollMarginX:a,scrollMarginY:a,scrollMarginBlock:a,scrollMarginBlockEnd:a,scrollMarginBlockStart:a,scrollMarginInline:a,scrollMarginInlineEnd:a,scrollMarginInlineStart:a,scrollPadding:a,scrollPaddingTop:a,scrollPaddingRight:a,scrollPaddingBottom:a,scrollPaddingLeft:a,scrollPaddingX:a,scrollPaddingY:a,scrollPaddingBlock:a,scrollPaddingBlockEnd:a,scrollPaddingBlockStart:a,scrollPaddingInline:a,scrollPaddingInlineEnd:a,scrollPaddingInlineStart:a,fontSize:"fontSizes",background:l,backgroundColor:l,backgroundImage:l,border:l,borderBlock:l,borderBlockEnd:l,borderBlockStart:l,borderBottom:l,borderBottomColor:l,borderColor:l,borderInline:l,borderInlineEnd:l,borderInlineStart:l,borderLeft:l,borderLeftColor:l,borderRight:l,borderRightColor:l,borderTop:l,borderTopColor:l,caretColor:l,color:l,columnRuleColor:l,fill:l,outline:l,outlineColor:l,stroke:l,textDecorationColor:l,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:s,minBlockSize:s,maxBlockSize:s,inlineSize:s,minInlineSize:s,maxInlineSize:s,width:s,minWidth:s,maxWidth:s,height:s,minHeight:s,maxHeight:s,flexBasis:s,gridTemplateColumns:s,gridTemplateRows:s,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},d=(e,t)=>"function"==typeof t?{"()":Function.prototype.toString.call(t)}:t,g=()=>{const e=Object.create(null);return(t,r,...n)=>{const i=(e=>JSON.stringify(e,d))(t);return i in e?e[i]:e[i]=r(t,...n)}},u=Symbol.for("sxs.composers"),p=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),m=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:f}=Object.prototype,h=(e,t)=>f.call(e,t),b=e=>e.includes("-")?e:e.replace(/[A-Z]/g,(e=>"-"+e.toLowerCase())),S=/\s+(?![^()]*\))/,y=e=>t=>e(..."string"==typeof t?String(t).split(S):[t]),F={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:y(((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e}))),marginInline:y(((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e}))),maxSize:y(((e,t)=>({maxBlockSize:e,maxInlineSize:t||e}))),minSize:y(((e,t)=>({minBlockSize:e,minInlineSize:t||e}))),paddingBlock:y(((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e}))),paddingInline:y(((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e})))},k=/([\d.]+)([^]*)/,B=(e,t)=>e.length?e.reduce(((e,r)=>(e.push(...t.map((e=>e.includes("&")?e.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(e)?`:is(${r})`:r):r+" "+e))),e)),[]):t,x=(e,t)=>e in E&&"string"==typeof t?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,((t,r,n,i)=>r+("stretch"===n?`-moz-available${i};${e}:${r}-webkit-fill-available`:`-moz-fit-content${i};${e}:${r}fit-content`)+i)):String(t),E={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},R=e=>e?e+"-":"",$=(e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,((e,n,i,o,l)=>"$"==o==!!i?e:(n||"--"==o?"calc(":"")+"var(--"+("$"===o?R(t)+(l.includes("$")?"":R(r))+l.replace(/\$/g,"-"):l)+")"+(n||"--"==o?"*"+(n||"")+(i||"1")+")":""))),w=/\s*,\s*(?![^()]*\))/,I=Object.prototype.toString,C=(e,t,r,n,i)=>{let o,l,s;const a=(e,t,r)=>{let c,d;const g=e=>{for(c in e){const m=64===c.charCodeAt(0),f=m&&Array.isArray(e[c])?e[c]:[e[c]];for(d of f){const e="object"==typeof d&&d&&d.toString===I,f=/[A-Z]/.test(p=c)?p:p.replace(/-[^]/g,(e=>e[1].toUpperCase()));if(f in n.utils){const e=n.utils[f];if(e!==l){l=e,g(e(n)(d)),l=null;continue}}else if(f in F){const e=F[f];if(e!==s){s=e,g(e(d)),s=null;continue}}if(m&&(u=c.slice(1)in n.media?"@media "+n.media[c.slice(1)]:c,c=u.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,((e,t,r,n,i,o)=>{const l=k.test(t),s=.0625*(l?-1:1),[a,c]=l?[n,t]:[t,n];return"("+("="===r[0]?"":">"===r[0]===l?"max-":"min-")+a+":"+("="!==r[0]&&1===r.length?c.replace(k,((e,t,n)=>Number(t)+s*(">"===r?1:-1)+n)):c)+(i?") and ("+(">"===i[0]?"min-":"max-")+a+":"+(1===i.length?o.replace(k,((e,t,r)=>Number(t)+s*(">"===i?-1:1)+r)):o):"")+")"}))),e){const e=m?r.concat(c):[...r],n=m?[...t]:B(t,c.split(w));void 0!==o&&i(j(...o)),o=void 0,a(d,n,e)}else void 0===o&&(o=[[],t,r]),c=m||36!==c.charCodeAt(0)?c:`--${R(n.prefix)}${c.slice(1).replace(/\$/g,"-")}`,d=e?d:"number"==typeof d?d&&f in v?String(d)+"px":String(d):$(x(f,d),n.prefix,n.themeMap[f]),o[0].push(`${m?`${c} `:`${b(c)}:`}${d}`)}}var u,p};g(e),void 0!==o&&i(j(...o)),o=void 0};a(e,t,r)},j=(e,t,r)=>`${r.map((e=>`${e}{`)).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,v={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},z=e=>String.fromCharCode(e+(e>25?39:97)),W=e=>(e=>{let t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=z(t%52)+r;return z(t%52)+r})(((e,t)=>{let r=t.length;for(;r;)e=33*e^t.charCodeAt(--r);return e})(5381,JSON.stringify(e))>>>0),A=g(),P=(e,t)=>A(e,(()=>(...r)=>{let n=null;const i=new Set;for(const t of r)if(null!=t)switch(typeof t){case"function":if(null==n&&!t[u]){n=t;break}case"object":if(null==n&&null!=t.type&&(n=t.type),u in t)for(const e of t[u])i.add(e);else if(!("$$typeof"in t)){const r=O(t,e);i.add(r)}break;case"string":n=t}return null==n&&(n="span"),i.size||i.add(["PJLV",{},[],[],{},[]]),D(e,n,i,t)})),O=({variants:e,compoundVariants:t,defaultVariants:r,...n},i)=>{const o=`${R(i.prefix)}c-${W(n)}`,l=[],s=[],a=Object.create(null),c=[];for(const d in r)a[d]=String(r[d]);if("object"==typeof e&&e)for(const d in e){h(a,d)||(a[d]="undefined");const t=e[d];for(const e in t){const r={[d]:String(e)};"undefined"===String(e)&&c.push(d);const n=t[e],i=[r,n,!m(n)];l.push(i)}}if("object"==typeof t&&t)for(const d of t){let{css:e,...t}=d;e="object"==typeof e&&e||{};for(const n in t)t[n]=String(t[n]);const r=[t,e,!m(e)];s.push(r)}return[o,n,l,s,a,c]},D=(e,t,r,n)=>{const[i,o,l,s]=M(r),a=`.${i}`,c=c=>{c="object"==typeof c&&c||L;const{css:d,...g}=c,u={};for(const e in l)if(delete g[e],e in c){let t=c[e];"object"==typeof t&&t?u[e]={"@initial":l[e],...t}:(t=String(t),u[e]="undefined"!==t||s.has(e)?t:l[e])}else u[e]=l[e];const p=new Set([...o]);for(const[t,i,o,l]of r){n.rules.styled.cache.has(t)||(n.rules.styled.cache.add(t),C(i,[`.${t}`],[],e,(e=>{n.rules.styled.apply(e)})));const r=T(o,u,e.media),s=T(l,u,e.media,!0);for(const i of r)if(void 0!==i)for(const[r,o]of i){const i=`${t}-${W(o)}-${r}`;p.add(i),n.rules.onevar.cache.has(i)||(n.rules.onevar.cache.add(i),C(o,[`.${i}`],[],e,(e=>{n.rules.onevar.apply(e)})))}for(const i of s)if(void 0!==i)for(const[r,o]of i){const i=`${t}-${W(o)}-${r}`;p.add(i),n.rules.allvar.cache.has(i)||(n.rules.allvar.cache.add(i),C(o,[`.${i}`],[],e,(e=>{n.rules.allvar.apply(e)})))}}if("object"==typeof d&&d){const t=`${i}-i${W(d)}-css`;p.add(t),n.rules.inline.cache.has(t)||(n.rules.inline.cache.add(t),C(d,[`.${t}`],[],e,(e=>{n.rules.inline.apply(e)})))}for(const e of String(c.className||"").trim().split(/\s+/))e&&p.add(e);const m=g.className=[...p].join(" ");return{type:t,className:m,selector:a,props:g,toString:()=>m}};return p(c,{type:t,className:i,selector:a,[u]:r,toString:()=>(n.rules.styled.cache.has(i)||c(),i)})},M=e=>{let t="";const r=[],n={},i=[];for(const[o,,,,l,s]of e){""===t&&(t=o),r.push(o),i.push(...s);for(const e in l){const t=l[e];(void 0===n[e]||"undefined"!==t||s.includes(t))&&(n[e]=t)}}return[t,r,n,new Set(i)]},T=(e,t,r,n)=>{const i=[];e:for(let[o,l,s]of e){if(s)continue;let e,a=0;for(e in o){const n=o[e];let i=t[e];if(i!==n){if("object"!=typeof i||!i)continue e;{let e,t=0;for(const o in i)n===String(i[o])&&("@initial"!==o&&(l={[o in r?r[o]:o]:l}),a+=t,e=!0),++t;if(!e)continue e}}}(i[a]=i[a]||[]).push([n?"cv":`${e}-${o[e]}`,l])}return i},L={},N=g(),_=(e,t)=>N(e,(()=>r=>{const n=W(r="object"==typeof r&&r||{}),i=()=>{if(!t.rules.global.cache.has(n)){if(t.rules.global.cache.add(n),"@import"in r){let e=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let n of[].concat(r["@import"]))n=n.includes('"')||n.includes("'")?n:`"${n}"`,t.sheet.insertRule(`@import ${n};`,e++);delete r["@import"]}C(r,[],[],e,(e=>{t.rules.global.apply(e)}))}return""};return p(i,{toString:i})})),H=g(),G=(e,t)=>H(e,(()=>r=>{const n=`${R(e.prefix)}k-${W(r)}`,i=()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);const i=[];C(r,[],[],e,(e=>i.push(e)));const o=`@keyframes ${n}{${i.join("")}}`;t.rules.global.apply(o)}return n};return p(i,{get name(){return i()},toString:i})})),V=class{constructor(e,t,r,n){this.token=null==e?"":String(e),this.value=null==t?"":String(t),this.scale=null==r?"":String(r),this.prefix=null==n?"":String(n)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+R(this.prefix)+R(this.scale)+this.token}toString(){return this.computedValue}},X=g(),J=(e,t)=>X(e,(()=>(r,n)=>{n="object"==typeof r&&r||Object(n);const i=`.${r=(r="string"==typeof r?r:"")||`${R(e.prefix)}t-${W(n)}`}`,o={},l=[];for(const t in n){o[t]={};for(const r in n[t]){const i=`--${R(e.prefix)}${t}-${r}`,s=$(String(n[t][r]),e.prefix,t);o[t][r]=new V(r,s,t,e.prefix),l.push(`${i}:${s}`)}}return{...o,className:r,selector:i,toString:()=>{if(l.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);const i=`${n===e.theme?":root,":""}.${r}{${l.join(";")}}`;t.rules.themed.apply(i)}return r}}})),U=["themed","global","styled","onevar","allvar","inline"],Z=e=>{let t;const r=()=>{if(t){const{rules:e,sheet:r}=t;if(!r.deleteRule){for(;3===Object(Object(r.cssRules)[0]).type;)r.cssRules.splice(0,1);r.cssRules=[]}for(const t in e)delete e[t];r.ownerRule&&(r.ownerRule.textContent=r.ownerRule.textContent)}const n=Object(e).styleSheets||[];for(const e of n)if(!e.href||e.href.startsWith(location.origin)){for(let n=0,i=e.cssRules;i[n];++n){const o=Object(i[n]);if(1!==o.type)continue;const l=Object(i[n+1]);if(4!==l.type)continue;++n;const{cssText:s}=o;if(!s.startsWith("--stitches"))continue;const a=s.slice(16,-3).trim().split(/\s+/),c=U[a[0]];c&&(t||(t={sheet:e,reset:r,rules:{}}),t.rules[c]={group:l,index:n,cache:new Set(a)})}if(t)break}if(!t){const n=(e,t)=>({type:t,cssRules:[],insertRule(e,t){this.cssRules.splice(t,0,n(e,{import:3,undefined:1}[(e.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return"@media{}"===e?`@media{${[].map.call(this.cssRules,(e=>e.cssText)).join("")}}`:e}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:n("","text/css"),rules:{},reset:r,toString(){const{cssRules:e}=t.sheet;return[].map.call(e,((r,n)=>{const{cssText:i}=r;let o="";if(i.startsWith("--stitches"))return"";if(e[n-1]&&(o=e[n-1].cssText).startsWith("--stitches")){if(!r.cssRules.length)return"";for(const e in t.rules)if(t.rules[e].group===r)return`--stitches{--:${[...t.rules[e].cache].join(" ")}}${i}`;return r.cssRules.length?`${o}${i}`:""}return i})).join("")}}}const{sheet:i,rules:o}=t;if(!o.inline){const e=i.cssRules.length;i.insertRule("@media{}",e),i.insertRule("--stitches{--:5}",e),o.inline={index:e,group:i.cssRules[e+1],cache:new Set([5])}}if(Y(o.inline),!o.allvar){const e=o.inline.index;i.insertRule("@media{}",e),i.insertRule("--stitches{--:4}",e),o.allvar={index:e,group:i.cssRules[e+1],cache:new Set([4])}}if(Y(o.allvar),!o.onevar){const e=o.allvar.index;i.insertRule("@media{}",e),i.insertRule("--stitches{--:3}",e),o.onevar={index:e,group:i.cssRules[e+1],cache:new Set([3])}}if(Y(o.onevar),!o.styled){const e=o.onevar.index;i.insertRule("@media{}",e),i.insertRule("--stitches{--:2}",e),o.styled={index:e,group:i.cssRules[e+1],cache:new Set([2])}}if(Y(o.styled),!o.global){const e=o.styled.index;i.insertRule("@media{}",e),i.insertRule("--stitches{--:1}",e),o.global={index:e,group:i.cssRules[e+1],cache:new Set([1])}}if(Y(o.global),!o.themed){const e=o.global.index;i.insertRule("@media{}",e),i.insertRule("--stitches{--:0}",e),o.themed={index:e,group:i.cssRules[e+1],cache:new Set([0])}}Y(o.themed)};return r(),t},Y=e=>{const t=e.group;let r=t.cssRules.length;e.apply=e=>{try{t.insertRule(e,r),++r}catch{}}},q=g(),K=e=>null==e?"span":"object"!=typeof e||e.$$typeof?h(e,u)?K(e.type):e:"span",Q=g(),ee=e=>{const t=(e=>{let t=!1;const r=q(e,(e=>{t=!0;const r="prefix"in(e="object"==typeof e&&e||{})?String(e.prefix):"",n={...o,..."object"==typeof e.media&&e.media||{}},i="object"==typeof e.root?e.root||null:globalThis.document||null,l="object"==typeof e.theme&&e.theme||{},s={prefix:r,media:n,root:i,theme:l,themeMap:"object"==typeof e.themeMap&&e.themeMap||{...c},utils:"object"==typeof e.utils&&e.utils||{}},a=Z(i),d={css:P(s,a),global:_(s,a),keyframes:G(s,a),theme:J(s,a),reset(){a.reset(),g.toString()},sheet:a,config:s,prefix:r,getCssString:a.toString,toString:a.toString},g=d.theme(l);return Object.assign(d.theme,g),g.toString(),d}));return t||r.reset(),r})(e);return t.styled=(({config:e,sheet:t})=>Q(e,(()=>{const r=P(e,t);return(...e)=>{const t=K(e[0]),n=r(...e),o=i.forwardRef(((e,r)=>{const o=e&&e.as||t,l=n(e).props;return delete l.as,l.ref=r,i.createElement(o,l)}));return o.className=n.className,o.displayName=`Styled.${t.displayName||t.name||t}`,o.selector=n.selector,o.type=t,o.toString=()=>n.selector,o[u]=n[u],o}})))(t),t},te=()=>n||(n=ee()),re=(...e)=>te().styled(...e)},5127:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,{default:function(){return s}});var i=r(5893);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var l=(0,r(6626).IS)({body:{padding:"0",margin:"0",fontFamily:"Poppins",backgroundColor:"#f8f6f0"},a:{color:"inherit",textDecoration:"none"}});var s=function(e){var t=e.Component,r=e.pageProps;return l(),(0,i.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r))}},6626:function(e,t,r){"use strict";r.d(t,{zo:function(){return i},iv:function(){return o},IS:function(){return l}});var n=(0,r(4995).rm)({theme:{fonts:{firaCode:"Fira Code, sans-serif",gotcha:"Gotcha, san-serif"},fontSizes:{10:"0.7500rem",20:"0.8750rem",30:"1.0000rem",40:"1.1250rem",50:"1.1880rem",60:"1.2500rem",70:"1.5000rem",80:"1.6000rem",85:"2.2500rem",90:"2.5000rem",100:"3.1250rem",110:"3.7500rem",120:"6.0000rem",130:"8.1250rem"},fontWeights:{light:300,regular:400,medium:500,bold:700},space:{1:"0.1250rem",2:"0.2500rem",3:"0.5000rem",4:"0.6250rem",5:"0.7500rem",6:"0.8750rem",7:"1.0000rem",8:"1.2500rem",9:"1.5000rem",10:"1.8750rem",11:"2.5000rem",12:"3.0000rem",13:"4.0000rem",14:"5.0000rem",main:"3.0000rem"},sizes:{1:"0.1250rem",2:"0.2500rem",3:"0.5000rem",4:"0.6250rem",5:"0.7500rem",6:"0.8750rem",7:"1.0000rem",8:"1.2500rem",9:"1.5000rem",10:"1.8750rem",11:"2.0000rem",12:"2.5000rem",13:"3.0000rem",14:"4.0000rem",15:"5.0000rem"},lineHeights:{233:"0.4668rem",240:"0.4800rem",247:"0.4940rem",267:"0.5336rem",286:"0.5720rem",300:"0.6000rem",314:"0.6280rem",350:"0.7000rem",500:"1.0000rem",750:"1.5000rem"},letterSpacings:{0:"0em",1:"0.00735em",2:"0.00750em",3:"0.00714em",4:"0.00938em",5:"0.01071em",6:"0.01562em",7:"0.02857em"},radii:{1:"0.2500rem",2:"0.5000rem",3:"0.7500rem",round:"50%",pill:"9999px"},zIndices:{lowest:-1500,highest:1500,aboveStdElements:1250,modalBg:1499,modal:1500},colors:{black250:"rgba(3, 4, 22, 1)",black400:"rgba(2, 2, 12, 1)",black500:"rgba(0, 0, 0)",white500:"rgba(255, 255, 255, 1)",gray900:"#030416",gray800:"#181827",gray700:"#222131",gray600:"#697082",gray500:"#7A8094",gray400:"#A5A9B8",gray300:"#D0D4E0",gray200:"#E7EAF3",gray100:"#F4F6FB",gray50:"#F9FAFF",red900:"#1F0007",red800:"#40000F",red700:"#6D001A",red600:"#AA0029",red500:"#D00032",red400:"#FF003D",red300:"#FF6287",red200:"#FF96AF",red100:"#FFC6D3",red50:"#FFF0F4",orange900:"#230D00",orange800:"#943500",orange700:"#C84901",orange600:"#E75300",orange500:"#FF5C00",orange400:"#\u2019FF7E36",orange300:"#FFA675",orange200:"#FFCAAC",orange100:"#FFE8DB",orange50:"#FDF5F0",yellow900:"#221608",yellow800:"#4F4215",yellow700:"#C07300",yellow600:"#D69A00",yellow500:"#EEB700",yellow400:"#FFC400",yellow300:"#FFDC6B",yellow200:"#FFE98F",yellow100:"#FEF3C7",yellow50:"#FFFBEB",green900:"#001C10",green800:"#0D5B3A",green700:"#037845",green600:"#059A5A",green500:"#14B871",green400:"#00E582",green300:"#6EE7B7",green200:"#A7F3D0",green100:"#D1FAE5",green50:"#ECFDF5",cyan900:"#001515",cyan800:"#0A302E",cyan700:"#0F766E",cyan600:"#00AAAA",cyan500:"#00CCCC",cyan400:"#00F9F9",cyan300:"#00EEEE",cyan200:"#6DFFFF",cyan100:"#B9FFFF",cyan50:"#EBFFFF",blue900:"#000E22",blue800:"#184173",blue700:"#025BC9",blue600:"#0E6EE3",blue500:"#227EEF",blue400:"#3C93FF",blue300:"#88BDFF",blue200:"#BAE6FD",blue100:"#DEEDFF",blue50:"#F0F7FF",purple900:"#110026",purple800:"#3A1666",purple700:"#6F11DF",purple600:"#8C30FA",purple500:"#9F4FFF",purple400:"#AC65FF",purple300:"#CEA4FF",purple200:"#E4CDFF",purple100:"#F1E5FF",purple50:"#FAF5FF"},shadows:{0:"0rem",1:"0.0625rem",2:"0.1250rem",3:"0.1875rem"},transitions:{easeInOut:"150ms ease-in-out"}},media:{xs:"(min-width: 0px)",sm:"(min-width: 601px)",md:"(min-width: 961px)",lg:"(min-width: 1441px)",xl:"(min-width: 1921px)"}}),i=n.styled,o=n.css,l=(n.theme,n.getCssString,n.global);n.keyframes,n.config},6363:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(5127)}])}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(4651)}));var r=e.O();_N_E=r}]);
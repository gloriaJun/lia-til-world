"use strict";(self.webpackChunkgloria_tilog_root=self.webpackChunkgloria_tilog_root||[]).push([[8356],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,u(u({ref:t},i),{},{components:n})):r.createElement(f,u({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,u[1]=l;for(var c=2;c<o;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function u(e){var t=e.children,n=e.hidden,u=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,u),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),o=n(6010),u=n(968),l=n(6550),s=n(1980),c=n(7392),i=n(12);function m(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:m(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,l.k6)(),u=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,s._X)(u),(0,a.useCallback)((function(e){if(u){var t=new URLSearchParams(o.location.search);t.set(u,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[u,o])]}function g(e){var t,n,r,o,u=e.defaultValue,l=e.queryString,s=void 0!==l&&l,c=e.groupId,m=p(e),g=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:m})})),b=g[0],v=g[1],h=f({queryString:s,groupId:c}),y=h[0],k=h[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,i.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),I=w[0],C=w[1],x=function(){var e=null!=y?y:I;return d({value:e,tabValues:m})?e:null}();return(0,a.useLayoutEffect)((function(){x&&v(x)}),[x]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);v(e),k(e),C(e)}),[k,C,m]),tabValues:m}}var b=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var t=e.className,n=e.block,l=e.selectedValue,s=e.selectValue,c=e.tabValues,i=[],m=(0,u.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=i.indexOf(t),r=c[n].value;r!==l&&(m(t),s(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,a=i.indexOf(e.currentTarget)+1;n=null!=(r=i[a])?r:i[0];break;case"ArrowLeft":var o,u=i.indexOf(e.currentTarget)-1;n=null!=(o=i[u])?o:i[i.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,u=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return i.push(e)},onKeyDown:d,onClick:p},u,{className:(0,o.Z)("tabs__item",v.tabItem,null==u?void 0:u.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var u=o.find((function(e){return e.props.value===r}));return u?(0,a.cloneElement)(u,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function k(e){var t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function w(e){var t=(0,b.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},8331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>c,metadata:()=>m,toc:()=>d});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),u=n(4866),l=n(5162),s=["components"],c={title:"[docusaurus] Configure Comment with Utterances",tags:["devlog","docusaurus","utterances"],date:"2023-05-24T09:18"},i=void 0,m={permalink:"/gloria-tilog/2023/05/24/side-project/docusaurus/docusaurus-comment",source:"@site/blog/side-project/docusaurus/2023-05-24-docusaurus-comment.mdx",title:"[docusaurus] Configure Comment with Utterances",description:"\ucf54\uba58\ud2b8 \uae30\ub2a5\uc744 \ucd94\uac00\ud558\uae30 \uc704\ud574 Utterances\ub97c \uc801\uc6a9\ud558\uc600\ub2e4.",date:"2023-05-24T09:18:00.000Z",formattedDate:"May 24, 2023",tags:[{label:"devlog",permalink:"/gloria-tilog/tags/devlog"},{label:"docusaurus",permalink:"/gloria-tilog/tags/docusaurus"},{label:"utterances",permalink:"/gloria-tilog/tags/utterances"}],readingTime:3.28,hasTruncateMarker:!1,authors:[],frontMatter:{title:"[docusaurus] Configure Comment with Utterances",tags:["devlog","docusaurus","utterances"],date:"2023-05-24T09:18"},nextItem:{title:"[docusaurus] Configure Search",permalink:"/gloria-tilog/2023/05/23/side-project/docusaurus/docusaurus-search"}},p={authorsImageUrls:[]},d=[{value:"utterances \uc124\uc815",id:"utterances-\uc124\uc815",level:2},{value:"Comment\uac00 \ub4f1\ub85d\ub420 Repo\ub97c \uc815\ud558\uae30",id:"comment\uac00-\ub4f1\ub85d\ub420-repo\ub97c-\uc815\ud558\uae30",level:3},{value:"utterances App Install",id:"utterances-app-install",level:3},{value:"Check &amp; Copy Utterance Configuration",id:"check--copy-utterance-configuration",level:3},{value:"Add Comment Component",id:"add-comment-component",level:2},{value:"Override BlogPostItem &amp; DocItem",id:"override-blogpostitem--docitem",level:3}],f={toc:d},g="wrapper";function b(e){var t=e.components,c=(0,a.Z)(e,s);return(0,o.kt)(g,(0,r.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ucf54\uba58\ud2b8 \uae30\ub2a5\uc744 \ucd94\uac00\ud558\uae30 \uc704\ud574 ",(0,o.kt)("a",{parentName:"p",href:"https://utteranc.es/"},"Utterances"),"\ub97c \uc801\uc6a9\ud558\uc600\ub2e4.\nDisqus\ub3c4 \uc788\uc9c0\ub9cc, Github\uc758 Repo\uc758 issue\ub85c \uad00\ub9ac\uac00 \ub41c\ub2e4\ub294 \ubd80\ubd84\uc774 \ub9e4\ub825\uc801\uc774\uace0 \uac00\ubcbc\uc6b4 \ub290\ub08c\uc774 \ub4e4\uc5b4 \ud574\ub2f9 \ud50c\ub7ab\ud3fc\uc744 \uc120\ud0dd\ud558\uac8c \ub418\uc5c8\ub2e4."),(0,o.kt)("h2",{id:"utterances-\uc124\uc815"},"utterances \uc124\uc815"),(0,o.kt)("h3",{id:"comment\uac00-\ub4f1\ub85d\ub420-repo\ub97c-\uc815\ud558\uae30"},"Comment\uac00 \ub4f1\ub85d\ub420 Repo\ub97c \uc815\ud558\uae30"),(0,o.kt)("p",null,"\ube14\ub85c\uadf8 \uc18c\uc2a4\uac00 \uad00\ub9ac\ub418\ub294 repo\ub97c \uc0ac\uc6a9\ud558\uc5ec\ub3c4 \ub418\uc9c0\ub9cc, \ub098\ub294 \ube14\ub85c\uadf8\uc5d0 \ucd94\uac00\ud560 \uae30\ub2a5\uc774\ub098 \uc218\uc815\ud560 \ubd80\ubd84\uc774 \uc788\uc73c\uba74 \uae43\uc774\uc288\ub85c \ub4f1\ub85d\ud558\uc5ec \uae30\ub85d\ud558\uace0 \uc788\uc5b4\uc11c \ubcc4\ub3c4\uc758 \ub808\ud3ec\ub97c \uc0dd\uc131\ud558\uc600\ub2e4.\n\uadf8\ub9ac\uace0 Comment\ub97c \uad00\ub9ac\ud558\uae30 \uc704\ud55c \ub808\ud3ec\ub294 utterances \uc571\uc774 \uc811\uadfc\ud560 \uc218 \uc788\ub294 \uad8c\ud55c\uc774 \uc788\uc5b4\uc57c \ud558\uace0, public repo \uc5ec\uc57c \ud55c\ub2e4."),(0,o.kt)("h3",{id:"utterances-app-install"},"utterances App Install"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/apps/utterances"},"utterances GitHub App"),"\uc744 \uc0dd\uc131\ud55c Repo\uc5d0 \uc124\uce58\ud574\uc900\ub2e4."),(0,o.kt)("p",null,"comment\ub97c \uad00\ub9ac\ud558\uace0\uc790 \ud558\ub294 \ub808\ud3ec\uc5d0\ub9cc \uc124\uce58\ud574\uc8fc\uc5c8\ub2e4.\n",(0,o.kt)("img",{alt:"install",src:n(8323).Z,width:"1270",height:"1778"})),(0,o.kt)("h3",{id:"check--copy-utterance-configuration"},"Check & Copy Utterance Configuration"),(0,o.kt)("p",null,"utterances App\uc744 \uc124\uce58\ud558\uace0\ub098\uba74 ",(0,o.kt)("a",{parentName:"p",href:"https://utteranc.es/?installation_id=37845297&setup_action=install"},"https://utteranc.es/?installation_id=37845297&setup_action=install")," \ub9c1\ud06c\uac00 \ub178\ucd9c\uc774 \ub418\ub294\ub370,\n\ud574\ub2f9 \ud654\uba74\uc744 \ud1b5\ud558\uc5ec Comment\uac00 \ub178\ucd9c\ub418\ub3c4\ub85d \ud558\uae30 \uc704\ud55c \uc124\uc815\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("p",null,"\ub2e4\uc74c \uc608\uc2dc\uc640 \uac19\uc774 \uc124\uce58\ud558\uace0\uc790 \ud558\ub294 \ub808\ud3ec \uc774\ub984, \uc774\uc288 \ud0c0\uc774\ud2c0\uc744 \ubb34\uc5c7\uc73c\ub85c \uc124\uc815\ud558\ub3c4\ub85d \ud560 \uac83\uc778\uc9c0 \ub4f1\uc744 \uc124\uc815\ud55c \ub4a4 \uc81c\uc77c \ud558\ub2e8\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"Enable Utterance")," \ubd80\ubd84\uc5d0 \uc791\uc131\ub41c \ub0b4\uc6a9\uc744 \ud655\uc778\ud574\ub454\ub2e4.\n",(0,o.kt)("img",{alt:"config",src:n(1181).Z,width:"1448",height:"3100"})),(0,o.kt)("h2",{id:"add-comment-component"},"Add Comment Component"),(0,o.kt)("p",null,"utterances\uc758 script \uc124\uc815 \ubd80\ubd84\uc744 \ucc38\uace0\ud558\uc5ec \ub2e4\uc74c\uacfc \uac19\uc774 Comment Component\ub97c \uc791\uc131\ud558\uc600\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/components/Comment/index.tsx"',title:'"src/components/Comment/index.tsx"'},"import React, { useEffect, useRef } from 'react';\n\nimport { useColorMode } from '@docusaurus/theme-common';\n\nconst utteranceDomain = 'https://utteranc.es';\n\nexport function Comment() {\n  const { colorMode } = useColorMode();\n\n  const boxRef = useRef < HTMLDivElement > null;\n\n  useEffect(() => {\n    if (!boxRef.current) {\n      return;\n    }\n\n    const utteranceFrameElement =\n      boxRef.current.querySelector < HTMLIFrameElement > '.utterances-frame';\n    const theme = `github-${colorMode}`;\n\n    if (utteranceFrameElement) {\n      utteranceFrameElement.contentWindow.postMessage(\n        {\n          type: 'set-theme',\n          theme,\n        },\n        utteranceDomain,\n      );\n    } else {\n      const script = document.createElement('script');\n      script.src = `${utteranceDomain}/client.js`;\n      script.setAttribute('repo', 'gloriaJun/gloria-tilog-comment');\n      script.setAttribute('issue-term', 'title');\n      script.setAttribute('theme', theme);\n      script.crossOrigin = 'anonymous';\n      script.async = true;\n\n      boxRef.current.appendChild(script);\n    }\n  }, [colorMode]);\n\n  return <div ref={boxRef} />;\n}\n")),(0,o.kt)("h3",{id:"override-blogpostitem--docitem"},"Override BlogPostItem & DocItem"),(0,o.kt)("p",null,"Document\uc640 Blog \ud615\ud0dc\uc758 \uae00\uc5d0 \ubaa8\ub450 \ub313\uae00 \uae30\ub2a5\uc744 \ucd94\uac00\ud574\uc8fc\uae30 \uc704\ud574, ",(0,o.kt)("strong",{parentName:"p"},"DocItem"),"\uacfc ",(0,o.kt)("strong",{parentName:"p"},"BlogPostItem")," \ucef4\ud3ec\ub10c\ud2b8\ub97c swizzle \uae30\ub2a5\uc744 \uc774\uc6a9\ud558\uc5ec \uaebc\ub0b4\uc8fc\uc5c8\ub2e4."),(0,o.kt)(u.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm swizzle @docusaurus/theme-classic BlogPostItem --wrap\nnpm swizzle @docusaurus/theme-classic DocItem --wrap\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm swizzle @docusaurus/theme-classic BlogPostItem --wrap\n# couldn't auto-convert command\nnpm swizzle @docusaurus/theme-classic DocItem --wrap\n# couldn't auto-convert command\n"))),(0,o.kt)(l.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm swizzle @docusaurus/theme-classic BlogPostItem --wrap\n# couldn't auto-convert command\nnpm swizzle @docusaurus/theme-classic DocItem --wrap\n# couldn't auto-convert command\n")))),(0,o.kt)("p",null,"\ucc38\uace0\ub85c \ub098\ub294 @nx-plus\ub97c \uc774\uc6a9\ud558\uc5ec nx \ud658\uacbd\uc5d0 docusaurus\ub97c \uad6c\uc131\ud558\uc600\ub294\ub370, \uc774 \uacbd\uc6b0 swizzle \uc2e4\ud589 \uc2dc \uc798 \uc548\ub418\uc5b4 \ub2e4\uc74c\uacfc \uac19\uc774 \uc2e4\ud589\ud558\uc600\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx docusaurus swizzle @docusaurus/theme-classic BlogPostItem --wrap\nnpx docusaurus swizzle @docusaurus/theme-classic DocItem --wrap\n")),(0,o.kt)("p",null,"\uadf8 \ub4a4\uc5d0 ",(0,o.kt)("strong",{parentName:"p"},"DocItem"),"\uacfc ",(0,o.kt)("strong",{parentName:"p"},"BlogPostItem")," \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc5f4\uc5b4\uc11c \uc55e\uc5d0\uc11c \uc791\uc131\ud55c Comment \ucef4\ud3ec\ub10c\ud2b8\ub97c \ud558\ub2e8\uc5d0 \ucd94\uac00\ud574\uc900\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/theme/BlogPostItem/index.tsx"',title:'"src/theme/BlogPostItem/index.tsx"'},"import React from 'react';\n\nimport { Comment } from '@site/src/components/Comment';\nimport BlogPostItem from '@theme-original/BlogPostItem';\n\nexport default function BlogPostItemWrapper(props) {\n  return (\n    <>\n      <BlogPostItem {...props} />\n      // highlight-next-line\n      <Comment />\n    </>\n  );\n}\n")))}b.isMDXComponent=!0},1181:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/utterances-config-3b5205d25e0a9db6aa5e4bf61a012687.jpeg"},8323:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/utterances-install-0fa0b51455da44b2c550d22ad8db171b.jpeg"}}]);
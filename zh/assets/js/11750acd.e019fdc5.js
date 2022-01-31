"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6213],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(m,o(o({ref:t},h),{},{components:n})):r.createElement(m,o({ref:t},h))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4028:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return h},default:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={sidebar_position:1},s="12.1 Chia RPC API",l={unversionedId:"12rpcs/rpcs",id:"12rpcs/rpcs",isDocsHomePage:!1,title:"12.1 Chia RPC API",description:"The Chia node and services come with a JSON RPC API server that allows you to access information and control the services. These are accessible via HTTP, WebSockets, or via client SDKs. The ports can be configured in /.chia/mainnet/config/config.yaml. The RPC ports should not be exposed to the internet. TLS certificates are used to secure the communication. These are accessible via HTTP, WebSockets, or via client SDKs. The ports can be configured in /.chia/mainnet/config/config.yaml. The RPC ports should not be exposed to the internet. TLS certificates are used to secure the communication.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/12rpcs/rpcs.md",sourceDirName:"12rpcs",slug:"/12rpcs/rpcs",permalink:"/zh/docs/12rpcs/rpcs",editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/12rpcs/rpcs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"11.2  Chia Pool Protocol 1.0 Specification",permalink:"/zh/docs/11pooling/specification"},next:{title:"12.2 Full Node API",permalink:"/zh/docs/12rpcs/full_node_api"}},h=[{value:"Default Ports:",id:"default-ports",children:[]},{value:"HTTP/JSON",id:"httpjson",children:[]},{value:"WebSockets",id:"websockets",children:[]},{value:"Python",id:"python",children:[]},{value:"Javascript",id:"javascript",children:[]},{value:"Services",id:"services",children:[]}],u={toc:h};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"121-chia-rpc-api"},"12.1 Chia RPC API"),(0,a.kt)("p",null,"The Chia node and services come with a JSON RPC API server that allows you to access information and control the services. These are accessible via HTTP, WebSockets, or via client SDKs. The ports can be configured in ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.chia/mainnet/config/config.yaml"),". The RPC ports should not be exposed to the internet. TLS certificates are used to secure the communication. These are accessible via HTTP, WebSockets, or via client SDKs. The ports can be configured in ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.chia/mainnet/config/config.yaml"),". The RPC ports should not be exposed to the internet. TLS certificates are used to secure the communication."),(0,a.kt)("h3",{id:"default-ports"},"Default Ports:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Daemon: 55400"),(0,a.kt)("li",{parentName:"ul"},"Full Node: 8555"),(0,a.kt)("li",{parentName:"ul"},"Farmer: 8559"),(0,a.kt)("li",{parentName:"ul"},"Harvester: 8560"),(0,a.kt)("li",{parentName:"ul"},"Wallet: 9256")),(0,a.kt)("h3",{id:"httpjson"},"HTTP/JSON"),(0,a.kt)("p",null,"The certificates must be used when calling the RPCs from the command line, make sure to use the correct certificates for the services you are calling. All endpoints are made with POST with JSON data. The response is a JSON dictionary with a success field, which can be true or false. All endpoints are made with POST with JSON data. The response is a JSON dictionary with a success field, which can be true or false."),(0,a.kt)("h3",{id:"websockets"},"WebSockets"),(0,a.kt)("p",null,"If you are using the Websockets API, you can go directly through the daemon, which routes requests. If you are using the Websockets API, you can go directly through the daemon, which routes requests. Each WebSocket message contains the following fields: TODO: Explain how to call a Websocket RPC, examples can be found here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Chia-Mine/chia-agent"},"https://github.com/Chia-Mine/chia-agent"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "command": "get_blockchain_state",\n    "ack": false,\n    "data": {},\n    "request_id": "123456",\n    "destination": "wallet",\n    "origin": "ui",\n}\n')),(0,a.kt)("h3",{id:"python"},"Python"),(0,a.kt)("p",null,"Most of the rpc methods are accessible through the different client objects in ",(0,a.kt)("inlineCode",{parentName:"p"},"chia-blockchain/chia/rpc"),". For examples of usage, see the command line implementation (chia wallet, chia show, etc). For examples of usage, see the command line implementation (chia wallet, chia show, etc)."),(0,a.kt)("h3",{id:"javascript"},"Javascript"),(0,a.kt)("p",null,"A javascript client can be found here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Chia-Mine/chia-agent"},"https://github.com/Chia-Mine/chia-agent"),". There is also another client here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/freddiecoleman/chia-client"},"https://github.com/freddiecoleman/chia-client"),". There is also another client here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/freddiecoleman/chia-client"},"https://github.com/freddiecoleman/chia-client"),"."),(0,a.kt)("h2",{id:"services"},"Services"),(0,a.kt)("p",null,"The service RPC APIs are documented in the following sections: TODO: add links here and create the other sections"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Shared: RPCs that all services share"),(0,a.kt)("li",{parentName:"ul"},"Full Node"),(0,a.kt)("li",{parentName:"ul"},"Farmer"),(0,a.kt)("li",{parentName:"ul"},"Harvester"),(0,a.kt)("li",{parentName:"ul"},"Timelord"),(0,a.kt)("li",{parentName:"ul"},"Wallet (This API is still a WIP and likely to change soon)")))}p.isMDXComponent=!0}}]);
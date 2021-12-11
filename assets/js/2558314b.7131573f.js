"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[5749],{3905:function(e,t,o){o.d(t,{Zo:function(){return h},kt:function(){return d}});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(o),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||n;return o?r.createElement(m,i(i({ref:t},h),{},{components:o})):r.createElement(m,i({ref:t},h))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},3486:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return u}});var r=o(7462),a=o(3366),n=(o(7294),o(3905)),i=["components"],s={sidebar_position:1},l="2.1 Peer to Peer system",c={unversionedId:"02architecture/p2p-system",id:"02architecture/p2p-system",isDocsHomePage:!1,title:"2.1 Peer to Peer system",description:"chia-architecture",source:"@site/docs/02architecture/p2p-system.md",sourceDirName:"02architecture",slug:"/02architecture/p2p-system",permalink:"/docs/02architecture/p2p-system",editUrl:"https://github.com/Chia-Network/chia-docs/docs/02architecture/p2p-system.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"1.3 Chia System Overview",permalink:"/docs/01introduction/chia-system-overview"},next:{title:"3.1 Chia Consensus Introduction",permalink:"/docs/03consensus/consensus_intro"}},h=[{value:"Full Nodes",id:"full-nodes",children:[]},{value:"Farmers",id:"farmers",children:[]},{value:"Harvesters",id:"harvesters",children:[]},{value:"Timelords",id:"timelords",children:[]},{value:"Pools",id:"pools",children:[]},{value:"Wallets",id:"wallets",children:[]}],p={toc:h};function u(e){var t=e.components,s=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"21-peer-to-peer-system"},"2.1 Peer to Peer system"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"chia-architecture",src:o(5292).Z})),(0,n.kt)("p",null,"The above diagram shows Chia's network architecture. A single machine can run more than one of these processes. In fact, the default configuration is to run four processes together: Farmer, Full Node, Harvester, and Wallet. Many farmers will also choose to run the Electron GUI and Pool processes. Additionally, a few farmers, especially those with multi-PiB farms, will choose to run a Timelord."),(0,n.kt)("p",null,"Let's discuss each of these processes, and the protocols that connect them, separately."),(0,n.kt)("h2",{id:"full-nodes"},"Full Nodes"),(0,n.kt)("p",null,"The core of Chia's peer-to-peer system is composed of full nodes. Full nodes have several responsibilities:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Maintain a copy of the blockchain."),(0,n.kt)("li",{parentName:"ol"},"Validate the blockchain."),(0,n.kt)("li",{parentName:"ol"},"Propagate new blocks, transactions, and proofs through the network, using the peer protocol."),(0,n.kt)("li",{parentName:"ol"},"(Optional) Serve light clients (wallets) through the wallet protocol."),(0,n.kt)("li",{parentName:"ol"},"(Optional) Communicate with farmers."),(0,n.kt)("li",{parentName:"ol"},"(Optional) Communicate with timelords.")),(0,n.kt)("p",null,"Usually, farmers run a full node process alongside their farmer process. Full nodes earn no rewards or fees, but they are important to maintain the consensus rules and the security of the system. Running a full node allows a user to be confident about the full state of the blockchain, and avoid trusting others."),(0,n.kt)("p",null,"Full nodes are always connected to a random set of full nodes in the network. Full nodes broadcast their own information (IP address and port) to their peers periodically, so that the entire network is aware that they are still running. Full nodes also broadcast all new blocks and transactions to their peers, allowing all nodes in the network to keep a complete copy of the blockchain."),(0,n.kt)("h2",{id:"farmers"},"Farmers"),(0,n.kt)("p",null,"Chia's farmers are analogous to Bitcoin's miners. They earn block rewards and fees by finding valid proofs of space inside their stored plots. The farmer processes don't maintain a copy of the blockchain, but they trust a full node to provide updates. The full node and farmer processes communicate with each other using the farmer protocol."),(0,n.kt)("p",null,"Farmers communicate with harvesters (individual machines, including the farmer machine, that actually store the plots) through the harvester protocol."),(0,n.kt)("p",null,"Farmers operate by waiting for updates from a full node, which gives them new signage points (equivalent to a lottery's winning numbers) approximately every nine seconds. Farmers then send the signage point to each harvester, to check whether any winning proofs of space exist. If the harvester finds any valid proofs, it sends them to the farmer, which separates them into two categories:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Full proofs must match or surpass the quality required by the network's difficulty level. These proofs are sent to the full node, which then creates a new block."),(0,n.kt)("li",{parentName:"ul"},"Partial proofs are used by pools to approximate a node's total storage.")),(0,n.kt)("p",null,"Farmers also have a private key, which is used for both signing blocks when a winning proof is found, as well as for signing partial proofs, which are then sent to pools."),(0,n.kt)("h2",{id:"harvesters"},"Harvesters"),(0,n.kt)("p",null,"Harvesters are individual machines controlled by a farmer. In a large farming operation, a farmer may be connected to many harvesters."),(0,n.kt)("p",null,"Harvesters control the actual plot files by retrieving qualities or proofs from disk. The minimum plot size (and by far the most common) is k32, which corresponds to around 100 GiB. With each increment of a k-value, the plot size roughly doubles, so a k33 plot is around 200 GiB, k34 is around 400 GiB, etc."),(0,n.kt)("p",null,"The difficulty level automatically adjusts every 4608 blocks to target one proof of space -- across the entire network -- for every two signage points. This is the targeted average value -- there can also be zero or multiple proofs per signage point. This leads to a difficulty adjustment approximately every 24 hours."),(0,n.kt)("p",null,"Given a plot, the harvester must perform two tasks to find a valid proof:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Fetch the initial quality -- this requires around seven random disk seeks, or 70 milliseconds on a slow HDD."),(0,n.kt)("li",{parentName:"ol"},"(Only performed if the initial quality is sufficiently high) Fetch the full proof -- this requires around 64 disk seeks, or 640 milliseconds on a slow HDD.")),(0,n.kt)("p",null,"For most challenges, the quality (step 1) will be very low, so fetching the entire proof (step 2) will not be necessary. A node has 28 seconds to return a proof, so disk I/O will not be a limiting factor, even when proofs are stored on slow HDDs."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"NOTE: Tape drives are too slow for farming. The protocol was designed to support hard disks, but nothing slower. It is possible to use tape for long-term plot storage, only transferring the plots to disks for occasional farming, but this is likely a very rare use case.")),(0,n.kt)("p",null,"Finally, harvesters also maintain a private key for each plot. The blocks are signed with these keys, which is an important concept in Chia. It means that even when a farmer is a member of a pool, the farmer still controls the contents of a block. This is quite different from other blockchains' pooling protocols, where the pool operators are the ones signing the blocks."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The harvester algorithm is discussed in greater detail in ",(0,n.kt)("a",{parentName:"p",href:"/docs/03consensus/harvester_algorith",title:"Section 3.6: Harvester Algorithm"},"Section 3.6"),".")),(0,n.kt)("h2",{id:"timelords"},"Timelords"),(0,n.kt)("p",null,"Timelords support the network by creating sequential proofs of time (using a ",(0,n.kt)("a",{parentName:"p",href:"/docs/03consensus/vdfs",title:"Section 3.3: VDFs"},"Verifiable Delay Function"),') and broadcasting them approximately every nine seconds. This provides "deterministic randomness", which is used to decide the winning proofs of space.'),(0,n.kt)("p",null,"Since this computation is sequential, very little energy is consumed, as opposed to proof-of-work systems, where computation is parallelizable. For example, if 100 timelords are doing the same computation on a proof of time, they will all create the exact same output."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The timelord algorithm is explained in ",(0,n.kt)("a",{parentName:"p",href:"/docs/03consensus/timelords",title:"Section 3.13: Timelord Algorithm"},"Section 3.13"),".")),(0,n.kt)("p",null,"A timelord is required to connect to exactly one full node, typically on the same machine. This connection is verified with a certificate. This 1:1 architecture has a large security benefit: it keeps the timelord sandboxed in its own private network. That way, the full node protocol is the only protocol that requires total security. If more than one full node could connect to the same timelord, it would add a potential attack vector to the network."),(0,n.kt)("p",null,"Timelords do not directly earn rewards. Furthermore, only the fastest timelord on the network will broadcast proofs at any given time. Therefore, only one timelord is required to keep the network running, and most farmers will not feel compelled to run one. However, farmers with multi-PiB farms may want to run a timelord, both for redundancy and for protection against temporary local latency issues."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"NOTE: Chia network is currently ",(0,n.kt)("a",{parentName:"p",href:"https://www.businesswire.com/news/home/20211013005324/en/Chia-Partners-With-Supranational-to-Create-Industry-Leading-Proof-of-Space-Time-Security"},"developing an ASIC timelord"),". This will add redundancy to the network, while reducing the possibility of an attacker creating their own timelord that is significantly faster than anyone else's.")),(0,n.kt)("p",null,"If someone controls the fastest timelord in the world, it doesn't give them much of an advantage at winning rewards. However, they could potentially orphan or censor other farmers, depending on how much faster their timelord is."),(0,n.kt)("p",null,"Furthermore, an attacker with a significantly faster timelord than anyone else could potentially run a 51% attack against the network with less than 51% of the space. For security purposes, it is very important to maintain open designs of VDF hardware."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You can learn about potential attacks against Chia's network in ",(0,n.kt)("a",{parentName:"p",href:"/docs/03consensus/attacks_and_countermeasures",title:"Section 3.14: Attacks and Countermeasures"},"Section 3.14"),".")),(0,n.kt)("h2",{id:"pools"},"Pools"),(0,n.kt)("p",null,"Pools allow farmers to smooth out their rewards by earning based on proof of space partials, as opposed to winning blocks."),(0,n.kt)("p",null,"Pools require the use of portable plots. These plots are tied to a plot NFT that the farmer must create. This NFT sits on Chia's blockchain, and it allows users to switch between pools."),(0,n.kt)("p",null,"Pools create and spend ",(0,n.kt)("strong",{parentName:"p"},"coinbase transactions"),", but in Chia's pool protocol they do not actually choose the contents of blocks. This gives more power to farmers and thus decreases the influence of centralized pools."),(0,n.kt)("p",null,"Farmers periodically send partials, which contain a proof of space and a signature, to pools. The pools use these partial proofs to determine how much space the farmers have dedicated, which in turn determines the farmer's portion of the reward when the pool wins a block."),(0,n.kt)("p",null,"When a farmer who is a member of a pool wins a block, 7/8 of the reward goes to the pool, which is later distributed to the participants. The farmer keeps the other 1/8 of the reward. This was an intentional design decision. If a farmer didn't receive a direct reward for creating a block, the operator of a competing pool might have had a financial incentive to join a pool (that they didn't run) with a large number of plots, and neglect to create a block when they found a valid proof, thereby spoiling the competing pool."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more info, see our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/wiki/Pooling-FAQ",title:"Chia Pooling FAQ"},"pooling FAQ"),", as well as this site's ",(0,n.kt)("a",{parentName:"p",href:"/docs/11pooling/pooling"},"Pool Protocol")," page.")),(0,n.kt)("h2",{id:"wallets"},"Wallets"),(0,n.kt)("p",null,"Wallets can communicate with full nodes through the wallet protocol. This is similar to Bitcoin's SPV protocol: it allows verification of transactions and block weight, without the bandwidth and CPU requirements of full nodes."),(0,n.kt)("p",null,"Wallet nodes are similar to full nodes, in that they are servers which communicate to other peers in the network. A common use case is to run a wallet locally along with a full node, where the wallet only connects to the full node. Wallets download ",(0,n.kt)("a",{parentName:"p",href:"/docs/03consensus/light_clients"},"weight proofs")," from nodes to quickly validate which blockchain is the longest. They then ask full nodes to scan the blockchain for their desired transactions. The wallet is also responsible for managing private keys, as well as generating, storing and sending transactions. The wallet exposes an RPC HTTPS websocket JSON API, which user interfaces can use to execute commands."))}u.isMDXComponent=!0},5292:function(e,t,o){t.Z=o.p+"assets/images/chia-network-architecture-8069f322a3b7e4ff7f79f137ea76b48d.png"}}]);
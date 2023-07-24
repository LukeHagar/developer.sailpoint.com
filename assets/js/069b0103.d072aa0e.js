"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[35548],{5062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const o={id:"saas-connectivity",title:"SaaS Connectivity",pagination_label:"SaaS Connectivity",sidebar_label:"SaaS Connectivity",sidebar_position:4,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors"],description:"SaaS Connectivity is a cloud based connector runtime that makes developing and deploying web service connectors easy.",slug:"/docs/saas-connectivity",tags:["Connectivity"]},c=void 0,s={unversionedId:"docs/identity-now/saas-connectivity/saas-connectivity",id:"docs/identity-now/saas-connectivity/saas-connectivity",title:"SaaS Connectivity",description:"SaaS Connectivity is a cloud based connector runtime that makes developing and deploying web service connectors easy.",source:"@site/products/idn/docs/identity-now/saas-connectivity/index.md",sourceDirName:"docs/identity-now/saas-connectivity",slug:"/docs/saas-connectivity",permalink:"/idn/docs/saas-connectivity",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/index.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"}],version:"current",lastUpdatedBy:"Colin McKibben",lastUpdatedAt:1690207305,formattedLastUpdatedAt:"Jul 24, 2023",sidebarPosition:4,frontMatter:{id:"saas-connectivity",title:"SaaS Connectivity",pagination_label:"SaaS Connectivity",sidebar_label:"SaaS Connectivity",sidebar_position:4,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors"],description:"SaaS Connectivity is a cloud based connector runtime that makes developing and deploying web service connectors easy.",slug:"/docs/saas-connectivity",tags:["Connectivity"]},sidebar:"idnDocs",previous:{title:"SaaS Configuration",permalink:"/idn/docs/saas-configuration"},next:{title:"Prerequisites",permalink:"/idn/docs/saas-connectivity/prerequisites"}},r={},d=[{value:"What Are Connectors",id:"what-are-connectors",level:2},{value:"Why We Are Introducing SaaS Connectivity",id:"why-we-are-introducing-saas-connectivity",level:2},{value:"Architecture of SaaS Connectivity",id:"architecture-of-saas-connectivity",level:2},{value:"Connectivity Encryption",id:"connectivity-encryption",level:2}],l={toc:d};function y(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"SaaS Connectivity is a cloud based connector runtime that makes developing and deploying web service connectors easier than Connector 1.0 does. However, because the cloud hosts SaaS Connectivity, not a Virtual Appliance (VA), SaaS Connectivity is limited in the types of applications it can connect to. For example, you cannot use SaaS Connectivity to connect to on-prem services that can only communicate within an intranet (no public internet access). This excludes JDBC and Mainframe applications, to name a few."),(0,a.kt)("h2",{id:"what-are-connectors"},"What Are Connectors"),(0,a.kt)("p",null,"Connectors are the bridges between the SailPoint Identity Now (IDN) SaaS platform and the source systems that IDN needs to communicate with and aggregate data from. An example of a source system IDN may need to communicate with would be an Oracle HR system or GitHub. In these cases, IDN synchronizes data between systems to ensure account entitlements and state are correct through the organization."),(0,a.kt)("h2",{id:"why-we-are-introducing-saas-connectivity"},"Why We Are Introducing SaaS Connectivity"),(0,a.kt)("p",null,"The primary driver for indroducing the SaaS Connectivity framework is to allow a way to connect to other cloud based sources in a truly SaaS architecture, without the need to rely on a VA. There are also other benefits that come with the SaaS Connectivity framework:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ability to develop, debug and test custom connectors locally without any dependencies on IdentityNow"),(0,a.kt)("li",{parentName:"ul"},"Features to customize the user interface when configuring the connector that are specific to the source"),(0,a.kt)("li",{parentName:"ul"},"Support for more modern languages and frameworks")),(0,a.kt)("h2",{id:"architecture-of-saas-connectivity"},"Architecture of SaaS Connectivity"),(0,a.kt)("p",null,"VA connectors always communicate with external sources through the Virtual Appliance (VA) as seen in the diagram below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Old Connectivity",src:n(50739).Z,width:"776",height:"589"})),(0,a.kt)("p",null,"The new Cloud connectors work differently - they run on the IDN platform instead:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"New Connectivity",src:n(5634).Z,width:"535",height:"465"})),(0,a.kt)("p",null,"With both SaaS connectivity and traditional VA connectivity in place, you can have the best of both worlds. Below is a new diagram showing both of them working together to leverage both on-prem and cloud based sources."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SaaS Connectivity and On Prem",src:n(85512).Z,width:"924",height:"604"})),(0,a.kt)("h2",{id:"connectivity-encryption"},"Connectivity Encryption"),(0,a.kt)("p",null,"Any direct connectors that specify a virtual appliance (VA) use ",(0,a.kt)("a",{parentName:"p",href:"https://community.sailpoint.com/t5/Lighthouse/Protecting-Sensitive-Data-with-Zero-Knowledge-Encryption/ta-p/79657?attachment-id=452"},"Zero Knowledge Encryption")," schemes with an RSA 2048-bit asymmetric key pair: there is a private key on the VA for decryption and a public key in the cloud (as part of the VA cluster) for encryption."),(0,a.kt)("p",null,"SaaS connectors can't operate the same way because they don't communicate through VA clusters. Despite this, SaaS connectors can still leverage the asymmetric keypair scheme - the keystore simply resides in the cloud instead of on the VA. This keystore is not accessible by any API or source code, and there is regular rotation of those keypairs through SailPoint's DevOps-owned processes to ensure that security is maintained to SailPoint standards. Whenever you are storing secret data, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"secret")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"secrettextarea")," field types."))}y.isMDXComponent=!0},5634:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/new_connectivity_diagram-c5c6f05dd0bed0859d3622b78c34def3.png"},85512:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/new_connectivity_diagram_both-03aa9a5b3e0a4431e14df078966fa631.png"},50739:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/old_connectivity_diagram-1497d1edc66afb93e6d4f7ad8453b5aa.png"}}]);
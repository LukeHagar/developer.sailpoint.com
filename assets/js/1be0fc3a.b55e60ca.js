"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[57835],{67306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={id:"lookup",title:"Lookup",pagination_label:"Lookup",sidebar_label:"Lookup",sidebar_class_name:"lookup",keywords:["transforms","operations","lookup"],description:"Look up and return a key's matching value.",slug:"/docs/transforms/operations/lookup",tags:["Transforms","Transform Operations"]},s=void 0,i={unversionedId:"docs/identity-now/transforms/operations/lookup",id:"docs/identity-now/transforms/operations/lookup",title:"Lookup",description:"Look up and return a key's matching value.",source:"@site/products/idn/docs/identity-now/transforms/operations/lookup.md",sourceDirName:"docs/identity-now/transforms/operations",slug:"/docs/transforms/operations/lookup",permalink:"/idn/docs/transforms/operations/lookup",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/operations/lookup.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Transform Operations",permalink:"/idn/tags/transform-operations"}],version:"current",lastUpdatedBy:"Colin McKibben",lastUpdatedAt:1690207305,formattedLastUpdatedAt:"Jul 24, 2023",frontMatter:{id:"lookup",title:"Lookup",pagination_label:"Lookup",sidebar_label:"Lookup",sidebar_class_name:"lookup",keywords:["transforms","operations","lookup"],description:"Look up and return a key's matching value.",slug:"/docs/transforms/operations/lookup",tags:["Transforms","Transform Operations"]},sidebar:"idnDocs",previous:{title:"Left Pad",permalink:"/idn/docs/transforms/operations/left-pad"},next:{title:"Lower",permalink:"/idn/docs/transforms/operations/lower"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Use the lookup transform to take in an incoming string value and compare it to a list of key-value pairs to determine which output to return. If the incoming data matches a key, the transform returns the corresponding value. If the incoming key does not match a key, the transform returns the table's optional default value."),(0,o.kt)("admonition",{title:"Other Considerations",type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"If the input does not match any key value within the table and no default value is provided, the transform will return an error."))),(0,o.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,o.kt)("p",null,"In addition to the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," attributes, the structure of a lookup transform involves a ",(0,o.kt)("inlineCode",{parentName:"p"},"table")," entry of key-value pairs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "table": {\n      "USA": "Americas",\n      "FRA": "EMEA",\n      "AUS": "APAC",\n      "default": "Unknown Region"\n    }\n  },\n  "type": "lookup",\n  "name": "Lookup Transform"\n}\n')),(0,o.kt)("h2",{id:"attributes"},"Attributes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Required Attributes")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"type")," - This must always be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"lookup"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"table")," - This is a JSON object of key-value pairs. The key is the string the transform tries to match to the input, and the value is the output string the transform returns if it matches the key."),(0,o.kt)("p",{parentName:"li"},":::tip A default key must be specified. Otherwise, an error will be returned if there are no matching values in your table. :::")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.")))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,'This transform tries to map a telephone area code to a city in Texas. If there is no area code in the four provided values, the transform will return the default value of "Unknown Area."'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "table": {\n      "512": "Austin",\n      "281": "Houston",\n      "214": "Dallas",\n      "210": "San Antonio",\n      "default": "Unknown Area"\n    }\n  },\n  "type": "lookup",\n  "name": "Lookup Transform"\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\xa0"),(0,o.kt)("p",null,"This transform extends the previous one to show how multiple key values can be mapped to the same output value. However, duplicate key values are not allowed, so this will throw an error."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "table": {\n      "512": "Austin",\n      "281": "Houston",\n      "713": "Houston",\n      "832": "Houston",\n      "214": "Dallas",\n      "210": "San Antonio"\n    }\n  },\n  "type": "lookup",\n  "name": "Test Lookup Transform"\n}\n')))}m.isMDXComponent=!0}}]);
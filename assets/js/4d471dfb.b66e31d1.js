"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[20553],{76020:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var a=l(87462),n=(l(67294),l(3905));const i={id:"buildmap-rule",title:"BuildMap Rule",pagination_label:"BuildMap Rule",sidebar_label:"BuildMap Rule",sidebar_class_name:"buildMapRule",keywords:["cloud","rules"],description:"This rule manipulates raw input data provided by the rows and columns in a file and builds a map from the incoming data.",slug:"/docs/rules/cloud-rules/buildmap-rule",tags:["Rules"]},r="BuildMap Rule",u={unversionedId:"docs/identity-now/rules/cloud-rules/buildmap-rule",id:"docs/identity-now/rules/cloud-rules/buildmap-rule",title:"BuildMap Rule",description:"This rule manipulates raw input data provided by the rows and columns in a file and builds a map from the incoming data.",source:"@site/products/idn/docs/identity-now/rules/cloud-rules/build_map_rule.md",sourceDirName:"docs/identity-now/rules/cloud-rules",slug:"/docs/rules/cloud-rules/buildmap-rule",permalink:"/idn/docs/rules/cloud-rules/buildmap-rule",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/rules/cloud-rules/build_map_rule.md",tags:[{label:"Rules",permalink:"/idn/tags/rules"}],version:"current",lastUpdatedBy:"Colin McKibben",lastUpdatedAt:1690207305,formattedLastUpdatedAt:"Jul 24, 2023",frontMatter:{id:"buildmap-rule",title:"BuildMap Rule",pagination_label:"BuildMap Rule",sidebar_label:"BuildMap Rule",sidebar_class_name:"buildMapRule",keywords:["cloud","rules"],description:"This rule manipulates raw input data provided by the rows and columns in a file and builds a map from the incoming data.",slug:"/docs/rules/cloud-rules/buildmap-rule",tags:["Rules"]},sidebar:"idnDocs",previous:{title:"Before Provisioning Rule",permalink:"/idn/docs/rules/cloud-rules/before-provisioning-rule"},next:{title:"Correlation Rule",permalink:"/idn/docs/rules/cloud-rules/correlation-rule"}},o={},s=[{value:"Overview",id:"overview",level:2},{value:"Execution",id:"execution",level:2},{value:"Input",id:"input",level:2},{value:"Template",id:"template",level:2},{value:"Example",id:"example",level:2}],d={toc:s};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"buildmap-rule"},"BuildMap Rule"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"This rule manipulates raw input data provided by the rows and columns in a file and builds a map from the incoming data."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This rule runs in the cloud, but it's really a connector rule because it executes against the DelimitedFileConnector.")),(0,n.kt)("h2",{id:"execution"},"Execution"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cloud Execution")," - This rule executes in the IdentityNow cloud and it has read-only access to IdentityNow data models, but it doesn't have access to on-premise sources or connectors."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Logging")," - Logging statements are currently only visible to SailPoint personnel.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Rule Execution",src:l(62430).Z,width:"1594",height:"635"})),(0,n.kt)("h2",{id:"input"},"Input"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"col"),(0,n.kt)("td",{parentName:"tr",align:null},"java.util.List"),(0,n.kt)("td",{parentName:"tr",align:null},"Ordered list of the column names from the file\u2019s header records or specified columns list.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"record"),(0,n.kt)("td",{parentName:"tr",align:null},"java.util.List"),(0,n.kt)("td",{parentName:"tr",align:null},"Ordered list of the values for the current record, parsed based on the specified delimiter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"application"),(0,n.kt)("td",{parentName:"tr",align:null},"System.Collections.Hashtable"),(0,n.kt)("td",{parentName:"tr",align:null},"Map of the application configuration.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"schema"),(0,n.kt)("td",{parentName:"tr",align:null},"sailpoint.object.Schema"),(0,n.kt)("td",{parentName:"tr",align:null},"Reference to the schema object for the delimited file source being read.")))),(0,n.kt)("h2",{id:"template"},"Template"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="BuildMap">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\n  // Add your logic here.\n\n  ]]></Source>\n</Rule>\n')),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="BuildMap">\n  <Description>This basic rule performs the combines 2 values into a single attribute.</Description>\n  <Source><![CDATA[\n\n     import sailpoint.connector.DelimitedFileConnector;\n\n     Map map = DelimitedFileConnector.defaultBuildMap( cols, record );\n     String access = (String) map.get( "access" );\n     String permission = (String) map.get( "permission" );\n\n     if ( access != null && permission != null ) {\n          map.remove("access");\n          map.remove("permission");\n          map.put("access", access + " - " + permission);\n     }\n     return map;\n\n  ]]></Source>\n</Rule>\n')))}p.isMDXComponent=!0},62430:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/cloud_execution-7029b7fdcb50a6ea04ef055f18117067.png"}}]);
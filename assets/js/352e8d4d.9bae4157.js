"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[38954],{90113:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>f,frontMatter:()=>m,metadata:()=>b,toc:()=>h});var i=a(87462),r=(a(67294),a(3905)),s=a(26389),o=a(94891),l=a(75190),d=a(47507),n=a(24310),p=a(63303),c=(a(75035),a(85162));const m={id:"get-user-role",sidebar_label:"Find user role pairing by id",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getUserRole",description:"Info for a specific user role pairing",tags:["User Roles"],parameters:[{name:"id",in:"path",description:"ID of the object to retrieve or update",required:!0,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"}],responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",properties:{user_role:{type:"object",properties:{id:{description:"the id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"the uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},user_id:{description:"the user id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},role_id:{description:"the role id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"}}}}}}}},400:{description:"Bad Request - unable to complete.",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{error:{example:"Invalid JSON syntax. Please check your syntax and try again."}}},{type:"object",properties:{error:{example:"The <object> failed to create/update"},errors:{example:{attribute:"can't be blank"}}}}]}}}},500:{description:"Internal Server Error - returned on unhandled exceptions.",content:{"application/json":{schema:{type:"object",properties:{error:{description:"A message describing the error",example:"Sorry something went wrong"}}}}}}},method:"get",path:"/user_roles/{id}",info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Find user role pairing by id",description:{content:"Info for a specific user role pairing",type:"text/plain"},url:{path:["user_roles",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of the object to retrieve or update",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find user role pairing by id' (get-user-role)"},u=void 0,b={unversionedId:"api/get-user-role",id:"api/get-user-role",title:"get-user-role",description:"Find user role pairing by id",source:"@site/products/nerm/api/get-user-role.api.mdx",sourceDirName:"api",slug:"/api/get-user-role",permalink:"/nerm/api/get-user-role",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find user role pairing by id' (get-user-role)",tags:[],version:"current",lastUpdatedBy:"Colin McKibben",lastUpdatedAt:1690207305,formattedLastUpdatedAt:"Jul 24, 2023",frontMatter:{id:"get-user-role",sidebar_label:"Find user role pairing by id",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getUserRole",description:"Info for a specific user role pairing",tags:["User Roles"],parameters:[{name:"id",in:"path",description:"ID of the object to retrieve or update",required:!0,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"}],responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",properties:{user_role:{type:"object",properties:{id:{description:"the id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"the uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},user_id:{description:"the user id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},role_id:{description:"the role id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"}}}}}}}},400:{description:"Bad Request - unable to complete.",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{error:{example:"Invalid JSON syntax. Please check your syntax and try again."}}},{type:"object",properties:{error:{example:"The <object> failed to create/update"},errors:{example:{attribute:"can't be blank"}}}}]}}}},500:{description:"Internal Server Error - returned on unhandled exceptions.",content:{"application/json":{schema:{type:"object",properties:{error:{description:"A message describing the error",example:"Sorry something went wrong"}}}}}}},method:"get",path:"/user_roles/{id}",info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Find user role pairing by id",description:{content:"Info for a specific user role pairing",type:"text/plain"},url:{path:["user_roles",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of the object to retrieve or update",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find user role pairing by id' (get-user-role)"},sidebar:"nermOpenApiSidebar",previous:{title:"Update multiple user role pairings",permalink:"/nerm/api/patch-user-roles"},next:{title:"Update a user role pairing by id",permalink:"/nerm/api/patch-user-role"}},y={},h=[{value:"Find user role pairing by id",id:"find-user-role-pairing-by-id",level:2}],g={toc:h};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"find-user-role-pairing-by-id"},"Find user role pairing by id"),(0,r.kt)("p",null,"Info for a specific user role pairing"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"ID of the object to retrieve or update",required:!0,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Expected response to a valid request")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"user_role"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(n.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:"the id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(n.Z,{collapsible:!1,name:"uid",required:!1,deprecated:void 0,schemaDescription:"the uid",schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(n.Z,{collapsible:!1,name:"user_id",required:!1,deprecated:void 0,schemaDescription:"the user id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(n.Z,{collapsible:!1,name:"role_id",required:!1,deprecated:void 0,schemaDescription:"the role id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(d.Z,{responseExample:'{\n  "user_role": {\n    "id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n    "uid": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n    "user_id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n    "role_id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Bad Request - unable to complete.")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--info"},"oneOf"),(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,r.kt)(n.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,r.kt)(c.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,r.kt)(n.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(n.Z,{collapsible:!1,name:"errors",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(d.Z,{responseExample:'{\n  "error": "Invalid JSON syntax. Please check your syntax and try again."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(n.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:"A message describing the error",schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(d.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);
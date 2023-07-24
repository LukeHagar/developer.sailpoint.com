"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[76045],{33952:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>b,toc:()=>f});var i=a(87462),r=(a(67294),a(3905)),o=a(26389),l=a(94891),p=a(75190),s=a(47507),n=a(24310),d=a(63303),m=(a(75035),a(85162));const c={id:"post-profile-upload",sidebar_label:"Uploads a new attachment attribute value to a profile",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"postProfileUpload",description:"Uploads a new attachment attribute value to a profile",tags:["Profiles"],parameters:[{name:"id",in:"path",description:"ID of the object to retrieve or update",required:!0,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},{name:"attribute_id",in:"path",description:"The id of the attachment attribute",required:!0,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"}],requestBody:{required:!0,content:{"multipart/form-data":{schema:{type:"object",properties:{file:{type:"string",format:"binary"}}}}}},responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",properties:{url:{description:"The url",type:"string",format:"url",readOnly:!0,example:"http://www.example.com"}}}}}},400:{description:"Bad Request - unable to complete.",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{error:{example:"Invalid JSON syntax. Please check your syntax and try again."}}},{type:"object",properties:{error:{example:"The <object> failed to create/update"},errors:{example:{attribute:"can't be blank"}}}}]}}}},500:{description:"Internal Server Error - returned on unhandled exceptions.",content:{"application/json":{schema:{type:"object",properties:{error:{description:"A message describing the error",example:"Sorry something went wrong"}}}}}}},method:"post",path:"/profiles/{id}/upload/{attribute_id}",info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Uploads a new attachment attribute value to a profile",description:{content:"Uploads a new attachment attribute value to a profile",type:"text/plain"},url:{path:["profiles",":id","upload",":attribute_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of the object to retrieve or update",type:"text/plain"},type:"any",value:"",key:"id"},{disabled:!1,description:{content:"(Required) The id of the attachment attribute",type:"text/plain"},type:"any",value:"",key:"attribute_id"}]},header:[{key:"Content-Type",value:"multipart/form-data"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"formdata",formdata:[]}}},sidebar_class_name:"post api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Uploads a new attachment attribute value to a profile' (post-profile-upload)"},u=void 0,b={unversionedId:"api/post-profile-upload",id:"api/post-profile-upload",title:"post-profile-upload",description:"Uploads a new attachment attribute value to a profile",source:"@site/products/nerm/api/post-profile-upload.api.mdx",sourceDirName:"api",slug:"/api/post-profile-upload",permalink:"/nerm/api/post-profile-upload",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Uploads a new attachment attribute value to a profile' (post-profile-upload)",tags:[],version:"current",lastUpdatedBy:"Colin McKibben",lastUpdatedAt:1690207305,formattedLastUpdatedAt:"Jul 24, 2023",frontMatter:{id:"post-profile-upload",sidebar_label:"Uploads a new attachment attribute value to a profile",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"postProfileUpload",description:"Uploads a new attachment attribute value to a profile",tags:["Profiles"],parameters:[{name:"id",in:"path",description:"ID of the object to retrieve or update",required:!0,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},{name:"attribute_id",in:"path",description:"The id of the attachment attribute",required:!0,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"}],requestBody:{required:!0,content:{"multipart/form-data":{schema:{type:"object",properties:{file:{type:"string",format:"binary"}}}}}},responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",properties:{url:{description:"The url",type:"string",format:"url",readOnly:!0,example:"http://www.example.com"}}}}}},400:{description:"Bad Request - unable to complete.",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{error:{example:"Invalid JSON syntax. Please check your syntax and try again."}}},{type:"object",properties:{error:{example:"The <object> failed to create/update"},errors:{example:{attribute:"can't be blank"}}}}]}}}},500:{description:"Internal Server Error - returned on unhandled exceptions.",content:{"application/json":{schema:{type:"object",properties:{error:{description:"A message describing the error",example:"Sorry something went wrong"}}}}}}},method:"post",path:"/profiles/{id}/upload/{attribute_id}",info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Uploads a new attachment attribute value to a profile",description:{content:"Uploads a new attachment attribute value to a profile",type:"text/plain"},url:{path:["profiles",":id","upload",":attribute_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of the object to retrieve or update",type:"text/plain"},type:"any",value:"",key:"id"},{disabled:!1,description:{content:"(Required) The id of the attachment attribute",type:"text/plain"},type:"any",value:"",key:"attribute_id"}]},header:[{key:"Content-Type",value:"multipart/form-data"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"formdata",formdata:[]}}},sidebar_class_name:"post api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Uploads a new attachment attribute value to a profile' (post-profile-upload)"},sidebar:"nermOpenApiSidebar",previous:{title:"Retrieves the URL of an attachment attribute value from a profile",permalink:"/nerm/api/get-profile-upload"},next:{title:"Retrieves the URL of the profile avatar",permalink:"/nerm/api/get-profile-avatar"}},h={},f=[{value:"Uploads a new attachment attribute value to a profile",id:"uploads-a-new-attachment-attribute-value-to-a-profile",level:2}],y={toc:f};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"uploads-a-new-attachment-attribute-value-to-a-profile"},"Uploads a new attachment attribute value to a profile"),(0,r.kt)("p",null,"Uploads a new attachment attribute value to a profile"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(p.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"ID of the object to retrieve or update",required:!0,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},mdxType:"ParamsItem"}),(0,r.kt)(p.Z,{className:"paramsItem",param:{name:"attribute_id",in:"path",description:"The id of the attachment attribute",required:!0,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},mdxType:"ParamsItem"})))),(0,r.kt)(l.Z,{mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"multipart/form-data",value:"multipart/form-data-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(n.Z,{collapsible:!1,name:"file",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"binary",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(o.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Expected response to a valid request")),(0,r.kt)("div",null,(0,r.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(n.Z,{collapsible:!1,name:"url",required:!1,deprecated:void 0,schemaDescription:"The url",schemaName:"url",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(s.Z,{responseExample:'{\n  "url": "http://www.example.com"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Bad Request - unable to complete.")),(0,r.kt)("div",null,(0,r.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--info"},"oneOf"),(0,r.kt)(d.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,r.kt)(n.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,r.kt)(m.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,r.kt)(n.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(n.Z,{collapsible:!1,name:"errors",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(s.Z,{responseExample:'{\n  "error": "Invalid JSON syntax. Please check your syntax and try again."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,r.kt)("div",null,(0,r.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(n.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:"A message describing the error",schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(s.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);
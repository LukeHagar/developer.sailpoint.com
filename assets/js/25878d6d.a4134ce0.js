"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[43968],{98820:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>b,toc:()=>y});var s=a(87462),o=(a(67294),a(3905)),i=a(26389),r=a(94891),n=a(75190),l=a(47507),d=a(24310),p=a(63303),m=(a(75035),a(85162));const u={id:"get-job-status",sidebar_label:"Get the status of a bulk job",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getJobStatus",description:"Get the status of a bulk job",tags:["Job Status"],parameters:[{name:"job_id",in:"query",description:"The id of the job returned from a POST or PATCH endpoint that resulted in a job being created",required:!0,schema:{type:"string"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"}],responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",properties:{uid:{type:"string",format:"uuid"},status:{type:"string",example:"complete"},job_type:{type:"string",example:"import"},job_data:{type:"array",items:{type:"object",properties:{user_id:{type:"string",format:"uuid"},manager_id:{type:"string",format:"uuid"},errors:{type:"array",items:{type:"string",example:"Validation error for record in job"}}}}}}}}}},400:{description:"Bad Request - unable to complete.",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{error:{example:"Invalid JSON syntax. Please check your syntax and try again."}}},{type:"object",properties:{error:{example:"The <object> failed to create/update"},errors:{example:{attribute:"can't be blank"}}}}]}}}},500:{description:"Internal Server Error - returned on unhandled exceptions.",content:{"application/json":{schema:{type:"object",properties:{error:{description:"A message describing the error",example:"Sorry something went wrong"}}}}}}},method:"get",path:"/job_status",info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Get the status of a bulk job",description:{content:"Get the status of a bulk job",type:"text/plain"},url:{path:["job_status"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The id of the job returned from a POST or PATCH endpoint that resulted in a job being created",type:"text/plain"},key:"job_id",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get the status of a bulk job' (get-job-status)"},c=void 0,b={unversionedId:"api/get-job-status",id:"api/get-job-status",title:"get-job-status",description:"Get the status of a bulk job",source:"@site/products/nerm/api/get-job-status.api.mdx",sourceDirName:"api",slug:"/api/get-job-status",permalink:"/nerm/api/get-job-status",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get the status of a bulk job' (get-job-status)",tags:[],version:"current",lastUpdatedBy:"Colin McKibben",lastUpdatedAt:1690207305,formattedLastUpdatedAt:"Jul 24, 2023",frontMatter:{id:"get-job-status",sidebar_label:"Get the status of a bulk job",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getJobStatus",description:"Get the status of a bulk job",tags:["Job Status"],parameters:[{name:"job_id",in:"query",description:"The id of the job returned from a POST or PATCH endpoint that resulted in a job being created",required:!0,schema:{type:"string"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"}],responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",properties:{uid:{type:"string",format:"uuid"},status:{type:"string",example:"complete"},job_type:{type:"string",example:"import"},job_data:{type:"array",items:{type:"object",properties:{user_id:{type:"string",format:"uuid"},manager_id:{type:"string",format:"uuid"},errors:{type:"array",items:{type:"string",example:"Validation error for record in job"}}}}}}}}}},400:{description:"Bad Request - unable to complete.",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{error:{example:"Invalid JSON syntax. Please check your syntax and try again."}}},{type:"object",properties:{error:{example:"The <object> failed to create/update"},errors:{example:{attribute:"can't be blank"}}}}]}}}},500:{description:"Internal Server Error - returned on unhandled exceptions.",content:{"application/json":{schema:{type:"object",properties:{error:{description:"A message describing the error",example:"Sorry something went wrong"}}}}}}},method:"get",path:"/job_status",info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Get the status of a bulk job",description:{content:"Get the status of a bulk job",type:"text/plain"},url:{path:["job_status"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The id of the job returned from a POST or PATCH endpoint that resulted in a job being created",type:"text/plain"},key:"job_id",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get the status of a bulk job' (get-job-status)"},sidebar:"nermOpenApiSidebar",previous:{title:"Run a saved advanced search query",permalink:"/nerm/api/run-advanced-searchby-id"}},h={},y=[{value:"Get the status of a bulk job",id:"get-the-status-of-a-bulk-job",level:2}],f={toc:y};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,s.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"get-the-status-of-a-bulk-job"},"Get the status of a bulk job"),(0,o.kt)("p",null,"Get the status of a bulk job"),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Query Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(n.Z,{className:"paramsItem",param:{name:"job_id",in:"query",description:"The id of the job returned from a POST or PATCH endpoint that resulted in a job being created",required:!0,schema:{type:"string"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(i.Z,{mdxType:"ApiTabs"},(0,o.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Expected response to a valid request")),(0,o.kt)("div",null,(0,o.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(p.Z,{mdxType:"SchemaTabs"},(0,o.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"uid",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"job_type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"job_data"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"user_id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"manager_id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"errors",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,o.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(l.Z,{responseExample:'{\n  "uid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "status": "complete",\n  "job_type": "import",\n  "job_data": [\n    {\n      "user_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "manager_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "errors": [\n        "Validation error for record in job"\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Bad Request - unable to complete.")),(0,o.kt)("div",null,(0,o.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(p.Z,{mdxType:"SchemaTabs"},(0,o.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)("div",null,(0,o.kt)("div",null,(0,o.kt)("span",{className:"badge badge--info"},"oneOf"),(0,o.kt)(p.Z,{mdxType:"SchemaTabs"},(0,o.kt)(m.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,o.kt)(d.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,o.kt)(m.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,o.kt)(d.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"errors",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,o.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(l.Z,{responseExample:'{\n  "error": "Invalid JSON syntax. Please check your syntax and try again."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(m.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,o.kt)("div",null,(0,o.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(p.Z,{mdxType:"SchemaTabs"},(0,o.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:"A message describing the error",schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(l.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);
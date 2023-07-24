"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[78023],{86761:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>b,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>m,toc:()=>h});var a=i(87462),r=(i(67294),i(3905)),d=i(26389),s=i(94891),o=(i(75190),i(47507)),c=i(24310),n=i(63303),p=(i(75035),i(85162));const l={id:"get-advanced-search",sidebar_label:"Get saved advanced search queries",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getAdvancedSearch",description:"Get saved advanced search queries",tags:["Advanced Search"],responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",properties:{advanced_search:{type:"array",items:{type:"object",properties:{id:{description:"The id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"the uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},label:{description:"the label",type:"string",example:"mylabel"},condition_rules_attributes:{description:"The condition rules attributes",type:"array",items:{anyOf:[{type:"object",properties:{id:{description:"The id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"The uuid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},type:{description:"The type",type:"string",required:!0,enum:["ProfileTypeRule"],example:"ProfileTypeRule"},comparison_operator:{description:"The comparison operator",type:"string",enum:["==","!="],example:"=="},value:{description:"The value",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"}}},{type:"object",properties:{id:{description:"The id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"The uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},type:{description:"The type",type:"string",required:!0,enum:["ProfileStatusRule"],example:"ProfileStatusRule"},comparison_operator:{description:"The comparison operator",type:"string",enum:["==","!="],example:"=="},value:{description:"The value",type:"string",enum:["Active","Inactive","Leave of absence","Terminated"],example:"Active"}}},{type:"object",properties:{id:{description:"the id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"the uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},type:{description:"The type",type:"string",required:!0,enum:["ProfileAttributeRule"],example:"ProfileAttributeRule"},condition_object_type:{description:"The condition_object_type",type:"string",required:!0,enum:["TextFieldAttribute","TextAreaAttribute"],example:"TextAreaAttribute"},condition_object_id:{description:"The condition_object_id",type:"string",required:!0,format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},comparison_operator:{description:"The operator to use for comparison",type:"string",required:!0,enum:["==","!=",">","<","start_with?","end_with?","include?"],example:"=="},value:{description:"The value",type:"string",required:!0,example:"Some value"}}},{type:"object",properties:{id:{description:"The id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"The uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},type:{description:"The type",type:"string",required:!0,enum:["ProfileAttributeRule"],example:"ProfileAttributeRule"},condition_object_type:{description:"The condition object type",type:"string",required:!0,enum:["DateAttribute"],example:"DateAttribute"},condition_object_id:{description:"The condition object id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},secondary_attribute_type:{description:"The secondary_attribute_type",type:"string",enum:["DateAttribute"],example:"DateAttribute"},secondary_attribute_id:{description:"The secondary_attribute_id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},comparison_operator:{description:"The operator to use for comparison",type:"string",enum:[">","<","after","before"],example:"<"},value:{description:"The value to use for comparison",type:"string",required:!0,enum:["Today","<uid>"],example:"Today"},secondary_value:{description:"The secondary value",type:"string",enum:["after","before"],example:"after"},tertiary_value:{description:"the tertiary_value",type:"string",example:30}}},{type:"object",properties:{id:{description:"The id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"The uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},type:{description:"The type",type:"string",required:!0,enum:["ProfileAttributeRule"],example:"ProfileAttributeRule"},condition_object_type:{description:"The condition_object_type",type:"string",required:!0,enum:["ProfileSelectAttribute","ProfileSearchAttribute","OwnerSelectAttribute","OwnerSearchAttribute","ContributorSelectAttribute","ContributorSearchAttribute"],example:"OwnerSearchAttribute"},condition_object_id:{description:"The condition_object_id",type:"string",required:!0,format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},comparison_operator:{description:"The comparison_operator",type:"string",required:!0,enum:["include?","exclude?"],example:"include?"},value:{description:"The value",type:"string",required:!0,format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"}}},{type:"object",properties:{id:{description:"The id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"the uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},type:{description:"The type",type:"string",required:!0,enum:["RiskRule"],example:"RiskRule"},comparison_operator:{description:"The operator to use for comparison",type:"string",enum:["==",">","<"],example:"=="},value:{description:"Id of the Risk Level being compared against",type:"string",summary:"id of the Risk Level being compared against",required:!0,format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},secondary_value:{description:"The secondary value",type:"string",required:!0,enum:["OverallRisk"],example:"OverallRisk"}}}]},example:[{type:"ProfileTypeRule",comparison_operator:"==",value:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},{type:"ProfileStatusRule",id:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",uid:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",comparison_operator:"==",value:"Active"}]}}}}}}}}}},method:"get",path:"/advanced_search",info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Get saved advanced search queries",description:{content:"Get saved advanced search queries",type:"text/plain"},url:{path:["advanced_search"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get saved advanced search queries' (get-advanced-search)"},u=void 0,m={unversionedId:"api/get-advanced-search",id:"api/get-advanced-search",title:"get-advanced-search",description:"Get saved advanced search queries",source:"@site/products/nerm/api/get-advanced-search.api.mdx",sourceDirName:"api",slug:"/api/get-advanced-search",permalink:"/nerm/api/get-advanced-search",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get saved advanced search queries' (get-advanced-search)",tags:[],version:"current",lastUpdatedBy:"Colin McKibben",lastUpdatedAt:1690207305,formattedLastUpdatedAt:"Jul 24, 2023",frontMatter:{id:"get-advanced-search",sidebar_label:"Get saved advanced search queries",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getAdvancedSearch",description:"Get saved advanced search queries",tags:["Advanced Search"],responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",properties:{advanced_search:{type:"array",items:{type:"object",properties:{id:{description:"The id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"the uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},label:{description:"the label",type:"string",example:"mylabel"},condition_rules_attributes:{description:"The condition rules attributes",type:"array",items:{anyOf:[{type:"object",properties:{id:{description:"The id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"The uuid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},type:{description:"The type",type:"string",required:!0,enum:["ProfileTypeRule"],example:"ProfileTypeRule"},comparison_operator:{description:"The comparison operator",type:"string",enum:["==","!="],example:"=="},value:{description:"The value",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"}}},{type:"object",properties:{id:{description:"The id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"The uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},type:{description:"The type",type:"string",required:!0,enum:["ProfileStatusRule"],example:"ProfileStatusRule"},comparison_operator:{description:"The comparison operator",type:"string",enum:["==","!="],example:"=="},value:{description:"The value",type:"string",enum:["Active","Inactive","Leave of absence","Terminated"],example:"Active"}}},{type:"object",properties:{id:{description:"the id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"the uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},type:{description:"The type",type:"string",required:!0,enum:["ProfileAttributeRule"],example:"ProfileAttributeRule"},condition_object_type:{description:"The condition_object_type",type:"string",required:!0,enum:["TextFieldAttribute","TextAreaAttribute"],example:"TextAreaAttribute"},condition_object_id:{description:"The condition_object_id",type:"string",required:!0,format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},comparison_operator:{description:"The operator to use for comparison",type:"string",required:!0,enum:["==","!=",">","<","start_with?","end_with?","include?"],example:"=="},value:{description:"The value",type:"string",required:!0,example:"Some value"}}},{type:"object",properties:{id:{description:"The id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"The uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},type:{description:"The type",type:"string",required:!0,enum:["ProfileAttributeRule"],example:"ProfileAttributeRule"},condition_object_type:{description:"The condition object type",type:"string",required:!0,enum:["DateAttribute"],example:"DateAttribute"},condition_object_id:{description:"The condition object id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},secondary_attribute_type:{description:"The secondary_attribute_type",type:"string",enum:["DateAttribute"],example:"DateAttribute"},secondary_attribute_id:{description:"The secondary_attribute_id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},comparison_operator:{description:"The operator to use for comparison",type:"string",enum:[">","<","after","before"],example:"<"},value:{description:"The value to use for comparison",type:"string",required:!0,enum:["Today","<uid>"],example:"Today"},secondary_value:{description:"The secondary value",type:"string",enum:["after","before"],example:"after"},tertiary_value:{description:"the tertiary_value",type:"string",example:30}}},{type:"object",properties:{id:{description:"The id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"The uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},type:{description:"The type",type:"string",required:!0,enum:["ProfileAttributeRule"],example:"ProfileAttributeRule"},condition_object_type:{description:"The condition_object_type",type:"string",required:!0,enum:["ProfileSelectAttribute","ProfileSearchAttribute","OwnerSelectAttribute","OwnerSearchAttribute","ContributorSelectAttribute","ContributorSearchAttribute"],example:"OwnerSearchAttribute"},condition_object_id:{description:"The condition_object_id",type:"string",required:!0,format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},comparison_operator:{description:"The comparison_operator",type:"string",required:!0,enum:["include?","exclude?"],example:"include?"},value:{description:"The value",type:"string",required:!0,format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"}}},{type:"object",properties:{id:{description:"The id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"the uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},type:{description:"The type",type:"string",required:!0,enum:["RiskRule"],example:"RiskRule"},comparison_operator:{description:"The operator to use for comparison",type:"string",enum:["==",">","<"],example:"=="},value:{description:"Id of the Risk Level being compared against",type:"string",summary:"id of the Risk Level being compared against",required:!0,format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},secondary_value:{description:"The secondary value",type:"string",required:!0,enum:["OverallRisk"],example:"OverallRisk"}}}]},example:[{type:"ProfileTypeRule",comparison_operator:"==",value:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},{type:"ProfileStatusRule",id:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",uid:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",comparison_operator:"==",value:"Active"}]}}}}}}}}}},method:"get",path:"/advanced_search",info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Get saved advanced search queries",description:{content:"Get saved advanced search queries",type:"text/plain"},url:{path:["advanced_search"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get saved advanced search queries' (get-advanced-search)"},sidebar:"nermOpenApiSidebar",previous:{title:"Get identity proofing result data in bulk",permalink:"/nerm/api/get-identity-proofing-results"},next:{title:"Save an advanced search query for later use",permalink:"/nerm/api/post-advanced-search"}},b={},h=[{value:"Get saved advanced search queries",id:"get-saved-advanced-search-queries",level:2}],y={toc:h};function f(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-saved-advanced-search-queries"},"Get saved advanced search queries"),(0,r.kt)("p",null,"Get saved advanced search queries"),(0,r.kt)("div",null,(0,r.kt)(d.Z,{mdxType:"ApiTabs"},(0,r.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Expected response to a valid request")),(0,r.kt)("div",null,(0,r.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(n.Z,{mdxType:"SchemaTabs"},(0,r.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"advanced_search"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:"The id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"uid",required:!1,deprecated:void 0,schemaDescription:"the uid",schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"label",required:!1,deprecated:void 0,schemaDescription:"the label",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"condition_rules_attributes"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"The condition rules attributes")),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--info"},"anyOf"),(0,r.kt)(n.Z,{mdxType:"SchemaTabs"},(0,r.kt)(p.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,r.kt)(c.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:"The id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"uid",required:!1,deprecated:void 0,schemaDescription:"The uuid",schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:"The type",schemaName:"string",qualifierMessage:"**Possible values:** [`ProfileTypeRule`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"comparison_operator",required:!1,deprecated:void 0,schemaDescription:"The comparison operator",schemaName:"string",qualifierMessage:"**Possible values:** [`==`, `!=`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:"The value",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,r.kt)(p.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,r.kt)(c.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:"The id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"uid",required:!1,deprecated:void 0,schemaDescription:"The uid",schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:"The type",schemaName:"string",qualifierMessage:"**Possible values:** [`ProfileStatusRule`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"comparison_operator",required:!1,deprecated:void 0,schemaDescription:"The comparison operator",schemaName:"string",qualifierMessage:"**Possible values:** [`==`, `!=`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:"The value",schemaName:"string",qualifierMessage:"**Possible values:** [`Active`, `Inactive`, `Leave of absence`, `Terminated`]",defaultValue:void 0,mdxType:"SchemaItem"})),(0,r.kt)(p.Z,{label:"MOD3",value:"2-item-properties",mdxType:"TabItem"},(0,r.kt)(c.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:"the id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"uid",required:!1,deprecated:void 0,schemaDescription:"the uid",schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:"The type",schemaName:"string",qualifierMessage:"**Possible values:** [`ProfileAttributeRule`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"condition_object_type",required:!1,deprecated:void 0,schemaDescription:"The condition_object_type",schemaName:"string",qualifierMessage:"**Possible values:** [`TextFieldAttribute`, `TextAreaAttribute`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"condition_object_id",required:!1,deprecated:void 0,schemaDescription:"The condition_object_id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"comparison_operator",required:!1,deprecated:void 0,schemaDescription:"The operator to use for comparison",schemaName:"string",qualifierMessage:"**Possible values:** [`==`, `!=`, `>`, `<`, `start_with?`, `end_with?`, `include?`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:"The value",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,r.kt)(p.Z,{label:"MOD4",value:"3-item-properties",mdxType:"TabItem"},(0,r.kt)(c.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:"The id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"uid",required:!1,deprecated:void 0,schemaDescription:"The uid",schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:"The type",schemaName:"string",qualifierMessage:"**Possible values:** [`ProfileAttributeRule`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"condition_object_type",required:!1,deprecated:void 0,schemaDescription:"The condition object type",schemaName:"string",qualifierMessage:"**Possible values:** [`DateAttribute`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"condition_object_id",required:!1,deprecated:void 0,schemaDescription:"The condition object id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"secondary_attribute_type",required:!1,deprecated:void 0,schemaDescription:"The secondary_attribute_type",schemaName:"string",qualifierMessage:"**Possible values:** [`DateAttribute`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"secondary_attribute_id",required:!1,deprecated:void 0,schemaDescription:"The secondary_attribute_id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"comparison_operator",required:!1,deprecated:void 0,schemaDescription:"The operator to use for comparison",schemaName:"string",qualifierMessage:"**Possible values:** [`>`, `<`, `after`, `before`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:"The value to use for comparison",schemaName:"string",qualifierMessage:"**Possible values:** [`Today`, `<uid>`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"secondary_value",required:!1,deprecated:void 0,schemaDescription:"The secondary value",schemaName:"string",qualifierMessage:"**Possible values:** [`after`, `before`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"tertiary_value",required:!1,deprecated:void 0,schemaDescription:"the tertiary_value",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,r.kt)(p.Z,{label:"MOD5",value:"4-item-properties",mdxType:"TabItem"},(0,r.kt)(c.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:"The id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"uid",required:!1,deprecated:void 0,schemaDescription:"The uid",schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:"The type",schemaName:"string",qualifierMessage:"**Possible values:** [`ProfileAttributeRule`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"condition_object_type",required:!1,deprecated:void 0,schemaDescription:"The condition_object_type",schemaName:"string",qualifierMessage:"**Possible values:** [`ProfileSelectAttribute`, `ProfileSearchAttribute`, `OwnerSelectAttribute`, `OwnerSearchAttribute`, `ContributorSelectAttribute`, `ContributorSearchAttribute`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"condition_object_id",required:!1,deprecated:void 0,schemaDescription:"The condition_object_id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"comparison_operator",required:!1,deprecated:void 0,schemaDescription:"The comparison_operator",schemaName:"string",qualifierMessage:"**Possible values:** [`include?`, `exclude?`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:"The value",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,r.kt)(p.Z,{label:"MOD6",value:"5-item-properties",mdxType:"TabItem"},(0,r.kt)(c.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:"The id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"uid",required:!1,deprecated:void 0,schemaDescription:"the uid",schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:"The type",schemaName:"string",qualifierMessage:"**Possible values:** [`RiskRule`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"comparison_operator",required:!1,deprecated:void 0,schemaDescription:"The operator to use for comparison",schemaName:"string",qualifierMessage:"**Possible values:** [`==`, `>`, `<`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:"Id of the Risk Level being compared against",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"secondary_value",required:!1,deprecated:void 0,schemaDescription:"The secondary value",schemaName:"string",qualifierMessage:"**Possible values:** [`OverallRisk`]",defaultValue:void 0,mdxType:"SchemaItem"})))))))))))))),(0,r.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "advanced_search": [\n    {\n      "id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n      "uid": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n      "label": "mylabel",\n      "condition_rules_attributes": [\n        {\n          "type": "ProfileTypeRule",\n          "comparison_operator": "==",\n          "value": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"\n        },\n        {\n          "type": "ProfileStatusRule",\n          "id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n          "uid": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n          "comparison_operator": "==",\n          "value": "Active"\n        }\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);
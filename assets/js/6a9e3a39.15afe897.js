"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[47616],{79242:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>b,frontMatter:()=>p,metadata:()=>h,toc:()=>y});var i=a(87462),o=(a(67294),a(3905)),s=a(26389),n=a(94891),r=a(75190),l=a(47507),c=a(24310),d=a(63303),m=(a(75035),a(85162));const p={id:"get-count-completed-work-items",sidebar_label:"Count Completed Work Items",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getCountCompletedWorkItems",tags:["Work Items"],description:"This gets a count of completed work items belonging to either the specified user(admin required), or the current user.",parameters:[{in:"query",name:"ownerId",schema:{type:"string"},description:"ID of the work item owner.",required:!1}],responses:{200:{description:"List of work items",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{count:{type:"integer",description:"The count of work items",example:29}}}}}}},400:{description:"Client Error - Returned if the request body is invalid.",content:{"application/json":{schema:{type:"object",properties:{detailCode:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},trackingId:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},messages:{type:"array",description:"Generic localized reason for error",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}},causes:{type:"array",description:"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}}}}}}},403:{description:"Forbidden - Returned if the user you are running as, doesn't have access to this end-point.",content:{"application/json":{schema:{type:"object",properties:{detailCode:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},trackingId:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},messages:{type:"array",description:"Generic localized reason for error",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}},causes:{type:"array",description:"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}}}},examples:{403:{summary:"An example of a 403 response object",value:{detailCode:"403 Forbidden",trackingId:"b21b1f7ce4da4d639f2c62a57171b427",messages:[{locale:"en-US",localeOrigin:"DEFAULT",text:"The server understood the request but refuses to authorize it."}]}}}}}},404:{description:"Not Found - returned if the request URL refers to a resource or object that does not exist",content:{"application/json":{schema:{type:"object",properties:{detailCode:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},trackingId:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},messages:{type:"array",description:"Generic localized reason for error",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}},causes:{type:"array",description:"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}}}},examples:{404:{summary:"An example of a 404 response object",value:{detailCode:"404 Not found",trackingId:"b21b1f7ce4da4d639f2c62a57171b427",messages:[{locale:"en-US",localeOrigin:"DEFAULT",text:"The server did not find a current representation for the target resource."}]}}}}}}},method:"get",path:"/work-items/count/completed",servers:[{url:"https://{tenant}.api.identitynow.com/beta",description:"This is the beta API server.",variables:{tenant:{default:"sailpoint",description:"This is the name of your tenant, typically your company's name."}}}],security:[{oauth2:[]}],securitySchemes:{oauth2:{type:"oauth2",description:"OAuth2 Bearer token (JWT). See [IdentityNow REST API Authentication](https://developer.sailpoint.com/idn/api/authentication) for more information.\n- Directions for generating a [personal access token](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens)\n- Directions using [client credentials flow](https://developer.sailpoint.com/idn/api/authentication#client-credentials-grant-flow)\n- Directions for using [authorization code flow](https://developer.sailpoint.com/idn/api/authentication#authorization-code-grant-flow)\n\nWhich authentication method should I choose?  See our [guide](https://developer.sailpoint.com/idn/api/authentication#which-oauth-20-grant-flow-should-i-use)\n\nLearn more about how to find your `tokenUrl` and `authorizationUrl` [in our docs](https://developer.sailpoint.com/idn/api/authentication#find-your-tenants-oauth-details)\n",flows:{clientCredentials:{tokenUrl:"https://tenant.api.identitynow.com/oauth/token",scopes:{"sp:scopes:default":"default scope","sp:scopes:all":"access to all scopes"}},authorizationCode:{authorizationUrl:"https://tenant.identitynow.com/oauth/authorize",tokenUrl:"https://tenant.api.identitynow.com/oauth/token",scopes:{"sp:scopes:default":"default scope","sp:scopes:all":"access to all scopes"}}}}},info:{title:"IdentityNow Beta API",description:"Use these APIs to interact with the IdentityNow platform to achieve repeatable, automated processes with greater scalability. These APIs are in beta and are subject to change. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.",termsOfService:"https://developer.sailpoint.com/discuss/tos",contact:{name:"Developer Relations",url:"https://developer.sailpoint.com/discuss/api-help"},license:{name:"MIT",url:"https://opensource.org/licenses/MIT"},version:"3.1.0-beta"},postman:{name:"Count Completed Work Items",description:{content:"This gets a count of completed work items belonging to either the specified user(admin required), or the current user.",type:"text/plain"},url:{path:["work-items","count","completed"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"ID of the work item owner.",type:"text/plain"},key:"ownerId",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"idn/api/beta/identitynow-beta-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Count Completed Work Items' (get-count-completed-work-items)"},u=void 0,h={unversionedId:"api/beta/get-count-completed-work-items",id:"api/beta/get-count-completed-work-items",title:"get-count-completed-work-items",description:"Count Completed Work Items",source:"@site/products/idn/api/beta/get-count-completed-work-items.api.mdx",sourceDirName:"api/beta",slug:"/api/beta/get-count-completed-work-items",permalink:"/idn/api/beta/get-count-completed-work-items",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Count Completed Work Items' (get-count-completed-work-items)",tags:[],version:"current",frontMatter:{id:"get-count-completed-work-items",sidebar_label:"Count Completed Work Items",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getCountCompletedWorkItems",tags:["Work Items"],description:"This gets a count of completed work items belonging to either the specified user(admin required), or the current user.",parameters:[{in:"query",name:"ownerId",schema:{type:"string"},description:"ID of the work item owner.",required:!1}],responses:{200:{description:"List of work items",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{count:{type:"integer",description:"The count of work items",example:29}}}}}}},400:{description:"Client Error - Returned if the request body is invalid.",content:{"application/json":{schema:{type:"object",properties:{detailCode:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},trackingId:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},messages:{type:"array",description:"Generic localized reason for error",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}},causes:{type:"array",description:"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}}}}}}},403:{description:"Forbidden - Returned if the user you are running as, doesn't have access to this end-point.",content:{"application/json":{schema:{type:"object",properties:{detailCode:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},trackingId:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},messages:{type:"array",description:"Generic localized reason for error",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}},causes:{type:"array",description:"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}}}},examples:{403:{summary:"An example of a 403 response object",value:{detailCode:"403 Forbidden",trackingId:"b21b1f7ce4da4d639f2c62a57171b427",messages:[{locale:"en-US",localeOrigin:"DEFAULT",text:"The server understood the request but refuses to authorize it."}]}}}}}},404:{description:"Not Found - returned if the request URL refers to a resource or object that does not exist",content:{"application/json":{schema:{type:"object",properties:{detailCode:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},trackingId:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},messages:{type:"array",description:"Generic localized reason for error",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}},causes:{type:"array",description:"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}}}},examples:{404:{summary:"An example of a 404 response object",value:{detailCode:"404 Not found",trackingId:"b21b1f7ce4da4d639f2c62a57171b427",messages:[{locale:"en-US",localeOrigin:"DEFAULT",text:"The server did not find a current representation for the target resource."}]}}}}}}},method:"get",path:"/work-items/count/completed",servers:[{url:"https://{tenant}.api.identitynow.com/beta",description:"This is the beta API server.",variables:{tenant:{default:"sailpoint",description:"This is the name of your tenant, typically your company's name."}}}],security:[{oauth2:[]}],securitySchemes:{oauth2:{type:"oauth2",description:"OAuth2 Bearer token (JWT). See [IdentityNow REST API Authentication](https://developer.sailpoint.com/idn/api/authentication) for more information.\n- Directions for generating a [personal access token](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens)\n- Directions using [client credentials flow](https://developer.sailpoint.com/idn/api/authentication#client-credentials-grant-flow)\n- Directions for using [authorization code flow](https://developer.sailpoint.com/idn/api/authentication#authorization-code-grant-flow)\n\nWhich authentication method should I choose?  See our [guide](https://developer.sailpoint.com/idn/api/authentication#which-oauth-20-grant-flow-should-i-use)\n\nLearn more about how to find your `tokenUrl` and `authorizationUrl` [in our docs](https://developer.sailpoint.com/idn/api/authentication#find-your-tenants-oauth-details)\n",flows:{clientCredentials:{tokenUrl:"https://tenant.api.identitynow.com/oauth/token",scopes:{"sp:scopes:default":"default scope","sp:scopes:all":"access to all scopes"}},authorizationCode:{authorizationUrl:"https://tenant.identitynow.com/oauth/authorize",tokenUrl:"https://tenant.api.identitynow.com/oauth/token",scopes:{"sp:scopes:default":"default scope","sp:scopes:all":"access to all scopes"}}}}},info:{title:"IdentityNow Beta API",description:"Use these APIs to interact with the IdentityNow platform to achieve repeatable, automated processes with greater scalability. These APIs are in beta and are subject to change. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.",termsOfService:"https://developer.sailpoint.com/discuss/tos",contact:{name:"Developer Relations",url:"https://developer.sailpoint.com/discuss/api-help"},license:{name:"MIT",url:"https://opensource.org/licenses/MIT"},version:"3.1.0-beta"},postman:{name:"Count Completed Work Items",description:{content:"This gets a count of completed work items belonging to either the specified user(admin required), or the current user.",type:"text/plain"},url:{path:["work-items","count","completed"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"ID of the work item owner.",type:"text/plain"},key:"ownerId",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"idn/api/beta/identitynow-beta-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Count Completed Work Items' (get-count-completed-work-items)"},sidebar:"openApiSidebar",previous:{title:"Count Work Items",permalink:"/idn/api/beta/get-count-work-items"},next:{title:"Work Items Summary",permalink:"/idn/api/beta/get-work-items-summary"}},g={},y=[{value:"Count Completed Work Items",id:"count-completed-work-items",level:2}],f={toc:y};function b(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"count-completed-work-items"},"Count Completed Work Items"),(0,o.kt)("p",null,"This gets a count of completed work items belonging to either the specified user(admin required), or the current user."),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Query Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(r.Z,{className:"paramsItem",param:{in:"query",name:"ownerId",schema:{type:"string"},description:"ID of the work item owner.",required:!1},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(s.Z,{mdxType:"ApiTabs"},(0,o.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"List of work items")),(0,o.kt)("div",null,(0,o.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(d.Z,{mdxType:"SchemaTabs"},(0,o.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema"),(0,o.kt)("span",{style:{opacity:"0.6"}}," array")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(c.Z,{collapsible:!1,name:"count",required:!1,deprecated:void 0,schemaDescription:"The count of work items",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(l.Z,{responseExample:'[\n  {\n    "count": 29\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Client Error - Returned if the request body is invalid.")),(0,o.kt)("div",null,(0,o.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(d.Z,{mdxType:"SchemaTabs"},(0,o.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,deprecated:void 0,schemaDescription:"Fine-grained error code providing more detail of the error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,deprecated:void 0,schemaDescription:"Unique tracking id for the error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"messages"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Generic localized reason for error")),(0,o.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,deprecated:void 0,schemaDescription:"The locale for the message text, a BCP 47 language tag.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,deprecated:void 0,schemaDescription:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",schemaName:"string",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"text",required:!1,deprecated:void 0,schemaDescription:"Actual text of the error message in the indicated locale.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"causes"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,o.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,deprecated:void 0,schemaDescription:"The locale for the message text, a BCP 47 language tag.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,deprecated:void 0,schemaDescription:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",schemaName:"string",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"text",required:!1,deprecated:void 0,schemaDescription:"Actual text of the error message in the indicated locale.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,o.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(l.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(m.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Forbidden - Returned if the user you are running as, doesn't have access to this end-point.")),(0,o.kt)("div",null,(0,o.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(d.Z,{mdxType:"SchemaTabs"},(0,o.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,deprecated:void 0,schemaDescription:"Fine-grained error code providing more detail of the error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,deprecated:void 0,schemaDescription:"Unique tracking id for the error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"messages"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Generic localized reason for error")),(0,o.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,deprecated:void 0,schemaDescription:"The locale for the message text, a BCP 47 language tag.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,deprecated:void 0,schemaDescription:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",schemaName:"string",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"text",required:!1,deprecated:void 0,schemaDescription:"Actual text of the error message in the indicated locale.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"causes"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,o.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,deprecated:void 0,schemaDescription:"The locale for the message text, a BCP 47 language tag.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,deprecated:void 0,schemaDescription:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",schemaName:"string",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"text",required:!1,deprecated:void 0,schemaDescription:"Actual text of the error message in the indicated locale.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,o.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(l.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,o.kt)(m.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,o.kt)("p",null," An example of a 403 response object"),(0,o.kt)(l.Z,{responseExample:'{\n  "detailCode": "403 Forbidden",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The server understood the request but refuses to authorize it."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(m.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Not Found - returned if the request URL refers to a resource or object that does not exist")),(0,o.kt)("div",null,(0,o.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(d.Z,{mdxType:"SchemaTabs"},(0,o.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,deprecated:void 0,schemaDescription:"Fine-grained error code providing more detail of the error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,deprecated:void 0,schemaDescription:"Unique tracking id for the error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"messages"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Generic localized reason for error")),(0,o.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,deprecated:void 0,schemaDescription:"The locale for the message text, a BCP 47 language tag.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,deprecated:void 0,schemaDescription:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",schemaName:"string",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"text",required:!1,deprecated:void 0,schemaDescription:"Actual text of the error message in the indicated locale.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"causes"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,o.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,deprecated:void 0,schemaDescription:"The locale for the message text, a BCP 47 language tag.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,deprecated:void 0,schemaDescription:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",schemaName:"string",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(c.Z,{collapsible:!1,name:"text",required:!1,deprecated:void 0,schemaDescription:"Actual text of the error message in the indicated locale.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,o.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(l.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,o.kt)(m.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,o.kt)("p",null," An example of a 404 response object"),(0,o.kt)(l.Z,{responseExample:'{\n  "detailCode": "404 Not found",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The server did not find a current representation for the target resource."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);
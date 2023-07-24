"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[37257],{559:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=i(87462),n=(i(67294),i(3905));const r={id:"testing-triggers",title:"Testing Triggers",pagination_label:"Testing Triggers",sidebar_label:"Testing Triggers",sidebar_position:5,sidebar_class_name:"testingTriggers",keywords:["event","trigger","testing"],description:"It is important to test your trigger subscription configuration with your actual subscribing service before enabling your subscription for production use.",slug:"/docs/event-triggers/testing-triggers",tags:["Event Triggers"]},o=void 0,a={unversionedId:"docs/identity-now/event-triggers/testing-triggers",id:"docs/identity-now/event-triggers/testing-triggers",title:"Testing Triggers",description:"It is important to test your trigger subscription configuration with your actual subscribing service before enabling your subscription for production use.",source:"@site/products/idn/docs/identity-now/event-triggers/testing-triggers.md",sourceDirName:"docs/identity-now/event-triggers",slug:"/docs/event-triggers/testing-triggers",permalink:"/idn/docs/event-triggers/testing-triggers",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/event-triggers/testing-triggers.md",tags:[{label:"Event Triggers",permalink:"/idn/tags/event-triggers"}],version:"current",lastUpdatedBy:"Colin McKibben",lastUpdatedAt:1690207305,formattedLastUpdatedAt:"Jul 24, 2023",sidebarPosition:5,frontMatter:{id:"testing-triggers",title:"Testing Triggers",pagination_label:"Testing Triggers",sidebar_label:"Testing Triggers",sidebar_position:5,sidebar_class_name:"testingTriggers",keywords:["event","trigger","testing"],description:"It is important to test your trigger subscription configuration with your actual subscribing service before enabling your subscription for production use.",slug:"/docs/event-triggers/testing-triggers",tags:["Event Triggers"]},sidebar:"idnDocs",previous:{title:"Filtering Events",permalink:"/idn/docs/event-triggers/filtering-events"},next:{title:"Responding to Response Required Triggers",permalink:"/idn/docs/event-triggers/responding-request-response-trigger"}},g={},c=[{value:"Sending Test Invocations",id:"sending-test-invocations",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Trigger Service Issues",id:"trigger-service-issues",level:3},{value:"Filter Issues",id:"filter-issues",level:3},{value:"Misconfigured Subscription",id:"misconfigured-subscription",level:3}],u={toc:c};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"It is important to test your trigger subscription configuration with your actual subscribing service (not a test site like ",(0,n.kt)("a",{parentName:"p",href:"https://webhook.site"},"webhook.site"),") before enabling your subscription for production use. Testing subscriptions ensures that your subscribing service can successfully receive events and that you are receiving the correct events based on the filter you have provided."),(0,n.kt)("h2",{id:"sending-test-invocations"},"Sending Test Invocations"),(0,n.kt)("p",null,"The easiest way to send a test event to your subscribing service is to use the ",(0,n.kt)("strong",{parentName:"p"},"Test Subscription")," command. Go to your subscription in the Event Trigger UI, select ",(0,n.kt)("strong",{parentName:"p"},"Options")," to the right of the subscription, and select ",(0,n.kt)("strong",{parentName:"p"},"Test Subscription"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"test subscription",src:i(27161).Z,width:"2041",height:"344"})),(0,n.kt)("p",null,"Doing so sends a test event to your subscribing service, using the default example payload for the specific trigger you are subscribing to. This is an easy way to validate that your service can receive events, but it lacks the ability to modify the event payload to test your filter against different payloads. However, there is an API endpoint you can use to modify the test payload."),(0,n.kt)("p",null,"If you want to control the test input to validate your filter against a more robust set of data, you can use the ",(0,n.kt)("a",{parentName:"p",href:"/idn/api/beta/start-test-trigger-invocation"},"test invocation")," API endpoint. You can use this API to send an input payload with any values that you want. This is an example of an invocation of this API:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"POST `https://{tenant}.api.identitynow.com/beta/trigger-invocations/test`\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "triggerId": "idn:access-request-pre-approval",\n  "input": {\n    "accessRequestId": "2c91808b6ef1d43e016efba0ce470904",\n    "requestedFor": {\n      "type": "IDENTITY",\n      "id": "2c91808568c529c60168cca6f90c1313",\n      "name": "William Wilson"\n    },\n    "requestedItems": [\n      {\n        "id": "2c91808b6ef1d43e016efba0ce470904",\n        "name": "Engineering Access",\n        "description": "Access to engineering database",\n        "type": "ACCESS_PROFILE",\n        "operation": "Add",\n        "comment": "William needs this access to do his job."\n      }\n    ],\n    "requestedBy": {\n      "type": "IDENTITY",\n      "id": "2c91808568c529c60168cca6f90c1314",\n      "name": "Rob Robertson"\n    }\n  },\n  "contentJson": {}\n}\n')),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("h3",{id:"trigger-service-issues"},"Trigger Service Issues"),(0,n.kt)("p",null,"If your subscribing service is not receiving your test invocations, you have a couple of options to debug the issue. Start by viewing the activity log for the subscription in the UI to ensure your test events are actually being sent."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"activity log",src:i(21190).Z,width:"2033",height:"316"})),(0,n.kt)("p",null,"Check the ",(0,n.kt)("strong",{parentName:"p"},"Created")," date with the time you sent the test events. If they are being sent, check the event details. Look for any errors being reported, and ensure your subscribing service's subscription ID is in the ",(0,n.kt)("inlineCode",{parentName:"p"},"subcriptionId")," the event was sent to."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"debug connection",src:i(68574).Z,width:"2560",height:"1328"})),(0,n.kt)("p",null,"You can also view the activity log by using the ",(0,n.kt)("a",{parentName:"p",href:"/idn/api/beta/list-trigger-invocation-status"},"list latest invocation statuses")," endpoint."),(0,n.kt)("h3",{id:"filter-issues"},"Filter Issues"),(0,n.kt)("p",null,"If you do not see your events in the activity log, it may be a filtering issue. If the filter you configured on the subscription is not matching the test event data, no event will be sent. Double check your filter expression with the test payload in a JSONpath editor to ensure the filter is valid and matches your data. See ",(0,n.kt)("a",{parentName:"p",href:"/idn/docs/event-triggers/filtering-events"},"Filtering Events")," for more information."),(0,n.kt)("h3",{id:"misconfigured-subscription"},"Misconfigured Subscription"),(0,n.kt)("p",null,"Double check that your subscription configuration is correct."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ensure the URL you provided is accessible from the public internet. If your subscribing service is hosted internally in your company's intranet, you may be able to access it from your computer, but the trigger service may not be able to."),(0,n.kt)("li",{parentName:"ul"},"Verify that the authentication details are correct. Verify that the username/password or bearer token is valid.")))}l.isMDXComponent=!0},21190:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/activity-log-f43d2beda4617ad71ede37afaabd3424.png"},68574:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/debug-connection-842ae82e91d48cdd9c4f2a14d4b4c2a3.png"},27161:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/test-subscription-572f17aa5c34840225f632ae61598fd6.png"}}]);
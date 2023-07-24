"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[39924],{2854:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var l=i(87462),n=(i(67294),i(3905)),r=i(52991),a=i(53438);const o={id:"cloud-executed-rules",title:"Cloud Executed Rules",pagination_label:"Cloud Executed Rules",sidebar_label:"Cloud Executed Rules",sidebar_position:2,sidebar_class_name:"cloudExecutedRules",keywords:["cloud","rules"],description:"Overview of cloud-executed rules",slug:"/docs/rules/cloud-rules",tags:["Rules"]},s=void 0,u={unversionedId:"docs/identity-now/rules/cloud-rules/cloud-executed-rules",id:"docs/identity-now/rules/cloud-rules/cloud-executed-rules",title:"Cloud Executed Rules",description:"Overview of cloud-executed rules",source:"@site/products/idn/docs/identity-now/rules/cloud-rules/index.md",sourceDirName:"docs/identity-now/rules/cloud-rules",slug:"/docs/rules/cloud-rules",permalink:"/idn/docs/rules/cloud-rules",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/rules/cloud-rules/index.md",tags:[{label:"Rules",permalink:"/idn/tags/rules"}],version:"current",lastUpdatedBy:"Colin McKibben",lastUpdatedAt:1690207305,formattedLastUpdatedAt:"Jul 24, 2023",sidebarPosition:2,frontMatter:{id:"cloud-executed-rules",title:"Cloud Executed Rules",pagination_label:"Cloud Executed Rules",sidebar_label:"Cloud Executed Rules",sidebar_position:2,sidebar_class_name:"cloudExecutedRules",keywords:["cloud","rules"],description:"Overview of cloud-executed rules",slug:"/docs/rules/cloud-rules",tags:["Rules"]},sidebar:"idnDocs",previous:{title:"Your First Rule",permalink:"/idn/docs/rules/guides/your-first-rule"},next:{title:"Account Profile Attribute Generator",permalink:"/idn/docs/rules/cloud-rules/account-profile-attribute-generator"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Supported Cloud Rules",id:"supported-cloud-rules",level:2},{value:"Configuration Process",id:"configuration-process",level:2},{value:"Submit for Rule Review",id:"submit-for-rule-review",level:2},{value:"Review Guidelines",id:"review-guidelines",level:2},{value:"Review Expectations",id:"review-expectations",level:2}],p={toc:c};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cloud-Executed Rules")," or ",(0,n.kt)("strong",{parentName:"p"},"Cloud Rules")," typically only perform specific functions, such as calculating attribute values. Cloud Rules all execute within the SailPoint cloud and offer access to objects and data, but they do not offer any sort of external connectivity."),(0,n.kt)("p",null,"Because these rules execute in a multi-tenant cloud environment, they have a very restricted context, and the review process is carefully scrutinized to ensure that they execute in an efficient and secure manner."),(0,n.kt)("h2",{id:"supported-cloud-rules"},"Supported Cloud Rules"),(0,n.kt)(r.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}),(0,n.kt)("h2",{id:"configuration-process"},"Configuration Process"),(0,n.kt)("p",null,"To ensure maximum compatibility, platform integrity, and security, SailPoint has instantiated a review process to ensure that any submitted Cloud Rules meet SailPoint requirements and do not contain code that can harm the system. The review process also checks the rules to verify their intended purposes and use cases."),(0,n.kt)("p",null,"In this process, SailPoint does ",(0,n.kt)("em",{parentName:"p"},"not check")," whether the rule executes correctly or verify that it works as expected to deliver specific outcomes. The review is merely an integrity check on the rule itself."),(0,n.kt)("h2",{id:"submit-for-rule-review"},"Submit for Rule Review"),(0,n.kt)("p",null,"To submit your Cloud Rule for review, approval, and inclusion in the SailPoint platform, submit it with ",(0,n.kt)("a",{parentName:"p",href:"https://www.sailpoint.com/services/professional/"},"SailPoint Professional Services"),". If you need help writing and testing rules, Professional Services can help you with that process as well. Make sure your contact information is up to date so the review team can contact you if they need to."),(0,n.kt)("h2",{id:"review-guidelines"},"Review Guidelines"),(0,n.kt)("p",null,"All submitted rules must follow proper rule submission guidelines."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Best Practices"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Ensure that all rule configurations are complete and accurate."),(0,n.kt)("li",{parentName:"ul"},"Check whether your rule follows SailPoint best practice guidance, and ensure that you have considered other product features first."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rule Quality"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Rules must follow the ",(0,n.kt)("a",{parentName:"li",href:"/idn/docs/rules#rule-guidelines"},"Rule Guidelines")," and ",(0,n.kt)("a",{parentName:"li",href:"/idn/docs/rules#rule-code-restrictions"},"Code Restrictions")),(0,n.kt)("li",{parentName:"ul"},"Rules must be adequately tested prior to submission."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Documentation"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Include detailed comments for non-obvious features in the configurations, including supporting documentation where appropriate. This includes justification for why something was created or done in a certain way. - ",(0,n.kt)("em",{parentName:"li"},"e.g. I did this because...")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Standards"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Rules must omit commented out blocks or unfinished, incomplete, or untested code."),(0,n.kt)("li",{parentName:"ul"},"Rules must be submitted with appropriate UTF-8 encoding."),(0,n.kt)("li",{parentName:"ul"},"Rules must convert url-encoded characters:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"&amp;")," should be ",(0,n.kt)("inlineCode",{parentName:"li"},"&")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"&lt;")," should be ",(0,n.kt)("inlineCode",{parentName:"li"},"<")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"&gt;")," should be ",(0,n.kt)("inlineCode",{parentName:"li"},">")))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rule File Naming"))),(0,n.kt)("p",null,"This is the file naming convention for rules: ",(0,n.kt)("inlineCode",{parentName:"p"},"Rule - {type} - {name}.xml")),(0,n.kt)("p",null,"For example, this is the rule: "),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'<Rule language="beanshell" name="Calculate Lifecycle" type="IdentityAttribute">')),(0,n.kt)("p",null,"This should be the rule's file name:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Rule - IdentityAttribute - Calculate Lifecycle.xml")),(0,n.kt)("p",null,'If you do not have a type, use "Generic" as the type. It would look like this:'),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Rule - Generic - My Generic Rule.xml")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Updating Existing Rules and Versioning")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The best practice is to maintain a single rule for a given use case in the tenant. Creating additional rules while updating to maintain versioning is not supported because doing so may cause issues during reviews and support."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Example:"),' For an AD Before Provisioning rule called "AD BeforeProvisioningRule", you have the file "Rule - BeforeProvisioning - AD BeforeProvisioningRule.xml". When you are updating the logic for AD, it is best to update the file/rule with the same name so changes can be properly tracked to the single object.'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Deployment Window Requirements")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Rules are generally reviewed and deployed, if they are accepted without feedback, within 24 hours."),(0,n.kt)("li",{parentName:"ul"},"If specific windows are required and you want full control of when a rule is updated, use these steps to follow the versioning best practices:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Submit your request for a new rule with the name: ",(0,n.kt)("inlineCode",{parentName:"li"},"<original name>-TEMP")),(0,n.kt)("li",{parentName:"ul"},"Apply the new rule during the change window."),(0,n.kt)("li",{parentName:"ul"},"Validate the updated rule logic."),(0,n.kt)("li",{parentName:"ul"},"Once the rule is validated, submit your request to update original rule with the updated logic."),(0,n.kt)("li",{parentName:"ul"},"Once the original rule is updated, apply the original rule as the production configuration."),(0,n.kt)("li",{parentName:"ul"},"Submit your request to delete the TEMP rule.")))))),(0,n.kt)("h2",{id:"review-expectations"},"Review Expectations"),(0,n.kt)("p",null,"Once you have submitted your rule and you are in the review process, remember these points:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Timing:")," SailPoint will examine your rule as soon as possible. Most rules are reviewed within 24 hours of submission. However, if your rule is complex, poorly documented, hard to read, or if it presents new issues, it may require greater scrutiny and consideration. If your rule is repeatedly rejected for the same guideline violation, your rule's review may take longer to complete."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Status Updates:")," Your rule's current status will be reflected in your ",(0,n.kt)("a",{parentName:"li",href:"https://www.sailpoint.com/services/professional/#contact-form"},"SailPoint Expert Services request"),", so you can monitor its progress there."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Expedite Requests:")," If you have a critical timing issue, you can request an expedited review. Respect your fellow implementers by seeking expedited review only when you truly need it. If you are found to be abusing this system, SailPoint may reject further requests going forward."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rejections:")," SailPoint's goal is to apply these guidelines fairly and consistently, but mistaken rejections can happen. If your rule has been rejected and you have questions or you would like to provide additional information, communicate directly with the rule review team. This may help get your rule into IdentityNow, and it can help SailPoint improve the process or identify a need for clarity in its policies. If you still disagree with the outcome, let SailPoint know and someone can look into it."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Changes:")," Rule changes or modifications to meet guidelines are not the reviewer's responsibility. They are the responsibility of the person(s) submitting the rule. Reviewers may give advice, examples, etc. to help, but doing so does not guarantee a solution. You should test the rules with the changes before resubmission.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"")))}m.isMDXComponent=!0},52991:(e,t,i)=>{i.d(t,{Z:()=>g});var l=i(67294),n=i(86010),r=i(53438),a=i(39960),o=i(13919),s=i(95999);const u="cardContainer_fWXF",d="cardTitle_rnsV",c="cardDescription_PWke";function p(e){let{href:t,children:i}=e;return l.createElement(a.Z,{href:t,className:(0,n.Z)("card padding--lg",u)},i)}function m(e){let{href:t,icon:i,title:r,description:a}=e;return l.createElement(p,{href:t},l.createElement("h2",{className:(0,n.Z)("text--truncate",d),title:r},i," ",r),a&&l.createElement("p",{className:(0,n.Z)("text--truncate",c),title:a},a))}function h(e){let{item:t}=e;const i=(0,r.Wl)(t);return i?l.createElement(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function k(e){let{item:t}=e;const i=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.xz)(t.docId??void 0);return l.createElement(m,{href:t.href,icon:i,title:t.label,description:n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return l.createElement(k,{item:t});case"category":return l.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const i=(0,r.jA)();return l.createElement(g,{items:i.items,className:t})}function g(e){const{items:t,className:i}=e;if(!t)return l.createElement(y,e);const a=(0,r.MN)(t);return l.createElement("section",{className:(0,n.Z)("row",i)},a.map(((e,t)=>l.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},l.createElement(f,{item:e})))))}}}]);
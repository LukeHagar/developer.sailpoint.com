"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[76314],{79399:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"transforms",title:"Transforms",pagination_label:"Transforms",sidebar_label:"Transforms",sidebar_position:1,sidebar_class_name:"transforms",keywords:["transforms"],description:"Building Transforms in IdentityNow",slug:"/docs/transforms",tags:["Transforms"]},o=void 0,s={unversionedId:"docs/identity-now/transforms/transforms",id:"docs/identity-now/transforms/transforms",title:"Transforms",description:"Building Transforms in IdentityNow",source:"@site/products/idn/docs/identity-now/transforms/index.md",sourceDirName:"docs/identity-now/transforms",slug:"/docs/transforms",permalink:"/idn/docs/transforms",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/index.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"}],version:"current",lastUpdatedBy:"Colin McKibben",lastUpdatedAt:1690207305,formattedLastUpdatedAt:"Jul 24, 2023",sidebarPosition:1,frontMatter:{id:"transforms",title:"Transforms",pagination_label:"Transforms",sidebar_label:"Transforms",sidebar_position:1,sidebar_class_name:"transforms",keywords:["transforms"],description:"Building Transforms in IdentityNow",slug:"/docs/transforms",tags:["Transforms"]},sidebar:"idnDocs",previous:{title:"Introduction",permalink:"/idn/docs"},next:{title:"Guides",permalink:"/idn/docs/transforms/guides"}},l={},p=[{value:"What Are Transforms",id:"what-are-transforms",level:2},{value:"How Transforms Work",id:"how-transforms-work",level:2},{value:"Multiple Transform Inputs",id:"multiple-transform-inputs",level:3},{value:"Complex Nested Transforms",id:"complex-nested-transforms",level:3},{value:"Configuring Transform Behavior",id:"configuring-transform-behavior",level:2},{value:"Transform Syntax",id:"transform-syntax",level:2},{value:"Template Engine",id:"template-engine",level:2},{value:"Example",id:"example",level:3},{value:"Identity Attribute Context",id:"identity-attribute-context",level:3},{value:"Account Profile Context",id:"account-profile-context",level:3},{value:"Implicit vs Explicit Input",id:"implicit-vs-explicit-input",level:2},{value:"Implicit Input",id:"implicit-input",level:3},{value:"Explicit Input",id:"explicit-input",level:3},{value:"Account Transforms",id:"account-transforms",level:3},{value:"Configuration",id:"configuration",level:4},{value:"Testing Transforms on Account Create",id:"testing-transforms-on-account-create",level:4},{value:"Applying Transforms on Account Create",id:"applying-transforms-on-account-create",level:4},{value:"Testing Transforms",id:"testing-transforms",level:2},{value:"Transform Best Practices",id:"transform-best-practices",level:2},{value:"Transforms vs. Rules",id:"transforms-vs-rules",level:2}],m={toc:p};function u(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In SailPoint's cloud services, transforms allow you to manipulate attribute values while aggregating from or provisioning to a source. This guide provides a reference to help you understand the purpose, configuration, and usage of transforms."),(0,r.kt)("h2",{id:"what-are-transforms"},"What Are Transforms"),(0,r.kt)("p",null,"Transforms are configurable objects that define easy ways to manipulate attribute data without requiring you to write code. Transforms are configurable building blocks with sets of inputs and outputs:"),(0,r.kt)("div",{align:"center"},(0,r.kt)("mermaid",{value:"flowchart LR\n  id1(Input) ====> id2[Transform] ====> id3([Output])"})),(0,r.kt)("p",null,"Because there is no code to write, an administrator can configure these by using a JSON object structure and uploading them into IdentityNow using ",(0,r.kt)("a",{parentName:"p",href:"/idn/api/v3/transforms"},"IdentityNow's Transform REST APIs"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Sometimes transforms are referred to as Seaspray, the codename for transforms. IdentityNow Transforms and Seaspray are essentially the same.")),(0,r.kt)("h2",{id:"how-transforms-work"},"How Transforms Work"),(0,r.kt)("p",null,"Transforms typically have an input(s) and output(s). The way the transformation occurs mainly depends on the type of transform. Refer to ",(0,r.kt)("a",{parentName:"p",href:"/idn/docs/transforms/operations"},"Operations in IdentityNow Transforms")," for more information."),(0,r.kt)("p",null,"For example, a ",(0,r.kt)("a",{parentName:"p",href:"/idn/docs/transforms/operations/lower"},"Lower transform")," transforms any input text strings into lowercase versions as output. So if the input were ",(0,r.kt)("inlineCode",{parentName:"p"},"Foo"),", the lowercase output of the transform would be ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,r.kt)("div",{align:"center"},(0,r.kt)("mermaid",{value:"flowchart LR\n  id1(Foo) ====> id2[Lower\\nTransform] ====> id3(foo)"})),(0,r.kt)("p",null,"There are other types of transforms too. For example, an ",(0,r.kt)("a",{parentName:"p",href:"/idn/docs/transforms/operations/e164-phone"},"E.164 Phone transform")," transforms any input phone number strings into an E.164 formatted version as output. So if the input were ",(0,r.kt)("inlineCode",{parentName:"p"},"(512) 346-2000"),", the output would be ",(0,r.kt)("inlineCode",{parentName:"p"},"+1 5123462000"),":"),(0,r.kt)("div",{align:"center"},(0,r.kt)("mermaid",{value:'flowchart LR\n  id1("(512) 346-2000") ====> id2[E.164\\nTransform] ====> id3(+1 5123462000)'})),(0,r.kt)("h3",{id:"multiple-transform-inputs"},"Multiple Transform Inputs"),(0,r.kt)("p",null,"In the previous examples, each transform had a single input. Some transforms can specify more than one input. For example, the ",(0,r.kt)("a",{parentName:"p",href:"/idn/docs/transforms/operations/concatenation"},"Concat transform")," concatenates one or more strings together. If ",(0,r.kt)("inlineCode",{parentName:"p"},"Foo")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Bar")," were inputs, the transformed output would be ",(0,r.kt)("inlineCode",{parentName:"p"},"FooBar"),":"),(0,r.kt)("div",{align:"center"},(0,r.kt)("mermaid",{value:"flowchart LR\n  id1(Foo) ====> id2[Concat\\nTransform] ====> id3(FooBar)\n  id4(Bar) ====> id2[Concat\\nTransform]"})),(0,r.kt)("h3",{id:"complex-nested-transforms"},"Complex Nested Transforms"),(0,r.kt)("p",null,"For more complex use cases, a single transform may not be enough. It is possible to link several transforms together. IdentityNow calls these 'nested' transforms because they are transform objects within other transform objects."),(0,r.kt)("p",null,"An example of a nested transform would be using the previous ",(0,r.kt)("a",{parentName:"p",href:"/idn/docs/transforms/operations/concatenation"},"Concat transform")," and passing its output as an input to another ",(0,r.kt)("a",{parentName:"p",href:"/idn/docs/transforms/operations/lower"},"Lower transform"),". If the inputs ",(0,r.kt)("inlineCode",{parentName:"p"},"Foo")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Bar")," were passed into the transforms, the ultimate output would be ",(0,r.kt)("inlineCode",{parentName:"p"},"foobar"),", concatenated and in lowercase."),(0,r.kt)("div",{align:"center"},(0,r.kt)("mermaid",{value:"flowchart LR\n  id1(Foo) ====> id2[Concat\\nTransform] ====> id3[Lower\\nTransform] ====> id4(foobar)\n  id5(Bar) ====> id2[Concat\\nTransform]"})),(0,r.kt)("p",null,"There is no hard limit for the number of transforms that can be nested. However, the more transforms applied, the more complex the nested transform will be, which can make it difficult to understand and maintain."),(0,r.kt)("h2",{id:"configuring-transform-behavior"},"Configuring Transform Behavior"),(0,r.kt)("p",null,"Some transforms can specify an attributes map that configures the transform behavior. Each transform type has different configuration attributes and different uses. To better understand what is configurable per transform, refer to the Transform Types section and the associated Transform guide(s) that cover each transform."),(0,r.kt)("p",null,"It is possible to extend the earlier complex nested transform example. If a Replace transform, which replaces certain strings with replacement text, were added, and the transform were configured to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"Bar")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"Baz")," the output would be added as an input to the Concat and Lower transforms:"),(0,r.kt)("div",{align:"center"},(0,r.kt)("mermaid",{value:"flowchart LR\n  id1(Foo) ====> id2[Concat\\nTransform] ====> id3[Lower\\nTransform] ====> id4(foobaz)\n  id5(Bar) ====> id6[Replace Transform\\n Bar:Baz] ====> id2[Concat\\nTransform]"})),(0,r.kt)("p",null,"The output of the Replace transform would be ",(0,r.kt)("inlineCode",{parentName:"p"},"Baz")," which is then passed as an input to the Concat transform along with ",(0,r.kt)("inlineCode",{parentName:"p"},"Foo")," producing an output of ",(0,r.kt)("inlineCode",{parentName:"p"},"FooBaz"),". This is then passed as an input into the Lower transform, producing a final output of ",(0,r.kt)("inlineCode",{parentName:"p"},"foobaz"),"."),(0,r.kt)("h2",{id:"transform-syntax"},"Transform Syntax"),(0,r.kt)("p",null,"Transforms are JSON objects. Prior to this, the transforms have been shown as flows of building blocks to help illustrate basic transform ideas. However at the simplest level, a transform looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Lowercase Department",\n  "type": "lower",\n  "attributes": {\n    "transform-attribute-1": "attribute-1-value",\n    "transform-attribute-2": "attribute-2-value"\n  }\n}\n')),(0,r.kt)("p",null,"There are three main components of a transform object:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"name")," - This specifies the name of the transform. It refers to a transform in the IdentityNow API or User Interface (UI). Only provide a name on the root-level transform. Nested transforms do not have names.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"type")," - This specifies the transform type, which ultimately determines the transform's behavior.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"attributes")," - This specifies any attributes or configurations for controlling how the transform works. As mentioned earlier in ",(0,r.kt)("a",{parentName:"p",href:"#configuring-transform-behavior"},"Configuring Transform Behavior"),", each transform type has different sets of attributes available."))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"When uploading a transform to IdentityNow it cannot exceed 400KB.")),(0,r.kt)("h2",{id:"template-engine"},"Template Engine"),(0,r.kt)("p",null,"Seaspray ships with the Apache Velocity template engine that allows a transform to reference, transform, and render values passed into the transform context. Every string value in a Seaspray transform can contain templated text and will run through the template engine."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"In the following string, the text ",(0,r.kt)("inlineCode",{parentName:"p"},"$firstName")," is replaced by the value of firstName in the template context. The same goes for ",(0,r.kt)("inlineCode",{parentName:"p"},"$lastName"),"."),(0,r.kt)("p",null,"If $firstName=John and $lastName=Doe then the string ",(0,r.kt)("inlineCode",{parentName:"p"},"$firstName.$lastName"),"would render as",(0,r.kt)("inlineCode",{parentName:"p"},"John.Doe"),"."),(0,r.kt)("h3",{id:"identity-attribute-context"},"Identity Attribute Context"),(0,r.kt)("p",null,"The following variables are available to the Apache Velocity template engine when a transform is used to source an identity attribute."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"identity"),(0,r.kt)("td",{parentName:"tr",align:null},"sailpoint.object.Identity"),(0,r.kt)("td",{parentName:"tr",align:null},"This is the identity the attribute promotion is performed on.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attributeDefinition"),(0,r.kt)("td",{parentName:"tr",align:null},"sailpoint.object.ObjectAttribute"),(0,r.kt)("td",{parentName:"tr",align:null},"This is the definition of the attribute being promoted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oldValue"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"This is the attribute's previous value.")))),(0,r.kt)("h3",{id:"account-profile-context"},"Account Profile Context"),(0,r.kt)("p",null,"The following variables are available to the Apache Velocity template engine when a transform is used in an account profile."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"field"),(0,r.kt)("td",{parentName:"tr",align:null},"sailpoint.object.Field"),(0,r.kt)("td",{parentName:"tr",align:null},"This is the field definition backing the account profile attribute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"identity"),(0,r.kt)("td",{parentName:"tr",align:null},"sailpoint.object.Identity"),(0,r.kt)("td",{parentName:"tr",align:null},"This is the identity the account profile is generating for.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"application"),(0,r.kt)("td",{parentName:"tr",align:null},"sailpoint.object.Application"),(0,r.kt)("td",{parentName:"tr",align:null},"This is the application backing the source that owns the account profile.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"current"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"This is the attribute's current value.")))),(0,r.kt)("h2",{id:"implicit-vs-explicit-input"},"Implicit vs Explicit Input"),(0,r.kt)("p",null,"A special configuration attribute available to all transforms is input. If the input attribute is not specified, this is referred to as implicit input, and the system determines the input based on what is configured. If the input attribute is specified, then this is referred to as explicit input, and the system's input is ignored in favor of whatever the transform explicitly specifies. A good way to understand this concept is to walk through an example. Imagine that IdentityNow has the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An account on Source 1 with department set to ",(0,r.kt)("inlineCode",{parentName:"li"},"Services"),"."),(0,r.kt)("li",{parentName:"ul"},"An account on Source 2 with department set to ",(0,r.kt)("inlineCode",{parentName:"li"},"Engineering"),".")),(0,r.kt)("p",null,"The following two examples explain how a transform with an implicit or explicit input would work with those sources."),(0,r.kt)("h3",{id:"implicit-input"},"Implicit Input"),(0,r.kt)("p",null,"An identity profile is configured the following way:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configuring Transform Behavior 2",src:n(84287).Z,width:"1157",height:"162"})),(0,r.kt)("p",null,'As an example, the "Lowercase Department" transform being used is written the following way:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Lowercase Department",\n  "type": "lower",\n  "attributes": {}\n}\n')),(0,r.kt)("p",null,"Notice that the attributes has no input. This is an implicit input example. The transform uses the input provided by the attribute you mapped on the identity profile."),(0,r.kt)("p",null,"In this example, the transform would produce ",(0,r.kt)("inlineCode",{parentName:"p"},"services")," when the source is aggregated because Source 1 is providing a department of ",(0,r.kt)("inlineCode",{parentName:"p"},"Services")," which the transform then lowercases."),(0,r.kt)("h3",{id:"explicit-input"},"Explicit Input"),(0,r.kt)("p",null,"As an example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Lowercase Department")," has been changed the following way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Lowercase Department",\n  "type": "lower",\n  "attributes": {\n    "input": {\n      "type": "accountAttribute",\n      "attributes": {\n        "attributeName": "department",\n        "sourceName": "Source 2"\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Notice that there is an ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," in the attributes. This is an explicit input example. The transform uses the value Source 2 provides for the ",(0,r.kt)("inlineCode",{parentName:"p"},"department")," attribute, ignoring your configuration in the identity profile."),(0,r.kt)("p",null,'In this example, the transform would produce "engineering" because Source 2 is providing a department of ',(0,r.kt)("inlineCode",{parentName:"p"},"Engineering")," which the transform then lowercases. Though the system is still providing an implicit input of Source 1's department attribute, the transform ignores this and uses the explicit input specified as Source 2's department attribute."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This is also an example of a nested transform.")),(0,r.kt)("h3",{id:"account-transforms"},"Account Transforms"),(0,r.kt)("p",null,"Account attribute transforms are configured on the account create profiles. They determine the templates for new accounts created during provisioning events."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"These transforms are configured separately from the transforms applied via the identity profile mappings tab.")),(0,r.kt)("h4",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"These can be configured in IdentityNow by going to ",(0,r.kt)("strong",{parentName:"p"},"Admin")," > ",(0,r.kt)("strong",{parentName:"p"},"Sources")," > (A Source) > ",(0,r.kt)("strong",{parentName:"p"},"Accounts")," (tab) > ",(0,r.kt)("strong",{parentName:"p"},"Create Account"),"."),(0,r.kt)("p",null,"The available options on this page are constructed as transforms behind the scenes. For example, the identity attribute mapping choice is saved as an ",(0,r.kt)("a",{parentName:"p",href:"/idn/docs/transforms/operations/identity-attribute"},"identity attribute transform")," definition within the saved create profile."),(0,r.kt)("p",null,"These can also be configured with IdentityNow REST APIs. You can define any kind of transform you want for any field in the create profile policy, to calculate account attributes in ways beyond what the UI offers. See ",(0,r.kt)("a",{parentName:"p",href:"/idn/docs/transforms/guides/transforms-in-provisioning-policies"},"Transforms in Provisioning Policies"),"."),(0,r.kt)("p",null,"For more information on the IdentityNow REST API endpoints used to managed transform objects in APIs, refer to ",(0,r.kt)("a",{parentName:"p",href:"/idn/api/v3/transforms"},"IdentityNow Transform REST APIs"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For details about authentication against REST APIs, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/idn/api/authentication"},"authentication docs"),".")),(0,r.kt)("h4",{id:"testing-transforms-on-account-create"},"Testing Transforms on Account Create"),(0,r.kt)("p",null,"To test a transform for an account create profile, you must generate a new account creation provisioning event. This involves granting access to an identity who does not already have an account on this source; an account is created as a byproduct of the access assignment. This can be initiated with access request or even role assignment."),(0,r.kt)("h4",{id:"applying-transforms-on-account-create"},"Applying Transforms on Account Create"),(0,r.kt)("p",null,"Once the transforms are saved to the account profile, they are automatically applied for any subsequent provisioning events."),(0,r.kt)("h2",{id:"testing-transforms"},"Testing Transforms"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Testing Transforms in Identity Profile Mappings")),(0,r.kt)("p",null,"To test a transform for identity data, go to ",(0,r.kt)("strong",{parentName:"p"},"Identities")," > ",(0,r.kt)("strong",{parentName:"p"},"Identity Profiles")," and select ",(0,r.kt)("strong",{parentName:"p"},"Mappings"),". Select the transform to map one of your identity attributes, select ",(0,r.kt)("strong",{parentName:"p"},"Save"),", and preview your identity data."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Testing Transforms for Account Attributes")),(0,r.kt)("p",null,"To test a transform for account data, you must provision a new account on that source. For example, you can create an access request that would result in a new account on that source, or you can assign a new role."),(0,r.kt)("h2",{id:"transform-best-practices"},"Transform Best Practices"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Designing Complex Transforms")," - Start with small transform ",(0,r.kt)("em",{parentName:"p"},"building blocks")," and add to them. It can be helpful to diagram out the inputs and outputs if you are using many transforms.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"JSON Editor")," - Because transforms are JSON objects, it is recommended that you use a good JSON editor. Atom, Sublime Text, and Microsoft Code work well because they have JSON formatting and plugins that can do JSON validation, completion, formatting, and folding. This is very useful for large complex JSON objects.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Leverage Examples")," - Many implementations use similar sets of transforms, and a lot of common solutions can be found in examples. Feel free to share your own transform examples on the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/discuss"},"Developer Community forum"),"!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Same Problem, Multiple Solutions")," - There can be multiple ways to solve the same problem, but use the solution that makes the most sense to your implementation and is easiest to administer and understand.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Encapsulate Repetition")," - If you are copying and pasting the same transforms over and over, it can be useful to make a transform a standalone transform and make other transforms reference it by using the reference type.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Plan for Bad Data")," - Data will not always be perfect, so plan for data failures and try to ensure transforms still produce workable results in case data is missing, malformed, or there are incorrect values."))),(0,r.kt)("h2",{id:"transforms-vs-rules"},"Transforms vs. Rules"),(0,r.kt)("p",null,"Sometimes it can be difficult to decide when to implement a transform and when to implement a rule. Both transforms and rules can calculate values for identity or account attributes."),(0,r.kt)("p",null,"Despite their functional similarity, transforms and rules have very different implementations. Transforms are JSON-based configurations, editable with IdentityNow's transform REST APIs. Rules are implemented with code (typically ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/beanshell/beanshell"},"BeanShell"),", a Java-like syntax), so they must follow the ",(0,r.kt)("a",{parentName:"p",href:"https://community.sailpoint.com/docs/DOC-12122"},"IdentityNow Rule Guidelines"),", and they require SailPoint to be reviewed and installed into the tenant. Rules, however, can do things that transforms cannot in some cases."),(0,r.kt)("p",null,"Because transforms have easier and more accessible implementations, they are generally recommended. With transforms, any IdentityNow administrator can view, create, edit, and delete transforms directly with REST API without SailPoint involvement."),(0,r.kt)("p",null,"If something cannot be done with a transform, then consider using a rule. When you are transitioning from a transform to a rule, you must take special consideration when you decide where the rule executes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you are calculating identity attributes, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://community.sailpoint.com/docs/DOC-12616"},"Identity Attribute rules")," instead of identity transforms.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you are calculating account attributes (during provisioning), you can use ",(0,r.kt)("a",{parentName:"p",href:"https://community.sailpoint.com/docs/DOC-12645"},"Attribute Generator rules")," instead of account transforms.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All rules you build must follow the ",(0,r.kt)("a",{parentName:"p",href:"https://community.sailpoint.com/docs/DOC-12122"},"IdentityNow Rule Guidelines"),"."))),(0,r.kt)("p",null,"If you use a rule, make note of it for administrative purposes. The best practice is to check in these types of artifacts into some sort of version control (e.g., GitHub, et. Al.) for records."))}u.isMDXComponent=!0},84287:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/configuring_transform_behavior_2-573ec9d4460bb7dc496a2ba9366fa386.png"}}]);
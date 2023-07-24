"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[17261],{36884:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=t(87462),i=(t(67294),t(3905));const r={id:"error-handling",title:"Error Handling",pagination_label:"Error Handling",sidebar_label:"Error Handling",sidebar_position:3,sidebar_class_name:"errorHandling",keywords:["connectivity","connectors","error handling"],description:"If the code fails due to validation issues, connectivity, or configuration errors, you can handle the error and provide the user with information about what went wrong.",slug:"/docs/saas-connectivity/in-depth/error-handling",tags:["Connectivity"]},a=void 0,s={unversionedId:"docs/identity-now/saas-connectivity/in-depth/error-handling",id:"docs/identity-now/saas-connectivity/in-depth/error-handling",title:"Error Handling",description:"If the code fails due to validation issues, connectivity, or configuration errors, you can handle the error and provide the user with information about what went wrong.",source:"@site/products/idn/docs/identity-now/saas-connectivity/in-depth/error-handling.md",sourceDirName:"docs/identity-now/saas-connectivity/in-depth",slug:"/docs/saas-connectivity/in-depth/error-handling",permalink:"/idn/docs/saas-connectivity/in-depth/error-handling",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/in-depth/error-handling.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"}],version:"current",lastUpdatedBy:"Colin McKibben",lastUpdatedAt:1690207305,formattedLastUpdatedAt:"Jul 24, 2023",sidebarPosition:3,frontMatter:{id:"error-handling",title:"Error Handling",pagination_label:"Error Handling",sidebar_label:"Error Handling",sidebar_position:3,sidebar_class_name:"errorHandling",keywords:["connectivity","connectors","error handling"],description:"If the code fails due to validation issues, connectivity, or configuration errors, you can handle the error and provide the user with information about what went wrong.",slug:"/docs/saas-connectivity/in-depth/error-handling",tags:["Connectivity"]},sidebar:"idnDocs",previous:{title:"Debugging",permalink:"/idn/docs/saas-connectivity/in-depth/debugging"},next:{title:"Linting",permalink:"/idn/docs/saas-connectivity/in-depth/linting"}},c={},l=[{value:"Connector Errors",id:"connector-errors",level:2},{value:"Not Found Error Type",id:"not-found-error-type",level:2},{value:"Custom Errors",id:"custom-errors",level:2},{value:"Recommended custom exceptions and examples of when to use them",id:"recommended-custom-exceptions-and-examples-of-when-to-use-them",level:2},{value:"InvalidConfigurationException",id:"invalidconfigurationexception",level:4},{value:"InsufficientPermissionException",id:"insufficientpermissionexception",level:4},{value:"InvalidRequestException",id:"invalidrequestexception",level:4},{value:"ObjectAlreadyExistsException",id:"objectalreadyexistsexception",level:4},{value:"InvalidResponseException",id:"invalidresponseexception",level:4},{value:"TimeoutException",id:"timeoutexception",level:4}],d={toc:l};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If the code fails due to validation issues, connectivity or configuration errors, you can handle the error and provide the user with information about what went wrong. Properly handled errors make it easier to debug and identify what happened in your connector when something goes wrong."),(0,i.kt)("h2",{id:"connector-errors"},"Connector Errors"),(0,i.kt)("p",null,"The connector SDK has a built-in ConnectorError to use in your project to handle most generic errors:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts"},"airtable.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { ConnectorError } from \"@sailpoint/connector-sdk\"\n\n...\n\nexport class AirtableClient {\n\n...\n\n    async getAllAccounts(): Promise<AirtableAccount[]> {\n        return this.airTableBase('Users').select({\n            view: 'Grid view'\n        }).firstPage().then(records => {\n            const recordArray: Array<AirtableAccount> = []\n            for (const record of records) {\n                recordArray.push(AirtableAccount.createWithRecords(record))\n            }\n            return recordArray\n        }).catch(err => {\n            throw new ConnectorError('error while getting accounts: ' + err)\n        })\n    }\n")),(0,i.kt)("h2",{id:"not-found-error-type"},"Not Found Error Type"),(0,i.kt)("p",null,'The connector SDK offers a special error type of "Not Found". This error signals to IDN that the specific account is not in the source system. If the account should be in the source system, IDN will then call the connector ',(0,i.kt)("inlineCode",{parentName:"p"},"std:account:create")," command to create the account. "),(0,i.kt)("p",null,"Here is an example: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'.stdAccountUpdate(async (context: Context, input: StdAccountUpdateInput, res: Response<StdAccountUpdateOutput>) => {\n    const account = await myClient.getAccount(input.identity)\n    if (!account) {\n        // account was not found, but identity now has the account and expects it to be there! \n        // Send an error message to IdentityNow so the account is automatically created\n        if (!account) {\n            throw new ConnectorError("account is not found", ConnectorErrorType.NotFound)\n        }\n    }\n\n    ... perform normal account update logic below\n\n')),(0,i.kt)("h2",{id:"custom-errors"},"Custom Errors"),(0,i.kt)("p",null,"You can also create custom errors and use them in your code to give more meaningful and specific responses to error states. For example, when you are configuring your connector, it is recommended that you throw an ",(0,i.kt)("inlineCode",{parentName:"p"},"InvalidConfigurationError")," instead of a generic ConnectorError. To do this, create the custom error:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/errors/invalid-configuration-error.ts"},"invalid-configuration-error.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import {ConnectorError, ConnectorErrorType} from '@sailpoint/connector-sdk';\n\n/**\n * Thrown when an application missing configuration during initialization\n */\n\nexport class InvalidConfigurationException extends ConnectorError {\n  /**\n   * Constructor\n   * @param message Error message\n   * @param type ConnectorErrorType they type of error\n   */\n  constructor(message: string, type?: ConnectorErrorType) {\n    super(message, type);\n    this.name = 'InvalidConfigurationException';\n  }\n}\n")),(0,i.kt)("p",null,"Then throw the error in your code:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts"},"airtable.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { InvalidConfigurationException } from \"./errors/invalid-configuration-error\"\n\nexport class AirtableClient {\n    private readonly airTableBase: Airtable.Base\n    constructor(config: any) {\n        // Fetch necessary properties from config.\n        // Following properties actually do not exist in the config -- it just serves as an example.\n        if (config.apiKey == null) {\n            throw new InvalidConfigurationException('token must be provided from config')\n        }\n        if (config.airtableBase == null) {\n            throw new InvalidConfigurationException('airtableBase base id needed')\n        }\n        Airtable.configure({apiKey: config.apiKey})\n        this.airTableBase = Airtable.base(config.airtableBase)\n    }\n\n    ...\n\n}\n")),(0,i.kt)("h2",{id:"recommended-custom-exceptions-and-examples-of-when-to-use-them"},"Recommended custom exceptions and examples of when to use them"),(0,i.kt)("h4",{id:"invalidconfigurationexception"},"InvalidConfigurationException"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use this exception during any operation if the connector requires a certain configuration to connect to the managed-system, but the configuration is either faulty or not provided. This could happen before sending a request to the managed system.")),(0,i.kt)("h4",{id:"insufficientpermissionexception"},"InsufficientPermissionException"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use this exception during any operation if the connector gets a known managed system exception indicating a lack of permission. ")),(0,i.kt)("h4",{id:"invalidrequestexception"},"InvalidRequestException"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use this exception during any operation if the connector is creating messages to be sent to the managed system but is failing to create a message. This could happen before sending a request to the managed system.")),(0,i.kt)("h4",{id:"objectalreadyexistsexception"},"ObjectAlreadyExistsException"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use this exception during the provisioning operation of the type create(only) if the connector is trying to create an entity that already exists on the managed system.")),(0,i.kt)("h4",{id:"invalidresponseexception"},"InvalidResponseException"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use this exception during aggregation or in the getObject when the connector is unable to parse data received from managed system. This could happen if something fails when converting a managed system response to a ResourceObject.")),(0,i.kt)("h4",{id:"timeoutexception"},"TimeoutException"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This is intended for cases in which the connector receives timeout related error/exceptions from the managed system.")))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunksmithy4s=self.webpackChunksmithy4s||[]).push([[4027],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>y});var n=i(7294);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,s=function(e,t){if(null==e)return{};var i,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var h=n.createContext({}),l=function(e){var t=n.useContext(h),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=l(e.components);return n.createElement(h.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,s=e.mdxType,o=e.originalType,h=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=l(i),d=s,y=u["".concat(h,".").concat(d)]||u[d]||m[d]||o;return i?n.createElement(y,a(a({ref:t},c),{},{components:i})):n.createElement(y,a({ref:t},c))}));function y(e,t){var i=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=i.length,a=new Array(o);a[0]=d;var r={};for(var h in t)hasOwnProperty.call(t,h)&&(r[h]=t[h]);r.originalType=e,r[u]="string"==typeof e?e:s,a[1]=r;for(var l=2;l<o;l++)a[l]=i[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},4252:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=i(7462),s=(i(7294),i(3905));const o={sidebar_label:"Testing",title:"Testing Smithy4s Applications"},a=void 0,r={unversionedId:"guides/testing",id:"guides/testing",title:"Testing Smithy4s Applications",description:"In this guide, we will give you some guiding principles and other things to consider when testing Smithy4s applications.",source:"@site/../docs/target/jvm-2.13/mdoc/06-guides/testing.md",sourceDirName:"06-guides",slug:"/guides/testing",permalink:"/smithy4s/docs/guides/testing",draft:!1,editUrl:"https://github.com/disneystreaming/smithy4s/edit/main/modules/docs/src/06-guides/testing.md",tags:[],version:"current",frontMatter:{sidebar_label:"Testing",title:"Testing Smithy4s Applications"},sidebar:"tutorialSidebar",previous:{title:"Smithy4s Transformations",permalink:"/smithy4s/docs/guides/smithy4s-transformations"},next:{title:"Credits",permalink:"/smithy4s/docs/credits"}},h={},l=[{value:"What Smithy4s Does",id:"what-smithy4s-does",level:2},{value:"How we Test Smithy4s",id:"how-we-test-smithy4s",level:2},{value:"Testing your API",id:"testing-your-api",level:2},{value:"Schema and Contract Testing",id:"schema-and-contract-testing",level:2},{value:"TL;DR",id:"tldr",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...i}=e;return(0,s.kt)(u,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In this guide, we will give you some guiding principles and other things to consider when testing Smithy4s applications."),(0,s.kt)("h2",{id:"what-smithy4s-does"},"What Smithy4s Does"),(0,s.kt)("p",null,"For starters, let's briefly cover what it is that Smithy4s does. At a high level, Smithy4s takes your Smithy model and generates Scala code based on that model. The model is essentially just a Scala representation of the Smithy model. The generated code ",(0,s.kt)("em",{parentName:"p"},"does not")," contain any logic for any specific library such as http4s or jsoniter. Instead, it contains abstractions that Smithy4s itself defines that interpreters can be based on. This means that the generated code is not coupled to any library (other than Smithy4s itself). The interpreters that we have created in Smithy4s will then take the generated code and use it to power, for example, an HTTP service that uses http4s and jsoniter."),(0,s.kt)("h2",{id:"how-we-test-smithy4s"},"How we Test Smithy4s"),(0,s.kt)("p",null,"It is important to understand how Smithy4s works so you can begin to conceptualize how we test Smithy4s and its interpreters. We will not go into much detail on this point, but the main ways we test these are through:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Unit tests on the interpreters. These tests isolate the interpreters directly and test their functionality. An example of this is the Jsoniter interpreter. We are able to isolate its functionality and test that it is working as intended."),(0,s.kt)("li",{parentName:"ul"},"Protocol tests. These tests are auto-generated from Smithy-defined traits. They are sort of like integration tests in the sense that they test all the relevant layers of a smithy4s application by connecting, for example, the HTTP layer with the JSON serialization layer. The main goal of these tests is to make sure that Smithy4s is handling edge cases properly and overall conforms to the protocol(s) we have defined. For more on protocol testing, you can check out the ",(0,s.kt)("a",{parentName:"li",href:"https://smithy.io/2.0/additional-specs/http-protocol-compliance-tests.html"},"Smithy documentation"),".")),(0,s.kt)("h2",{id:"testing-your-api"},"Testing your API"),(0,s.kt)("p",null,"Now the question that remains is what all of this means for your applications which use Smithy4s. Our basic recommendation is going to come down to: test what you feel needs to be tested, but make sure you understand ",(0,s.kt)("em",{parentName:"p"},"what")," it is that you are testing."),(0,s.kt)("p",null,"For example, we would not generally recommend that you test the Smithy4s interpreters in your code (for example the http4s routes that you get when you use ",(0,s.kt)("inlineCode",{parentName:"p"},"SimpleRestJsonBuilder"),"). One of the main appeals of Smithy4s is that it abstracts away concerns such as request routing and the encoding/decoding of payloads. This is why we strive to be thorough in our testing: so you don't need to worry about testing whether or not Smithy4s is doing its job. That being said, if you don't trust Smithy4s and want to test it anyway, that is totally fine too. Ultimately Smithy4s as a project will benefit if you do test it and find any bugs that we can then fix. So in any case, we are supportive of your decision."),(0,s.kt)("p",null,"Another reason you may think of testing the Smithy4s interpreters is to make sure that their implementation, such as the way they encode something in JSON, lines up with some requirements that you have. This is fair enough, but realize that the thing you are really testing here is your understanding of how Smithy4s works. That may be worth your while, or it may not be. The decision is ultimately up to you. If this is your reason for testing, you may want to explore contract-based testing as outlined below."),(0,s.kt)("p",null,"Note that if you are going to test Smithy4s interpreter behaviors, you should ",(0,s.kt)("em",{parentName:"p"},"not")," use Smithy4s to test them. We have occasionally seen the pattern where someone uses a Smithy4s client to test a Smithy4s server. This type of testing has very little benefit since much of the same logic is used for each of these interpreters. This means that the interpreters you are testing could both have the same bug and your tests would not catch it."),(0,s.kt)("p",null,"On the other hand, we do recommend that you test the implementation of your service. For example, if Smithy4s generates a service interface called ",(0,s.kt)("inlineCode",{parentName:"p"},"HelloWorldService"),", you will implement that interface and place your business logic within it. We recommend that you test all of your business logic since this is outside the scope of what Smithy4s controls."),(0,s.kt)("h2",{id:"schema-and-contract-testing"},"Schema and Contract Testing"),(0,s.kt)("p",null,"Contract testing is a form of testing that checks that the contracts which services and clients agree upon are stable over time. Note that schema-based tests and contract-based test are not the same thing. Schema tests are concerned with checking that the data sent and received conforms to a specified schema or schemas. An example where contract testing differs is, for example, a client may expect a certain error response to be returned whenever certain conditions are met in the request. A schema can capture what errors may possibly be sent, but it will not capture which error should be triggered by a specific request."),(0,s.kt)("p",null,"For your specific use case, you may have a need to employ schema-based and/or contract-based testing. Schema based testing would be one way of checking that schema changes over time do not impact existing clients. Contract-based testing could accomplish this same thing and more. However, contract based testing is usually more difficult to implement than schema-based testing so you may find it not to be worth it for your use case. In either case, remember to make sure you know ",(0,s.kt)("em",{parentName:"p"},"what")," it is you are testing and what you are not."),(0,s.kt)("h2",{id:"tldr"},"TL;DR"),(0,s.kt)("p",null,"Ultimately our recommendation is that you unit test all of your business logic as well as any custom implementations you have created on top of Smithy4s. You should be able to leave the rest of the unit testing up to us. However, your requirements, concerns, and experience may vary and we encourage you to do whatever will help you write the best software."),(0,s.kt)("p",null,"Depending on your use case, you may find value in Schema or Contract testing. These methods can help you make sure your API is stable for consumers over time."))}m.isMDXComponent=!0}}]);
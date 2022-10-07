"use strict";(self.webpackChunksmithy4s=self.webpackChunksmithy4s||[]).push([[444],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=s,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,r[1]=a;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},674:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return m}});var o=n(7462),s=n(3366),i=(n(7294),n(3905)),r=["components"],a={sidebar_label:"Compliance Tests",title:"Compliance Tests"},l=void 0,p={unversionedId:"protocols/compliance-tests",id:"protocols/compliance-tests",title:"Compliance Tests",description:"The Smithy prelude has support for compliance testing for services that use HTTP as their protocol. It is built on top of regular traits, you can read more about it over here.",source:"@site/../docs/target/jvm-2.13/mdoc/03-protocols/05-compliance-tests.md",sourceDirName:"03-protocols",slug:"/protocols/compliance-tests",permalink:"/smithy4s/docs/protocols/compliance-tests",draft:!1,editUrl:"https://github.com/disneystreaming/smithy4s/edit/main/modules/docs/src/03-protocols/05-compliance-tests.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Compliance Tests",title:"Compliance Tests"},sidebar:"tutorialSidebar",previous:{title:"Deriving CLIs",permalink:"/smithy4s/docs/protocols/deriving-cli"},next:{title:"Customisation",permalink:"/smithy4s/docs/codegen/customisation"}},c={},m=[{value:"Example specification",id:"example-specification",level:2},{value:"Testing the protocol",id:"testing-the-protocol",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Smithy prelude has support for compliance testing for services that use ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP")," as their protocol. It is built on top of regular traits, you can read more about it ",(0,i.kt)("a",{parentName:"p",href:"https://awslabs.github.io/smithy/2.0/additional-specs/http-protocol-compliance-tests.html"},"over here"),"."),(0,i.kt)("p",null,"Basically, you annotate operations and/or structures (that depends on the type of test being defined) and protocol implementors can generate tests cases to ensure their implementation behaves correctly."),(0,i.kt)("p",null,"Smithy4s publishes a module that you can use to write compliance test if you're implementing a protocol. Add the following to your dependencies if you use ",(0,i.kt)("inlineCode",{parentName:"p"},"sbt"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'"com.disneystreaming.smithy4s" %% "smithy4s-compliance-tests" % smithy4sVersion.value\n')),(0,i.kt)("p",null,"If you use ",(0,i.kt)("inlineCode",{parentName:"p"},"mill"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'ivy"com.disneystreaming.smithy4s::smithy4s-compliance-tests:${smithy4sVersion()}",\n')),(0,i.kt)("p",null,"The rest of this document will demonstrate how to write a Smithy specification that specify HTTP compliance tests, and then how to use the module mentioned above to run the tests."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: currently, only ",(0,i.kt)("inlineCode",{parentName:"em"},"httprequesttests-trait")," are supported. other traits support will be integrated soon.")),(0,i.kt)("h2",{id:"example-specification"},"Example specification"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'$version: "2"\n\nnamespace smithy4s.hello\n\nuse smithy4s.api#simpleRestJson\nuse smithy.test#httpRequestTests\n\n@simpleRestJson\nservice HelloWorldService {\n  version: "1.0.0",\n  operations: [Hello]\n}\n@httpRequestTests([\n    {\n        id: "hello-success"\n        protocol: simpleRestJson\n        method: "POST"\n        uri: "/World"\n        params: { name: "World" }\n    },\n    {\n        id: "hello-fails"\n        protocol: simpleRestJson\n        method: "POST"\n        uri: "/fail"\n        params: { name: "World" }\n    }\n])\n@http(method: "POST", uri: "/{name}", code: 200)\noperation Hello {\n  input := {\n    @httpLabel\n    @required\n    name: String\n  },\n  output := {\n    @required\n    message: String\n  }\n}\n')),(0,i.kt)("p",null,"We have a very simple specification: one operation with basic input and output shapes. We've added a ",(0,i.kt)("inlineCode",{parentName:"p"},"httpRequestTests")," to define a compliance test for protocol implementors."),(0,i.kt)("h2",{id:"testing-the-protocol"},"Testing the protocol"),(0,i.kt)("p",null,"The service in the specification is annotated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"simpleRestJson")," protocol definition. We'll use the ",(0,i.kt)("inlineCode",{parentName:"p"},"compliance-tests")," module to make sure this protocol can handle such an operation."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: the following code and the ",(0,i.kt)("inlineCode",{parentName:"em"},"compliance-tests")," module do not depend on a specific test frameworks. If you want to hook it into your test framework, it is easy to do so but it's outside the scope of this document. Refer to ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/disneystreaming/smithy4s/blob/932e169b48c0df9e53601004037ef1dc888ecab0/modules/compliance-tests/test/src/smithy4s/compliancetests/WeaverComplianceTest.scala"},"this example")," to see how we did it for ",(0,i.kt)("inlineCode",{parentName:"em"},"Weaver")," in this project.")),(0,i.kt)("p",null,"First, some imports and an implicit ",(0,i.kt)("inlineCode",{parentName:"p"},"CompatEffect")," that is required because we support both cats-effect 2 and 3."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import cats.effect._\nimport org.http4s._\nimport org.http4s.client.Client\nimport smithy4s.compliancetests._\nimport smithy4s.example._\nimport smithy4s.http4s._\n")),(0,i.kt)("p",null,"Then, you can create and instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientHttpComplianceTestCase")," while selecting the protocol to use and the service to test:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val testGenerator = new ClientHttpComplianceTestCase[\n    smithy4s.api.SimpleRestJson,\n    HelloWorldServiceGen,\n    HelloWorldServiceOperation\n  ](\n    smithy4s.api.SimpleRestJson()\n  ) {\n    import org.http4s.implicits._\n    private val baseUri = uri"http://localhost/"\n    def getClient(app: HttpApp[IO]): Resource[IO, HelloWorldService[IO]] =\n      SimpleRestJsonBuilder(HelloWorldServiceGen)\n        .client(Client.fromHttpApp(app))\n        .uri(baseUri)\n        .resource\n  }\n\nval tests: List[ComplianceTest[IO]] = testGenerator.allClientTests()\n')),(0,i.kt)("p",null,"Now, you can iterate over the test cases and do what you want. This is where you would hook in the test framework of your choice, but in the following example, we're just going to print the result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import cats.syntax.traverse._\nimport cats.effect.unsafe.implicits.global\n\nval runTests: IO[List[String]] = tests\n  .map { tc =>\n    tc.run.map {\n      case Left(value) =>\n        s"Failed ${tc.name} with the following message: $value"\n      case Right(_) => s"Success ${tc.name}"\n\n    }\n  }\n  .sequence\n')),(0,i.kt)("p",null,"Will produce the following when executed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Success smithy4s.example#Hello(client|request): helloSuccess\nFailed smithy4s.example#Hello(client|request): helloFails with the following message: Actual value: http://localhost/World was not equal to http://localhost/fail.\n")))}d.isMDXComponent=!0}}]);
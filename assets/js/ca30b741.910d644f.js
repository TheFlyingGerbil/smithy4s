"use strict";(self.webpackChunksmithy4s=self.webpackChunksmithy4s||[]).push([[433],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var r=i.createContext({}),c=function(e){var t=i.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(r.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,u=p["".concat(r,".").concat(m)]||p[m]||h[m]||s;return a?i.createElement(u,o(o({ref:t},d),{},{components:a})):i.createElement(u,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=p;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<s;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3354:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return r},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return h}});var i=a(7462),n=a(3366),s=(a(7294),a(3905)),o=["components"],l={sidebar_label:"Sharing specifications",title:"Sharing specifications"},r=void 0,c={unversionedId:"overview/sharing-specs",id:"overview/sharing-specs",title:"Sharing specifications",description:"The core Smithy tooling built by AWS makes it easy to load Smithy files that are packaged in jars. Smithy4s makes use of this feature to allow users",source:"@site/../docs/target/jvm-2.13/mdoc/01-overview/05-sharing-specs.md",sourceDirName:"01-overview",slug:"/overview/sharing-specs",permalink:"/smithy4s/docs/overview/sharing-specs",draft:!1,editUrl:"https://github.com/disneystreaming/smithy4s/edit/main/modules/docs/src/01-overview/05-sharing-specs.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Sharing specifications",title:"Sharing specifications"},sidebar:"tutorialSidebar",previous:{title:"Installation (CLI)",permalink:"/smithy4s/docs/overview/cli"},next:{title:"Smithy IDL",permalink:"/smithy4s/docs/the-smithy-idl/smithy-idl"}},d={},h=[{value:"Scala-agnostic context",id:"scala-agnostic-context",level:2},{value:"Smithy4s-context",id:"smithy4s-context",level:2},{value:"Disabling packaging of smithy files in jars",id:"disabling-packaging-of-smithy-files-in-jars",level:3},{value:"SBT",id:"sbt",level:4},{value:"Mill",id:"mill",level:4},{value:"Disabling the dependency on smithy files in sibling projects",id:"disabling-the-dependency-on-smithy-files-in-sibling-projects",level:3},{value:"SBT",id:"sbt-1",level:4},{value:"Mill",id:"mill-1",level:4},{value:"A word of warning",id:"a-word-of-warning",level:3},{value:"Artifacts containing only specifications",id:"artifacts-containing-only-specifications",level:2},{value:"SBT",id:"sbt-2",level:2},{value:"Mill",id:"mill-2",level:2},{value:"Consequence",id:"consequence",level:2},{value:"Artifacts containing both Smithy files and Smithy4s generated code",id:"artifacts-containing-both-smithy-files-and-smithy4s-generated-code",level:2},{value:"SBT",id:"sbt-3",level:3},{value:"Mill",id:"mill-3",level:3},{value:"Consequence",id:"consequence-1",level:3},{value:"Manually skipping (or including) namespaces during code-generation.",id:"manually-skipping-or-including-namespaces-during-code-generation",level:3},{value:"Note regarding credentials",id:"note-regarding-credentials",level:3}],p={toc:h};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The core Smithy tooling built by AWS makes it easy to load Smithy files that are packaged in jars. Smithy4s makes use of this feature to allow users\nto generate code from specs that may be found in Maven Central or other artifact repository."),(0,s.kt)("h1",{id:"packaging-specifications-in-order-to-share-them"},"Packaging specifications in order to share them"),(0,s.kt)("h2",{id:"scala-agnostic-context"},"Scala-agnostic context"),(0,s.kt)("p",null,"If you work in a context that is not primordially Scala-centric, you may want to package Smithy specification in Jars to make them easily accessible to various\ncode-generator tools. When that is the case, it is not-advised to use Smithy4s in order to package specifications, as the consuming applications/tools might not\nhave awareness of Scala. The best practice would likely be to have jars that would contain only Smithy files and potentially pure-java custom validators."),(0,s.kt)("p",null,"In order to package Smithy files in jars so that they can be easily consumed by tools, here are the core details:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"All smithy files should be stored under ",(0,s.kt)("inlineCode",{parentName:"li"},"src/main/resources/META-INF/smithy/")," (or in another resource directory, under ",(0,s.kt)("inlineCode",{parentName:"li"},"META-INF/smithy"),")"),(0,s.kt)("li",{parentName:"ol"},"A ",(0,s.kt)("inlineCode",{parentName:"li"},"manifest")," file should be stored under that same directory"),(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"manifest")," file should reference all the smithy files that can be found in that ",(0,s.kt)("inlineCode",{parentName:"li"},"META-INF/smithy")," directory."),(0,s.kt)("li",{parentName:"ol"},"If you are using SBT to do this, consider setting ",(0,s.kt)("inlineCode",{parentName:"li"},"autoScalaLibrary := false"),". See ",(0,s.kt)("a",{parentName:"li",href:"https://www.scala-sbt.org/1.x/docs/Configuring-Scala.html#Configuring+the+scala-library+dependency"},"here")," for more information."),(0,s.kt)("li",{parentName:"ol"},"If you are using Mill to do this, consider using a ",(0,s.kt)("inlineCode",{parentName:"li"},"JavaModule")," instead of a ",(0,s.kt)("inlineCode",{parentName:"li"},"ScalaModule"),".")),(0,s.kt)("p",null,"A couple examples:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/awslabs/smithy/tree/main/smithy-aws-apigateway-traits/src/main/resources/META-INF/smithy"},"smithy-aws-apigateway-traits")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/disneystreaming/smithy4s/tree/main/modules/protocol/resources/META-INF/smithy"},"smithy4s-protocols"))),(0,s.kt)("h2",{id:"smithy4s-context"},"Smithy4s-context"),(0,s.kt)("p",null,"The Smithy4s build-plugins we provide out of the box automatically package the local specifications (used for code-generations) in the resulting jars so that downstream projects (internal and external) can use them. When doing so, Smithy4s abides by the same structure described above."),(0,s.kt)("p",null,"Additionally, Smithy4s will also produce a smithy file containing a piece of metadata listing the namespaces for which code was generated. This way, downstream Smithy4s calls can automatically skip the already-generated namespaces."),(0,s.kt)("p",null,"This does mean two things:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Users do not have to manually indicate namespaces that were already generated."),(0,s.kt)("li",{parentName:"ol"},"When using multi-module builds, Smithy specifications in one module can depend on Smithy specifications in another module it depends on, without the user having to do anything bespoke for it. The resulting Scala code in the downstream module will simply depend on the one in the upstream module, as if it had been handwritten.")),(0,s.kt)("h3",{id:"disabling-packaging-of-smithy-files-in-jars"},"Disabling packaging of smithy files in jars"),(0,s.kt)("p",null,"If for some reason you want to disable the packaging of Smithy files in the jars created by your build tool, follow the instructions below."),(0,s.kt)("h4",{id:"sbt"},"SBT"),(0,s.kt)("p",null,"Add the following setting to your project"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},"Compile / smithy4sSmithyLibrary := false\n")),(0,s.kt)("h4",{id:"mill"},"Mill"),(0,s.kt)("p",null,"Override the following method in your module"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},"override def smithy4sSmithyLibrary = T(false)\n")),(0,s.kt)("h3",{id:"disabling-the-dependency-on-smithy-files-in-sibling-projects"},"Disabling the dependency on smithy files in sibling projects"),(0,s.kt)("p",null,"If your project has a multi-module build and some of the modules have the plugin enabled,\ndue to the behavior documented above, dependencies will need to be compiled before code can be generated."),(0,s.kt)("p",null,"Consider the following build (sbt syntax):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},"val a = project\nval b = project.enablePlugin(Smithy4sCodegenPlugin).dependsOn(a)\n")),(0,s.kt)("p",null,"Whenever you want to generate the Scala code in project ",(0,s.kt)("inlineCode",{parentName:"p"},"b"),", your build tool will trigger compilation of ",(0,s.kt)("inlineCode",{parentName:"p"},"a"),". This happens so that the Smithy files in the ",(0,s.kt)("inlineCode",{parentName:"p"},"a")," project get packaged into a JAR file - just like they normally are when you package the ",(0,s.kt)("inlineCode",{parentName:"p"},"a")," project otherwise (for ",(0,s.kt)("inlineCode",{parentName:"p"},"publishLocal"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"stage")," etc.)."),(0,s.kt)("p",null,"You can opt out of this behavior:"),(0,s.kt)("h4",{id:"sbt-1"},"SBT"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},"val b = project.settings(\n  Compile / smithy4sLocalJars := Nil\n)//...\n")),(0,s.kt)("h4",{id:"mill-1"},"Mill"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},"object b extends Smithy4sModule {\n  //...\n  override def smithy4sLocalJars = List.empty[PathRef]\n}\n")),(0,s.kt)("p",null,"This will not only remove the need for compilation (for the purposes of codegen), but also remove any visibility of the Smithy files in the ",(0,s.kt)("strong",{parentName:"p"},"local")," dependencies of your project (",(0,s.kt)("strong",{parentName:"p"},"local")," meaning they're defined in the same build)."),(0,s.kt)("p",null,"You can use the same setting, ",(0,s.kt)("inlineCode",{parentName:"p"},"smithy4sLocalJars"),", to add additional JARs containing Smithy specs - just keep in mind that remote dependencies (",(0,s.kt)("inlineCode",{parentName:"p"},"libraryDependencies"),") are added automatically!"),(0,s.kt)("h3",{id:"a-word-of-warning"},"A word of warning"),(0,s.kt)("p",null,'Smithy4s optimises for "correctness" as opposed to "compatibility." This means the generated Scala code aims at 1) being an accurate reflection of the Smithy models and 2) providing an idiomatic developer experience. This happens at the cost of a lack of guarantees around the binary compatibility of the generated code when the Schema evolves.'),(0,s.kt)("p",null,"When packaging Smithy specs in artifacts that contain Smithy4s-generated code, developers should keep that aspect in mind, and ensure that the version of Smithy4s that produced upstream artifacts is binary-compatible with the version that they use locally. Tools such as MiMa can help"),(0,s.kt)("p",null,"We cannot recommend treating Smithy4s-generated code as publishable library-material. Should you decide to do so, please exercise caution."),(0,s.kt)("h1",{id:"depending-on-shared-specifications"},"Depending on shared specifications"),(0,s.kt)("h2",{id:"artifacts-containing-only-specifications"},"Artifacts containing only specifications"),(0,s.kt)("p",null,"For instance, AWS publishes a number of ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/awslabs/smithy/tree/main/smithy-aws-apigateway-traits/src/main/resources/META-INF/smithy"},"api-gateway specific traits")," to ",(0,s.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/software.amazon.smithy/smithy-aws-apigateway-traits"},"Maven central")," (the shapes are defined there in a smithy-compliant Json file)."),(0,s.kt)("h2",{id:"sbt-2"},"SBT"),(0,s.kt)("p",null,"Using the SBT plugin, the ",(0,s.kt)("inlineCode",{parentName:"p"},"Smithy4s")," config object can be used to tag dependencies that Smithy4s should feed to the code generator."),(0,s.kt)("p",null,"You can declare your intent to depend on these smithy definitions as such:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "software.amazon.smithy" % "smithy-aws-iam-traits" % "1.14.1" % Smithy4s\n')),(0,s.kt)("h2",{id:"mill-2"},"Mill"),(0,s.kt)("p",null,"Mill uses a separate task to define dependencies that the code-generator should have awareness of:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'def smithy4sIvyDeps = Agg(ivy"software.amazon.smithy::smithy-aws-iam-traits:1.14.1")\n')),(0,s.kt)("h2",{id:"consequence"},"Consequence"),(0,s.kt)("p",null,"This will have the effect of loading the contents of the smithy files (or smithy-compliant Json files) from the artifact into the aggregated model that Smithy4s uses as an input to the code generator. It means that the traits and shapes defined in these files will be available to use in your models, but it also means that Smithy4s will try to generate code for these shapes."),(0,s.kt)("p",null,"This artifact will not be included as a dependency to your project at compile-time (nor runtime), it will only be consumed for the\nSmithy specs (and validators) it may contain."),(0,s.kt)("h2",{id:"artifacts-containing-both-smithy-files-and-smithy4s-generated-code"},"Artifacts containing both Smithy files and Smithy4s generated code"),(0,s.kt)("p",null,"When using Smithy4s, you may want to depend on artifacts that may have been built using Smithy4s, containing both Smithy specifications\nand generated Scala code (or rather, JVM bytecode resulting from the compilation of generated Scala code). In this case, you have to tell your build tool that a dependency should be used both by Smithy4s at codegen-time, and by the Scala compiler at compile time. This is achieved by doing the following"),(0,s.kt)("h3",{id:"sbt-3"},"SBT"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "organisation" % "artifact" % "version" % Smithy4sCompile\n')),(0,s.kt)("p",null,"Which is merely a shortcut for:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "organisation" % "artifact" % "version" % "smithy4s,compile"\n')),(0,s.kt)("h3",{id:"mill-3"},"Mill"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'\ndef compileAndCodegenDeps = T(Agg(ivy"organisation:artifact:version"))\ndef ivyDeps = T(super.ivyDeps() ++ compileAndCodegenDeps())\ndef smithy4sIvyDeps = T(super.smithy4sIvyDeps() ++ compileAndCodegenDeps())\n\n')),(0,s.kt)("h3",{id:"consequence-1"},"Consequence"),(0,s.kt)("p",null,'Because the upstream usage of Smithy4s will have resulted in the creation of metadata tracking the namespaces that were already generated, the "local" Smithy4s code-generation will automatically skip the generation of code that should not be generated again.'),(0,s.kt)("h3",{id:"manually-skipping-or-including-namespaces-during-code-generation"},"Manually skipping (or including) namespaces during code-generation."),(0,s.kt)("p",null,"Sometimes, you may want to tell Smithy4s to skip code-generation of some namespaces altogether, because the corresponding code may have been produced by another tool than Smithy4s. In that case, you can gain control over which namespaces Smithy4s crawls through when performing the code generation to avoid regenerating code that already exists. This is achieved via a couple of build-settings (the names are shared between SBT and Mill)."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"smithy4sAllowedNamespaces")," which is an allow-list"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"smithy4sExcludedNamespaces")," which is a disallow-list")),(0,s.kt)("p",null,"By default, Smithy4s tries to generate everything but shapes that are in the following namespaces:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"smithy4s.api")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"smithy4s.meta")),(0,s.kt)("li",{parentName:"ul"},"namespaces that start with ",(0,s.kt)("inlineCode",{parentName:"li"},"aws")),(0,s.kt)("li",{parentName:"ul"},"namespaces that start with ",(0,s.kt)("inlineCode",{parentName:"li"},"smithy"))),(0,s.kt)("h3",{id:"note-regarding-credentials"},"Note regarding credentials"),(0,s.kt)("p",null,"The SBT plugin provided by Smithy4s uses SBT's resolution mechanism (based on coursier) to retrieve the artifacts from their respective repositories. This implies that the resolvers-related settings are respected, included credentials that may be needed to read from some private artifact repository."),(0,s.kt)("p",null,"In the CLI, the ",(0,s.kt)("a",{parentName:"p",href:"https://get-coursier.io/docs/2.0.0-RC4-1/other-credentials#docsNav"},"mechanisms native to coursier")," are respected."))}m.isMDXComponent=!0}}]);
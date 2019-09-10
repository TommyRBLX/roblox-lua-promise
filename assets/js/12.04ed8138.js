(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{298:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"implementation-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation-details","aria-hidden":"true"}},[t._v("#")]),t._v(" Implementation Details")]),t._v(" "),a("h2",{attrs:{id:"chaining"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chaining","aria-hidden":"true"}},[t._v("#")]),t._v(" Chaining")]),t._v(" "),a("p",[t._v("One of the best parts about Promises is that they are chainable.")]),t._v(" "),a("p",[t._v("Every time you call "),a("code",[t._v("andThen")]),t._v(" or "),a("code",[t._v("catch")]),t._v(", it returns a "),a("em",[t._v("new")]),t._v(" Promise, which resolves with whatever value you return from the success or failure handlers, respectively.")]),t._v(" "),a("div",{staticClass:"language-lua extra-class"},[a("pre",{pre:!0,attrs:{class:"language-lua"}},[a("code",[t._v("somePromise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("andThen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("andThen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("print"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("You can also return a Promise from your handler, and it will be chained onto:")]),t._v(" "),a("div",{staticClass:"language-lua extra-class"},[a("pre",{pre:!0,attrs:{class:"language-lua"}},[a("code",[t._v("Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("async")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("andThen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("async")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("andThen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("print"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--\x3e 2")]),t._v("\n")])])]),a("p",[t._v("You can also call "),a("code",[t._v(":andThen")]),t._v(" multiple times on a single Promise to have multiple branches off of a single Promise.")]),t._v(" "),a("p",[t._v("Resolving a Promise with a Promise will be chained as well:")]),t._v(" "),a("div",{staticClass:"language-lua extra-class"},[a("pre",{pre:!0,attrs:{class:"language-lua"}},[a("code",[t._v("Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("async")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("async")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("andThen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("print"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--\x3e 1")]),t._v("\n")])])]),a("p",[t._v("However, any value that is returned from the Promise executor (the function you pass into "),a("code",[t._v("Promise.async")]),t._v(") is discarded. Do not return values from the function executor.")]),t._v(" "),a("h2",{attrs:{id:"yielding-in-promise-executor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yielding-in-promise-executor","aria-hidden":"true"}},[t._v("#")]),t._v(" Yielding in Promise executor")]),t._v(" "),a("p",[t._v("If you need to yield in the Promise executor, you must wrap your yielding code in a new thread to prevent your calling thread from yielding. The easiest way to do this is to use the "),a("ApiLink",{attrs:{to:"Promise.async"}}),t._v(" constructor instead of "),a("ApiLink",{attrs:{to:"Promise.new"}}),t._v(":")],1),t._v(" "),a("div",{staticClass:"language-lua extra-class"},[a("pre",{pre:!0,attrs:{class:"language-lua"}},[a("code",[t._v("Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("async")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("code",[t._v("Promise.async")]),t._v(" uses "),a("code",[t._v("Promise.new")]),t._v(" internally, except it wraps the Promise executor with "),a("ApiLink",{attrs:{to:"Promise.spawn"}}),t._v(".")],1),t._v(" "),a("p",[a("code",[t._v("Promise.async")]),t._v(" is sugar for:")]),t._v(" "),a("div",{staticClass:"language-lua extra-class"},[a("pre",{pre:!0,attrs:{class:"language-lua"}},[a("code",[t._v("Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onCancel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("spawn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("code",[t._v("Promise.spawn")]),t._v(" uses a BindableEvent internally to launch your Promise body on a fresh thread after waiting for the next "),a("code",[t._v("RunService.Heartbeat")]),t._v(" event.  The reason "),a("code",[t._v("Promise.spawn")]),t._v(" includes this wait time is to ensure that your Promises have consistent timing. Otherwise, your Promise would run synchronously up to the first yield, and asynchronously afterwards. This can often lead to undesirable results. Additionally, Promises that never yield can resolve completely synchronously, and this can lead to unpredictable timing issues. Thus, we use "),a("code",[t._v("Promise.spawn")]),t._v(" so there is always a guaranteed yield before execution.")]),t._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Don't use regular spawn")]),t._v(" "),a("p",[a("code",[t._v("spawn")]),t._v(" might seem like a tempting alternative to "),a("code",[t._v("Promise.spawn")]),t._v(" here, but you should "),a("strong",[t._v("never")]),t._v(" use it!")]),t._v(" "),a("p",[a("code",[t._v("spawn")]),t._v(" (and "),a("code",[t._v("wait")]),t._v(", for that matter) do not resume threads at a consistent interval. If Roblox has resumed too many threads in a single Lua step, it will begin throttling and your thread that was meant to be resumed on the next frame could actually be resumed several seconds later. The unexpected delay caused by this behavior will cause cascading timing issues in your game and could lead to some potentially ugly bugs.")])]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("coroutine.wrap would work, but...")]),t._v(" "),a("p",[a("code",[t._v("coroutine.wrap")]),t._v(" is another possible stand-in for creating a BindableEvent and firing it off, but in the case of an error, the stack trace is reset when the coroutine executes. This can make troubleshooting extremely difficult because you don't know where to look in your code base for the source of the error. Creating a BindableEvent is relatively cheap, so you shouldn't need to worry about this causing performance problems in your game.")])]),t._v(" "),a("h3",{attrs:{id:"when-to-use-promise-new"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-to-use-promise-new","aria-hidden":"true"}},[t._v("#")]),t._v(" When to use "),a("code",[t._v("Promise.new")])]),t._v(" "),a("p",[t._v("In some cases, it is desirable for a Promise to execute completely synchronously. If you don't need to yield in your Promise executor, and you are aware of the timing implications of a completely synchronous Promise, then it is acceptable to use "),a("code",[t._v("Promise.new")]),t._v(".")]),t._v(" "),a("p",[t._v("However, in these situations, "),a("ApiLink",{attrs:{to:"Promise.resolve"}}),t._v(" may be more appropriate.")],1),t._v(" "),a("h2",{attrs:{id:"cancellation-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cancellation-details","aria-hidden":"true"}},[t._v("#")]),t._v(" Cancellation details")]),t._v(" "),a("p",[t._v("If a Promise is already cancelled at the time of calling its onCancel hook, the hook will be called immediately.")]),t._v(" "),a("p",[t._v("If you attach a "),a("code",[t._v(":andThen")]),t._v(" or "),a("code",[t._v(":catch")]),t._v(' handler to a Promise after it\'s been cancelled, the chained Promise will be instantly rejected with the error "Promise is cancelled".')]),t._v(" "),a("p",[t._v("If you cancel a Promise immediately after creating it in the same Lua cycle, the fate of the Promise is dependent on if the Promise handler yields or not. If the Promise handler resolves without yielding, then the Promise will already be settled by the time you are able to cancel it, thus any consumers of the Promise will have already been called.")]),t._v(" "),a("p",[t._v("If the Promise does yield, then cancelling it immediately "),a("em",[t._v("will")]),t._v(" prevent its resolution. This is always the case when using "),a("code",[t._v("Promise.spawn")]),t._v(".")]),t._v(" "),a("p",[t._v("Attempting to cancel an already-settled Promise is ignored.")]),t._v(" "),a("h3",{attrs:{id:"cancellation-propagation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cancellation-propagation","aria-hidden":"true"}},[t._v("#")]),t._v(" Cancellation propagation")]),t._v(" "),a("p",[t._v("When you cancel a Promise, the cancellation propagates up the Promise chain. Promises keep track of the number of consumers that they have, and when the upwards propagation encounters a Promise that no longer has any consumers, that Promise is cancelled as well.")]),t._v(" "),a("p",[t._v("It's important to note that cancellation does "),a("strong",[t._v("not")]),t._v(" propagate downstream, so if you get a handle to a Promise earlier in the chain and cancel it directly, Promises that are consuming the cancelled Promise will remain in an unsettled state forever.")])])}),[],!1,null,null,null);e.default=n.exports}}]);
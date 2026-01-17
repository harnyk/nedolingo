(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))o(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const m of p.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function r(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function o(f){if(f.ep)return;f.ep=!0;const p=r(f);fetch(f.href,p)}})();function _h(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var no={exports:{}},Ji={};var Bm;function lg(){if(Bm)return Ji;Bm=1;var l=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function r(o,f,p){var m=null;if(p!==void 0&&(m=""+p),f.key!==void 0&&(m=""+f.key),"key"in f){p={};for(var y in f)y!=="key"&&(p[y]=f[y])}else p=f;return f=p.ref,{$$typeof:l,type:o,key:m,ref:f!==void 0?f:null,props:p}}return Ji.Fragment=c,Ji.jsx=r,Ji.jsxs=r,Ji}var Ym;function ig(){return Ym||(Ym=1,no.exports=lg()),no.exports}var H=ig(),to={exports:{}},P={};var km;function ag(){if(km)return P;km=1;var l=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),m=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),O=Symbol.iterator;function D(z){return z===null||typeof z!="object"?null:(z=O&&z[O]||z["@@iterator"],typeof z=="function"?z:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,B={};function Q(z,M,G){this.props=z,this.context=M,this.refs=B,this.updater=G||k}Q.prototype.isReactComponent={},Q.prototype.setState=function(z,M){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,M,"setState")},Q.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function U(){}U.prototype=Q.prototype;function W(z,M,G){this.props=z,this.context=M,this.refs=B,this.updater=G||k}var de=W.prototype=new U;de.constructor=W,L(de,Q.prototype),de.isPureReactComponent=!0;var ye=Array.isArray;function Ee(){}var I={H:null,A:null,T:null,S:null},je=Object.prototype.hasOwnProperty;function be(z,M,G){var Z=G.ref;return{$$typeof:l,type:z,key:M,ref:Z!==void 0?Z:null,props:G}}function qe(z,M){return be(z.type,M,z.props)}function pn(z){return typeof z=="object"&&z!==null&&z.$$typeof===l}function Ze(z){var M={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(G){return M[G]})}var Vn=/\/+/g;function Un(z,M){return typeof z=="object"&&z!==null&&z.key!=null?Ze(""+z.key):M.toString(36)}function mn(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(Ee,Ee):(z.status="pending",z.then(function(M){z.status==="pending"&&(z.status="fulfilled",z.value=M)},function(M){z.status==="pending"&&(z.status="rejected",z.reason=M)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function T(z,M,G,Z,ee){var ie=typeof z;(ie==="undefined"||ie==="boolean")&&(z=null);var he=!1;if(z===null)he=!0;else switch(ie){case"bigint":case"string":case"number":he=!0;break;case"object":switch(z.$$typeof){case l:case c:he=!0;break;case x:return he=z._init,T(he(z._payload),M,G,Z,ee)}}if(he)return ee=ee(z),he=Z===""?"."+Un(z,0):Z,ye(ee)?(G="",he!=null&&(G=he.replace(Vn,"$&/")+"/"),T(ee,M,G,"",function(ni){return ni})):ee!=null&&(pn(ee)&&(ee=qe(ee,G+(ee.key==null||z&&z.key===ee.key?"":(""+ee.key).replace(Vn,"$&/")+"/")+he)),M.push(ee)),1;he=0;var en=Z===""?".":Z+":";if(ye(z))for(var Re=0;Re<z.length;Re++)Z=z[Re],ie=en+Un(Z,Re),he+=T(Z,M,G,ie,ee);else if(Re=D(z),typeof Re=="function")for(z=Re.call(z),Re=0;!(Z=z.next()).done;)Z=Z.value,ie=en+Un(Z,Re++),he+=T(Z,M,G,ie,ee);else if(ie==="object"){if(typeof z.then=="function")return T(mn(z),M,G,Z,ee);throw M=String(z),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return he}function Y(z,M,G){if(z==null)return z;var Z=[],ee=0;return T(z,Z,"","",function(ie){return M.call(G,ie,ee++)}),Z}function K(z){if(z._status===-1){var M=z._result;M=M(),M.then(function(G){(z._status===0||z._status===-1)&&(z._status=1,z._result=G)},function(G){(z._status===0||z._status===-1)&&(z._status=2,z._result=G)}),z._status===-1&&(z._status=0,z._result=M)}if(z._status===1)return z._result.default;throw z._result}var le=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},fe={map:Y,forEach:function(z,M,G){Y(z,function(){M.apply(this,arguments)},G)},count:function(z){var M=0;return Y(z,function(){M++}),M},toArray:function(z){return Y(z,function(M){return M})||[]},only:function(z){if(!pn(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return P.Activity=_,P.Children=fe,P.Component=Q,P.Fragment=r,P.Profiler=f,P.PureComponent=W,P.StrictMode=o,P.Suspense=d,P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,P.__COMPILER_RUNTIME={__proto__:null,c:function(z){return I.H.useMemoCache(z)}},P.cache=function(z){return function(){return z.apply(null,arguments)}},P.cacheSignal=function(){return null},P.cloneElement=function(z,M,G){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Z=L({},z.props),ee=z.key;if(M!=null)for(ie in M.key!==void 0&&(ee=""+M.key),M)!je.call(M,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&M.ref===void 0||(Z[ie]=M[ie]);var ie=arguments.length-2;if(ie===1)Z.children=G;else if(1<ie){for(var he=Array(ie),en=0;en<ie;en++)he[en]=arguments[en+2];Z.children=he}return be(z.type,ee,Z)},P.createContext=function(z){return z={$$typeof:m,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:p,_context:z},z},P.createElement=function(z,M,G){var Z,ee={},ie=null;if(M!=null)for(Z in M.key!==void 0&&(ie=""+M.key),M)je.call(M,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ee[Z]=M[Z]);var he=arguments.length-2;if(he===1)ee.children=G;else if(1<he){for(var en=Array(he),Re=0;Re<he;Re++)en[Re]=arguments[Re+2];ee.children=en}if(z&&z.defaultProps)for(Z in he=z.defaultProps,he)ee[Z]===void 0&&(ee[Z]=he[Z]);return be(z,ie,ee)},P.createRef=function(){return{current:null}},P.forwardRef=function(z){return{$$typeof:y,render:z}},P.isValidElement=pn,P.lazy=function(z){return{$$typeof:x,_payload:{_status:-1,_result:z},_init:K}},P.memo=function(z,M){return{$$typeof:g,type:z,compare:M===void 0?null:M}},P.startTransition=function(z){var M=I.T,G={};I.T=G;try{var Z=z(),ee=I.S;ee!==null&&ee(G,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(Ee,le)}catch(ie){le(ie)}finally{M!==null&&G.types!==null&&(M.types=G.types),I.T=M}},P.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},P.use=function(z){return I.H.use(z)},P.useActionState=function(z,M,G){return I.H.useActionState(z,M,G)},P.useCallback=function(z,M){return I.H.useCallback(z,M)},P.useContext=function(z){return I.H.useContext(z)},P.useDebugValue=function(){},P.useDeferredValue=function(z,M){return I.H.useDeferredValue(z,M)},P.useEffect=function(z,M){return I.H.useEffect(z,M)},P.useEffectEvent=function(z){return I.H.useEffectEvent(z)},P.useId=function(){return I.H.useId()},P.useImperativeHandle=function(z,M,G){return I.H.useImperativeHandle(z,M,G)},P.useInsertionEffect=function(z,M){return I.H.useInsertionEffect(z,M)},P.useLayoutEffect=function(z,M){return I.H.useLayoutEffect(z,M)},P.useMemo=function(z,M){return I.H.useMemo(z,M)},P.useOptimistic=function(z,M){return I.H.useOptimistic(z,M)},P.useReducer=function(z,M,G){return I.H.useReducer(z,M,G)},P.useRef=function(z){return I.H.useRef(z)},P.useState=function(z){return I.H.useState(z)},P.useSyncExternalStore=function(z,M,G){return I.H.useSyncExternalStore(z,M,G)},P.useTransition=function(){return I.H.useTransition()},P.version="19.2.3",P}var Gm;function bo(){return Gm||(Gm=1,to.exports=ag()),to.exports}var j=bo();const ug=_h(j);var lo={exports:{}},Fi={},io={exports:{}},ao={};var Qm;function cg(){return Qm||(Qm=1,(function(l){function c(T,Y){var K=T.length;T.push(Y);e:for(;0<K;){var le=K-1>>>1,fe=T[le];if(0<f(fe,Y))T[le]=Y,T[K]=fe,K=le;else break e}}function r(T){return T.length===0?null:T[0]}function o(T){if(T.length===0)return null;var Y=T[0],K=T.pop();if(K!==Y){T[0]=K;e:for(var le=0,fe=T.length,z=fe>>>1;le<z;){var M=2*(le+1)-1,G=T[M],Z=M+1,ee=T[Z];if(0>f(G,K))Z<fe&&0>f(ee,G)?(T[le]=ee,T[Z]=K,le=Z):(T[le]=G,T[M]=K,le=M);else if(Z<fe&&0>f(ee,K))T[le]=ee,T[Z]=K,le=Z;else break e}}return Y}function f(T,Y){var K=T.sortIndex-Y.sortIndex;return K!==0?K:T.id-Y.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;l.unstable_now=function(){return p.now()}}else{var m=Date,y=m.now();l.unstable_now=function(){return m.now()-y}}var d=[],g=[],x=1,_=null,O=3,D=!1,k=!1,L=!1,B=!1,Q=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;function de(T){for(var Y=r(g);Y!==null;){if(Y.callback===null)o(g);else if(Y.startTime<=T)o(g),Y.sortIndex=Y.expirationTime,c(d,Y);else break;Y=r(g)}}function ye(T){if(L=!1,de(T),!k)if(r(d)!==null)k=!0,Ee||(Ee=!0,Ze());else{var Y=r(g);Y!==null&&mn(ye,Y.startTime-T)}}var Ee=!1,I=-1,je=5,be=-1;function qe(){return B?!0:!(l.unstable_now()-be<je)}function pn(){if(B=!1,Ee){var T=l.unstable_now();be=T;var Y=!0;try{e:{k=!1,L&&(L=!1,U(I),I=-1),D=!0;var K=O;try{n:{for(de(T),_=r(d);_!==null&&!(_.expirationTime>T&&qe());){var le=_.callback;if(typeof le=="function"){_.callback=null,O=_.priorityLevel;var fe=le(_.expirationTime<=T);if(T=l.unstable_now(),typeof fe=="function"){_.callback=fe,de(T),Y=!0;break n}_===r(d)&&o(d),de(T)}else o(d);_=r(d)}if(_!==null)Y=!0;else{var z=r(g);z!==null&&mn(ye,z.startTime-T),Y=!1}}break e}finally{_=null,O=K,D=!1}Y=void 0}}finally{Y?Ze():Ee=!1}}}var Ze;if(typeof W=="function")Ze=function(){W(pn)};else if(typeof MessageChannel<"u"){var Vn=new MessageChannel,Un=Vn.port2;Vn.port1.onmessage=pn,Ze=function(){Un.postMessage(null)}}else Ze=function(){Q(pn,0)};function mn(T,Y){I=Q(function(){T(l.unstable_now())},Y)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(T){T.callback=null},l.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):je=0<T?Math.floor(1e3/T):5},l.unstable_getCurrentPriorityLevel=function(){return O},l.unstable_next=function(T){switch(O){case 1:case 2:case 3:var Y=3;break;default:Y=O}var K=O;O=Y;try{return T()}finally{O=K}},l.unstable_requestPaint=function(){B=!0},l.unstable_runWithPriority=function(T,Y){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var K=O;O=T;try{return Y()}finally{O=K}},l.unstable_scheduleCallback=function(T,Y,K){var le=l.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?le+K:le):K=le,T){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=K+fe,T={id:x++,callback:Y,priorityLevel:T,startTime:K,expirationTime:fe,sortIndex:-1},K>le?(T.sortIndex=K,c(g,T),r(d)===null&&T===r(g)&&(L?(U(I),I=-1):L=!0,mn(ye,K-le))):(T.sortIndex=fe,c(d,T),k||D||(k=!0,Ee||(Ee=!0,Ze()))),T},l.unstable_shouldYield=qe,l.unstable_wrapCallback=function(T){var Y=O;return function(){var K=O;O=Y;try{return T.apply(this,arguments)}finally{O=K}}}})(ao)),ao}var Xm;function rg(){return Xm||(Xm=1,io.exports=cg()),io.exports}var uo={exports:{}},Ie={};var Zm;function og(){if(Zm)return Ie;Zm=1;var l=bo();function c(d){var g="https://react.dev/errors/"+d;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)g+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+d+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var o={d:{f:r,r:function(){throw Error(c(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},f=Symbol.for("react.portal");function p(d,g,x){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:_==null?null:""+_,children:d,containerInfo:g,implementation:x}}var m=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(d,g){if(d==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Ie.createPortal=function(d,g){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(c(299));return p(d,g,null,x)},Ie.flushSync=function(d){var g=m.T,x=o.p;try{if(m.T=null,o.p=2,d)return d()}finally{m.T=g,o.p=x,o.d.f()}},Ie.preconnect=function(d,g){typeof d=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,o.d.C(d,g))},Ie.prefetchDNS=function(d){typeof d=="string"&&o.d.D(d)},Ie.preinit=function(d,g){if(typeof d=="string"&&g&&typeof g.as=="string"){var x=g.as,_=y(x,g.crossOrigin),O=typeof g.integrity=="string"?g.integrity:void 0,D=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;x==="style"?o.d.S(d,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:_,integrity:O,fetchPriority:D}):x==="script"&&o.d.X(d,{crossOrigin:_,integrity:O,fetchPriority:D,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Ie.preinitModule=function(d,g){if(typeof d=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var x=y(g.as,g.crossOrigin);o.d.M(d,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&o.d.M(d)},Ie.preload=function(d,g){if(typeof d=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var x=g.as,_=y(x,g.crossOrigin);o.d.L(d,x,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Ie.preloadModule=function(d,g){if(typeof d=="string")if(g){var x=y(g.as,g.crossOrigin);o.d.m(d,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else o.d.m(d)},Ie.requestFormReset=function(d){o.d.r(d)},Ie.unstable_batchedUpdates=function(d,g){return d(g)},Ie.useFormState=function(d,g,x){return m.H.useFormState(d,g,x)},Ie.useFormStatus=function(){return m.H.useHostTransitionStatus()},Ie.version="19.2.3",Ie}var Vm;function fg(){if(Vm)return uo.exports;Vm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(c){console.error(c)}}return l(),uo.exports=og(),uo.exports}var Km;function sg(){if(Km)return Fi;Km=1;var l=rg(),c=bo(),r=fg();function o(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function m(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function y(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(p(e)!==e)throw Error(o(188))}function g(e){var n=e.alternate;if(!n){if(n=p(e),n===null)throw Error(o(188));return n!==e?null:e}for(var t=e,i=n;;){var a=t.return;if(a===null)break;var u=a.alternate;if(u===null){if(i=a.return,i!==null){t=i;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===t)return d(a),e;if(u===i)return d(a),n;u=u.sibling}throw Error(o(188))}if(t.return!==i.return)t=a,i=u;else{for(var s=!1,h=a.child;h;){if(h===t){s=!0,t=a,i=u;break}if(h===i){s=!0,i=a,t=u;break}h=h.sibling}if(!s){for(h=u.child;h;){if(h===t){s=!0,t=u,i=a;break}if(h===i){s=!0,i=u,t=a;break}h=h.sibling}if(!s)throw Error(o(189))}}if(t.alternate!==i)throw Error(o(190))}if(t.tag!==3)throw Error(o(188));return t.stateNode.current===t?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,O=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),W=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),ye=Symbol.for("react.suspense"),Ee=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),je=Symbol.for("react.lazy"),be=Symbol.for("react.activity"),qe=Symbol.for("react.memo_cache_sentinel"),pn=Symbol.iterator;function Ze(e){return e===null||typeof e!="object"?null:(e=pn&&e[pn]||e["@@iterator"],typeof e=="function"?e:null)}var Vn=Symbol.for("react.client.reference");function Un(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Vn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case Q:return"Profiler";case B:return"StrictMode";case ye:return"Suspense";case Ee:return"SuspenseList";case be:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case W:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case de:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:Un(e.type)||"Memo";case je:n=e._payload,e=e._init;try{return Un(e(n))}catch{}}return null}var mn=Array.isArray,T=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},le=[],fe=-1;function z(e){return{current:e}}function M(e){0>fe||(e.current=le[fe],le[fe]=null,fe--)}function G(e,n){fe++,le[fe]=e.current,e.current=n}var Z=z(null),ee=z(null),ie=z(null),he=z(null);function en(e,n){switch(G(ie,n),G(ee,e),G(Z,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?rm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=rm(n),e=om(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}M(Z),G(Z,e)}function Re(){M(Z),M(ee),M(ie)}function ni(e){e.memoizedState!==null&&G(he,e);var n=Z.current,t=om(n,e.type);n!==t&&(G(ee,e),G(Z,t))}function ua(e){ee.current===e&&(M(Z),M(ee)),he.current===e&&(M(he),Xi._currentValue=K)}var Hu,Ho;function Qt(e){if(Hu===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Hu=n&&n[1]||"",Ho=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Hu+e+Ho}var Lu=!1;function Bu(e,n){if(!e||Lu)return"";Lu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(n){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(C){var E=C}Reflect.construct(e,[],R)}else{try{R.call()}catch(C){E=C}e.call(R.prototype)}}else{try{throw Error()}catch(C){E=C}(R=e())&&typeof R.catch=="function"&&R.catch(function(){})}}catch(C){if(C&&E&&typeof C.stack=="string")return[C.stack,E.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=i.DetermineComponentFrameRoot(),s=u[0],h=u[1];if(s&&h){var v=s.split(`
`),w=h.split(`
`);for(a=i=0;i<v.length&&!v[i].includes("DetermineComponentFrameRoot");)i++;for(;a<w.length&&!w[a].includes("DetermineComponentFrameRoot");)a++;if(i===v.length||a===w.length)for(i=v.length-1,a=w.length-1;1<=i&&0<=a&&v[i]!==w[a];)a--;for(;1<=i&&0<=a;i--,a--)if(v[i]!==w[a]){if(i!==1||a!==1)do if(i--,a--,0>a||v[i]!==w[a]){var q=`
`+v[i].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=i&&0<=a);break}}}finally{Lu=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Qt(t):""}function Md(e,n){switch(e.tag){case 26:case 27:case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return e.child!==n&&n!==null?Qt("Suspense Fallback"):Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 15:return Bu(e.type,!1);case 11:return Bu(e.type.render,!1);case 1:return Bu(e.type,!0);case 31:return Qt("Activity");default:return""}}function Lo(e){try{var n="",t=null;do n+=Md(e,t),t=e,e=e.return;while(e);return n}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Yu=Object.prototype.hasOwnProperty,ku=l.unstable_scheduleCallback,Gu=l.unstable_cancelCallback,Dd=l.unstable_shouldYield,Ud=l.unstable_requestPaint,hn=l.unstable_now,Hd=l.unstable_getCurrentPriorityLevel,Bo=l.unstable_ImmediatePriority,Yo=l.unstable_UserBlockingPriority,ca=l.unstable_NormalPriority,Ld=l.unstable_LowPriority,ko=l.unstable_IdlePriority,Bd=l.log,Yd=l.unstable_setDisableYieldValue,ti=null,dn=null;function ht(e){if(typeof Bd=="function"&&Yd(e),dn&&typeof dn.setStrictMode=="function")try{dn.setStrictMode(ti,e)}catch{}}var yn=Math.clz32?Math.clz32:Qd,kd=Math.log,Gd=Math.LN2;function Qd(e){return e>>>=0,e===0?32:31-(kd(e)/Gd|0)|0}var ra=256,oa=262144,fa=4194304;function Xt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function sa(e,n,t){var i=e.pendingLanes;if(i===0)return 0;var a=0,u=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var h=i&134217727;return h!==0?(i=h&~u,i!==0?a=Xt(i):(s&=h,s!==0?a=Xt(s):t||(t=h&~e,t!==0&&(a=Xt(t))))):(h=i&~u,h!==0?a=Xt(h):s!==0?a=Xt(s):t||(t=i&~e,t!==0&&(a=Xt(t)))),a===0?0:n!==0&&n!==a&&(n&u)===0&&(u=a&-a,t=n&-n,u>=t||u===32&&(t&4194048)!==0)?n:a}function li(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Xd(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Go(){var e=fa;return fa<<=1,(fa&62914560)===0&&(fa=4194304),e}function Qu(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ii(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Zd(e,n,t,i,a,u){var s=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var h=e.entanglements,v=e.expirationTimes,w=e.hiddenUpdates;for(t=s&~t;0<t;){var q=31-yn(t),R=1<<q;h[q]=0,v[q]=-1;var E=w[q];if(E!==null)for(w[q]=null,q=0;q<E.length;q++){var C=E[q];C!==null&&(C.lane&=-536870913)}t&=~R}i!==0&&Qo(e,i,0),u!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=u&~(s&~n))}function Qo(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var i=31-yn(n);e.entangledLanes|=n,e.entanglements[i]=e.entanglements[i]|1073741824|t&261930}function Xo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var i=31-yn(t),a=1<<i;a&n|e[i]&n&&(e[i]|=n),t&=~a}}function Zo(e,n){var t=n&-n;return t=(t&42)!==0?1:Xu(t),(t&(e.suspendedLanes|n))!==0?0:t}function Xu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Zu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vo(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Nm(e.type))}function Ko(e,n){var t=Y.p;try{return Y.p=e,n()}finally{Y.p=t}}var dt=Math.random().toString(36).slice(2),Ve="__reactFiber$"+dt,ln="__reactProps$"+dt,sl="__reactContainer$"+dt,Vu="__reactEvents$"+dt,Vd="__reactListeners$"+dt,Kd="__reactHandles$"+dt,Jo="__reactResources$"+dt,ai="__reactMarker$"+dt;function Ku(e){delete e[Ve],delete e[ln],delete e[Vu],delete e[Vd],delete e[Kd]}function pl(e){var n=e[Ve];if(n)return n;for(var t=e.parentNode;t;){if(n=t[sl]||t[Ve]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ym(e);e!==null;){if(t=e[Ve])return t;e=ym(e)}return n}e=t,t=e.parentNode}return null}function ml(e){if(e=e[Ve]||e[sl]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ui(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(o(33))}function hl(e){var n=e[Jo];return n||(n=e[Jo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Qe(e){e[ai]=!0}var Fo=new Set,Wo={};function Zt(e,n){dl(e,n),dl(e+"Capture",n)}function dl(e,n){for(Wo[e]=n,e=0;e<n.length;e++)Fo.add(n[e])}var Jd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$o={},Io={};function Fd(e){return Yu.call(Io,e)?!0:Yu.call($o,e)?!1:Jd.test(e)?Io[e]=!0:($o[e]=!0,!1)}function pa(e,n,t){if(Fd(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var i=n.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function ma(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function Kn(e,n,t,i){if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+i)}}function Sn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Po(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Wd(e,n,t){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,u=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(s){t=""+s,u.call(this,s)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return t},setValue:function(s){t=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ju(e){if(!e._valueTracker){var n=Po(e)?"checked":"value";e._valueTracker=Wd(e,n,""+e[n])}}function ef(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),i="";return e&&(i=Po(e)?e.checked?"true":"false":e.value),e=i,e!==t?(n.setValue(e),!0):!1}function ha(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $d=/[\n"\\]/g;function wn(e){return e.replace($d,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fu(e,n,t,i,a,u,s,h){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),n!=null?s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Sn(n)):e.value!==""+Sn(n)&&(e.value=""+Sn(n)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),n!=null?Wu(e,s,Sn(n)):t!=null?Wu(e,s,Sn(t)):i!=null&&e.removeAttribute("value"),a==null&&u!=null&&(e.defaultChecked=!!u),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+Sn(h):e.removeAttribute("name")}function nf(e,n,t,i,a,u,s,h){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),n!=null||t!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){Ju(e);return}t=t!=null?""+Sn(t):"",n=n!=null?""+Sn(n):t,h||n===e.value||(e.value=n),e.defaultValue=n}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=h?e.checked:!!i,e.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Ju(e)}function Wu(e,n,t){n==="number"&&ha(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function yl(e,n,t,i){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&i&&(e[t].defaultSelected=!0)}else{for(t=""+Sn(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function tf(e,n,t){if(n!=null&&(n=""+Sn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+Sn(t):""}function lf(e,n,t,i){if(n==null){if(i!=null){if(t!=null)throw Error(o(92));if(mn(i)){if(1<i.length)throw Error(o(93));i=i[0]}t=i}t==null&&(t=""),n=t}t=Sn(n),e.defaultValue=t,i=e.textContent,i===t&&i!==""&&i!==null&&(e.value=i),Ju(e)}function gl(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Id=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function af(e,n,t){var i=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?i?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":i?e.setProperty(n,t):typeof t!="number"||t===0||Id.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function uf(e,n,t){if(n!=null&&typeof n!="object")throw Error(o(62));if(e=e.style,t!=null){for(var i in t)!t.hasOwnProperty(i)||n!=null&&n.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in n)i=n[a],n.hasOwnProperty(a)&&t[a]!==i&&af(e,a,i)}else for(var u in n)n.hasOwnProperty(u)&&af(e,u,n[u])}function $u(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ey=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function da(e){return ey.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Jn(){}var Iu=null;function Pu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vl=null,_l=null;function cf(e){var n=ml(e);if(n&&(e=n.stateNode)){var t=e[ln]||null;e:switch(e=n.stateNode,n.type){case"input":if(Fu(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+wn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var i=t[n];if(i!==e&&i.form===e.form){var a=i[ln]||null;if(!a)throw Error(o(90));Fu(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(n=0;n<t.length;n++)i=t[n],i.form===e.form&&ef(i)}break e;case"textarea":tf(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&yl(e,!!t.multiple,n,!1)}}}var ec=!1;function rf(e,n,t){if(ec)return e(n,t);ec=!0;try{var i=e(n);return i}finally{if(ec=!1,(vl!==null||_l!==null)&&(tu(),vl&&(n=vl,e=_l,_l=vl=null,cf(n),e)))for(n=0;n<e.length;n++)cf(e[n])}}function ci(e,n){var t=e.stateNode;if(t===null)return null;var i=t[ln]||null;if(i===null)return null;t=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(o(231,n,typeof t));return t}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nc=!1;if(Fn)try{var ri={};Object.defineProperty(ri,"passive",{get:function(){nc=!0}}),window.addEventListener("test",ri,ri),window.removeEventListener("test",ri,ri)}catch{nc=!1}var yt=null,tc=null,ya=null;function of(){if(ya)return ya;var e,n=tc,t=n.length,i,a="value"in yt?yt.value:yt.textContent,u=a.length;for(e=0;e<t&&n[e]===a[e];e++);var s=t-e;for(i=1;i<=s&&n[t-i]===a[u-i];i++);return ya=a.slice(e,1<i?1-i:void 0)}function ga(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function va(){return!0}function ff(){return!1}function an(e){function n(t,i,a,u,s){this._reactName=t,this._targetInst=a,this.type=i,this.nativeEvent=u,this.target=s,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(t=e[h],this[h]=t?t(u):u[h]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?va:ff,this.isPropagationStopped=ff,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),n}var Vt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_a=an(Vt),oi=_({},Vt,{view:0,detail:0}),ny=an(oi),lc,ic,fi,Aa=_({},oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fi&&(fi&&e.type==="mousemove"?(lc=e.screenX-fi.screenX,ic=e.screenY-fi.screenY):ic=lc=0,fi=e),lc)},movementY:function(e){return"movementY"in e?e.movementY:ic}}),sf=an(Aa),ty=_({},Aa,{dataTransfer:0}),ly=an(ty),iy=_({},oi,{relatedTarget:0}),ac=an(iy),ay=_({},Vt,{animationName:0,elapsedTime:0,pseudoElement:0}),uy=an(ay),cy=_({},Vt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ry=an(cy),oy=_({},Vt,{data:0}),pf=an(oy),fy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function my(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=py[e])?!!n[e]:!1}function uc(){return my}var hy=_({},oi,{key:function(e){if(e.key){var n=fy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ga(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uc,charCode:function(e){return e.type==="keypress"?ga(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ga(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dy=an(hy),yy=_({},Aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mf=an(yy),gy=_({},oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uc}),vy=an(gy),_y=_({},Vt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ay=an(_y),zy=_({},Aa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xy=an(zy),by=_({},Vt,{newState:0,oldState:0}),Sy=an(by),wy=[9,13,27,32],cc=Fn&&"CompositionEvent"in window,si=null;Fn&&"documentMode"in document&&(si=document.documentMode);var Ey=Fn&&"TextEvent"in window&&!si,hf=Fn&&(!cc||si&&8<si&&11>=si),df=" ",yf=!1;function gf(e,n){switch(e){case"keyup":return wy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Al=!1;function jy(e,n){switch(e){case"compositionend":return vf(n);case"keypress":return n.which!==32?null:(yf=!0,df);case"textInput":return e=n.data,e===df&&yf?null:e;default:return null}}function Ty(e,n){if(Al)return e==="compositionend"||!cc&&gf(e,n)?(e=of(),ya=tc=yt=null,Al=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hf&&n.locale!=="ko"?null:n.data;default:return null}}var Cy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _f(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Cy[e.type]:n==="textarea"}function Af(e,n,t,i){vl?_l?_l.push(i):_l=[i]:vl=i,n=ou(n,"onChange"),0<n.length&&(t=new _a("onChange","change",null,t,i),e.push({event:t,listeners:n}))}var pi=null,mi=null;function qy(e){tm(e,0)}function za(e){var n=ui(e);if(ef(n))return e}function zf(e,n){if(e==="change")return n}var xf=!1;if(Fn){var rc;if(Fn){var oc="oninput"in document;if(!oc){var bf=document.createElement("div");bf.setAttribute("oninput","return;"),oc=typeof bf.oninput=="function"}rc=oc}else rc=!1;xf=rc&&(!document.documentMode||9<document.documentMode)}function Sf(){pi&&(pi.detachEvent("onpropertychange",wf),mi=pi=null)}function wf(e){if(e.propertyName==="value"&&za(mi)){var n=[];Af(n,mi,e,Pu(e)),rf(qy,n)}}function Oy(e,n,t){e==="focusin"?(Sf(),pi=n,mi=t,pi.attachEvent("onpropertychange",wf)):e==="focusout"&&Sf()}function Ny(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return za(mi)}function Ry(e,n){if(e==="click")return za(n)}function My(e,n){if(e==="input"||e==="change")return za(n)}function Dy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var gn=typeof Object.is=="function"?Object.is:Dy;function hi(e,n){if(gn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),i=Object.keys(n);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var a=t[i];if(!Yu.call(n,a)||!gn(e[a],n[a]))return!1}return!0}function Ef(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jf(e,n){var t=Ef(e);e=0;for(var i;t;){if(t.nodeType===3){if(i=e+t.textContent.length,e<=n&&i>=n)return{node:t,offset:n-e};e=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ef(t)}}function Tf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Tf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Cf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ha(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ha(e.document)}return n}function fc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Uy=Fn&&"documentMode"in document&&11>=document.documentMode,zl=null,sc=null,di=null,pc=!1;function qf(e,n,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;pc||zl==null||zl!==ha(i)||(i=zl,"selectionStart"in i&&fc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),di&&hi(di,i)||(di=i,i=ou(sc,"onSelect"),0<i.length&&(n=new _a("onSelect","select",null,n,t),e.push({event:n,listeners:i}),n.target=zl)))}function Kt(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var xl={animationend:Kt("Animation","AnimationEnd"),animationiteration:Kt("Animation","AnimationIteration"),animationstart:Kt("Animation","AnimationStart"),transitionrun:Kt("Transition","TransitionRun"),transitionstart:Kt("Transition","TransitionStart"),transitioncancel:Kt("Transition","TransitionCancel"),transitionend:Kt("Transition","TransitionEnd")},mc={},Of={};Fn&&(Of=document.createElement("div").style,"AnimationEvent"in window||(delete xl.animationend.animation,delete xl.animationiteration.animation,delete xl.animationstart.animation),"TransitionEvent"in window||delete xl.transitionend.transition);function Jt(e){if(mc[e])return mc[e];if(!xl[e])return e;var n=xl[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Of)return mc[e]=n[t];return e}var Nf=Jt("animationend"),Rf=Jt("animationiteration"),Mf=Jt("animationstart"),Hy=Jt("transitionrun"),Ly=Jt("transitionstart"),By=Jt("transitioncancel"),Df=Jt("transitionend"),Uf=new Map,hc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hc.push("scrollEnd");function Hn(e,n){Uf.set(e,n),Zt(n,[e])}var xa=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},En=[],bl=0,dc=0;function ba(){for(var e=bl,n=dc=bl=0;n<e;){var t=En[n];En[n++]=null;var i=En[n];En[n++]=null;var a=En[n];En[n++]=null;var u=En[n];if(En[n++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}u!==0&&Hf(t,a,u)}}function Sa(e,n,t,i){En[bl++]=e,En[bl++]=n,En[bl++]=t,En[bl++]=i,dc|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function yc(e,n,t,i){return Sa(e,n,t,i),wa(e)}function Ft(e,n){return Sa(e,null,null,n),wa(e)}function Hf(e,n,t){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t);for(var a=!1,u=e.return;u!==null;)u.childLanes|=t,i=u.alternate,i!==null&&(i.childLanes|=t),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(a=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,a&&n!==null&&(a=31-yn(t),e=u.hiddenUpdates,i=e[a],i===null?e[a]=[n]:i.push(n),n.lane=t|536870912),u):null}function wa(e){if(50<Hi)throw Hi=0,wr=null,Error(o(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Sl={};function Yy(e,n,t,i){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(e,n,t,i){return new Yy(e,n,t,i)}function gc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wn(e,n){var t=e.alternate;return t===null?(t=vn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Lf(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ea(e,n,t,i,a,u){var s=0;if(i=e,typeof e=="function")gc(e)&&(s=1);else if(typeof e=="string")s=Z0(e,t,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case be:return e=vn(31,t,n,a),e.elementType=be,e.lanes=u,e;case L:return Wt(t.children,a,u,n);case B:s=8,a|=24;break;case Q:return e=vn(12,t,n,a|2),e.elementType=Q,e.lanes=u,e;case ye:return e=vn(13,t,n,a),e.elementType=ye,e.lanes=u,e;case Ee:return e=vn(19,t,n,a),e.elementType=Ee,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case W:s=10;break e;case U:s=9;break e;case de:s=11;break e;case I:s=14;break e;case je:s=16,i=null;break e}s=29,t=Error(o(130,e===null?"null":typeof e,"")),i=null}return n=vn(s,t,n,a),n.elementType=e,n.type=i,n.lanes=u,n}function Wt(e,n,t,i){return e=vn(7,e,i,n),e.lanes=t,e}function vc(e,n,t){return e=vn(6,e,null,n),e.lanes=t,e}function Bf(e){var n=vn(18,null,null,0);return n.stateNode=e,n}function _c(e,n,t){return n=vn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Yf=new WeakMap;function jn(e,n){if(typeof e=="object"&&e!==null){var t=Yf.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Lo(n)},Yf.set(e,n),n)}return{value:e,source:n,stack:Lo(n)}}var wl=[],El=0,ja=null,yi=0,Tn=[],Cn=0,gt=null,Yn=1,kn="";function $n(e,n){wl[El++]=yi,wl[El++]=ja,ja=e,yi=n}function kf(e,n,t){Tn[Cn++]=Yn,Tn[Cn++]=kn,Tn[Cn++]=gt,gt=e;var i=Yn;e=kn;var a=32-yn(i)-1;i&=~(1<<a),t+=1;var u=32-yn(n)+a;if(30<u){var s=a-a%5;u=(i&(1<<s)-1).toString(32),i>>=s,a-=s,Yn=1<<32-yn(n)+a|t<<a|i,kn=u+e}else Yn=1<<u|t<<a|i,kn=e}function Ac(e){e.return!==null&&($n(e,1),kf(e,1,0))}function zc(e){for(;e===ja;)ja=wl[--El],wl[El]=null,yi=wl[--El],wl[El]=null;for(;e===gt;)gt=Tn[--Cn],Tn[Cn]=null,kn=Tn[--Cn],Tn[Cn]=null,Yn=Tn[--Cn],Tn[Cn]=null}function Gf(e,n){Tn[Cn++]=Yn,Tn[Cn++]=kn,Tn[Cn++]=gt,Yn=n.id,kn=n.overflow,gt=e}var Ke=null,Se=null,oe=!1,vt=null,qn=!1,xc=Error(o(519));function _t(e){var n=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw gi(jn(n,e)),xc}function Qf(e){var n=e.stateNode,t=e.type,i=e.memoizedProps;switch(n[Ve]=e,n[ln]=i,t){case"dialog":ue("cancel",n),ue("close",n);break;case"iframe":case"object":case"embed":ue("load",n);break;case"video":case"audio":for(t=0;t<Bi.length;t++)ue(Bi[t],n);break;case"source":ue("error",n);break;case"img":case"image":case"link":ue("error",n),ue("load",n);break;case"details":ue("toggle",n);break;case"input":ue("invalid",n),nf(n,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ue("invalid",n);break;case"textarea":ue("invalid",n),lf(n,i.value,i.defaultValue,i.children)}t=i.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||i.suppressHydrationWarning===!0||um(n.textContent,t)?(i.popover!=null&&(ue("beforetoggle",n),ue("toggle",n)),i.onScroll!=null&&ue("scroll",n),i.onScrollEnd!=null&&ue("scrollend",n),i.onClick!=null&&(n.onclick=Jn),n=!0):n=!1,n||_t(e,!0)}function Xf(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 31:case 13:qn=!1;return;case 27:case 3:qn=!0;return;default:Ke=Ke.return}}function jl(e){if(e!==Ke)return!1;if(!oe)return Xf(e),oe=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Yr(e.type,e.memoizedProps)),t=!t),t&&Se&&_t(e),Xf(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Se=dm(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Se=dm(e)}else n===27?(n=Se,Rt(e.type)?(e=Zr,Zr=null,Se=e):Se=n):Se=Ke?Nn(e.stateNode.nextSibling):null;return!0}function $t(){Se=Ke=null,oe=!1}function bc(){var e=vt;return e!==null&&(on===null?on=e:on.push.apply(on,e),vt=null),e}function gi(e){vt===null?vt=[e]:vt.push(e)}var Sc=z(null),It=null,In=null;function At(e,n,t){G(Sc,n._currentValue),n._currentValue=t}function Pn(e){e._currentValue=Sc.current,M(Sc)}function wc(e,n,t){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===t)break;e=e.return}}function Ec(e,n,t,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var u=a.dependencies;if(u!==null){var s=a.child;u=u.firstContext;e:for(;u!==null;){var h=u;u=a;for(var v=0;v<n.length;v++)if(h.context===n[v]){u.lanes|=t,h=u.alternate,h!==null&&(h.lanes|=t),wc(u.return,t,e),i||(s=null);break e}u=h.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(o(341));s.lanes|=t,u=s.alternate,u!==null&&(u.lanes|=t),wc(s,t,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Tl(e,n,t,i){e=null;for(var a=n,u=!1;a!==null;){if(!u){if((a.flags&524288)!==0)u=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(o(387));if(s=s.memoizedProps,s!==null){var h=a.type;gn(a.pendingProps.value,s.value)||(e!==null?e.push(h):e=[h])}}else if(a===he.current){if(s=a.alternate,s===null)throw Error(o(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Xi):e=[Xi])}a=a.return}e!==null&&Ec(n,e,t,i),n.flags|=262144}function Ta(e){for(e=e.firstContext;e!==null;){if(!gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pt(e){It=e,In=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Je(e){return Zf(It,e)}function Ca(e,n){return It===null&&Pt(e),Zf(e,n)}function Zf(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},In===null){if(e===null)throw Error(o(308));In=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else In=In.next=n;return t}var ky=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,i){e.push(i)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Gy=l.unstable_scheduleCallback,Qy=l.unstable_NormalPriority,Ue={$$typeof:W,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jc(){return{controller:new ky,data:new Map,refCount:0}}function vi(e){e.refCount--,e.refCount===0&&Gy(Qy,function(){e.controller.abort()})}var _i=null,Tc=0,Cl=0,ql=null;function Xy(e,n){if(_i===null){var t=_i=[];Tc=0,Cl=Or(),ql={status:"pending",value:void 0,then:function(i){t.push(i)}}}return Tc++,n.then(Vf,Vf),n}function Vf(){if(--Tc===0&&_i!==null){ql!==null&&(ql.status="fulfilled");var e=_i;_i=null,Cl=0,ql=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Zy(e,n){var t=[],i={status:"pending",value:null,reason:null,then:function(a){t.push(a)}};return e.then(function(){i.status="fulfilled",i.value=n;for(var a=0;a<t.length;a++)(0,t[a])(n)},function(a){for(i.status="rejected",i.reason=a,a=0;a<t.length;a++)(0,t[a])(void 0)}),i}var Kf=T.S;T.S=function(e,n){qp=hn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Xy(e,n),Kf!==null&&Kf(e,n)};var el=z(null);function Cc(){var e=el.current;return e!==null?e:xe.pooledCache}function qa(e,n){n===null?G(el,el.current):G(el,n.pool)}function Jf(){var e=Cc();return e===null?null:{parent:Ue._currentValue,pool:e}}var Ol=Error(o(460)),qc=Error(o(474)),Oa=Error(o(542)),Na={then:function(){}};function Ff(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Wf(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(Jn,Jn),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,If(e),e;default:if(typeof n.status=="string")n.then(Jn,Jn);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=n,e.status="pending",e.then(function(i){if(n.status==="pending"){var a=n;a.status="fulfilled",a.value=i}},function(i){if(n.status==="pending"){var a=n;a.status="rejected",a.reason=i}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,If(e),e}throw tl=n,Ol}}function nl(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(tl=t,Ol):t}}var tl=null;function $f(){if(tl===null)throw Error(o(459));var e=tl;return tl=null,e}function If(e){if(e===Ol||e===Oa)throw Error(o(483))}var Nl=null,Ai=0;function Ra(e){var n=Ai;return Ai+=1,Nl===null&&(Nl=[]),Wf(Nl,e,n)}function zi(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ma(e,n){throw n.$$typeof===O?Error(o(525)):(e=Object.prototype.toString.call(n),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Pf(e){function n(b,A){if(e){var S=b.deletions;S===null?(b.deletions=[A],b.flags|=16):S.push(A)}}function t(b,A){if(!e)return null;for(;A!==null;)n(b,A),A=A.sibling;return null}function i(b){for(var A=new Map;b!==null;)b.key!==null?A.set(b.key,b):A.set(b.index,b),b=b.sibling;return A}function a(b,A){return b=Wn(b,A),b.index=0,b.sibling=null,b}function u(b,A,S){return b.index=S,e?(S=b.alternate,S!==null?(S=S.index,S<A?(b.flags|=67108866,A):S):(b.flags|=67108866,A)):(b.flags|=1048576,A)}function s(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function h(b,A,S,N){return A===null||A.tag!==6?(A=vc(S,b.mode,N),A.return=b,A):(A=a(A,S),A.return=b,A)}function v(b,A,S,N){var F=S.type;return F===L?q(b,A,S.props.children,N,S.key):A!==null&&(A.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===je&&nl(F)===A.type)?(A=a(A,S.props),zi(A,S),A.return=b,A):(A=Ea(S.type,S.key,S.props,null,b.mode,N),zi(A,S),A.return=b,A)}function w(b,A,S,N){return A===null||A.tag!==4||A.stateNode.containerInfo!==S.containerInfo||A.stateNode.implementation!==S.implementation?(A=_c(S,b.mode,N),A.return=b,A):(A=a(A,S.children||[]),A.return=b,A)}function q(b,A,S,N,F){return A===null||A.tag!==7?(A=Wt(S,b.mode,N,F),A.return=b,A):(A=a(A,S),A.return=b,A)}function R(b,A,S){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=vc(""+A,b.mode,S),A.return=b,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case D:return S=Ea(A.type,A.key,A.props,null,b.mode,S),zi(S,A),S.return=b,S;case k:return A=_c(A,b.mode,S),A.return=b,A;case je:return A=nl(A),R(b,A,S)}if(mn(A)||Ze(A))return A=Wt(A,b.mode,S,null),A.return=b,A;if(typeof A.then=="function")return R(b,Ra(A),S);if(A.$$typeof===W)return R(b,Ca(b,A),S);Ma(b,A)}return null}function E(b,A,S,N){var F=A!==null?A.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return F!==null?null:h(b,A,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case D:return S.key===F?v(b,A,S,N):null;case k:return S.key===F?w(b,A,S,N):null;case je:return S=nl(S),E(b,A,S,N)}if(mn(S)||Ze(S))return F!==null?null:q(b,A,S,N,null);if(typeof S.then=="function")return E(b,A,Ra(S),N);if(S.$$typeof===W)return E(b,A,Ca(b,S),N);Ma(b,S)}return null}function C(b,A,S,N,F){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return b=b.get(S)||null,h(A,b,""+N,F);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case D:return b=b.get(N.key===null?S:N.key)||null,v(A,b,N,F);case k:return b=b.get(N.key===null?S:N.key)||null,w(A,b,N,F);case je:return N=nl(N),C(b,A,S,N,F)}if(mn(N)||Ze(N))return b=b.get(S)||null,q(A,b,N,F,null);if(typeof N.then=="function")return C(b,A,S,Ra(N),F);if(N.$$typeof===W)return C(b,A,S,Ca(A,N),F);Ma(A,N)}return null}function X(b,A,S,N){for(var F=null,se=null,V=A,te=A=0,re=null;V!==null&&te<S.length;te++){V.index>te?(re=V,V=null):re=V.sibling;var pe=E(b,V,S[te],N);if(pe===null){V===null&&(V=re);break}e&&V&&pe.alternate===null&&n(b,V),A=u(pe,A,te),se===null?F=pe:se.sibling=pe,se=pe,V=re}if(te===S.length)return t(b,V),oe&&$n(b,te),F;if(V===null){for(;te<S.length;te++)V=R(b,S[te],N),V!==null&&(A=u(V,A,te),se===null?F=V:se.sibling=V,se=V);return oe&&$n(b,te),F}for(V=i(V);te<S.length;te++)re=C(V,b,te,S[te],N),re!==null&&(e&&re.alternate!==null&&V.delete(re.key===null?te:re.key),A=u(re,A,te),se===null?F=re:se.sibling=re,se=re);return e&&V.forEach(function(Lt){return n(b,Lt)}),oe&&$n(b,te),F}function $(b,A,S,N){if(S==null)throw Error(o(151));for(var F=null,se=null,V=A,te=A=0,re=null,pe=S.next();V!==null&&!pe.done;te++,pe=S.next()){V.index>te?(re=V,V=null):re=V.sibling;var Lt=E(b,V,pe.value,N);if(Lt===null){V===null&&(V=re);break}e&&V&&Lt.alternate===null&&n(b,V),A=u(Lt,A,te),se===null?F=Lt:se.sibling=Lt,se=Lt,V=re}if(pe.done)return t(b,V),oe&&$n(b,te),F;if(V===null){for(;!pe.done;te++,pe=S.next())pe=R(b,pe.value,N),pe!==null&&(A=u(pe,A,te),se===null?F=pe:se.sibling=pe,se=pe);return oe&&$n(b,te),F}for(V=i(V);!pe.done;te++,pe=S.next())pe=C(V,b,te,pe.value,N),pe!==null&&(e&&pe.alternate!==null&&V.delete(pe.key===null?te:pe.key),A=u(pe,A,te),se===null?F=pe:se.sibling=pe,se=pe);return e&&V.forEach(function(tg){return n(b,tg)}),oe&&$n(b,te),F}function ze(b,A,S,N){if(typeof S=="object"&&S!==null&&S.type===L&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case D:e:{for(var F=S.key;A!==null;){if(A.key===F){if(F=S.type,F===L){if(A.tag===7){t(b,A.sibling),N=a(A,S.props.children),N.return=b,b=N;break e}}else if(A.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===je&&nl(F)===A.type){t(b,A.sibling),N=a(A,S.props),zi(N,S),N.return=b,b=N;break e}t(b,A);break}else n(b,A);A=A.sibling}S.type===L?(N=Wt(S.props.children,b.mode,N,S.key),N.return=b,b=N):(N=Ea(S.type,S.key,S.props,null,b.mode,N),zi(N,S),N.return=b,b=N)}return s(b);case k:e:{for(F=S.key;A!==null;){if(A.key===F)if(A.tag===4&&A.stateNode.containerInfo===S.containerInfo&&A.stateNode.implementation===S.implementation){t(b,A.sibling),N=a(A,S.children||[]),N.return=b,b=N;break e}else{t(b,A);break}else n(b,A);A=A.sibling}N=_c(S,b.mode,N),N.return=b,b=N}return s(b);case je:return S=nl(S),ze(b,A,S,N)}if(mn(S))return X(b,A,S,N);if(Ze(S)){if(F=Ze(S),typeof F!="function")throw Error(o(150));return S=F.call(S),$(b,A,S,N)}if(typeof S.then=="function")return ze(b,A,Ra(S),N);if(S.$$typeof===W)return ze(b,A,Ca(b,S),N);Ma(b,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,A!==null&&A.tag===6?(t(b,A.sibling),N=a(A,S),N.return=b,b=N):(t(b,A),N=vc(S,b.mode,N),N.return=b,b=N),s(b)):t(b,A)}return function(b,A,S,N){try{Ai=0;var F=ze(b,A,S,N);return Nl=null,F}catch(V){if(V===Ol||V===Oa)throw V;var se=vn(29,V,null,b.mode);return se.lanes=N,se.return=b,se}}}var ll=Pf(!0),es=Pf(!1),zt=!1;function Oc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function bt(e,n,t){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(me&2)!==0){var a=i.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),i.pending=n,n=wa(e),Hf(e,null,t),n}return Sa(e,i,n,t),wa(e)}function xi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,Xo(e,t)}}function Rc(e,n){var t=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var a=null,u=null;if(t=t.firstBaseUpdate,t!==null){do{var s={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};u===null?a=u=s:u=u.next=s,t=t.next}while(t!==null);u===null?a=u=n:u=u.next=n}else a=u=n;t={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:i.shared,callbacks:i.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Mc=!1;function bi(){if(Mc){var e=ql;if(e!==null)throw e}}function Si(e,n,t,i){Mc=!1;var a=e.updateQueue;zt=!1;var u=a.firstBaseUpdate,s=a.lastBaseUpdate,h=a.shared.pending;if(h!==null){a.shared.pending=null;var v=h,w=v.next;v.next=null,s===null?u=w:s.next=w,s=v;var q=e.alternate;q!==null&&(q=q.updateQueue,h=q.lastBaseUpdate,h!==s&&(h===null?q.firstBaseUpdate=w:h.next=w,q.lastBaseUpdate=v))}if(u!==null){var R=a.baseState;s=0,q=w=v=null,h=u;do{var E=h.lane&-536870913,C=E!==h.lane;if(C?(ce&E)===E:(i&E)===E){E!==0&&E===Cl&&(Mc=!0),q!==null&&(q=q.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var X=e,$=h;E=n;var ze=t;switch($.tag){case 1:if(X=$.payload,typeof X=="function"){R=X.call(ze,R,E);break e}R=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=$.payload,E=typeof X=="function"?X.call(ze,R,E):X,E==null)break e;R=_({},R,E);break e;case 2:zt=!0}}E=h.callback,E!==null&&(e.flags|=64,C&&(e.flags|=8192),C=a.callbacks,C===null?a.callbacks=[E]:C.push(E))}else C={lane:E,tag:h.tag,payload:h.payload,callback:h.callback,next:null},q===null?(w=q=C,v=R):q=q.next=C,s|=E;if(h=h.next,h===null){if(h=a.shared.pending,h===null)break;C=h,h=C.next,C.next=null,a.lastBaseUpdate=C,a.shared.pending=null}}while(!0);q===null&&(v=R),a.baseState=v,a.firstBaseUpdate=w,a.lastBaseUpdate=q,u===null&&(a.shared.lanes=0),Tt|=s,e.lanes=s,e.memoizedState=R}}function ns(e,n){if(typeof e!="function")throw Error(o(191,e));e.call(n)}function ts(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)ns(t[e],n)}var Rl=z(null),Da=z(0);function ls(e,n){e=rt,G(Da,e),G(Rl,n),rt=e|n.baseLanes}function Dc(){G(Da,rt),G(Rl,Rl.current)}function Uc(){rt=Da.current,M(Rl),M(Da)}var _n=z(null),On=null;function St(e){var n=e.alternate;G(Me,Me.current&1),G(_n,e),On===null&&(n===null||Rl.current!==null||n.memoizedState!==null)&&(On=e)}function Hc(e){G(Me,Me.current),G(_n,e),On===null&&(On=e)}function is(e){e.tag===22?(G(Me,Me.current),G(_n,e),On===null&&(On=e)):wt()}function wt(){G(Me,Me.current),G(_n,_n.current)}function An(e){M(_n),On===e&&(On=null),M(Me)}var Me=z(0);function Ua(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Qr(t)||Xr(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var et=0,ne=null,_e=null,He=null,Ha=!1,Ml=!1,il=!1,La=0,wi=0,Dl=null,Vy=0;function Oe(){throw Error(o(321))}function Lc(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!gn(e[t],n[t]))return!1;return!0}function Bc(e,n,t,i,a,u){return et=u,ne=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,T.H=e===null||e.memoizedState===null?ks:er,il=!1,u=t(i,a),il=!1,Ml&&(u=us(n,t,i,a)),as(e),u}function as(e){T.H=Ti;var n=_e!==null&&_e.next!==null;if(et=0,He=_e=ne=null,Ha=!1,wi=0,Dl=null,n)throw Error(o(300));e===null||Le||(e=e.dependencies,e!==null&&Ta(e)&&(Le=!0))}function us(e,n,t,i){ne=e;var a=0;do{if(Ml&&(Dl=null),wi=0,Ml=!1,25<=a)throw Error(o(301));if(a+=1,He=_e=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}T.H=Gs,u=n(t,i)}while(Ml);return u}function Ky(){var e=T.H,n=e.useState()[0];return n=typeof n.then=="function"?Ei(n):n,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(ne.flags|=1024),n}function Yc(){var e=La!==0;return La=0,e}function kc(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function Gc(e){if(Ha){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ha=!1}et=0,He=_e=ne=null,Ml=!1,wi=La=0,Dl=null}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?ne.memoizedState=He=e:He=He.next=e,He}function De(){if(_e===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var n=He===null?ne.memoizedState:He.next;if(n!==null)He=n,_e=e;else{if(e===null)throw ne.alternate===null?Error(o(467)):Error(o(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},He===null?ne.memoizedState=He=e:He=He.next=e}return He}function Ba(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ei(e){var n=wi;return wi+=1,Dl===null&&(Dl=[]),e=Wf(Dl,e,n),n=ne,(He===null?n.memoizedState:He.next)===null&&(n=n.alternate,T.H=n===null||n.memoizedState===null?ks:er),e}function Ya(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ei(e);if(e.$$typeof===W)return Je(e)}throw Error(o(438,String(e)))}function Qc(e){var n=null,t=ne.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var i=ne.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(n={data:i.data.map(function(a){return a.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Ba(),ne.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),i=0;i<e;i++)t[i]=qe;return n.index++,t}function nt(e,n){return typeof n=="function"?n(e):n}function ka(e){var n=De();return Xc(n,_e,e)}function Xc(e,n,t){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=t;var a=e.baseQueue,u=i.pending;if(u!==null){if(a!==null){var s=a.next;a.next=u.next,u.next=s}n.baseQueue=a=u,i.pending=null}if(u=e.baseState,a===null)e.memoizedState=u;else{n=a.next;var h=s=null,v=null,w=n,q=!1;do{var R=w.lane&-536870913;if(R!==w.lane?(ce&R)===R:(et&R)===R){var E=w.revertLane;if(E===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),R===Cl&&(q=!0);else if((et&E)===E){w=w.next,E===Cl&&(q=!0);continue}else R={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(h=v=R,s=u):v=v.next=R,ne.lanes|=E,Tt|=E;R=w.action,il&&t(u,R),u=w.hasEagerState?w.eagerState:t(u,R)}else E={lane:R,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(h=v=E,s=u):v=v.next=E,ne.lanes|=R,Tt|=R;w=w.next}while(w!==null&&w!==n);if(v===null?s=u:v.next=h,!gn(u,e.memoizedState)&&(Le=!0,q&&(t=ql,t!==null)))throw t;e.memoizedState=u,e.baseState=s,e.baseQueue=v,i.lastRenderedState=u}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Zc(e){var n=De(),t=n.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=e;var i=t.dispatch,a=t.pending,u=n.memoizedState;if(a!==null){t.pending=null;var s=a=a.next;do u=e(u,s.action),s=s.next;while(s!==a);gn(u,n.memoizedState)||(Le=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),t.lastRenderedState=u}return[u,i]}function cs(e,n,t){var i=ne,a=De(),u=oe;if(u){if(t===void 0)throw Error(o(407));t=t()}else t=n();var s=!gn((_e||a).memoizedState,t);if(s&&(a.memoizedState=t,Le=!0),a=a.queue,Jc(fs.bind(null,i,a,e),[e]),a.getSnapshot!==n||s||He!==null&&He.memoizedState.tag&1){if(i.flags|=2048,Ul(9,{destroy:void 0},os.bind(null,i,a,t,n),null),xe===null)throw Error(o(349));u||(et&127)!==0||rs(i,n,t)}return t}function rs(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ne.updateQueue,n===null?(n=Ba(),ne.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function os(e,n,t,i){n.value=t,n.getSnapshot=i,ss(n)&&ps(e)}function fs(e,n,t){return t(function(){ss(n)&&ps(e)})}function ss(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!gn(e,t)}catch{return!0}}function ps(e){var n=Ft(e,2);n!==null&&fn(n,e,2)}function Vc(e){var n=nn();if(typeof e=="function"){var t=e;if(e=t(),il){ht(!0);try{t()}finally{ht(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nt,lastRenderedState:e},n}function ms(e,n,t,i){return e.baseState=t,Xc(e,_e,typeof i=="function"?i:nt)}function Jy(e,n,t,i,a){if(Xa(e))throw Error(o(485));if(e=n.action,e!==null){var u={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){u.listeners.push(s)}};T.T!==null?t(!0):u.isTransition=!1,i(u),t=n.pending,t===null?(u.next=n.pending=u,hs(n,u)):(u.next=t.next,n.pending=t.next=u)}}function hs(e,n){var t=n.action,i=n.payload,a=e.state;if(n.isTransition){var u=T.T,s={};T.T=s;try{var h=t(a,i),v=T.S;v!==null&&v(s,h),ds(e,n,h)}catch(w){Kc(e,n,w)}finally{u!==null&&s.types!==null&&(u.types=s.types),T.T=u}}else try{u=t(a,i),ds(e,n,u)}catch(w){Kc(e,n,w)}}function ds(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(i){ys(e,n,i)},function(i){return Kc(e,n,i)}):ys(e,n,t)}function ys(e,n,t){n.status="fulfilled",n.value=t,gs(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,hs(e,t)))}function Kc(e,n,t){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do n.status="rejected",n.reason=t,gs(n),n=n.next;while(n!==i)}e.action=null}function gs(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function vs(e,n){return n}function _s(e,n){if(oe){var t=xe.formState;if(t!==null){e:{var i=ne;if(oe){if(Se){n:{for(var a=Se,u=qn;a.nodeType!==8;){if(!u){a=null;break n}if(a=Nn(a.nextSibling),a===null){a=null;break n}}u=a.data,a=u==="F!"||u==="F"?a:null}if(a){Se=Nn(a.nextSibling),i=a.data==="F!";break e}}_t(i)}i=!1}i&&(n=t[0])}}return t=nn(),t.memoizedState=t.baseState=n,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:n},t.queue=i,t=Ls.bind(null,ne,i),i.dispatch=t,i=Vc(!1),u=Pc.bind(null,ne,!1,i.queue),i=nn(),a={state:n,dispatch:null,action:e,pending:null},i.queue=a,t=Jy.bind(null,ne,a,u,t),a.dispatch=t,i.memoizedState=e,[n,t,!1]}function As(e){var n=De();return zs(n,_e,e)}function zs(e,n,t){if(n=Xc(e,n,vs)[0],e=ka(nt)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var i=Ei(n)}catch(s){throw s===Ol?Oa:s}else i=n;n=De();var a=n.queue,u=a.dispatch;return t!==n.memoizedState&&(ne.flags|=2048,Ul(9,{destroy:void 0},Fy.bind(null,a,t),null)),[i,u,e]}function Fy(e,n){e.action=n}function xs(e){var n=De(),t=_e;if(t!==null)return zs(n,t,e);De(),n=n.memoizedState,t=De();var i=t.queue.dispatch;return t.memoizedState=e,[n,i,!1]}function Ul(e,n,t,i){return e={tag:e,create:t,deps:i,inst:n,next:null},n=ne.updateQueue,n===null&&(n=Ba(),ne.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(i=t.next,t.next=e,e.next=i,n.lastEffect=e),e}function bs(){return De().memoizedState}function Ga(e,n,t,i){var a=nn();ne.flags|=e,a.memoizedState=Ul(1|n,{destroy:void 0},t,i===void 0?null:i)}function Qa(e,n,t,i){var a=De();i=i===void 0?null:i;var u=a.memoizedState.inst;_e!==null&&i!==null&&Lc(i,_e.memoizedState.deps)?a.memoizedState=Ul(n,u,t,i):(ne.flags|=e,a.memoizedState=Ul(1|n,u,t,i))}function Ss(e,n){Ga(8390656,8,e,n)}function Jc(e,n){Qa(2048,8,e,n)}function Wy(e){ne.flags|=4;var n=ne.updateQueue;if(n===null)n=Ba(),ne.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function ws(e){var n=De().memoizedState;return Wy({ref:n,nextImpl:e}),function(){if((me&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}function Es(e,n){return Qa(4,2,e,n)}function js(e,n){return Qa(4,4,e,n)}function Ts(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Cs(e,n,t){t=t!=null?t.concat([e]):null,Qa(4,4,Ts.bind(null,n,e),t)}function Fc(){}function qs(e,n){var t=De();n=n===void 0?null:n;var i=t.memoizedState;return n!==null&&Lc(n,i[1])?i[0]:(t.memoizedState=[e,n],e)}function Os(e,n){var t=De();n=n===void 0?null:n;var i=t.memoizedState;if(n!==null&&Lc(n,i[1]))return i[0];if(i=e(),il){ht(!0);try{e()}finally{ht(!1)}}return t.memoizedState=[i,n],i}function Wc(e,n,t){return t===void 0||(et&1073741824)!==0&&(ce&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=Np(),ne.lanes|=e,Tt|=e,t)}function Ns(e,n,t,i){return gn(t,n)?t:Rl.current!==null?(e=Wc(e,t,i),gn(e,n)||(Le=!0),e):(et&42)===0||(et&1073741824)!==0&&(ce&261930)===0?(Le=!0,e.memoizedState=t):(e=Np(),ne.lanes|=e,Tt|=e,n)}function Rs(e,n,t,i,a){var u=Y.p;Y.p=u!==0&&8>u?u:8;var s=T.T,h={};T.T=h,Pc(e,!1,n,t);try{var v=a(),w=T.S;if(w!==null&&w(h,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var q=Zy(v,i);ji(e,n,q,bn(e))}else ji(e,n,i,bn(e))}catch(R){ji(e,n,{then:function(){},status:"rejected",reason:R},bn())}finally{Y.p=u,s!==null&&h.types!==null&&(s.types=h.types),T.T=s}}function $y(){}function $c(e,n,t,i){if(e.tag!==5)throw Error(o(476));var a=Ms(e).queue;Rs(e,a,n,K,t===null?$y:function(){return Ds(e),t(i)})}function Ms(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nt,lastRenderedState:K},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nt,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Ds(e){var n=Ms(e);n.next===null&&(n=e.alternate.memoizedState),ji(e,n.next.queue,{},bn())}function Ic(){return Je(Xi)}function Us(){return De().memoizedState}function Hs(){return De().memoizedState}function Iy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=bn();e=xt(t);var i=bt(n,e,t);i!==null&&(fn(i,n,t),xi(i,n,t)),n={cache:jc()},e.payload=n;return}n=n.return}}function Py(e,n,t){var i=bn();t={lane:i,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Xa(e)?Bs(n,t):(t=yc(e,n,t,i),t!==null&&(fn(t,e,i),Ys(t,n,i)))}function Ls(e,n,t){var i=bn();ji(e,n,t,i)}function ji(e,n,t,i){var a={lane:i,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Xa(e))Bs(n,a);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var s=n.lastRenderedState,h=u(s,t);if(a.hasEagerState=!0,a.eagerState=h,gn(h,s))return Sa(e,n,a,0),xe===null&&ba(),!1}catch{}if(t=yc(e,n,a,i),t!==null)return fn(t,e,i),Ys(t,n,i),!0}return!1}function Pc(e,n,t,i){if(i={lane:2,revertLane:Or(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Xa(e)){if(n)throw Error(o(479))}else n=yc(e,t,i,2),n!==null&&fn(n,e,2)}function Xa(e){var n=e.alternate;return e===ne||n!==null&&n===ne}function Bs(e,n){Ml=Ha=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ys(e,n,t){if((t&4194048)!==0){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,Xo(e,t)}}var Ti={readContext:Je,use:Ya,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useLayoutEffect:Oe,useInsertionEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useSyncExternalStore:Oe,useId:Oe,useHostTransitionStatus:Oe,useFormState:Oe,useActionState:Oe,useOptimistic:Oe,useMemoCache:Oe,useCacheRefresh:Oe};Ti.useEffectEvent=Oe;var ks={readContext:Je,use:Ya,useCallback:function(e,n){return nn().memoizedState=[e,n===void 0?null:n],e},useContext:Je,useEffect:Ss,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Ga(4194308,4,Ts.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ga(4194308,4,e,n)},useInsertionEffect:function(e,n){Ga(4,2,e,n)},useMemo:function(e,n){var t=nn();n=n===void 0?null:n;var i=e();if(il){ht(!0);try{e()}finally{ht(!1)}}return t.memoizedState=[i,n],i},useReducer:function(e,n,t){var i=nn();if(t!==void 0){var a=t(n);if(il){ht(!0);try{t(n)}finally{ht(!1)}}}else a=n;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=Py.bind(null,ne,e),[i.memoizedState,e]},useRef:function(e){var n=nn();return e={current:e},n.memoizedState=e},useState:function(e){e=Vc(e);var n=e.queue,t=Ls.bind(null,ne,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Fc,useDeferredValue:function(e,n){var t=nn();return Wc(t,e,n)},useTransition:function(){var e=Vc(!1);return e=Rs.bind(null,ne,e.queue,!0,!1),nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var i=ne,a=nn();if(oe){if(t===void 0)throw Error(o(407));t=t()}else{if(t=n(),xe===null)throw Error(o(349));(ce&127)!==0||rs(i,n,t)}a.memoizedState=t;var u={value:t,getSnapshot:n};return a.queue=u,Ss(fs.bind(null,i,u,e),[e]),i.flags|=2048,Ul(9,{destroy:void 0},os.bind(null,i,u,t,n),null),t},useId:function(){var e=nn(),n=xe.identifierPrefix;if(oe){var t=kn,i=Yn;t=(i&~(1<<32-yn(i)-1)).toString(32)+t,n="_"+n+"R_"+t,t=La++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=Vy++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ic,useFormState:_s,useActionState:_s,useOptimistic:function(e){var n=nn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=Pc.bind(null,ne,!0,t),t.dispatch=n,[e,n]},useMemoCache:Qc,useCacheRefresh:function(){return nn().memoizedState=Iy.bind(null,ne)},useEffectEvent:function(e){var n=nn(),t={impl:e};return n.memoizedState=t,function(){if((me&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}},er={readContext:Je,use:Ya,useCallback:qs,useContext:Je,useEffect:Jc,useImperativeHandle:Cs,useInsertionEffect:Es,useLayoutEffect:js,useMemo:Os,useReducer:ka,useRef:bs,useState:function(){return ka(nt)},useDebugValue:Fc,useDeferredValue:function(e,n){var t=De();return Ns(t,_e.memoizedState,e,n)},useTransition:function(){var e=ka(nt)[0],n=De().memoizedState;return[typeof e=="boolean"?e:Ei(e),n]},useSyncExternalStore:cs,useId:Us,useHostTransitionStatus:Ic,useFormState:As,useActionState:As,useOptimistic:function(e,n){var t=De();return ms(t,_e,e,n)},useMemoCache:Qc,useCacheRefresh:Hs};er.useEffectEvent=ws;var Gs={readContext:Je,use:Ya,useCallback:qs,useContext:Je,useEffect:Jc,useImperativeHandle:Cs,useInsertionEffect:Es,useLayoutEffect:js,useMemo:Os,useReducer:Zc,useRef:bs,useState:function(){return Zc(nt)},useDebugValue:Fc,useDeferredValue:function(e,n){var t=De();return _e===null?Wc(t,e,n):Ns(t,_e.memoizedState,e,n)},useTransition:function(){var e=Zc(nt)[0],n=De().memoizedState;return[typeof e=="boolean"?e:Ei(e),n]},useSyncExternalStore:cs,useId:Us,useHostTransitionStatus:Ic,useFormState:xs,useActionState:xs,useOptimistic:function(e,n){var t=De();return _e!==null?ms(t,_e,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Qc,useCacheRefresh:Hs};Gs.useEffectEvent=ws;function nr(e,n,t,i){n=e.memoizedState,t=t(i,n),t=t==null?n:_({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var tr={enqueueSetState:function(e,n,t){e=e._reactInternals;var i=bn(),a=xt(i);a.payload=n,t!=null&&(a.callback=t),n=bt(e,a,i),n!==null&&(fn(n,e,i),xi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var i=bn(),a=xt(i);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=bt(e,a,i),n!==null&&(fn(n,e,i),xi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=bn(),i=xt(t);i.tag=2,n!=null&&(i.callback=n),n=bt(e,i,t),n!==null&&(fn(n,e,t),xi(n,e,t))}};function Qs(e,n,t,i,a,u,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,s):n.prototype&&n.prototype.isPureReactComponent?!hi(t,i)||!hi(a,u):!0}function Xs(e,n,t,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,i),n.state!==e&&tr.enqueueReplaceState(n,n.state,null)}function al(e,n){var t=n;if("ref"in n){t={};for(var i in n)i!=="ref"&&(t[i]=n[i])}if(e=e.defaultProps){t===n&&(t=_({},t));for(var a in e)t[a]===void 0&&(t[a]=e[a])}return t}function Zs(e){xa(e)}function Vs(e){console.error(e)}function Ks(e){xa(e)}function Za(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(i){setTimeout(function(){throw i})}}function Js(e,n,t){try{var i=e.onCaughtError;i(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function lr(e,n,t){return t=xt(t),t.tag=3,t.payload={element:null},t.callback=function(){Za(e,n)},t}function Fs(e){return e=xt(e),e.tag=3,e}function Ws(e,n,t,i){var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var u=i.value;e.payload=function(){return a(u)},e.callback=function(){Js(n,t,i)}}var s=t.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Js(n,t,i),typeof a!="function"&&(Ct===null?Ct=new Set([this]):Ct.add(this));var h=i.stack;this.componentDidCatch(i.value,{componentStack:h!==null?h:""})})}function e0(e,n,t,i,a){if(t.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(n=t.alternate,n!==null&&Tl(n,t,a,!0),t=_n.current,t!==null){switch(t.tag){case 31:case 13:return On===null?lu():t.alternate===null&&Ne===0&&(Ne=3),t.flags&=-257,t.flags|=65536,t.lanes=a,i===Na?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([i]):n.add(i),Tr(e,i,a)),!1;case 22:return t.flags|=65536,i===Na?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([i])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([i]):t.add(i)),Tr(e,i,a)),!1}throw Error(o(435,t.tag))}return Tr(e,i,a),lu(),!1}if(oe)return n=_n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=a,i!==xc&&(e=Error(o(422),{cause:i}),gi(jn(e,t)))):(i!==xc&&(n=Error(o(423),{cause:i}),gi(jn(n,t))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=jn(i,t),a=lr(e.stateNode,i,a),Rc(e,a),Ne!==4&&(Ne=2)),!1;var u=Error(o(520),{cause:i});if(u=jn(u,t),Ui===null?Ui=[u]:Ui.push(u),Ne!==4&&(Ne=2),n===null)return!0;i=jn(i,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=a&-a,t.lanes|=e,e=lr(t.stateNode,i,e),Rc(t,e),!1;case 1:if(n=t.type,u=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Ct===null||!Ct.has(u))))return t.flags|=65536,a&=-a,t.lanes|=a,a=Fs(a),Ws(a,e,t,i),Rc(t,a),!1}t=t.return}while(t!==null);return!1}var ir=Error(o(461)),Le=!1;function Fe(e,n,t,i){n.child=e===null?es(n,null,t,i):ll(n,e.child,t,i)}function $s(e,n,t,i,a){t=t.render;var u=n.ref;if("ref"in i){var s={};for(var h in i)h!=="ref"&&(s[h]=i[h])}else s=i;return Pt(n),i=Bc(e,n,t,s,u,a),h=Yc(),e!==null&&!Le?(kc(e,n,a),tt(e,n,a)):(oe&&h&&Ac(n),n.flags|=1,Fe(e,n,i,a),n.child)}function Is(e,n,t,i,a){if(e===null){var u=t.type;return typeof u=="function"&&!gc(u)&&u.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=u,Ps(e,n,u,i,a)):(e=Ea(t.type,null,i,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(u=e.child,!pr(e,a)){var s=u.memoizedProps;if(t=t.compare,t=t!==null?t:hi,t(s,i)&&e.ref===n.ref)return tt(e,n,a)}return n.flags|=1,e=Wn(u,i),e.ref=n.ref,e.return=n,n.child=e}function Ps(e,n,t,i,a){if(e!==null){var u=e.memoizedProps;if(hi(u,i)&&e.ref===n.ref)if(Le=!1,n.pendingProps=i=u,pr(e,a))(e.flags&131072)!==0&&(Le=!0);else return n.lanes=e.lanes,tt(e,n,a)}return ar(e,n,t,i,a)}function ep(e,n,t,i){var a=i.children,u=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|t:t,e!==null){for(i=n.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~u}else i=0,n.child=null;return np(e,n,u,t,i)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&qa(n,u!==null?u.cachePool:null),u!==null?ls(n,u):Dc(),is(n);else return i=n.lanes=536870912,np(e,n,u!==null?u.baseLanes|t:t,t,i)}else u!==null?(qa(n,u.cachePool),ls(n,u),wt(),n.memoizedState=null):(e!==null&&qa(n,null),Dc(),wt());return Fe(e,n,a,t),n.child}function Ci(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function np(e,n,t,i,a){var u=Cc();return u=u===null?null:{parent:Ue._currentValue,pool:u},n.memoizedState={baseLanes:t,cachePool:u},e!==null&&qa(n,null),Dc(),is(n),e!==null&&Tl(e,n,i,!0),n.childLanes=a,null}function Va(e,n){return n=Ja({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function tp(e,n,t){return ll(n,e.child,null,t),e=Va(n,n.pendingProps),e.flags|=2,An(n),n.memoizedState=null,e}function n0(e,n,t){var i=n.pendingProps,a=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(oe){if(i.mode==="hidden")return e=Va(n,i),n.lanes=536870912,Ci(null,e);if(Hc(n),(e=Se)?(e=hm(e,qn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:gt!==null?{id:Yn,overflow:kn}:null,retryLane:536870912,hydrationErrors:null},t=Bf(e),t.return=n,n.child=t,Ke=n,Se=null)):e=null,e===null)throw _t(n);return n.lanes=536870912,null}return Va(n,i)}var u=e.memoizedState;if(u!==null){var s=u.dehydrated;if(Hc(n),a)if(n.flags&256)n.flags&=-257,n=tp(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(o(558));else if(Le||Tl(e,n,t,!1),a=(t&e.childLanes)!==0,Le||a){if(i=xe,i!==null&&(s=Zo(i,t),s!==0&&s!==u.retryLane))throw u.retryLane=s,Ft(e,s),fn(i,e,s),ir;lu(),n=tp(e,n,t)}else e=u.treeContext,Se=Nn(s.nextSibling),Ke=n,oe=!0,vt=null,qn=!1,e!==null&&Gf(n,e),n=Va(n,i),n.flags|=4096;return n}return e=Wn(e.child,{mode:i.mode,children:i.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ka(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(o(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function ar(e,n,t,i,a){return Pt(n),t=Bc(e,n,t,i,void 0,a),i=Yc(),e!==null&&!Le?(kc(e,n,a),tt(e,n,a)):(oe&&i&&Ac(n),n.flags|=1,Fe(e,n,t,a),n.child)}function lp(e,n,t,i,a,u){return Pt(n),n.updateQueue=null,t=us(n,i,t,a),as(e),i=Yc(),e!==null&&!Le?(kc(e,n,u),tt(e,n,u)):(oe&&i&&Ac(n),n.flags|=1,Fe(e,n,t,u),n.child)}function ip(e,n,t,i,a){if(Pt(n),n.stateNode===null){var u=Sl,s=t.contextType;typeof s=="object"&&s!==null&&(u=Je(s)),u=new t(i,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=tr,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=i,u.state=n.memoizedState,u.refs={},Oc(n),s=t.contextType,u.context=typeof s=="object"&&s!==null?Je(s):Sl,u.state=n.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(nr(n,t,s,i),u.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(s=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),s!==u.state&&tr.enqueueReplaceState(u,u.state,null),Si(n,i,u,a),bi(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),i=!0}else if(e===null){u=n.stateNode;var h=n.memoizedProps,v=al(t,h);u.props=v;var w=u.context,q=t.contextType;s=Sl,typeof q=="object"&&q!==null&&(s=Je(q));var R=t.getDerivedStateFromProps;q=typeof R=="function"||typeof u.getSnapshotBeforeUpdate=="function",h=n.pendingProps!==h,q||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h||w!==s)&&Xs(n,u,i,s),zt=!1;var E=n.memoizedState;u.state=E,Si(n,i,u,a),bi(),w=n.memoizedState,h||E!==w||zt?(typeof R=="function"&&(nr(n,t,R,i),w=n.memoizedState),(v=zt||Qs(n,t,v,i,E,w,s))?(q||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=w),u.props=i,u.state=w,u.context=s,i=v):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{u=n.stateNode,Nc(e,n),s=n.memoizedProps,q=al(t,s),u.props=q,R=n.pendingProps,E=u.context,w=t.contextType,v=Sl,typeof w=="object"&&w!==null&&(v=Je(w)),h=t.getDerivedStateFromProps,(w=typeof h=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s!==R||E!==v)&&Xs(n,u,i,v),zt=!1,E=n.memoizedState,u.state=E,Si(n,i,u,a),bi();var C=n.memoizedState;s!==R||E!==C||zt||e!==null&&e.dependencies!==null&&Ta(e.dependencies)?(typeof h=="function"&&(nr(n,t,h,i),C=n.memoizedState),(q=zt||Qs(n,t,q,i,E,C,v)||e!==null&&e.dependencies!==null&&Ta(e.dependencies))?(w||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(i,C,v),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(i,C,v)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||s===e.memoizedProps&&E===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&E===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=C),u.props=i,u.state=C,u.context=v,i=q):(typeof u.componentDidUpdate!="function"||s===e.memoizedProps&&E===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&E===e.memoizedState||(n.flags|=1024),i=!1)}return u=i,Ka(e,n),i=(n.flags&128)!==0,u||i?(u=n.stateNode,t=i&&typeof t.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,e!==null&&i?(n.child=ll(n,e.child,null,a),n.child=ll(n,null,t,a)):Fe(e,n,t,a),n.memoizedState=u.state,e=n.child):e=tt(e,n,a),e}function ap(e,n,t,i){return $t(),n.flags|=256,Fe(e,n,t,i),n.child}var ur={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cr(e){return{baseLanes:e,cachePool:Jf()}}function rr(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=xn),e}function up(e,n,t){var i=n.pendingProps,a=!1,u=(n.flags&128)!==0,s;if((s=u)||(s=e!==null&&e.memoizedState===null?!1:(Me.current&2)!==0),s&&(a=!0,n.flags&=-129),s=(n.flags&32)!==0,n.flags&=-33,e===null){if(oe){if(a?St(n):wt(),(e=Se)?(e=hm(e,qn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:gt!==null?{id:Yn,overflow:kn}:null,retryLane:536870912,hydrationErrors:null},t=Bf(e),t.return=n,n.child=t,Ke=n,Se=null)):e=null,e===null)throw _t(n);return Xr(e)?n.lanes=32:n.lanes=536870912,null}var h=i.children;return i=i.fallback,a?(wt(),a=n.mode,h=Ja({mode:"hidden",children:h},a),i=Wt(i,a,t,null),h.return=n,i.return=n,h.sibling=i,n.child=h,i=n.child,i.memoizedState=cr(t),i.childLanes=rr(e,s,t),n.memoizedState=ur,Ci(null,i)):(St(n),or(n,h))}var v=e.memoizedState;if(v!==null&&(h=v.dehydrated,h!==null)){if(u)n.flags&256?(St(n),n.flags&=-257,n=fr(e,n,t)):n.memoizedState!==null?(wt(),n.child=e.child,n.flags|=128,n=null):(wt(),h=i.fallback,a=n.mode,i=Ja({mode:"visible",children:i.children},a),h=Wt(h,a,t,null),h.flags|=2,i.return=n,h.return=n,i.sibling=h,n.child=i,ll(n,e.child,null,t),i=n.child,i.memoizedState=cr(t),i.childLanes=rr(e,s,t),n.memoizedState=ur,n=Ci(null,i));else if(St(n),Xr(h)){if(s=h.nextSibling&&h.nextSibling.dataset,s)var w=s.dgst;s=w,i=Error(o(419)),i.stack="",i.digest=s,gi({value:i,source:null,stack:null}),n=fr(e,n,t)}else if(Le||Tl(e,n,t,!1),s=(t&e.childLanes)!==0,Le||s){if(s=xe,s!==null&&(i=Zo(s,t),i!==0&&i!==v.retryLane))throw v.retryLane=i,Ft(e,i),fn(s,e,i),ir;Qr(h)||lu(),n=fr(e,n,t)}else Qr(h)?(n.flags|=192,n.child=e.child,n=null):(e=v.treeContext,Se=Nn(h.nextSibling),Ke=n,oe=!0,vt=null,qn=!1,e!==null&&Gf(n,e),n=or(n,i.children),n.flags|=4096);return n}return a?(wt(),h=i.fallback,a=n.mode,v=e.child,w=v.sibling,i=Wn(v,{mode:"hidden",children:i.children}),i.subtreeFlags=v.subtreeFlags&65011712,w!==null?h=Wn(w,h):(h=Wt(h,a,t,null),h.flags|=2),h.return=n,i.return=n,i.sibling=h,n.child=i,Ci(null,i),i=n.child,h=e.child.memoizedState,h===null?h=cr(t):(a=h.cachePool,a!==null?(v=Ue._currentValue,a=a.parent!==v?{parent:v,pool:v}:a):a=Jf(),h={baseLanes:h.baseLanes|t,cachePool:a}),i.memoizedState=h,i.childLanes=rr(e,s,t),n.memoizedState=ur,Ci(e.child,i)):(St(n),t=e.child,e=t.sibling,t=Wn(t,{mode:"visible",children:i.children}),t.return=n,t.sibling=null,e!==null&&(s=n.deletions,s===null?(n.deletions=[e],n.flags|=16):s.push(e)),n.child=t,n.memoizedState=null,t)}function or(e,n){return n=Ja({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ja(e,n){return e=vn(22,e,null,n),e.lanes=0,e}function fr(e,n,t){return ll(n,e.child,null,t),e=or(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function cp(e,n,t){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),wc(e.return,n,t)}function sr(e,n,t,i,a,u){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:a,treeForkCount:u}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=a,s.treeForkCount=u)}function rp(e,n,t){var i=n.pendingProps,a=i.revealOrder,u=i.tail;i=i.children;var s=Me.current,h=(s&2)!==0;if(h?(s=s&1|2,n.flags|=128):s&=1,G(Me,s),Fe(e,n,i,t),i=oe?yi:0,!h&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cp(e,t,n);else if(e.tag===19)cp(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&Ua(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),sr(n,!1,a,t,u,i);break;case"backwards":case"unstable_legacy-backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&Ua(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}sr(n,!0,t,null,u,i);break;case"together":sr(n,!1,null,null,void 0,i);break;default:n.memoizedState=null}return n.child}function tt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Tt|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(Tl(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(o(153));if(n.child!==null){for(e=n.child,t=Wn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Wn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function pr(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ta(e)))}function t0(e,n,t){switch(n.tag){case 3:en(n,n.stateNode.containerInfo),At(n,Ue,e.memoizedState.cache),$t();break;case 27:case 5:ni(n);break;case 4:en(n,n.stateNode.containerInfo);break;case 10:At(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Hc(n),null;break;case 13:var i=n.memoizedState;if(i!==null)return i.dehydrated!==null?(St(n),n.flags|=128,null):(t&n.child.childLanes)!==0?up(e,n,t):(St(n),e=tt(e,n,t),e!==null?e.sibling:null);St(n);break;case 19:var a=(e.flags&128)!==0;if(i=(t&n.childLanes)!==0,i||(Tl(e,n,t,!1),i=(t&n.childLanes)!==0),a){if(i)return rp(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),G(Me,Me.current),i)break;return null;case 22:return n.lanes=0,ep(e,n,t,n.pendingProps);case 24:At(n,Ue,e.memoizedState.cache)}return tt(e,n,t)}function op(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)Le=!0;else{if(!pr(e,t)&&(n.flags&128)===0)return Le=!1,t0(e,n,t);Le=(e.flags&131072)!==0}else Le=!1,oe&&(n.flags&1048576)!==0&&kf(n,yi,n.index);switch(n.lanes=0,n.tag){case 16:e:{var i=n.pendingProps;if(e=nl(n.elementType),n.type=e,typeof e=="function")gc(e)?(i=al(e,i),n.tag=1,n=ip(null,n,e,i,t)):(n.tag=0,n=ar(null,n,e,i,t));else{if(e!=null){var a=e.$$typeof;if(a===de){n.tag=11,n=$s(null,n,e,i,t);break e}else if(a===I){n.tag=14,n=Is(null,n,e,i,t);break e}}throw n=Un(e)||e,Error(o(306,n,""))}}return n;case 0:return ar(e,n,n.type,n.pendingProps,t);case 1:return i=n.type,a=al(i,n.pendingProps),ip(e,n,i,a,t);case 3:e:{if(en(n,n.stateNode.containerInfo),e===null)throw Error(o(387));i=n.pendingProps;var u=n.memoizedState;a=u.element,Nc(e,n),Si(n,i,null,t);var s=n.memoizedState;if(i=s.cache,At(n,Ue,i),i!==u.cache&&Ec(n,[Ue],t,!0),bi(),i=s.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:s.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=ap(e,n,i,t);break e}else if(i!==a){a=jn(Error(o(424)),n),gi(a),n=ap(e,n,i,t);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Se=Nn(e.firstChild),Ke=n,oe=!0,vt=null,qn=!0,t=es(n,null,i,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if($t(),i===a){n=tt(e,n,t);break e}Fe(e,n,i,t)}n=n.child}return n;case 26:return Ka(e,n),e===null?(t=Am(n.type,null,n.pendingProps,null))?n.memoizedState=t:oe||(t=n.type,e=n.pendingProps,i=fu(ie.current).createElement(t),i[Ve]=n,i[ln]=e,We(i,t,e),Qe(i),n.stateNode=i):n.memoizedState=Am(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ni(n),e===null&&oe&&(i=n.stateNode=gm(n.type,n.pendingProps,ie.current),Ke=n,qn=!0,a=Se,Rt(n.type)?(Zr=a,Se=Nn(i.firstChild)):Se=a),Fe(e,n,n.pendingProps.children,t),Ka(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&oe&&((a=i=Se)&&(i=N0(i,n.type,n.pendingProps,qn),i!==null?(n.stateNode=i,Ke=n,Se=Nn(i.firstChild),qn=!1,a=!0):a=!1),a||_t(n)),ni(n),a=n.type,u=n.pendingProps,s=e!==null?e.memoizedProps:null,i=u.children,Yr(a,u)?i=null:s!==null&&Yr(a,s)&&(n.flags|=32),n.memoizedState!==null&&(a=Bc(e,n,Ky,null,null,t),Xi._currentValue=a),Ka(e,n),Fe(e,n,i,t),n.child;case 6:return e===null&&oe&&((e=t=Se)&&(t=R0(t,n.pendingProps,qn),t!==null?(n.stateNode=t,Ke=n,Se=null,e=!0):e=!1),e||_t(n)),null;case 13:return up(e,n,t);case 4:return en(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=ll(n,null,i,t):Fe(e,n,i,t),n.child;case 11:return $s(e,n,n.type,n.pendingProps,t);case 7:return Fe(e,n,n.pendingProps,t),n.child;case 8:return Fe(e,n,n.pendingProps.children,t),n.child;case 12:return Fe(e,n,n.pendingProps.children,t),n.child;case 10:return i=n.pendingProps,At(n,n.type,i.value),Fe(e,n,i.children,t),n.child;case 9:return a=n.type._context,i=n.pendingProps.children,Pt(n),a=Je(a),i=i(a),n.flags|=1,Fe(e,n,i,t),n.child;case 14:return Is(e,n,n.type,n.pendingProps,t);case 15:return Ps(e,n,n.type,n.pendingProps,t);case 19:return rp(e,n,t);case 31:return n0(e,n,t);case 22:return ep(e,n,t,n.pendingProps);case 24:return Pt(n),i=Je(Ue),e===null?(a=Cc(),a===null&&(a=xe,u=jc(),a.pooledCache=u,u.refCount++,u!==null&&(a.pooledCacheLanes|=t),a=u),n.memoizedState={parent:i,cache:a},Oc(n),At(n,Ue,a)):((e.lanes&t)!==0&&(Nc(e,n),Si(n,null,null,t),bi()),a=e.memoizedState,u=n.memoizedState,a.parent!==i?(a={parent:i,cache:i},n.memoizedState=a,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=a),At(n,Ue,i)):(i=u.cache,At(n,Ue,i),i!==a.cache&&Ec(n,[Ue],t,!0))),Fe(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(o(156,n.tag))}function lt(e){e.flags|=4}function mr(e,n,t,i,a){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(Up())e.flags|=8192;else throw tl=Na,qc}else e.flags&=-16777217}function fp(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!wm(n))if(Up())e.flags|=8192;else throw tl=Na,qc}function Fa(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Go():536870912,e.lanes|=n,Yl|=n)}function qi(e,n){if(!oe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function we(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,i=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=t,n}function l0(e,n,t){var i=n.pendingProps;switch(zc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(n),null;case 1:return we(n),null;case 3:return t=n.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),Pn(Ue),Re(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(jl(n)?lt(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,bc())),we(n),null;case 26:var a=n.type,u=n.memoizedState;return e===null?(lt(n),u!==null?(we(n),fp(n,u)):(we(n),mr(n,a,null,i,t))):u?u!==e.memoizedState?(lt(n),we(n),fp(n,u)):(we(n),n.flags&=-16777217):(e=e.memoizedProps,e!==i&&lt(n),we(n),mr(n,a,e,i,t)),null;case 27:if(ua(n),t=ie.current,a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&lt(n);else{if(!i){if(n.stateNode===null)throw Error(o(166));return we(n),null}e=Z.current,jl(n)?Qf(n):(e=gm(a,i,t),n.stateNode=e,lt(n))}return we(n),null;case 5:if(ua(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&lt(n);else{if(!i){if(n.stateNode===null)throw Error(o(166));return we(n),null}if(u=Z.current,jl(n))Qf(n);else{var s=fu(ie.current);switch(u){case 1:u=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:u=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":u=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":u=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":u=s.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?u.multiple=!0:i.size&&(u.size=i.size);break;default:u=typeof i.is=="string"?s.createElement(a,{is:i.is}):s.createElement(a)}}u[Ve]=n,u[ln]=i;e:for(s=n.child;s!==null;){if(s.tag===5||s.tag===6)u.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break e;for(;s.sibling===null;){if(s.return===null||s.return===n)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}n.stateNode=u;e:switch(We(u,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&lt(n)}}return we(n),mr(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==i&&lt(n);else{if(typeof i!="string"&&n.stateNode===null)throw Error(o(166));if(e=ie.current,jl(n)){if(e=n.stateNode,t=n.memoizedProps,i=null,a=Ke,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[Ve]=n,e=!!(e.nodeValue===t||i!==null&&i.suppressHydrationWarning===!0||um(e.nodeValue,t)),e||_t(n,!0)}else e=fu(e).createTextNode(i),e[Ve]=n,n.stateNode=e}return we(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(i=jl(n),t!==null){if(e===null){if(!i)throw Error(o(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[Ve]=n}else $t(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;we(n),e=!1}else t=bc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(An(n),n):(An(n),null);if((n.flags&128)!==0)throw Error(o(558))}return we(n),null;case 13:if(i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=jl(n),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(o(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(o(317));a[Ve]=n}else $t(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;we(n),a=!1}else a=bc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return n.flags&256?(An(n),n):(An(n),null)}return An(n),(n.flags&128)!==0?(n.lanes=t,n):(t=i!==null,e=e!==null&&e.memoizedState!==null,t&&(i=n.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==a&&(i.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),Fa(n,n.updateQueue),we(n),null);case 4:return Re(),e===null&&Dr(n.stateNode.containerInfo),we(n),null;case 10:return Pn(n.type),we(n),null;case 19:if(M(Me),i=n.memoizedState,i===null)return we(n),null;if(a=(n.flags&128)!==0,u=i.rendering,u===null)if(a)qi(i,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(u=Ua(e),u!==null){for(n.flags|=128,qi(i,!1),e=u.updateQueue,n.updateQueue=e,Fa(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Lf(t,e),t=t.sibling;return G(Me,Me.current&1|2),oe&&$n(n,i.treeForkCount),n.child}e=e.sibling}i.tail!==null&&hn()>eu&&(n.flags|=128,a=!0,qi(i,!1),n.lanes=4194304)}else{if(!a)if(e=Ua(u),e!==null){if(n.flags|=128,a=!0,e=e.updateQueue,n.updateQueue=e,Fa(n,e),qi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!oe)return we(n),null}else 2*hn()-i.renderingStartTime>eu&&t!==536870912&&(n.flags|=128,a=!0,qi(i,!1),n.lanes=4194304);i.isBackwards?(u.sibling=n.child,n.child=u):(e=i.last,e!==null?e.sibling=u:n.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=hn(),e.sibling=null,t=Me.current,G(Me,a?t&1|2:t&1),oe&&$n(n,i.treeForkCount),e):(we(n),null);case 22:case 23:return An(n),Uc(),i=n.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(n.flags|=8192):i&&(n.flags|=8192),i?(t&536870912)!==0&&(n.flags&128)===0&&(we(n),n.subtreeFlags&6&&(n.flags|=8192)):we(n),t=n.updateQueue,t!==null&&Fa(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==t&&(n.flags|=2048),e!==null&&M(el),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),Pn(Ue),we(n),null;case 25:return null;case 30:return null}throw Error(o(156,n.tag))}function i0(e,n){switch(zc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Pn(Ue),Re(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ua(n),null;case 31:if(n.memoizedState!==null){if(An(n),n.alternate===null)throw Error(o(340));$t()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(An(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(o(340));$t()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return M(Me),null;case 4:return Re(),null;case 10:return Pn(n.type),null;case 22:case 23:return An(n),Uc(),e!==null&&M(el),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Pn(Ue),null;case 25:return null;default:return null}}function sp(e,n){switch(zc(n),n.tag){case 3:Pn(Ue),Re();break;case 26:case 27:case 5:ua(n);break;case 4:Re();break;case 31:n.memoizedState!==null&&An(n);break;case 13:An(n);break;case 19:M(Me);break;case 10:Pn(n.type);break;case 22:case 23:An(n),Uc(),e!==null&&M(el);break;case 24:Pn(Ue)}}function Oi(e,n){try{var t=n.updateQueue,i=t!==null?t.lastEffect:null;if(i!==null){var a=i.next;t=a;do{if((t.tag&e)===e){i=void 0;var u=t.create,s=t.inst;i=u(),s.destroy=i}t=t.next}while(t!==a)}}catch(h){ve(n,n.return,h)}}function Et(e,n,t){try{var i=n.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var u=a.next;i=u;do{if((i.tag&e)===e){var s=i.inst,h=s.destroy;if(h!==void 0){s.destroy=void 0,a=n;var v=t,w=h;try{w()}catch(q){ve(a,v,q)}}}i=i.next}while(i!==u)}}catch(q){ve(n,n.return,q)}}function pp(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{ts(n,t)}catch(i){ve(e,e.return,i)}}}function mp(e,n,t){t.props=al(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(i){ve(e,n,i)}}function Ni(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof t=="function"?e.refCleanup=t(i):t.current=i}}catch(a){ve(e,n,a)}}function Gn(e,n){var t=e.ref,i=e.refCleanup;if(t!==null)if(typeof i=="function")try{i()}catch(a){ve(e,n,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(a){ve(e,n,a)}else t.current=null}function hp(e){var n=e.type,t=e.memoizedProps,i=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&i.focus();break e;case"img":t.src?i.src=t.src:t.srcSet&&(i.srcset=t.srcSet)}}catch(a){ve(e,e.return,a)}}function hr(e,n,t){try{var i=e.stateNode;E0(i,e.type,t,n),i[ln]=n}catch(a){ve(e,e.return,a)}}function dp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Rt(e.type)||e.tag===4}function dr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Rt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yr(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Jn));else if(i!==4&&(i===27&&Rt(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(yr(e,n,t),e=e.sibling;e!==null;)yr(e,n,t),e=e.sibling}function Wa(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(i!==4&&(i===27&&Rt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Wa(e,n,t),e=e.sibling;e!==null;)Wa(e,n,t),e=e.sibling}function yp(e){var n=e.stateNode,t=e.memoizedProps;try{for(var i=e.type,a=n.attributes;a.length;)n.removeAttributeNode(a[0]);We(n,i,t),n[Ve]=e,n[ln]=t}catch(u){ve(e,e.return,u)}}var it=!1,Be=!1,gr=!1,gp=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function a0(e,n){if(e=e.containerInfo,Lr=gu,e=Cf(e),fc(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var a=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{t.nodeType,u.nodeType}catch{t=null;break e}var s=0,h=-1,v=-1,w=0,q=0,R=e,E=null;n:for(;;){for(var C;R!==t||a!==0&&R.nodeType!==3||(h=s+a),R!==u||i!==0&&R.nodeType!==3||(v=s+i),R.nodeType===3&&(s+=R.nodeValue.length),(C=R.firstChild)!==null;)E=R,R=C;for(;;){if(R===e)break n;if(E===t&&++w===a&&(h=s),E===u&&++q===i&&(v=s),(C=R.nextSibling)!==null)break;R=E,E=R.parentNode}R=C}t=h===-1||v===-1?null:{start:h,end:v}}else t=null}t=t||{start:0,end:0}}else t=null;for(Br={focusedElem:e,selectionRange:t},gu=!1,Xe=n;Xe!==null;)if(n=Xe,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Xe=e;else for(;Xe!==null;){switch(n=Xe,u=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)a=e[t],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,t=n,a=u.memoizedProps,u=u.memoizedState,i=t.stateNode;try{var X=al(t.type,a);e=i.getSnapshotBeforeUpdate(X,u),i.__reactInternalSnapshotBeforeUpdate=e}catch($){ve(t,t.return,$)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)Gr(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Gr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=n.sibling,e!==null){e.return=n.return,Xe=e;break}Xe=n.return}}function vp(e,n,t){var i=t.flags;switch(t.tag){case 0:case 11:case 15:ut(e,t),i&4&&Oi(5,t);break;case 1:if(ut(e,t),i&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(s){ve(t,t.return,s)}else{var a=al(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(a,n,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ve(t,t.return,s)}}i&64&&pp(t),i&512&&Ni(t,t.return);break;case 3:if(ut(e,t),i&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{ts(e,n)}catch(s){ve(t,t.return,s)}}break;case 27:n===null&&i&4&&yp(t);case 26:case 5:ut(e,t),n===null&&i&4&&hp(t),i&512&&Ni(t,t.return);break;case 12:ut(e,t);break;case 31:ut(e,t),i&4&&zp(e,t);break;case 13:ut(e,t),i&4&&xp(e,t),i&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=h0.bind(null,t),M0(e,t))));break;case 22:if(i=t.memoizedState!==null||it,!i){n=n!==null&&n.memoizedState!==null||Be,a=it;var u=Be;it=i,(Be=n)&&!u?ct(e,t,(t.subtreeFlags&8772)!==0):ut(e,t),it=a,Be=u}break;case 30:break;default:ut(e,t)}}function _p(e){var n=e.alternate;n!==null&&(e.alternate=null,_p(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ku(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Te=null,un=!1;function at(e,n,t){for(t=t.child;t!==null;)Ap(e,n,t),t=t.sibling}function Ap(e,n,t){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(ti,t)}catch{}switch(t.tag){case 26:Be||Gn(t,n),at(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Be||Gn(t,n);var i=Te,a=un;Rt(t.type)&&(Te=t.stateNode,un=!1),at(e,n,t),ki(t.stateNode),Te=i,un=a;break;case 5:Be||Gn(t,n);case 6:if(i=Te,a=un,Te=null,at(e,n,t),Te=i,un=a,Te!==null)if(un)try{(Te.nodeType===9?Te.body:Te.nodeName==="HTML"?Te.ownerDocument.body:Te).removeChild(t.stateNode)}catch(u){ve(t,n,u)}else try{Te.removeChild(t.stateNode)}catch(u){ve(t,n,u)}break;case 18:Te!==null&&(un?(e=Te,pm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Jl(e)):pm(Te,t.stateNode));break;case 4:i=Te,a=un,Te=t.stateNode.containerInfo,un=!0,at(e,n,t),Te=i,un=a;break;case 0:case 11:case 14:case 15:Et(2,t,n),Be||Et(4,t,n),at(e,n,t);break;case 1:Be||(Gn(t,n),i=t.stateNode,typeof i.componentWillUnmount=="function"&&mp(t,n,i)),at(e,n,t);break;case 21:at(e,n,t);break;case 22:Be=(i=Be)||t.memoizedState!==null,at(e,n,t),Be=i;break;default:at(e,n,t)}}function zp(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Jl(e)}catch(t){ve(n,n.return,t)}}}function xp(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Jl(e)}catch(t){ve(n,n.return,t)}}function u0(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new gp),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new gp),n;default:throw Error(o(435,e.tag))}}function $a(e,n){var t=u0(e);n.forEach(function(i){if(!t.has(i)){t.add(i);var a=d0.bind(null,e,i);i.then(a,a)}})}function cn(e,n){var t=n.deletions;if(t!==null)for(var i=0;i<t.length;i++){var a=t[i],u=e,s=n,h=s;e:for(;h!==null;){switch(h.tag){case 27:if(Rt(h.type)){Te=h.stateNode,un=!1;break e}break;case 5:Te=h.stateNode,un=!1;break e;case 3:case 4:Te=h.stateNode.containerInfo,un=!0;break e}h=h.return}if(Te===null)throw Error(o(160));Ap(u,s,a),Te=null,un=!1,u=a.alternate,u!==null&&(u.return=null),a.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)bp(n,e),n=n.sibling}var Ln=null;function bp(e,n){var t=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:cn(n,e),rn(e),i&4&&(Et(3,e,e.return),Oi(3,e),Et(5,e,e.return));break;case 1:cn(n,e),rn(e),i&512&&(Be||t===null||Gn(t,t.return)),i&64&&it&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?i:t.concat(i))));break;case 26:var a=Ln;if(cn(n,e),rn(e),i&512&&(Be||t===null||Gn(t,t.return)),i&4){var u=t!==null?t.memoizedState:null;if(i=e.memoizedState,t===null)if(i===null)if(e.stateNode===null){e:{i=e.type,t=e.memoizedProps,a=a.ownerDocument||a;n:switch(i){case"title":u=a.getElementsByTagName("title")[0],(!u||u[ai]||u[Ve]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=a.createElement(i),a.head.insertBefore(u,a.querySelector("head > title"))),We(u,i,t),u[Ve]=e,Qe(u),i=u;break e;case"link":var s=bm("link","href",a).get(i+(t.href||""));if(s){for(var h=0;h<s.length;h++)if(u=s[h],u.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&u.getAttribute("rel")===(t.rel==null?null:t.rel)&&u.getAttribute("title")===(t.title==null?null:t.title)&&u.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){s.splice(h,1);break n}}u=a.createElement(i),We(u,i,t),a.head.appendChild(u);break;case"meta":if(s=bm("meta","content",a).get(i+(t.content||""))){for(h=0;h<s.length;h++)if(u=s[h],u.getAttribute("content")===(t.content==null?null:""+t.content)&&u.getAttribute("name")===(t.name==null?null:t.name)&&u.getAttribute("property")===(t.property==null?null:t.property)&&u.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&u.getAttribute("charset")===(t.charSet==null?null:t.charSet)){s.splice(h,1);break n}}u=a.createElement(i),We(u,i,t),a.head.appendChild(u);break;default:throw Error(o(468,i))}u[Ve]=e,Qe(u),i=u}e.stateNode=i}else Sm(a,e.type,e.stateNode);else e.stateNode=xm(a,i,e.memoizedProps);else u!==i?(u===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):u.count--,i===null?Sm(a,e.type,e.stateNode):xm(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&hr(e,e.memoizedProps,t.memoizedProps)}break;case 27:cn(n,e),rn(e),i&512&&(Be||t===null||Gn(t,t.return)),t!==null&&i&4&&hr(e,e.memoizedProps,t.memoizedProps);break;case 5:if(cn(n,e),rn(e),i&512&&(Be||t===null||Gn(t,t.return)),e.flags&32){a=e.stateNode;try{gl(a,"")}catch(X){ve(e,e.return,X)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,hr(e,a,t!==null?t.memoizedProps:a)),i&1024&&(gr=!0);break;case 6:if(cn(n,e),rn(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,t=e.stateNode;try{t.nodeValue=i}catch(X){ve(e,e.return,X)}}break;case 3:if(mu=null,a=Ln,Ln=su(n.containerInfo),cn(n,e),Ln=a,rn(e),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Jl(n.containerInfo)}catch(X){ve(e,e.return,X)}gr&&(gr=!1,Sp(e));break;case 4:i=Ln,Ln=su(e.stateNode.containerInfo),cn(n,e),rn(e),Ln=i;break;case 12:cn(n,e),rn(e);break;case 31:cn(n,e),rn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,$a(e,i)));break;case 13:cn(n,e),rn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Pa=hn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,$a(e,i)));break;case 22:a=e.memoizedState!==null;var v=t!==null&&t.memoizedState!==null,w=it,q=Be;if(it=w||a,Be=q||v,cn(n,e),Be=q,it=w,rn(e),i&8192)e:for(n=e.stateNode,n._visibility=a?n._visibility&-2:n._visibility|1,a&&(t===null||v||it||Be||ul(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){v=t=n;try{if(u=v.stateNode,a)s=u.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{h=v.stateNode;var R=v.memoizedProps.style,E=R!=null&&R.hasOwnProperty("display")?R.display:null;h.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(X){ve(v,v.return,X)}}}else if(n.tag===6){if(t===null){v=n;try{v.stateNode.nodeValue=a?"":v.memoizedProps}catch(X){ve(v,v.return,X)}}}else if(n.tag===18){if(t===null){v=n;try{var C=v.stateNode;a?mm(C,!0):mm(v.stateNode,!1)}catch(X){ve(v,v.return,X)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}i&4&&(i=e.updateQueue,i!==null&&(t=i.retryQueue,t!==null&&(i.retryQueue=null,$a(e,t))));break;case 19:cn(n,e),rn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,$a(e,i)));break;case 30:break;case 21:break;default:cn(n,e),rn(e)}}function rn(e){var n=e.flags;if(n&2){try{for(var t,i=e.return;i!==null;){if(dp(i)){t=i;break}i=i.return}if(t==null)throw Error(o(160));switch(t.tag){case 27:var a=t.stateNode,u=dr(e);Wa(e,u,a);break;case 5:var s=t.stateNode;t.flags&32&&(gl(s,""),t.flags&=-33);var h=dr(e);Wa(e,h,s);break;case 3:case 4:var v=t.stateNode.containerInfo,w=dr(e);yr(e,w,v);break;default:throw Error(o(161))}}catch(q){ve(e,e.return,q)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Sp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Sp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ut(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)vp(e,n.alternate,n),n=n.sibling}function ul(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Et(4,n,n.return),ul(n);break;case 1:Gn(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&mp(n,n.return,t),ul(n);break;case 27:ki(n.stateNode);case 26:case 5:Gn(n,n.return),ul(n);break;case 22:n.memoizedState===null&&ul(n);break;case 30:ul(n);break;default:ul(n)}e=e.sibling}}function ct(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var i=n.alternate,a=e,u=n,s=u.flags;switch(u.tag){case 0:case 11:case 15:ct(a,u,t),Oi(4,u);break;case 1:if(ct(a,u,t),i=u,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(w){ve(i,i.return,w)}if(i=u,a=i.updateQueue,a!==null){var h=i.stateNode;try{var v=a.shared.hiddenCallbacks;if(v!==null)for(a.shared.hiddenCallbacks=null,a=0;a<v.length;a++)ns(v[a],h)}catch(w){ve(i,i.return,w)}}t&&s&64&&pp(u),Ni(u,u.return);break;case 27:yp(u);case 26:case 5:ct(a,u,t),t&&i===null&&s&4&&hp(u),Ni(u,u.return);break;case 12:ct(a,u,t);break;case 31:ct(a,u,t),t&&s&4&&zp(a,u);break;case 13:ct(a,u,t),t&&s&4&&xp(a,u);break;case 22:u.memoizedState===null&&ct(a,u,t),Ni(u,u.return);break;case 30:break;default:ct(a,u,t)}n=n.sibling}}function vr(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&vi(t))}function _r(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&vi(e))}function Bn(e,n,t,i){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)wp(e,n,t,i),n=n.sibling}function wp(e,n,t,i){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Bn(e,n,t,i),a&2048&&Oi(9,n);break;case 1:Bn(e,n,t,i);break;case 3:Bn(e,n,t,i),a&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&vi(e)));break;case 12:if(a&2048){Bn(e,n,t,i),e=n.stateNode;try{var u=n.memoizedProps,s=u.id,h=u.onPostCommit;typeof h=="function"&&h(s,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){ve(n,n.return,v)}}else Bn(e,n,t,i);break;case 31:Bn(e,n,t,i);break;case 13:Bn(e,n,t,i);break;case 23:break;case 22:u=n.stateNode,s=n.alternate,n.memoizedState!==null?u._visibility&2?Bn(e,n,t,i):Ri(e,n):u._visibility&2?Bn(e,n,t,i):(u._visibility|=2,Hl(e,n,t,i,(n.subtreeFlags&10256)!==0||!1)),a&2048&&vr(s,n);break;case 24:Bn(e,n,t,i),a&2048&&_r(n.alternate,n);break;default:Bn(e,n,t,i)}}function Hl(e,n,t,i,a){for(a=a&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=e,s=n,h=t,v=i,w=s.flags;switch(s.tag){case 0:case 11:case 15:Hl(u,s,h,v,a),Oi(8,s);break;case 23:break;case 22:var q=s.stateNode;s.memoizedState!==null?q._visibility&2?Hl(u,s,h,v,a):Ri(u,s):(q._visibility|=2,Hl(u,s,h,v,a)),a&&w&2048&&vr(s.alternate,s);break;case 24:Hl(u,s,h,v,a),a&&w&2048&&_r(s.alternate,s);break;default:Hl(u,s,h,v,a)}n=n.sibling}}function Ri(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,i=n,a=i.flags;switch(i.tag){case 22:Ri(t,i),a&2048&&vr(i.alternate,i);break;case 24:Ri(t,i),a&2048&&_r(i.alternate,i);break;default:Ri(t,i)}n=n.sibling}}var Mi=8192;function Ll(e,n,t){if(e.subtreeFlags&Mi)for(e=e.child;e!==null;)Ep(e,n,t),e=e.sibling}function Ep(e,n,t){switch(e.tag){case 26:Ll(e,n,t),e.flags&Mi&&e.memoizedState!==null&&V0(t,Ln,e.memoizedState,e.memoizedProps);break;case 5:Ll(e,n,t);break;case 3:case 4:var i=Ln;Ln=su(e.stateNode.containerInfo),Ll(e,n,t),Ln=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Mi,Mi=16777216,Ll(e,n,t),Mi=i):Ll(e,n,t));break;default:Ll(e,n,t)}}function jp(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Di(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var i=n[t];Xe=i,Cp(i,e)}jp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Tp(e),e=e.sibling}function Tp(e){switch(e.tag){case 0:case 11:case 15:Di(e),e.flags&2048&&Et(9,e,e.return);break;case 3:Di(e);break;case 12:Di(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ia(e)):Di(e);break;default:Di(e)}}function Ia(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var i=n[t];Xe=i,Cp(i,e)}jp(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Et(8,n,n.return),Ia(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,Ia(n));break;default:Ia(n)}e=e.sibling}}function Cp(e,n){for(;Xe!==null;){var t=Xe;switch(t.tag){case 0:case 11:case 15:Et(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var i=t.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:vi(t.memoizedState.cache)}if(i=t.child,i!==null)i.return=t,Xe=i;else e:for(t=e;Xe!==null;){i=Xe;var a=i.sibling,u=i.return;if(_p(i),i===t){Xe=null;break e}if(a!==null){a.return=u,Xe=a;break e}Xe=u}}}var c0={getCacheForType:function(e){var n=Je(Ue),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return Je(Ue).controller.signal}},r0=typeof WeakMap=="function"?WeakMap:Map,me=0,xe=null,ae=null,ce=0,ge=0,zn=null,jt=!1,Bl=!1,Ar=!1,rt=0,Ne=0,Tt=0,cl=0,zr=0,xn=0,Yl=0,Ui=null,on=null,xr=!1,Pa=0,qp=0,eu=1/0,nu=null,Ct=null,ke=0,qt=null,kl=null,ot=0,br=0,Sr=null,Op=null,Hi=0,wr=null;function bn(){return(me&2)!==0&&ce!==0?ce&-ce:T.T!==null?Or():Vo()}function Np(){if(xn===0)if((ce&536870912)===0||oe){var e=oa;oa<<=1,(oa&3932160)===0&&(oa=262144),xn=e}else xn=536870912;return e=_n.current,e!==null&&(e.flags|=32),xn}function fn(e,n,t){(e===xe&&(ge===2||ge===9)||e.cancelPendingCommit!==null)&&(Gl(e,0),Ot(e,ce,xn,!1)),ii(e,t),((me&2)===0||e!==xe)&&(e===xe&&((me&2)===0&&(cl|=t),Ne===4&&Ot(e,ce,xn,!1)),Qn(e))}function Rp(e,n,t){if((me&6)!==0)throw Error(o(327));var i=!t&&(n&127)===0&&(n&e.expiredLanes)===0||li(e,n),a=i?s0(e,n):jr(e,n,!0),u=i;do{if(a===0){Bl&&!i&&Ot(e,n,0,!1);break}else{if(t=e.current.alternate,u&&!o0(t)){a=jr(e,n,!1),u=!1;continue}if(a===2){if(u=n,e.errorRecoveryDisabledLanes&u)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){n=s;e:{var h=e;a=Ui;var v=h.current.memoizedState.isDehydrated;if(v&&(Gl(h,s).flags|=256),s=jr(h,s,!1),s!==2){if(Ar&&!v){h.errorRecoveryDisabledLanes|=u,cl|=u,a=4;break e}u=on,on=a,u!==null&&(on===null?on=u:on.push.apply(on,u))}a=s}if(u=!1,a!==2)continue}}if(a===1){Gl(e,0),Ot(e,n,0,!0);break}e:{switch(i=e,u=a,u){case 0:case 1:throw Error(o(345));case 4:if((n&4194048)!==n)break;case 6:Ot(i,n,xn,!jt);break e;case 2:on=null;break;case 3:case 5:break;default:throw Error(o(329))}if((n&62914560)===n&&(a=Pa+300-hn(),10<a)){if(Ot(i,n,xn,!jt),sa(i,0,!0)!==0)break e;ot=n,i.timeoutHandle=fm(Mp.bind(null,i,t,on,nu,xr,n,xn,cl,Yl,jt,u,"Throttled",-0,0),a);break e}Mp(i,t,on,nu,xr,n,xn,cl,Yl,jt,u,null,-0,0)}}break}while(!0);Qn(e)}function Mp(e,n,t,i,a,u,s,h,v,w,q,R,E,C){if(e.timeoutHandle=-1,R=n.subtreeFlags,R&8192||(R&16785408)===16785408){R={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Jn},Ep(n,u,R);var X=(u&62914560)===u?Pa-hn():(u&4194048)===u?qp-hn():0;if(X=K0(R,X),X!==null){ot=u,e.cancelPendingCommit=X(Gp.bind(null,e,n,u,t,i,a,s,h,v,q,R,null,E,C)),Ot(e,u,s,!w);return}}Gp(e,n,u,t,i,a,s,h,v)}function o0(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var i=0;i<t.length;i++){var a=t[i],u=a.getSnapshot;a=a.value;try{if(!gn(u(),a))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ot(e,n,t,i){n&=~zr,n&=~cl,e.suspendedLanes|=n,e.pingedLanes&=~n,i&&(e.warmLanes|=n),i=e.expirationTimes;for(var a=n;0<a;){var u=31-yn(a),s=1<<u;i[u]=-1,a&=~s}t!==0&&Qo(e,t,n)}function tu(){return(me&6)===0?(Li(0),!1):!0}function Er(){if(ae!==null){if(ge===0)var e=ae.return;else e=ae,In=It=null,Gc(e),Nl=null,Ai=0,e=ae;for(;e!==null;)sp(e.alternate,e),e=e.return;ae=null}}function Gl(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,C0(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),ot=0,Er(),xe=e,ae=t=Wn(e.current,null),ce=n,ge=0,zn=null,jt=!1,Bl=li(e,n),Ar=!1,Yl=xn=zr=cl=Tt=Ne=0,on=Ui=null,xr=!1,(n&8)!==0&&(n|=n&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=n;0<i;){var a=31-yn(i),u=1<<a;n|=e[a],i&=~u}return rt=n,ba(),t}function Dp(e,n){ne=null,T.H=Ti,n===Ol||n===Oa?(n=$f(),ge=3):n===qc?(n=$f(),ge=4):ge=n===ir?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,zn=n,ae===null&&(Ne=1,Za(e,jn(n,e.current)))}function Up(){var e=_n.current;return e===null?!0:(ce&4194048)===ce?On===null:(ce&62914560)===ce||(ce&536870912)!==0?e===On:!1}function Hp(){var e=T.H;return T.H=Ti,e===null?Ti:e}function Lp(){var e=T.A;return T.A=c0,e}function lu(){Ne=4,jt||(ce&4194048)!==ce&&_n.current!==null||(Bl=!0),(Tt&134217727)===0&&(cl&134217727)===0||xe===null||Ot(xe,ce,xn,!1)}function jr(e,n,t){var i=me;me|=2;var a=Hp(),u=Lp();(xe!==e||ce!==n)&&(nu=null,Gl(e,n)),n=!1;var s=Ne;e:do try{if(ge!==0&&ae!==null){var h=ae,v=zn;switch(ge){case 8:Er(),s=6;break e;case 3:case 2:case 9:case 6:_n.current===null&&(n=!0);var w=ge;if(ge=0,zn=null,Ql(e,h,v,w),t&&Bl){s=0;break e}break;default:w=ge,ge=0,zn=null,Ql(e,h,v,w)}}f0(),s=Ne;break}catch(q){Dp(e,q)}while(!0);return n&&e.shellSuspendCounter++,In=It=null,me=i,T.H=a,T.A=u,ae===null&&(xe=null,ce=0,ba()),s}function f0(){for(;ae!==null;)Bp(ae)}function s0(e,n){var t=me;me|=2;var i=Hp(),a=Lp();xe!==e||ce!==n?(nu=null,eu=hn()+500,Gl(e,n)):Bl=li(e,n);e:do try{if(ge!==0&&ae!==null){n=ae;var u=zn;n:switch(ge){case 1:ge=0,zn=null,Ql(e,n,u,1);break;case 2:case 9:if(Ff(u)){ge=0,zn=null,Yp(n);break}n=function(){ge!==2&&ge!==9||xe!==e||(ge=7),Qn(e)},u.then(n,n);break e;case 3:ge=7;break e;case 4:ge=5;break e;case 7:Ff(u)?(ge=0,zn=null,Yp(n)):(ge=0,zn=null,Ql(e,n,u,7));break;case 5:var s=null;switch(ae.tag){case 26:s=ae.memoizedState;case 5:case 27:var h=ae;if(s?wm(s):h.stateNode.complete){ge=0,zn=null;var v=h.sibling;if(v!==null)ae=v;else{var w=h.return;w!==null?(ae=w,iu(w)):ae=null}break n}}ge=0,zn=null,Ql(e,n,u,5);break;case 6:ge=0,zn=null,Ql(e,n,u,6);break;case 8:Er(),Ne=6;break e;default:throw Error(o(462))}}p0();break}catch(q){Dp(e,q)}while(!0);return In=It=null,T.H=i,T.A=a,me=t,ae!==null?0:(xe=null,ce=0,ba(),Ne)}function p0(){for(;ae!==null&&!Dd();)Bp(ae)}function Bp(e){var n=op(e.alternate,e,rt);e.memoizedProps=e.pendingProps,n===null?iu(e):ae=n}function Yp(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=lp(t,n,n.pendingProps,n.type,void 0,ce);break;case 11:n=lp(t,n,n.pendingProps,n.type.render,n.ref,ce);break;case 5:Gc(n);default:sp(t,n),n=ae=Lf(n,rt),n=op(t,n,rt)}e.memoizedProps=e.pendingProps,n===null?iu(e):ae=n}function Ql(e,n,t,i){In=It=null,Gc(n),Nl=null,Ai=0;var a=n.return;try{if(e0(e,a,n,t,ce)){Ne=1,Za(e,jn(t,e.current)),ae=null;return}}catch(u){if(a!==null)throw ae=a,u;Ne=1,Za(e,jn(t,e.current)),ae=null;return}n.flags&32768?(oe||i===1?e=!0:Bl||(ce&536870912)!==0?e=!1:(jt=e=!0,(i===2||i===9||i===3||i===6)&&(i=_n.current,i!==null&&i.tag===13&&(i.flags|=16384))),kp(n,e)):iu(n)}function iu(e){var n=e;do{if((n.flags&32768)!==0){kp(n,jt);return}e=n.return;var t=l0(n.alternate,n,rt);if(t!==null){ae=t;return}if(n=n.sibling,n!==null){ae=n;return}ae=n=e}while(n!==null);Ne===0&&(Ne=5)}function kp(e,n){do{var t=i0(e.alternate,e);if(t!==null){t.flags&=32767,ae=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){ae=e;return}ae=e=t}while(e!==null);Ne=6,ae=null}function Gp(e,n,t,i,a,u,s,h,v){e.cancelPendingCommit=null;do au();while(ke!==0);if((me&6)!==0)throw Error(o(327));if(n!==null){if(n===e.current)throw Error(o(177));if(u=n.lanes|n.childLanes,u|=dc,Zd(e,t,u,s,h,v),e===xe&&(ae=xe=null,ce=0),kl=n,qt=e,ot=t,br=u,Sr=a,Op=i,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,y0(ca,function(){return Kp(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||i){i=T.T,T.T=null,a=Y.p,Y.p=2,s=me,me|=4;try{a0(e,n,t)}finally{me=s,Y.p=a,T.T=i}}ke=1,Qp(),Xp(),Zp()}}function Qp(){if(ke===1){ke=0;var e=qt,n=kl,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=T.T,T.T=null;var i=Y.p;Y.p=2;var a=me;me|=4;try{bp(n,e);var u=Br,s=Cf(e.containerInfo),h=u.focusedElem,v=u.selectionRange;if(s!==h&&h&&h.ownerDocument&&Tf(h.ownerDocument.documentElement,h)){if(v!==null&&fc(h)){var w=v.start,q=v.end;if(q===void 0&&(q=w),"selectionStart"in h)h.selectionStart=w,h.selectionEnd=Math.min(q,h.value.length);else{var R=h.ownerDocument||document,E=R&&R.defaultView||window;if(E.getSelection){var C=E.getSelection(),X=h.textContent.length,$=Math.min(v.start,X),ze=v.end===void 0?$:Math.min(v.end,X);!C.extend&&$>ze&&(s=ze,ze=$,$=s);var b=jf(h,$),A=jf(h,ze);if(b&&A&&(C.rangeCount!==1||C.anchorNode!==b.node||C.anchorOffset!==b.offset||C.focusNode!==A.node||C.focusOffset!==A.offset)){var S=R.createRange();S.setStart(b.node,b.offset),C.removeAllRanges(),$>ze?(C.addRange(S),C.extend(A.node,A.offset)):(S.setEnd(A.node,A.offset),C.addRange(S))}}}}for(R=[],C=h;C=C.parentNode;)C.nodeType===1&&R.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<R.length;h++){var N=R[h];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}gu=!!Lr,Br=Lr=null}finally{me=a,Y.p=i,T.T=t}}e.current=n,ke=2}}function Xp(){if(ke===2){ke=0;var e=qt,n=kl,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=T.T,T.T=null;var i=Y.p;Y.p=2;var a=me;me|=4;try{vp(e,n.alternate,n)}finally{me=a,Y.p=i,T.T=t}}ke=3}}function Zp(){if(ke===4||ke===3){ke=0,Ud();var e=qt,n=kl,t=ot,i=Op;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?ke=5:(ke=0,kl=qt=null,Vp(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Ct=null),Zu(t),n=n.stateNode,dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(ti,n,void 0,(n.current.flags&128)===128)}catch{}if(i!==null){n=T.T,a=Y.p,Y.p=2,T.T=null;try{for(var u=e.onRecoverableError,s=0;s<i.length;s++){var h=i[s];u(h.value,{componentStack:h.stack})}}finally{T.T=n,Y.p=a}}(ot&3)!==0&&au(),Qn(e),a=e.pendingLanes,(t&261930)!==0&&(a&42)!==0?e===wr?Hi++:(Hi=0,wr=e):Hi=0,Li(0)}}function Vp(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,vi(n)))}function au(){return Qp(),Xp(),Zp(),Kp()}function Kp(){if(ke!==5)return!1;var e=qt,n=br;br=0;var t=Zu(ot),i=T.T,a=Y.p;try{Y.p=32>t?32:t,T.T=null,t=Sr,Sr=null;var u=qt,s=ot;if(ke=0,kl=qt=null,ot=0,(me&6)!==0)throw Error(o(331));var h=me;if(me|=4,Tp(u.current),wp(u,u.current,s,t),me=h,Li(0,!1),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(ti,u)}catch{}return!0}finally{Y.p=a,T.T=i,Vp(e,n)}}function Jp(e,n,t){n=jn(t,n),n=lr(e.stateNode,n,2),e=bt(e,n,2),e!==null&&(ii(e,2),Qn(e))}function ve(e,n,t){if(e.tag===3)Jp(e,e,t);else for(;n!==null;){if(n.tag===3){Jp(n,e,t);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ct===null||!Ct.has(i))){e=jn(t,e),t=Fs(2),i=bt(n,t,2),i!==null&&(Ws(t,i,n,e),ii(i,2),Qn(i));break}}n=n.return}}function Tr(e,n,t){var i=e.pingCache;if(i===null){i=e.pingCache=new r0;var a=new Set;i.set(n,a)}else a=i.get(n),a===void 0&&(a=new Set,i.set(n,a));a.has(t)||(Ar=!0,a.add(t),e=m0.bind(null,e,n,t),n.then(e,e))}function m0(e,n,t){var i=e.pingCache;i!==null&&i.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,xe===e&&(ce&t)===t&&(Ne===4||Ne===3&&(ce&62914560)===ce&&300>hn()-Pa?(me&2)===0&&Gl(e,0):zr|=t,Yl===ce&&(Yl=0)),Qn(e)}function Fp(e,n){n===0&&(n=Go()),e=Ft(e,n),e!==null&&(ii(e,n),Qn(e))}function h0(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Fp(e,t)}function d0(e,n){var t=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(n),Fp(e,t)}function y0(e,n){return ku(e,n)}var uu=null,Xl=null,Cr=!1,cu=!1,qr=!1,Nt=0;function Qn(e){e!==Xl&&e.next===null&&(Xl===null?uu=Xl=e:Xl=Xl.next=e),cu=!0,Cr||(Cr=!0,v0())}function Li(e,n){if(!qr&&cu){qr=!0;do for(var t=!1,i=uu;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var u=0;else{var s=i.suspendedLanes,h=i.pingedLanes;u=(1<<31-yn(42|e)+1)-1,u&=a&~(s&~h),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(t=!0,Pp(i,u))}else u=ce,u=sa(i,i===xe?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(u&3)===0||li(i,u)||(t=!0,Pp(i,u));i=i.next}while(t);qr=!1}}function g0(){Wp()}function Wp(){cu=Cr=!1;var e=0;Nt!==0&&T0()&&(e=Nt);for(var n=hn(),t=null,i=uu;i!==null;){var a=i.next,u=$p(i,n);u===0?(i.next=null,t===null?uu=a:t.next=a,a===null&&(Xl=t)):(t=i,(e!==0||(u&3)!==0)&&(cu=!0)),i=a}ke!==0&&ke!==5||Li(e),Nt!==0&&(Nt=0)}function $p(e,n){for(var t=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var s=31-yn(u),h=1<<s,v=a[s];v===-1?((h&t)===0||(h&i)!==0)&&(a[s]=Xd(h,n)):v<=n&&(e.expiredLanes|=h),u&=~h}if(n=xe,t=ce,t=sa(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,t===0||e===n&&(ge===2||ge===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Gu(i),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||li(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(i!==null&&Gu(i),Zu(t)){case 2:case 8:t=Yo;break;case 32:t=ca;break;case 268435456:t=ko;break;default:t=ca}return i=Ip.bind(null,e),t=ku(t,i),e.callbackPriority=n,e.callbackNode=t,n}return i!==null&&i!==null&&Gu(i),e.callbackPriority=2,e.callbackNode=null,2}function Ip(e,n){if(ke!==0&&ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(au()&&e.callbackNode!==t)return null;var i=ce;return i=sa(e,e===xe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Rp(e,i,n),$p(e,hn()),e.callbackNode!=null&&e.callbackNode===t?Ip.bind(null,e):null)}function Pp(e,n){if(au())return null;Rp(e,n,!0)}function v0(){q0(function(){(me&6)!==0?ku(Bo,g0):Wp()})}function Or(){if(Nt===0){var e=Cl;e===0&&(e=ra,ra<<=1,(ra&261888)===0&&(ra=256)),Nt=e}return Nt}function em(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:da(""+e)}function nm(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function _0(e,n,t,i,a){if(n==="submit"&&t&&t.stateNode===a){var u=em((a[ln]||null).action),s=i.submitter;s&&(n=(n=s[ln]||null)?em(n.formAction):s.getAttribute("formAction"),n!==null&&(u=n,s=null));var h=new _a("action","action",null,i,a);e.push({event:h,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Nt!==0){var v=s?nm(a,s):new FormData(a);$c(t,{pending:!0,data:v,method:a.method,action:u},null,v)}}else typeof u=="function"&&(h.preventDefault(),v=s?nm(a,s):new FormData(a),$c(t,{pending:!0,data:v,method:a.method,action:u},u,v))},currentTarget:a}]})}}for(var Nr=0;Nr<hc.length;Nr++){var Rr=hc[Nr],A0=Rr.toLowerCase(),z0=Rr[0].toUpperCase()+Rr.slice(1);Hn(A0,"on"+z0)}Hn(Nf,"onAnimationEnd"),Hn(Rf,"onAnimationIteration"),Hn(Mf,"onAnimationStart"),Hn("dblclick","onDoubleClick"),Hn("focusin","onFocus"),Hn("focusout","onBlur"),Hn(Hy,"onTransitionRun"),Hn(Ly,"onTransitionStart"),Hn(By,"onTransitionCancel"),Hn(Df,"onTransitionEnd"),dl("onMouseEnter",["mouseout","mouseover"]),dl("onMouseLeave",["mouseout","mouseover"]),dl("onPointerEnter",["pointerout","pointerover"]),dl("onPointerLeave",["pointerout","pointerover"]),Zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Zt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bi));function tm(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var i=e[t],a=i.event;i=i.listeners;e:{var u=void 0;if(n)for(var s=i.length-1;0<=s;s--){var h=i[s],v=h.instance,w=h.currentTarget;if(h=h.listener,v!==u&&a.isPropagationStopped())break e;u=h,a.currentTarget=w;try{u(a)}catch(q){xa(q)}a.currentTarget=null,u=v}else for(s=0;s<i.length;s++){if(h=i[s],v=h.instance,w=h.currentTarget,h=h.listener,v!==u&&a.isPropagationStopped())break e;u=h,a.currentTarget=w;try{u(a)}catch(q){xa(q)}a.currentTarget=null,u=v}}}}function ue(e,n){var t=n[Vu];t===void 0&&(t=n[Vu]=new Set);var i=e+"__bubble";t.has(i)||(lm(n,e,2,!1),t.add(i))}function Mr(e,n,t){var i=0;n&&(i|=4),lm(t,e,i,n)}var ru="_reactListening"+Math.random().toString(36).slice(2);function Dr(e){if(!e[ru]){e[ru]=!0,Fo.forEach(function(t){t!=="selectionchange"&&(x0.has(t)||Mr(t,!1,e),Mr(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ru]||(n[ru]=!0,Mr("selectionchange",!1,n))}}function lm(e,n,t,i){switch(Nm(n)){case 2:var a=W0;break;case 8:a=$0;break;default:a=Wr}t=a.bind(null,n,t,e),a=void 0,!nc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function Ur(e,n,t,i,a){var u=i;if((n&1)===0&&(n&2)===0&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var h=i.stateNode.containerInfo;if(h===a)break;if(s===4)for(s=i.return;s!==null;){var v=s.tag;if((v===3||v===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;h!==null;){if(s=pl(h),s===null)return;if(v=s.tag,v===5||v===6||v===26||v===27){i=u=s;continue e}h=h.parentNode}}i=i.return}rf(function(){var w=u,q=Pu(t),R=[];e:{var E=Uf.get(e);if(E!==void 0){var C=_a,X=e;switch(e){case"keypress":if(ga(t)===0)break e;case"keydown":case"keyup":C=dy;break;case"focusin":X="focus",C=ac;break;case"focusout":X="blur",C=ac;break;case"beforeblur":case"afterblur":C=ac;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=sf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=ly;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=vy;break;case Nf:case Rf:case Mf:C=uy;break;case Df:C=Ay;break;case"scroll":case"scrollend":C=ny;break;case"wheel":C=xy;break;case"copy":case"cut":case"paste":C=ry;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=mf;break;case"toggle":case"beforetoggle":C=Sy}var $=(n&4)!==0,ze=!$&&(e==="scroll"||e==="scrollend"),b=$?E!==null?E+"Capture":null:E;$=[];for(var A=w,S;A!==null;){var N=A;if(S=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||S===null||b===null||(N=ci(A,b),N!=null&&$.push(Yi(A,N,S))),ze)break;A=A.return}0<$.length&&(E=new C(E,X,null,t,q),R.push({event:E,listeners:$}))}}if((n&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",E&&t!==Iu&&(X=t.relatedTarget||t.fromElement)&&(pl(X)||X[sl]))break e;if((C||E)&&(E=q.window===q?q:(E=q.ownerDocument)?E.defaultView||E.parentWindow:window,C?(X=t.relatedTarget||t.toElement,C=w,X=X?pl(X):null,X!==null&&(ze=p(X),$=X.tag,X!==ze||$!==5&&$!==27&&$!==6)&&(X=null)):(C=null,X=w),C!==X)){if($=sf,N="onMouseLeave",b="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&($=mf,N="onPointerLeave",b="onPointerEnter",A="pointer"),ze=C==null?E:ui(C),S=X==null?E:ui(X),E=new $(N,A+"leave",C,t,q),E.target=ze,E.relatedTarget=S,N=null,pl(q)===w&&($=new $(b,A+"enter",X,t,q),$.target=S,$.relatedTarget=ze,N=$),ze=N,C&&X)n:{for($=b0,b=C,A=X,S=0,N=b;N;N=$(N))S++;N=0;for(var F=A;F;F=$(F))N++;for(;0<S-N;)b=$(b),S--;for(;0<N-S;)A=$(A),N--;for(;S--;){if(b===A||A!==null&&b===A.alternate){$=b;break n}b=$(b),A=$(A)}$=null}else $=null;C!==null&&im(R,E,C,$,!1),X!==null&&ze!==null&&im(R,ze,X,$,!0)}}e:{if(E=w?ui(w):window,C=E.nodeName&&E.nodeName.toLowerCase(),C==="select"||C==="input"&&E.type==="file")var se=zf;else if(_f(E))if(xf)se=My;else{se=Ny;var V=Oy}else C=E.nodeName,!C||C.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?w&&$u(w.elementType)&&(se=zf):se=Ry;if(se&&(se=se(e,w))){Af(R,se,t,q);break e}V&&V(e,E,w),e==="focusout"&&w&&E.type==="number"&&w.memoizedProps.value!=null&&Wu(E,"number",E.value)}switch(V=w?ui(w):window,e){case"focusin":(_f(V)||V.contentEditable==="true")&&(zl=V,sc=w,di=null);break;case"focusout":di=sc=zl=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,qf(R,t,q);break;case"selectionchange":if(Uy)break;case"keydown":case"keyup":qf(R,t,q)}var te;if(cc)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else Al?gf(e,t)&&(re="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(re="onCompositionStart");re&&(hf&&t.locale!=="ko"&&(Al||re!=="onCompositionStart"?re==="onCompositionEnd"&&Al&&(te=of()):(yt=q,tc="value"in yt?yt.value:yt.textContent,Al=!0)),V=ou(w,re),0<V.length&&(re=new pf(re,e,null,t,q),R.push({event:re,listeners:V}),te?re.data=te:(te=vf(t),te!==null&&(re.data=te)))),(te=Ey?jy(e,t):Ty(e,t))&&(re=ou(w,"onBeforeInput"),0<re.length&&(V=new pf("onBeforeInput","beforeinput",null,t,q),R.push({event:V,listeners:re}),V.data=te)),_0(R,e,w,t,q)}tm(R,n)})}function Yi(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ou(e,n){for(var t=n+"Capture",i=[];e!==null;){var a=e,u=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||u===null||(a=ci(e,t),a!=null&&i.unshift(Yi(e,a,u)),a=ci(e,n),a!=null&&i.push(Yi(e,a,u))),e.tag===3)return i;e=e.return}return[]}function b0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function im(e,n,t,i,a){for(var u=n._reactName,s=[];t!==null&&t!==i;){var h=t,v=h.alternate,w=h.stateNode;if(h=h.tag,v!==null&&v===i)break;h!==5&&h!==26&&h!==27||w===null||(v=w,a?(w=ci(t,u),w!=null&&s.unshift(Yi(t,w,v))):a||(w=ci(t,u),w!=null&&s.push(Yi(t,w,v)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var S0=/\r\n?/g,w0=/\u0000|\uFFFD/g;function am(e){return(typeof e=="string"?e:""+e).replace(S0,`
`).replace(w0,"")}function um(e,n){return n=am(n),am(e)===n}function Ae(e,n,t,i,a,u){switch(t){case"children":typeof i=="string"?n==="body"||n==="textarea"&&i===""||gl(e,i):(typeof i=="number"||typeof i=="bigint")&&n!=="body"&&gl(e,""+i);break;case"className":ma(e,"class",i);break;case"tabIndex":ma(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":ma(e,t,i);break;case"style":uf(e,i,u);break;case"data":if(n!=="object"){ma(e,"data",i);break}case"src":case"href":if(i===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(t);break}i=da(""+i),e.setAttribute(t,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(t==="formAction"?(n!=="input"&&Ae(e,n,"name",a.name,a,null),Ae(e,n,"formEncType",a.formEncType,a,null),Ae(e,n,"formMethod",a.formMethod,a,null),Ae(e,n,"formTarget",a.formTarget,a,null)):(Ae(e,n,"encType",a.encType,a,null),Ae(e,n,"method",a.method,a,null),Ae(e,n,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(t);break}i=da(""+i),e.setAttribute(t,i);break;case"onClick":i!=null&&(e.onclick=Jn);break;case"onScroll":i!=null&&ue("scroll",e);break;case"onScrollEnd":i!=null&&ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(t=i.__html,t!=null){if(a.children!=null)throw Error(o(60));e.innerHTML=t}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}t=da(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(t,""+i):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":i===!0?e.setAttribute(t,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(t,i):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(t,i):e.removeAttribute(t);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(t):e.setAttribute(t,i);break;case"popover":ue("beforetoggle",e),ue("toggle",e),pa(e,"popover",i);break;case"xlinkActuate":Kn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Kn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Kn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Kn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Kn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Kn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Kn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Kn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Kn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":pa(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Pd.get(t)||t,pa(e,t,i))}}function Hr(e,n,t,i,a,u){switch(t){case"style":uf(e,i,u);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(t=i.__html,t!=null){if(a.children!=null)throw Error(o(60));e.innerHTML=t}}break;case"children":typeof i=="string"?gl(e,i):(typeof i=="number"||typeof i=="bigint")&&gl(e,""+i);break;case"onScroll":i!=null&&ue("scroll",e);break;case"onScrollEnd":i!=null&&ue("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Jn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wo.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(a=t.endsWith("Capture"),n=t.slice(2,a?t.length-7:void 0),u=e[ln]||null,u=u!=null?u[t]:null,typeof u=="function"&&e.removeEventListener(n,u,a),typeof i=="function")){typeof u!="function"&&u!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,i,a);break e}t in e?e[t]=i:i===!0?e.setAttribute(t,""):pa(e,t,i)}}}function We(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ue("error",e),ue("load",e);var i=!1,a=!1,u;for(u in t)if(t.hasOwnProperty(u)){var s=t[u];if(s!=null)switch(u){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:Ae(e,n,u,s,t,null)}}a&&Ae(e,n,"srcSet",t.srcSet,t,null),i&&Ae(e,n,"src",t.src,t,null);return;case"input":ue("invalid",e);var h=u=s=a=null,v=null,w=null;for(i in t)if(t.hasOwnProperty(i)){var q=t[i];if(q!=null)switch(i){case"name":a=q;break;case"type":s=q;break;case"checked":v=q;break;case"defaultChecked":w=q;break;case"value":u=q;break;case"defaultValue":h=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(o(137,n));break;default:Ae(e,n,i,q,t,null)}}nf(e,u,h,v,w,s,a,!1);return;case"select":ue("invalid",e),i=s=u=null;for(a in t)if(t.hasOwnProperty(a)&&(h=t[a],h!=null))switch(a){case"value":u=h;break;case"defaultValue":s=h;break;case"multiple":i=h;default:Ae(e,n,a,h,t,null)}n=u,t=s,e.multiple=!!i,n!=null?yl(e,!!i,n,!1):t!=null&&yl(e,!!i,t,!0);return;case"textarea":ue("invalid",e),u=a=i=null;for(s in t)if(t.hasOwnProperty(s)&&(h=t[s],h!=null))switch(s){case"value":i=h;break;case"defaultValue":a=h;break;case"children":u=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(o(91));break;default:Ae(e,n,s,h,t,null)}lf(e,i,a,u);return;case"option":for(v in t)t.hasOwnProperty(v)&&(i=t[v],i!=null)&&(v==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Ae(e,n,v,i,t,null));return;case"dialog":ue("beforetoggle",e),ue("toggle",e),ue("cancel",e),ue("close",e);break;case"iframe":case"object":ue("load",e);break;case"video":case"audio":for(i=0;i<Bi.length;i++)ue(Bi[i],e);break;case"image":ue("error",e),ue("load",e);break;case"details":ue("toggle",e);break;case"embed":case"source":case"link":ue("error",e),ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in t)if(t.hasOwnProperty(w)&&(i=t[w],i!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:Ae(e,n,w,i,t,null)}return;default:if($u(n)){for(q in t)t.hasOwnProperty(q)&&(i=t[q],i!==void 0&&Hr(e,n,q,i,t,void 0));return}}for(h in t)t.hasOwnProperty(h)&&(i=t[h],i!=null&&Ae(e,n,h,i,t,null))}function E0(e,n,t,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,u=null,s=null,h=null,v=null,w=null,q=null;for(C in t){var R=t[C];if(t.hasOwnProperty(C)&&R!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":v=R;default:i.hasOwnProperty(C)||Ae(e,n,C,null,i,R)}}for(var E in i){var C=i[E];if(R=t[E],i.hasOwnProperty(E)&&(C!=null||R!=null))switch(E){case"type":u=C;break;case"name":a=C;break;case"checked":w=C;break;case"defaultChecked":q=C;break;case"value":s=C;break;case"defaultValue":h=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(o(137,n));break;default:C!==R&&Ae(e,n,E,C,i,R)}}Fu(e,s,h,v,w,q,u,a);return;case"select":C=s=h=E=null;for(u in t)if(v=t[u],t.hasOwnProperty(u)&&v!=null)switch(u){case"value":break;case"multiple":C=v;default:i.hasOwnProperty(u)||Ae(e,n,u,null,i,v)}for(a in i)if(u=i[a],v=t[a],i.hasOwnProperty(a)&&(u!=null||v!=null))switch(a){case"value":E=u;break;case"defaultValue":h=u;break;case"multiple":s=u;default:u!==v&&Ae(e,n,a,u,i,v)}n=h,t=s,i=C,E!=null?yl(e,!!t,E,!1):!!i!=!!t&&(n!=null?yl(e,!!t,n,!0):yl(e,!!t,t?[]:"",!1));return;case"textarea":C=E=null;for(h in t)if(a=t[h],t.hasOwnProperty(h)&&a!=null&&!i.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Ae(e,n,h,null,i,a)}for(s in i)if(a=i[s],u=t[s],i.hasOwnProperty(s)&&(a!=null||u!=null))switch(s){case"value":E=a;break;case"defaultValue":C=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(o(91));break;default:a!==u&&Ae(e,n,s,a,i,u)}tf(e,E,C);return;case"option":for(var X in t)E=t[X],t.hasOwnProperty(X)&&E!=null&&!i.hasOwnProperty(X)&&(X==="selected"?e.selected=!1:Ae(e,n,X,null,i,E));for(v in i)E=i[v],C=t[v],i.hasOwnProperty(v)&&E!==C&&(E!=null||C!=null)&&(v==="selected"?e.selected=E&&typeof E!="function"&&typeof E!="symbol":Ae(e,n,v,E,i,C));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in t)E=t[$],t.hasOwnProperty($)&&E!=null&&!i.hasOwnProperty($)&&Ae(e,n,$,null,i,E);for(w in i)if(E=i[w],C=t[w],i.hasOwnProperty(w)&&E!==C&&(E!=null||C!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(o(137,n));break;default:Ae(e,n,w,E,i,C)}return;default:if($u(n)){for(var ze in t)E=t[ze],t.hasOwnProperty(ze)&&E!==void 0&&!i.hasOwnProperty(ze)&&Hr(e,n,ze,void 0,i,E);for(q in i)E=i[q],C=t[q],!i.hasOwnProperty(q)||E===C||E===void 0&&C===void 0||Hr(e,n,q,E,i,C);return}}for(var b in t)E=t[b],t.hasOwnProperty(b)&&E!=null&&!i.hasOwnProperty(b)&&Ae(e,n,b,null,i,E);for(R in i)E=i[R],C=t[R],!i.hasOwnProperty(R)||E===C||E==null&&C==null||Ae(e,n,R,E,i,C)}function cm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function j0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),i=0;i<t.length;i++){var a=t[i],u=a.transferSize,s=a.initiatorType,h=a.duration;if(u&&h&&cm(s)){for(s=0,h=a.responseEnd,i+=1;i<t.length;i++){var v=t[i],w=v.startTime;if(w>h)break;var q=v.transferSize,R=v.initiatorType;q&&cm(R)&&(v=v.responseEnd,s+=q*(v<h?1:(h-w)/(v-w)))}if(--i,n+=8*(u+s)/(a.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Lr=null,Br=null;function fu(e){return e.nodeType===9?e:e.ownerDocument}function rm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function om(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Yr(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var kr=null;function T0(){var e=window.event;return e&&e.type==="popstate"?e===kr?!1:(kr=e,!0):(kr=null,!1)}var fm=typeof setTimeout=="function"?setTimeout:void 0,C0=typeof clearTimeout=="function"?clearTimeout:void 0,sm=typeof Promise=="function"?Promise:void 0,q0=typeof queueMicrotask=="function"?queueMicrotask:typeof sm<"u"?function(e){return sm.resolve(null).then(e).catch(O0)}:fm;function O0(e){setTimeout(function(){throw e})}function Rt(e){return e==="head"}function pm(e,n){var t=n,i=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"||t==="/&"){if(i===0){e.removeChild(a),Jl(n);return}i--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")i++;else if(t==="html")ki(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,ki(t);for(var u=t.firstChild;u;){var s=u.nextSibling,h=u.nodeName;u[ai]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&u.rel.toLowerCase()==="stylesheet"||t.removeChild(u),u=s}}else t==="body"&&ki(e.ownerDocument.body);t=a}while(t);Jl(n)}function mm(e,n){var t=e;e=0;do{var i=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=i}while(t)}function Gr(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Gr(t),Ku(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function N0(e,n,t,i){for(;e.nodeType===1;){var a=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[ai])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var u=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Nn(e.nextSibling),e===null)break}return null}function R0(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Nn(e.nextSibling),e===null))return null;return e}function hm(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Nn(e.nextSibling),e===null))return null;return e}function Qr(e){return e.data==="$?"||e.data==="$~"}function Xr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function M0(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var i=function(){n(),t.removeEventListener("DOMContentLoaded",i)};t.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Nn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Zr=null;function dm(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return Nn(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function ym(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function gm(e,n,t){switch(n=fu(t),e){case"html":if(e=n.documentElement,!e)throw Error(o(452));return e;case"head":if(e=n.head,!e)throw Error(o(453));return e;case"body":if(e=n.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function ki(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ku(e)}var Rn=new Map,vm=new Set;function su(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ft=Y.d;Y.d={f:D0,r:U0,D:H0,C:L0,L:B0,m:Y0,X:G0,S:k0,M:Q0};function D0(){var e=ft.f(),n=tu();return e||n}function U0(e){var n=ml(e);n!==null&&n.tag===5&&n.type==="form"?Ds(n):ft.r(e)}var Zl=typeof document>"u"?null:document;function _m(e,n,t){var i=Zl;if(i&&typeof n=="string"&&n){var a=wn(n);a='link[rel="'+e+'"][href="'+a+'"]',typeof t=="string"&&(a+='[crossorigin="'+t+'"]'),vm.has(a)||(vm.add(a),e={rel:e,crossOrigin:t,href:n},i.querySelector(a)===null&&(n=i.createElement("link"),We(n,"link",e),Qe(n),i.head.appendChild(n)))}}function H0(e){ft.D(e),_m("dns-prefetch",e,null)}function L0(e,n){ft.C(e,n),_m("preconnect",e,n)}function B0(e,n,t){ft.L(e,n,t);var i=Zl;if(i&&e&&n){var a='link[rel="preload"][as="'+wn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(a+='[imagesrcset="'+wn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(a+='[imagesizes="'+wn(t.imageSizes)+'"]')):a+='[href="'+wn(e)+'"]';var u=a;switch(n){case"style":u=Vl(e);break;case"script":u=Kl(e)}Rn.has(u)||(e=_({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Rn.set(u,e),i.querySelector(a)!==null||n==="style"&&i.querySelector(Gi(u))||n==="script"&&i.querySelector(Qi(u))||(n=i.createElement("link"),We(n,"link",e),Qe(n),i.head.appendChild(n)))}}function Y0(e,n){ft.m(e,n);var t=Zl;if(t&&e){var i=n&&typeof n.as=="string"?n.as:"script",a='link[rel="modulepreload"][as="'+wn(i)+'"][href="'+wn(e)+'"]',u=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Kl(e)}if(!Rn.has(u)&&(e=_({rel:"modulepreload",href:e},n),Rn.set(u,e),t.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Qi(u)))return}i=t.createElement("link"),We(i,"link",e),Qe(i),t.head.appendChild(i)}}}function k0(e,n,t){ft.S(e,n,t);var i=Zl;if(i&&e){var a=hl(i).hoistableStyles,u=Vl(e);n=n||"default";var s=a.get(u);if(!s){var h={loading:0,preload:null};if(s=i.querySelector(Gi(u)))h.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Rn.get(u))&&Vr(e,t);var v=s=i.createElement("link");Qe(v),We(v,"link",e),v._p=new Promise(function(w,q){v.onload=w,v.onerror=q}),v.addEventListener("load",function(){h.loading|=1}),v.addEventListener("error",function(){h.loading|=2}),h.loading|=4,pu(s,n,i)}s={type:"stylesheet",instance:s,count:1,state:h},a.set(u,s)}}}function G0(e,n){ft.X(e,n);var t=Zl;if(t&&e){var i=hl(t).hoistableScripts,a=Kl(e),u=i.get(a);u||(u=t.querySelector(Qi(a)),u||(e=_({src:e,async:!0},n),(n=Rn.get(a))&&Kr(e,n),u=t.createElement("script"),Qe(u),We(u,"link",e),t.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(a,u))}}function Q0(e,n){ft.M(e,n);var t=Zl;if(t&&e){var i=hl(t).hoistableScripts,a=Kl(e),u=i.get(a);u||(u=t.querySelector(Qi(a)),u||(e=_({src:e,async:!0,type:"module"},n),(n=Rn.get(a))&&Kr(e,n),u=t.createElement("script"),Qe(u),We(u,"link",e),t.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(a,u))}}function Am(e,n,t,i){var a=(a=ie.current)?su(a):null;if(!a)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Vl(t.href),t=hl(a).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Vl(t.href);var u=hl(a).hoistableStyles,s=u.get(e);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,s),(u=a.querySelector(Gi(e)))&&!u._p&&(s.instance=u,s.state.loading=5),Rn.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Rn.set(e,t),u||X0(a,e,t,s.state))),n&&i===null)throw Error(o(528,""));return s}if(n&&i!==null)throw Error(o(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Kl(t),t=hl(a).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Vl(e){return'href="'+wn(e)+'"'}function Gi(e){return'link[rel="stylesheet"]['+e+"]"}function zm(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function X0(e,n,t,i){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?i.loading=1:(n=e.createElement("link"),i.preload=n,n.addEventListener("load",function(){return i.loading|=1}),n.addEventListener("error",function(){return i.loading|=2}),We(n,"link",t),Qe(n),e.head.appendChild(n))}function Kl(e){return'[src="'+wn(e)+'"]'}function Qi(e){return"script[async]"+e}function xm(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var i=e.querySelector('style[data-href~="'+wn(t.href)+'"]');if(i)return n.instance=i,Qe(i),i;var a=_({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Qe(i),We(i,"style",a),pu(i,t.precedence,e),n.instance=i;case"stylesheet":a=Vl(t.href);var u=e.querySelector(Gi(a));if(u)return n.state.loading|=4,n.instance=u,Qe(u),u;i=zm(t),(a=Rn.get(a))&&Vr(i,a),u=(e.ownerDocument||e).createElement("link"),Qe(u);var s=u;return s._p=new Promise(function(h,v){s.onload=h,s.onerror=v}),We(u,"link",i),n.state.loading|=4,pu(u,t.precedence,e),n.instance=u;case"script":return u=Kl(t.src),(a=e.querySelector(Qi(u)))?(n.instance=a,Qe(a),a):(i=t,(a=Rn.get(u))&&(i=_({},t),Kr(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),Qe(a),We(a,"link",i),e.head.appendChild(a),n.instance=a);case"void":return null;default:throw Error(o(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(i=n.instance,n.state.loading|=4,pu(i,t.precedence,e));return n.instance}function pu(e,n,t){for(var i=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,u=a,s=0;s<i.length;s++){var h=i[s];if(h.dataset.precedence===n)u=h;else if(u!==a)break}u?u.parentNode.insertBefore(e,u.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function Vr(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Kr(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var mu=null;function bm(e,n,t){if(mu===null){var i=new Map,a=mu=new Map;a.set(t,i)}else a=mu,i=a.get(t),i||(i=new Map,a.set(t,i));if(i.has(e))return i;for(i.set(e,null),t=t.getElementsByTagName(e),a=0;a<t.length;a++){var u=t[a];if(!(u[ai]||u[Ve]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var s=u.getAttribute(n)||"";s=e+s;var h=i.get(s);h?h.push(u):i.set(s,[u])}}return i}function Sm(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Z0(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function wm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function V0(e,n,t,i){if(t.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var a=Vl(i.href),u=n.querySelector(Gi(a));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=hu.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=u,Qe(u);return}u=n.ownerDocument||n,i=zm(i),(a=Rn.get(a))&&Vr(i,a),u=u.createElement("link"),Qe(u);var s=u;s._p=new Promise(function(h,v){s.onload=h,s.onerror=v}),We(u,"link",i),t.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=hu.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var Jr=0;function K0(e,n){return e.stylesheets&&e.count===0&&yu(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var i=setTimeout(function(){if(e.stylesheets&&yu(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+n);0<e.imgBytes&&Jr===0&&(Jr=62500*j0());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&yu(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Jr?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function hu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var du=null;function yu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,du=new Map,n.forEach(J0,e),du=null,hu.call(e))}function J0(e,n){if(!(n.state.loading&4)){var t=du.get(e);if(t)var i=t.get(null);else{t=new Map,du.set(e,t);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<a.length;u++){var s=a[u];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(t.set(s.dataset.precedence,s),i=s)}i&&t.set(null,i)}a=n.instance,s=a.getAttribute("data-precedence"),u=t.get(s)||i,u===i&&t.set(null,a),t.set(s,a),this.count++,i=hu.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),u?u.parentNode.insertBefore(a,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),n.state.loading|=4}}var Xi={$$typeof:W,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function F0(e,n,t,i,a,u,s,h,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qu(0),this.hiddenUpdates=Qu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=u,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function Em(e,n,t,i,a,u,s,h,v,w,q,R){return e=new F0(e,n,t,s,v,w,q,R,h),n=1,u===!0&&(n|=24),u=vn(3,null,null,n),e.current=u,u.stateNode=e,n=jc(),n.refCount++,e.pooledCache=n,n.refCount++,u.memoizedState={element:i,isDehydrated:t,cache:n},Oc(u),e}function jm(e){return e?(e=Sl,e):Sl}function Tm(e,n,t,i,a,u){a=jm(a),i.context===null?i.context=a:i.pendingContext=a,i=xt(n),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=bt(e,i,n),t!==null&&(fn(t,e,n),xi(t,e,n))}function Cm(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Fr(e,n){Cm(e,n),(e=e.alternate)&&Cm(e,n)}function qm(e){if(e.tag===13||e.tag===31){var n=Ft(e,67108864);n!==null&&fn(n,e,67108864),Fr(e,67108864)}}function Om(e){if(e.tag===13||e.tag===31){var n=bn();n=Xu(n);var t=Ft(e,n);t!==null&&fn(t,e,n),Fr(e,n)}}var gu=!0;function W0(e,n,t,i){var a=T.T;T.T=null;var u=Y.p;try{Y.p=2,Wr(e,n,t,i)}finally{Y.p=u,T.T=a}}function $0(e,n,t,i){var a=T.T;T.T=null;var u=Y.p;try{Y.p=8,Wr(e,n,t,i)}finally{Y.p=u,T.T=a}}function Wr(e,n,t,i){if(gu){var a=$r(i);if(a===null)Ur(e,n,i,vu,t),Rm(e,i);else if(P0(a,e,n,t,i))i.stopPropagation();else if(Rm(e,i),n&4&&-1<I0.indexOf(e)){for(;a!==null;){var u=ml(a);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var s=Xt(u.pendingLanes);if(s!==0){var h=u;for(h.pendingLanes|=2,h.entangledLanes|=2;s;){var v=1<<31-yn(s);h.entanglements[1]|=v,s&=~v}Qn(u),(me&6)===0&&(eu=hn()+500,Li(0))}}break;case 31:case 13:h=Ft(u,2),h!==null&&fn(h,u,2),tu(),Fr(u,2)}if(u=$r(i),u===null&&Ur(e,n,i,vu,t),u===a)break;a=u}a!==null&&i.stopPropagation()}else Ur(e,n,i,null,t)}}function $r(e){return e=Pu(e),Ir(e)}var vu=null;function Ir(e){if(vu=null,e=pl(e),e!==null){var n=p(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=m(n),e!==null)return e;e=null}else if(t===31){if(e=y(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return vu=e,null}function Nm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hd()){case Bo:return 2;case Yo:return 8;case ca:case Ld:return 32;case ko:return 268435456;default:return 32}default:return 32}}var Pr=!1,Mt=null,Dt=null,Ut=null,Zi=new Map,Vi=new Map,Ht=[],I0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rm(e,n){switch(e){case"focusin":case"focusout":Mt=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":Zi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vi.delete(n.pointerId)}}function Ki(e,n,t,i,a,u){return e===null||e.nativeEvent!==u?(e={blockedOn:n,domEventName:t,eventSystemFlags:i,nativeEvent:u,targetContainers:[a]},n!==null&&(n=ml(n),n!==null&&qm(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function P0(e,n,t,i,a){switch(n){case"focusin":return Mt=Ki(Mt,e,n,t,i,a),!0;case"dragenter":return Dt=Ki(Dt,e,n,t,i,a),!0;case"mouseover":return Ut=Ki(Ut,e,n,t,i,a),!0;case"pointerover":var u=a.pointerId;return Zi.set(u,Ki(Zi.get(u)||null,e,n,t,i,a)),!0;case"gotpointercapture":return u=a.pointerId,Vi.set(u,Ki(Vi.get(u)||null,e,n,t,i,a)),!0}return!1}function Mm(e){var n=pl(e.target);if(n!==null){var t=p(n);if(t!==null){if(n=t.tag,n===13){if(n=m(t),n!==null){e.blockedOn=n,Ko(e.priority,function(){Om(t)});return}}else if(n===31){if(n=y(t),n!==null){e.blockedOn=n,Ko(e.priority,function(){Om(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _u(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=$r(e.nativeEvent);if(t===null){t=e.nativeEvent;var i=new t.constructor(t.type,t);Iu=i,t.target.dispatchEvent(i),Iu=null}else return n=ml(t),n!==null&&qm(n),e.blockedOn=t,!1;n.shift()}return!0}function Dm(e,n,t){_u(e)&&t.delete(n)}function eg(){Pr=!1,Mt!==null&&_u(Mt)&&(Mt=null),Dt!==null&&_u(Dt)&&(Dt=null),Ut!==null&&_u(Ut)&&(Ut=null),Zi.forEach(Dm),Vi.forEach(Dm)}function Au(e,n){e.blockedOn===n&&(e.blockedOn=null,Pr||(Pr=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,eg)))}var zu=null;function Um(e){zu!==e&&(zu=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){zu===e&&(zu=null);for(var n=0;n<e.length;n+=3){var t=e[n],i=e[n+1],a=e[n+2];if(typeof i!="function"){if(Ir(i||t)===null)continue;break}var u=ml(t);u!==null&&(e.splice(n,3),n-=3,$c(u,{pending:!0,data:a,method:t.method,action:i},i,a))}}))}function Jl(e){function n(v){return Au(v,e)}Mt!==null&&Au(Mt,e),Dt!==null&&Au(Dt,e),Ut!==null&&Au(Ut,e),Zi.forEach(n),Vi.forEach(n);for(var t=0;t<Ht.length;t++){var i=Ht[t];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ht.length&&(t=Ht[0],t.blockedOn===null);)Mm(t),t.blockedOn===null&&Ht.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(i=0;i<t.length;i+=3){var a=t[i],u=t[i+1],s=a[ln]||null;if(typeof u=="function")s||Um(t);else if(s){var h=null;if(u&&u.hasAttribute("formAction")){if(a=u,s=u[ln]||null)h=s.formAction;else if(Ir(a)!==null)continue}else h=s.action;typeof h=="function"?t[i+1]=h:(t.splice(i,3),i-=3),Um(t)}}}function Hm(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(s){return a=s})},focusReset:"manual",scroll:"manual"})}function n(){a!==null&&(a(),a=null),i||setTimeout(t,20)}function t(){if(!i&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),a!==null&&(a(),a=null)}}}function eo(e){this._internalRoot=e}xu.prototype.render=eo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(o(409));var t=n.current,i=bn();Tm(t,i,e,n,null,null)},xu.prototype.unmount=eo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Tm(e.current,2,null,e,null,null),tu(),n[sl]=null}};function xu(e){this._internalRoot=e}xu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Vo();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Ht.length&&n!==0&&n<Ht[t].priority;t++);Ht.splice(t,0,e),t===0&&Mm(e)}};var Lm=c.version;if(Lm!=="19.2.3")throw Error(o(527,Lm,"19.2.3"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=g(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var ng={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bu.isDisabled&&bu.supportsFiber)try{ti=bu.inject(ng),dn=bu}catch{}}return Fi.createRoot=function(e,n){if(!f(e))throw Error(o(299));var t=!1,i="",a=Zs,u=Vs,s=Ks;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=Em(e,1,!1,null,null,t,i,null,a,u,s,Hm),e[sl]=n.current,Dr(e),new eo(n)},Fi.hydrateRoot=function(e,n,t){if(!f(e))throw Error(o(299));var i=!1,a="",u=Zs,s=Vs,h=Ks,v=null;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError),t.formState!==void 0&&(v=t.formState)),n=Em(e,1,!0,n,t??null,i,a,v,u,s,h,Hm),n.context=jm(null),t=n.current,i=bn(),i=Xu(i),a=xt(i),a.callback=null,bt(t,a,i),t=i,n.current.lanes=t,ii(n,t),Qn(n),e[sl]=n.current,Dr(e),new xu(n)},Fi.version="19.2.3",Fi}var Jm;function pg(){if(Jm)return lo.exports;Jm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(c){console.error(c)}}return l(),lo.exports=sg(),lo.exports}var mg=pg();const hg=_h(mg);var Fm="popstate";function dg(l={}){function c(f,p){let{pathname:m="/",search:y="",hash:d=""}=ol(f.location.hash.substring(1));return!m.startsWith("/")&&!m.startsWith(".")&&(m="/"+m),ho("",{pathname:m,search:y,hash:d},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function r(f,p){let m=f.document.querySelector("base"),y="";if(m&&m.getAttribute("href")){let d=f.location.href,g=d.indexOf("#");y=g===-1?d:d.slice(0,g)}return y+"#"+(typeof p=="string"?p:Ii(p))}function o(f,p){Mn(f.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(p)})`)}return gg(c,r,o,l)}function Ce(l,c){if(l===!1||l===null||typeof l>"u")throw new Error(c)}function Mn(l,c){if(!l){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function yg(){return Math.random().toString(36).substring(2,10)}function Wm(l,c){return{usr:l.state,key:l.key,idx:c}}function ho(l,c,r=null,o){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof c=="string"?ol(c):c,state:r,key:c&&c.key||o||yg()}}function Ii({pathname:l="/",search:c="",hash:r=""}){return c&&c!=="?"&&(l+=c.charAt(0)==="?"?c:"?"+c),r&&r!=="#"&&(l+=r.charAt(0)==="#"?r:"#"+r),l}function ol(l){let c={};if(l){let r=l.indexOf("#");r>=0&&(c.hash=l.substring(r),l=l.substring(0,r));let o=l.indexOf("?");o>=0&&(c.search=l.substring(o),l=l.substring(0,o)),l&&(c.pathname=l)}return c}function gg(l,c,r,o={}){let{window:f=document.defaultView,v5Compat:p=!1}=o,m=f.history,y="POP",d=null,g=x();g==null&&(g=0,m.replaceState({...m.state,idx:g},""));function x(){return(m.state||{idx:null}).idx}function _(){y="POP";let B=x(),Q=B==null?null:B-g;g=B,d&&d({action:y,location:L.location,delta:Q})}function O(B,Q){y="PUSH";let U=ho(L.location,B,Q);r&&r(U,B),g=x()+1;let W=Wm(U,g),de=L.createHref(U);try{m.pushState(W,"",de)}catch(ye){if(ye instanceof DOMException&&ye.name==="DataCloneError")throw ye;f.location.assign(de)}p&&d&&d({action:y,location:L.location,delta:1})}function D(B,Q){y="REPLACE";let U=ho(L.location,B,Q);r&&r(U,B),g=x();let W=Wm(U,g),de=L.createHref(U);m.replaceState(W,"",de),p&&d&&d({action:y,location:L.location,delta:0})}function k(B){return vg(B)}let L={get action(){return y},get location(){return l(f,m)},listen(B){if(d)throw new Error("A history only accepts one active listener");return f.addEventListener(Fm,_),d=B,()=>{f.removeEventListener(Fm,_),d=null}},createHref(B){return c(f,B)},createURL:k,encodeLocation(B){let Q=k(B);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:O,replace:D,go(B){return m.go(B)}};return L}function vg(l,c=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Ce(r,"No window.location.(origin|href) available to create URL");let o=typeof l=="string"?l:Ii(l);return o=o.replace(/ $/,"%20"),!c&&o.startsWith("//")&&(o=r+o),new URL(o,r)}function Ah(l,c,r="/"){return _g(l,c,r,!1)}function _g(l,c,r,o){let f=typeof c=="string"?ol(c):c,p=pt(f.pathname||"/",r);if(p==null)return null;let m=zh(l);Ag(m);let y=null;for(let d=0;y==null&&d<m.length;++d){let g=Og(p);y=Cg(m[d],g,o)}return y}function zh(l,c=[],r=[],o="",f=!1){let p=(m,y,d=f,g)=>{let x={relativePath:g===void 0?m.path||"":g,caseSensitive:m.caseSensitive===!0,childrenIndex:y,route:m};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(o)&&d)return;Ce(x.relativePath.startsWith(o),`Absolute route path "${x.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(o.length)}let _=st([o,x.relativePath]),O=r.concat(x);m.children&&m.children.length>0&&(Ce(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),zh(m.children,c,O,_,d)),!(m.path==null&&!m.index)&&c.push({path:_,score:jg(_,m.index),routesMeta:O})};return l.forEach((m,y)=>{if(m.path===""||!m.path?.includes("?"))p(m,y);else for(let d of xh(m.path))p(m,y,!0,d)}),c}function xh(l){let c=l.split("/");if(c.length===0)return[];let[r,...o]=c,f=r.endsWith("?"),p=r.replace(/\?$/,"");if(o.length===0)return f?[p,""]:[p];let m=xh(o.join("/")),y=[];return y.push(...m.map(d=>d===""?p:[p,d].join("/"))),f&&y.push(...m),y.map(d=>l.startsWith("/")&&d===""?"/":d)}function Ag(l){l.sort((c,r)=>c.score!==r.score?r.score-c.score:Tg(c.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}var zg=/^:[\w-]+$/,xg=3,bg=2,Sg=1,wg=10,Eg=-2,$m=l=>l==="*";function jg(l,c){let r=l.split("/"),o=r.length;return r.some($m)&&(o+=Eg),c&&(o+=bg),r.filter(f=>!$m(f)).reduce((f,p)=>f+(zg.test(p)?xg:p===""?Sg:wg),o)}function Tg(l,c){return l.length===c.length&&l.slice(0,-1).every((o,f)=>o===c[f])?l[l.length-1]-c[c.length-1]:0}function Cg(l,c,r=!1){let{routesMeta:o}=l,f={},p="/",m=[];for(let y=0;y<o.length;++y){let d=o[y],g=y===o.length-1,x=p==="/"?c:c.slice(p.length)||"/",_=ju({path:d.relativePath,caseSensitive:d.caseSensitive,end:g},x),O=d.route;if(!_&&g&&r&&!o[o.length-1].route.index&&(_=ju({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},x)),!_)return null;Object.assign(f,_.params),m.push({params:f,pathname:st([p,_.pathname]),pathnameBase:Dg(st([p,_.pathnameBase])),route:O}),_.pathnameBase!=="/"&&(p=st([p,_.pathnameBase]))}return m}function ju(l,c){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[r,o]=qg(l.path,l.caseSensitive,l.end),f=c.match(r);if(!f)return null;let p=f[0],m=p.replace(/(.)\/+$/,"$1"),y=f.slice(1);return{params:o.reduce((g,{paramName:x,isOptional:_},O)=>{if(x==="*"){let k=y[O]||"";m=p.slice(0,p.length-k.length).replace(/(.)\/+$/,"$1")}const D=y[O];return _&&!D?g[x]=void 0:g[x]=(D||"").replace(/%2F/g,"/"),g},{}),pathname:p,pathnameBase:m,pattern:l}}function qg(l,c=!1,r=!0){Mn(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let o=[],f="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,y,d)=>(o.push({paramName:y,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(o.push({paramName:"*"}),f+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?f+="\\/*$":l!==""&&l!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,c?void 0:"i"),o]}function Og(l){try{return l.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Mn(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),l}}function pt(l,c){if(c==="/")return l;if(!l.toLowerCase().startsWith(c.toLowerCase()))return null;let r=c.endsWith("/")?c.length-1:c.length,o=l.charAt(r);return o&&o!=="/"?null:l.slice(r)||"/"}var bh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ng=l=>bh.test(l);function Rg(l,c="/"){let{pathname:r,search:o="",hash:f=""}=typeof l=="string"?ol(l):l,p;if(r)if(Ng(r))p=r;else{if(r.includes("//")){let m=r;r=r.replace(/\/\/+/g,"/"),Mn(!1,`Pathnames cannot have embedded double slashes - normalizing ${m} -> ${r}`)}r.startsWith("/")?p=Im(r.substring(1),"/"):p=Im(r,c)}else p=c;return{pathname:p,search:Ug(o),hash:Hg(f)}}function Im(l,c){let r=c.replace(/\/+$/,"").split("/");return l.split("/").forEach(f=>{f===".."?r.length>1&&r.pop():f!=="."&&r.push(f)}),r.length>1?r.join("/"):"/"}function co(l,c,r,o){return`Cannot include a '${l}' character in a manually specified \`to.${c}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Mg(l){return l.filter((c,r)=>r===0||c.route.path&&c.route.path.length>0)}function Sh(l){let c=Mg(l);return c.map((r,o)=>o===c.length-1?r.pathname:r.pathnameBase)}function wh(l,c,r,o=!1){let f;typeof l=="string"?f=ol(l):(f={...l},Ce(!f.pathname||!f.pathname.includes("?"),co("?","pathname","search",f)),Ce(!f.pathname||!f.pathname.includes("#"),co("#","pathname","hash",f)),Ce(!f.search||!f.search.includes("#"),co("#","search","hash",f)));let p=l===""||f.pathname==="",m=p?"/":f.pathname,y;if(m==null)y=r;else{let _=c.length-1;if(!o&&m.startsWith("..")){let O=m.split("/");for(;O[0]==="..";)O.shift(),_-=1;f.pathname=O.join("/")}y=_>=0?c[_]:"/"}let d=Rg(f,y),g=m&&m!=="/"&&m.endsWith("/"),x=(p||m===".")&&r.endsWith("/");return!d.pathname.endsWith("/")&&(g||x)&&(d.pathname+="/"),d}var st=l=>l.join("/").replace(/\/\/+/g,"/"),Dg=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Ug=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Hg=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,Lg=class{constructor(l,c,r,o=!1){this.status=l,this.statusText=c||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function Bg(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function Yg(l){return l.map(c=>c.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Eh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function jh(l,c){let r=l;if(typeof r!="string"||!bh.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let o=r,f=!1;if(Eh)try{let p=new URL(window.location.href),m=r.startsWith("//")?new URL(p.protocol+r):new URL(r),y=pt(m.pathname,c);m.origin===p.origin&&y!=null?r=y+m.search+m.hash:f=!0}catch{Mn(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:f,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Th=["POST","PUT","PATCH","DELETE"];new Set(Th);var kg=["GET",...Th];new Set(kg);var ei=j.createContext(null);ei.displayName="DataRouter";var Ru=j.createContext(null);Ru.displayName="DataRouterState";var Gg=j.createContext(!1),Ch=j.createContext({isTransitioning:!1});Ch.displayName="ViewTransition";var Qg=j.createContext(new Map);Qg.displayName="Fetchers";var Xg=j.createContext(null);Xg.displayName="Await";var Dn=j.createContext(null);Dn.displayName="Navigation";var la=j.createContext(null);la.displayName="Location";var Zn=j.createContext({outlet:null,matches:[],isDataRoute:!1});Zn.displayName="Route";var So=j.createContext(null);So.displayName="RouteError";var qh="REACT_ROUTER_ERROR",Zg="REDIRECT",Vg="ROUTE_ERROR_RESPONSE";function Kg(l){if(l.startsWith(`${qh}:${Zg}:{`))try{let c=JSON.parse(l.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function Jg(l){if(l.startsWith(`${qh}:${Vg}:{`))try{let c=JSON.parse(l.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new Lg(c.status,c.statusText,c.data)}catch{}}function Fg(l,{relative:c}={}){Ce(ia(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:o}=j.useContext(Dn),{hash:f,pathname:p,search:m}=aa(l,{relative:c}),y=p;return r!=="/"&&(y=p==="/"?r:st([r,p])),o.createHref({pathname:y,search:m,hash:f})}function ia(){return j.useContext(la)!=null}function fl(){return Ce(ia(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(la).location}var Oh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Nh(l){j.useContext(Dn).static||j.useLayoutEffect(l)}function Rh(){let{isDataRoute:l}=j.useContext(Zn);return l?ov():Wg()}function Wg(){Ce(ia(),"useNavigate() may be used only in the context of a <Router> component.");let l=j.useContext(ei),{basename:c,navigator:r}=j.useContext(Dn),{matches:o}=j.useContext(Zn),{pathname:f}=fl(),p=JSON.stringify(Sh(o)),m=j.useRef(!1);return Nh(()=>{m.current=!0}),j.useCallback((d,g={})=>{if(Mn(m.current,Oh),!m.current)return;if(typeof d=="number"){r.go(d);return}let x=wh(d,JSON.parse(p),f,g.relative==="path");l==null&&c!=="/"&&(x.pathname=x.pathname==="/"?c:st([c,x.pathname])),(g.replace?r.replace:r.push)(x,g.state,g)},[c,r,p,f,l])}j.createContext(null);function $g(){let{matches:l}=j.useContext(Zn),c=l[l.length-1];return c?c.params:{}}function aa(l,{relative:c}={}){let{matches:r}=j.useContext(Zn),{pathname:o}=fl(),f=JSON.stringify(Sh(r));return j.useMemo(()=>wh(l,JSON.parse(f),o,c==="path"),[l,f,o,c])}function Ig(l,c){return Mh(l,c)}function Mh(l,c,r,o,f){Ce(ia(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=j.useContext(Dn),{matches:m}=j.useContext(Zn),y=m[m.length-1],d=y?y.params:{},g=y?y.pathname:"/",x=y?y.pathnameBase:"/",_=y&&y.route;{let U=_&&_.path||"";Uh(g,!_||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let O=fl(),D;if(c){let U=typeof c=="string"?ol(c):c;Ce(x==="/"||U.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${U.pathname}" was given in the \`location\` prop.`),D=U}else D=O;let k=D.pathname||"/",L=k;if(x!=="/"){let U=x.replace(/^\//,"").split("/");L="/"+k.replace(/^\//,"").split("/").slice(U.length).join("/")}let B=Ah(l,{pathname:L});Mn(_||B!=null,`No routes matched location "${D.pathname}${D.search}${D.hash}" `),Mn(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=lv(B&&B.map(U=>Object.assign({},U,{params:Object.assign({},d,U.params),pathname:st([x,p.encodeLocation?p.encodeLocation(U.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?x:st([x,p.encodeLocation?p.encodeLocation(U.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),m,r,o,f);return c&&Q?j.createElement(la.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...D},navigationType:"POP"}},Q):Q}function Pg(){let l=rv(),c=Bg(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),r=l instanceof Error?l.stack:null,o="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:o},p={padding:"2px 4px",backgroundColor:o},m=null;return console.error("Error handled by React Router default ErrorBoundary:",l),m=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:p},"ErrorBoundary")," or"," ",j.createElement("code",{style:p},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},c),r?j.createElement("pre",{style:f},r):null,m)}var ev=j.createElement(Pg,null),Dh=class extends j.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,c){return c.location!==l.location||c.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:c.error,location:c.location,revalidation:l.revalidation||c.revalidation}}componentDidCatch(l,c){this.props.onError?this.props.onError(l,c):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const r=Jg(l.digest);r&&(l=r)}let c=l!==void 0?j.createElement(Zn.Provider,{value:this.props.routeContext},j.createElement(So.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?j.createElement(nv,{error:l},c):c}};Dh.contextType=Gg;var ro=new WeakMap;function nv({children:l,error:c}){let{basename:r}=j.useContext(Dn);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let o=Kg(c.digest);if(o){let f=ro.get(c);if(f)throw f;let p=jh(o.location,r);if(Eh&&!ro.get(c))if(p.isExternal||o.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const m=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:o.replace}));throw ro.set(c,m),m}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return l}function tv({routeContext:l,match:c,children:r}){let o=j.useContext(ei);return o&&o.static&&o.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=c.route.id),j.createElement(Zn.Provider,{value:l},r)}function lv(l,c=[],r=null,o=null,f=null){if(l==null){if(!r)return null;if(r.errors)l=r.matches;else if(c.length===0&&!r.initialized&&r.matches.length>0)l=r.matches;else return null}let p=l,m=r?.errors;if(m!=null){let x=p.findIndex(_=>_.route.id&&m?.[_.route.id]!==void 0);Ce(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),p=p.slice(0,Math.min(p.length,x+1))}let y=!1,d=-1;if(r)for(let x=0;x<p.length;x++){let _=p[x];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(d=x),_.route.id){let{loaderData:O,errors:D}=r,k=_.route.loader&&!O.hasOwnProperty(_.route.id)&&(!D||D[_.route.id]===void 0);if(_.route.lazy||k){y=!0,d>=0?p=p.slice(0,d+1):p=[p[0]];break}}}let g=r&&o?(x,_)=>{o(x,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Yg(r.matches),errorInfo:_})}:void 0;return p.reduceRight((x,_,O)=>{let D,k=!1,L=null,B=null;r&&(D=m&&_.route.id?m[_.route.id]:void 0,L=_.route.errorElement||ev,y&&(d<0&&O===0?(Uh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,B=null):d===O&&(k=!0,B=_.route.hydrateFallbackElement||null)));let Q=c.concat(p.slice(0,O+1)),U=()=>{let W;return D?W=L:k?W=B:_.route.Component?W=j.createElement(_.route.Component,null):_.route.element?W=_.route.element:W=x,j.createElement(tv,{match:_,routeContext:{outlet:x,matches:Q,isDataRoute:r!=null},children:W})};return r&&(_.route.ErrorBoundary||_.route.errorElement||O===0)?j.createElement(Dh,{location:r.location,revalidation:r.revalidation,component:L,error:D,children:U(),routeContext:{outlet:null,matches:Q,isDataRoute:!0},onError:g}):U()},null)}function wo(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function iv(l){let c=j.useContext(ei);return Ce(c,wo(l)),c}function av(l){let c=j.useContext(Ru);return Ce(c,wo(l)),c}function uv(l){let c=j.useContext(Zn);return Ce(c,wo(l)),c}function Eo(l){let c=uv(l),r=c.matches[c.matches.length-1];return Ce(r.route.id,`${l} can only be used on routes that contain a unique "id"`),r.route.id}function cv(){return Eo("useRouteId")}function rv(){let l=j.useContext(So),c=av("useRouteError"),r=Eo("useRouteError");return l!==void 0?l:c.errors?.[r]}function ov(){let{router:l}=iv("useNavigate"),c=Eo("useNavigate"),r=j.useRef(!1);return Nh(()=>{r.current=!0}),j.useCallback(async(f,p={})=>{Mn(r.current,Oh),r.current&&(typeof f=="number"?await l.navigate(f):await l.navigate(f,{fromRouteId:c,...p}))},[l,c])}var Pm={};function Uh(l,c,r){!c&&!Pm[l]&&(Pm[l]=!0,Mn(!1,r))}j.memo(fv);function fv({routes:l,future:c,state:r,onError:o}){return Mh(l,void 0,r,o,c)}function yo(l){Ce(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function sv({basename:l="/",children:c=null,location:r,navigationType:o="POP",navigator:f,static:p=!1,unstable_useTransitions:m}){Ce(!ia(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=l.replace(/^\/*/,"/"),d=j.useMemo(()=>({basename:y,navigator:f,static:p,unstable_useTransitions:m,future:{}}),[y,f,p,m]);typeof r=="string"&&(r=ol(r));let{pathname:g="/",search:x="",hash:_="",state:O=null,key:D="default"}=r,k=j.useMemo(()=>{let L=pt(g,y);return L==null?null:{location:{pathname:L,search:x,hash:_,state:O,key:D},navigationType:o}},[y,g,x,_,O,D,o]);return Mn(k!=null,`<Router basename="${y}"> is not able to match the URL "${g}${x}${_}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:j.createElement(Dn.Provider,{value:d},j.createElement(la.Provider,{children:c,value:k}))}function pv({children:l,location:c}){return Ig(go(l),c)}function go(l,c=[]){let r=[];return j.Children.forEach(l,(o,f)=>{if(!j.isValidElement(o))return;let p=[...c,f];if(o.type===j.Fragment){r.push.apply(r,go(o.props.children,p));return}Ce(o.type===yo,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ce(!o.props.index||!o.props.children,"An index route cannot have child routes.");let m={id:o.props.id||p.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(m.children=go(o.props.children,p)),r.push(m)}),r}var wu="get",Eu="application/x-www-form-urlencoded";function Mu(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function mv(l){return Mu(l)&&l.tagName.toLowerCase()==="button"}function hv(l){return Mu(l)&&l.tagName.toLowerCase()==="form"}function dv(l){return Mu(l)&&l.tagName.toLowerCase()==="input"}function yv(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function gv(l,c){return l.button===0&&(!c||c==="_self")&&!yv(l)}var Su=null;function vv(){if(Su===null)try{new FormData(document.createElement("form"),0),Su=!1}catch{Su=!0}return Su}var _v=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function oo(l){return l!=null&&!_v.has(l)?(Mn(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Eu}"`),null):l}function Av(l,c){let r,o,f,p,m;if(hv(l)){let y=l.getAttribute("action");o=y?pt(y,c):null,r=l.getAttribute("method")||wu,f=oo(l.getAttribute("enctype"))||Eu,p=new FormData(l)}else if(mv(l)||dv(l)&&(l.type==="submit"||l.type==="image")){let y=l.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=l.getAttribute("formaction")||y.getAttribute("action");if(o=d?pt(d,c):null,r=l.getAttribute("formmethod")||y.getAttribute("method")||wu,f=oo(l.getAttribute("formenctype"))||oo(y.getAttribute("enctype"))||Eu,p=new FormData(y,l),!vv()){let{name:g,type:x,value:_}=l;if(x==="image"){let O=g?`${g}.`:"";p.append(`${O}x`,"0"),p.append(`${O}y`,"0")}else g&&p.append(g,_)}}else{if(Mu(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=wu,o=null,f=Eu,m=l}return p&&f==="text/plain"&&(m=p,p=void 0),{action:o,method:r.toLowerCase(),encType:f,formData:p,body:m}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function jo(l,c){if(l===!1||l===null||typeof l>"u")throw new Error(c)}function zv(l,c,r,o){let f=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return r?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${o}`:f.pathname=`${f.pathname}.${o}`:f.pathname==="/"?f.pathname=`_root.${o}`:c&&pt(f.pathname,c)==="/"?f.pathname=`${c.replace(/\/$/,"")}/_root.${o}`:f.pathname=`${f.pathname.replace(/\/$/,"")}.${o}`,f}async function xv(l,c){if(l.id in c)return c[l.id];try{let r=await import(l.module);return c[l.id]=r,r}catch(r){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function bv(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function Sv(l,c,r){let o=await Promise.all(l.map(async f=>{let p=c.routes[f.route.id];if(p){let m=await xv(p,r);return m.links?m.links():[]}return[]}));return Tv(o.flat(1).filter(bv).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function eh(l,c,r,o,f,p){let m=(d,g)=>r[g]?d.route.id!==r[g].route.id:!0,y=(d,g)=>r[g].pathname!==d.pathname||r[g].route.path?.endsWith("*")&&r[g].params["*"]!==d.params["*"];return p==="assets"?c.filter((d,g)=>m(d,g)||y(d,g)):p==="data"?c.filter((d,g)=>{let x=o.routes[d.route.id];if(!x||!x.hasLoader)return!1;if(m(d,g)||y(d,g))return!0;if(d.route.shouldRevalidate){let _=d.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function wv(l,c,{includeHydrateFallback:r}={}){return Ev(l.map(o=>{let f=c.routes[o.route.id];if(!f)return[];let p=[f.module];return f.clientActionModule&&(p=p.concat(f.clientActionModule)),f.clientLoaderModule&&(p=p.concat(f.clientLoaderModule)),r&&f.hydrateFallbackModule&&(p=p.concat(f.hydrateFallbackModule)),f.imports&&(p=p.concat(f.imports)),p}).flat(1))}function Ev(l){return[...new Set(l)]}function jv(l){let c={},r=Object.keys(l).sort();for(let o of r)c[o]=l[o];return c}function Tv(l,c){let r=new Set;return new Set(c),l.reduce((o,f)=>{let p=JSON.stringify(jv(f));return r.has(p)||(r.add(p),o.push({key:p,link:f})),o},[])}function Hh(){let l=j.useContext(ei);return jo(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function Cv(){let l=j.useContext(Ru);return jo(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var To=j.createContext(void 0);To.displayName="FrameworkContext";function Lh(){let l=j.useContext(To);return jo(l,"You must render this element inside a <HydratedRouter> element"),l}function qv(l,c){let r=j.useContext(To),[o,f]=j.useState(!1),[p,m]=j.useState(!1),{onFocus:y,onBlur:d,onMouseEnter:g,onMouseLeave:x,onTouchStart:_}=c,O=j.useRef(null);j.useEffect(()=>{if(l==="render"&&m(!0),l==="viewport"){let L=Q=>{Q.forEach(U=>{m(U.isIntersecting)})},B=new IntersectionObserver(L,{threshold:.5});return O.current&&B.observe(O.current),()=>{B.disconnect()}}},[l]),j.useEffect(()=>{if(o){let L=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(L)}}},[o]);let D=()=>{f(!0)},k=()=>{f(!1),m(!1)};return r?l!=="intent"?[p,O,{}]:[p,O,{onFocus:Wi(y,D),onBlur:Wi(d,k),onMouseEnter:Wi(g,D),onMouseLeave:Wi(x,k),onTouchStart:Wi(_,D)}]:[!1,O,{}]}function Wi(l,c){return r=>{l&&l(r),r.defaultPrevented||c(r)}}function Ov({page:l,...c}){let{router:r}=Hh(),o=j.useMemo(()=>Ah(r.routes,l,r.basename),[r.routes,l,r.basename]);return o?j.createElement(Rv,{page:l,matches:o,...c}):null}function Nv(l){let{manifest:c,routeModules:r}=Lh(),[o,f]=j.useState([]);return j.useEffect(()=>{let p=!1;return Sv(l,c,r).then(m=>{p||f(m)}),()=>{p=!0}},[l,c,r]),o}function Rv({page:l,matches:c,...r}){let o=fl(),{future:f,manifest:p,routeModules:m}=Lh(),{basename:y}=Hh(),{loaderData:d,matches:g}=Cv(),x=j.useMemo(()=>eh(l,c,g,p,o,"data"),[l,c,g,p,o]),_=j.useMemo(()=>eh(l,c,g,p,o,"assets"),[l,c,g,p,o]),O=j.useMemo(()=>{if(l===o.pathname+o.search+o.hash)return[];let L=new Set,B=!1;if(c.forEach(U=>{let W=p.routes[U.route.id];!W||!W.hasLoader||(!x.some(de=>de.route.id===U.route.id)&&U.route.id in d&&m[U.route.id]?.shouldRevalidate||W.hasClientLoader?B=!0:L.add(U.route.id))}),L.size===0)return[];let Q=zv(l,y,f.unstable_trailingSlashAwareDataRequests,"data");return B&&L.size>0&&Q.searchParams.set("_routes",c.filter(U=>L.has(U.route.id)).map(U=>U.route.id).join(",")),[Q.pathname+Q.search]},[y,f.unstable_trailingSlashAwareDataRequests,d,o,p,x,c,l,m]),D=j.useMemo(()=>wv(_,p),[_,p]),k=Nv(_);return j.createElement(j.Fragment,null,O.map(L=>j.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...r})),D.map(L=>j.createElement("link",{key:L,rel:"modulepreload",href:L,...r})),k.map(({key:L,link:B})=>j.createElement("link",{key:L,nonce:r.nonce,...B})))}function Mv(...l){return c=>{l.forEach(r=>{typeof r=="function"?r(c):r!=null&&(r.current=c)})}}var Dv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Dv&&(window.__reactRouterVersion="7.12.0")}catch{}function Uv({basename:l,children:c,unstable_useTransitions:r,window:o}){let f=j.useRef();f.current==null&&(f.current=dg({window:o,v5Compat:!0}));let p=f.current,[m,y]=j.useState({action:p.action,location:p.location}),d=j.useCallback(g=>{r===!1?y(g):j.startTransition(()=>y(g))},[r]);return j.useLayoutEffect(()=>p.listen(d),[p,d]),j.createElement(sv,{basename:l,children:c,location:m.location,navigationType:m.action,navigator:p,unstable_useTransitions:r})}var Bh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Co=j.forwardRef(function({onClick:c,discover:r="render",prefetch:o="none",relative:f,reloadDocument:p,replace:m,state:y,target:d,to:g,preventScrollReset:x,viewTransition:_,unstable_defaultShouldRevalidate:O,...D},k){let{basename:L,unstable_useTransitions:B}=j.useContext(Dn),Q=typeof g=="string"&&Bh.test(g),U=jh(g,L);g=U.to;let W=Fg(g,{relative:f}),[de,ye,Ee]=qv(o,D),I=Yv(g,{replace:m,state:y,target:d,preventScrollReset:x,relative:f,viewTransition:_,unstable_defaultShouldRevalidate:O,unstable_useTransitions:B});function je(qe){c&&c(qe),qe.defaultPrevented||I(qe)}let be=j.createElement("a",{...D,...Ee,href:U.absoluteURL||W,onClick:U.isExternal||p?c:je,ref:Mv(k,ye),target:d,"data-discover":!Q&&r==="render"?"true":void 0});return de&&!Q?j.createElement(j.Fragment,null,be,j.createElement(Ov,{page:W})):be});Co.displayName="Link";var Hv=j.forwardRef(function({"aria-current":c="page",caseSensitive:r=!1,className:o="",end:f=!1,style:p,to:m,viewTransition:y,children:d,...g},x){let _=aa(m,{relative:g.relative}),O=fl(),D=j.useContext(Ru),{navigator:k,basename:L}=j.useContext(Dn),B=D!=null&&Zv(_)&&y===!0,Q=k.encodeLocation?k.encodeLocation(_).pathname:_.pathname,U=O.pathname,W=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;r||(U=U.toLowerCase(),W=W?W.toLowerCase():null,Q=Q.toLowerCase()),W&&L&&(W=pt(W,L)||W);const de=Q!=="/"&&Q.endsWith("/")?Q.length-1:Q.length;let ye=U===Q||!f&&U.startsWith(Q)&&U.charAt(de)==="/",Ee=W!=null&&(W===Q||!f&&W.startsWith(Q)&&W.charAt(Q.length)==="/"),I={isActive:ye,isPending:Ee,isTransitioning:B},je=ye?c:void 0,be;typeof o=="function"?be=o(I):be=[o,ye?"active":null,Ee?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let qe=typeof p=="function"?p(I):p;return j.createElement(Co,{...g,"aria-current":je,className:be,ref:x,style:qe,to:m,viewTransition:y},typeof d=="function"?d(I):d)});Hv.displayName="NavLink";var Lv=j.forwardRef(({discover:l="render",fetcherKey:c,navigate:r,reloadDocument:o,replace:f,state:p,method:m=wu,action:y,onSubmit:d,relative:g,preventScrollReset:x,viewTransition:_,unstable_defaultShouldRevalidate:O,...D},k)=>{let{unstable_useTransitions:L}=j.useContext(Dn),B=Qv(),Q=Xv(y,{relative:g}),U=m.toLowerCase()==="get"?"get":"post",W=typeof y=="string"&&Bh.test(y),de=ye=>{if(d&&d(ye),ye.defaultPrevented)return;ye.preventDefault();let Ee=ye.nativeEvent.submitter,I=Ee?.getAttribute("formmethod")||m,je=()=>B(Ee||ye.currentTarget,{fetcherKey:c,method:I,navigate:r,replace:f,state:p,relative:g,preventScrollReset:x,viewTransition:_,unstable_defaultShouldRevalidate:O});L&&r!==!1?j.startTransition(()=>je()):je()};return j.createElement("form",{ref:k,method:U,action:Q,onSubmit:o?d:de,...D,"data-discover":!W&&l==="render"?"true":void 0})});Lv.displayName="Form";function Bv(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yh(l){let c=j.useContext(ei);return Ce(c,Bv(l)),c}function Yv(l,{target:c,replace:r,state:o,preventScrollReset:f,relative:p,viewTransition:m,unstable_defaultShouldRevalidate:y,unstable_useTransitions:d}={}){let g=Rh(),x=fl(),_=aa(l,{relative:p});return j.useCallback(O=>{if(gv(O,c)){O.preventDefault();let D=r!==void 0?r:Ii(x)===Ii(_),k=()=>g(l,{replace:D,state:o,preventScrollReset:f,relative:p,viewTransition:m,unstable_defaultShouldRevalidate:y});d?j.startTransition(()=>k()):k()}},[x,g,_,r,o,c,l,f,p,m,y,d])}var kv=0,Gv=()=>`__${String(++kv)}__`;function Qv(){let{router:l}=Yh("useSubmit"),{basename:c}=j.useContext(Dn),r=cv(),o=l.fetch,f=l.navigate;return j.useCallback(async(p,m={})=>{let{action:y,method:d,encType:g,formData:x,body:_}=Av(p,c);if(m.navigate===!1){let O=m.fetcherKey||Gv();await o(O,r,m.action||y,{unstable_defaultShouldRevalidate:m.unstable_defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:x,body:_,formMethod:m.method||d,formEncType:m.encType||g,flushSync:m.flushSync})}else await f(m.action||y,{unstable_defaultShouldRevalidate:m.unstable_defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:x,body:_,formMethod:m.method||d,formEncType:m.encType||g,replace:m.replace,state:m.state,fromRouteId:r,flushSync:m.flushSync,viewTransition:m.viewTransition})},[o,f,c,r])}function Xv(l,{relative:c}={}){let{basename:r}=j.useContext(Dn),o=j.useContext(Zn);Ce(o,"useFormAction must be used inside a RouteContext");let[f]=o.matches.slice(-1),p={...aa(l||".",{relative:c})},m=fl();if(l==null){p.search=m.search;let y=new URLSearchParams(p.search),d=y.getAll("index");if(d.some(x=>x==="")){y.delete("index"),d.filter(_=>_).forEach(_=>y.append("index",_));let x=y.toString();p.search=x?`?${x}`:""}}return(!l||l===".")&&f.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(p.pathname=p.pathname==="/"?r:st([r,p.pathname])),Ii(p)}function Zv(l,{relative:c}={}){let r=j.useContext(Ch);Ce(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Yh("useViewTransitionState"),f=aa(l,{relative:c});if(!r.isTransitioning)return!1;let p=pt(r.currentLocation.pathname,o)||r.currentLocation.pathname,m=pt(r.nextLocation.pathname,o)||r.nextLocation.pathname;return ju(f.pathname,m)!=null||ju(f.pathname,p)!=null}const Vv=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Kv=l=>l.replace(/^([A-Z])|[\s-_]+(\w)/g,(c,r,o)=>o?o.toUpperCase():r.toLowerCase()),nh=l=>{const c=Kv(l);return c.charAt(0).toUpperCase()+c.slice(1)},kh=(...l)=>l.filter((c,r,o)=>!!c&&c.trim()!==""&&o.indexOf(c)===r).join(" ").trim(),Jv=l=>{for(const c in l)if(c.startsWith("aria-")||c==="role"||c==="title")return!0};var Fv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Wv=j.forwardRef(({color:l="currentColor",size:c=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:f="",children:p,iconNode:m,...y},d)=>j.createElement("svg",{ref:d,...Fv,width:c,height:c,stroke:l,strokeWidth:o?Number(r)*24/Number(c):r,className:kh("lucide",f),...!p&&!Jv(y)&&{"aria-hidden":"true"},...y},[...m.map(([g,x])=>j.createElement(g,x)),...Array.isArray(p)?p:[p]]));const Gt=(l,c)=>{const r=j.forwardRef(({className:o,...f},p)=>j.createElement(Wv,{ref:p,iconNode:c,className:kh(`lucide-${Vv(nh(l))}`,`lucide-${l}`,o),...f}));return r.displayName=nh(l),r};const $v=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Gh=Gt("arrow-left",$v);const Iv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Pv=Gt("arrow-right",Iv);const e_=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],n_=Gt("book-open",e_);const t_=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],fo=Gt("circle-check-big",t_);const l_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],th=Gt("circle-x",l_);const i_=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],a_=Gt("languages",i_);const u_=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],c_=Gt("rotate-ccw",u_);const r_=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],o_=Gt("trophy",r_);function Qh(l){return typeof l>"u"||l===null}function f_(l){return typeof l=="object"&&l!==null}function s_(l){return Array.isArray(l)?l:Qh(l)?[]:[l]}function p_(l,c){var r,o,f,p;if(c)for(p=Object.keys(c),r=0,o=p.length;r<o;r+=1)f=p[r],l[f]=c[f];return l}function m_(l,c){var r="",o;for(o=0;o<c;o+=1)r+=l;return r}function h_(l){return l===0&&Number.NEGATIVE_INFINITY===1/l}var d_=Qh,y_=f_,g_=s_,v_=m_,__=h_,A_=p_,Ge={isNothing:d_,isObject:y_,toArray:g_,repeat:v_,isNegativeZero:__,extend:A_};function Xh(l,c){var r="",o=l.reason||"(unknown reason)";return l.mark?(l.mark.name&&(r+='in "'+l.mark.name+'" '),r+="("+(l.mark.line+1)+":"+(l.mark.column+1)+")",!c&&l.mark.snippet&&(r+=`

`+l.mark.snippet),o+" "+r):o}function Pi(l,c){Error.call(this),this.name="YAMLException",this.reason=l,this.mark=c,this.message=Xh(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Pi.prototype=Object.create(Error.prototype);Pi.prototype.constructor=Pi;Pi.prototype.toString=function(c){return this.name+": "+Xh(this,c)};var tn=Pi;function so(l,c,r,o,f){var p="",m="",y=Math.floor(f/2)-1;return o-c>y&&(p=" ... ",c=o-y+p.length),r-o>y&&(m=" ...",r=o+y-m.length),{str:p+l.slice(c,r).replace(/\t/g,"→")+m,pos:o-c+p.length}}function po(l,c){return Ge.repeat(" ",c-l.length)+l}function z_(l,c){if(c=Object.create(c||null),!l.buffer)return null;c.maxLength||(c.maxLength=79),typeof c.indent!="number"&&(c.indent=1),typeof c.linesBefore!="number"&&(c.linesBefore=3),typeof c.linesAfter!="number"&&(c.linesAfter=2);for(var r=/\r?\n|\r|\0/g,o=[0],f=[],p,m=-1;p=r.exec(l.buffer);)f.push(p.index),o.push(p.index+p[0].length),l.position<=p.index&&m<0&&(m=o.length-2);m<0&&(m=o.length-1);var y="",d,g,x=Math.min(l.line+c.linesAfter,f.length).toString().length,_=c.maxLength-(c.indent+x+3);for(d=1;d<=c.linesBefore&&!(m-d<0);d++)g=so(l.buffer,o[m-d],f[m-d],l.position-(o[m]-o[m-d]),_),y=Ge.repeat(" ",c.indent)+po((l.line-d+1).toString(),x)+" | "+g.str+`
`+y;for(g=so(l.buffer,o[m],f[m],l.position,_),y+=Ge.repeat(" ",c.indent)+po((l.line+1).toString(),x)+" | "+g.str+`
`,y+=Ge.repeat("-",c.indent+x+3+g.pos)+`^
`,d=1;d<=c.linesAfter&&!(m+d>=f.length);d++)g=so(l.buffer,o[m+d],f[m+d],l.position-(o[m]-o[m+d]),_),y+=Ge.repeat(" ",c.indent)+po((l.line+d+1).toString(),x)+" | "+g.str+`
`;return y.replace(/\n$/,"")}var x_=z_,b_=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],S_=["scalar","sequence","mapping"];function w_(l){var c={};return l!==null&&Object.keys(l).forEach(function(r){l[r].forEach(function(o){c[String(o)]=r})}),c}function E_(l,c){if(c=c||{},Object.keys(c).forEach(function(r){if(b_.indexOf(r)===-1)throw new tn('Unknown option "'+r+'" is met in definition of "'+l+'" YAML type.')}),this.options=c,this.tag=l,this.kind=c.kind||null,this.resolve=c.resolve||function(){return!0},this.construct=c.construct||function(r){return r},this.instanceOf=c.instanceOf||null,this.predicate=c.predicate||null,this.represent=c.represent||null,this.representName=c.representName||null,this.defaultStyle=c.defaultStyle||null,this.multi=c.multi||!1,this.styleAliases=w_(c.styleAliases||null),S_.indexOf(this.kind)===-1)throw new tn('Unknown kind "'+this.kind+'" is specified for "'+l+'" YAML type.')}var $e=E_;function lh(l,c){var r=[];return l[c].forEach(function(o){var f=r.length;r.forEach(function(p,m){p.tag===o.tag&&p.kind===o.kind&&p.multi===o.multi&&(f=m)}),r[f]=o}),r}function j_(){var l={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},c,r;function o(f){f.multi?(l.multi[f.kind].push(f),l.multi.fallback.push(f)):l[f.kind][f.tag]=l.fallback[f.tag]=f}for(c=0,r=arguments.length;c<r;c+=1)arguments[c].forEach(o);return l}function vo(l){return this.extend(l)}vo.prototype.extend=function(c){var r=[],o=[];if(c instanceof $e)o.push(c);else if(Array.isArray(c))o=o.concat(c);else if(c&&(Array.isArray(c.implicit)||Array.isArray(c.explicit)))c.implicit&&(r=r.concat(c.implicit)),c.explicit&&(o=o.concat(c.explicit));else throw new tn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");r.forEach(function(p){if(!(p instanceof $e))throw new tn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(p.loadKind&&p.loadKind!=="scalar")throw new tn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(p.multi)throw new tn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(p){if(!(p instanceof $e))throw new tn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var f=Object.create(vo.prototype);return f.implicit=(this.implicit||[]).concat(r),f.explicit=(this.explicit||[]).concat(o),f.compiledImplicit=lh(f,"implicit"),f.compiledExplicit=lh(f,"explicit"),f.compiledTypeMap=j_(f.compiledImplicit,f.compiledExplicit),f};var Zh=vo,Vh=new $e("tag:yaml.org,2002:str",{kind:"scalar",construct:function(l){return l!==null?l:""}}),Kh=new $e("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(l){return l!==null?l:[]}}),Jh=new $e("tag:yaml.org,2002:map",{kind:"mapping",construct:function(l){return l!==null?l:{}}}),Fh=new Zh({explicit:[Vh,Kh,Jh]});function T_(l){if(l===null)return!0;var c=l.length;return c===1&&l==="~"||c===4&&(l==="null"||l==="Null"||l==="NULL")}function C_(){return null}function q_(l){return l===null}var Wh=new $e("tag:yaml.org,2002:null",{kind:"scalar",resolve:T_,construct:C_,predicate:q_,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function O_(l){if(l===null)return!1;var c=l.length;return c===4&&(l==="true"||l==="True"||l==="TRUE")||c===5&&(l==="false"||l==="False"||l==="FALSE")}function N_(l){return l==="true"||l==="True"||l==="TRUE"}function R_(l){return Object.prototype.toString.call(l)==="[object Boolean]"}var $h=new $e("tag:yaml.org,2002:bool",{kind:"scalar",resolve:O_,construct:N_,predicate:R_,represent:{lowercase:function(l){return l?"true":"false"},uppercase:function(l){return l?"TRUE":"FALSE"},camelcase:function(l){return l?"True":"False"}},defaultStyle:"lowercase"});function M_(l){return 48<=l&&l<=57||65<=l&&l<=70||97<=l&&l<=102}function D_(l){return 48<=l&&l<=55}function U_(l){return 48<=l&&l<=57}function H_(l){if(l===null)return!1;var c=l.length,r=0,o=!1,f;if(!c)return!1;if(f=l[r],(f==="-"||f==="+")&&(f=l[++r]),f==="0"){if(r+1===c)return!0;if(f=l[++r],f==="b"){for(r++;r<c;r++)if(f=l[r],f!=="_"){if(f!=="0"&&f!=="1")return!1;o=!0}return o&&f!=="_"}if(f==="x"){for(r++;r<c;r++)if(f=l[r],f!=="_"){if(!M_(l.charCodeAt(r)))return!1;o=!0}return o&&f!=="_"}if(f==="o"){for(r++;r<c;r++)if(f=l[r],f!=="_"){if(!D_(l.charCodeAt(r)))return!1;o=!0}return o&&f!=="_"}}if(f==="_")return!1;for(;r<c;r++)if(f=l[r],f!=="_"){if(!U_(l.charCodeAt(r)))return!1;o=!0}return!(!o||f==="_")}function L_(l){var c=l,r=1,o;if(c.indexOf("_")!==-1&&(c=c.replace(/_/g,"")),o=c[0],(o==="-"||o==="+")&&(o==="-"&&(r=-1),c=c.slice(1),o=c[0]),c==="0")return 0;if(o==="0"){if(c[1]==="b")return r*parseInt(c.slice(2),2);if(c[1]==="x")return r*parseInt(c.slice(2),16);if(c[1]==="o")return r*parseInt(c.slice(2),8)}return r*parseInt(c,10)}function B_(l){return Object.prototype.toString.call(l)==="[object Number]"&&l%1===0&&!Ge.isNegativeZero(l)}var Ih=new $e("tag:yaml.org,2002:int",{kind:"scalar",resolve:H_,construct:L_,predicate:B_,represent:{binary:function(l){return l>=0?"0b"+l.toString(2):"-0b"+l.toString(2).slice(1)},octal:function(l){return l>=0?"0o"+l.toString(8):"-0o"+l.toString(8).slice(1)},decimal:function(l){return l.toString(10)},hexadecimal:function(l){return l>=0?"0x"+l.toString(16).toUpperCase():"-0x"+l.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Y_=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function k_(l){return!(l===null||!Y_.test(l)||l[l.length-1]==="_")}function G_(l){var c,r;return c=l.replace(/_/g,"").toLowerCase(),r=c[0]==="-"?-1:1,"+-".indexOf(c[0])>=0&&(c=c.slice(1)),c===".inf"?r===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:c===".nan"?NaN:r*parseFloat(c,10)}var Q_=/^[-+]?[0-9]+e/;function X_(l,c){var r;if(isNaN(l))switch(c){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===l)switch(c){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===l)switch(c){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ge.isNegativeZero(l))return"-0.0";return r=l.toString(10),Q_.test(r)?r.replace("e",".e"):r}function Z_(l){return Object.prototype.toString.call(l)==="[object Number]"&&(l%1!==0||Ge.isNegativeZero(l))}var Ph=new $e("tag:yaml.org,2002:float",{kind:"scalar",resolve:k_,construct:G_,predicate:Z_,represent:X_,defaultStyle:"lowercase"}),ed=Fh.extend({implicit:[Wh,$h,Ih,Ph]}),nd=ed,td=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),ld=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function V_(l){return l===null?!1:td.exec(l)!==null||ld.exec(l)!==null}function K_(l){var c,r,o,f,p,m,y,d=0,g=null,x,_,O;if(c=td.exec(l),c===null&&(c=ld.exec(l)),c===null)throw new Error("Date resolve error");if(r=+c[1],o=+c[2]-1,f=+c[3],!c[4])return new Date(Date.UTC(r,o,f));if(p=+c[4],m=+c[5],y=+c[6],c[7]){for(d=c[7].slice(0,3);d.length<3;)d+="0";d=+d}return c[9]&&(x=+c[10],_=+(c[11]||0),g=(x*60+_)*6e4,c[9]==="-"&&(g=-g)),O=new Date(Date.UTC(r,o,f,p,m,y,d)),g&&O.setTime(O.getTime()-g),O}function J_(l){return l.toISOString()}var id=new $e("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:V_,construct:K_,instanceOf:Date,represent:J_});function F_(l){return l==="<<"||l===null}var ad=new $e("tag:yaml.org,2002:merge",{kind:"scalar",resolve:F_}),qo=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function W_(l){if(l===null)return!1;var c,r,o=0,f=l.length,p=qo;for(r=0;r<f;r++)if(c=p.indexOf(l.charAt(r)),!(c>64)){if(c<0)return!1;o+=6}return o%8===0}function $_(l){var c,r,o=l.replace(/[\r\n=]/g,""),f=o.length,p=qo,m=0,y=[];for(c=0;c<f;c++)c%4===0&&c&&(y.push(m>>16&255),y.push(m>>8&255),y.push(m&255)),m=m<<6|p.indexOf(o.charAt(c));return r=f%4*6,r===0?(y.push(m>>16&255),y.push(m>>8&255),y.push(m&255)):r===18?(y.push(m>>10&255),y.push(m>>2&255)):r===12&&y.push(m>>4&255),new Uint8Array(y)}function I_(l){var c="",r=0,o,f,p=l.length,m=qo;for(o=0;o<p;o++)o%3===0&&o&&(c+=m[r>>18&63],c+=m[r>>12&63],c+=m[r>>6&63],c+=m[r&63]),r=(r<<8)+l[o];return f=p%3,f===0?(c+=m[r>>18&63],c+=m[r>>12&63],c+=m[r>>6&63],c+=m[r&63]):f===2?(c+=m[r>>10&63],c+=m[r>>4&63],c+=m[r<<2&63],c+=m[64]):f===1&&(c+=m[r>>2&63],c+=m[r<<4&63],c+=m[64],c+=m[64]),c}function P_(l){return Object.prototype.toString.call(l)==="[object Uint8Array]"}var ud=new $e("tag:yaml.org,2002:binary",{kind:"scalar",resolve:W_,construct:$_,predicate:P_,represent:I_}),e1=Object.prototype.hasOwnProperty,n1=Object.prototype.toString;function t1(l){if(l===null)return!0;var c=[],r,o,f,p,m,y=l;for(r=0,o=y.length;r<o;r+=1){if(f=y[r],m=!1,n1.call(f)!=="[object Object]")return!1;for(p in f)if(e1.call(f,p))if(!m)m=!0;else return!1;if(!m)return!1;if(c.indexOf(p)===-1)c.push(p);else return!1}return!0}function l1(l){return l!==null?l:[]}var cd=new $e("tag:yaml.org,2002:omap",{kind:"sequence",resolve:t1,construct:l1}),i1=Object.prototype.toString;function a1(l){if(l===null)return!0;var c,r,o,f,p,m=l;for(p=new Array(m.length),c=0,r=m.length;c<r;c+=1){if(o=m[c],i1.call(o)!=="[object Object]"||(f=Object.keys(o),f.length!==1))return!1;p[c]=[f[0],o[f[0]]]}return!0}function u1(l){if(l===null)return[];var c,r,o,f,p,m=l;for(p=new Array(m.length),c=0,r=m.length;c<r;c+=1)o=m[c],f=Object.keys(o),p[c]=[f[0],o[f[0]]];return p}var rd=new $e("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:a1,construct:u1}),c1=Object.prototype.hasOwnProperty;function r1(l){if(l===null)return!0;var c,r=l;for(c in r)if(c1.call(r,c)&&r[c]!==null)return!1;return!0}function o1(l){return l!==null?l:{}}var od=new $e("tag:yaml.org,2002:set",{kind:"mapping",resolve:r1,construct:o1}),Oo=nd.extend({implicit:[id,ad],explicit:[ud,cd,rd,od]}),kt=Object.prototype.hasOwnProperty,Tu=1,fd=2,sd=3,Cu=4,mo=1,f1=2,ih=3,s1=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,p1=/[\x85\u2028\u2029]/,m1=/[,\[\]\{\}]/,pd=/^(?:!|!!|![a-z\-]+!)$/i,md=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function ah(l){return Object.prototype.toString.call(l)}function Xn(l){return l===10||l===13}function rl(l){return l===9||l===32}function sn(l){return l===9||l===32||l===10||l===13}function $l(l){return l===44||l===91||l===93||l===123||l===125}function h1(l){var c;return 48<=l&&l<=57?l-48:(c=l|32,97<=c&&c<=102?c-97+10:-1)}function d1(l){return l===120?2:l===117?4:l===85?8:0}function y1(l){return 48<=l&&l<=57?l-48:-1}function uh(l){return l===48?"\0":l===97?"\x07":l===98?"\b":l===116||l===9?"	":l===110?`
`:l===118?"\v":l===102?"\f":l===114?"\r":l===101?"\x1B":l===32?" ":l===34?'"':l===47?"/":l===92?"\\":l===78?"":l===95?" ":l===76?"\u2028":l===80?"\u2029":""}function g1(l){return l<=65535?String.fromCharCode(l):String.fromCharCode((l-65536>>10)+55296,(l-65536&1023)+56320)}function hd(l,c,r){c==="__proto__"?Object.defineProperty(l,c,{configurable:!0,enumerable:!0,writable:!0,value:r}):l[c]=r}var dd=new Array(256),yd=new Array(256);for(var Fl=0;Fl<256;Fl++)dd[Fl]=uh(Fl)?1:0,yd[Fl]=uh(Fl);function v1(l,c){this.input=l,this.filename=c.filename||null,this.schema=c.schema||Oo,this.onWarning=c.onWarning||null,this.legacy=c.legacy||!1,this.json=c.json||!1,this.listener=c.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=l.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function gd(l,c){var r={name:l.filename,buffer:l.input.slice(0,-1),position:l.position,line:l.line,column:l.position-l.lineStart};return r.snippet=x_(r),new tn(c,r)}function J(l,c){throw gd(l,c)}function qu(l,c){l.onWarning&&l.onWarning.call(null,gd(l,c))}var ch={YAML:function(c,r,o){var f,p,m;c.version!==null&&J(c,"duplication of %YAML directive"),o.length!==1&&J(c,"YAML directive accepts exactly one argument"),f=/^([0-9]+)\.([0-9]+)$/.exec(o[0]),f===null&&J(c,"ill-formed argument of the YAML directive"),p=parseInt(f[1],10),m=parseInt(f[2],10),p!==1&&J(c,"unacceptable YAML version of the document"),c.version=o[0],c.checkLineBreaks=m<2,m!==1&&m!==2&&qu(c,"unsupported YAML version of the document")},TAG:function(c,r,o){var f,p;o.length!==2&&J(c,"TAG directive accepts exactly two arguments"),f=o[0],p=o[1],pd.test(f)||J(c,"ill-formed tag handle (first argument) of the TAG directive"),kt.call(c.tagMap,f)&&J(c,'there is a previously declared suffix for "'+f+'" tag handle'),md.test(p)||J(c,"ill-formed tag prefix (second argument) of the TAG directive");try{p=decodeURIComponent(p)}catch{J(c,"tag prefix is malformed: "+p)}c.tagMap[f]=p}};function Yt(l,c,r,o){var f,p,m,y;if(c<r){if(y=l.input.slice(c,r),o)for(f=0,p=y.length;f<p;f+=1)m=y.charCodeAt(f),m===9||32<=m&&m<=1114111||J(l,"expected valid JSON character");else s1.test(y)&&J(l,"the stream contains non-printable characters");l.result+=y}}function rh(l,c,r,o){var f,p,m,y;for(Ge.isObject(r)||J(l,"cannot merge mappings; the provided source object is unacceptable"),f=Object.keys(r),m=0,y=f.length;m<y;m+=1)p=f[m],kt.call(c,p)||(hd(c,p,r[p]),o[p]=!0)}function Il(l,c,r,o,f,p,m,y,d){var g,x;if(Array.isArray(f))for(f=Array.prototype.slice.call(f),g=0,x=f.length;g<x;g+=1)Array.isArray(f[g])&&J(l,"nested arrays are not supported inside keys"),typeof f=="object"&&ah(f[g])==="[object Object]"&&(f[g]="[object Object]");if(typeof f=="object"&&ah(f)==="[object Object]"&&(f="[object Object]"),f=String(f),c===null&&(c={}),o==="tag:yaml.org,2002:merge")if(Array.isArray(p))for(g=0,x=p.length;g<x;g+=1)rh(l,c,p[g],r);else rh(l,c,p,r);else!l.json&&!kt.call(r,f)&&kt.call(c,f)&&(l.line=m||l.line,l.lineStart=y||l.lineStart,l.position=d||l.position,J(l,"duplicated mapping key")),hd(c,f,p),delete r[f];return c}function No(l){var c;c=l.input.charCodeAt(l.position),c===10?l.position++:c===13?(l.position++,l.input.charCodeAt(l.position)===10&&l.position++):J(l,"a line break is expected"),l.line+=1,l.lineStart=l.position,l.firstTabInLine=-1}function Ye(l,c,r){for(var o=0,f=l.input.charCodeAt(l.position);f!==0;){for(;rl(f);)f===9&&l.firstTabInLine===-1&&(l.firstTabInLine=l.position),f=l.input.charCodeAt(++l.position);if(c&&f===35)do f=l.input.charCodeAt(++l.position);while(f!==10&&f!==13&&f!==0);if(Xn(f))for(No(l),f=l.input.charCodeAt(l.position),o++,l.lineIndent=0;f===32;)l.lineIndent++,f=l.input.charCodeAt(++l.position);else break}return r!==-1&&o!==0&&l.lineIndent<r&&qu(l,"deficient indentation"),o}function Du(l){var c=l.position,r;return r=l.input.charCodeAt(c),!!((r===45||r===46)&&r===l.input.charCodeAt(c+1)&&r===l.input.charCodeAt(c+2)&&(c+=3,r=l.input.charCodeAt(c),r===0||sn(r)))}function Ro(l,c){c===1?l.result+=" ":c>1&&(l.result+=Ge.repeat(`
`,c-1))}function _1(l,c,r){var o,f,p,m,y,d,g,x,_=l.kind,O=l.result,D;if(D=l.input.charCodeAt(l.position),sn(D)||$l(D)||D===35||D===38||D===42||D===33||D===124||D===62||D===39||D===34||D===37||D===64||D===96||(D===63||D===45)&&(f=l.input.charCodeAt(l.position+1),sn(f)||r&&$l(f)))return!1;for(l.kind="scalar",l.result="",p=m=l.position,y=!1;D!==0;){if(D===58){if(f=l.input.charCodeAt(l.position+1),sn(f)||r&&$l(f))break}else if(D===35){if(o=l.input.charCodeAt(l.position-1),sn(o))break}else{if(l.position===l.lineStart&&Du(l)||r&&$l(D))break;if(Xn(D))if(d=l.line,g=l.lineStart,x=l.lineIndent,Ye(l,!1,-1),l.lineIndent>=c){y=!0,D=l.input.charCodeAt(l.position);continue}else{l.position=m,l.line=d,l.lineStart=g,l.lineIndent=x;break}}y&&(Yt(l,p,m,!1),Ro(l,l.line-d),p=m=l.position,y=!1),rl(D)||(m=l.position+1),D=l.input.charCodeAt(++l.position)}return Yt(l,p,m,!1),l.result?!0:(l.kind=_,l.result=O,!1)}function A1(l,c){var r,o,f;if(r=l.input.charCodeAt(l.position),r!==39)return!1;for(l.kind="scalar",l.result="",l.position++,o=f=l.position;(r=l.input.charCodeAt(l.position))!==0;)if(r===39)if(Yt(l,o,l.position,!0),r=l.input.charCodeAt(++l.position),r===39)o=l.position,l.position++,f=l.position;else return!0;else Xn(r)?(Yt(l,o,f,!0),Ro(l,Ye(l,!1,c)),o=f=l.position):l.position===l.lineStart&&Du(l)?J(l,"unexpected end of the document within a single quoted scalar"):(l.position++,f=l.position);J(l,"unexpected end of the stream within a single quoted scalar")}function z1(l,c){var r,o,f,p,m,y;if(y=l.input.charCodeAt(l.position),y!==34)return!1;for(l.kind="scalar",l.result="",l.position++,r=o=l.position;(y=l.input.charCodeAt(l.position))!==0;){if(y===34)return Yt(l,r,l.position,!0),l.position++,!0;if(y===92){if(Yt(l,r,l.position,!0),y=l.input.charCodeAt(++l.position),Xn(y))Ye(l,!1,c);else if(y<256&&dd[y])l.result+=yd[y],l.position++;else if((m=d1(y))>0){for(f=m,p=0;f>0;f--)y=l.input.charCodeAt(++l.position),(m=h1(y))>=0?p=(p<<4)+m:J(l,"expected hexadecimal character");l.result+=g1(p),l.position++}else J(l,"unknown escape sequence");r=o=l.position}else Xn(y)?(Yt(l,r,o,!0),Ro(l,Ye(l,!1,c)),r=o=l.position):l.position===l.lineStart&&Du(l)?J(l,"unexpected end of the document within a double quoted scalar"):(l.position++,o=l.position)}J(l,"unexpected end of the stream within a double quoted scalar")}function x1(l,c){var r=!0,o,f,p,m=l.tag,y,d=l.anchor,g,x,_,O,D,k=Object.create(null),L,B,Q,U;if(U=l.input.charCodeAt(l.position),U===91)x=93,D=!1,y=[];else if(U===123)x=125,D=!0,y={};else return!1;for(l.anchor!==null&&(l.anchorMap[l.anchor]=y),U=l.input.charCodeAt(++l.position);U!==0;){if(Ye(l,!0,c),U=l.input.charCodeAt(l.position),U===x)return l.position++,l.tag=m,l.anchor=d,l.kind=D?"mapping":"sequence",l.result=y,!0;r?U===44&&J(l,"expected the node content, but found ','"):J(l,"missed comma between flow collection entries"),B=L=Q=null,_=O=!1,U===63&&(g=l.input.charCodeAt(l.position+1),sn(g)&&(_=O=!0,l.position++,Ye(l,!0,c))),o=l.line,f=l.lineStart,p=l.position,Pl(l,c,Tu,!1,!0),B=l.tag,L=l.result,Ye(l,!0,c),U=l.input.charCodeAt(l.position),(O||l.line===o)&&U===58&&(_=!0,U=l.input.charCodeAt(++l.position),Ye(l,!0,c),Pl(l,c,Tu,!1,!0),Q=l.result),D?Il(l,y,k,B,L,Q,o,f,p):_?y.push(Il(l,null,k,B,L,Q,o,f,p)):y.push(L),Ye(l,!0,c),U=l.input.charCodeAt(l.position),U===44?(r=!0,U=l.input.charCodeAt(++l.position)):r=!1}J(l,"unexpected end of the stream within a flow collection")}function b1(l,c){var r,o,f=mo,p=!1,m=!1,y=c,d=0,g=!1,x,_;if(_=l.input.charCodeAt(l.position),_===124)o=!1;else if(_===62)o=!0;else return!1;for(l.kind="scalar",l.result="";_!==0;)if(_=l.input.charCodeAt(++l.position),_===43||_===45)mo===f?f=_===43?ih:f1:J(l,"repeat of a chomping mode identifier");else if((x=y1(_))>=0)x===0?J(l,"bad explicit indentation width of a block scalar; it cannot be less than one"):m?J(l,"repeat of an indentation width identifier"):(y=c+x-1,m=!0);else break;if(rl(_)){do _=l.input.charCodeAt(++l.position);while(rl(_));if(_===35)do _=l.input.charCodeAt(++l.position);while(!Xn(_)&&_!==0)}for(;_!==0;){for(No(l),l.lineIndent=0,_=l.input.charCodeAt(l.position);(!m||l.lineIndent<y)&&_===32;)l.lineIndent++,_=l.input.charCodeAt(++l.position);if(!m&&l.lineIndent>y&&(y=l.lineIndent),Xn(_)){d++;continue}if(l.lineIndent<y){f===ih?l.result+=Ge.repeat(`
`,p?1+d:d):f===mo&&p&&(l.result+=`
`);break}for(o?rl(_)?(g=!0,l.result+=Ge.repeat(`
`,p?1+d:d)):g?(g=!1,l.result+=Ge.repeat(`
`,d+1)):d===0?p&&(l.result+=" "):l.result+=Ge.repeat(`
`,d):l.result+=Ge.repeat(`
`,p?1+d:d),p=!0,m=!0,d=0,r=l.position;!Xn(_)&&_!==0;)_=l.input.charCodeAt(++l.position);Yt(l,r,l.position,!1)}return!0}function oh(l,c){var r,o=l.tag,f=l.anchor,p=[],m,y=!1,d;if(l.firstTabInLine!==-1)return!1;for(l.anchor!==null&&(l.anchorMap[l.anchor]=p),d=l.input.charCodeAt(l.position);d!==0&&(l.firstTabInLine!==-1&&(l.position=l.firstTabInLine,J(l,"tab characters must not be used in indentation")),!(d!==45||(m=l.input.charCodeAt(l.position+1),!sn(m))));){if(y=!0,l.position++,Ye(l,!0,-1)&&l.lineIndent<=c){p.push(null),d=l.input.charCodeAt(l.position);continue}if(r=l.line,Pl(l,c,sd,!1,!0),p.push(l.result),Ye(l,!0,-1),d=l.input.charCodeAt(l.position),(l.line===r||l.lineIndent>c)&&d!==0)J(l,"bad indentation of a sequence entry");else if(l.lineIndent<c)break}return y?(l.tag=o,l.anchor=f,l.kind="sequence",l.result=p,!0):!1}function S1(l,c,r){var o,f,p,m,y,d,g=l.tag,x=l.anchor,_={},O=Object.create(null),D=null,k=null,L=null,B=!1,Q=!1,U;if(l.firstTabInLine!==-1)return!1;for(l.anchor!==null&&(l.anchorMap[l.anchor]=_),U=l.input.charCodeAt(l.position);U!==0;){if(!B&&l.firstTabInLine!==-1&&(l.position=l.firstTabInLine,J(l,"tab characters must not be used in indentation")),o=l.input.charCodeAt(l.position+1),p=l.line,(U===63||U===58)&&sn(o))U===63?(B&&(Il(l,_,O,D,k,null,m,y,d),D=k=L=null),Q=!0,B=!0,f=!0):B?(B=!1,f=!0):J(l,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),l.position+=1,U=o;else{if(m=l.line,y=l.lineStart,d=l.position,!Pl(l,r,fd,!1,!0))break;if(l.line===p){for(U=l.input.charCodeAt(l.position);rl(U);)U=l.input.charCodeAt(++l.position);if(U===58)U=l.input.charCodeAt(++l.position),sn(U)||J(l,"a whitespace character is expected after the key-value separator within a block mapping"),B&&(Il(l,_,O,D,k,null,m,y,d),D=k=L=null),Q=!0,B=!1,f=!1,D=l.tag,k=l.result;else if(Q)J(l,"can not read an implicit mapping pair; a colon is missed");else return l.tag=g,l.anchor=x,!0}else if(Q)J(l,"can not read a block mapping entry; a multiline key may not be an implicit key");else return l.tag=g,l.anchor=x,!0}if((l.line===p||l.lineIndent>c)&&(B&&(m=l.line,y=l.lineStart,d=l.position),Pl(l,c,Cu,!0,f)&&(B?k=l.result:L=l.result),B||(Il(l,_,O,D,k,L,m,y,d),D=k=L=null),Ye(l,!0,-1),U=l.input.charCodeAt(l.position)),(l.line===p||l.lineIndent>c)&&U!==0)J(l,"bad indentation of a mapping entry");else if(l.lineIndent<c)break}return B&&Il(l,_,O,D,k,null,m,y,d),Q&&(l.tag=g,l.anchor=x,l.kind="mapping",l.result=_),Q}function w1(l){var c,r=!1,o=!1,f,p,m;if(m=l.input.charCodeAt(l.position),m!==33)return!1;if(l.tag!==null&&J(l,"duplication of a tag property"),m=l.input.charCodeAt(++l.position),m===60?(r=!0,m=l.input.charCodeAt(++l.position)):m===33?(o=!0,f="!!",m=l.input.charCodeAt(++l.position)):f="!",c=l.position,r){do m=l.input.charCodeAt(++l.position);while(m!==0&&m!==62);l.position<l.length?(p=l.input.slice(c,l.position),m=l.input.charCodeAt(++l.position)):J(l,"unexpected end of the stream within a verbatim tag")}else{for(;m!==0&&!sn(m);)m===33&&(o?J(l,"tag suffix cannot contain exclamation marks"):(f=l.input.slice(c-1,l.position+1),pd.test(f)||J(l,"named tag handle cannot contain such characters"),o=!0,c=l.position+1)),m=l.input.charCodeAt(++l.position);p=l.input.slice(c,l.position),m1.test(p)&&J(l,"tag suffix cannot contain flow indicator characters")}p&&!md.test(p)&&J(l,"tag name cannot contain such characters: "+p);try{p=decodeURIComponent(p)}catch{J(l,"tag name is malformed: "+p)}return r?l.tag=p:kt.call(l.tagMap,f)?l.tag=l.tagMap[f]+p:f==="!"?l.tag="!"+p:f==="!!"?l.tag="tag:yaml.org,2002:"+p:J(l,'undeclared tag handle "'+f+'"'),!0}function E1(l){var c,r;if(r=l.input.charCodeAt(l.position),r!==38)return!1;for(l.anchor!==null&&J(l,"duplication of an anchor property"),r=l.input.charCodeAt(++l.position),c=l.position;r!==0&&!sn(r)&&!$l(r);)r=l.input.charCodeAt(++l.position);return l.position===c&&J(l,"name of an anchor node must contain at least one character"),l.anchor=l.input.slice(c,l.position),!0}function j1(l){var c,r,o;if(o=l.input.charCodeAt(l.position),o!==42)return!1;for(o=l.input.charCodeAt(++l.position),c=l.position;o!==0&&!sn(o)&&!$l(o);)o=l.input.charCodeAt(++l.position);return l.position===c&&J(l,"name of an alias node must contain at least one character"),r=l.input.slice(c,l.position),kt.call(l.anchorMap,r)||J(l,'unidentified alias "'+r+'"'),l.result=l.anchorMap[r],Ye(l,!0,-1),!0}function Pl(l,c,r,o,f){var p,m,y,d=1,g=!1,x=!1,_,O,D,k,L,B;if(l.listener!==null&&l.listener("open",l),l.tag=null,l.anchor=null,l.kind=null,l.result=null,p=m=y=Cu===r||sd===r,o&&Ye(l,!0,-1)&&(g=!0,l.lineIndent>c?d=1:l.lineIndent===c?d=0:l.lineIndent<c&&(d=-1)),d===1)for(;w1(l)||E1(l);)Ye(l,!0,-1)?(g=!0,y=p,l.lineIndent>c?d=1:l.lineIndent===c?d=0:l.lineIndent<c&&(d=-1)):y=!1;if(y&&(y=g||f),(d===1||Cu===r)&&(Tu===r||fd===r?L=c:L=c+1,B=l.position-l.lineStart,d===1?y&&(oh(l,B)||S1(l,B,L))||x1(l,L)?x=!0:(m&&b1(l,L)||A1(l,L)||z1(l,L)?x=!0:j1(l)?(x=!0,(l.tag!==null||l.anchor!==null)&&J(l,"alias node should not have any properties")):_1(l,L,Tu===r)&&(x=!0,l.tag===null&&(l.tag="?")),l.anchor!==null&&(l.anchorMap[l.anchor]=l.result)):d===0&&(x=y&&oh(l,B))),l.tag===null)l.anchor!==null&&(l.anchorMap[l.anchor]=l.result);else if(l.tag==="?"){for(l.result!==null&&l.kind!=="scalar"&&J(l,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+l.kind+'"'),_=0,O=l.implicitTypes.length;_<O;_+=1)if(k=l.implicitTypes[_],k.resolve(l.result)){l.result=k.construct(l.result),l.tag=k.tag,l.anchor!==null&&(l.anchorMap[l.anchor]=l.result);break}}else if(l.tag!=="!"){if(kt.call(l.typeMap[l.kind||"fallback"],l.tag))k=l.typeMap[l.kind||"fallback"][l.tag];else for(k=null,D=l.typeMap.multi[l.kind||"fallback"],_=0,O=D.length;_<O;_+=1)if(l.tag.slice(0,D[_].tag.length)===D[_].tag){k=D[_];break}k||J(l,"unknown tag !<"+l.tag+">"),l.result!==null&&k.kind!==l.kind&&J(l,"unacceptable node kind for !<"+l.tag+'> tag; it should be "'+k.kind+'", not "'+l.kind+'"'),k.resolve(l.result,l.tag)?(l.result=k.construct(l.result,l.tag),l.anchor!==null&&(l.anchorMap[l.anchor]=l.result)):J(l,"cannot resolve a node with !<"+l.tag+"> explicit tag")}return l.listener!==null&&l.listener("close",l),l.tag!==null||l.anchor!==null||x}function T1(l){var c=l.position,r,o,f,p=!1,m;for(l.version=null,l.checkLineBreaks=l.legacy,l.tagMap=Object.create(null),l.anchorMap=Object.create(null);(m=l.input.charCodeAt(l.position))!==0&&(Ye(l,!0,-1),m=l.input.charCodeAt(l.position),!(l.lineIndent>0||m!==37));){for(p=!0,m=l.input.charCodeAt(++l.position),r=l.position;m!==0&&!sn(m);)m=l.input.charCodeAt(++l.position);for(o=l.input.slice(r,l.position),f=[],o.length<1&&J(l,"directive name must not be less than one character in length");m!==0;){for(;rl(m);)m=l.input.charCodeAt(++l.position);if(m===35){do m=l.input.charCodeAt(++l.position);while(m!==0&&!Xn(m));break}if(Xn(m))break;for(r=l.position;m!==0&&!sn(m);)m=l.input.charCodeAt(++l.position);f.push(l.input.slice(r,l.position))}m!==0&&No(l),kt.call(ch,o)?ch[o](l,o,f):qu(l,'unknown document directive "'+o+'"')}if(Ye(l,!0,-1),l.lineIndent===0&&l.input.charCodeAt(l.position)===45&&l.input.charCodeAt(l.position+1)===45&&l.input.charCodeAt(l.position+2)===45?(l.position+=3,Ye(l,!0,-1)):p&&J(l,"directives end mark is expected"),Pl(l,l.lineIndent-1,Cu,!1,!0),Ye(l,!0,-1),l.checkLineBreaks&&p1.test(l.input.slice(c,l.position))&&qu(l,"non-ASCII line breaks are interpreted as content"),l.documents.push(l.result),l.position===l.lineStart&&Du(l)){l.input.charCodeAt(l.position)===46&&(l.position+=3,Ye(l,!0,-1));return}if(l.position<l.length-1)J(l,"end of the stream or a document separator is expected");else return}function vd(l,c){l=String(l),c=c||{},l.length!==0&&(l.charCodeAt(l.length-1)!==10&&l.charCodeAt(l.length-1)!==13&&(l+=`
`),l.charCodeAt(0)===65279&&(l=l.slice(1)));var r=new v1(l,c),o=l.indexOf("\0");for(o!==-1&&(r.position=o,J(r,"null byte is not allowed in input")),r.input+="\0";r.input.charCodeAt(r.position)===32;)r.lineIndent+=1,r.position+=1;for(;r.position<r.length-1;)T1(r);return r.documents}function C1(l,c,r){c!==null&&typeof c=="object"&&typeof r>"u"&&(r=c,c=null);var o=vd(l,r);if(typeof c!="function")return o;for(var f=0,p=o.length;f<p;f+=1)c(o[f])}function q1(l,c){var r=vd(l,c);if(r.length!==0){if(r.length===1)return r[0];throw new tn("expected a single document in the stream, but found more")}}var O1=C1,N1=q1,_d={loadAll:O1,load:N1},Ad=Object.prototype.toString,zd=Object.prototype.hasOwnProperty,Mo=65279,R1=9,ea=10,M1=13,D1=32,U1=33,H1=34,_o=35,L1=37,B1=38,Y1=39,k1=42,xd=44,G1=45,Ou=58,Q1=61,X1=62,Z1=63,V1=64,bd=91,Sd=93,K1=96,wd=123,J1=124,Ed=125,Pe={};Pe[0]="\\0";Pe[7]="\\a";Pe[8]="\\b";Pe[9]="\\t";Pe[10]="\\n";Pe[11]="\\v";Pe[12]="\\f";Pe[13]="\\r";Pe[27]="\\e";Pe[34]='\\"';Pe[92]="\\\\";Pe[133]="\\N";Pe[160]="\\_";Pe[8232]="\\L";Pe[8233]="\\P";var F1=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],W1=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function $1(l,c){var r,o,f,p,m,y,d;if(c===null)return{};for(r={},o=Object.keys(c),f=0,p=o.length;f<p;f+=1)m=o[f],y=String(c[m]),m.slice(0,2)==="!!"&&(m="tag:yaml.org,2002:"+m.slice(2)),d=l.compiledTypeMap.fallback[m],d&&zd.call(d.styleAliases,y)&&(y=d.styleAliases[y]),r[m]=y;return r}function I1(l){var c,r,o;if(c=l.toString(16).toUpperCase(),l<=255)r="x",o=2;else if(l<=65535)r="u",o=4;else if(l<=4294967295)r="U",o=8;else throw new tn("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+r+Ge.repeat("0",o-c.length)+c}var P1=1,na=2;function eA(l){this.schema=l.schema||Oo,this.indent=Math.max(1,l.indent||2),this.noArrayIndent=l.noArrayIndent||!1,this.skipInvalid=l.skipInvalid||!1,this.flowLevel=Ge.isNothing(l.flowLevel)?-1:l.flowLevel,this.styleMap=$1(this.schema,l.styles||null),this.sortKeys=l.sortKeys||!1,this.lineWidth=l.lineWidth||80,this.noRefs=l.noRefs||!1,this.noCompatMode=l.noCompatMode||!1,this.condenseFlow=l.condenseFlow||!1,this.quotingType=l.quotingType==='"'?na:P1,this.forceQuotes=l.forceQuotes||!1,this.replacer=typeof l.replacer=="function"?l.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function fh(l,c){for(var r=Ge.repeat(" ",c),o=0,f=-1,p="",m,y=l.length;o<y;)f=l.indexOf(`
`,o),f===-1?(m=l.slice(o),o=y):(m=l.slice(o,f+1),o=f+1),m.length&&m!==`
`&&(p+=r),p+=m;return p}function Ao(l,c){return`
`+Ge.repeat(" ",l.indent*c)}function nA(l,c){var r,o,f;for(r=0,o=l.implicitTypes.length;r<o;r+=1)if(f=l.implicitTypes[r],f.resolve(c))return!0;return!1}function Nu(l){return l===D1||l===R1}function ta(l){return 32<=l&&l<=126||161<=l&&l<=55295&&l!==8232&&l!==8233||57344<=l&&l<=65533&&l!==Mo||65536<=l&&l<=1114111}function sh(l){return ta(l)&&l!==Mo&&l!==M1&&l!==ea}function ph(l,c,r){var o=sh(l),f=o&&!Nu(l);return(r?o:o&&l!==xd&&l!==bd&&l!==Sd&&l!==wd&&l!==Ed)&&l!==_o&&!(c===Ou&&!f)||sh(c)&&!Nu(c)&&l===_o||c===Ou&&f}function tA(l){return ta(l)&&l!==Mo&&!Nu(l)&&l!==G1&&l!==Z1&&l!==Ou&&l!==xd&&l!==bd&&l!==Sd&&l!==wd&&l!==Ed&&l!==_o&&l!==B1&&l!==k1&&l!==U1&&l!==J1&&l!==Q1&&l!==X1&&l!==Y1&&l!==H1&&l!==L1&&l!==V1&&l!==K1}function lA(l){return!Nu(l)&&l!==Ou}function $i(l,c){var r=l.charCodeAt(c),o;return r>=55296&&r<=56319&&c+1<l.length&&(o=l.charCodeAt(c+1),o>=56320&&o<=57343)?(r-55296)*1024+o-56320+65536:r}function jd(l){var c=/^\n* /;return c.test(l)}var Td=1,zo=2,Cd=3,qd=4,Wl=5;function iA(l,c,r,o,f,p,m,y){var d,g=0,x=null,_=!1,O=!1,D=o!==-1,k=-1,L=tA($i(l,0))&&lA($i(l,l.length-1));if(c||m)for(d=0;d<l.length;g>=65536?d+=2:d++){if(g=$i(l,d),!ta(g))return Wl;L=L&&ph(g,x,y),x=g}else{for(d=0;d<l.length;g>=65536?d+=2:d++){if(g=$i(l,d),g===ea)_=!0,D&&(O=O||d-k-1>o&&l[k+1]!==" ",k=d);else if(!ta(g))return Wl;L=L&&ph(g,x,y),x=g}O=O||D&&d-k-1>o&&l[k+1]!==" "}return!_&&!O?L&&!m&&!f(l)?Td:p===na?Wl:zo:r>9&&jd(l)?Wl:m?p===na?Wl:zo:O?qd:Cd}function aA(l,c,r,o,f){l.dump=(function(){if(c.length===0)return l.quotingType===na?'""':"''";if(!l.noCompatMode&&(F1.indexOf(c)!==-1||W1.test(c)))return l.quotingType===na?'"'+c+'"':"'"+c+"'";var p=l.indent*Math.max(1,r),m=l.lineWidth===-1?-1:Math.max(Math.min(l.lineWidth,40),l.lineWidth-p),y=o||l.flowLevel>-1&&r>=l.flowLevel;function d(g){return nA(l,g)}switch(iA(c,y,l.indent,m,d,l.quotingType,l.forceQuotes&&!o,f)){case Td:return c;case zo:return"'"+c.replace(/'/g,"''")+"'";case Cd:return"|"+mh(c,l.indent)+hh(fh(c,p));case qd:return">"+mh(c,l.indent)+hh(fh(uA(c,m),p));case Wl:return'"'+cA(c)+'"';default:throw new tn("impossible error: invalid scalar style")}})()}function mh(l,c){var r=jd(l)?String(c):"",o=l[l.length-1]===`
`,f=o&&(l[l.length-2]===`
`||l===`
`),p=f?"+":o?"":"-";return r+p+`
`}function hh(l){return l[l.length-1]===`
`?l.slice(0,-1):l}function uA(l,c){for(var r=/(\n+)([^\n]*)/g,o=(function(){var g=l.indexOf(`
`);return g=g!==-1?g:l.length,r.lastIndex=g,dh(l.slice(0,g),c)})(),f=l[0]===`
`||l[0]===" ",p,m;m=r.exec(l);){var y=m[1],d=m[2];p=d[0]===" ",o+=y+(!f&&!p&&d!==""?`
`:"")+dh(d,c),f=p}return o}function dh(l,c){if(l===""||l[0]===" ")return l;for(var r=/ [^ ]/g,o,f=0,p,m=0,y=0,d="";o=r.exec(l);)y=o.index,y-f>c&&(p=m>f?m:y,d+=`
`+l.slice(f,p),f=p+1),m=y;return d+=`
`,l.length-f>c&&m>f?d+=l.slice(f,m)+`
`+l.slice(m+1):d+=l.slice(f),d.slice(1)}function cA(l){for(var c="",r=0,o,f=0;f<l.length;r>=65536?f+=2:f++)r=$i(l,f),o=Pe[r],!o&&ta(r)?(c+=l[f],r>=65536&&(c+=l[f+1])):c+=o||I1(r);return c}function rA(l,c,r){var o="",f=l.tag,p,m,y;for(p=0,m=r.length;p<m;p+=1)y=r[p],l.replacer&&(y=l.replacer.call(r,String(p),y)),(mt(l,c,y,!1,!1)||typeof y>"u"&&mt(l,c,null,!1,!1))&&(o!==""&&(o+=","+(l.condenseFlow?"":" ")),o+=l.dump);l.tag=f,l.dump="["+o+"]"}function yh(l,c,r,o){var f="",p=l.tag,m,y,d;for(m=0,y=r.length;m<y;m+=1)d=r[m],l.replacer&&(d=l.replacer.call(r,String(m),d)),(mt(l,c+1,d,!0,!0,!1,!0)||typeof d>"u"&&mt(l,c+1,null,!0,!0,!1,!0))&&((!o||f!=="")&&(f+=Ao(l,c)),l.dump&&ea===l.dump.charCodeAt(0)?f+="-":f+="- ",f+=l.dump);l.tag=p,l.dump=f||"[]"}function oA(l,c,r){var o="",f=l.tag,p=Object.keys(r),m,y,d,g,x;for(m=0,y=p.length;m<y;m+=1)x="",o!==""&&(x+=", "),l.condenseFlow&&(x+='"'),d=p[m],g=r[d],l.replacer&&(g=l.replacer.call(r,d,g)),mt(l,c,d,!1,!1)&&(l.dump.length>1024&&(x+="? "),x+=l.dump+(l.condenseFlow?'"':"")+":"+(l.condenseFlow?"":" "),mt(l,c,g,!1,!1)&&(x+=l.dump,o+=x));l.tag=f,l.dump="{"+o+"}"}function fA(l,c,r,o){var f="",p=l.tag,m=Object.keys(r),y,d,g,x,_,O;if(l.sortKeys===!0)m.sort();else if(typeof l.sortKeys=="function")m.sort(l.sortKeys);else if(l.sortKeys)throw new tn("sortKeys must be a boolean or a function");for(y=0,d=m.length;y<d;y+=1)O="",(!o||f!=="")&&(O+=Ao(l,c)),g=m[y],x=r[g],l.replacer&&(x=l.replacer.call(r,g,x)),mt(l,c+1,g,!0,!0,!0)&&(_=l.tag!==null&&l.tag!=="?"||l.dump&&l.dump.length>1024,_&&(l.dump&&ea===l.dump.charCodeAt(0)?O+="?":O+="? "),O+=l.dump,_&&(O+=Ao(l,c)),mt(l,c+1,x,!0,_)&&(l.dump&&ea===l.dump.charCodeAt(0)?O+=":":O+=": ",O+=l.dump,f+=O));l.tag=p,l.dump=f||"{}"}function gh(l,c,r){var o,f,p,m,y,d;for(f=r?l.explicitTypes:l.implicitTypes,p=0,m=f.length;p<m;p+=1)if(y=f[p],(y.instanceOf||y.predicate)&&(!y.instanceOf||typeof c=="object"&&c instanceof y.instanceOf)&&(!y.predicate||y.predicate(c))){if(r?y.multi&&y.representName?l.tag=y.representName(c):l.tag=y.tag:l.tag="?",y.represent){if(d=l.styleMap[y.tag]||y.defaultStyle,Ad.call(y.represent)==="[object Function]")o=y.represent(c,d);else if(zd.call(y.represent,d))o=y.represent[d](c,d);else throw new tn("!<"+y.tag+'> tag resolver accepts not "'+d+'" style');l.dump=o}return!0}return!1}function mt(l,c,r,o,f,p,m){l.tag=null,l.dump=r,gh(l,r,!1)||gh(l,r,!0);var y=Ad.call(l.dump),d=o,g;o&&(o=l.flowLevel<0||l.flowLevel>c);var x=y==="[object Object]"||y==="[object Array]",_,O;if(x&&(_=l.duplicates.indexOf(r),O=_!==-1),(l.tag!==null&&l.tag!=="?"||O||l.indent!==2&&c>0)&&(f=!1),O&&l.usedDuplicates[_])l.dump="*ref_"+_;else{if(x&&O&&!l.usedDuplicates[_]&&(l.usedDuplicates[_]=!0),y==="[object Object]")o&&Object.keys(l.dump).length!==0?(fA(l,c,l.dump,f),O&&(l.dump="&ref_"+_+l.dump)):(oA(l,c,l.dump),O&&(l.dump="&ref_"+_+" "+l.dump));else if(y==="[object Array]")o&&l.dump.length!==0?(l.noArrayIndent&&!m&&c>0?yh(l,c-1,l.dump,f):yh(l,c,l.dump,f),O&&(l.dump="&ref_"+_+l.dump)):(rA(l,c,l.dump),O&&(l.dump="&ref_"+_+" "+l.dump));else if(y==="[object String]")l.tag!=="?"&&aA(l,l.dump,c,p,d);else{if(y==="[object Undefined]")return!1;if(l.skipInvalid)return!1;throw new tn("unacceptable kind of an object to dump "+y)}l.tag!==null&&l.tag!=="?"&&(g=encodeURI(l.tag[0]==="!"?l.tag.slice(1):l.tag).replace(/!/g,"%21"),l.tag[0]==="!"?g="!"+g:g.slice(0,18)==="tag:yaml.org,2002:"?g="!!"+g.slice(18):g="!<"+g+">",l.dump=g+" "+l.dump)}return!0}function sA(l,c){var r=[],o=[],f,p;for(xo(l,r,o),f=0,p=o.length;f<p;f+=1)c.duplicates.push(r[o[f]]);c.usedDuplicates=new Array(p)}function xo(l,c,r){var o,f,p;if(l!==null&&typeof l=="object")if(f=c.indexOf(l),f!==-1)r.indexOf(f)===-1&&r.push(f);else if(c.push(l),Array.isArray(l))for(f=0,p=l.length;f<p;f+=1)xo(l[f],c,r);else for(o=Object.keys(l),f=0,p=o.length;f<p;f+=1)xo(l[o[f]],c,r)}function pA(l,c){c=c||{};var r=new eA(c);r.noRefs||sA(l,r);var o=l;return r.replacer&&(o=r.replacer.call({"":o},"",o)),mt(r,0,o,!0,!0)?r.dump+`
`:""}var mA=pA,hA={dump:mA};function Do(l,c){return function(){throw new Error("Function yaml."+l+" is removed in js-yaml 4. Use yaml."+c+" instead, which is now safe by default.")}}var dA=$e,yA=Zh,gA=Fh,vA=ed,_A=nd,AA=Oo,zA=_d.load,xA=_d.loadAll,bA=hA.dump,SA=tn,wA={binary:ud,float:Ph,map:Jh,null:Wh,pairs:rd,set:od,timestamp:id,bool:$h,int:Ih,merge:ad,omap:cd,seq:Kh,str:Vh},EA=Do("safeLoad","load"),jA=Do("safeLoadAll","loadAll"),TA=Do("safeDump","dump"),Bt={Type:dA,Schema:yA,FAILSAFE_SCHEMA:gA,JSON_SCHEMA:vA,CORE_SCHEMA:_A,DEFAULT_SCHEMA:AA,load:zA,loadAll:xA,dump:bA,YAMLException:SA,types:wA,safeLoad:EA,safeLoadAll:jA,safeDump:TA};const CA=`title: Польские национальности
slug: polish-nationalities
description: Изучите названия национальностей на польском языке
questions:
  - question: "Венгр"
    type: multiple-choice
    options:
      - "Węgier"
      - "Węgorz"
      - "Węgr"
      - "Węgierczyk"
    correctAnswer: "Węgier"

  - question: "Венгерка"
    type: multiple-choice
    options:
      - "Węgierka"
      - "Węgrzynka"
      - "Węgry"
      - "Węgrka"
    correctAnswer: "Węgierka"

  - question: "Финн"
    type: multiple-choice
    options:
      - "Fin"
      - "Finn"
      - "Finlandczyk"
      - "Fińczyk"
    correctAnswer: "Fin"

  - question: "Финка"
    type: multiple-choice
    options:
      - "Finka"
      - "Finnka"
      - "Finlandka"
      - "Finianka"
    correctAnswer: "Finka"

  - question: "Турок"
    type: multiple-choice
    options:
      - "Turek"
      - "Turk"
      - "Turczyk"
      - "Tur"
    correctAnswer: "Turek"

  - question: "Турчанка"
    type: multiple-choice
    options:
      - "Turczynka"
      - "Turka"
      - "Tureczka"
      - "Turkini"
    correctAnswer: "Turczynka"

  - question: "Китаец"
    type: multiple-choice
    options:
      - "Chińczyk"
      - "Chiniec"
      - "Chinańczyk"
      - "Kinijczyk"
    correctAnswer: "Chińczyk"

  - question: "Китаянка"
    type: multiple-choice
    options:
      - "Chinka"
      - "Chińczykka"
      - "Chinini"
      - "Chinianka"
    correctAnswer: "Chinka"

  - question: "Таиландец"
    type: multiple-choice
    options:
      - "Taj"
      - "Tajlandczyk"
      - "Tajlandin"
      - "Tajczyk"
    correctAnswer: "Taj"

  - question: "Таиландка"
    type: multiple-choice
    options:
      - "Tajka"
      - "Tajlandka"
      - "Tajlandini"
      - "Taja"
    correctAnswer: "Tajka"

  - question: "Израильтянин (гражданин Израиля)"
    type: multiple-choice
    options:
      - "Izraelczyk"
      - "Izraelanin"
      - "Izraelita"
      - "Izraelczykowie"
    correctAnswer: "Izraelczyk"

  - question: "Израильтянка"
    type: multiple-choice
    options:
      - "Izraelka"
      - "Izraelczynka"
      - "Izraelina"
      - "Izraela"
    correctAnswer: "Izraelka"

  - question: "Еврей (национальность)"
    type: multiple-choice
    options:
      - "Żyd"
      - "Żydin"
      - "Żydczyk"
      - "Ebrej"
    correctAnswer: "Żyd"

  - question: "Еврейка"
    type: multiple-choice
    options:
      - "Żydówka"
      - "Żydka"
      - "Żydini"
      - "Żydówna"
    correctAnswer: "Żydówka"

  - question: "Голландец"
    type: multiple-choice
    options:
      - "Holender"
      - "Holandczyk"
      - "Hollandczyk"
      - "Holand"
    correctAnswer: "Holender"

  - question: "Голландка"
    type: multiple-choice
    options:
      - "Holenderka"
      - "Holandka"
      - "Holandini"
      - "Holandia"
    correctAnswer: "Holenderka"

  - question: "Украинец"
    type: multiple-choice
    options:
      - "Ukrainiec"
      - "Ukrainin"
      - "Ukraińczyk"
      - "Ukrainiak"
    correctAnswer: "Ukrainiec"

  - question: "Украинка"
    type: multiple-choice
    options:
      - "Ukrainka"
      - "Ukrainia"
      - "Ukrainczyni"
      - "Ukrainieczka"
    correctAnswer: "Ukrainka"

  - question: "Датчанин"
    type: multiple-choice
    options:
      - "Duńczyk"
      - "Daniańczyk"
      - "Danin"
      - "Duńczykowie"
    correctAnswer: "Duńczyk"

  - question: "Датчанка"
    type: multiple-choice
    options:
      - "Dunka"
      - "Dunianka"
      - "Duńczyca"
      - "Dania"
    correctAnswer: "Dunka"`,qA=`title: Множественное число польских национальностей
slug: polish-nationalities-plurals
description: Изучите формы множественного числа национальностей на польском языке (męskoosobowy vs niemęskoosobowy)
questions:
  - question: "Китайцы"
    type: multiple-choice
    options:
      - "Chińczycy"
      - "Chińczykowie"
      - "Chińcy"
      - "Chińczyki"
    correctAnswer: "Chińczycy"

  - question: "Китаянки"
    type: multiple-choice
    options:
      - "Chinki"
      - "Chińczycy"
      - "Chiny"
      - "Chińczyczki"
    correctAnswer: "Chinki"

  - question: "Итальянцы"
    type: multiple-choice
    options:
      - "Włosi"
      - "Włochowie"
      - "Włochy"
      - "Italianie"
    correctAnswer: "Włosi"

  - question: "Итальянки"
    type: multiple-choice
    options:
      - "Włoszki"
      - "Włoski"
      - "Włochy"
      - "Italijki"
    correctAnswer: "Włoszki"

  - question: "Американцы"
    type: multiple-choice
    options:
      - "Amerykanie"
      - "Amerykanowie"
      - "Amerykany"
      - "Amerykancy"
    correctAnswer: "Amerykanie"

  - question: "Американки"
    type: multiple-choice
    options:
      - "Amerykanki"
      - "Ameryczki"
      - "Amerykanowie"
      - "Ameryczynki"
    correctAnswer: "Amerykanki"

  - question: "Немцы"
    type: multiple-choice
    options:
      - "Niemcy"
      - "Niemiecowie"
      - "Niemci"
      - "Niemczycy"
    correctAnswer: "Niemcy"

  - question: "Немки"
    type: multiple-choice
    options:
      - "Niemki"
      - "Niemkinia"
      - "Germanki"
      - "Niemeczki"
    correctAnswer: "Niemki"

  - question: "Англичане"
    type: multiple-choice
    options:
      - "Anglicy"
      - "Anglikowie"
      - "Angliki"
      - "Angliny"
    correctAnswer: "Anglicy"

  - question: "Англичанки"
    type: multiple-choice
    options:
      - "Angielki"
      - "Angliczki"
      - "Anglijki"
      - "Anglinki"
    correctAnswer: "Angielki"

  - question: "Финны"
    type: multiple-choice
    options:
      - "Finowie"
      - "Fini"
      - "Finy"
      - "Fińczycy"
    correctAnswer: "Finowie"

  - question: "Финки"
    type: multiple-choice
    options:
      - "Finki"
      - "Finowie"
      - "Finijki"
      - "Finlandia"
    correctAnswer: "Finki"

  - question: "Евреи"
    type: multiple-choice
    options:
      - "Żydzi"
      - "Żydowie"
      - "Żydy"
      - "Żydzie"
    correctAnswer: "Żydzi"

  - question: "Еврейки"
    type: multiple-choice
    options:
      - "Żydówki"
      - "Żydowki"
      - "Żydki"
      - "Żydzie"
    correctAnswer: "Żydówki"

  - question: "Турки"
    type: multiple-choice
    options:
      - "Turcy"
      - "Turkowie"
      - "Turki"
      - "Turczanie"
    correctAnswer: "Turcy"

  - question: "Турчанки"
    type: multiple-choice
    options:
      - "Turczynki"
      - "Tureczki"
      - "Turki"
      - "Turczanki"
    correctAnswer: "Turczynki"

  - question: "Венгры"
    type: multiple-choice
    options:
      - "Węgrzy"
      - "Węgrowie"
      - "Węgierowie"
      - "Węgry"
    correctAnswer: "Węgrzy"

  - question: "Венгерки"
    type: multiple-choice
    options:
      - "Węgierki"
      - "Węgrzanki"
      - "Węgryjki"
      - "Węgerki"
    correctAnswer: "Węgierki"
`,OA=`title: Склонения слова "przyjaciele"
slug: polish-przyjaciele-cases
description: Изучите склонения слова "przyjaciele" в польском языке
maxQuestions: 10
questions:
  # Narzędnik
  - question: "Często podróżuję z moimi ________."
    type: multiple-choice
    options:
      - "przyjaciółmi"
      - "przyjaciołami"
      - "przyjacielami"
      - "przyjaciółami"
    correctAnswer: "przyjaciółmi"

  # Dopełniacz
  - question: "Nie widzę tutaj moich ________."
    type: multiple-choice
    options:
      - "przyjaciół"
      - "przyjacioł"
      - "przyjacieli"
      - "przyjaciółów"
    correctAnswer: "przyjaciół"

  # Mianownik
  - question: "To są moi najlepsi ________."
    type: multiple-choice
    options:
      - "przyjaciele"
      - "przyjacieli"
      - "przyjacielowie"
      - "przyjacielie"
    correctAnswer: "przyjaciele"

  # Celownik
  - question: "Zawsze pomagam moim ________."
    type: multiple-choice
    options:
      - "przyjaciołom"
      - "przyjaciółom"
      - "przyjacielom"
      - "przyjaciołami"
    correctAnswer: "przyjaciołom"

  # Miejscownik
  - question: "Często opowiadam mamie o moich ________."
    type: multiple-choice
    options:
      - "przyjaciołach"
      - "przyjaciółach"
      - "przyjacielach"
      - "przyjaciołech"
    correctAnswer: "przyjaciołach"

  # Biernik
  - question: "Zaprosiłem na urodziny wszystkich moich ________."
    type: multiple-choice
    options:
      - "przyjaciół"
      - "przyjaciele"
      - "przyjaciółów"
      - "przyjacioły"
    correctAnswer: "przyjaciół"

  # Narzędnik
  - question: "Lubię spędzać czas między ________."
    type: multiple-choice
    options:
      - "przyjaciółmi"
      - "przyjacielami"
      - "przyjaciółamy"
      - "przyjaciołmi"
    correctAnswer: "przyjaciółmi"

  # Dopełniacz
  - question: "Mamy wspólnych ________."
    type: multiple-choice
    options:
      - "przyjaciół"
      - "przyjacielów"
      - "przyjacioły"
      - "przyjacieli"
    correctAnswer: "przyjaciół"

  # Celownik
  - question: "Opowiadam o tym moim ________."
    type: multiple-choice
    options:
      - "przyjaciołom"
      - "przyjaciółom"
      - "przyjacielom"
      - "przyjaciółami"
    correctAnswer: "przyjaciołom"

  # Biernik
  - question: "Spotkałem wczoraj wszystkich ________."
    type: multiple-choice
    options:
      - "przyjaciół"
      - "przyjaciele"
      - "przyjaciółów"
      - "przyjacielów"
    correctAnswer: "przyjaciół"

  # Miejscownik
  - question: "Rozmawialiśmy o naszych ________."
    type: multiple-choice
    options:
      - "przyjaciołach"
      - "przyjaciółach"
      - "przyjacielach"
      - "przyjaciołech"
    correctAnswer: "przyjaciołach"

  # Narzędnik
  - question: "Między ________ zawsze panuje zgoda."
    type: multiple-choice
    options:
      - "przyjaciółmi"
      - "przyjacielami"
      - "przyjaciółamy"
      - "przyjaciołmi"
    correctAnswer: "przyjaciółmi"

  # Mianownik
  - question: "Moi ________ mieszkają w Krakowie."
    type: multiple-choice
    options:
      - "przyjaciele"
      - "przyjacieli"
      - "przyjacielowie"
      - "przyjacielie"
    correctAnswer: "przyjaciele"

  # Dopełniacz
  - question: "Bez moich ________ byłoby mi smutno."
    type: multiple-choice
    options:
      - "przyjaciół"
      - "przyjacielów"
      - "przyjacioły"
      - "przyjacieli"
    correctAnswer: "przyjaciół"

  # Celownik
  - question: "Dziękuję moim ________ za pomoc."
    type: multiple-choice
    options:
      - "przyjaciołom"
      - "przyjaciółom"
      - "przyjacielom"
      - "przyjaciołami"
    correctAnswer: "przyjaciołom"

  # Biernik
  - question: "Zobaczyłem na ulicy moich ________."
    type: multiple-choice
    options:
      - "przyjaciół"
      - "przyjaciele"
      - "przyjaciółów"
      - "przyjacioły"
    correctAnswer: "przyjaciół"

  # Narzędnik
  - question: "Z moimi ________ nigdy się nie nudzę."
    type: multiple-choice
    options:
      - "przyjaciółmi"
      - "przyjacielami"
      - "przyjaciołami"
      - "przyjaciołmi"
    correctAnswer: "przyjaciółmi"

  # Miejscownik
  - question: "Piszę o ________ w pamiętniku."
    type: multiple-choice
    options:
      - "przyjaciołach"
      - "przyjaciółach"
      - "przyjacielach"
      - "przyjaciołech"
    correctAnswer: "przyjaciołach"

  # Wołacz
  - question: "________, chodźcie tutaj!"
    type: multiple-choice
    options:
      - "Przyjaciele"
      - "Przyjaciół"
      - "Przyjaciołowie"
      - "Przyjacielowie"
    correctAnswer: "Przyjaciele"

  # Dopełniacz
  - question: "Nie mam tutaj żadnych ________."
    type: multiple-choice
    options:
      - "przyjaciół"
      - "przyjacieli"
      - "przyjacielów"
      - "przyjaciółów"
    correctAnswer: "przyjaciół"

  # Miejscownik
  - question: "Mówię często o swoich ________."
    type: multiple-choice
    options:
      - "przyjaciołach"
      - "przyjaciółach"
      - "przyjacielach"
      - "przyjaciołech"
    correctAnswer: "przyjaciołach"

  # Narzędnik
  - question: "Idę do kina z ________."
    type: multiple-choice
    options:
      - "przyjaciółmi"
      - "przyjacielami"
      - "przyjaciołami"
      - "przyjaciołmi"
    correctAnswer: "przyjaciółmi"

  # Dopełniacz
  - question: "Nie znam tych ________."
    type: multiple-choice
    options:
      - "przyjaciół"
      - "przyjacieli"
      - "przyjacielów"
      - "przyjaciółów"
    correctAnswer: "przyjaciół"

  # Biernik
  - question: "Zaprosiłam moich ________ na kolację."
    type: multiple-choice
    options:
      - "przyjaciół"
      - "przyjaciele"
      - "przyjaciółów"
      - "przyjacioły"
    correctAnswer: "przyjaciół"

  # Celownik
  - question: "Wysyłam wiadomość moim ________."
    type: multiple-choice
    options:
      - "przyjaciołom"
      - "przyjaciółom"
      - "przyjacielom"
      - "przyjaciołami"
    correctAnswer: "przyjaciołom"

  # Mianownik
  - question: "Moi ________ przyjechali z Gdańska."
    type: multiple-choice
    options:
      - "przyjaciele"
      - "przyjacieli"
      - "przyjacielowie"
      - "przyjacielie"
    correctAnswer: "przyjaciele"

  # Dopełniacz
  - question: "Brakuje mi moich ________."
    type: multiple-choice
    options:
      - "przyjaciół"
      - "przyjacieli"
      - "przyjacielów"
      - "przyjaciółów"
    correctAnswer: "przyjaciół"

  # Narzędnik
  - question: "Podróżuję z najlepszymi ________."
    type: multiple-choice
    options:
      - "przyjaciółmi"
      - "przyjacielami"
      - "przyjaciółamy"
      - "przyjaciołmi"
    correctAnswer: "przyjaciółmi"

  # Miejscownik
  - question: "Czytałam książkę o ________."
    type: multiple-choice
    options:
      - "przyjaciołach"
      - "przyjaciółach"
      - "przyjacielach"
      - "przyjaciołech"
    correctAnswer: "przyjaciołach"

  # Biernik
  - question: "Widziałem w parku swoich ________."
    type: multiple-choice
    options:
      - "przyjaciół"
      - "przyjaciele"
      - "przyjaciółów"
      - "przyjacioły"
    correctAnswer: "przyjaciół"

  # Celownik
  - question: "Pożyczam książki moim ________."
    type: multiple-choice
    options:
      - "przyjaciołom"
      - "przyjaciółom"
      - "przyjacielom"
      - "przyjaciołami"
    correctAnswer: "przyjaciołom"

  # Mianownik
  - question: "Moi ________ są bardzo mili."
    type: multiple-choice
    options:
      - "przyjaciele"
      - "przyjacieli"
      - "przyjacielowie"
      - "przyjacielie"
    correctAnswer: "przyjaciele"

  # Dopełniacz
  - question: "Szukam nowych ________."
    type: multiple-choice
    options:
      - "przyjaciół"
      - "przyjacieli"
      - "przyjacielów"
      - "przyjaciółów"
    correctAnswer: "przyjaciół"

  # Narzędnik
  - question: "Z najlepszymi ________ można wszystko."
    type: multiple-choice
    options:
      - "przyjaciółmi"
      - "przyjacielami"
      - "przyjaciołami"
      - "przyjaciołmi"
    correctAnswer: "przyjaciółmi"

  # Miejscownik
  - question: "Myślę o ________ każdego dnia."
    type: multiple-choice
    options:
      - "przyjaciołach"
      - "przyjaciółach"
      - "przyjacielach"
      - "przyjaciołech"
    correctAnswer: "przyjaciołach"

  # Biernik
  - question: "Zapamiętam wszystkich ________ z dzieciństwa."
    type: multiple-choice
    options:
      - "przyjaciół"
      - "przyjaciele"
      - "przyjaciółów"
      - "przyjacioły"
    correctAnswer: "przyjaciół"

  # Celownik
  - question: "Pomagam moim ________ w nauce."
    type: multiple-choice
    options:
      - "przyjaciołom"
      - "przyjaciółom"
      - "przyjacielom"
      - "przyjaciołami"
    correctAnswer: "przyjaciołom"

  # Narzędnik
  - question: "Jestem dumny z moich ________."
    type: multiple-choice
    options:
      - "przyjaciół"
      - "przyjacielami"
      - "przyjaciołami"
      - "przyjaciołmi"
    correctAnswer: "przyjaciół"

  # Dopełniacz
  - question: "Nie ma tu żadnych ________."
    type: multiple-choice
    options:
      - "przyjaciół"
      - "przyjacieli"
      - "przyjacielów"
      - "przyjaciółów"
    correctAnswer: "przyjaciół"

  # Miejscownik
  - question: "Marzę o wiernych ________."
    type: multiple-choice
    options:
      - "przyjaciołach"
      - "przyjaciółach"
      - "przyjacielach"
      - "przyjaciołech"
    correctAnswer: "przyjaciołach"
`,NA=`title: Семья
slug: polish-family
description: Семейная лексика на польском языке
maxQuestions: 20
questions:
  - question: "тесть"
    type: text-input
    correctAnswer: "teść"

  - question: "свёкор"
    type: text-input
    correctAnswer: "teść"

  - question: "тёща"
    type: text-input
    correctAnswer: "teściowa"

  - question: "свекровь"
    type: text-input
    correctAnswer: "teściowa"

  - question: "родители жены или мужа"
    type: text-input
    correctAnswer: "teściowie"

  - question: "отец"
    type: text-input
    correctAnswer: "ojciec"

  - question: "папа"
    type: text-input
    correctAnswer: "tata"

  - question: "мать"
    type: text-input
    correctAnswer: "matka"

  - question: "мама"
    type: text-input
    correctAnswer: "mama"

  - question: "сын"
    type: text-input
    correctAnswer: "syn"

  - question: "дочь"
    type: text-input
    correctAnswer: "córka"

  - question: "дети"
    type: text-input
    correctAnswer: "dzieci"

  - question: "брат"
    type: text-input
    correctAnswer: "brat"

  - question: "сестра"
    type: text-input
    correctAnswer: "siostra"

  - question: "братья и сёстры"
    type: text-input
    correctAnswer: "rodzeństwo"

  - question: "муж"
    type: text-input
    correctAnswer: "mąż"

  - question: "жена"
    type: text-input
    correctAnswer: "żona"

  - question: "дедушка"
    type: text-input
    correctAnswer: "dziadek"

  - question: "бабушка"
    type: text-input
    correctAnswer: "babcia"

  - question: "дедушка и бабушка"
    type: text-input
    correctAnswer: "dziadkowie"

  - question: "внук"
    type: text-input
    correctAnswer: "wnuk"

  - question: "внучка"
    type: text-input
    correctAnswer: "wnuczka"

  - question: "внуки"
    type: text-input
    correctAnswer: "wnuki"

  - question: "дядя"
    type: text-input
    correctAnswer: "wujek"

  - question: "тётя"
    type: text-input
    correctAnswer: "ciocia"

  - question: "двоюродный брат"
    type: text-input
    correctAnswer: "kuzyn"

  - question: "двоюродная сестра"
    type: text-input
    correctAnswer: "kuzynka"

  - question: "шурин"
    type: text-input
    correctAnswer: "szwagier"

  - question: "деверь"
    type: text-input
    correctAnswer: "szwagier"

  - question: "золовка"
    type: text-input
    correctAnswer: "szwagierka"

  - question: "зять (муж дочери)"
    type: text-input
    correctAnswer: "zięć"

  - question: "сноха (жена сына)"
    type: text-input
    correctAnswer: "synowa"

  - question: "родственники"
    type: text-input
    correctAnswer: "krewni"

  - question: "семья"
    type: text-input
    correctAnswer: "rodzina"

  - question: "близкие"
    type: text-input
    correctAnswer: "bliscy"

  - question: "родство"
    type: text-input
    correctAnswer: "pokrewieństwo"

  - question: "прадедушка"
    type: text-input
    correctAnswer: "pradziadek"

  - question: "прабабушка"
    type: text-input
    correctAnswer: "prababcia"

  - question: "прародители"
    type: text-input
    correctAnswer: "pradziadkowie"

  - question: "пасынок"
    type: text-input
    correctAnswer: "pasierb"

  - question: "падчерица"
    type: text-input
    correctAnswer: "pasierbica"

  - question: "отчим"
    type: text-input
    correctAnswer: "ojczym"

  - question: "мачеха"
    type: text-input
    correctAnswer: "macocha"

  - question: "крёстный сын"
    type: text-input
    correctAnswer: "chrześniak"

  - question: "крёстная дочь"
    type: text-input
    correctAnswer: "chrześnica"

  - question: "жених"
    type: text-input
    correctAnswer: "narzeczony"

  - question: "невеста"
    type: text-input
    correctAnswer: "narzeczona"

  - question: "помолвка"
    type: text-input
    correctAnswer: "zaręczyny"

  - question: "вдова"
    type: text-input
    correctAnswer: "wdowa"

  - question: "вдовец"
    type: text-input
    correctAnswer: "wdowiec"

  - question: "родственник"
    type: text-input
    correctAnswer: "krewny"

  - question: "родственница"
    type: text-input
    correctAnswer: "krewna"

  - question: "родственники"
    type: text-input
    correctAnswer: "krewni"
`,RA=`title: Odczasownikowe rzeczowniki
slug: polish-odczasownikowe-rzeczowniki
description: Rzeczowniki odczasownikowe w języku polskim
maxQuestions: 20
questions:
  - question: "analizować"
    type: text-input
    correctAnswer: "analizowanie"

  - question: "badać"
    type: text-input
    correctAnswer: "badanie"

  - question: "bić"
    type: text-input
    correctAnswer: "bicie"

  - question: "biegać"
    type: text-input
    correctAnswer: "bieganie"

  - question: "brać"
    type: text-input
    correctAnswer: "branie"

  - question: "budować"
    type: text-input
    correctAnswer: "budowanie"

  - question: "być"
    type: text-input
    correctAnswer: "bycie"

  - question: "cofnąć"
    type: text-input
    correctAnswer: "cofnięcie"

  - question: "ćwiczyć"
    type: text-input
    correctAnswer: "ćwiczenie"

  - question: "czyścić"
    type: text-input
    correctAnswer: "czyszczenie"

  - question: "czytać"
    type: text-input
    correctAnswer: "czytanie"

  - question: "dać"
    type: text-input
    correctAnswer: "danie"

  - question: "decydować"
    type: text-input
    correctAnswer: "decydowanie"

  - question: "gotować"
    type: text-input
    correctAnswer: "gotowanie"

  - question: "jeść"
    type: text-input
    correctAnswer: "jedzenie"

  - question: "jeździć"
    type: text-input
    correctAnswer: "jeżdżenie"

  - question: "koncentrować się"
    type: text-input
    correctAnswer: "koncentrowanie się"

  - question: "kończyć"
    type: text-input
    correctAnswer: "kończenie"

  - question: "kontrolować"
    type: text-input
    correctAnswer: "kontrolowanie"

  - question: "kryć"
    type: text-input
    correctAnswer: "krycie"

  - question: "kupować"
    type: text-input
    correctAnswer: "kupowanie"

  - question: "lać"
    type: text-input
    correctAnswer: "lanie"

  - question: "łączyć"
    type: text-input
    correctAnswer: "łączenie"

  - question: "leczyć"
    type: text-input
    correctAnswer: "leczenie"

  - question: "mówić"
    type: text-input
    correctAnswer: "mówienie"

  - question: "myć"
    type: text-input
    correctAnswer: "mycie"

  - question: "myśleć"
    type: text-input
    correctAnswer: "myślenie"

  - question: "negocjować"
    type: text-input
    correctAnswer: "negocjowanie"

  - question: "niszczyć"
    type: text-input
    correctAnswer: "niszczenie"

  - question: "odkrywać"
    type: text-input
    correctAnswer: "odkrywanie"

  - question: "odpoczywać"
    type: text-input
    correctAnswer: "odpoczywanie"

  - question: "odrzucić"
    type: text-input
    correctAnswer: "odrzucenie"

  - question: "oglądać"
    type: text-input
    correctAnswer: "oglądanie"

  - question: "organizować"
    type: text-input
    correctAnswer: "organizowanie"

  - question: "osiągać"
    type: text-input
    correctAnswer: "osiąganie"

  - question: "otworzyć"
    type: text-input
    correctAnswer: "otworzenie"

  - question: "palić"
    type: text-input
    correctAnswer: "palenie"

  - question: "pić"
    type: text-input
    correctAnswer: "picie"

  - question: "pisać"
    type: text-input
    correctAnswer: "pisanie"

  - question: "planować"
    type: text-input
    correctAnswer: "planowanie"

  - question: "podróżować"
    type: text-input
    correctAnswer: "podróżowanie"

  - question: "połączyć"
    type: text-input
    correctAnswer: "połączenie"

  - question: "poprawiać"
    type: text-input
    correctAnswer: "poprawianie"

  - question: "porównywać"
    type: text-input
    correctAnswer: "porównywanie"

  - question: "pracować"
    type: text-input
    correctAnswer: "pracowanie"

  - question: "prowadzić"
    type: text-input
    correctAnswer: "prowadzenie"

  - question: "przeżyć"
    type: text-input
    correctAnswer: "przeżycie"

  - question: "przygotowywać się"
    type: text-input
    correctAnswer: "przygotowywanie się"

  - question: "przyjąć"
    type: text-input
    correctAnswer: "przyjęcie"

  - question: "robić"
    type: text-input
    correctAnswer: "robienie"

  - question: "rozwiązywać"
    type: text-input
    correctAnswer: "rozwiązywanie"

  - question: "rozwijać"
    type: text-input
    correctAnswer: "rozwijanie"

  - question: "skupiać się"
    type: text-input
    correctAnswer: "skupianie się"

  - question: "słuchać"
    type: text-input
    correctAnswer: "słuchanie"

  - question: "spełnić"
    type: text-input
    correctAnswer: "spełnienie"

  - question: "spotkać"
    type: text-input
    correctAnswer: "spotkanie"

  - question: "spotykać się"
    type: text-input
    correctAnswer: "spotykanie się"

  - question: "sprzątać"
    type: text-input
    correctAnswer: "sprzątanie"

  - question: "sprzedawać"
    type: text-input
    correctAnswer: "sprzedawanie"

  - question: "szyć"
    type: text-input
    correctAnswer: "szycie"

  - question: "tłumaczyć"
    type: text-input
    correctAnswer: "tłumaczenie"

  - question: "tworzyć"
    type: text-input
    correctAnswer: "tworzenie"

  - question: "uczestniczyć"
    type: text-input
    correctAnswer: "uczestniczenie"

  - question: "uczyć się"
    type: text-input
    correctAnswer: "uczenie się"

  - question: "użyć"
    type: text-input
    correctAnswer: "użycie"

  - question: "wybierać"
    type: text-input
    correctAnswer: "wybieranie"

  - question: "zabić"
    type: text-input
    correctAnswer: "zabicie"

  - question: "zaczynać"
    type: text-input
    correctAnswer: "zaczynanie"

  - question: "zamknąć"
    type: text-input
    correctAnswer: "zamknięcie"

  - question: "zapewnić"
    type: text-input
    correctAnswer: "zapewnienie"

  - question: "zapraszać"
    type: text-input
    correctAnswer: "zapraszanie"

  - question: "zarządzać"
    type: text-input
    correctAnswer: "zarządzanie"

  - question: "zastanawiać się"
    type: text-input
    correctAnswer: "zastanawianie się"

  - question: "znać"
    type: text-input
    correctAnswer: "znanie"

  - question: "zniszczyć"
    type: text-input
    correctAnswer: "zniszczenie"

  - question: "żyć"
    type: text-input
    correctAnswer: "życie"
`,MA=`title: Польские местоимения
slug: polish-zaimki
description: Местоимения в разных падежах польского языка
maxQuestions: 20
questions:
  # DOPEŁNIACZ (kogo? czego?)
  - question: "Nie ma ____ (ja) w domu."
    type: multiple-choice
    options: ["mnie", "mi", "mną", "mię"]
    correctAnswer: "mnie"

  - question: "Beze ____ (ja) to się nie uda."
    type: multiple-choice
    options: ["mnie", "mi", "mną", "mię"]
    correctAnswer: "mnie"

  - question: "Nie ma ____ (ty) dziś w pracy."
    type: multiple-choice
    options: ["ciebie", "ci", "tobą", "tobie"]
    correctAnswer: "ciebie"

  - question: "Nie widzę ____ (on)."
    type: multiple-choice
    options: ["go", "mu", "niego", "jego"]
    correctAnswer: "go"

  - question: "Nie było ____ (ona) na spotkaniu."
    type: multiple-choice
    options: ["jej", "ją", "nią", "niej"]
    correctAnswer: "jej"

  - question: "Nie ma ____ (ona) w biurze."
    type: multiple-choice
    options: ["jej", "ją", "nią", "niej"]
    correctAnswer: "jej"

  - question: "Nie znaleźli ____ (ono)."
    type: multiple-choice
    options: ["go", "je", "mu", "nim"]
    correctAnswer: "go"

  - question: "Nie było ____ (my) na liście."
    type: multiple-choice
    options: ["nas", "nam", "nami", "was"]
    correctAnswer: "nas"

  - question: "Bez ____ (my) projekt nie ruszy."
    type: multiple-choice
    options: ["nas", "nam", "nami", "was"]
    correctAnswer: "nas"

  - question: "Nie ma ____ (wy) w systemie."
    type: multiple-choice
    options: ["was", "wam", "wami", "nas"]
    correctAnswer: "was"

  - question: "Nie znam ____ (oni)."
    type: multiple-choice
    options: ["ich", "im", "nimi", "nich"]
    correctAnswer: "ich"

  - question: "Nie było ____ (oni) w szkole."
    type: multiple-choice
    options: ["ich", "im", "nimi", "nich"]
    correctAnswer: "ich"

  - question: "Nie znam ____ (one)."
    type: multiple-choice
    options: ["ich", "je", "im", "nich"]
    correctAnswer: "ich"

  # CELOWNIK (komu? czemu?)
  - question: "Pomóż ____ (ja), proszę."
    type: multiple-choice
    options: ["mi", "mnie", "mną", "mię"]
    correctAnswer: "mi"

  - question: "To bardzo pomoże ____ (ja)."
    type: multiple-choice
    options: ["mi", "mnie", "mną", "mię"]
    correctAnswer: "mi"

  - question: "Powiem ____ (ty) prawdę."
    type: multiple-choice
    options: ["ci", "cię", "ciebie", "tobą"]
    correctAnswer: "ci"

  - question: "Przyglądam się ____ (on)."
    type: multiple-choice
    options: ["mu", "go", "nim", "jego"]
    correctAnswer: "mu"

  - question: "Daj ____ (on) chwilę."
    type: multiple-choice
    options: ["mu", "go", "nim", "niego"]
    correctAnswer: "mu"

  - question: "Pomagam ____ (ona)."
    type: multiple-choice
    options: ["jej", "ją", "nią", "niej"]
    correctAnswer: "jej"

  - question: "Zaufaj ____ (ona)."
    type: multiple-choice
    options: ["jej", "ją", "nią", "niej"]
    correctAnswer: "jej"

  - question: "Przyglądam się ____ (on) uważnie."
    type: multiple-choice
    options: ["mu", "go", "nim", "jego"]
    correctAnswer: "mu"

  - question: "Pomóż ____ (my)."
    type: multiple-choice
    options: ["nam", "nas", "nami", "wam"]
    correctAnswer: "nam"

  - question: "To bardzo pomoże ____ (my)."
    type: multiple-choice
    options: ["nam", "nas", "nami", "wam"]
    correctAnswer: "nam"

  - question: "Dziękujemy ____ (wy)."
    type: multiple-choice
    options: ["wam", "was", "wami", "nam"]
    correctAnswer: "wam"

  - question: "Dam ____ (wy) znać."
    type: multiple-choice
    options: ["wam", "was", "wami", "nam"]
    correctAnswer: "wam"

  - question: "Pomagam ____ (oni)."
    type: multiple-choice
    options: ["im", "ich", "nimi", "nich"]
    correctAnswer: "im"

  - question: "Przyglądam się ____ (one)."
    type: multiple-choice
    options: ["im", "je", "nich", "nimi"]
    correctAnswer: "im"

  # BIERNIK (kogo? co?)
  - question: "Czy widzisz ____ (ja)?"
    type: multiple-choice
    options: ["mnie", "mi", "mną", "mię"]
    correctAnswer: "mnie"

  - question: "Czy spotkałeś ____ (ja) wczoraj?"
    type: multiple-choice
    options: ["mnie", "mi", "mną", "mię"]
    correctAnswer: "mnie"

  - question: "Słyszę ____ (ty)."
    type: multiple-choice
    options: ["cię", "ci", "ciebie", "tobą"]
    correctAnswer: "cię"

  - question: "Znalazłem ____ (ty) w tłumie."
    type: multiple-choice
    options: ["cię", "ci", "tobie", "tobą"]
    correctAnswer: "cię"

  - question: "Widzę ____ (on)."
    type: multiple-choice
    options: ["go", "mu", "nim", "jego"]
    correctAnswer: "go"

  - question: "Znam ____ (on) dobrze."
    type: multiple-choice
    options: ["go", "mu", "nim", "niego"]
    correctAnswer: "go"

  - question: "Czekam na ____ (on)."
    type: multiple-choice
    options: ["niego", "go", "nim", "mu"]
    correctAnswer: "niego"

  - question: "Widzę ____ (ona)."
    type: multiple-choice
    options: ["ją", "jej", "nią", "niej"]
    correctAnswer: "ją"

  - question: "Czekam na ____ (ona)."
    type: multiple-choice
    options: ["nią", "ją", "jej", "niej"]
    correctAnswer: "nią"

  - question: "Znalazłem ____ (ono)."
    type: multiple-choice
    options: ["je", "go", "mu", "nim"]
    correctAnswer: "je"

  - question: "Widzę ____ (my)."
    type: multiple-choice
    options: ["nas", "nam", "nami", "was"]
    correctAnswer: "nas"

  - question: "Zaprosili ____ (my)."
    type: multiple-choice
    options: ["nas", "nam", "nami", "was"]
    correctAnswer: "nas"

  - question: "Widzę ____ (wy)."
    type: multiple-choice
    options: ["was", "wam", "wami", "nas"]
    correctAnswer: "was"

  - question: "Zapraszam ____ (wy)."
    type: multiple-choice
    options: ["was", "wam", "wami", "nas"]
    correctAnswer: "was"

  - question: "Widzę ____ (oni)."
    type: multiple-choice
    options: ["ich", "im", "nimi", "nich"]
    correctAnswer: "ich"

  - question: "Spotkałem ____ (oni) w mieście."
    type: multiple-choice
    options: ["ich", "im", "nimi", "nich"]
    correctAnswer: "ich"

  - question: "Znalazłem ____ (one)."
    type: multiple-choice
    options: ["je", "ich", "im", "nich"]
    correctAnswer: "je"

  # NARZĘDNIK (z kim? z czym?)
  - question: "Idziesz ze ____ (ja)?"
    type: multiple-choice
    options: ["mną", "mnie", "mi", "mię"]
    correctAnswer: "mną"

  - question: "Idę z ____ (ty)."
    type: multiple-choice
    options: ["tobą", "tobie", "ciebie", "ci"]
    correctAnswer: "tobą"

  - question: "Rozmawiam z ____ (ty) często."
    type: multiple-choice
    options: ["tobą", "tobie", "cię", "ciebie"]
    correctAnswer: "tobą"

  - question: "Pracuję z ____ (on)."
    type: multiple-choice
    options: ["nim", "niego", "mu", "go"]
    correctAnswer: "nim"

  - question: "Idę z ____ (on) do kina."
    type: multiple-choice
    options: ["nim", "niego", "mu", "jego"]
    correctAnswer: "nim"

  - question: "Rozmawiam z ____ (ona)."
    type: multiple-choice
    options: ["nią", "niej", "jej", "ją"]
    correctAnswer: "nią"

  - question: "Idę z ____ (ona) na spacer."
    type: multiple-choice
    options: ["nią", "niej", "jej", "ją"]
    correctAnswer: "nią"

  - question: "Rozmawiam z ____ (wy)."
    type: multiple-choice
    options: ["wami", "was", "wam", "nami"]
    correctAnswer: "wami"

  - question: "Spotykam się z ____ (oni)."
    type: multiple-choice
    options: ["nimi", "nich", "ich", "im"]
    correctAnswer: "nimi"

  - question: "Pracuję z ____ (one)."
    type: multiple-choice
    options: ["nimi", "nich", "je", "im"]
    correctAnswer: "nimi"

  # MIEJSCOWNIK (o kim? o czym?)
  - question: "Myślę o ____ (ja)."
    type: multiple-choice
    options: ["mnie", "mi", "mną", "mię"]
    correctAnswer: "mnie"

  - question: "Mówimy o ____ (ja) często."
    type: multiple-choice
    options: ["mnie", "mi", "mną", "mię"]
    correctAnswer: "mnie"

  - question: "Rozmawiamy o ____ (ty)."
    type: multiple-choice
    options: ["tobie", "tobą", "ciebie", "ci"]
    correctAnswer: "tobie"

  - question: "Myślę o ____ (ty) codziennie."
    type: multiple-choice
    options: ["tobie", "tobą", "cię", "ciebie"]
    correctAnswer: "tobie"

  - question: "Myślę o ____ (on)."
    type: multiple-choice
    options: ["nim", "niego", "mu", "go"]
    correctAnswer: "nim"

  - question: "Rozmawiamy o ____ (on) w pracy."
    type: multiple-choice
    options: ["nim", "niego", "jego", "mu"]
    correctAnswer: "nim"

  - question: "Mówimy o ____ (ona)."
    type: multiple-choice
    options: ["niej", "nią", "jej", "ją"]
    correctAnswer: "niej"

  - question: "Myślę o ____ (ona) często."
    type: multiple-choice
    options: ["niej", "nią", "jej", "ją"]
    correctAnswer: "niej"

  - question: "Rozmawiamy o ____ (my)."
    type: multiple-choice
    options: ["nas", "nam", "nami", "was"]
    correctAnswer: "nas"

  - question: "Mówimy o ____ (wy)."
    type: multiple-choice
    options: ["was", "wam", "wami", "nas"]
    correctAnswer: "was"

  - question: "Myślę o ____ (oni)."
    type: multiple-choice
    options: ["nich", "nimi", "ich", "im"]
    correctAnswer: "nich"

  - question: "Rozmawiamy o ____ (one)."
    type: multiple-choice
    options: ["nich", "nimi", "je", "im"]
    correctAnswer: "nich"

  # Krótkie vs długie formy
  - question: "Nie widzę ____ (on) dzisiaj."
    type: multiple-choice
    options: ["go", "niego", "mu", "nim"]
    correctAnswer: "go"

  - question: "Zależy mi na ____ (on)."
    type: multiple-choice
    options: ["nim", "niego", "go", "mu"]
    correctAnswer: "nim"

  - question: "Nie mogę bez ____ (ty)."
    type: multiple-choice
    options: ["ciebie", "cię", "tobie", "tobą"]
    correctAnswer: "ciebie"

  - question: "Nie mogę bez ____ (on)."
    type: multiple-choice
    options: ["niego", "go", "nim", "mu"]
    correctAnswer: "niego"

  # Mieszane
  - question: "Dam ____ (on) klucz."
    type: multiple-choice
    options: ["mu", "go", "niego", "nim"]
    correctAnswer: "mu"

  - question: "Oddaj to ____ (ona)."
    type: multiple-choice
    options: ["jej", "ją", "nią", "niej"]
    correctAnswer: "jej"

  - question: "Zrób to dla ____ (my)."
    type: multiple-choice
    options: ["nas", "nam", "nami", "was"]
    correctAnswer: "nas"

  - question: "Idę bez ____ (wy)."
    type: multiple-choice
    options: ["was", "wam", "wami", "nas"]
    correctAnswer: "was"

  - question: "Rozmawiam o ____ (oni)."
    type: multiple-choice
    options: ["nich", "nimi", "ich", "im"]
    correctAnswer: "nich"

  - question: "Spotkaj się z ____ (one)."
    type: multiple-choice
    options: ["nimi", "nich", "je", "im"]
    correctAnswer: "nimi"

  - question: "Zadzwoń do ____ (ja)."
    type: multiple-choice
    options: ["mnie", "mi", "mną", "mię"]
    correctAnswer: "mnie"

  - question: "Czekamy na ____ (wy)."
    type: multiple-choice
    options: ["was", "wam", "wami", "nas"]
    correctAnswer: "was"

  - question: "Pomysł należy do ____ (on)."
    type: multiple-choice
    options: ["niego", "go", "nim", "mu"]
    correctAnswer: "niego"

  - question: "To zależy od ____ (ja)."
    type: multiple-choice
    options: ["mnie", "mi", "mną", "mię"]
    correctAnswer: "mnie"`,Od=[Bt.load(CA),Bt.load(qA),Bt.load(OA),Bt.load(NA),Bt.load(RA),Bt.load(MA)],DA=Od.reduce((l,c)=>(l[c.slug]=c,l),{}),UA=`app:
  title: Nedolingo
  tagline: Choose a quiz to get started

quiz_list:
  questions: questions

quiz:
  back_to_quizzes: Back to Quizzes
  question_progress: Question {current} of {total}
  type_answer: Type your answer...
  check_answer: Check Answer
  next_question: Next Question
  view_results: View Results
  correct: Correct!
  incorrect: Incorrect!
  correct_answer_is: "The correct answer is:"

results:
  title: Quiz Complete!
  score: Score
  review_incorrect: Review Incorrect Answers
  your_answer: "Your answer:"
  correct_answer: "Correct answer:"
  try_again: Try Again
  back_to_quizzes: Back to Quizzes
  no_answer: No answer

language:
  en: English
  ru: Русский
`,HA=`app:
  title: Nedolingo
  tagline: Выберите тест для начала

quiz_list:
  questions: вопросов

quiz:
  back_to_quizzes: Назад к тестам
  question_progress: Вопрос {current} из {total}
  type_answer: Введите ваш ответ...
  check_answer: Проверить ответ
  next_question: Следующий вопрос
  view_results: Посмотреть результаты
  correct: Правильно!
  incorrect: Неправильно!
  correct_answer_is: "Правильный ответ:"

results:
  title: Тест завершён!
  score: Результат
  review_incorrect: Просмотр неправильных ответов
  your_answer: "Ваш ответ:"
  correct_answer: "Правильный ответ:"
  try_again: Попробовать снова
  back_to_quizzes: Назад к тестам
  no_answer: Нет ответа

language:
  en: English
  ru: Русский
`,vh={en:Bt.load(UA),ru:Bt.load(HA)},Uu=["en","ru"],Nd="en",Rd=j.createContext(void 0),LA=()=>{const l=navigator.language.split("-")[0];return Uu.includes(l)?l:Nd},BA=()=>{const l=localStorage.getItem("language");return l&&Uu.includes(l)?l:LA()};function YA({children:l}){const[c,r]=j.useState(BA);j.useEffect(()=>{localStorage.setItem("language",c)},[c]);const o=(p,m={})=>{const y=p.split(".");let d=vh[c];for(const g of y)if(d&&typeof d=="object")d=d[g];else{d=vh[Nd];for(const x of y)if(d&&typeof d=="object")d=d[x];else return p;break}return typeof d=="string"?d.replace(/\{(\w+)\}/g,(g,x)=>m[x]!==void 0?m[x]:g):p},f=p=>{Uu.includes(p)&&r(p)};return H.jsx(Rd.Provider,{value:{language:c,changeLanguage:f,t:o},children:l})}function Uo(){const l=j.useContext(Rd);if(!l)throw new Error("useI18n must be used within I18nProvider");return l}function kA(){const{t:l}=Uo(),c=Od;return H.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4",children:H.jsxs("div",{className:"max-w-4xl w-full",children:[H.jsxs("div",{className:"text-center mb-12",children:[H.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6",children:H.jsx(n_,{className:"w-10 h-10 text-white"})}),H.jsx("h1",{className:"text-4xl font-bold text-gray-800 mb-3",children:l("app.title")}),H.jsx("p",{className:"text-xl text-gray-600",children:l("app.tagline")})]}),H.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:c.map(r=>{const o=typeof r.maxQuestions=="number"?Math.min(r.questions.length,Math.max(0,Math.floor(r.maxQuestions))):r.questions.length;return H.jsx(Co,{to:`/q/${r.slug}`,className:"bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 group block",children:H.jsxs("div",{className:"flex items-start justify-between",children:[H.jsxs("div",{className:"flex-1",children:[H.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors",children:r.title}),H.jsx("p",{className:"text-gray-600 mb-4",children:r.description}),H.jsx("div",{className:"flex items-center text-sm text-gray-500",children:H.jsxs("span",{children:[o," ",l("quiz_list.questions")]})})]}),H.jsx(Pv,{className:"w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-4"})]})},r.slug)})})]})})}function GA({score:l,totalExercises:c,incorrectExercises:r,onBack:o,onRetry:f,t:p}){return H.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4",children:H.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full",children:[H.jsxs("div",{className:"text-center mb-8",children:[H.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-4",children:H.jsx(o_,{className:"w-10 h-10 text-white"})}),H.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:p("results.title")}),H.jsxs("p",{className:"text-xl text-gray-600",children:[p("results.score"),": ",H.jsx("span",{className:"font-bold text-green-600",children:l}),"/",c]})]}),r.length>0&&H.jsxs("div",{className:"mb-8",children:[H.jsx("h2",{className:"text-xl font-semibold text-gray-800 mb-4",children:p("results.review_incorrect")}),H.jsx("div",{className:"space-y-4","data-testid":"quiz-incorrect-cards-container",children:r.map((m,y)=>H.jsxs("div",{className:"border border-red-200 rounded-lg p-4 bg-red-50","data-testid":"quiz-incorrect-card",children:[H.jsx("p",{className:"font-medium text-gray-800 mb-2","data-testid":"quiz-incorrect-question",children:m.question}),H.jsxs("p",{className:"text-sm text-gray-600 mb-1",children:[p("results.your_answer")," ",H.jsx("span",{className:"font-medium",children:m.userAnswer||p("results.no_answer")})]}),H.jsxs("p",{className:"text-sm text-green-600 font-medium",children:[p("results.correct_answer")," ",m.correctAnswer]})]},y))})]}),H.jsxs("div",{className:"flex gap-3",children:[H.jsxs("button",{onClick:o,className:"flex-1 bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-all duration-200 flex items-center justify-center gap-2",children:[H.jsx(Gh,{className:"w-5 h-5"}),p("results.back_to_quizzes")]}),H.jsxs("button",{onClick:f,className:"flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2",children:[H.jsx(c_,{className:"w-5 h-5"}),p("results.try_again")]})]})]})})}function QA({title:l,onBack:c,t:r}){return H.jsxs("div",{className:"mb-6",children:[H.jsxs("button",{onClick:c,className:"text-gray-600 hover:text-gray-800 flex items-center gap-2 mb-4 transition-colors",children:[H.jsx(Gh,{className:"w-5 h-5"}),r("quiz.back_to_quizzes")]}),H.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:l})]})}function XA({current:l,total:c,percentage:r,t:o}){return H.jsxs("div",{className:"mb-6",children:[H.jsxs("div",{className:"flex justify-between text-sm text-gray-600 mb-2",children:[H.jsx("span",{children:o("quiz.question_progress",{current:l,total:c})}),H.jsxs("span",{"data-testid":"quiz-progress-percentage",children:[Math.round(r),"%"]})]}),H.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:H.jsx("div",{className:"bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500",style:{width:`${r}%`},"data-testid":"quiz-progress-bar"})})]})}function ZA({question:l}){return H.jsx("div",{className:"mb-8",children:H.jsx("h2",{className:"text-2xl font-bold text-gray-800 text-center","data-testid":"quiz-question-heading",children:l})})}function VA({exercise:l,selectedOption:c,onSelectOption:r,textInput:o,onTextInputChange:f,onSubmit:p,showResult:m,t:y}){return m?null:H.jsx("div",{className:"space-y-4 mb-8","data-testid":"quiz-answer-options",children:l.type==="multiple-choice"?(l.options??[]).map(d=>H.jsx("button",{onClick:()=>r(d),className:`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${c===d?"border-blue-500 bg-blue-50 text-blue-700":"border-gray-200 hover:border-gray-300 hover:bg-gray-50"}`,"data-testid":"quiz-option-button",children:d},d)):H.jsx("input",{type:"text",value:o,onChange:d=>f(d.target.value),onKeyPress:d=>d.key==="Enter"&&o&&p(),placeholder:y("quiz.type_answer"),className:"w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-lg",autoFocus:!0,"data-testid":"quiz-text-input"})})}function KA({isCorrect:l,userAnswer:c,correctAnswer:r,t:o}){return H.jsxs("div",{className:"mb-8",children:[H.jsxs("div",{className:"text-center mb-6",children:[H.jsx("div",{className:`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${l?"bg-green-100 text-green-600":"bg-red-100 text-red-600"}`,"data-testid":"quiz-result-icon",children:l?H.jsx(fo,{className:"w-8 h-8"}):H.jsx(th,{className:"w-8 h-8"})}),H.jsx("p",{className:`text-lg font-semibold ${l?"text-green-600":"text-red-600"}`,children:o(l?"quiz.correct":"quiz.incorrect")})]}),H.jsxs("div",{className:"space-y-3",children:[H.jsxs("div",{className:`p-4 rounded-lg border-2 flex items-center gap-3 ${l?"bg-green-50 border-green-300":"bg-red-50 border-red-300"}`,"data-testid":"quiz-user-answer-card",children:[l?H.jsx(fo,{className:"w-6 h-6 text-green-600 flex-shrink-0"}):H.jsx(th,{className:"w-6 h-6 text-red-600 flex-shrink-0"}),H.jsxs("div",{className:"flex-1",children:[H.jsx("p",{className:"text-xs text-gray-500 mb-1",children:o("results.your_answer")}),H.jsx("p",{className:`text-xl font-semibold ${l?"text-green-700":"text-red-700"}`,children:c||o("results.no_answer")})]})]}),!l&&H.jsxs("div",{className:"p-4 rounded-lg border-2 bg-green-50 border-green-300 flex items-center gap-3","data-testid":"quiz-correct-answer-card",children:[H.jsx(fo,{className:"w-6 h-6 text-green-600 flex-shrink-0"}),H.jsxs("div",{className:"flex-1",children:[H.jsx("p",{className:"text-xs text-gray-500 mb-1",children:o("results.correct_answer")}),H.jsx("p",{className:"text-xl font-semibold text-green-700",children:r})]})]})]})]})}function JA({showResult:l,isLastQuestion:c,disabled:r,onCheck:o,onNext:f,t:p}){const m=j.useRef(null),y=j.useCallback(()=>{o()},[o]),d=j.useCallback(()=>{f()},[f]),g=j.useCallback(x=>{x.key==="Enter"&&(x.preventDefault(),f())},[f]);return j.useEffect(()=>{l&&m.current?.focus()},[l]),l?H.jsx("button",{onClick:d,ref:m,onKeyDown:g,className:"w-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-200",children:p(c?"quiz.view_results":"quiz.next_question")}):H.jsx("button",{onClick:y,disabled:r,className:"w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",children:p("quiz.check_answer")})}const FA=l=>{const c=[...l];for(let r=c.length-1;r>0;r--){const o=Math.floor(Math.random()*(r+1));[c[r],c[o]]=[c[o],c[r]]}return c},WA=(l,c)=>typeof l!="number"?c:Math.max(0,Math.min(c,Math.floor(l))),$A=(l,c)=>{if(c>=l.length)return l;const r=new Map,o=[];for(const m of l){const y=m.correctAnswer;r.has(y)||(r.set(y,[]),o.push(y)),r.get(y)?.push(m)}if(o.length<=1)return l.slice(0,c);const f=[];let p=!0;for(;f.length<c&&p;){p=!1;for(const m of o){const y=r.get(m);if(y&&y.length>0&&(f.push(y.shift()),p=!0,f.length>=c))break}}return f},IA=({questions:l,maxQuestions:c,noShuffle:r,previousSelection:o})=>{const f=WA(c,l.length),p=()=>{const m=r?[...l]:FA(l);return r||f>=m.length?m.slice(0,f):$A(m,f)};if(!r&&o&&f<l.length){const m=new Set(o);for(let y=0;y<5;y++){const d=p();if(!(d.length===m.size&&d.every(x=>m.has(x.question))))return d}}return p()};function PA({quiz:l,onBack:c,onDirtyStateChange:r}){const{t:o}=Uo(),[f,p]=j.useState(0),[m,y]=j.useState(""),[d,g]=j.useState(""),[x,_]=j.useState(!1),[O,D]=j.useState(!1),[k,L]=j.useState(""),[B,Q]=j.useState(0),[U,W]=j.useState([]),[de,ye]=j.useState(!1),[Ee,I]=j.useState(0),je=j.useRef(null);j.useEffect(()=>{if(r){const T=U.length>0&&!de;r(T)}},[U.length,de,r]);const be=j.useMemo(()=>{const T=K=>{const le=[...K];for(let fe=le.length-1;fe>0;fe--){const z=Math.floor(Math.random()*(fe+1));[le[fe],le[z]]=[le[z],le[fe]]}return le};let Y=IA({questions:l.questions,maxQuestions:l.maxQuestions,noShuffle:l.noShuffle,previousSelection:je.current});return Y=Y.map(K=>{if(K.type==="multiple-choice"&&K.options){const le=!l.noShuffle&&!K.noShuffle;return{...K,options:le?T(K.options):K.options}}return K}),Y},[l.questions,l.noShuffle,l.maxQuestions,Ee]),qe=be[f],pn=T=>T.trim().toLowerCase(),Ze=()=>{let T="",Y=!1;qe.type==="multiple-choice"?(T=m,Y=T===qe.correctAnswer):(T=d,Y=pn(T)===pn(qe.correctAnswer)),D(Y),L(T),_(!0),Y&&Q(B+1),W([...U,{...qe,userAnswer:T,isCorrect:Y}]),y(""),g("")},Vn=()=>{f<be.length-1?(p(f+1),_(!1)):ye(!0)},Un=()=>{je.current=be.map(T=>T.question),p(0),y(""),g(""),_(!1),D(!1),L(""),Q(0),W([]),ye(!1),I(T=>T+1)},mn=()=>U.length/be.length*100;if(!qe)return null;if(de){const T=U.filter(Y=>!Y.isCorrect);return H.jsx(GA,{score:B,totalExercises:be.length,incorrectExercises:T,onBack:c,onRetry:Un,t:o})}return H.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4",children:H.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full",children:[H.jsx(QA,{title:l.title,onBack:c,t:o}),H.jsx(XA,{current:f+1,total:be.length,percentage:mn(),t:o}),H.jsx(ZA,{question:qe.question}),H.jsx(VA,{exercise:qe,selectedOption:m,onSelectOption:y,textInput:d,onTextInputChange:g,onSubmit:Ze,showResult:x,t:o}),x&&H.jsx(KA,{isCorrect:O,userAnswer:k,correctAnswer:qe.correctAnswer,t:o}),H.jsx(JA,{showResult:x,isLastQuestion:f>=be.length-1,disabled:qe.type==="multiple-choice"?!m:!d.trim(),onCheck:Ze,onNext:Vn,t:o})]})})}function ez(){const{slug:l}=$g(),c=Rh(),r=j.useRef(!1),o=j.useRef(!1),p=l?DA[l]:void 0;j.useEffect(()=>{p||c("/",{replace:!0})},[p,c]),j.useEffect(()=>{const d=g=>{if(r.current&&!o.current)return g.preventDefault(),g.returnValue="You have an incomplete quiz. Are you sure you want to leave?",g.returnValue};return window.addEventListener("beforeunload",d),()=>window.removeEventListener("beforeunload",d)},[]);const m=d=>{r.current=d},y=()=>{o.current=!0,c("/")};return p?H.jsx(PA,{quiz:p,onBack:y,onDirtyStateChange:m}):null}function nz(){const{language:l,changeLanguage:c,t:r}=Uo();return H.jsx("div",{className:"fixed top-4 right-4 z-50",children:H.jsxs("div",{className:"relative group",children:[H.jsxs("button",{type:"button","aria-label":"Language","data-testid":"language-switcher-trigger",className:"flex items-center gap-2 bg-white rounded-lg shadow-lg px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors",children:[H.jsx(a_,{className:"w-5 h-5 text-gray-600"}),H.jsx("span",{className:"text-xs font-semibold tracking-widest",children:l.slice(0,2).toUpperCase()})]}),H.jsx("div",{className:"absolute right-0 mt-2 w-max rounded-lg bg-white shadow-lg p-2 flex items-center gap-2 opacity-0 scale-95 pointer-events-none transition-all duration-150 group-focus-within:opacity-100 group-focus-within:scale-100 group-focus-within:pointer-events-auto",children:Uu.map(o=>H.jsx("button",{onClick:()=>c(o),className:`px-3 py-1 rounded text-sm font-medium transition-all duration-200 ${l===o?"bg-blue-500 text-white":"text-gray-600 hover:bg-gray-100"}`,"data-testid":`language-button-${o}`,children:r(`language.${o}`)},o))})]})})}function tz(){return H.jsxs(Uv,{children:[H.jsx(nz,{}),H.jsxs(pv,{children:[H.jsx(yo,{path:"/",element:H.jsx(kA,{})}),H.jsx(yo,{path:"/q/:slug",element:H.jsx(ez,{})})]})]})}hg.createRoot(document.getElementById("root")).render(H.jsx(ug.StrictMode,{children:H.jsx(YA,{children:H.jsx(tz,{})})}));

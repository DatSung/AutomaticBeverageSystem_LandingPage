import 'kleur/colors';
import { v as decodeKey } from './chunks/astro/server_t8S0B2jb.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DyajaLpY.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Hakathons/AutomaticBeverageSystem_LandingPage/abs_landing/","cacheDir":"file:///C:/Hakathons/AutomaticBeverageSystem_LandingPage/abs_landing/node_modules/.astro/","outDir":"file:///C:/Hakathons/AutomaticBeverageSystem_LandingPage/abs_landing/dist/","srcDir":"file:///C:/Hakathons/AutomaticBeverageSystem_LandingPage/abs_landing/src/","publicDir":"file:///C:/Hakathons/AutomaticBeverageSystem_LandingPage/abs_landing/public/","buildClientDir":"file:///C:/Hakathons/AutomaticBeverageSystem_LandingPage/abs_landing/dist/client/","buildServerDir":"file:///C:/Hakathons/AutomaticBeverageSystem_LandingPage/abs_landing/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.ooT0TI5b.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.ooT0TI5b.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.ooT0TI5b.css"}],"routeData":{"route":"/cooperate","isIndex":false,"type":"page","pattern":"^\\/cooperate\\/?$","segments":[[{"content":"cooperate","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cooperate.astro","pathname":"/cooperate","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.ooT0TI5b.css"}],"routeData":{"route":"/models/[id]","isIndex":false,"type":"page","pattern":"^\\/models\\/([^/]+?)\\/?$","segments":[[{"content":"models","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/models/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.ooT0TI5b.css"},{"type":"inline","content":".line-clamp-3[data-astro-cid-wmd6b3pc]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}\n"}],"routeData":{"route":"/models","isIndex":false,"type":"page","pattern":"^\\/models\\/?$","segments":[[{"content":"models","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/models.astro","pathname":"/models","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.ooT0TI5b.css"},{"type":"inline","content":".group[data-astro-cid-pqlhhjwi]{animation:fadeInUp .6s ease-out forwards;opacity:0;transform:translateY(30px)}.group[data-astro-cid-c3p72rqi]{animation:slideUp .6s ease-out forwards;opacity:0;transform:translateY(30px)}@keyframes slideUp{to{opacity:1;transform:translateY(0)}}.group[data-astro-cid-23gfgwlw]{animation:fadeInUp .8s ease-out forwards;opacity:0;transform:translateY(40px)}@keyframes fadeInUp{to{opacity:1;transform:translateY(0)}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Hakathons/AutomaticBeverageSystem_LandingPage/abs_landing/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Hakathons/AutomaticBeverageSystem_LandingPage/abs_landing/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Hakathons/AutomaticBeverageSystem_LandingPage/abs_landing/src/pages/cooperate.astro",{"propagation":"none","containsHead":true}],["C:/Hakathons/AutomaticBeverageSystem_LandingPage/abs_landing/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Hakathons/AutomaticBeverageSystem_LandingPage/abs_landing/src/pages/models.astro",{"propagation":"none","containsHead":true}],["C:/Hakathons/AutomaticBeverageSystem_LandingPage/abs_landing/src/pages/models/[id].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/cooperate@_@astro":"pages/cooperate.astro.mjs","\u0000@astro-page:src/pages/models/[id]@_@astro":"pages/models/_id_.astro.mjs","\u0000@astro-page:src/pages/models@_@astro":"pages/models.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DrNsPWW8.mjs","C:/Hakathons/AutomaticBeverageSystem_LandingPage/abs_landing/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DOYwhaB5.mjs","C:/Hakathons/AutomaticBeverageSystem_LandingPage/abs_landing/src/pages/contact.astro?astro&type=script&index=0&lang.ts":"_astro/contact.astro_astro_type_script_index_0_lang.BHd-J2tv.js","C:/Hakathons/AutomaticBeverageSystem_LandingPage/abs_landing/src/components/home/BannerSection.astro?astro&type=script&index=0&lang.ts":"_astro/BannerSection.astro_astro_type_script_index_0_lang.BrwM7GJe.js","C:/Hakathons/AutomaticBeverageSystem_LandingPage/abs_landing/src/layouts/base/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.d6V8J2CV.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Hakathons/AutomaticBeverageSystem_LandingPage/abs_landing/src/pages/contact.astro?astro&type=script&index=0&lang.ts","const s=document.querySelector('textarea[name=\"content\"]'),i=document.getElementById(\"charCount\");s&&i&&s.addEventListener(\"input\",function(){i.textContent=this.value.length});const c=document.getElementById(\"contactForm\"),r=document.getElementById(\"submitBtn\");c&&r&&c.addEventListener(\"submit\",function(){r.innerHTML=`\n          <svg class=\"animate-spin w-5 h-5 mr-2\" fill=\"none\" viewBox=\"0 0 24 24\">\n            <circle class=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"4\"></circle>\n            <path class=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\"></path>\n          </svg>\n          Đang gửi...\n        `,r.disabled=!0});const a=document.querySelectorAll(\"input[required], select[required]\");a.forEach(e=>{e.addEventListener(\"blur\",function(){o(this)}),e.addEventListener(\"input\",function(){this.classList.contains(\"border-red-300\")&&o(this)})});function o(e){const t=e.value.trim();let n=!0;e.name===\"email\"&&t?n=/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(t):e.name===\"phone\"&&t?n=/^[0-9+\\-\\s()]{10,15}$/.test(t):e.required&&(n=t.length>0),n?(e.classList.remove(\"border-red-300\",\"bg-red-50\"),e.classList.add(\"border-green-300\",\"bg-green-50\")):(e.classList.remove(\"border-green-300\",\"bg-green-50\"),e.classList.add(\"border-red-300\",\"bg-red-50\"))}"],["C:/Hakathons/AutomaticBeverageSystem_LandingPage/abs_landing/src/components/home/BannerSection.astro?astro&type=script&index=0&lang.ts","const l=Array.from(document.querySelectorAll(\"[data-slide]\")),m=Array.from(document.querySelectorAll(\".slide-indicator\")),g=document.getElementById(\"nextBtn\"),I=document.getElementById(\"prevBtn\"),u=document.getElementById(\"progressBar\");let s=0,a;function h(e){m.forEach((t,d)=>{const n=t.querySelector(\"div\");d===e?(t.classList.add(\"border-cyan-400\"),t.classList.remove(\"border-white/40\"),n.classList.remove(\"scale-0\"),n.classList.add(\"scale-100\")):(t.classList.remove(\"border-cyan-400\"),t.classList.add(\"border-white/40\"),n.classList.add(\"scale-0\"),n.classList.remove(\"scale-100\"))})}function c(e){l.forEach((t,d)=>{t.classList.remove(\"opacity-100\",\"scale-100\"),t.classList.add(\"opacity-0\",\"scale-105\"),d===e&&setTimeout(()=>{t.classList.remove(\"opacity-0\",\"scale-105\"),t.classList.add(\"opacity-100\",\"scale-100\")},50)}),h(e)}function y(){let e=0;u.style.width=\"0%\",a=setInterval(()=>{e+=2,u.style.width=e+\"%\",e>=100&&clearInterval(a)},100)}function v(){clearInterval(a),y()}function o(){s=(s+1)%l.length,c(s),v()}function f(){s=(s-1+l.length)%l.length,c(s),v()}function E(e){s=e,c(s),r()}c(s);y();let i=setInterval(o,5e3);function r(){clearInterval(i),v(),i=setInterval(o,5e3)}g.addEventListener(\"click\",()=>{o(),r()});I.addEventListener(\"click\",()=>{f(),r()});m.forEach((e,t)=>{e.addEventListener(\"click\",()=>{E(t)})});const L=document.getElementById(\"slideshow\");L.addEventListener(\"mouseenter\",()=>{clearInterval(i),clearInterval(a)});L.addEventListener(\"mouseleave\",()=>{r()});document.addEventListener(\"keydown\",e=>{e.key===\"ArrowLeft\"?(f(),r()):e.key===\"ArrowRight\"&&(o(),r())});"],["C:/Hakathons/AutomaticBeverageSystem_LandingPage/abs_landing/src/layouts/base/Header.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"mobile-menu-button\"),t=document.getElementById(\"mobile-menu\");e?.addEventListener(\"click\",()=>{t?.classList.toggle(\"hidden\")});"]],"assets":["/_astro/about.ooT0TI5b.css","/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"f3w1b05kJBOX9sT2DJjxNqhSbdQX2W9Aw3qtcdpB+YE="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent, l as renderScript, p as renderHead, q as renderSlot } from './astro/server_t8S0B2jb.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const ROUTES = [
  { href: "/", label: "Trang chủ" },
  { href: "/about", label: "Về chúng tôi" },
  { href: "/models", label: "Các dòng máy" },
  { href: "/cooperate", label: "Hợp tác" }
];

const $$Astro$2 = createAstro();
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navigation;
  const currentPath = Astro2.url.pathname;
  function isActive(href, currentPath2) {
    if (href === "/") {
      return currentPath2 === "/";
    }
    return currentPath2.startsWith(href);
  }
  return renderTemplate`${maybeRenderHead()}<nav class=""> <ul class="flex-col flex md:flex-row gap-6 md:gap-4 text-sm font-semibold"> ${ROUTES.map(({ href, label }) => renderTemplate`<li class="relative group"> <a${addAttribute(href, "href")}${addAttribute(`
            relative px-3 py-2 rounded-lg transition-all duration-300 ease-in-out
            transform hover:-translate-y-0.5 hover:shadow-md
            ${isActive(href, currentPath) ? "text-[#68E0DF] bg-blue-50" : "text-gray-700 hover:text-[#68E0DF] hover:bg-blue-50/50"}
          `, "class")}> ${label} <!-- Active indicator --> ${isActive(href, currentPath) && renderTemplate`<span class="hidden md:block absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>`} <!-- Hover indicator --> <span${addAttribute(`
            hidden md:block
            absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 
            bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full
            transition-all duration-300 ease-in-out
            group-hover:w-6
            ${isActive(href, currentPath) ? "hidden" : ""}
          `, "class")}></span> </a> </li>`)} </ul> </nav>`;
}, "D:/Hackathon_Journey/AutomaticBeverageSystem_LandingPage/abs_landing/src/components/header/Navigation.astro", void 0);

const BRAND = {
  name: "CupX",
  contactPhone: "1922 3330",
  town: "31 đường A2, Phường Tăng Nhơn Hoa, TP HCM",
  office: "Căn 00.43 Riverview 1, số 22 đường Tố Hang, phường An Toàn, TP HCM"
};

const $$Astro$1 = createAstro();
const $$ButtonLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ButtonLink;
  const { href, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="bg-[#68E0DF] hover:bg-[#3fbab4] text-white px-4 py-1 rounded transition"> ${title} </a>`;
}, "D:/Hackathon_Journey/AutomaticBeverageSystem_LandingPage/abs_landing/src/components/base/ButtonLink.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center gap-4 text-sm font-medium"> <div class="flex items-center gap-2"> <img src="https://cdn-icons-png.flaticon.com/512/159/159832.png" alt="Hotline" class="w-4 h-4"> <span>Hotline: <span class="text-[#68E0DF] font-semibold">${BRAND.contactPhone}</span></span> </div> ${renderComponent($$result, "ButtonLink", $$ButtonLink, { "href": "/contact", "title": "Li\xEAn h\u1EC7" })} </div>`;
}, "D:/Hackathon_Journey/AutomaticBeverageSystem_LandingPage/abs_landing/src/components/header/Contact.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-white shadow-sm sticky top-0 z-50 w-full"> <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between"> <!-- Logo --> <a href="/" class="flex items-center gap-2"> <p class="font-bold text-3xl text-[#68E0DF]">${BRAND.name}</p> </a> <!-- Desktop Navigation --> <nav class="hidden md:block"> ${renderComponent($$result, "Navigation", $$Navigation, {})} </nav> <!-- Desktop Contact --> <div class=""> ${renderComponent($$result, "Contact", $$Contact, {})} </div> <!-- Mobile Hamburger Button --> <button id="mobile-menu-button" class="md:hidden flex items-center justify-center w-8 h-8" aria-label="Toggle menu"> <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> <!-- Mobile Menu Content --> <div id="mobile-menu" class="md:hidden hidden px-4 py-4 bg-white border-t border-gray-200 transition-all duration-300"> <div class="flex-col ga"> ${renderComponent($$result, "Navigation", $$Navigation, {})} </div> </div> </header> ${renderScript($$result, "D:/Hackathon_Journey/AutomaticBeverageSystem_LandingPage/abs_landing/src/layouts/base/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Hackathon_Journey/AutomaticBeverageSystem_LandingPage/abs_landing/src/layouts/base/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="relative bg-gradient-to-br from-slate-900 via-[#00142b] to-slate-800 text-white overflow-hidden"> <!-- Background decorative elements --> <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div> <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.08),transparent_70%)]"></div> <!-- Subtle grid pattern --> <div class="absolute inset-0 opacity-5"> <div class="absolute inset-0" style="background-image: radial-gradient(circle, #ffffff 1px, transparent 1px); background-size: 30px 30px;"></div> </div> <!-- Main footer content --> <div class="relative z-10 pt-16 pb-8"> <div class="max-w-7xl mx-auto px-6"> <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm"> <!-- Logo + Company Info --> <div class="space-y-4 md:col-span-1"> <div class="flex items-center space-x-3 mb-6"> <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg"> <img src="/logo-ABS.svg" alt="logo" class="w-8 h-8"> </div> <div> <h3 class="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"> ${BRAND.name} </h3> <p class="text-xs text-gray-400">Smart Vending Solutions</p> </div> </div> <div class="space-y-3 text-gray-300"> <p class="text-xs text-gray-400">© 2020 Bản quyền của</p> <p class="font-semibold text-white">
CÔNG TY TNHH ${BRAND.name} VIỆT NAM
</p> <div class="space-y-2 pt-4"> <div class="flex items-start space-x-2"> <svg class="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path> </svg> <div> <p class="font-medium text-gray-200">Trụ sở chính:</p> <p class="text-gray-300"> ${BRAND.town} </p> </div> </div> <div class="flex items-start space-x-2"> <svg class="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path> </svg> <div> <p class="font-medium text-gray-200">Văn phòng:</p> <p class="text-gray-300"> ${BRAND.office} </p> </div> </div> <div class="flex items-center space-x-2 pt-2"> <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"> <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path> </svg> <div> <span class="font-semibold text-yellow-400 text-lg">${BRAND.contactPhone}</span> <span class="text-gray-400 text-xs ml-2">(24/7)</span> </div> </div> </div> <p class="text-xs text-gray-400 pt-4 leading-relaxed">
Giấy chứng nhận đăng ký doanh nghiệp <span class="font-mono text-gray-300">123877745</span>
do Sở Kế hoạch và Đầu tư TP.HCM cấp.
</p> </div> </div> <!-- Liên kết --> <div class="space-y-4"> <h4 class="text-lg font-bold text-white mb-4 flex items-center"> <svg class="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path> </svg>
Liên kết
</h4> <ul class="space-y-3"> <li> <a href="#" class="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"> <span class="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span> ${BRAND.name} Go
</a> </li> <li> <a href="#" class="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"> <span class="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span> ${BRAND.name} Build
</a> </li> <li class="pt-2"> <p class="font-semibold text-gray-200 mb-2">📄 Tải Proposal:</p> <div class="flex flex-col space-y-2 ml-4"> <a href="#" class="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 flex items-center group"> <svg class="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg>
Tiếng Việt
</a> <a href="#" class="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 flex items-center group"> <svg class="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg>
Tiếng Anh
</a> </div> </li> </ul> </div> <!-- Hỗ trợ --> <div class="space-y-4"> <h4 class="text-lg font-bold text-white mb-4 flex items-center"> <svg class="w-5 h-5 mr-2 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a7.5 7.5 0 11-7.5 7.5A7.5 7.5 0 0112 2.25z"></path> </svg>
Hỗ trợ
</h4> <ul class="space-y-3"> ${[
    "V\u1EC1 ch\xFAng t\xF4i",
    "Tin t\u1EE9c",
    "H\u01B0\u1EDBng d\u1EABn",
    "C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p",
    "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt",
    "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng",
    "Ch\xEDnh s\xE1ch ho\xE0n ti\u1EC1n"
  ].map((item) => renderTemplate`<li> <a href="#" class="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"> <span class="w-2 h-2 bg-emerald-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span> ${item} </a> </li>`)} </ul> </div> <!-- Social --> <div class="space-y-4"> <h4 class="text-lg font-bold text-white mb-4 flex items-center"> <svg class="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"> <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5zM15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path> </svg>
Kết nối với ${BRAND.name} </h4> <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"> <iframe src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/ABS.vn&tabs=timeline" width="100%" height="130" style="border:none;overflow:hidden;border-radius:12px;" scrolling="no" frameborder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" class="rounded-xl"></iframe> </div> <div class="flex gap-4 pt-4"> <a href="#" class="group w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"> <svg class="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path> </svg> </a> <a href="#" class="group w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"> <svg class="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24"> <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path> </svg> </a> <a href="#" class="group w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"> <svg class="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </a> </div> </div> </div> </div> </div> <!-- Divider with gradient --> <div class="relative"> <div class="absolute inset-0 flex items-center"> <div class="w-full border-t border-gradient-to-r from-transparent via-gray-600 to-transparent"></div> </div> <div class="relative flex justify-center"> <div class="bg-gradient-to-r from-blue-600 to-emerald-600 w-32 h-0.5"></div> </div> </div> <!-- Copyright --> <div class="relative z-10 py-6"> <div class="text-center text-sm text-gray-400 max-w-7xl mx-auto px-6"> <p class="mb-2">
Copyright © <span class="text-white font-semibold">${currentYear}</span> <span class="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent font-semibold">${BRAND.name} Việt Nam</span>. All rights reserved.
</p> <p class="text-xs">
Thiết kế bởi 💝 <span class="text-blue-400">${BRAND.name} Tech Team</span> | Phiên bản 2.1.0
</p> </div> </div> </footer>`;
}, "D:/Hackathon_Journey/AutomaticBeverageSystem_LandingPage/abs_landing/src/layouts/base/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>ABS</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })}  </body> </html>`;
}, "D:/Hackathon_Journey/AutomaticBeverageSystem_LandingPage/abs_landing/src/layouts/Layout.astro", void 0);

export { $$Layout as $, BRAND as B };

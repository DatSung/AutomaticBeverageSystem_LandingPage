import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_t8S0B2jb.mjs';
import 'kleur/colors';
import { A as API_URL } from '../../chunks/apiUrl_BZuTOl_W.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DKdcGuDi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const res = await fetch(API_URL.kioskModels.gets);
  const data = await res.json();
  const items = data.response.items;
  return items.map((item) => ({
    params: { id: item.kioskModelId },
    // 🧠 khớp với tên file [id].astro
    props: { id: item.kioskModelId }
    // 👈 truyền id vào component
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const response = await fetch(API_URL.kioskModels.get(id));
  if (!response.ok) {
    throw new Error(`API call failed with status ${response.status}`);
  }
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    throw new Error("API kh\xF4ng tr\u1EA3 v\u1EC1 JSON");
  }
  const json = await response.json();
  const model = json.response;
  if (!model) {
    throw new Error(`Kh\xF4ng t\xECm th\u1EA5y kiosk model v\u1EDBi ID '${id}'`);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": "vi" }, { "default": async ($$result2) => renderTemplate` <title>${model.kioskModelName} - AICOfi</title> ${maybeRenderHead()}<main class="max-w-7xl mx-auto px-4 py-8 space-y-12"> <!-- Hero section --> <section class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"> <div class="relative group"> <div class="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div> <img${addAttribute(model.heroImageUrl, "src")} alt="Kiosk" class="relative rounded-2xl shadow-2xl object-cover w-full h-full max-h-[500px] border border-cyan-100"> </div> <div class="space-y-6"> <div class="space-y-4"> <h1 class="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent leading-tight"> ${model.kioskModelName} </h1> <div class="inline-block"> <p class="text-lg font-semibold text-cyan-600 bg-cyan-50 px-4 py-2 rounded-full border border-cyan-200"> ${model.tagline} </p> </div> </div> <p class="text-lg text-slate-600 leading-relaxed"> ${model.kioskModelDescription} </p> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <div class="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-cyan-100 shadow-sm hover:shadow-md transition-all duration-300"> <div class="flex items-center space-x-3"> <div class="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div> <div> <p class="text-sm font-medium text-slate-500">Giá bán</p> <p class="text-xl font-bold text-cyan-600"> ${model.baseSalePrice.toLocaleString()} ${model.currency} </p> </div> </div> </div> <div class="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300"> <div class="flex items-center space-x-3"> <div class="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div> <div> <p class="text-sm font-medium text-slate-500">Giá thuê</p> <p class="text-xl font-bold text-blue-600"> ${model.baseLeasePrice.toLocaleString()} ${model.currency}/tháng
</p> </div> </div> </div> <div class="sm:col-span-2 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-cyan-100 shadow-sm hover:shadow-md transition-all duration-300"> <div class="flex items-center space-x-3"> <div class="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div> <div> <p class="text-sm font-medium text-slate-500">
Thời gian giao hàng
</p> <p class="text-lg font-semibold text-slate-700"> ${model.leadTimeDays} ngày
</p> </div> </div> </div> </div> </div> </section> <!-- Specs --> <section class="relative"> <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-3xl"></div> <div class="relative bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-cyan-100 shadow-lg"> <div class="flex items-center space-x-3 mb-6"> <div class="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center"> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l-2-2h8l2 2v13M7 4h10M9 9h6M9 13h6"></path> </svg> </div> <h2 class="text-3xl font-bold text-slate-800">
Thông số kỹ thuật
</h2> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> <div class="bg-white/80 p-4 rounded-xl border border-cyan-100 hover:border-cyan-200 transition-colors"> <p class="text-sm font-medium text-cyan-600 mb-1">Kích thước</p> <p class="font-semibold text-slate-700">${model.footprint}</p> </div> <div class="bg-white/80 p-4 rounded-xl border border-blue-100 hover:border-blue-200 transition-colors"> <p class="text-sm font-medium text-blue-600 mb-1">Công suất</p> <p class="font-semibold text-slate-700">${model.power}</p> </div> <div class="bg-white/80 p-4 rounded-xl border border-cyan-100 hover:border-cyan-200 transition-colors"> <p class="text-sm font-medium text-cyan-600 mb-1">
Trọng lượng
</p> <p class="font-semibold text-slate-700">${model.weight}</p> </div> <div class="bg-white/80 p-4 rounded-xl border border-blue-100 hover:border-blue-200 transition-colors"> <p class="text-sm font-medium text-blue-600 mb-1">Nguồn nước</p> <p class="font-semibold text-slate-700">${model.waterInlet}</p> </div> <div class="bg-white/80 p-4 rounded-xl border border-cyan-100 hover:border-cyan-200 transition-colors"> <p class="text-sm font-medium text-cyan-600 mb-1">
Kết nối mạng
</p> <p class="font-semibold text-slate-700">${model.network}</p> </div> <div class="bg-white/80 p-4 rounded-xl border border-blue-100 hover:border-blue-200 transition-colors"> <p class="text-sm font-medium text-blue-600 mb-1">Vật liệu</p> <p class="font-semibold text-slate-700">${model.materials}</p> </div> <div class="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-xl border border-cyan-200"> <p class="text-sm font-medium text-slate-600 mb-1">
Công suất pha chế
</p> <p class="text-lg font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"> ${model.capacityPerHour} </p> </div> </div> </div> </section> <!-- Products supported --> <section class="space-y-6"> <div class="flex items-center space-x-3"> <div class="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center"> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path> </svg> </div> <h2 class="text-3xl font-bold text-slate-800">Sản phẩm hỗ trợ</h2> </div> <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"> ${model.supportProducts.map((product, index) => renderTemplate`<div class="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-cyan-100 hover:border-cyan-300 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"> <div class="relative mb-3"> <div class="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full scale-0 group-hover:scale-110 transition-transform duration-300"></div> <img${addAttribute(product.iconUrl, "src")}${addAttribute(product.name, "alt")} class="relative w-12 h-12 rounded-full mx-auto object-contain"> </div> <h3 class="font-semibold text-sm text-slate-700 mb-1"> ${product.name} </h3> <p class="text-xs text-slate-500 leading-relaxed"> ${product.description} </p> </div>`)} </div> </section> <!-- Devices --> <section class="space-y-6"> <div class="flex items-center space-x-3"> <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center"> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div> <h2 class="text-3xl font-bold text-slate-800">Thiết bị tích hợp</h2> </div> <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"> ${model.includeDeviceModels.map((device) => renderTemplate`<div class="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-blue-100 hover:border-blue-300 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"> <div class="relative mb-3"> <div class="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full scale-0 group-hover:scale-110 transition-transform duration-300"></div> <img${addAttribute(device.iconUrl, "src")}${addAttribute(device.name, "alt")} class="relative w-10 h-10 mx-auto object-contain"> </div> <h3 class="font-medium text-sm text-slate-700"> ${device.name} </h3> </div>`)} </div> </section> <!-- Gallery --> <section class="space-y-6"> <div class="flex items-center space-x-3"> <div class="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center"> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> </div> <h2 class="text-3xl font-bold text-slate-800">Thư viện</h2> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${model.gallery.map(
    (media) => media.type === "image" ? renderTemplate`<div class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"> <div class="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div> <img${addAttribute(media.url, "src")}${addAttribute(media.caption, "alt")} class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"> ${media.caption && renderTemplate`<div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent z-20"> <p class="text-white text-sm font-medium"> ${media.caption} </p> </div>`} </div>` : renderTemplate`<div class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"> <video${addAttribute(media.url, "src")} controls class="w-full h-64 object-cover"></video> ${media.caption && renderTemplate`<div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent"> <p class="text-white text-sm font-medium"> ${media.caption} </p> </div>`} </div>`
  )} </div> </section> </main> ` })}`;
}, "C:/Hakathons/AutomaticBeverageSystem_LandingPage/abs_landing/src/pages/models/[id].astro", void 0);

const $$file = "C:/Hakathons/AutomaticBeverageSystem_LandingPage/abs_landing/src/pages/models/[id].astro";
const $$url = "/models/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

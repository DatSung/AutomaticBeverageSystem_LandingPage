import { e as createComponent, f as createAstro, m as maybeRenderHead, l as renderScript, r as renderTemplate, h as addAttribute, k as renderComponent } from '../chunks/astro/server_t8S0B2jb.mjs';
import 'kleur/colors';
import 'clsx';
import { A as API_URL } from '../chunks/apiUrl_BZuTOl_W.mjs';
import { $ as $$Layout } from '../chunks/Layout_BMQZlUmf.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$CooperateForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CooperateForm;
  let isSubmitted = false;
  let error = null;
  let validationErrors = {};
  if (Astro2.request.method === "POST") {
    const body = await Astro2.request.formData();
    const formData = {
      name: body.get("name") ?? "",
      email: body.get("email") ?? "",
      phone: body.get("phone") ?? "",
      time: body.get("time") ?? "",
      content: body.get("content") ?? ""
    };
    if (!formData.name.trim()) validationErrors.name = "T\xEAn l\xE0 b\u1EAFt bu\u1ED9c";
    if (!formData.email.trim()) validationErrors.email = "Email l\xE0 b\u1EAFt bu\u1ED9c";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      validationErrors.email = "Email kh\xF4ng h\u1EE3p l\u1EC7";
    if (!formData.phone.trim())
      validationErrors.phone = "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i l\xE0 b\u1EAFt bu\u1ED9c";
    else if (!/^[0-9+\-\s()]{10,15}$/.test(formData.phone))
      validationErrors.phone = "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i kh\xF4ng h\u1EE3p l\u1EC7";
    if (!formData.time.trim()) validationErrors.time = "Khung gi\u1EDD l\xE0 b\u1EAFt bu\u1ED9c";
    if (Object.keys(validationErrors).length === 0) {
      try {
        const res = await fetch(API_URL.cooperateRequest.post, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
        const result = await res.json();
        isSubmitted = result.isSuccess;
        if (!result.isSuccess) error = result.message;
      } catch (e) {
        error = "C\xF3 l\u1ED7i x\u1EA3y ra khi g\u1EEDi y\xEAu c\u1EA7u. Vui l\xF2ng th\u1EED l\u1EA1i sau.";
      }
    }
  }
  return renderTemplate`${maybeRenderHead()}<section class="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-100 py-12 px-4"> <div class="max-w-4xl mx-auto"> <!-- Header Section --> <div class="text-center mb-12"> <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6"> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path> </svg> </div> <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
Liên hệ hợp tác
</h1> <p class="text-lg text-gray-600 max-w-2xl mx-auto">
Hãy để lại thông tin chi tiết để chúng tôi có thể tư vấn và hỗ trợ bạn
        một cách tốt nhất
</p> </div> <div class="grid lg:grid-cols-3 gap-12"> <!-- Contact Info Sidebar --> <div class="lg:col-span-1 space-y-6"> <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-cyan-100"> <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center"> <svg class="w-5 h-5 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
Thông tin liên hệ
</h3> <div class="space-y-3 text-gray-600"> <div class="flex items-center"> <svg class="w-4 h-4 text-cyan-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg>
contact@company.com
</div> <div class="flex items-center"> <svg class="w-4 h-4 text-cyan-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
0123 456 789
</div> <div class="flex items-center"> <svg class="w-4 h-4 text-cyan-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
8:00 - 17:00 (T2-T6)
</div> </div> </div> <div class="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-6 text-white"> <h3 class="text-lg font-semibold mb-3">Tại sao chọn chúng tôi?</h3> <ul class="space-y-2 text-sm opacity-90"> <li class="flex items-center"> <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path> </svg>
Tư vấn chuyên nghiệp
</li> <li class="flex items-center"> <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path> </svg>
Phản hồi nhanh chóng
</li> <li class="flex items-center"> <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path> </svg>
Giải pháp tối ưu
</li> </ul> </div> </div> <!-- Main Form --> <div class="lg:col-span-2"> <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-cyan-100"> ${isSubmitted ? renderTemplate`<div class="text-center py-12"> <div class="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6"> <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <h3 class="text-2xl font-bold text-gray-800 mb-4">
Gửi yêu cầu thành công!
</h3> <p class="text-gray-600 mb-8">
Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ phản hồi
                  trong vòng 24 giờ tới.
</p> <button onclick="window.location.reload()" class="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
Gửi yêu cầu khác
</button> </div>` : renderTemplate`<form method="POST" class="space-y-6" id="contactForm"> ${error && renderTemplate`<div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center"> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"></path> </svg> ${error} </div>`} <div class="grid md:grid-cols-2 gap-6"> <div> <label class="block text-sm font-medium text-gray-700 mb-2">
Tên của bạn <span class="text-red-500">*</span> </label> <div class="relative"> <input name="name" required placeholder="Nhập tên đầy đủ"${addAttribute(`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none ${validationErrors.name ? "border-red-300 focus:border-red-500 bg-red-50" : "border-gray-200 focus:border-cyan-500 hover:border-cyan-300"}`, "class")}> <svg class="absolute right-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> </svg> </div> ${validationErrors.name && renderTemplate`<p class="text-red-500 text-sm mt-1 flex items-center"> <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"></path> </svg> ${validationErrors.name} </p>`} </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">
Email <span class="text-red-500">*</span> </label> <div class="relative"> <input name="email" required type="email" placeholder="example@email.com"${addAttribute(`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none ${validationErrors.email ? "border-red-300 focus:border-red-500 bg-red-50" : "border-gray-200 focus:border-cyan-500 hover:border-cyan-300"}`, "class")}> <svg class="absolute right-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div> ${validationErrors.email && renderTemplate`<p class="text-red-500 text-sm mt-1 flex items-center"> <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"></path> </svg> ${validationErrors.email} </p>`} </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">
Số điện thoại <span class="text-red-500">*</span> </label> <div class="relative"> <input name="phone" required placeholder="0123 456 789"${addAttribute(`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none ${validationErrors.phone ? "border-red-300 focus:border-red-500 bg-red-50" : "border-gray-200 focus:border-cyan-500 hover:border-cyan-300"}`, "class")}> <svg class="absolute right-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> ${validationErrors.phone && renderTemplate`<p class="text-red-500 text-sm mt-1 flex items-center"> <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"></path> </svg> ${validationErrors.phone} </p>`} </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">
Khung giờ tư vấn <span class="text-red-500">*</span> </label> <div class="relative"> <select name="time" required${addAttribute(`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none appearance-none ${validationErrors.time ? "border-red-300 focus:border-red-500 bg-red-50" : "border-gray-200 focus:border-cyan-500 hover:border-cyan-300"}`, "class")}> <option value="">Chọn khung giờ</option> <option value="8:00 - 10:00">8:00 - 10:00</option> <option value="10:00 - 12:00">10:00 - 12:00</option> <option value="14:00 - 16:00">14:00 - 16:00</option> <option value="16:00 - 18:00">16:00 - 18:00</option> </select> <svg class="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </div> ${validationErrors.time && renderTemplate`<p class="text-red-500 text-sm mt-1 flex items-center"> <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"></path> </svg> ${validationErrors.time} </p>`} </div> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">
Nội dung chi tiết
</label> <div class="relative"> <textarea name="content" rows="5" placeholder="Mô tả chi tiết về nhu cầu hợp tác, dự án, hoặc câu hỏi của bạn..." class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl transition-all duration-300 focus:outline-none focus:border-cyan-500 hover:border-cyan-300 resize-none"></textarea> <div class="absolute bottom-3 right-3 text-xs text-gray-400"> <span id="charCount">0</span> ký tự
</div> </div> </div> <div class="flex flex-col sm:flex-row gap-4 pt-4"> <button type="submit" class="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center group" id="submitBtn"> <svg class="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path> </svg>
Gửi yêu cầu
</button> <button type="reset" class="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
Đặt lại
</button> </div> </form>`} </div> </div> </div> </div> </section> ${renderScript($$result, "D:/Hackathon_Journey/AutomaticBeverageSystem_LandingPage/abs_landing/src/components/contact/CooperateForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Hackathon_Journey/AutomaticBeverageSystem_LandingPage/abs_landing/src/components/contact/CooperateForm.astro", void 0);

const prerender = false;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CooperateForm", $$CooperateForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/contact/CooperateForm.astro", "client:component-export": "default" })} ` })}`;
}, "D:/Hackathon_Journey/AutomaticBeverageSystem_LandingPage/abs_landing/src/pages/contact.astro", void 0);

const $$file = "D:/Hackathon_Journey/AutomaticBeverageSystem_LandingPage/abs_landing/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

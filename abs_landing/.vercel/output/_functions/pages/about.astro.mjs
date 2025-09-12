import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_t8S0B2jb.mjs';
import 'kleur/colors';
import { $ as $$Layout, B as BRAND } from '../chunks/Layout_DKdcGuDi.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50"> <!-- Hero Section --> <section class="relative overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-blue-600/5 to-cyan-600/10"></div> <div class="relative max-w-7xl mx-auto px-6 py-20"> <div class="text-center space-y-6"> <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full border border-cyan-200"> <svg class="w-5 h-5 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span class="text-cyan-700 font-medium text-sm">Về chúng tôi</span> </div> <h1 class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 bg-clip-text text-transparent leading-tight"> ${BRAND.name} </h1> <p class="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
Hệ thống kiosk pha chế cà phê tự động thông minh,
<span class="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent font-semibold">
mang đến trải nghiệm hiện đại
</span> </p> </div> </div> </section> <!-- Main Content --> <section class="max-w-6xl mx-auto px-6 py-16 space-y-16"> <!-- Story Section --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <div class="space-y-6"> <div class="flex items-center space-x-3"> <div class="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center"> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path> </svg> </div> <h2 class="text-3xl font-bold text-slate-800">
Câu chuyện của chúng tôi
</h2> </div> <div class="space-y-4 text-slate-600 leading-relaxed"> <p class="text-lg"> <strong class="text-cyan-600 text-2xl">${BRAND.name}</strong> ra đời từ ý tưởng cung
              cấp giải pháp tối ưu cho các văn phòng nhỏ và vừa, nơi không gian hạn
              chế nhưng vẫn cần chất lượng đồ uống cao cấp.
</p> <p>
Với công nghệ hiện đại, hệ sinh thái ${BRAND.name} bao gồm: máy pha cà
              phê tự động, robot cánh tay, hệ thống quản lý từ xa, phần mềm đặt
              hàng, quản trị admin dashboard và nhiều thiết bị hỗ trợ khác.
</p> <p>
Chúng tôi tin rằng <span class="font-semibold text-blue-600">cà phê ngon nên dễ tiếp cận</span>, và mọi người xứng đáng được phục vụ bởi những công nghệ tốt
              nhất.
</p> </div> </div> <!-- Visual Element --> <div class="relative"> <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-3xl transform rotate-3 opacity-10"></div> <div class="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-cyan-100 shadow-xl"> <div class="grid grid-cols-2 gap-6"> <div class="text-center space-y-2"> <div class="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto flex items-center justify-center"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> <h3 class="font-bold text-slate-800">Tự động hoá</h3> <p class="text-sm text-slate-600">
Quy trình hoàn toàn tự động
</p> </div> <div class="text-center space-y-2"> <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto flex items-center justify-center"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path> </svg> </div> <h3 class="font-bold text-slate-800">Thông minh</h3> <p class="text-sm text-slate-600">Công nghệ AI tiên tiến</p> </div> <div class="text-center space-y-2"> <div class="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto flex items-center justify-center"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="font-bold text-slate-800">24/7</h3> <p class="text-sm text-slate-600">Hoạt động liên tục</p> </div> <div class="text-center space-y-2"> <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto flex items-center justify-center"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path> </svg> </div> <h3 class="font-bold text-slate-800">Chất lượng</h3> <p class="text-sm text-slate-600">Cà phê cao cấp</p> </div> </div> </div> </div> </div> <!-- Mission Section --> <div class="relative"> <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-3xl"></div> <div class="relative bg-white/60 backdrop-blur-sm p-10 rounded-3xl border border-cyan-100 shadow-lg"> <div class="flex items-center space-x-3 mb-8"> <div class="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center"> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path> </svg> </div> <h2 class="text-3xl font-bold text-slate-800">
Sứ mệnh của chúng tôi
</h2> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <div class="group bg-white/80 p-6 rounded-2xl border border-cyan-100 hover:border-cyan-300 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"> <div class="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path> </svg> </div> <p class="text-slate-700 leading-relaxed">
Đem công nghệ vào ngành F&B để tối ưu hoá chi phí và nâng cao
                chất lượng dịch vụ.
</p> </div> <div class="group bg-white/80 p-6 rounded-2xl border border-blue-100 hover:border-blue-300 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"> <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"></path> </svg> </div> <p class="text-slate-700 leading-relaxed">
Phát triển giải pháp bền vững, thân thiện với môi trường và dễ
                vận hành.
</p> </div> <div class="group bg-white/80 p-6 rounded-2xl border border-cyan-100 hover:border-cyan-300 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"> <div class="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path> </svg> </div> <p class="text-slate-700 leading-relaxed">
Hỗ trợ các doanh nghiệp vừa và nhỏ tiếp cận mô hình kinh doanh
                tự động.
</p> </div> </div> </div> </div> <!-- Values Section --> <div class="space-y-8"> <div class="flex items-center space-x-3"> <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center"> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path> </svg> </div> <h2 class="text-3xl font-bold text-slate-800">Giá trị cốt lõi</h2> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <div class="group bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-200 hover:border-cyan-300 shadow-lg hover:shadow-xl transition-all duration-300"> <div class="flex items-center space-x-4 mb-4"> <div class="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"> <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="text-xl font-bold text-slate-800">Chất lượng</h3> </div> <p class="text-slate-600 leading-relaxed">
Luôn cam kết tạo ra sản phẩm đáng tin cậy và ổn định, đảm bảo trải
              nghiệm tuyệt vời cho khách hàng.
</p> </div> <div class="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300"> <div class="flex items-center space-x-4 mb-4"> <div class="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"> <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> <h3 class="text-xl font-bold text-slate-800">Đổi mới</h3> </div> <p class="text-slate-600 leading-relaxed">
Không ngừng cải tiến, ứng dụng công nghệ mới để tối ưu trải nghiệm
              người dùng và dẫn đầu xu hướng.
</p> </div> <div class="group bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-200 hover:border-cyan-300 shadow-lg hover:shadow-xl transition-all duration-300"> <div class="flex items-center space-x-4 mb-4"> <div class="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"> <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path> </svg> </div> <h3 class="text-xl font-bold text-slate-800">
Khách hàng là trung tâm
</h3> </div> <p class="text-slate-600 leading-relaxed">
Luôn lắng nghe và đặt nhu cầu khách hàng lên hàng đầu, tạo ra giá
              trị thực sự cho mỗi đối tác.
</p> </div> </div> </div> <!-- Problem & Solution Section --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"> <!-- Problem Section --> <div class="relative"> <div class="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl opacity-50"></div> <div class="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-red-100 shadow-lg h-full"> <div class="flex items-center space-x-3 mb-6"> <div class="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center"> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path> </svg> </div> <h2 class="text-2xl font-bold text-slate-800">
Thách thức truyền thống
</h2> </div> <p class="text-slate-600 mb-6 leading-relaxed">
Quầy cà phê truyền thống đòi hỏi:
</p> <div class="space-y-4"> <div class="flex items-start space-x-3"> <div class="w-2 h-2 bg-red-400 rounded-full mt-2"></div> <div> <h4 class="font-semibold text-slate-700">Diện tích lớn</h4> <p class="text-sm text-slate-600">
Cần không gian rộng để bố trí quầy bar và khu vực phục vụ
</p> </div> </div> <div class="flex items-start space-x-3"> <div class="w-2 h-2 bg-orange-400 rounded-full mt-2"></div> <div> <h4 class="font-semibold text-slate-700">
Chi phí trang trí cao
</h4> <p class="text-sm text-slate-600">
Đầu tư lớn cho thiết kế nội thất và trang thiết bị
</p> </div> </div> <div class="flex items-start space-x-3"> <div class="w-2 h-2 bg-red-400 rounded-full mt-2"></div> <div> <h4 class="font-semibold text-slate-700">
Đào tạo nhân viên dài hạn
</h4> <p class="text-sm text-slate-600">
Cần thời gian và chi phí để đào tạo, duy trì đội ngũ
</p> </div> </div> </div> <div class="mt-6 p-4 bg-red-50 rounded-xl border border-red-200"> <p class="text-red-700 font-medium text-center">
→ Tăng gánh nặng vận hành, đặc biệt với văn phòng nhỏ &
                coworking spaces
</p> </div> </div> </div> <!-- Opportunity & Goals Section --> <div class="relative"> <div class="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl opacity-50"></div> <div class="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-cyan-100 shadow-lg h-full"> <div class="flex items-center space-x-3 mb-6"> <div class="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center"> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path> </svg> </div> <h2 class="text-2xl font-bold text-slate-800">
Cơ hội & Mục tiêu
</h2> </div> <div class="space-y-6"> <div> <h4 class="font-semibold text-slate-700 mb-2">
Xu hướng hiện đại hóa tại Việt Nam
</h4> <p class="text-slate-600 text-sm leading-relaxed">
Văn phòng & coworking spaces ngày càng ưu tiên các giải pháp
                  thông minh, dựa trên công nghệ
</p> </div> <div class="p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200"> <p class="text-cyan-700 font-medium text-center">
→ Cơ hội lớn cho doanh nghiệp áp dụng kiosk cà phê tự động
</p> </div> <div class="grid grid-cols-1 gap-4"> <div class="bg-white/60 p-4 rounded-xl border border-cyan-100"> <div class="flex items-center space-x-3"> <div class="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center"> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path> </svg> </div> <h4 class="font-semibold text-slate-700">
Tối ưu hiệu quả đầu tư
</h4> </div> </div> <div class="bg-white/60 p-4 rounded-xl border border-cyan-100"> <div class="flex items-center space-x-3"> <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center"> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path> </svg> </div> <h4 class="font-semibold text-slate-700">
Hỗ trợ nhân viên phục vụ đồ uống
</h4> </div> </div> </div> </div> </div> </div> </div> <!-- CTA Section --> <div class="text-center space-y-6 pt-8"> <div class="space-y-4"> <h3 class="text-2xl font-bold text-slate-800">
Sẵn sàng khám phá ${BRAND.name}?
</h3> <p class="text-slate-600 max-w-2xl mx-auto">
Hãy để chúng tôi giúp bạn mang công nghệ cà phê tự động đến không
            gian làm việc của bạn.
</p> </div> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="/contact" class="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"> <span class="relative z-10">Liên hệ với chúng tôi</span> <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> <div class="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> </a> <a href="/models" class="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 font-semibold rounded-2xl border border-cyan-200 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
Xem sản phẩm
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </div> </div> </section> </div> ` })}`;
}, "C:/Hakathons/AutomaticBeverageSystem_LandingPage/abs_landing/src/pages/about.astro", void 0);

const $$file = "C:/Hakathons/AutomaticBeverageSystem_LandingPage/abs_landing/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

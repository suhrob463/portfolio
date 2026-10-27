# Prompt (AI ga berish uchun)

Menga dasturchi uchun juda kreativ portfolio landing page yarat.

**Shaxsiy maʼlumot:** Ismim Suhrobjon Sodiqov. Men dasturchiman: C++, Python, JavaScript, HTML, CSS bilan ishlayman. Profil rasmim: `images/profile.jpg`.

**Texnologiyalar:** faqat sof HTML, CSS va JavaScript (framework yoʻq).

**Fayl strukturasi (alohida papkalarda):**
```
portfolio-site/
├── index.html
├── css/style.css
├── js/lang.js      (UZ/EN tarjimalar lugʻati)
├── js/main.js      (barcha funksiyalar)
└── images/         (profile.jpg, project1.svg, project2.svg, project3.svg)
```

**Boʻlimlar:** Navbar (logo, havolalar, til va mavzu tugmalari) · Hero (salom, ism, yozilib-oʻchib turuvchi kasb matni, qisqa taʼrif, 2 ta tugma, profil rasmi) · Marquee (texnologiyalar yoʻl-yoʻlakay) · Men haqimda (statistika hisoblagichlari + C++/Python kod oynasi, tab bilan almashadi) · Koʻnikmalar (animatsiyali progress barlar) · Loyihalar (3 ta kartochka, rasmlari `images/` papkasidan) · Aloqa (email va ijtimoiy tarmoqlar) · Footer.

**Funksiyalar:**
1. Dark/Light rejim, tugma bilan almashadi, tanlov localStorage da saqlanadi (try/catch bilan), birinchi marta tizim rejimiga qarab tanlanadi.
2. Ikki til: UZ va EN. Barcha matnlar `data-i18n` atributi va `js/lang.js` dagi lugʻat orqali almashadi, tanlov saqlanadi.
3. Kreativlik: gradient animatsiyali ism, aylanuvchi nur halqali va morf shaklli profil rasmi, rasm atrofida suzuvchi C++/Python/JS chiplari, orqa fonda tushuvchi kod belgilari (canvas), kursorni kuzatuvchi yorugʻlik, scroll bilan paydo boʻluvchi elementlar, kartochkalarda hover animatsiyasi.
4. Toʻliq responsive (telefon, planshet, kompyuter), `prefers-reduced-motion` ni hurmat qilsin.
5. Rang paletasi CSS oʻzgaruvchilarida boʻlsin. Shrift: Space Grotesk va JetBrains Mono.
6. Kod toza, izohli va oson oʻzgartiriladigan boʻlsin.

Oxirida rasmlarni qanday almashtirishni qisqacha tushuntir.

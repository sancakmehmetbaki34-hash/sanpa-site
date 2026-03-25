"use client";

import { useMemo, useState } from "react";
import { Phone, MapPin, Clock3, MessageCircle, ShieldCheck, Sparkles, Truck, CheckCircle2, Star } from "lucide-react";

export default function SanpaHaliYikamaApp() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Halı Yıkama",
    address: "",
    date: "",
    note: "",
  });

  const whatsappNumber = "905322455107";

  const services = [
    {
      title: "Halı Yıkama",
      desc: "Halılarınız dokuma yapısına ve iplik türüne uygun profesyonel yıkama aşamalarından geçirilir. Toz alma, leke kontrolü, özel şampuanlama, durulama ve kontrollü kurutma süreçleriyle hijyenik sonuç sunulur.",
      icon: "🧼",
    },
    {
      title: "Koltuk Yıkama",
      desc: "Koltuklarınız yerinde yıkama sistemiyle kumaş yapısına zarar vermeden temizlenir. Günlük kullanım kaynaklı kir, toz ve lekeler profesyonel ekipmanlarla derinlemesine giderilir.",
      icon: "🛋️",
    },
    {
      title: "Stor Perde Temizliği",
      desc: "Stor perdeleriniz mekanik aksamına uygun hassas temizlik işlemleriyle temizlenir. Renk, form ve kullanım yapısı korunarak özenli bakım sağlanır.",
      icon: "🪟",
    },
    {
      title: "Yorgan & Battaniye Yıkama",
      desc: "Yorgan ve battaniyeleriniz hijyen standartlarına uygun şekilde yıkanır, ferah ve sağlıklı kullanım için kontrollü kurutma sürecinden geçirilir.",
      icon: "🛏️",
    },
    {
      title: "Ev Temizliği",
      desc: "Deneyimli ekibimiz yaşam alanınızı detaylı, düzenli ve hijyen odaklı şekilde temizler. Mutfak, banyo, salon ve genel alanlarda özenli hizmet sunulur.",
      icon: "🏠",
    },
    {
      title: "Adresten Alım & Teslimat",
      desc: "Halılarınız adresinizden zamanında teslim alınır, işlem tamamlandıktan sonra planlanan sürede özenle teslim edilir.",
      icon: "🚚",
    },
  ];

  const prices = [
    ["Makine Halısı", "m²", "120 TL"],
    ["Shaggy Halı", "m²", "150 TL"],
    ["Yün Halı", "m²", "180 TL"],
    ["Koltuk Yıkama", "Takım", "1.800 TL"],
    ["Tekli Koltuk", "Adet", "400 TL"],
    ["Stor Perde", "m²", "130 TL"],
    ["Yorgan Yıkama", "Adet", "350 TL"],
    ["Battaniye Yıkama", "Adet", "250 TL"],
  ];

  const highlights = [
    "Profesyonel ekip ve ekipman",
    "Adresten alım ve teslimat",
    "Zamanında hizmet anlayışı",
    "Hassas dokulara özel bakım",
  ];

  const stats = [
    ["1997", "Kuruluş"],
    ["7/24", "WhatsApp başvuru"],
    ["%100", "Özenli hizmet anlayışı"],
  ];

  const reviews = [
    {
      name: "Ayşe K.",
      text: "Halılar tertemiz geldi, teslim süreci de çok düzenliydi. Güven veren bir hizmet aldık.",
    },
    {
      name: "Mehmet T.",
      text: "Koltuk yıkama hizmetinden çok memnun kaldık. Ekip zamanında geldi ve oldukça titiz çalıştı.",
    },
    {
      name: "Zehra A.",
      text: "İlk iletişimden teslimata kadar çok profesyonel ilerlediler. Tekrar tercih ederim.",
    },
  ];

  const steps = [
    "Formu doldurun veya WhatsApp üzerinden bize ulaşın.",
    "Ekibimiz sizi arayarak hizmet detaylarını netleştirsin.",
    "Uygun gün ve saatte randevunuzu oluşturalım.",
    "Hizmeti planlanan süreçte eksiksiz tamamlayalım.",
  ];

  const whatsappHref = useMemo(() => {
    const text = `Merhaba, Sanpa Halı Yıkama için randevu oluşturmak istiyorum.%0A%0AAd Soyad: ${form.name || ""}%0ATelefon: ${form.phone || ""}%0AHizmet: ${form.service || ""}%0AAdres: ${form.address || ""}%0ATarih: ${form.date || ""}%0ANot: ${form.note || ""}`;
    return `https://wa.me/${whatsappNumber}?text=${text}`;
  }, [form]);

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-cyan-100 selection:text-slate-900">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-2xl transition hover:scale-105 hover:bg-emerald-600"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>

      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO + İSİM */}
          <div className="flex items-center gap-4">
            <img 
              src="/logo.png" 
              alt="Sanpa Halı Yıkama" 
              className="h-20 w-auto object-contain"
            />

            <div className="leading-tight">
              <p className="text-xl font-bold text-slate-900">
                Sanpa Halı Yıkama
              </p>
              <p className="text-sm text-slate-500">
                Halı Yıkama Fabrikası
              </p>
            </div>
          </div>

          {/* MENÜ */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#hizmetler" className="hover:text-black">Hizmetler</a>
            <a href="#fiyatlar" className="hover:text-black">Fiyatlar</a>
            <a href="#randevu" className="hover:text-black">Randevu</a>
            <a href="#iletisim" className="hover:text-black">İletişim</a>
          </nav>

          {/* WHATSAPP BUTON */}
          <a
            href="https://wa.me/905322455107"
            target="_blank"
            className="bg-emerald-500 text-white px-5 py-3 rounded-xl font-semibold shadow-md hover:bg-emerald-600 transition"
          >
            WhatsApp
          </a>

        </div>
      </header>

      <section id="anasayfa" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/arka-fon.svg')" }} />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/25" />
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-4 py-16 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              Profesyonel halı ve ev temizlik hizmetleri
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl xl:text-7xl">
              Temizlikte
              <span className="block text-cyan-300">güven, özen ve zamanında teslim</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              Sanpa Halı Yıkama olarak halı yıkama, koltuk yıkama, stor perde temizliği, yorgan ve battaniye yıkama ile ev temizliği hizmetlerini tek çatı altında profesyonel şekilde sunuyoruz.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#randevu" className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-xl transition hover:-translate-y-0.5">
                Randevu Oluştur
              </a>
              <a href="#fiyatlar" className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">
                Fiyatları İncele
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 text-sm text-white backdrop-blur-md">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/10 px-5 py-5 text-white backdrop-blur-md">
                  <div className="text-2xl font-bold md:text-3xl">{value}</div>
                  <div className="mt-1 text-sm text-slate-200">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div id="randevu" className="relative">
            <div className="rounded-[32px] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl md:p-5">
              <div className="rounded-[28px] bg-white p-6 shadow-xl md:p-7">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-500">Hızlı Randevu Sistemi</p>
                    <h2 className="text-2xl font-bold text-slate-900">Talep Formu</h2>
                  </div>
                  <div className="rounded-2xl bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700 md:text-sm">
                    Aynı gün geri dönüş
                  </div>
                </div>

                <div className="grid gap-4">
                  <input value={form.name} onChange={(e) => handleChange("name", e.target.value)} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100" placeholder="Ad Soyad" />
                  <input value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100" placeholder="Telefon Numaranız" />
                  <select value={form.service} onChange={(e) => handleChange("service", e.target.value)} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100">
                    <option>Halı Yıkama</option>
                    <option>Koltuk Yıkama</option>
                    <option>Stor Perde Temizliği</option>
                    <option>Yorgan & Battaniye Yıkama</option>
                    <option>Ev Temizliği</option>
                  </select>
                  <input value={form.address} onChange={(e) => handleChange("address", e.target.value)} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100" placeholder="Adres" />
                  <input value={form.date} onChange={(e) => handleChange("date", e.target.value)} type="date" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100" />
                  <textarea value={form.note} onChange={(e) => handleChange("note", e.target.value)} className="min-h-[110px] w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100" placeholder="Ek notunuz" />

                  <div className="grid gap-3 sm:grid-cols-2">
                    <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-4 py-3 font-semibold text-white transition hover:bg-emerald-600">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp'a Gönder
                    </a>
                    <button className="rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-800">
                      Formu Kaydet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hizmetler" className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-12">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">Hizmetlerimiz</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Temizlikte detaylı ve profesyonel çözümler</h2>
          </div>
          <p className="max-w-xl text-slate-600">
            Her hizmet kalemi, farklı yüzey ve kullanım ihtiyacına uygun özel uygulama süreçleriyle planlanır.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="group rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-3xl transition group-hover:bg-cyan-50">{service.icon}</div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="nedenbiz" className="bg-slate-950 px-4 py-20 text-white md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, title: "Güvenli Süreç", desc: "Teslim alma, yıkama ve teslim etme aşamalarında düzenli ve kontrollü iş akışı." },
            { icon: Sparkles, title: "Özenli Temizlik", desc: "Her ürün grubuna özel temizlik yaklaşımı ve dikkatli işlem süreci." },
            { icon: Truck, title: "Zamanında Teslim", desc: "Planlanan alım ve teslim saatlerine uyum sağlayan hizmet anlayışı." },
            { icon: CheckCircle2, title: "Müşteri Memnuniyeti", desc: "İletişimden uygulamaya kadar düzenli ve çözüm odaklı destek." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Icon className="h-6 w-6 text-cyan-300" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="fiyatlar" className="bg-slate-50 px-4 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">Fiyat Tablosu</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Güncel hizmet fiyatlarımız</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Aşağıdaki fiyatlar örnek gösterim amaçlı hazırlanmıştır. Gerçek fiyatlar ürün ölçüsü ve işlem detayına göre güncellenebilir.
            </p>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-slate-900 px-6 py-4 text-sm font-semibold text-white md:text-base">
              <div>Hizmet</div>
              <div>Birim</div>
              <div>Fiyat</div>
            </div>
            {prices.map(([name, unit, price], index) => (
              <div key={name} className={`grid grid-cols-3 px-6 py-4 text-sm md:text-base ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                <div className="font-medium text-slate-800">{name}</div>
                <div className="text-slate-600">{unit}</div>
                <div className="font-bold text-slate-900">{price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="yorumlar" className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-12">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">Müşteri Yorumları</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Hizmet deneyimlerinden kısa notlar</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-4 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="leading-7 text-slate-600">“{review.text}”</p>
              <div className="mt-5 font-bold text-slate-900">{review.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">Randevu Süreci</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Kolay, hızlı ve düzenli hizmet akışı</h2>
            <div className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-[28px] border border-slate-200 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="leading-7 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="iletisim" className="rounded-[34px] bg-slate-900 p-8 text-white shadow-2xl md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">İletişim</p>
            <h2 className="mt-3 text-3xl font-bold">Sanpa Halı Yıkama</h2>
            <p className="mt-5 leading-7 text-slate-300">
              Profesyonel halı ve ev temizlik hizmetleri için bizimle hemen iletişime geçin. Bölgenize uygun planlama ve hızlı dönüş sağlayalım.
            </p>

            <div className="mt-8 space-y-4 text-sm md:text-base">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"><Phone className="h-4 w-4 text-cyan-300" /> 0532 245 51 07</div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"><MapPin className="h-4 w-4 text-cyan-300" /> İstanbul / Türkiye</div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"><Clock3 className="h-4 w-4 text-cyan-300" /> 08:00 - 20:00</div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600">
                <MessageCircle className="h-4 w-4" />
                WhatsApp'tan Hemen Yaz
              </a>
              <a href="#randevu" className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                Randevu Formuna Git
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-4 py-8 md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Sanpa Halı Yıkama. Tüm hakları saklıdır.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#anasayfa" className="hover:text-slate-900">Ana Sayfa</a>
            <a href="#hizmetler" className="hover:text-slate-900">Hizmetler</a>
            <a href="#fiyatlar" className="hover:text-slate-900">Fiyatlar</a>
            <a href="#iletisim" className="hover:text-slate-900">İletişim</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

<img 
  src="/logo.png" 
  alt="Sanpa Halı Yıkama Logo" 
  className="h-16 w-auto object-contain" 
/>
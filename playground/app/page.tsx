"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Anasayfa", href: "/" },
    { name: "Markalaşma", href: "/markalasma" },
    { name: "Dijital Pazarlama", href: "/dijital-pazarlama" },
    { name: "Dış Ticaret", href: "/dis-ticaret" },
    { name: "Teşvikler", href: "/tesvikler" },
    { name: "Eğitim", href: "/egitim" },
    { name: "SSS", href: "/sss" },
    { name: "İletişim", href: "/iletisim" },
  ];

  const services = [
    {
      title: "Markalaşma",
      description: "Markanızı güçlendirin, pazarda öne çıkın. Profesyonel marka stratejileri ve kimlik tasarımı.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"></path>
        </svg>
      ),
    },
    {
      title: "Dijital Pazarlama",
      description: "SEO, sosyal medya ve içerik pazarlama stratejileri ile online varlığınızı güçlendirin.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
    },
    {
      title: "Dış Ticaret",
      description: "Global pazarlara açılın. İhracat ve ithalat süreçlerinde profesyonel destek.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
    },
    {
      title: "Teşvikler",
      description: "Devlet teşvikleri ve hibelerden yararlanın. Başvuru süreçlerinde danışmanlık.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
    },
  ];

  const blogPosts = [
    {
      title: "E-ihracat Başarı Hikayeleri",
      excerpt: "Türkiye'den global pazarlara açılan KOBİ'lerin başarı hikayeleri ve öğrenilen dersler.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop",
      category: "Dış Ticaret",
      date: "15 Mart 2024",
      readTime: "5 dk",
    },
    {
      title: "Dijital Pazarlamada Son Trendler",
      excerpt: "2024'ün öne çıkan dijital pazarlama trendleri ve işletmeniz için uygulama stratejileri.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      category: "Dijital Pazarlama",
      date: "12 Mart 2024",
      readTime: "4 dk",
    },
    {
      title: "KOSGEB Destekleri Rehberi",
      excerpt: "KOBİ'ler için güncel KOSGEB destekleri ve başvuru süreçleri hakkında detaylı bilgiler.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
      category: "Teşvikler",
      date: "10 Mart 2024",
      readTime: "6 dk",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navbar - Modern ve transparan */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">
                Lord-e
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-indigo-600 focus:outline-none"
              >
                <span className="sr-only">Ana menüyü aç</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Modern ve transparan */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/80 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Modern ve etkileyici */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-900">
        {/* Dekoratif arka plan elementleri */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5,#0ea5e9)] opacity-40"></div>
          <div className="absolute inset-y-0 right-0 w-[800px] bg-gradient-to-l from-white/5"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMTBoMnYyMHptLTIgMGgtMlYxMGgydjIwem0tMiAwaC0yVjEwaDJ2MjB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-[0.03]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Dijital Dünyada
              <span className="block mt-2 text-6xl bg-gradient-to-r from-sky-400 to-emerald-400 text-transparent bg-clip-text">
                Başarıya Giden Yol
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Markalaşma, dijital pazarlama ve dış ticaret çözümleriyle işinizi büyütün
            </p>
            <div className="flex gap-6 justify-center">
              <button className="group relative px-8 py-4 rounded-full bg-white font-medium text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="relative z-10">Hizmetlerimizi Keşfedin</span>
                <div className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-sky-400/40 to-emerald-400/40 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              </button>
              <button className="relative overflow-hidden px-8 py-4 rounded-full font-medium text-white border-2 border-white/20 hover:border-white/40 transition-colors duration-300 group">
                <span className="relative z-10">İletişime Geçin</span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-sky-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Dekoratif ışık efektleri */}
        <div className="absolute top-1/4 -left-96 w-[600px] h-[600px] bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 -right-96 w-[600px] h-[600px] bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-[600px] h-[600px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </section>

      {/* Services Section - Modern kartlar */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600">
              İşinizi büyütmek için ihtiyacınız olan tüm çözümler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-[0_0_50px_0_rgba(0,0,0,0.1)] hover:shadow-[0_0_50px_0_rgba(79,70,229,0.2)] transition-all duration-300"
              >
                <div className="text-indigo-600 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <Link
                  href={`/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium group"
                >
                  <span className="group-hover:mr-2 transition-all duration-300">Detaylı Bilgi</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section - Modern kartlar */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Blog & Haberler
            </h2>
            <p className="text-xl text-gray-600">
              Güncel içerikler ve sektör haberleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-[0_0_50px_0_rgba(0,0,0,0.1)] hover:shadow-[0_0_50px_0_rgba(79,70,229,0.2)] transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-4 py-1.5 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium group"
                  >
                    <span className="group-hover:mr-2 transition-all duration-300">Devamını Oku</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-4 text-lg border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-full font-medium transition-all duration-300 group"
            >
              <span className="group-hover:mr-2 transition-all duration-300">Tüm Blog Yazıları</span>
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

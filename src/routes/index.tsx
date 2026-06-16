import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Search,
  ShoppingBag,
  User,
  MessageCircle,
  Star,
  Check,
  ArrowRight,
  Plus,
} from "lucide-react";

import hero from "@/assets/hero-composition.jpg";
import buildBat from "@/assets/build-bat.jpg";
import catBat from "@/assets/cat-bat.jpg";
import catBlade from "@/assets/cat-blade.jpg";
import catRubber from "@/assets/cat-rubber.jpg";
import catBalls from "@/assets/cat-balls.jpg";
import catTable from "@/assets/cat-table.jpg";
import catShoes from "@/assets/cat-shoes.jpg";
import catApparel from "@/assets/cat-apparel.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";
import articleBlade from "@/assets/article-blade.jpg";
import articleRubber from "@/assets/article-rubber.jpg";
import articleSetup from "@/assets/article-setup.jpg";
import articleCare from "@/assets/article-care.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The PTM — Spesialis Tenis Meja Indonesia" },
      {
        name: "description",
        content:
          "Peralatan tenis meja premium dari merek kelas dunia. Baru, second-hand tersertifikasi, dan rakitan bat kustom untuk semua tingkat pemain.",
      },
      { property: "og:title", content: "The PTM — Spesialis Tenis Meja Indonesia" },
      {
        property: "og:description",
        content:
          "Peralatan tenis meja premium dari merek kelas dunia. Baru, second-hand tersertifikasi, dan rakitan bat kustom.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink antialiased">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Categories />
        <CertifiedSecond />
        <BuildBat />
        <Brands />
        <BestSellers />
        <Community />
        <Learn />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- shared ---------- */

const NAV = [
  { label: "Produk", id: "products" },
  { label: "Rakit Bat Anda", id: "build-your-bat" },
  { label: "Second Tersertifikasi", id: "certified-second" },
  { label: "Merek", id: "brands" },
  { label: "Artikel", id: "articles" },
];

const container = "mx-auto w-full max-w-[1400px] px-6 md:px-10";

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`flex items-baseline gap-1 font-display font-black tracking-tight ${className}`}>
      <span className="text-[22px] leading-none">The</span>
      <span className="text-[22px] leading-none text-brand">PTM</span>
      <span className="ml-1 mt-0.5 hidden h-1.5 w-1.5 rounded-full bg-brand md:block" />
    </a>
  );
}

/* ---------- nav ---------- */

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule/70 bg-paper/80 backdrop-blur-md">
      <div className={`${container} flex h-16 items-center justify-between gap-6`}>
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/80 lg:flex">
          {NAV.map((n) => (
            <a key={n.label} href={`#${n.id}`} className="transition hover:text-brand">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1 md:gap-2">
          <button aria-label="Search" className="grid h-9 w-9 place-items-center rounded-full text-ink/70 transition hover:bg-mist hover:text-ink">
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button aria-label="Account" className="grid h-9 w-9 place-items-center rounded-full text-ink/70 transition hover:bg-mist hover:text-ink">
            <User className="h-[18px] w-[18px]" />
          </button>
          <button aria-label="Cart" className="relative grid h-9 w-9 place-items-center rounded-full text-ink/70 transition hover:bg-mist hover:text-ink">
            <ShoppingBag className="h-[18px] w-[18px]" />
            <span className="absolute -right-0.5 -top-0.5 grid h-4 w-4 place-items-center rounded-full bg-brand text-[10px] font-bold text-white">3</span>
          </button>
          <a
            href="https://wa.me/6281234567890?text=Halo%20The%20PTM,%20saya%20tertarik%20dengan%20peralatan%20tenis%20meja!"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex h-9 items-center gap-2 rounded-full bg-ink px-4 text-[13px] font-semibold text-paper transition hover:bg-brand"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden md:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- hero ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-rule">
      {/* faint blue gradient wash */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-brand-2/10 blur-3xl" />
      </div>

      <div className={`${container} grid grid-cols-12 gap-6 pb-20 pt-16 md:pt-24`}>
        {/* left: typography */}
        <div className="col-span-12 lg:col-span-7">
          <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-brand">
            <span className="inline-block h-px w-8 bg-brand" />
            Spesialis Tenis Meja Indonesia
          </div>

          <h1 className="mt-8 font-display font-black uppercase leading-[0.88] tracking-[-0.03em] text-ink">
            <span className="block text-[clamp(56px,9vw,128px)]">Semua</span>
            <span className="block text-[clamp(56px,9vw,128px)] text-ink/30">tentang</span>
            <span className="block text-[clamp(56px,9vw,128px)]">
              Tenis <span className="text-brand">Meja</span>
            </span>
          </h1>

          <p className="mt-10 max-w-xl text-[18px] leading-relaxed text-ink/70 md:text-[20px]">
            Peralatan tenis meja premium dari merek kelas dunia. Produk baru, peralatan
            second-hand tersertifikasi, dan rakitan bat kustom untuk setiap tingkat pemain.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-[15px] font-semibold text-paper transition hover:bg-ink"
            >
              Belanja Produk
              <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
            </a>
            <a
              href="#build-your-bat"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-7 py-4 text-[15px] font-semibold text-ink transition hover:border-ink"
            >
              Rakit Bat Anda
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-rule pt-8">
            {[
              ["10.000+", "Produk"],
              ["100+", "Merek"],
              ["34", "Provinsi Terkirim"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-[28px] font-black leading-none md:text-[36px]">{n}</dt>
                <dd className="mt-2 text-[12px] uppercase tracking-[0.15em] text-ink/55">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* right: product composition */}
        <div className="relative col-span-12 lg:col-span-5">
          <div className="relative aspect-[4/5] w-full">
            {/* swiss geometric accents */}
            <div className="absolute -left-6 top-8 h-24 w-24 rounded-full border-2 border-brand" />
            <div className="absolute right-6 top-0 h-20 w-20 bg-brand" />
            <div className="absolute -bottom-4 left-10 h-3 w-40 bg-ink" />
            <div className="absolute right-0 bottom-16 text-[11px] font-mono uppercase tracking-[0.2em] text-ink/40 [writing-mode:vertical-rl]">
              EST. PTM / TT-2024
            </div>

            <div className="relative h-full w-full overflow-hidden rounded-[24px] border border-rule bg-mist">
              <img
                src={hero}
                alt="Blade premium tenis meja, karet, dan bola kompetisi"
                className="h-full w-full object-cover"
                width={1280}
                height={1280}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- features ---------- */

function Features() {
  const items = [
    {
      n: "01",
      t: "Produk Original",
      d: "Setiap barang bersumber langsung dari distributor resmi. Dijamin 100% keasliannya.",
    },
    {
      n: "02",
      t: "Second Tersertifikasi",
      d: "Peralatan bekas pakai, diperiksa dan dinilai oleh spesialis kami. Kualitas premium dengan harga lebih hemat.",
    },
    {
      n: "03",
      t: "Rakit Bat Kustom",
      d: "Pasangkan blade apa pun dengan karet pilihan Anda. Rakit kombinasi yang sesuai dengan gaya bermain Anda.",
    },
  ];
  return (
    <section className="border-b border-rule bg-paper">
      <div className={`${container} grid grid-cols-1 gap-px overflow-hidden border-x border-rule bg-rule md:grid-cols-3`}>
        {items.map((i) => (
          <div key={i.n} className="group bg-paper p-10 transition hover:bg-mist md:p-12">
            <div className="font-mono text-[12px] tracking-[0.2em] text-brand">{i.n}</div>
            <h3 className="mt-8 font-display text-[28px] font-bold leading-tight tracking-tight md:text-[34px]">
              {i.t}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/65">{i.d}</p>
            <div className="mt-10 flex items-center gap-2 text-[13px] font-semibold text-ink transition group-hover:text-brand">
              Pelajari selengkapnya <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- categories ---------- */

function Categories() {
  const cats = [
    { name: "Bat Jadi", count: 240, img: catBat },
    { name: "Blade Profesional", count: 380, img: catBlade },
    { name: "Karet (Rubber)", count: 520, img: catRubber },
    { name: "Bola", count: 95, img: catBalls },
    { name: "Meja", count: 42, img: catTable },
    { name: "Sepatu", count: 130, img: catShoes },
    { name: "Pakaian", count: 210, img: catApparel },
    { name: "Aksesori", count: 310, img: catAccessories },
  ];

  return (
    <section className="border-b border-rule bg-paper py-24 md:py-32">
      <div className={container}>
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 md:col-span-8">
            <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand">
              — Katalog
            </div>
            <h2 className="mt-4 font-display text-[44px] font-black leading-[0.95] tracking-tight md:text-[64px]">
              Belanja berdasarkan kategori.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <a href="#products" className="inline-flex items-center gap-2 text-[14px] font-semibold text-ink transition hover:text-brand">
              Lihat semua kategori <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {cats.map((c, i) => (
            <a
              key={c.name}
              href="#products"
              className="group relative overflow-hidden rounded-2xl border border-rule bg-paper transition hover:-translate-y-1 hover:border-ink hover:shadow-[0_24px_50px_-20px_rgba(0,91,255,0.25)]"
            >
              <div className="aspect-square w-full overflow-hidden bg-mist">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between border-t border-rule px-5 py-4">
                <div>
                  <div className="font-mono text-[10px] tracking-[0.15em] text-ink/40">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-1 font-display text-[16px] font-bold">{c.name}</div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] uppercase tracking-[0.1em] text-ink/40">produk</div>
                  <div className="font-mono text-[14px] font-semibold">{c.count}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- certified second ---------- */

function CertifiedSecond() {
  const grades = [
    { g: "Seperti Baru", p: "98–100%", d: "Tidak dapat dibedakan dari yang baru keluar dari pabrik. Kemasan asli utuh." },
    { g: "Sangat Bagus", p: "92–97%", d: "Penggunaan minimal. Tidak ada keausan yang terlihat pada permukaan atau tepi bat." },
    { g: "Bagus", p: "80–91%", d: "Ada sedikit bekas kosmetik. Performa bermain tetap terjaga sepenuhnya." },
    { g: "Cukup", p: "70–79%", d: "Tampak tanda pemakaian. Harga jujur untuk peralatan yang telah diuji turnamen." },
  ];

  return (
    <section id="certified-second" className="relative overflow-hidden bg-brand text-paper">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className={`${container} relative grid grid-cols-12 gap-6 py-24 md:py-32`}>
        <div className="col-span-12 md:col-span-7">
          <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-paper/80">
            <span className="inline-block h-px w-8 bg-paper/60" />
            Program Unggulan
          </div>
          <h2 className="mt-8 font-display font-black uppercase leading-[0.88] tracking-[-0.02em] text-paper">
            <span className="block text-[clamp(60px,10vw,140px)]">Second</span>
            <span className="block text-[clamp(60px,10vw,140px)] text-paper/40">Tersertifikasi.</span>
          </h2>
          <p className="mt-8 max-w-lg text-[18px] leading-relaxed text-paper/80">
            Setiap produk bekas diperiksa, dibersihkan, dan dinilai oleh spesialis kami. Penilaian
            yang jujur, foto transparan, dan jaminan pengembalian 14 hari.
          </p>
          <a
            href="#products"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-paper px-7 py-4 text-[15px] font-semibold text-brand transition hover:bg-ink hover:text-paper"
          >
            Lihat Produk Tersertifikasi
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="col-span-12 md:col-span-5">
          <div className="rounded-2xl border border-paper/15 bg-paper/[0.06] p-6 backdrop-blur-sm md:p-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/60">
              Sistem Penilaian (Grading)
            </div>
            <ul className="mt-6 divide-y divide-paper/15">
              {grades.map((g) => (
                <li key={g.g} className="flex items-start gap-5 py-5 first:pt-0 last:pb-0">
                  <div className="font-mono text-[13px] font-semibold tabular-nums text-paper/70">
                    {g.p}
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-[18px] font-bold">{g.g}</div>
                    <div className="mt-1 text-[13px] leading-relaxed text-paper/70">{g.d}</div>
                  </div>
                  <Check className="mt-1 h-5 w-5 text-paper/80" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- build bat ---------- */

function BuildBat() {
  const parts = [
    { l: "01 · Karet Forehand", v: "Tenergy 05 / Merah / 2.1mm" },
    { l: "02 · Blade (Kayu)", v: "Viscaria FL / 5+2 Karbon" },
    { l: "03 · Karet Backhand", v: "Dignics 09c / Hitam / Max" },
  ];

  return (
    <section id="build-your-bat" className="border-b border-rule bg-paper py-24 md:py-32">
      <div className={`${container} grid grid-cols-12 items-center gap-6`}>
        <div className="col-span-12 md:col-span-6">
          <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand">
            — Konfigurator
          </div>
          <h2 className="mt-6 font-display font-black uppercase leading-[0.88] tracking-[-0.02em]">
            <span className="block text-[clamp(60px,9vw,128px)]">Rakit</span>
            <span className="block text-[clamp(60px,9vw,128px)] text-ink/30">Bat</span>
            <span className="block text-[clamp(60px,9vw,128px)] text-brand">Anda.</span>
          </h2>
          <p className="mt-8 max-w-md text-[18px] leading-relaxed text-ink/70">
            Pilih blade Anda, karet forehand, dan karet backhand untuk membuat rakitan sempurna Anda.
            Ahli kami akan merakitnya untuk Anda dalam 48 jam.
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20The%20PTM,%20saya%20tertarik%20untuk%20merakit%20kombinasi%20racket%20tenis%20meja%20kustom!"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-[15px] font-semibold text-paper transition hover:bg-brand"
          >
            Mulai Rakit
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="relative col-span-12 md:col-span-6">
          <div className="relative aspect-square w-full overflow-hidden rounded-[24px] border border-rule bg-mist">
            <img
              src={buildBat}
              alt="Tampilan pecah raket tenis meja: blade dengan karet merah dan hitam terpisah"
              loading="lazy"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
            {/* technical callouts */}
            <div className="absolute inset-0 hidden md:block">
              {parts.map((p, i) => (
                <div
                  key={p.l}
                  className="absolute flex items-center gap-3"
                  style={{
                    top: `${[14, 50, 78][i]}%`,
                    left: i === 1 ? "auto" : "auto",
                    right: i === 1 ? "6%" : "auto",
                    ...(i === 0 ? { left: "6%" } : {}),
                    ...(i === 2 ? { left: "6%" } : {}),
                  }}
                >
                  <span className="h-px w-10 bg-ink" />
                  <div className="rounded-md border border-ink/10 bg-paper/95 px-3 py-1.5 shadow-sm backdrop-blur">
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink/55">
                      {p.l}
                    </div>
                    <div className="text-[12px] font-semibold">{p.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- brands ---------- */

function Brands() {
  const brands = ["Butterfly", "DHS", "Stiga", "Victas", "Xiom", "Yasaka", "Donic", "Tibhar"];
  return (
    <section id="brands" className="border-b border-rule bg-mist py-20">
      <div className={container}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand">
              — Mitra Terpercaya
            </div>
            <h2 className="mt-3 font-display text-[28px] font-bold tracking-tight md:text-[36px]">
              100+ merek kelas dunia, dalam satu toko.
            </h2>
          </div>
          <a href="#products" className="text-[13px] font-semibold text-ink transition hover:text-brand">
            Lihat semua merek →
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-rule bg-rule sm:grid-cols-4">
          {brands.map((b) => (
            <div
              key={b}
              className="grid h-24 place-items-center bg-paper transition hover:bg-ink hover:text-paper"
            >
              <span className="font-display text-[22px] font-black uppercase tracking-tight">
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- best sellers ---------- */

function BestSellers() {
  const products = [
    { name: "Butterfly Viscaria FL", cat: "Blade", price: "Rp 2.850.000", rating: 4.9, img: catBlade },
    { name: "DHS Hurricane 3 Neo", cat: "Karet (Rubber)", price: "Rp 525.000", rating: 4.8, img: catRubber },
    { name: "Stiga Pro Carbon", cat: "Bat Jadi", price: "Rp 1.290.000", rating: 4.7, img: catBat },
    { name: "Nittaku Premium 40+", cat: "Bola · 6pcs", price: "Rp 320.000", rating: 5.0, img: catBalls },
  ];

  return (
    <section id="products" className="border-b border-rule bg-paper py-24 md:py-32">
      <div className={container}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand">
              — Paling Laris
            </div>
            <h2 className="mt-4 max-w-2xl font-display text-[44px] font-black leading-[0.95] tracking-tight md:text-[60px]">
              Apa yang sedang dipilih oleh para pemain di Indonesia saat ini.
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-[14px] font-semibold text-ink hover:text-brand">
            Belanja semua produk <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-2xl border border-rule bg-paper transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(31,41,55,0.35)]"
            >
              <div className="relative aspect-square overflow-hidden bg-mist">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full bg-paper px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink/70">
                  {String(i + 1).padStart(2, "0")} · {p.cat}
                </div>
                <button
                  aria-label="Tambah cepat"
                  className="absolute bottom-4 right-4 grid h-11 w-11 translate-y-3 place-items-center rounded-full bg-ink text-paper opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100 hover:bg-brand"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 text-[12px] text-ink/60">
                  <Star className="h-3.5 w-3.5 fill-ink text-ink" />
                  <span className="font-semibold text-ink">{p.rating}</span>
                  <span className="ml-1 text-ink/40">(220+)</span>
                </div>
                <h3 className="mt-2 font-display text-[16px] font-bold leading-snug">{p.name}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-mono text-[15px] font-semibold">{p.price}</span>
                  <span className="text-[12px] font-semibold text-brand">Tersedia</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- community ---------- */

function Community() {
  const stats = [
    ["10.000+", "Produk Terdaftar"],
    ["5.000+", "Pelanggan Terlayani"],
    ["100+", "Merek Tersedia"],
    ["98%", "Kepuasan Pelanggan"],
  ];
  const reviews = [
    {
      q: "Layanan Rakit Bat Anda mengubah cara saya berbelanja. Mereka mencocokkan kombinasi blade dan karet dengan gaya bermain saya yang tepat.",
      n: "Arif Pratama",
      r: "2400 USATT · Jakarta",
    },
    {
      q: "Mendapatkan blade Second Tersertifikasi dengan grade Sangat Bagus. Jujur saja seperti baru. Penilaian grade-nya tidak main-main.",
      n: "Dewi Lestari",
      r: "Pemain Provinsi · Bandung",
    },
  ];

  return (
    <section className="border-b border-rule bg-paper py-24 md:py-32">
      <div className={container}>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-rule bg-rule md:grid-cols-4">
          {stats.map(([n, l]) => (
            <div key={l} className="bg-paper p-8 md:p-10">
              <div className="font-display text-[40px] font-black leading-none tracking-tight md:text-[56px]">
                {n}
              </div>
              <div className="mt-3 text-[12px] uppercase tracking-[0.15em] text-ink/55">{l}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {reviews.map((r) => (
            <figure
              key={r.n}
              className="rounded-2xl border border-rule bg-mist p-8 md:p-10"
            >
              <div className="flex gap-0.5 text-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 font-display text-[22px] font-semibold leading-snug tracking-tight md:text-[26px]">
                &ldquo;{r.q}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 text-[13px]">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink font-bold text-paper">
                  {r.n[0]}
                </span>
                <div>
                  <div className="font-semibold">{r.n}</div>
                  <div className="text-ink/55">{r.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- learn ---------- */

function Learn() {
  const articles = [
    { t: "Memilih Blade Pertama Anda", c: "Peralatan", img: articleBlade, read: "8 mnt" },
    { t: "Memahami Jenis-Jenis Karet", c: "Peralatan", img: articleRubber, read: "12 mnt" },
    { t: "Rakitan Tipe Menyerang vs Bertahan", c: "Gaya Bermain", img: articleSetup, read: "10 mnt" },
    { t: "Panduan Perawatan Peralatan", c: "Perawatan", img: articleCare, read: "6 mnt" },
  ];

  return (
    <section id="articles" className="border-b border-rule bg-paper py-24 md:py-32">
      <div className={container}>
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 md:col-span-8">
            <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand">
              — Jurnal Kami
            </div>
            <h2 className="mt-4 font-display font-black uppercase leading-[0.92] tracking-[-0.02em]">
              <span className="block text-[clamp(44px,7vw,84px)]">Belajar.</span>
              <span className="block text-[clamp(44px,7vw,84px)] text-ink/30">Bermain.</span>
              <span className="block text-[clamp(44px,7vw,84px)]">Berkembang.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <a href="#" className="inline-flex items-center gap-2 text-[14px] font-semibold text-ink hover:text-brand">
              Semua artikel <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((a, i) => (
            <a
              key={a.t}
              href="#"
              className="group flex flex-col overflow-hidden rounded-2xl border border-rule bg-paper transition hover:-translate-y-1 hover:border-ink"
            >
              <div className="aspect-[4/3] overflow-hidden bg-mist">
                <img
                  src={a.img}
                  alt={a.t}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.15em] text-ink/55">
                  <span>
                    {String(i + 1).padStart(2, "0")} · {a.c}
                  </span>
                  <span>{a.read}</span>
                </div>
                <h3 className="mt-4 font-display text-[20px] font-bold leading-snug tracking-tight">
                  {a.t}
                </h3>
                <div className="mt-6 flex items-center gap-2 text-[13px] font-semibold text-ink transition group-hover:text-brand">
                  Baca artikel <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- final cta ---------- */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-b border-rule bg-paper py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/8 blur-3xl" />
      </div>

      <div className={`${container} text-center`}>
        <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand">
          — Mulai Bermain
        </div>
        <h2 className="mx-auto mt-6 max-w-5xl font-display font-black uppercase leading-[0.88] tracking-[-0.03em]">
          <span className="block text-[clamp(60px,10vw,144px)]">Pertandingan</span>
          <span className="block text-[clamp(60px,10vw,144px)] text-brand">Berikutnya</span>
          <span className="block text-[clamp(60px,10vw,144px)] text-ink/30">Mulai Di Sini.</span>
        </h2>
        <p className="mx-auto mt-10 max-w-xl text-[18px] leading-relaxed text-ink/70 md:text-[20px]">
          Temukan peralatan yang tepat dan tingkatkan permainan Anda. Bicaralah dengan spesialis kami
          atau lihat katalog lengkap kami.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-[15px] font-semibold text-paper transition hover:bg-brand"
          >
            Belanja Sekarang
            <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
          </a>
          <a
            href="https://wa.me/6281234567890?text=Halo%20The%20PTM,%20saya%20tertarik%20dengan%20peralatan%20tenis%20meja!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-8 py-4 text-[15px] font-semibold text-ink transition hover:border-ink"
          >
            <MessageCircle className="h-4 w-4" />
            Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- footer ---------- */

function Footer() {
  const cols = [
    {
      h: "Produk",
      links: ["Bat Jadi", "Blade", "Karet", "Bola", "Meja", "Aksesori"],
    },
    { h: "Perusahaan", links: ["Tentang Kami", "Kisah Kami", "Karir", "Pers", "Toko Kami"] },
    { h: "Dukungan", links: ["Pusat Bantuan", "Pengiriman", "Pengembalian", "Garansi", "Hubungi Kami"] },
    { h: "Komunitas", links: ["Artikel", "Rakit Bat Anda", "Pelatihan", "Acara", "Sponsor"] },
  ];

  return (
    <footer className="bg-paper">
      <div className={`${container} pb-12 pt-20`}>
        <div className="grid grid-cols-12 gap-8 border-b border-rule pb-16">
          <div className="col-span-12 md:col-span-4">
            <Logo />
            <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-ink/60">
              Spesialis tenis meja Indonesia. Peralatan baru, second-hand tersertifikasi, dan rakitan bat kustom dari merek kelas dunia.
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo%20The%20PTM,%20saya%20tertarik%20dengan%20peralatan%20tenis%20meja!"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[13px] font-semibold text-paper transition hover:bg-brand"
            >
              <MessageCircle className="h-4 w-4" />
              Hubungi di WhatsApp
            </a>
          </div>

          {cols.map((c) => (
            <div key={c.h} className="col-span-6 md:col-span-2">
              <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45">
                {c.h}
              </h4>
              <ul className="mt-5 space-y-3 text-[14px]">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href={
                        l === "Artikel"
                          ? "#articles"
                          : l === "Rakit Bat Anda"
                          ? "#build-your-bat"
                          : ["Bat Jadi", "Blade", "Karet", "Bola", "Meja", "Aksesori"].includes(l)
                          ? "#products"
                          : "#"
                      }
                      className="text-ink/80 transition hover:text-brand"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 text-[12px] text-ink/55">
          <div className="font-mono uppercase tracking-[0.15em]">© {new Date().getFullYear()} The PTM</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink">Privasi</a>
            <a href="#" className="hover:text-ink">Ketentuan</a>
            <a href="#" className="hover:text-ink">Cookie</a>
          </div>
          <div className="font-mono uppercase tracking-[0.15em]">Dibuat di Indonesia</div>
        </div>
      </div>
    </footer>
  );
}

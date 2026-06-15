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
      { title: "The PTM — Indonesia's Table Tennis Specialist" },
      {
        name: "description",
        content:
          "Premium table tennis equipment from world-class brands. New, certified second-hand, and custom racket setups for every level of player.",
      },
      { property: "og:title", content: "The PTM — Indonesia's Table Tennis Specialist" },
      {
        property: "og:description",
        content:
          "Premium table tennis equipment from world-class brands. New, certified second-hand, and custom racket setups.",
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

const NAV = ["Products", "Build Your Bat", "Certified Second", "Brands", "Articles"];

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
            <a key={n} href="#" className="transition hover:text-brand">
              {n}
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
            href="#"
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
            Indonesia&apos;s Table Tennis Specialist
          </div>

          <h1 className="mt-8 font-display font-black uppercase leading-[0.88] tracking-[-0.03em] text-ink">
            <span className="block text-[clamp(56px,9vw,128px)]">Everything</span>
            <span className="block text-[clamp(56px,9vw,128px)] text-ink/30">about</span>
            <span className="block text-[clamp(56px,9vw,128px)]">
              Table <span className="text-brand">Tennis</span>
            </span>
          </h1>

          <p className="mt-10 max-w-xl text-[18px] leading-relaxed text-ink/70 md:text-[20px]">
            Premium table tennis equipment from world-class brands. New products, certified
            second-hand gear, and custom racket setups for every level of player.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-[15px] font-semibold text-paper transition hover:bg-ink"
            >
              Shop Products
              <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-7 py-4 text-[15px] font-semibold text-ink transition hover:border-ink"
            >
              Build Your Bat
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-rule pt-8">
            {[
              ["10,000+", "Products"],
              ["100+", "Brands"],
              ["34", "Provinces shipped"],
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
                alt="Premium table tennis blade, rubbers and competition ball"
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
      t: "Original Products",
      d: "Every item sourced directly from authorized distributors. 100% authenticity guaranteed.",
    },
    {
      n: "02",
      t: "Certified Second-Hand",
      d: "Pre-owned gear, inspected and graded by our specialists. Premium quality at a smarter price.",
    },
    {
      n: "03",
      t: "Custom Bat Builder",
      d: "Pair any blade with the rubbers of your choice. Build a setup matched to your playstyle.",
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
              Learn more <ArrowRight className="h-4 w-4" />
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
    { name: "Premade Bats", count: 240, img: catBat },
    { name: "Professional Blades", count: 380, img: catBlade },
    { name: "Rubbers", count: 520, img: catRubber },
    { name: "Balls", count: 95, img: catBalls },
    { name: "Tables", count: 42, img: catTable },
    { name: "Shoes", count: 130, img: catShoes },
    { name: "Apparel", count: 210, img: catApparel },
    { name: "Accessories", count: 310, img: catAccessories },
  ];

  return (
    <section className="border-b border-rule bg-paper py-24 md:py-32">
      <div className={container}>
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 md:col-span-8">
            <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand">
              — Catalogue
            </div>
            <h2 className="mt-4 font-display text-[44px] font-black leading-[0.95] tracking-tight md:text-[64px]">
              Shop by category.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <a href="#" className="inline-flex items-center gap-2 text-[14px] font-semibold text-ink transition hover:text-brand">
              View all categories <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {cats.map((c, i) => (
            <a
              key={c.name}
              href="#"
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
                  <div className="text-[11px] uppercase tracking-[0.1em] text-ink/40">items</div>
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
    { g: "Like New", p: "98–100%", d: "Indistinguishable from factory-fresh. Original packaging intact." },
    { g: "Excellent", p: "92–97%", d: "Minimal use. No visible wear on playing surface or edges." },
    { g: "Good", p: "80–91%", d: "Light cosmetic marks. Full playing performance preserved." },
    { g: "Fair", p: "70–79%", d: "Visible wear. Honest pricing for tournament-tested gear." },
  ];

  return (
    <section className="relative overflow-hidden bg-brand text-paper">
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
            Signature Program
          </div>
          <h2 className="mt-8 font-display font-black uppercase leading-[0.88] tracking-[-0.02em] text-paper">
            <span className="block text-[clamp(60px,10vw,140px)]">Certified</span>
            <span className="block text-[clamp(60px,10vw,140px)] text-paper/40">Second.</span>
          </h2>
          <p className="mt-8 max-w-lg text-[18px] leading-relaxed text-paper/80">
            Every second-hand product is inspected, cleaned and graded by our specialists. Honest
            grading, transparent photography, and a 14-day return promise.
          </p>
          <a
            href="#"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-paper px-7 py-4 text-[15px] font-semibold text-brand transition hover:bg-ink hover:text-paper"
          >
            Browse Certified Products
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="col-span-12 md:col-span-5">
          <div className="rounded-2xl border border-paper/15 bg-paper/[0.06] p-6 backdrop-blur-sm md:p-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/60">
              Grading System
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
    { l: "01 · Forehand Rubber", v: "Tenergy 05 / Red / 2.1mm" },
    { l: "02 · Blade", v: "Viscaria FL / 5+2 Carbon" },
    { l: "03 · Backhand Rubber", v: "Dignics 09c / Black / Max" },
  ];

  return (
    <section className="border-b border-rule bg-paper py-24 md:py-32">
      <div className={`${container} grid grid-cols-12 items-center gap-6`}>
        <div className="col-span-12 md:col-span-6">
          <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand">
            — Configurator
          </div>
          <h2 className="mt-6 font-display font-black uppercase leading-[0.88] tracking-[-0.02em]">
            <span className="block text-[clamp(60px,9vw,128px)]">Build</span>
            <span className="block text-[clamp(60px,9vw,128px)] text-ink/30">Your</span>
            <span className="block text-[clamp(60px,9vw,128px)] text-brand">Bat.</span>
          </h2>
          <p className="mt-8 max-w-md text-[18px] leading-relaxed text-ink/70">
            Choose your blade, forehand rubber, and backhand rubber to create your perfect setup.
            Our experts assemble it for you in 48 hours.
          </p>
          <a
            href="#"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-[15px] font-semibold text-paper transition hover:bg-brand"
          >
            Start Building
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="relative col-span-12 md:col-span-6">
          <div className="relative aspect-square w-full overflow-hidden rounded-[24px] border border-rule bg-mist">
            <img
              src={buildBat}
              alt="Exploded view of a table tennis racket: blade with red and black rubbers"
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
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink/50">
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
    <section className="border-b border-rule bg-mist py-20">
      <div className={container}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand">
              — Trusted partners
            </div>
            <h2 className="mt-3 font-display text-[28px] font-bold tracking-tight md:text-[36px]">
              100+ world-class brands, in one store.
            </h2>
          </div>
          <a href="#" className="text-[13px] font-semibold text-ink transition hover:text-brand">
            See all brands →
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
    { name: "DHS Hurricane 3 Neo", cat: "Rubber", price: "Rp 525.000", rating: 4.8, img: catRubber },
    { name: "Stiga Pro Carbon", cat: "Premade Bat", price: "Rp 1.290.000", rating: 4.7, img: catBat },
    { name: "Nittaku Premium 40+", cat: "Balls · 6pcs", price: "Rp 320.000", rating: 5.0, img: catBalls },
  ];

  return (
    <section className="border-b border-rule bg-paper py-24 md:py-32">
      <div className={container}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand">
              — Best sellers
            </div>
            <h2 className="mt-4 max-w-2xl font-display text-[44px] font-black leading-[0.95] tracking-tight md:text-[60px]">
              What players in Indonesia are choosing now.
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-[14px] font-semibold text-ink hover:text-brand">
            Shop all products <ArrowUpRight className="h-4 w-4" />
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
                  aria-label="Quick add"
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
                  <span className="text-[12px] font-semibold text-brand">In stock</span>
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
    ["10,000+", "Products listed"],
    ["5,000+", "Customers served"],
    ["100+", "Brands available"],
    ["98%", "Customer satisfaction"],
  ];
  const reviews = [
    {
      q: "Build Your Bat changed how I shop. They matched a blade and rubber combo to my exact playstyle.",
      n: "Arif Pratama",
      r: "2400 USATT · Jakarta",
    },
    {
      q: "Got a Certified Second blade in Excellent grade. Honestly looked unused. The grading is no joke.",
      n: "Dewi Lestari",
      r: "Provincial player · Bandung",
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
    { t: "Choosing Your First Blade", c: "Equipment", img: articleBlade, read: "8 min" },
    { t: "Understanding Rubber Types", c: "Equipment", img: articleRubber, read: "12 min" },
    { t: "Offensive vs Defensive Setup", c: "Playstyle", img: articleSetup, read: "10 min" },
    { t: "Equipment Maintenance Guide", c: "Care", img: articleCare, read: "6 min" },
  ];

  return (
    <section className="border-b border-rule bg-paper py-24 md:py-32">
      <div className={container}>
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 md:col-span-8">
            <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand">
              — The journal
            </div>
            <h2 className="mt-4 font-display font-black uppercase leading-[0.92] tracking-[-0.02em]">
              <span className="block text-[clamp(44px,7vw,84px)]">Learn.</span>
              <span className="block text-[clamp(44px,7vw,84px)] text-ink/30">Play.</span>
              <span className="block text-[clamp(44px,7vw,84px)]">Improve.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <a href="#" className="inline-flex items-center gap-2 text-[14px] font-semibold text-ink hover:text-brand">
              All articles <ArrowUpRight className="h-4 w-4" />
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
                  Read article <ArrowRight className="h-4 w-4" />
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
          — Start playing
        </div>
        <h2 className="mx-auto mt-6 max-w-5xl font-display font-black uppercase leading-[0.88] tracking-[-0.03em]">
          <span className="block text-[clamp(60px,10vw,144px)]">Your Next</span>
          <span className="block text-[clamp(60px,10vw,144px)] text-brand">Match</span>
          <span className="block text-[clamp(60px,10vw,144px)] text-ink/30">Starts Here.</span>
        </h2>
        <p className="mx-auto mt-10 max-w-xl text-[18px] leading-relaxed text-ink/70 md:text-[20px]">
          Find the perfect equipment and elevate your game. Talk to our specialists or browse the
          full catalogue.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-[15px] font-semibold text-paper transition hover:bg-brand"
          >
            Shop Now
            <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-8 py-4 text-[15px] font-semibold text-ink transition hover:border-ink"
          >
            <MessageCircle className="h-4 w-4" />
            Chat via WhatsApp
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
      h: "Products",
      links: ["Premade Bats", "Blades", "Rubbers", "Balls", "Tables", "Accessories"],
    },
    { h: "Company", links: ["About", "Story", "Careers", "Press", "Stores"] },
    { h: "Support", links: ["Help Center", "Shipping", "Returns", "Warranty", "Contact"] },
    { h: "Community", links: ["Articles", "Build Your Bat", "Coaching", "Events", "Sponsorship"] },
  ];

  return (
    <footer className="bg-paper">
      <div className={`${container} pb-12 pt-20`}>
        <div className="grid grid-cols-12 gap-8 border-b border-rule pb-16">
          <div className="col-span-12 md:col-span-4">
            <Logo />
            <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-ink/60">
              Indonesia&apos;s table tennis specialist. New, certified second-hand, and custom
              racket setups from world-class brands.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[13px] font-semibold text-paper transition hover:bg-brand"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
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
                    <a href="#" className="text-ink/80 transition hover:text-brand">
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
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Terms</a>
            <a href="#" className="hover:text-ink">Cookies</a>
          </div>
          <div className="font-mono uppercase tracking-[0.15em]">Made in Indonesia</div>
        </div>
      </div>
    </footer>
  );
}

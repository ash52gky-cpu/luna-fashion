"use client";

import { motion } from "motion/react";

const products = [
  {
    name: "The Siena Blazer",
    price: "€89",
    tag: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Everyday Elegance",
    price: "€65",
    tag: "NEW IN",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "The Weekend Edit",
    price: "€72",
    tag: "EDITOR'S PICK",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Midnight Grace",
    price: "€79",
    tag: "EVENING COLLECTION",
    image:
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Soft Linen Set",
    price: "€69",
    tag: "NEW ARRIVAL",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "The Classic Coat",
    price: "€110",
    tag: "TIMELESS STYLE",
    image:
      "https://images.unsplash.com/photo-1548126032-079a0fb0099d?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#faf7f2] text-[#29231f]">
      {/* Announcement */}
      <div className="bg-[#682e36] px-4 py-3 text-center text-[10px] tracking-[0.2em] text-white sm:text-xs">
        A LITTLE LUXURY, DELIVERED TO YOUR DOOR · FREE SHIPPING OVER €100
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#29231f]/10 bg-[#faf7f2]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-10">
          <a
            href="#home"
            className="font-serif text-3xl tracking-[0.12em] sm:text-4xl"
          >
            LÚNA<span className="text-[#682e36]">.</span>
          </a>

          <nav className="flex items-center gap-4 text-[10px] tracking-[0.12em] sm:gap-8 sm:text-xs">
            <a
              href="#collection"
              className="transition-colors hover:text-[#9b555b]"
            >
              COLLECTION
            </a>
            <a
              href="#story"
              className="hidden transition-colors hover:text-[#9b555b] sm:inline"
            >
              OUR STORY
            </a>
            <a
              href="#contact"
              className="border border-[#682e36] px-3 py-3 text-[#682e36] transition-colors hover:bg-[#682e36] hover:text-white sm:px-5"
            >
              GET IN TOUCH ↗
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-10 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24"
      >
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 text-[10px] tracking-[0.3em] text-[#682e36] sm:text-xs"
          >
            SPANISH MEDITERRANEAN STYLE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-2xl font-serif text-6xl leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-[6.5rem]"
          >
            Style that
            <br />
            feels like <i className="font-normal text-[#682e36]">you.</i>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-7 max-w-md text-sm leading-7 text-[#625850] sm:text-base sm:leading-8"
          >
            Thoughtfully chosen pieces. Effortless silhouettes. A wardrobe
            that feels as beautiful as it looks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <a
              href="#collection"
              className="inline-flex items-center gap-5 bg-[#682e36] px-6 py-4 text-[10px] tracking-[0.18em] text-white transition duration-300 hover:bg-[#432027] sm:px-8"
            >
              DISCOVER THE COLLECTION <span>↗</span>
            </a>
            <span className="font-serif text-sm italic text-[#76665d]">
              Made for your moments.
            </span>
          </motion.div>

          <div className="mt-12 flex items-center gap-4 border-t border-[#29231f]/15 pt-6">
            <span className="font-serif text-3xl text-[#682e36]">01</span>
            <p className="max-w-[220px] text-[10px] leading-5 tracking-[0.12em] text-[#625850]">
              TIMELESS DESIGN. MODERN FEMININITY. EVERYDAY ELEGANCE.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div className="absolute -right-3 -top-3 h-full w-full border border-[#682e36]/25 sm:-right-5 sm:-top-5" />

          <div className="relative aspect-[4/5] overflow-hidden bg-[#e7ded3]">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=90"
              alt="Editorial fashion inspiration for LÚNA"
              className="h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#211b18]/35 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 text-white sm:bottom-9 sm:left-9">
              <p className="text-[10px] tracking-[0.25em]">
                THE ART OF DRESSING
              </p>
              <p className="mt-2 font-serif text-3xl italic sm:text-4xl">
                Simply beautiful.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-2 flex h-20 w-20 items-center justify-center rounded-full border border-[#682e36]/30 bg-[#faf7f2] text-center sm:-left-6 sm:h-24 sm:w-24">
            <span className="font-serif text-sm leading-5 text-[#682e36]">
              Less,
              <br />
              but better.
            </span>
          </div>
        </motion.div>
      </section>

      {/* Brand values */}
      <section className="border-y border-[#29231f]/10 bg-[#eae0d5] px-5 py-7 sm:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 text-center sm:grid-cols-3 sm:gap-8">
          <div>
            <p className="font-serif text-xl">Considered style</p>
            <p className="mt-2 text-[10px] tracking-[0.12em] text-[#76665d]">
              PIECES YOU WILL LOVE
            </p>
          </div>
          <div className="border-y border-[#29231f]/10 py-5 sm:border-x sm:border-y-0 sm:py-0">
            <p className="font-serif text-xl">Effortless elegance</p>
            <p className="mt-2 text-[10px] tracking-[0.12em] text-[#76665d]">
              BEAUTY IN SIMPLICITY
            </p>
          </div>
          <div>
            <p className="font-serif text-xl">Everyday luxury</p>
            <p className="mt-2 text-[10px] tracking-[0.12em] text-[#76665d]">
              STYLE WITHOUT THE NOISE
            </p>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section
        id="collection"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-10 sm:py-28"
      >
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] tracking-[0.28em] text-[#682e36] sm:text-xs">
              CURATED WITH INTENTION
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-6xl">
              The latest edit<span className="text-[#682e36]">.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#76665d]">
              Discover the pieces that make getting dressed feel special.
            </p>
          </div>

          <a
            href="#contact"
            className="w-fit border-b border-[#682e36] pb-2 text-[10px] tracking-[0.18em] text-[#682e36] transition-colors hover:text-[#9b555b]"
          >
            EXPLORE LÚNA ↗
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-14">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 35, rotateX: 4 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: (index % 3) * 0.12,
                ease: "easeOut",
              }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#eae0d5]">
                <img
                  src={product.image}
                  alt={product.name}
                  loading={index < 3 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 bg-[#faf7f2]/95 px-3 py-2 text-[9px] tracking-[0.15em] text-[#682e36]">
                  {product.tag}
                </span>

                <a
                  href="#contact"
                  aria-label={`Enquire about ${product.name}`}
                  className="absolute bottom-4 left-4 right-4 translate-y-3 bg-[#faf7f2]/95 px-4 py-4 text-center text-[10px] tracking-[0.16em] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100"
                >
                  ENQUIRE ABOUT THIS PIECE ↗
                </a>
              </div>

              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-[10px] tracking-[0.13em] text-[#76665d]">
                    THOUGHTFULLY SELECTED
                  </p>
                </div>
                <span className="pt-1 text-sm">{product.price}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Brand story */}
      <section
        id="story"
        className="relative overflow-hidden bg-[#e7ded3] px-5 py-20 sm:px-10 sm:py-28"
      >
        <div className="pointer-events-none absolute -right-16 -top-20 font-serif text-[220px] leading-none text-[#682e36]/[0.04] sm:text-[320px]">
          L
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-3xl text-center"
        >
          <p className="text-[10px] tracking-[0.28em] text-[#682e36] sm:text-xs">
            THE LÚNA PHILOSOPHY
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">
            Less, but <i className="font-normal text-[#682e36]">better.</i>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#625850] sm:text-base">
            Inspired by the warmth of the Mediterranean, LÚNA celebrates
            thoughtful choices, beautiful textures and a more personal
            approach to everyday style. Because true elegance never needs
            to shout.
          </p>
          <a
            href="#collection"
            className="mt-8 inline-flex border-b border-[#682e36] pb-2 text-[10px] tracking-[0.18em] text-[#682e36] transition-colors hover:text-[#9b555b]"
          >
            FIND YOUR FAVOURITES ↗
          </a>
        </motion.div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="px-5 py-20 text-center sm:px-10 sm:py-24">
        <p className="text-[10px] tracking-[0.28em] text-[#682e36] sm:text-xs">
          YOUR NEXT FAVOURITE STARTS HERE
        </p>
        <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-6xl">
          A little something
          <br />
          <i className="font-normal text-[#682e36]">just for you.</i>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#76665d]">
          Find your own expression of effortless Mediterranean elegance.
        </p>
        <a
          href="mailto:hello@lunafashion.example"
          className="mt-8 inline-flex items-center gap-5 bg-[#682e36] px-7 py-4 text-[10px] tracking-[0.18em] text-white transition duration-300 hover:bg-[#432027]"
        >
          GET IN TOUCH <span>↗</span>
        </a>
        <p className="mt-4 text-[10px] text-[#76665d]">
          Demo contact address — replace before launch.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-[#211b18] px-5 py-10 text-white sm:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <a
            href="#home"
            className="font-serif text-3xl tracking-[0.12em]"
          >
            LÚNA<span className="text-[#c58b8b]">.</span>
          </a>

          <p className="text-center text-[9px] leading-5 tracking-[0.15em] text-white/60">
            A FASHION BOUTIQUE CONCEPT
            <br />
            DESIGNED WITH INTENTION
          </p>

          <a
            href="#home"
            className="text-[10px] tracking-[0.15em] text-white/80 transition-colors hover:text-white"
          >
            BACK TO TOP ↑
          </a>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/15 pt-5 text-center text-[9px] tracking-[0.12em] text-white/50">
          © 2026 LÚNA FASHION · PORTFOLIO CONCEPT
        </div>
      </footer>
    </main>
  );
}
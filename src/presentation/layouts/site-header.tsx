"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

import { mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[box-shadow,background,border-color] duration-300",
        "liquid-glass-nav",
        scrolled && "liquid-glass-nav--scrolled",
      )}
    >
      <p className="sr-only">
        <a href="#main-content" className="focus:not-sr-only">
          Saltar al contenido principal
        </a>
      </p>
      <div className="section-container relative z-10 flex h-16 items-center justify-between gap-4">
        <Link
          href="#hero"
          className="font-heading text-sm font-semibold tracking-tight md:text-base"
          onClick={() => setOpen(false)}
        >
          {siteConfig.author.name.split(" ").slice(0, 2).join(" ")}
          <span className="text-gradient">.</span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Principal"
        >
          {mainNavigation.slice(1, 7).map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/8 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "hidden sm:inline-flex",
            )}
          >
            Contacto
          </Link>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "liquid-glass-nav-panel lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav
          className="section-container relative z-10 flex flex-col gap-1 py-4"
          aria-label="Móvil"
        >
          {mainNavigation.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="rounded-lg px-3 py-3 text-sm text-foreground hover:bg-white/8"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

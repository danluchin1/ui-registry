"use client";

import Image from "next/image";
import * as React from "react";
import { Input } from "@my-better-t-app/ui/components/input";
import {
  Check,
  ChevronDown,
  MessageCircle,
  Phone,
  Plane,
  Search,
  Star,
  User,
} from "lucide-react";

import { Button } from "@my-better-t-app/ui/components/button";
import {
  Card,
  CardBadge,
  CardDescription,
  CardFooter,
  CardHeader,
  CardMedia,
  CardPrice,
  CardTitle,
} from "@my-better-t-app/ui/components/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@my-better-t-app/ui/components/dropdown-menu";

const languages = [
  { code: "RO", label: "Română" },
  { code: "RU", label: "Русский" },
  { code: "EN", label: "English" },
  { code: "UK", label: "Українська" },
] as const;

const countries = [
  { name: "Moldova", currency: "EUR", symbol: "€" },
  { name: "România", currency: "EUR", symbol: "€" },
  { name: "United States", currency: "USD", symbol: "$" },
  { name: "United Kingdom", currency: "GBP", symbol: "£" },
  { name: "Germany", currency: "EUR", symbol: "€" },
] as const;

const travelDeals = [
  {
    title: "Hotel Miramar",
    location: "Varna, Bulgaria",
    badge: "Hotel",
    badgeVariant: "default" as const,
    rating: 4,
    price: 978,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
  },
  {
    title: "City Break Paris",
    location: "Paris, France",
    badge: "City Break",
    badgeVariant: "success" as const,
    rating: 5,
    price: 450,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop",
  },
  {
    title: "Pachet Dubai",
    location: "Dubai, UAE",
    badge: "Pachet",
    badgeVariant: "info" as const,
    rating: 5,
    price: 1250,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop",
  },
];

export function IflyShowcase() {
  const [activeTab, setActiveTab] = React.useState("flights");
  const [language, setLanguage] = React.useState("RO");
  const [country, setCountry] = React.useState("Moldova");

  const tabs: Array<{
    id: string;
    label: string;
    icon?: typeof Plane;
  }> = [
    { id: "flights", label: "Bilete de avion", icon: Plane },
    { id: "vacations", label: "Vacanțe" },
    { id: "hotels", label: "Hoteluri" },
  ];

  return (
    <div className="min-h-full bg-background">
      {/* Hero section */}
      <section className="bg-brand-hero px-4 py-6 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <span className="text-2xl font-bold tracking-tight">linkair.md</span>
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="success" size="sm">
                <Phone />
                Sună acum 24/7
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline-hero" size="sm">
                    {country} • € EUR
                    <ChevronDown className="opacity-80" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[520px] p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <DropdownMenuLabel className="px-0 pb-2">
                        Limbă
                      </DropdownMenuLabel>
                      {languages.map((lang) => (
                        <DropdownMenuItem
                          key={lang.code}
                          onClick={() => setLanguage(lang.code)}
                          className="justify-between"
                        >
                          {lang.label}
                          {language === lang.code
                            ? <Check className="size-4 text-primary" />
                            : (
                              <span className="text-xs text-muted-foreground">
                                {lang.code}
                              </span>
                            )}
                        </DropdownMenuItem>
                      ))}
                    </div>
                    <div>
                      <DropdownMenuLabel className="px-0 pb-2">
                        Țara și Valuta
                      </DropdownMenuLabel>
                      {countries.map((c) => (
                        <DropdownMenuItem
                          key={c.name}
                          onClick={() => setCountry(c.name)}
                          className="justify-between"
                        >
                          {c.name}
                          {country === c.name
                            ? <Check className="size-4 text-primary" />
                            : (
                              <span className="text-xs text-muted-foreground">
                                {c.currency} {c.symbol}
                              </span>
                            )}
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="secondary" size="sm">
                <User />
                Profil
              </Button>
            </div>
          </div>

          <h1 className="mb-6 text-center text-3xl font-bold md:text-4xl">
            Caută bilete de avion ieftine
          </h1>

          <div className="mb-6 flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "pill-active" : "pill"}
                size="sm"
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon && <tab.icon />}
                {tab.label}
              </Button>
            ))}
          </div>

          <div className="mx-auto flex max-w-3xl flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex-1 rounded-2xl bg-white p-4 text-foreground shadow-lg">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs text-muted-foreground">Zbor din</p>
                  <Input placeholder="Chișinău (RMO)"/>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Aterizare în</p>
                  <Input placeholder="Paris (CDG)" />
                </div>
              </div>
            </div>
            <Button variant="glass" size="xl" className="sm:min-w-[200px]">
              Caută Bilete
              <Search />
            </Button>
          </div>
        </div>
      </section>

      {/* Button variants */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="mb-4 text-lg font-semibold">Button variants</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">
            <MessageCircle />
            WhatsApp
          </Button>
          <Button variant="glass" className="bg-primary/80">
            Glass
          </Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>

      {/* Travel cards */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="mb-4 text-lg font-semibold">Travel cards</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {travelDeals.map((deal) => (
            <Card key={deal.title}>
              <CardMedia>
                <Image
                  src={deal.image}
                  alt={deal.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute left-3 top-3">
                  <CardBadge variant={deal.badgeVariant}>
                    {deal.badge}
                  </CardBadge>
                </div>
                <div className="absolute right-3 top-3">
                  <CardBadge variant="rating">
                    <Star className="size-3 fill-yellow-400 text-yellow-400" />
                    {deal.rating}
                  </CardBadge>
                </div>
              </CardMedia>
              <CardHeader>
                <CardTitle>{deal.title}</CardTitle>
                <CardDescription>{deal.location}</CardDescription>
              </CardHeader>
              <CardFooter>
                <CardPrice amount={deal.price} />
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* FAB */}
      <Button
        variant="success"
        size="icon-lg"
        className="fixed bottom-6 right-6 shadow-lg"
        aria-label="WhatsApp"
      >
        <MessageCircle className="size-6" />
      </Button>
    </div>
  );
}

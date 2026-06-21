"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GEMSTONES } from "@/lib/gemstones";
import { cn } from "@/lib/utils";

const TYPES = ["All", ...Array.from(new Set(GEMSTONES.map((g) => g.type)))];

export default function CollectionPage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return GEMSTONES.filter((gem) => {
      const matchesSearch =
        search === "" ||
        gem.name.toLowerCase().includes(search.toLowerCase()) ||
        gem.type.toLowerCase().includes(search.toLowerCase()) ||
        gem.origin.toLowerCase().includes(search.toLowerCase());
      const matchesType = typeFilter === "All" || gem.type === typeFilter;
      return matchesSearch && matchesType;
    });
  }, [search, typeFilter]);

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 luxury-gradient">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Private Portfolio"
            title="The Collection"
            subtitle="A curated portfolio of museum-grade and investment-grade natural gemstones. Available by private inquiry only."
          />
        </div>
      </section>

      <section className="section-padding !pt-0 bg-primary-black">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-gold/50"
                size={18}
              />
              <Input
                placeholder="Search by name, type, or origin..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <SlidersHorizontal size={16} />
              Filters
            </Button>
          </div>

          <div
            className={cn(
              "flex flex-wrap gap-2 mb-12",
              !showFilters && "hidden md:flex"
            )}
          >
            {TYPES.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setTypeFilter(type)}
                className={cn(
                  "px-4 py-2 text-xs uppercase tracking-[0.15em] border transition-all duration-300",
                  typeFilter === type
                    ? "border-luxury-gold bg-luxury-gold/10 text-luxury-gold"
                    : "border-luxury-gold/20 text-text-primary/50 hover:border-luxury-gold/40"
                )}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filtered.map((gem) => (
              <Link
                key={gem.slug}
                href={`/collection/${gem.slug}`}
                className="group luxury-card overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={gem.image}
                    alt={gem.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="gold">{gem.availability}</Badge>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-luxury-gold/70">
                      {gem.type}
                    </p>
                    <h3 className="font-heading text-xl text-ivory mt-1 group-hover:text-luxury-gold transition-colors">
                      {gem.name}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs text-text-primary/50">
                    <div>
                      <span className="text-luxury-gold/60">Carat</span>
                      <p>{gem.carat} ct</p>
                    </div>
                    <div>
                      <span className="text-luxury-gold/60">Origin</span>
                      <p>{gem.origin.split(",")[0]}</p>
                    </div>
                    <div>
                      <span className="text-luxury-gold/60">Color</span>
                      <p>{gem.color}</p>
                    </div>
                    <div>
                      <span className="text-luxury-gold/60">Clarity</span>
                      <p>{gem.clarity}</p>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-luxury-gold/10 flex justify-between items-center">
                    <span className="text-xs text-text-primary/40">
                      {gem.certification}
                    </span>
                    <span className="text-xs uppercase tracking-[0.15em] text-luxury-gold group-hover:underline">
                      Request Details
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-text-primary/50 py-20">
              No gemstones match your search criteria.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

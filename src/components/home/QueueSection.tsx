"use client";

import { useState } from "react";
import BarberCard from "./BarberCard";
import BookingModal from "./BookingModal";
import { barbers } from "@/data/barbers";
import { Barber } from "@/types/barber";

export default function QueueSection() {
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);

  return (
    <section
      id="barbers"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <h2 className="mb-12 text-center text-4xl font-bold">
        Meet Our Barbers
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {barbers.map((barber) => (
          <BarberCard
            key={barber.id}
            barber={barber}
            onJoin={setSelectedBarber}
          />
        ))}
      </div>

      {selectedBarber && (
        <BookingModal
          open={true}
          barberId={selectedBarber.id}
          barberName={selectedBarber.name}
          onClose={() => setSelectedBarber(null)}
        />
      )}
    </section>
  );
}
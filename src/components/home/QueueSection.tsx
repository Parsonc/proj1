import BarberCard from "./BarberCard";
import { barbers } from "@/data/barbers";

export default function QueueSection() {
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
          <BarberCard key={barber.id} barber={barber} />
        ))}
      </div>
    </section>
  );
}
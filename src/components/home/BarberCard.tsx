import Image from "next/image";
import { Barber } from "@/types/barber";

interface Props {
  barber: Barber;
}

export default function BarberCard({ barber }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-yellow-400">
      <div className="relative h-72">
        <Image
          src={barber.image}
          alt={barber.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-3 p-6">
        <h2 className="text-2xl font-bold">{barber.name}</h2>

        <p className="text-yellow-400">{barber.specialty}</p>

        <div className="flex justify-between text-zinc-300">
          <span>Queue</span>
          <span>{barber.queue}</span>
        </div>

        <div className="flex justify-between text-zinc-300">
          <span>Wait</span>
          <span>{barber.wait} mins</span>
        </div>

        <button className="mt-4 w-full rounded-lg bg-yellow-400 py-3 font-semibold text-black transition hover:bg-yellow-300">
          Join Queue
        </button>
      </div>
    </div>
  );
}
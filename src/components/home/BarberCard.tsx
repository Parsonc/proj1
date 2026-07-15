"use client";
import Image from "next/image";
import { Barber } from "@/types/barber";
import { useQueue } from "@/context/QueueContext";

interface Props {
  barber: Barber;
  onJoin: (barberId: Barber) => void;
}

export default function BarberCard({ barber, onJoin }: Props) {
  const { queues } = useQueue();
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-yellow-400">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={barber.image}
          alt={barber.name}
          fill
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 25vw"
          className="object-cover"
        />
      </div>

      <div className="space-y-3 p-6">
        <h2 className="text-2xl font-bold">{barber.name}</h2>

        <p className="text-yellow-400">{barber.specialty}</p>

        <div className="flex justify-between text-zinc-300">
          <span>Queue</span>
          <span>{queues[barber.id]}</span>
        </div>

        <div className="flex justify-between text-zinc-300">
          <span>Wait</span>
          <span>{queues[barber.id] * 15} mins</span>
        </div>

        <button
          type="button"
          onClick={() => onJoin(barber)}
          className="mt-4 w-full rounded-lg bg-yellow-400 py-3 font-semibold text-black transition hover:bg-yellow-300"
        >
          Join Queue
        </button>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { Reservation } from "@/types/reservation";
import { useQueue } from "@/context/QueueContext";

interface Props {
  open: boolean;
  barberId: number;
  barberName: string;
  onClose: () => void;
}

export default function BookingModal({
  open,
  barberId,
  barberName,
  onClose,
}: Props) {
  const { register, handleSubmit, reset } = useForm<Reservation>();
  const { joinQueue } = useQueue();

  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

 const [queuePosition, setQueuePosition] = useState<number | null>(null);

 function onSubmit(data: Reservation) {
   const position = joinQueue(barberId);
   console.log("Returned position:", position);

   setQueuePosition(position);

   console.log({
     ...data,
     barberId,
     queuePosition: position,
 });

   setSubmitted(true);
 }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
      <div className="w-full max-w-md rounded-2xl bg-zinc-900 p-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Join {barberName}'s Queue
          </h2>

          <button type= "button" onClick={onClose}>
            <X />
          </button>
        </div>

        {submitted ? (
          <div className="space-y-4 py-8 text-center">
            <h3 className="text-3xl font-bold text-green-400">
              Booking Confirmed!
            </h3>

            <p className="text-lg">
              Your queue number is:
            </p>

            <div className="mx-auto w-24 rounded-xl bg-yellow-400 py-4 text-4xl font-black text-black">
              {queuePosition}
            </div>

             <p className="text-zinc-300">
               Estimated wait: {queuePosition ? queuePosition * 15 : 0} minutes
             </p>

            <button
              type="button"
              onClick={() => {
                reset();
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 rounded-lg bg-yellow-400 px-6 py-3 font-bold text-black"
           >
            Done
           </button>
        </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <input
              {...register("name")}
              placeholder="Full Name"
              className="w-full rounded-lg bg-zinc-800 p-3"
            />

            <input
              {...register("phone")}
              placeholder="Phone Number"
              className="w-full rounded-lg bg-zinc-800 p-3"
            />

            <select
              {...register("service")}
              className="w-full rounded-lg bg-zinc-800 p-3"
            >
              <option>Haircut</option>
              <option>Beard Trim</option>
              <option>Hot Towel Shave</option>
              <option>VIP Package</option>
            </select>

            <button
              className="w-full rounded-lg bg-yellow-400 py-3 font-bold text-black"
            >
              Confirm Booking
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
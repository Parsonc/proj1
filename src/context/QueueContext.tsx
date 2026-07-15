"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Queue = {
  [barberId: number]: number;
};

interface QueueContextType {
  queues: Queue;
  joinQueue: (barberId: number) => number;
}

const QueueContext = createContext<QueueContextType | null>(null);

export function QueueProvider({ children }: { children: ReactNode }) {
  const [queues, setQueues] = useState<Queue>({
    1: 3,
    2: 2,
    3: 5,
    4: 1,
  });

  function joinQueue(barberId: number) {
    const nextPosition = queues[barberId] + 1;

    setQueues((prev) => ({
      ...prev,
      [barberId]: prev[barberId] + 1,
    }));

    return nextPosition;
  }

  return (
    <QueueContext.Provider value={{ queues, joinQueue }}>
      {children}
    </QueueContext.Provider>
  );
}

export function useQueue() {
  const context = useContext(QueueContext);

  if (!context) {
    throw new Error("useQueue must be used inside QueueProvider");
  }

  return context;
}
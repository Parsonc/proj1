import { Barber } from "@/types/barber";

export const barbers: Barber[] = [
  {
    id: 1,
    name: "Dre",
    image: "/barbers/dre.jpg",
    queue: 2,
    wait: 20,
    specialty: "Skin Fade",
  },
  {
    id: 2,
    name: "Mike",
    image: "/barbers/mike.jpg",
    queue: 5,
    wait: 50,
    specialty: "Beards",
  },
  {
    id: 3,
    name: "Chris",
    image: "/barbers/chris.jpg",
    queue: 1,
    wait: 10,
    specialty: "Kids Cuts",
  },
  {
    id: 4,
    name: "Jay",
    image: "/barbers/jay.jpg",
    queue: 3,
    wait: 30,
    specialty: "Luxury Grooming",
  },
];
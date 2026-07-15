import { Scissors, Sparkles, UserRound, Crown } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Haircuts",
    description: "Classic and modern cuts tailored to your style.",
  },
  {
    icon: UserRound,
    title: "Beard Grooming",
    description: "Professional trims and beard shaping.",
  },
  {
    icon: Sparkles,
    title: "Hot Towel Shave",
    description: "Relax with a traditional hot towel shave.",
  },
  {
    icon: Crown,
    title: "VIP Experience",
    description: "Premium grooming with refreshments and priority service.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <h2 className="mb-4 text-center text-4xl font-bold">
        Our Services
      </h2>

      <p className="mx-auto mb-12 max-w-2xl text-center text-zinc-400">
        Premium grooming services delivered by experienced professionals.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-yellow-400"
          >
            <service.icon
              size={40}
              className="mb-6 text-yellow-400"
            />

            <h3 className="mb-3 text-2xl font-semibold">
              {service.title}
            </h3>

            <p className="text-zinc-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
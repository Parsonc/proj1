export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-6xl font-bold tracking-widest">
          DRE'S BARBERSHOP
        </h1>

        <p className="mt-6 text-xl text-zinc-400">
          Premium Cuts. Premium Experience.
        </p>

        <button className="mt-10 rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400">
          Reserve Your Spot
        </button>
      </section>
    </main>
  )
}
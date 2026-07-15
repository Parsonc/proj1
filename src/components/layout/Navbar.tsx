export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold tracking-[0.3em] text-yellow-400">
          DRE'S
        </h1>

        <div className="hidden gap-8 md:flex">
          <a href="#">Home</a>
          <a href="#barbers">Barbers</a>
          <a href="#queue">Queue</a>
          <a href="#contact">Contact</a>
          <a href="#services">Services</a>
        </div>
        <a
          href="#barbers"
          className="rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-black transition hover:bg-yellow-300"
      >
        Reserve
      </a>
      </div>
    </nav>
  );
}
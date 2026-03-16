export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#ffefd6_0%,_#f4d9b6_30%,_#553118_100%)] text-slate-900">
      <main className="mx-auto w-full max-w-5xl px-4 py-6 md:px-8 md:py-8">
        <div className="rounded-3xl border border-amber-200 bg-[#2e1b10] p-5 text-white shadow-xl md:p-8">
          <nav className="flex flex-wrap items-center justify-between gap-3 text-sm font-medium text-amber-100">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-amber-300/20 text-center text-xs font-bold leading-8 text-amber-100">P</div>
              <span className="font-semibold">Pottery Studio</span>
            </div>
            <div className="hidden gap-4 md:flex">
              <a href="#" className="transition hover:text-amber-200">Home</a>
              <a href="#about" className="transition hover:text-amber-200">About</a>
              <a href="#classes" className="transition hover:text-amber-200">Workshop</a>
              <a href="#contact" className="transition hover:text-amber-200">Contact</a>
            </div>
            <button className="rounded-full border border-amber-200 px-3 py-1.5 text-xs font-semibold text-amber-100 hover:bg-amber-200/20">
              Search
            </button>
          </nav>

          <section className="mt-5 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Intro to Creating Pottery</p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-white md:text-5xl">Create Beautiful Pottery, Step by Step.</h1>
              <p className="mt-3 text-sm leading-7 text-amber-100 md:text-base">
                Join hands-on pottery classes for beginners and makers. Learn wheel throwing, glazing, and sculpting from expert ceramic artists.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-600" href="#enroll">Join Now</a>
                <a className="rounded-full border border-amber-200 bg-white/10 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:bg-white/20" href="#classes">View Classes</a>
              </div>
              <div className="mt-4 rounded-2xl border border-amber-200/30 bg-black/20 p-3 text-xs text-amber-100">
                <p className="font-semibold">Virtual class via Zoom • Lifetime video access</p>
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-[#59341f] via-[#4f2c17] to-[#301b0f] p-4 text-white">
              <div className="h-44 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/hands-potter-creating-earthen-jar_181624-58400.jpg')" }}></div>
              <div className="mt-3 space-y-1 text-sm text-amber-100">
                <p className="font-semibold">Wheel Throwing</p>
                <p>Hands-on teaching with step-by-step demos.</p>
                <div className="flex gap-2 text-[11px] text-amber-200">
                  <span className="rounded-full bg-amber-700/30 px-2 py-0.5">Beginner</span>
                  <span className="rounded-full bg-amber-700/30 px-2 py-0.5">Small Group</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section id="classes" className="mt-5 grid gap-3 md:grid-cols-3">
          {[
            ["Clay Basics", "2-hour class, beginners welcome"],
            ["Glaze Art", "Master color mixing and finishes"],
            ["Handbuilding", "Sculpt forms with slab & coil techniques"],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl border border-amber-200 bg-white p-4 shadow-sm text-slate-800">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-600">{title}</p>
              <p className="mt-2 text-sm leading-6">{desc}</p>
            </div>
          ))}
        </section>

        <section id="about" className="mt-4 rounded-3xl bg-white p-4 shadow-md text-slate-800 md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-xl font-bold">Hands-on Pottery Workshops</h2>
              <p className="mt-1 text-sm text-slate-600">Small classes, personal guidance, and projects you can keep.</p>
            </div>
            <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-900">From ₹25/class</span>
          </div>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {[
              ["Wheel Throwing", "Learn cups, bowls, and vases on the potter’s wheel."],
              ["Creative Glaze", "Design colorful finishes and texture effects."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-xl border border-amber-200 p-3">
                <p className="font-semibold text-slate-800">{title}</p>
                <p className="mt-1 text-sm text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <footer id="contact" className="mt-5 rounded-3xl bg-[#2e1b10] p-4 text-white md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold">Ready to make your first pot?</h3>
              <p className="text-sm text-amber-100">Reserve your seat and get a free clay kit.</p>
            </div>
            <a className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600" href="#">
              Book Workshop
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Hero() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">

      {/* Hero */}
      <section className="grid items-start gap-8 border-b border-[#D8CCB9] pb-20 md:grid-cols-2">

        {/* Left Side */}
        <div>
          <h1 className="font-serif text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Books
            <br />
            worth
            <br />
            keeping.
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-7 text-[#55504A]">
            Find your next favorite book, and the people who'll argue about it
            with you.
          </p>

          <button className="mt-8 rounded-md bg-[#171717] px-7 py-4 text-sm font-medium text-[#F4E9D8] hover:bg-[#333333]">
            Explore books
          </button>
        </div>

        {/* Right Side */}
        <div className="flex justify-start md:justify-center">
          <div className="relative w-full max-w-sm">

            {/* Small Label */}
            <div className="absolute -right-3 -top-3 z-10 rounded-full bg-[#D95745] px-4 py-2 text-xs font-bold text-[#171717] shadow-md">
              New this week
            </div>

            {/* Book */}
            <div className="relative rotate-[-2deg] shadow-2xl">

              {/* Spine */}
              <div className="absolute left-0 top-0 h-full w-3 bg-[#C89122]" />

              {/* Book Cover */}
              <div className="aspect-[3/4] bg-[#E3A92B] p-8 pl-10">
                <div className="flex h-full flex-col justify-between border-2 border-[#171717] p-6">

                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#171717]">
                    MARGIN EDITIONS
                  </p>

                  <div>
                    <h2 className="font-serif text-4xl font-bold leading-[1.08] text-[#171717] md:text-5xl">
                      The
                      <br />
                      Margin
                      <br />
                      Reader
                    </h2>

                    <div className="my-6 h-px w-16 bg-[#171717]" />

                    <p className="text-sm leading-6 text-[#171717]">
                      Stories, ideas,
                      <br />
                      conversations.
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* Shop / Gather / Create */}
      <section className="grid gap-10 py-16 md:grid-cols-3">

        <div>
          <p className="text-sm font-medium text-[#55504A]">
            01
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold">
            Shop
          </h2>

          <p className="mt-4 leading-7 text-[#55504A]">
            Find books worth adding to your shelf, from timeless stories to
            new ideas.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-[#55504A]">
            02
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold">
            Gather
          </h2>

          <p className="mt-4 leading-7 text-[#55504A]">
            Join book clubs, meet readers, and share what you're reading.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-[#55504A]">
            03
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold">
            Create
          </h2>

          <p className="mt-4 leading-7 text-[#55504A]">
            Build reading lists and keep track of the books you want to read.
          </p>
        </div>

      </section>

    </main>
  );
}

export default Hero;
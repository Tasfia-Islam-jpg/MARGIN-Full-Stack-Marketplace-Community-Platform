function Navbar() {
  return (
    <nav className="border-b border-[#D8CCB9] bg-[#F4E9D8]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold tracking-tight text-[#171717]"
        >
          MARGIN
        </a>

        {/* Navigation */}
        <div className="hidden gap-8 text-sm font-medium md:flex">
          <a href="#shop" className="transition-opacity hover:opacity-60">
            Shop
          </a>

          <a href="#clubs" className="transition-opacity hover:opacity-60">
            Book Clubs
          </a>

          <a href="#about" className="transition-opacity hover:opacity-60">
            About
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          <a
            href="#login"
            className="hidden text-sm md:block"
          >
            Login
          </a>

          <a
            href="#signup"
            className="rounded-md bg-[#171717] px-4 py-2 text-sm font-medium text-[#F4E9D8] hover:bg-[#333333]"
          >
            Sign Up
          </a>

          {/* Cart */}
          <a
            href="#cart"
            aria-label="Cart"
            className="relative"
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="9" cy="20" r="1" />
              <circle cx="19" cy="20" r="1" />
              <path d="M3 4h2l2.5 12h12L21 8H6" />
            </svg>

            {/* Cart Count */}
            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#E94B3C] px-1 text-[11px] font-bold text-[#171717]">
              0
            </span>
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar
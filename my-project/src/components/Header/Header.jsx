export default function Header() {
  return (
    <>
      <header className="mb-[48px] pt-10 w-full h-screen bg-[url('AFTUOQ8K_2.png')] bg-cover bg-center bg-blend-overlay text-[#FAFAE8] shadow-md">

        <div className="inset-0 bg-black/20" />

        {/* نوار بالایی (Navbar) */}
        <div className="relative z-20 bg-black max-w-7xl mx-auto px-20 py-4 flex items-center justify-between rounded-xl">
          {/* لوگو و منو */}
          <div className="flex items-center gap-10 hover:cursor-pointer">
            <div className="text-2xl font-bold tracking-wide flex items-center gap-2.5">
              <img className="" src="./public/Layer_2.png" alt="hicon" />
              Ticketor
            </div>

            <nav className="hidden md:flex space-x-6 text-sm font-medium">
              <a href="#" className="hover:text-yellow-400 transition">
                Movies
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                Cinemas
              </a>
            </nav>
          </div>

          {/* آیکون‌ها و دکمه‌های سمت راست */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-yellow-400 transition">
              <img src="./public/searchico.png" alt="search" />
            </button>
            <button className="text-gray-200 px-4 py-1 rounded-md text-sm font-semibold flex items-center gap-2 hover:text-gray-400 transition">
              <img src="./public/loginico.png" alt="login" />
              Login
            </button>
            <button className="text-yellow-300 px-4 py-1 rounded-md text-sm font-semibold flex items-center gap-2 hover:text-yellow-500 transition">
              <img src="./public/signupico.png" alt="signup" />
              Sign up
            </button>
          </div>
        </div>

        {/* بخش وسط صفحه (Hero Content) */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            BOOK YOUR MOVIE
            <br />
            TICKETS NOW!
          </h1>

          <p className="text-lg text-gray-200 max-w-xl">
            Watch The Latest Movies At Your Favorite Cinemas
          </p>

          {/* دکمه‌ها */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors">
              Explore Movies →
            </button>
            <button className="text-white hover:text-yellow-400 transition-colors">
              Find Cinema
            </button>
          </div>
        </div>
        {/* بخش آمار پایین */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-wrap justify-center items-center gap-12 text-center text-white/90 text-lg font-semibold">
          <div>
            <p className="text-2xl font-bold">500+</p>
            <p className="text-sm">Movies Available</p>
          </div>
          <div>
            <p className="text-2xl font-bold">150+</p>
            <p className="text-sm">Cinema Locations</p>
          </div>
          <div>
            <p className="text-2xl font-bold">1M+</p>
            <p className="text-sm">Happy Customers</p>
          </div>
        </div>
        <div className="absolute bottom-[-48px] bg-[#0E0E11] w-full h-12 flex items-center justify-center bg-[radial-gradient(35.69%_311.63%_at_47.22%_72.37%,rgba(179,213,229,0.3)_0%,rgba(179,213,229,0)_100%)]">Special Offer: Buy 2 tickets, get 1 FREE! Valid this weekend only.<a>Learn More</a></div>
      </header>
    </>
  );
}

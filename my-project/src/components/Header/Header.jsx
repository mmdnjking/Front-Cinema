export default function Header() {
  return (
    <>
      <header className="w-full bg-gray-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wide">Ticketor</div>
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#" className="hover:text-yellow-400 transition">
              خانه
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              فیلم‌ها
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              سینماها
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              تماس با ما
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-yellow-400 transition">
              btn
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-1 rounded-md text-sm font-semibold">
              ورود / ثبت‌نام
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

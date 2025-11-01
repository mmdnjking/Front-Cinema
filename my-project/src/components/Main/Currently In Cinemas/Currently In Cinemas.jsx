import CurrentlyInCinemasCart from "./Currently In Cinemas Cart";

export default function CurrentlyInCinemas() {
  return (
    <>
      <section className="container flex flex-col gap-2 px-[103px] mt-0">
        <h3 className=" text-[32px] font-medium">Currently In Cinemas</h3>
        <div className="flex justify-between">
          <p className="text-xl">
            Discover the latest movies now playing in cinemas — Book
            yourticketstoday!
          </p>
          <a className="flex items-center gap-2" href="#">
            View All
            <svg
              className="size-[18px]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 col-auto mt-4 gap-3
        sm:    md:grid-cols-2   lg:grid-cols-3    xl:grid-cols-4  2xl:grid-cols-5   " >
          <CurrentlyInCinemasCart />
          <CurrentlyInCinemasCart />
          <CurrentlyInCinemasCart />
          <CurrentlyInCinemasCart />
          <CurrentlyInCinemasCart />
        </div>
      </section>
    </>
  );
}

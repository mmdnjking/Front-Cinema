export default function BookTickets() {
  return (
    <>
      <section className="container px-20 flex flex-col gap-8">
        <div className="flex w-full bg-[#1A1A1F] border border-[#1A1A1F] rounded-[16px]">
          <img
            className="w-1/2 "
            src="/Images/Main/Book_Ticket/poster.png"
            alt="image"
          />
          <div
            className="h-100% w-1/2
           px-16 flex flex-col justify-center gap-15"
          >
            <div className="flex flex-col h-fit gap-3">
              <h4 className="text-[32px] font-medium max-w-3/4">
                Book Tickets To Your Favorite Movies Online
              </h4>
              <p className="w-full h-fit text-xl">
                Get A Sneak Peek At The Most Popular Current Movie Trailers And
                Be The First To Know About The Hottest Upcoming Releases
              </p>
            </div>
            <div className="flex h-fit items-center gap-2">
              <button className="hover:cursor-pointer hover:bg-yellow-300 flex flex-row justify-center gap-2 items-center px-5 py-1 h-12  bg-[#FCFC65] rounded-lg text-black font-medium">
                Book Movie Ticket
              </button>
              <button className="hover:cursor-pointer border border-2 border-[#FCFC65] flex flex-row justify-center gap-2 items-center px-5 py-1 h-12  bg-none rounded-lg text-[#FCFC65] font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div
          className="grid grid-cols-2 gap-10
        sm:    md:grid-cols-3   lg:grid-cols-4  w-full  xl:grid-cols-5  2xl:grid-cols-6  justify-between items-center"
        >
          <img
            className=""
            src="\Images\Main\Book_Ticket\netflix.png"
            alt="Disney"
          />
          <img
            className=""
            src="\Images\Main\Book_Ticket\showmax.png"
            alt="Disney"
          />
          <img
            className=""
            src="\Images\Main\Book_Ticket\disney.png"
            alt="Disney"
          />
          <img
            className=""
            src="\Images\Main\Book_Ticket\imdb.png"
            alt="Disney"
          />
          <img
            className=""
            src="\Images\Main\Book_Ticket\rottentomatoes.png"
            alt="Disney"
          />
          <img
            className=""
            src="\Images\Main\Book_Ticket\primevideo.png"
            alt="Disney"
          />
        </div>
      </section>
    </>
  );
}

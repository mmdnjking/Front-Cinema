import NowShowingcard from "./Now Showingcard";

export default function NowShowing() {
  return (
    <>
      <section className="container flex items-center justify-center">
        <div className="mx-auto max-w-full px-4 flex flex-col gap-4 items-center">
          <h3 className="text-center w-[700px] text-[42px] flex items-center justify-center">
            NOW SHOWING WITH FESTIVALS , SCREENINGS AND SPECIAL OFFERS
          </h3>
          <p className="text-center w-1/2 text-xl flex items-center justify-center">
            Unique film events and limited-time offers — don’t miss what’s
            coming next.
          </p>

          <div className="flex gap-4">
            <NowShowingcard />
            <NowShowingcard />
          </div>
        </div>
      </section>
    </>
  );
}

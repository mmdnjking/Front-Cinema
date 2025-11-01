export default function NowShowingcard() {
  return (
    <>
      <div className="bg-[url('/Images/Main/Now_Showing/Nsh2.png')] bg-cover bg-center h-64 box-border flex flex-col justify-between  p-[30px] gap-[27px] w-[608px] h-[363px]  border border-[#1A1A1F] rounded-[16px]">
        <button className="flex flex-row justify-center items-center px-5 py-1  w-max bg-[#FDFD9E] rounded-lg text-black font-medium">
          Limit time
        </button>
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-3">
            <h4 className="text-5xl w-1/2 font-medium">Student Discount</h4>
            <p className="text-xl">
              <spa className="text-[#3DB1B1]">50% off</spa> all weekday matinee
              show
            </p>
          </div>
          <div>
            <button className="hover:cursor-pointer hover:bg-yellow-300 flex flex-row justify-center gap-2 items-center px-5 py-1 h-12  bg-[#FCFC65] rounded-lg text-black font-medium">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

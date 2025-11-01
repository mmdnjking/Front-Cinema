export default function ComingSooncart() {
  return (
    <>
      <div className="flex flex-col gap-1 rounded border border-gray-800">
        <img
          src="\Images\Main\Coming_Soon\Sinners.png"
          alt=""
        />
        <div className="flex flex-col gap-2 p-2.5">
          <div className="flex justify-between">
            <span className="text-[16px]">Sinners</span>
            <span className="flex items-center gap-2">
              <img src="\Images\History.png" alt="Clock" className="size-4.5" />
              2h 2m
            </span>
          </div>
          <span className="text-[10.5px] font-light">Action, Horror</span>
          <div className="flex justify-between">
            <span className="text-[#FFFFC4] text-[10.5px] font-light">
              Releases April 17, 2025
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

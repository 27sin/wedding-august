import imgBg from "./hero/bg.svg";
import imgOutline from "./hero/outline-left.svg";
import imgOutlineRight from "./hero/outline-right.svg";
import imgLine from "./hero/line.svg";
import imgIcon from "./hero/icon.svg";

function Barcode() {
  const bars = [2, 1, 4, 3, 1, 2, 4, 1, 2, 2, 4, 4, 2, 2, 1, 1, 2, 2, 3, 3, 1, 1, 1];
  return (
    <div className="absolute left-[623px] top-[230px] flex h-[12px] items-center gap-[2px]">
      {bars.map((w, i) => (
        <div key={i} className="h-full shrink-0 bg-[rgba(255,255,255,0.56)]" style={{ width: `${w}px` }} />
      ))}
    </div>
  );
}

function TicketBg() {
  return (
    <div className="absolute left-0 top-0 h-[257px] w-[768px]">
      <div className="absolute left-0 top-0 h-[257px] w-[768px]">
        <div className="absolute inset-[-3.11%_-2.6%_-9.34%_-1.56%]">
          <img alt="" className="block size-full max-w-none" src={imgBg} />
        </div>
      </div>
      <div className="absolute left-[26px] top-[11.7px] h-[233.596px] w-[519px]">
        <img alt="" className="absolute inset-0 block size-full max-w-none" src={imgOutline} />
      </div>
      <div className="absolute left-[591px] top-[12px] h-[233px] w-[157px]">
        <img alt="" className="absolute inset-0 block size-full max-w-none" src={imgOutlineRight} />
      </div>
      <div className="absolute left-[571px] top-[32px] flex h-[193px] w-0 items-center justify-center">
        <div className="rotate-90 flex-none">
          <div className="relative h-0 w-[193px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <img alt="" className="block size-full max-w-none" src={imgLine} />
            </div>
          </div>
        </div>
      </div>
      <Barcode />
    </div>
  );
}

function LeftContent() {
  return (
    <div className="flex w-[223px] flex-col items-start">
      <div className="flex h-[8px] w-full items-start justify-center">
        <div className="flex gap-[8px]">
          <div className="size-[8px] shrink-0 rounded-full bg-[#b4c5a5]" />
          <div className="size-[8px] shrink-0 rounded-full bg-[#b4c5a5]" />
          <div className="size-[8px] shrink-0 rounded-full bg-[#b4c5a5]" />
        </div>
      </div>

      <div className="w-full pt-[24px]">
        <p className="w-full text-center font-['Playfair_Display'] text-[24px] font-medium leading-[32px] tracking-[0.6px] text-white">
          Приглашение
          <br />
          на свадебное торжество
        </p>
        <div className="flex flex-col items-center pt-[40px]">
          <div className="h-px w-[128px] bg-gradient-to-r from-[#525834] via-[#b4c5a5] to-[#525834]" />
        </div>
      </div>

      <div className="w-full pt-[16px]">
        <p className="w-full text-center font-['Playfair_Display'] text-[0px] font-medium text-white">
          <span className="text-[40px] leading-[54px]">
            Максим
            <br />
          </span>
          <span className="text-[40px] leading-[54px] text-[#b4c5a5]">
            &
            <br />
          </span>
          <span className="text-[40px] leading-[54px]">Оксана</span>
        </p>
      </div>

      <div className="flex w-full justify-center pt-[24px]">
        <img alt="" className="h-[20px] w-[80px]" src={imgIcon} />
      </div>

      <div className="w-full pt-[12px]">
        <p className="w-full text-center font-['Playfair_Display'] text-[24px] font-medium leading-[32px] tracking-[0.6px] text-white">
          Ресторан Шале, Москва
        </p>
      </div>
    </div>
  );
}

function TicketStubDetails() {
  return (
    <div className="flex w-[192px] flex-col items-center justify-center gap-[12px]">
      <div className="flex w-full flex-col gap-[7px]">
        <p className="text-center font-['Open_Sans'] text-[14px] leading-[20px] text-white opacity-70">Дата</p>
        <p className="text-center font-['Open_Sans'] text-[24px] font-semibold leading-[28px] text-white">29 августа</p>
      </div>

      <div className="h-px w-[96px] bg-[rgba(255,255,255,0.2)]" />

      <div className="flex w-full flex-col gap-[7px]">
        <p className="text-center font-['Open_Sans'] text-[14px] leading-[20px] text-white opacity-70">Время</p>
        <p className="text-center font-['Open_Sans'] text-[24px] font-semibold leading-[28px] text-white">15:00</p>
      </div>
    </div>
  );
}

function TicketContent() {
  return (
    <div className="absolute left-0 top-0 h-[257px] w-[768px]">
      <div className="absolute left-[40px] top-[18px] flex h-[223px] w-[467px] items-center justify-center">
        <div className="-rotate-90 flex-none">
          <LeftContent />
        </div>
      </div>

      <div className="absolute left-[576px] top-[16px] flex w-[192px] pb-[24px]">
        <p className="w-full text-center font-['Playfair_Display'] text-[15px] font-semibold leading-[28px] text-[rgba(255,255,255,0.75)]">
          Ваш билет
        </p>
      </div>

      <div className="absolute left-[603px] top-[33px] flex h-[192px] w-[132px] items-center justify-center">
        <div className="-rotate-90 flex-none">
          <TicketStubDetails />
        </div>
      </div>
    </div>
  );
}

function Ticket() {
  return (
    <div className="relative h-[257px] w-[768px]">
      <TicketBg />
      <TicketContent />
    </div>
  );
}

export default function Section() {
  return (
    <div className="flex h-full w-full items-center justify-center px-6">
      <div className="relative h-[768px] w-[257px] shrink-0 origin-center scale-[min(1,calc((100vw-48px)/257),calc((816px-48px)/768))]">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90">
          <Ticket />
        </div>
      </div>
    </div>
  );
}

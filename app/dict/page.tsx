import Image from "next/image";

const Header = () => {
  return (
    <header className="relative m-5">
      <Image
        src="/images/logo/Logo.png"
        alt="평명"
        width={80}
        height={30}
        style={{ objectFit: "contain" }}
        priority
      />
    </header>
  );
};

const Section = () => {
  const hideScroll =
    "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";
  const subtitle = "text-2xl text-[#767676]";

  const recentItem = `relative pl-3 pr-7 py-0.5 mt-1 mr-1.5
  border border-[#949494] rounded-full
  shrink-0`;
  const recentItemText = "text-left text-lg text-[#767676]";
  const recentItemRemove = `absolute right-1.5 top-1/2 -translate-y-1/2`;

  const example = [
    {
      text: "고구마",
    },
    {
      text: "마그네슘",
    },
    {
      text: "명절",
    },
    {
      text: "호박죽",
    },
    {
      text: "고릴라",
    },
  ];

  return (
    <section className="mx-4">
      <div id="title-container" className="mt-20">
        <h1
          id="title"
          className="text-4xl text-center font-bold text-[#767676]"
        >
          국민 사전
        </h1>
      </div>

      <div id="search-container" className="mt-8 flex justify-center">
        <input
          type="text"
          className="w-full h-11
          pl-2
          border border-[#949494] rounded-sm"
        />
      </div>

      <div id="recent-container" className="mt-4 flex flex-col">
        <h2 id="recent-subtitle" className={subtitle}>
          최근 검색어
        </h2>

        <div
          id="recent-item-card"
          className={`mt-2 w-full overflow-x-auto
          flex flex-nowrap ${hideScroll}`}
        >
          {example.map((item, index) => (
            <div className={recentItem} key={index}>
              <div className={recentItemText}>{item.text}</div>

              <div className={recentItemRemove}>
                <svg width="12" height="12" viewBox="0 0 7 7" fill="none">
                  <path
                    d="M0.109795 5.93877C0.0394933 5.86844 0 5.77308 0 5.67364C0 5.57421 0.0394933 5.47884 0.109795 5.40852L2.4963 3.02202L0.109795 0.635517C0.0414857 0.564791 0.00368782 0.470065 0.00454223 0.371741C0.00539664 0.273417 0.0448353 0.179363 0.114363 0.109835C0.183891 0.0403072 0.277945 0.000868583 0.376269 1.4176e-05C0.474593 -0.000840231 0.569319 0.0369576 0.640045 0.105267L3.02654 2.49177L5.41305 0.105267C5.48377 0.0369576 5.5785 -0.000840231 5.67682 1.4176e-05C5.77514 0.000868583 5.8692 0.0403072 5.93873 0.109835C6.00825 0.179363 6.04769 0.273417 6.04855 0.371741C6.0494 0.470065 6.0116 0.564791 5.94329 0.635517L3.55679 3.02202L5.94329 5.40852C6.0116 5.47924 6.0494 5.57397 6.04855 5.67229C6.04769 5.77062 6.00825 5.86467 5.93873 5.9342C5.8692 6.00373 5.77514 6.04317 5.67682 6.04402C5.5785 6.04487 5.48377 6.00708 5.41305 5.93877L3.02654 3.55227L0.640045 5.93877C0.569722 6.00907 0.474357 6.04856 0.37492 6.04856C0.275484 6.04856 0.180118 6.00907 0.109795 5.93877Z"
                    fill="#949494"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="today-word-container" className="mt-10 flex flex-col">
        <div className={subtitle}>오늘의 어휘</div>
      </div>

      <div id="popular-word-container" className="mt-10 flex flex-col">
        <div className={subtitle}>오늘의 인기 검색 단어</div>
      </div>
    </section>
  );
};

export default function Dict() {
  return (
    <div className="w-full h-full border border-transparent">
      <Header />
      <Section />
    </div>
  );
}

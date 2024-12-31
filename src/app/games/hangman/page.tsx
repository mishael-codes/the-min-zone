const Hangman = () => {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="relative w-1/3 h-full border border-blue-500">
          <div className="text-5xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <div className="head">😁</div>
            <div className="relative">
              <div className="absolute -top-1 left-[27px] flex flex-col items-center justify-center">
                <span>|</span>
                <span>|</span>
              </div>
              <div className="absolute left-[14px] top-6">
                <span>/</span>
                <span>\</span>
              </div>
              <div className="absolute left-[14px] top-[86px]">
                <span>/</span>
                <span>\</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 relative w-full h-full border border-red-500">
          <strong className="absolute top-5 right-5 text-xl">00:00</strong>
          <div className="border border-oraange-500">
            {/*category of word*/}Country in Asia
          </div>
          <div className="text-orange-500">
            ___ ___ ___ ___ ___ ___ ___ ___ ___ ___
          </div>
          <div>{/*keyboard a-z qwerty*/}</div>
          <div>{/*lives left*/}</div>
        </div>
      </div>
    </>
  );
};
export default Hangman;

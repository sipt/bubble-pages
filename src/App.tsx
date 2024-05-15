import "./App.css";
import screenShort from "./assets/SCR-20240204-kc0.png";
import icon from "./assets/icon-white.svg";
import colorIcon from "./assets/icon-color.svg";
import twitter from "./assets/Twitter.svg";
import telegram from "./assets/Telegram.svg";
import apple from "./assets/apple.svg";
import windows from "./assets/windows.svg";

function App() {
  return (
    <div className="flex flex-col text-white h-full">
      <div className="flex h-[64px] py-[12px] px-[16px] md:px-[64px] w-full items-center justify-between">
        <div className="flex flex-row">
          <img className="h-[32px]" src={icon} alt="screen short" />
          <div className="font-bold text-white text-2xl ml-4">ChatHarvest</div>
        </div>
        <div className="flex flex-row gap-2">
          <a href="https://twitter.com/sipt_wu">
            <img className="h-[32px] w-[32px]" src={twitter} />
          </a>
          <a href="https://t.me/+dn8dvhHALP9lZmFl">
            <img className="h-[32px] w-[32px]" src={telegram} />
          </a>
        </div>
      </div>
      <div className="w-full flex-grow flex flex-col mb-10  items-center justify-center">
        <div className=" max-w-[1250px] flex md:flex-row flex-col justify-start md:justify-between md:mx-[100px]">
          <div className="flex flex-col justify-center items-center md:items-start  my-[64px] md:my-0 gap-[16px]">
            <div className="mx-5 max-w-[500px] flex flex-col gap-[16px] items-center md:items-start">
              <img src={colorIcon} className="h-[64px] w-[64px]" />
              <p className="md:text-5xl text-2xl font-bold">ChatHarvest</p>
              <p className="md:text-xl">
                Cultivate Your Curiosity, Spark Conversations, Reap Knowledge.
              </p>
            </div>
          </div>
          <div className="max-w-[700px]">
            <img src={screenShort} alt="screen short" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center flex-grow">
          <div className="rounded-full bg-theme px-5 py-2 flex flex-row items-center gap-2">
            <img src={apple} />
            <span className="font-bold">macOS</span>
            <a
              href="https://apps.sipt.top/ChatHarvest-1.1.0-amd64.dmg"
              className="bg-black/30 hover:bg-black/20 px-3 py-2 rounded-lg cursor-pointer"
            >
              Intel
            </a>
            <a
              href="https://apps.sipt.top/ChatHarvest-1.1.0-arm64.dmg"
              className="bg-black/30 hover:bg-black/20 px-3 py-2 rounded-lg cursor-pointer"
            >
              Apple silicon
            </a>
          </div>
          <a
            href="https://apps.sipt.top/ChatHarvest-1.1.0%20Setup.exe"
            className="rounded-full bg-theme px-5 py-4 flex flex-row items-center gap-2 w-fit"
          >
            <img src={windows} />
            <span className="font-bold">Windows</span>
          </a>
        </div>
      </div>
      <div className="min-h-[64px] w-full flex flex-row items-center justify-between px-[16px] md:px-[64px]">
        <span>©2023 ChatHarvest</span>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </div>
  );
}

export default App;

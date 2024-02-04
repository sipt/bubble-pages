import "./App.css";
import screenShort from "./assets/SCR-20240204-kc0.png";
import icon from "./assets/icon-white.svg";

function App() {
  return (
    <div className="flex flex-col text-white h-full">
      <div className="flex h-[64px] py-[12px] px-[64px] w-full items-center">
        <img className="h-[25px]" src={icon} alt="screen short" />
        <div className="font-bold text-white text-2xl ml-4">ChatHarvest</div>
      </div>
      <div className="w-full flex-grow flex">
        <div className="w-full md:h-[500px] flex md:flex-row flex-col-reverse justify-end md:justify-between md:mx-[100px]">
          <div className="flex flex-col justify-center">
            <div className="mx-5 max-w-[500px]">
              <p className="md:text-5xl text-2xl font-bold">ChatHarvest</p>
              <p className="md:text-xl my-5">
                Cultivate Your Curiosity, Spark Conversations, Reap Knowledge.
              </p>
            </div>
          </div>
          <div className="max-w-[700px]">
            <img src={screenShort} alt="screen short" />
          </div>
        </div>
      </div>
      <div className="h-[64px] w-full flex flex-row items-center px-[64px]">
        <span>©2023 ChatHarvest</span>
      </div>
    </div>
  );
}

export default App;

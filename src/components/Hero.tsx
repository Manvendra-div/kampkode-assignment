import OrbitingCircles from "./ui/orbiting-circles";
import htmlImg from "../assets/html.svg";
import cssImg from "../assets/css.svg";
import gitlabImg from "../assets/gitlab.svg";
import reactImg from "../assets/react.svg";
import awsImg from "../assets/aws.svg";
import flutterImg from "../assets/flutter.svg";
import androidImg from "../assets/android.svg";
import jsImg from "../assets/js.svg";
import notionImg from "../assets/notion.svg"
import githubImg from "../assets/github.svg"
import octopusImg from "../assets/octopus.svg"
export default function Hero() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center relative overflow-hidden">
      <div className="min-w-[630px] min-h-[630px] md:w-[1454px] md:h-[1452px] border-[1px] border-dashed border-[#BDB4FE] rounded-full flex justify-center items-center">
        <div className="min-w-[518px] min-h-[518px] md:w-[1193px] md:h-[1193px] border-[1px] border-dashed border-[#BDB4FE] rounded-full flex justify-center items-center">
          <div className="min-w-[456px] min-h-[456px] md:w-[1050px] md:h-[1050px] border-[1px] border-dashed border-[#BDB4FE] rounded-full flex justify-center items-center">
            <div className="min-w-[369px] min-h-[369px] md:w-[850px] md:h-[850px] border-[1px] border-dashed border-[#BDB4FE] rounded-full flex justify-center items-center">
              <div className="min-w-[294px] min-h-[294px] md:w-[676px] md:h-[676px] border-[1px] border-dashed border-[#BDB4FE] rounded-full flex justify-center items-center">
                <div className="min-w-[205px] min-h-[205px] md:w-[474px] md:h-[474px] border-[1px] border-dashed border-[#BDB4FE] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <OrbitingCircles
        className="size-[75px] border-none bg-transparent block md:hidden"
        duration={20}
        delay={20}
        radius={316}
      >
        <img src={notionImg} alt="" className="z-20"/>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[75px] border-none bg-transparent block md:hidden"
        duration={20}
        delay={20}
        radius={256}
        reverse
      >
        <img src={githubImg} alt="" className="z-20"/>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[75px] border-none bg-transparent block md:hidden"
        duration={20}
        delay={20}
        radius={228}
      >
        <img src={androidImg} alt="" className="z-20"/>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent block md:hidden"
        duration={20}
        delay={20}
        radius={184}
        reverse
      >
        <img src={octopusImg} alt="" className="z-20"/>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[54px] border-none bg-transparent block md:hidden"
        duration={20}
        delay={20}
        radius={184}
        reverse
      >
        <img src={reactImg} alt="" className="z-20"/>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[75px] border-none bg-transparent block md:hidden"
        duration={20}
        delay={20}
        radius={147}
      >
        <img src={gitlabImg} alt="" className="z-20"/>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent hidden md:block"
        duration={20}
        delay={20}
        radius={237}
      >
        <span> </span>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[162px] border-none bg-transparent hidden md:block"
        duration={50}
        delay={20}
        radius={338}
      >
        <img src={cssImg} alt="" className="z-20" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[173px] border-none bg-transparent hidden md:block"
        duration={100}
        delay={20}
        radius={338}
      >
        <img src={gitlabImg} alt="" className="z-20" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[125px] border-none bg-transparent hidden md:block"
        duration={50}
        delay={20}
        radius={425}
        reverse
      >
        <img src={reactImg} alt="" className="z-20" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[173px] border-none bg-transparent hidden md:block"
        duration={100}
        delay={20}
        radius={425}
        reverse
      >
        <img src={awsImg} alt="" className="z-20" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[123px] border-none bg-transparent hidden md:block"
        duration={60}
        delay={20}
        radius={525}
      >
        <img src={flutterImg} alt="" className="z-20" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[173px] border-none bg-transparent hidden md:block"
        duration={80}
        delay={20}
        radius={525}
      >
        <img src={androidImg} alt="" className="z-20" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[173px] border-none bg-transparent hidden md:block"
        duration={100}
        delay={20}
        radius={525}
      >
        <img src={jsImg} alt="" className="z-20" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[173px] border-none bg-transparent hidden md:block"
        duration={100}
        delay={20}
        radius={596.5}
        reverse
      >
        <img src={htmlImg} alt="" className="z-20" />
      </OrbitingCircles>
      <div className="font-inter absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30 w-[90%] min-h-[60vh] md:min-h-[40vh] text-center flex flex-col justify-between items-center">
        <span className="text-4xl md:text-6xl font-semibold">
          We’ve really sped up our workflow
        </span>
        <div className="flex flex-col justify-between items-center h-[25vh] md:h-[25%] text-[18px] md:text-sm md:w-[64%] ">
          <span className="text-[#475467]">
            <span className="font-bold">We’ve just released a new update!</span>
            Check out the all new dashboard view. Pages and now load faster.you
            can try us for free for 30 days.
          </span>
          <span className="text-[#475467]">
            Join 4,000+ companies already growing
          </span>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full md:w-auto md:space-x-4">
          <button className="w-full md:w-fit flex justify-center items-center space-x-2 border-[1px] border-[#D0D5DD] shadow-xs shadow-[#1018280D] action-btn rounded-[8px] text-sm md:text-base bg-white">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.675 9H0.5V7H12.675L7.075 1.4L8.5 0L16.5 8L8.5 16L7.075 14.6L12.675 9Z"
                fill="#1D1B20"
              />
            </svg>
            <span className="text-[#344054]">Start Learning Today</span>
          </button>
          <button className="w-full md:w-fit flex justify-center items-center space-x-2 border-[1px] border-[#BDB4FE] shadow-xs shadow-[#1018280D] action-btn rounded-[8px] bg-[#7F6EFC] text-white mb-2 md:mb-0">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}

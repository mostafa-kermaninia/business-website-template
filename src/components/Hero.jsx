import styles from "../style";
import { robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
    return (
        <section
            id="home"
            className={`flex md:flex-row flex-col ${styles.paddingY}`}
        >
            {/* بخش چپ: متن‌ها (ورود از چپ) */}
            <div
                className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 animate-slide-in-left`}
            >
                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                        The Next <br className="sm:block hidden" />{" "}
                        <span className="text-gradient">Generation</span>{" "}
                    </h1>
                    <div className="ss:flex hidden md:mr-4 mr-0">
                        <a
                            href="https://t.me/MOMIS_studio"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GetStarted />
                        </a>
                    </div>
                </div>
                <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
                    of Web3 Games.
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    MOMIS studio specializes in creating innovative software and
                    games, focusing on Telegram mini-apps and TON-based
                    solutions that redefine digital interaction.
                </p>
            </div>

            {/* بخش راست: تصویر (ورود از راست) */}
            <div
                className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative animate-slide-in-right`}
            >
                <img
                    src={robot}
                    alt="billing"
                    className="w-[100%] h-[100%] relative z-[5]"
                />
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            </div>

            {/* دکمه Get Started برای موبایل */}
            <div className={`ss:hidden ${styles.flexCenter}`}>
                <a href="https://t.me/MOMIS_studio" target="_blank" rel="noopener noreferrer">
                    <GetStarted />
                </a>
            </div>
        </section>
    );
};

export default Hero;
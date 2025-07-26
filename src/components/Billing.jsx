import React from "react";
import { Button } from "./Button";
import { math, card } from "../assets"; // مطمئن شوید عکس‌ها را دارید
import styles, { layout } from "../style";

const Products = () => {
    return (
        // سکشن اصلی با یک عنوان کلی و جذاب
        <section id="services" className={`${styles.paddingY} flex-col relative`}>
            {/* عنوان اصلی بخش محصولات */}
            <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                <h2 className={styles.heading2}>
                    Explore Our <br className="sm:block hidden" /> Digital Creations
                </h2>
                <div className="w-full md:mt-0 mt-6">
                    <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                        We craft engaging games and applications that run smoothly on the Web3 platform, bringing new experiences to users everywhere.
                    </p>
                </div>
            </div>

            {/* کانتینر برای کارت‌های محصولات */}
            <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1]">
                
                {/* --- کارت بازی اول: ریاضی --- */}
                <div className="flex flex-col p-6 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feature-card">
                    <img src={math} alt="Math Game" className="w-full h-auto rounded-[10px] object-cover mb-5" />
                    <h4 className="font-poppins font-semibold text-white text-[20px] leading-[30px] mb-2">
                        Speed Math Challenge
                    </h4>
                    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-4">
                        Test your speed and accuracy by solving math problems in our exciting Telegram mini-game.
                    </p>
                    <a href="https://t.me/Momis_game_bot" target="_blank" rel="noopener noreferrer" className="mt-auto">
                        <Button text="Play Math Game" />
                    </a>
                </div>

                {/* --- کارت بازی دوم: حافظه --- */}
                <div className="flex flex-col p-6 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feature-card">
                    <img src={card} alt="Color Memory Game" className="w-full h-auto rounded-[10px] object-cover mb-5" />
                    <h4 className="font-poppins font-semibold text-white text-[20px] leading-[30px] mb-2">
                        Color Sequence Memory
                    </h4>
                    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-4">
                        Memorize the sequence of colors and repeat it to score high in this addictive mini-game.
                    </p>
                    <a href="https://t.me/color_memory_bot" target="_blank" rel="noopener noreferrer" className="mt-auto">
                        <Button text="Play Color Memory" />
                    </a>
                </div>

                {/* می‌توانید محصولات بعدی را هم به همین شکل اینجا اضافه کنید */}

            </div>
        </section>
    );
};

// اگر نام فایل را به Products.jsx تغییر دادید، اینجا را هم اصلاح کنید
export default Products;
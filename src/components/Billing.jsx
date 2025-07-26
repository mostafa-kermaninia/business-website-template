import React from "react";
// Button را هم اضافه می‌کنیم چون بخش دوم به آن نیاز دارد
import { Button } from "./Button"; 
import { math } from "../assets"; // عکس بازی ریاضی
import { card } from "../assets"; // عکس بازی حافظه که قبلا در CardDeal بود
import styles, { layout } from "../style";

const Billing = () => {
    return (
        // یک سکشن اصلی برای هر دو بازی با شناسه (id) مناسب
        <section id="games" className={`${layout.section} flex-col md:flex-row`}>
            
            {/* ------------ بخش اول: بازی ریاضی (چپ) ------------ */}
            <div className={`${layout.sectionInfo} flex-1 mr-0 md:mr-10 mb-10 md:mb-0`}>
                <h2 className={styles.heading2}>
                    Speed Math Challenge <br className="sm:block hidden" /> on
                    Telegram
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Test your speed and accuracy by solving math problems in our
                    exciting Telegram mini-game. Compete with others, earn
                    points, and win prizes in special events.
                </p>
                <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                    <a
                        href="https://t.me/Momis_game_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/* می‌توانید به جای عکس، از کامپوننت Button استفاده کنید
                          که ظاهر یکدست‌تری به سایت می‌دهد. 
                        */}
                        <Button text="Play Math Game" />
                    </a>
                </div>
                {/* <img src={math} alt="Math Game" className="w-full h-auto mt-6 rounded-[20px]" /> */}
            </div>

            {/* ------------ بخش دوم: بازی حافظه (راست) ------------ */}
            <div className={`${layout.sectionInfo} flex-1 ml-0 md:ml-10`}>
                <h2 className={styles.heading2}>
                    Test Your Memory <br className="sm:block hidden" /> With
                    Color Sequence
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Memorize the sequence of colors and repeat it perfectly to
                    score high in this addictive Telegram mini-game. How long
                    can your memory last?
                </p>
                <a
                    href="https://t.me/color_memory_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button text="Play Color Memory" styles="mt-10" />
                </a>
                 {/* <img src={card} alt="Color Memory Game" className="w-full h-auto mt-6 rounded-[20px]" /> */}
            </div>
            
        </section>
    );
};

export default Billing;
import React from "react";
import { about_icon } from "../assets"; // می‌توانید این تصویر را بعدا عوض کنید
import styles, { layout } from "../style";
import Button from "./Button"; // دکمه Get Started را وارد می‌کنیم

const AboutUs = () => {
    return (
        // از ساختار دو ستونی استاندارد تمپلیت استفاده می‌کنیم
        <section id="about" className={layout.sectionReverse}>
            {/* ستون راست: تصویر */}
            <div className={layout.sectionImgReverse}>
                <img
                    src={about_icon}
                    alt="MOMIS studio"
                    className="w-[50%] h-[50%] relative z-[5]"
                />
                {/* گرادینت‌های پس‌زمینه برای زیبایی */}
                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
            </div>

            {/* ستون چپ: متن توضیحات */}
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    The Minds Behind <br className="sm:block hidden" /> The
                    Games
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    MOMIS studio is a passionate team of developers and creators
                    dedicated to exploring the new frontiers of digital
                    entertainment. We specialize in building engaging Telegram
                    mini-apps and innovative games on the TON blockchain. Our
                    mission is to deliver seamless and fun experiences that
                    connect users in the decentralized world.
                </p>

                {/* <a href="mailto:momis.studio.org@gmail.com" className="mt-10">
                    <Button text="Connect Us" styles="mt-10" />{" "}
                </a> */}
            </div>
        </section>
    );
};

export default AboutUs;

import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
    <div
        className={`flex flex-row p-6 rounded-[20px] ${
            index !== features.length - 1 ? "mb-6" : "mb-0"
        } feature-card`} // کلاس اصلی کارت اینجاست
    >
        <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
        >
            <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                {title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                {content}
            </p>
        </div>
    </div>
);

const Business = () => {
    return (
        // بخش اصلی Services که حالا شناسه درست دارد
        <section id="services" className={layout.section}>
            {/* ستون چپ (متن) با انیمیشن ورود از چپ */}
            <div className={`${layout.sectionInfo} animate-slide-in-left`}>
                <h2 className={styles.heading2}>
                    Innovative Solutions <br className="sm:block hidden" /> for the Web3 Era
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    With a strong focus on quality and user experience, we
                    develop custom software and games that thrive on the Web3
                    ecosystem, helping you engage your audience in new and exciting ways.
                </p>
                <div className="mt-10">
                    <a href="mailto:momis.studio@gmail.com">
                        <Button text="Get Started" />
                    </a>
                </div>
            </div>

            {/* ستون راست (کارت‌ها) با انیمیشن ورود از راست */}
            <div className={`${layout.sectionImg} flex-col animate-slide-in-right`}>
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Business;
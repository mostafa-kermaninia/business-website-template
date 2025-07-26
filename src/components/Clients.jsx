import React from "react";
import { clients } from "../constants";
import styles, { layout } from "../style"; // layout را هم import می‌کنیم

const Clients = () => {
    // چون فقط یک همکار داریم، لوگوی آن را مستقیم انتخاب می‌کنیم
    const ontonPartner = clients[0];

    return (
        // از ساختار دو ستونی استاندارد تمپلیت استفاده می‌کنیم
        <section id="partners" className={`${layout.section} animate-fade-in`}>
            {/* ستون چپ: متن توضیحات */}
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Our Strategic Partnership</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    We are proud to collaborate with ONTON, a revolutionary Web3
                    event management platform. Integrated with Telegram and
                    powered by blockchain, ONTON redefines how events are
                    experienced and managed through innovative features like NFT
                    ticketing.
                </p>
            </div>

            {/* ستون راست: لوگو */}
            <div className={`${layout.sectionImg} flex-col`}>
                <a
                    href="https://t.me/ontonlive"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={ontonPartner.logo}
                        alt="onton-partner-logo"
                        // سایز لوگو را در اینجا کوچک‌تر کرده‌ایم
                        className="sm:w-[160px] w-[100px] object-contain hover:opacity-80 transition-opacity"
                    />
                </a>
            </div>
        </section>
    );
};

export default Clients;

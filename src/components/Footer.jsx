import React from "react";
import styles from "../style";
import { logo } from "../assets"; // مطمئن شوید لوگوی MOMIS را import می‌کنید
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
    return (
        // id='about' را اینجا اضافه می‌کنیم تا لینک منو کار کند
        <section id="about" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div
                className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}
            >
                <div className="flex-1 flex flex-col justify-start mr-10">
                    <img
                        src={logo}
                        alt="momis-studio-logo"
                        // سایز لوگو را کمی متناسب‌تر می‌کنیم
                        className="w-[200px] h-auto object-contain" 
                    />
                    {/* پاراگراف توضیحات را تغییر می‌دهیم */}
                    <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
                        Crafting the next generation of digital games and applications for a decentralized world.
                    </p>
                </div>

                <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                    {footerLinks.map((link) => (
                        <div
                            key={link.title}
                            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
                        >
                            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                                {link.title}
                            </h4>
                            <ul className="list-none mt-4">
                                {link.links.map((item, index) => (
                                    <li
                                        key={item.name}
                                        className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                                            index !== link.links.length - 1 ? "mb-4" : "mb-0"
                                        }`}
                                    >
                                        <a href={item.link} target={item.link.startsWith("http") || item.link.startsWith("mailto") ? "_blank" : "_self"}>{item.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
                <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
                    Copyright © 2024 MOMIS studio. All Rights Reserved.
                </p>
                <div className="flex flex-row md:mt-0 mt-6">
                    {socialMedia.map((social, index) => (
                       <a href={social.link} key={social.id} target="_blank" rel="noopener noreferrer">
                         <img
                            src={social.icon}
                            alt={social.id}
                            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                            }`}
                        />
                       </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Footer;
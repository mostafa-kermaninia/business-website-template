import React from "react";
import styles from "../style";
import Button from "./Button";
const CTA = () => {
    return (
        <section
            className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
        >
            <div className="flex-1 flex flex-col">
                <h2 className={styles.heading2}>Have a project in mind?</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Let's build the future together. Contact us to discuss how
                    we can bring your idea to life on the Web3 platform.
                </p>
            </div>
            <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
                <a href="mailto:momis.studio.org@gmail.com">
                    <Button text="Connect Us" styles="mt-10" />
                </a>
            </div>
        </section>
    );
};

export default CTA;

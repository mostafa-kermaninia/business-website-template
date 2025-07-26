import React from "react";
import {
    Billing,
    Business,
    Clients,
    CTA,
    Footer,
    Hero,
    Navbar,
    Stats,
    AboutUs,
} from "./components";
import styles from "./style";

const App = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
            {/* Navbar به اینجا منتقل شده تا مستقل از بقیه محتوا و ثابت باشد */}
            <Navbar />

            {/* بخش Hero با یک فاصله از بالا برای نمایش صحیح زیر Navbar */}
            <div className={`bg-primary ${styles.flexStart} pt-24`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>

            {/* بقیه بخش‌های سایت */}
            <div
                className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
            >
                <div className={`${styles.boxWidth}`}>
                    <Stats />
                    <Business />
                    <Billing />
                    <Clients />
                    <AboutUs /> {/* AboutUs را به جای مناسب‌تری منتقل کردیم */}
                    <CTA />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default App;

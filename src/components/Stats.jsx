import React from 'react';
import { stats } from '../constants';
import styles from '../style';
import useCountUp from '../hooks/useCountUp';
import useInView from '../hooks/useInView'; // هوک جدید را وارد می‌کنیم

// کامپوننت کوچک برای هر آیتم آمار
const StatItem = ({ value, title, inView }) => {
  const endValue = parseInt(value.replace('+', ''));
  // فقط زمانی که بخش دیده می‌شود، شمارش را شروع کن
  const count = inView ? useCountUp(endValue, 2000) : 0;

  return (
    <div className={`flex-1 flex justify-start items-center flex-row m-3`}>
      <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>
        {count}{value.includes('+') ? '+' : ''}
      </h4>
      <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{title}</p>
    </div>
  );
};

const Stats = () => {
  // از هوک inView استفاده می‌کنیم
  const [ref, inView] = useInView({ threshold: 0.5 }); // وقتی 50% بخش دیده شد، فعال شو

  return (
    // انیمیشن fade-in را از اینجا برمی‌داریم تا با شمارش تداخل نکند
    <section ref={ref} className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <StatItem key={stat.id} value={stat.value} title={stat.title} inView={inView} />
      ))}
    </section>
  );
};

export default Stats;
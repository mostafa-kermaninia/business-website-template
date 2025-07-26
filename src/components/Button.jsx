import React from 'react';

const Button = ({ styles, text }) => {
  return (
    <button 
      type='button' 
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary 
                 outline-none ${styles} rounded-[10px] transform transition-transform duration-300 
                 hover:scale-105 hover:shadow-lg`}
    >
      {text}
    </button>
  );
};

export default Button;
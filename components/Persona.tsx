
import React, { useState, useEffect, useRef } from "react";

const divStyle = {
    marginLeft: '100px',
    marginRight: '100px',
  };
  
const Persona = () => {

    return (
        <div className="flex gap-x-2 items-center style={divStyle}">
        <p > 
        Welcome to InboxZeroine, your personal email concierge! 
        I'm here to help you navigate through your busy inbox with ease. 
        Let's focus on what matters most today. 
        For starters, you might want to ask, 'What are the emails I should reply?'
        </p>
    </div>
    );
};

export default Persona;


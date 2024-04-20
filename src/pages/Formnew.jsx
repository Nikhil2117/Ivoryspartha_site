import React, {useRef} from "react"
import { useState } from "react";
import {
    useActionData
} from "react-router-dom"
import emailjs from '@emailjs/browser';

import cateringData from "../data/catering";

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}


export default function Formnew() {
    const errorMessage = useActionData()
    let [estimatedPrice, setEstimatedPrice] = useState(0)

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current)
        fetch('/api/shutdown').then((data)=>console.log('shutdown server'))
        .catch(err=>console.log(err))
        emailjs.sendForm('service_4uf409a', 'template_4w9fuiq', form.current, 'FX41_foQcL4wjX64b') 
          .then((result) => {
              console.log(result.text);
              window.location.reload();
              window.location.replace('/')
          }, (error) => {
              console.log(error);
          });
    };
     
    async function functionEstimatedPrice(e){
      e.preventDefault();
      let number =e.target.value
      if(number < 100){
        console.log(number * cateringData.modules.cateringData[100])
        setEstimatedPrice(number * cateringData.modules.cateringData[100])
      }else if(number < 200){
        console.log(number * cateringData.modules.cateringData[200])
        setEstimatedPrice(number * cateringData.modules.cateringData[200])
      }else{
        console.log(number * cateringData.modules.cateringData[300])
        setEstimatedPrice(number * cateringData.modules.cateringData[300])
      }

    }


    return (
        <div className="login-container">
            <h1>Submit the Details !</h1>
            {errorMessage && <h3 className="red">{errorMessage}</h3>}

            <form className = 'login-form' ref={form} onSubmit={sendEmail}>
                <input 
                type="text" 
                name="user_name" 
                placeholder="Name"
                required={true}
                />
                <input 
                type="email" 
                name="user_email" 
                placeholder="Email Address" 
                required={true}
                />
                <input 
                type="tel" 
                name="phone" 
                placeholder="Phone Number" 
                required={true}
                />
                <input 
                type="text" 
                name="people" 
                placeholder="Expected People" 
                required={true}
                onChange={functionEstimatedPrice}
                />
                <input 
                type="numeric" 
                name="price" 
                placeholder="Extimated Price" 
                value={'₹ ' + estimatedPrice}
                />
                <button type="submit" value="Send"> Submit</button>
            </form>
        </div>
    )
}

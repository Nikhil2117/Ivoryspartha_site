import React, {useRef} from "react"
import {
    useNavigation,
    Form,
    redirect,
    useActionData
} from "react-router-dom"
import emailjs from '@emailjs/browser';
import makeServer from "../server/server";

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}


// export async function action({ request }) {
//     if (request) {
//         console.log(request)
//         const formData = await request.formData()
//         const emailId = formData.get("email")
//         const nameId = formData.get("name")
//         const phoneNo = formData.get("phone")
//         const cityId = formData.get("city")
//         const peopleno = formData.get("people")
//         console.log(emailId)
//         const obj = {
//             email : emailId,
//             name : nameId,
//             phone : phoneNo,
//             city : cityId,
//             people : peopleno
//         }
//         fetch('/api/sendmail',obj)
//         .then(data=>console.log(data))
//         .catch(err=> console.log(err))

//         // window. location.replace('/about')
//     }
//     return null;    
// }

export default function Formnew() {
    const errorMessage = useActionData()
    const navigation = useNavigation()
    fetch('/api/shutdown').then((data)=>console.log('shutdown server'))
    .catch(err=>console.log(err))

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_4uf409a', 'template_4w9fuiq', form.current, 'FX41_foQcL4wjX64b') 
          .then((result) => {
              console.log(result.text);
              window. location.replace('/about')
              makeServer();
          }, (error) => {
              console.log(error);
          });
    };
     
    return (
        <div className="login-container">
            <h1>Submit the Details !</h1>
            {errorMessage && <h3 className="red">{errorMessage}</h3>}

            {/* <Form
                method="post"
                className="login-form"
                replace
            >
                <input
                    name="Name"
                    type="text"
                    placeholder="Your Name"
                />
                <input
                    name="Email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="Phone"
                    type="tel"
                    placeholder="Phone Number"
                />
                <input
                    name="City"
                    type="text"
                    placeholder="City"
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="Food_prefrences"
                    type="text"
                    placeholder="Food_prefrences"
                />
                <input
                    name="People"
                    type="numeric"
                    placeholder="Expected People"
                />
                <button
                    disabled={navigation.state === "submitting"}
                >
                    {navigation.state === "submitting"
                        ? "Logging in..."
                        : "Log in"
                    }
                </button>
            </Form> */}
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

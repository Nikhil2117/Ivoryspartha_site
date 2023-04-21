import React from "react"
import {
    useNavigation,
    Form,
    redirect,
    useActionData
} from "react-router-dom"

// const nodemailer = require('nodemailer');

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}


export async function action({ request }) {
    if (request) {
        console.log(request)
        window. location.replace('/about')
    }
    return null;    
}

export default function Formnew() {
    const errorMessage = useActionData()
    const navigation = useNavigation()

    return (
        <div className="login-container">
            <h1>Submit the Details !</h1>
            {errorMessage && <h3 className="red">{errorMessage}</h3>}

            <Form
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
            </Form>
        </div>
    )
}


import React from "react"
export default function Form() {
    const [data, setData] = React.useState({
        name: '',
        email: '',
        phoneNumber: '',
        city: '',
        foodPreferences: '',
        numberOfPeople: '',
        expectedBudget: '',
        yourBudget: ''
    })
    function onSubmit(e) {
        e.preventDefault()
        alert('Submitted successfully !')
        console.log('Submitted successfully !', data)
    }

    return (
        <>
            <div className="about-page-cta">
                <h2>Send us your queries now !!</h2>
                <form className="form" onSubmit={onSubmit}>
                    <label htmlFor='name' className="form--input"> Name</label>
                    <input
                        type="text"
                        id='name'
                        required = {true}
                        autoFocus
                        placeholder="Name"
                        className="form--input"
                        name="name"
                        onChange={e => setData((prev) => {
                            data.name = e.target.value
                            return { ...prev }
                        })}
                    />
                    <label htmlFor='phone' className="form--input"> Phone Number</label>
                    <input
                        type="text"
                        id='phone'
                        required = {true}
                        autoFocus
                        placeholder="Phone Number"
                        className="form--input"
                        name="phone"
                        onChange={e => setData((prev) => {
                            data.phoneNumber = e.target.value
                            return { ...prev }
                        })}
                    />
                    <label htmlFor='email' className="form--input">Email</label>
                    <input
                        type="text"
                        id="email"
                        // required = {true}
                        autoFocus
                        placeholder="Email"
                        className="form--input"
                        name="email"
                        onChange={e => setData((prev) => {
                            data.email = e.target.value
                            return { ...prev }
                        })}
                    />
                    <label htmlFor='city' className="form--input">City</label>
                    <input
                        type="text"
                        id="city"
                        // required = {true}
                        autoFocus
                        placeholder="city"
                        className="form--input"
                        name="city"
                        onChange={e => setData((prev) => {
                            data.city = e.target.value
                            return { ...prev }
                        })}
                    />
                    <label htmlFor='food-preferences' className="form--input">Food Prefrences</label>
                    <select
                        id='food-preferences'
                        name="food-prefrences"
                        required = {true}
                        autoFocus
                        onChange={e => setData((prev) => {
                            data.foodPreferences = e.target.value
                            return { ...prev }
                        })}>
                        <option value="options">Food Prefrences</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="non-vegetarian">Non-Vegetarian</option>
                    </select>
                    <label htmlFor='people' className="form--input">Estimated People</label>
                    <select
                        id='people'
                        required = {true}
                        autoFocus
                        name="people"
                        onChange={e => setData((prev) => {
                            data.numberOfPeople = e.target.value
                            return { ...prev }
                        })}>
                        <option value="options">Estimated People</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                        <option value="400">400</option>
                        <option value="500">500</option>
                        <option value="600">600</option>
                        <option value="700">700</option>
                        <option value="800">800</option>
                        <option value="900">900</option>
                        <option value="1000">1000</option>
                    </select>
                    <label htmlFor='est-price' className="form--input">Estimated Price</label>
                    <input
                        type="text"
                        id = 'est-price'
                        placeholder="Estimated price"
                        className="form--input"
                        name="bottomText"
                        disabled={true}
                        value='Rs 1000'
                        onChange={e => setData((prev) => {
                            data.expectedBudget = e.target.value
                            return { ...prev }
                        })}
                    />
                    <label htmlFor='cust-price' className="form--input">Estimated Price</label>
                    <input
                        type="text"
                        required = {true}
                        autoFocus
                        id='cust-price'
                        placeholder="Estimated price"
                        className="form--input"
                        name="bottomText"
                        onChange={e => setData((prev) => {
                            data.yourBudget = e.target.value
                            return { ...prev }
                        })}
                    />
                    <button style={{gridTemplate:'500px'}}
                        className="form--button"
                        type="submit"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
        </>
    )
}

import fetchPay from './fetchPay'
import { useState } from 'react'
function Test() {
    const [gameName, setGameName] = useState(undefined);
    const [price, setPrice] = useState(undefined);
    const [quantity, setQuantity] = useState(undefined);
    const [description, setDescription] = useState(undefined);
    const [first_name, setFirst_name] = useState(undefined);
    const [last_name, setLast_name] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [phone_number, setPhone_number] = useState(undefined);

    const handleSubmit = () => {
        fetchPay({
            description, 
            email, 
            first_name, 
            gameName,
            last_name, 
            phone_number,
            price: +price,
            quantity, 
        })
    }

    return (
        <div>
                <div className="mb-3">
                    <input className="form-control" name="gameName" placeholder="gameName" onChange={(e) => {setGameName(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <input className="form-control" name="price" placeholder="price" onChange={(e) => {setPrice(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <input className="form-control" name="quantity" placeholder="quantity" onChange={(e) => {setQuantity(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <input className="form-control" name="description" placeholder="description" onChange={(e) => {setDescription(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <input className="form-control" name="first_name" placeholder="first_name" onChange={(e) => {setFirst_name(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <input className="form-control" name="last_name" placeholder="last_name" onChange={(e) => {setLast_name(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <input className="form-control" name="email" placeholder="email" onChange={(e) => {setEmail(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <input className="form-control" name="phone_number" placeholder="phone_number" onChange={(e) => {setPhone_number(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" onClick={handleSubmit}>Add Data</button>
                </div>
        </div>
    )
}

export default Test

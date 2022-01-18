import fetchPay from './fetchPay'
import { useState } from 'react'
import Header from '../../components/Header/Header';
import styles from './Test.module.css'
import Footer from '../../components/Footer/Footer';
import { Col, Input } from 'reactstrap'

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
        <>
        <Header/>
        <div className={styles.mainContainer}>
            <div className={styles.containerDiv}>
                <Col xs="10" sm="6" md="5" className={styles.formGroup}>
                    <p className={styles.formLbael}>Game Name</p>
                    <Input name="gameName" placeholder="gameName" onChange={(e) => {setGameName(e.target.value)}}/>
                </Col>
                <Col xs="10" sm="6" md="5" className={styles.formGroup}>
                    <p className={styles.formLbael}>price</p>
                    <Input name="price" placeholder="price" onChange={(e) => {setPrice(e.target.value)}}/>
                </Col>
                <Col xs="10" sm="6" md="5" className={styles.formGroup}>
                    <p className={styles.formLbael}>Quantity</p>
                    <Input name="quantity" placeholder="quantity" onChange={(e) => {setQuantity(e.target.value)}} />
                </Col>
                <Col xs="10" sm="6" md="5" className={styles.formGroup}>
                    <p className={styles.formLbael}>Email</p>
                    <Input name="description" placeholder="description" onChange={(e) => {setDescription(e.target.value)}} />
                </Col>
                <Col xs="10" sm="6" md="5" className={styles.formGroup}>
                    <p className={styles.formLbael}>Game Name</p>
                    <Input name="first_name" placeholder="first_name" onChange={(e) => {setFirst_name(e.target.value)}} />
                </Col>
                <Col xs="10" sm="6" md="5" className={styles.formGroup}>
                    <p className={styles.formLbael}>Game Name</p>
                    <Input name="last_name" placeholder="last_name" onChange={(e) => {setLast_name(e.target.value)}} />
                </Col>
                <Col xs="10" sm="6" md="5" className={styles.formGroup}>
                    <p className={styles.formLbael}>Game Name</p>
                    <Input name="email" placeholder="email" onChange={(e) => {setEmail(e.target.value)}} />
                </Col>
                <Col xs="10" sm="6" md="5" className={styles.formGroup}>
                    <p className={styles.formLbael}>Game Name</p>
                    <Input name="phone_number" placeholder="phone_number" onChange={(e) => {setPhone_number(e.target.value)}} />
                </Col>

                <Col xs="10" sm="6" md="5" className={styles.formGroup}>
                    <button onClick={handleSubmit} className={styles.confirmButton}>Confirm reservation</button>
                </Col>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Test

import React from 'react'
import { useState } from 'react'
// components 
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
// css
import styles from './Booking.module.css'
// libraries 
import { TimePicker } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import { Col, Row, Input } from 'reactstrap'
import { Calendar } from 'antd';

function Booking() {
    const BookingData = JSON.parse(localStorage.getItem('BookingData'))
    const gameName = BookingData['gameName']

    // for date picker from antd
    const [date, setDate] = useState(undefined)
    const [time, setTime] = useState(undefined)
    function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().startOf('day') ;
    }
    // hours that can not be selected
    function disabledHours() {
    return (
       [1,2,3,4]
    );
    }

    // set message for user after fecth
    const [message, setMessage] = useState();
    // disabke button while feching
    const [disabledButton, setDisabledButton] = useState(false);


    // handle Booking
    const hanldleBooking = () => {
    if (date && time) {
    // step 0 -- disable button while fetching
        setDisabledButton(true);
    // step 1 -- get data arranged 
        const day = JSON.stringify(date['_d']).substring(9,11);
        const month = JSON.stringify(date['_d']).substring(6,8);
        const year = JSON.stringify(date['_d']).substring(1,5);
        const monthsObject = {
            '01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr', '05': 'May', '06': 'Jun',
            '07': 'Jul', '08': 'Aug', '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec'
        }
        const monthNum = monthsObject[month]
        // data to be sent to the api
        const bookingDate = `${day}-${monthNum}-${year}` 
        const timeHour = JSON.stringify(time['_d']).substring(12,14);   
        
    // step 2 -- fetch add reservation
        if (date && time) {
        fetch("https://planetxegy.herokuapp.com/reservations/add", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            'day': bookingDate,
            'time': `${timeHour}:00`
        })
        })
        .then(async function(response) {
            const res = await response.json()
            if (res.status === true) {
                console.log('done')
                setMessage(res.message)
            }
            setDisabledButton(false);
        })       
        .catch(err => {
            console.log(err)
        })}
    }}
    
    return (
        <>
        <Header/>
            <div className={styles.mainContainer}>
                <div className={styles.containerDiv}>
                    <Col xs="10" sm="6" md="5">
                        <Row className={styles.names}>
                            <Col className={styles.formGroup}>
                                <p className={styles.formLbael}>First Name</p>
                                <Input placeholder='first name' />
                            </Col>
                            <Col className={styles.formGroup}>
                                <p className={styles.formLbael}>Last Name</p>
                                <Input placeholder='last name' />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="10" sm="6" md="5" className={styles.formGroup}>
                        <p className={styles.formLbael}>phone number</p>
                        <Input placeholder='enter your phone number' />
                    </Col>
                    <Col xs="10" sm="6" md="5" className={styles.formGroup}>
                        <p className={styles.formLbael}>Email</p>
                        <Input type='email' placeholder='enter your email' />
                    </Col>
                    <Col xs="10" sm="6" md="5" className={styles.formGroup}>
                        <p className={styles.formLbael}>Game Name</p>
                        <Input disabled={true} value={gameName} />
                    </Col>
                    <Col xs="10" sm="6" md="5" className={styles.formGroup}>
                        <p className={styles.formLbael}>Pick a date</p>
                        <Calendar 
                        fullscreen={false} 
                        onChange={ (date) => {setDate(date)} } 
                        disabledDate={disabledDate} 
                        />
                    </Col>
                    <Col xs="10" sm="6" md="5" className={styles.formGroup}>
                        <p className={styles.formLbael}>Available Time</p>
                        <TimePicker 
                        format="HH" 
                        disabledHours={disabledHours} 
                        onChange={(timeString) => {setTime(timeString)}} 
                        showNow={false} 
                        className={styles.timePicker}
                        />
                    </Col>
                    <Col xs="10" sm="6" md="5" className={styles.formGroup}>
                        <button disabled={disabledButton} onClick={hanldleBooking} className={styles.confirmButton}>Confirm reservation</button>
                    </Col>
                    <p>{message ? message : undefined}</p>
                </div>


            </div>
        <Footer/>
        </>

    )
}

export default Booking

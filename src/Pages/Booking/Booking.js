import React from 'react'
import { useState } from 'react'
// components 
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
// css
import styles from './Booking.module.css'
// libraries 
import { DatePicker, TimePicker } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';

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
    function disabledDateTime() {
    return {
        disabledHours: () => [1,2,3],
    };
    }

    if (date) {console.log(date['_d'])}
    if (time) {console.log(time)}

    return (
        <div className={styles.mainContainer} >
            <Header/>
            <p>Booking page</p>
            <p> { gameName } </p>

            <div className={styles.timeDiv}>
                <DatePicker
                format="YYYY-MM-DD"
                disabledDate={disabledDate}
                onChange={(dateString) => {setDate(dateString)}}
                showNow={false}
                />
                <TimePicker format="YYYY-MM-DD HH" disabledDateTime={disabledDateTime} onChange={setTime} showNow={false} />
            </div>

            <Footer/>
        </div>
    )
}

export default Booking

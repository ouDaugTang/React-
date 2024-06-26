import React, { useState } from 'react'
import Header from '../components/Header'

const Join = () => {
    // const[userId, setUserId] = useState('');
    // const[userPw, setUserPw] = useState('');
    // const[userPwCheck, setUserPwCheck] = useState('');
    // const[name, setName] = useState('');
    // const[email, setEmail] = useState('');

    // handleChangeUserId = (e) => {
    //     setUserId(e.target.value);
    // }
    // handleChangeUserPw = (e) => {
    //     setUserPw(e.target.value);
    // }
    // handleChangeUserPwCheck = (e) => {
    //     setUserPwCheck(e.target.value);
    // }
    // handleChangeName = (e) => {
    //     setName(e.target.value);
    // }
    // handleChangeEmail = (e) => {
    //     setEmail(e.target.value);
    // }


    return (
        <>
        <Header />
            <div className="container">
                <h1>회원가입</h1>
                <hr />
                <h2>회원가입 페이지</h2>
                <input type="text" />
            </div>
        </>
    )
}

export default Join
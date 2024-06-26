import React, { useContext } from 'react'
import { LoginContext } from '../../contexts/LoginContextProvider'
import './LoginForm.css'
const LoginForm = () => {
    const { login } = useContext(LoginContext)

    const onLogin = (e) => {
        e.preventDefault()      // 기본 이벤트 방지처리
        const form = e.target                       // form요소  name로 접근함!1 
        const username = form.username.value        // <form> 아래 input name="username" value
        const password = form.password.value        // <form> 아래 input name="password" value

        login( username, password )
    }
    return (
        <div className="form">
            <h2 className="login-title">Login</h2>

            <form className='login-form' onSubmit={ (e) => onLogin(e) }>
                <div>
                    <label htmlFor="name">username</label>
                    <input type="text"
                           id='username'
                           placeholder='username'
                           name='username'
                           autoComplete='username'
                           required
                    />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="password"
                           id='passowrd'
                           placeholder='password'
                           name='password'
                           autoComplete='password'
                           required
                    />
                </div>
                <button type='submit' className='btn btn--form btn-login'>
                    Login                    
                </button>
            </form>
        </div>
    )
}
export default LoginForm
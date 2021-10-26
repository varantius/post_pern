import React, {useContext, useState} from 'react';
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useLocation, useHistory} from "react-router-dom";

const Auth = observer(() => {

    const {user} = useContext(Context)
    const location = useLocation()
    const  history = useHistory()
    // const isLogin = false//location.pathname === "/login"
    const [loginStatus, setLoginStatus] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log(location.pathname)

    const click = async (e) => {
        try{
            e.preventDefault()
            let data
            if (loginStatus) {
                data = await login(email, password)
            } else {
                data = await registration(name, email, password)
            }
            debugger
            user.setUser(user)
            user.setIsAuth(true)

            history.push('/')
        }catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div>
            <h1>{loginStatus ? 'Auth page' : 'Registration'}</h1>
            <form>
                {loginStatus ? "" :
                    <input type="text"
                           value={name}
                           name='name'
                           onChange={(e) => setName(e.target.value)}
                           placeholder='Enter your name'
                           style={{borderWidth: '1px', display: 'block', marginBottom: '10px'}}/>
                }
                <input type="email"
                       name='email'
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       placeholder='Enter your email'
                       style={{borderWidth: '1px', display: 'block', marginBottom: '10px'}}/>
                <input type="password"
                       value={password}
                       name='password'
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder='Enter your password'
                       style={{borderWidth: '1px', display: 'block', marginBottom: '10px'}}/>
                <button type='submit' onClick={click}>Submit</button>
            </form>
            {loginStatus ?
                <button onClick={() => setLoginStatus(false)}>No account?</button>
             : <button onClick={() => setLoginStatus(true)}>Do you have account? Log in!</button>
            }
        </div>
    );
});

export default Auth;
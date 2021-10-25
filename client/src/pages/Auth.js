import React, {useContext} from 'react';
import {registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {

    const {user} = useContext(Context)

    // const click = async() => {
    //     let isLogin = false
    //     let data
    //     if(isLogin){
    //         data = await login(name, email, password)
    //     }else{
    //         data = await registration(name, email, password)
    //     }
    //
    //     user.setIsAuth(true)
    //
    // }
    return (
        <div>
            <h1>Auth page</h1>
        </div>
    );
});

export default Auth;
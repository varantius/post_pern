import React, {useContext, useEffect, useState} from 'react';
import {API} from '../http/index'
import axios from "axios";
import {Context} from "../index";
import {Link, useHistory} from "react-router-dom";
import {getAllUsers} from "../http/userAPI";
import {observer} from "mobx-react-lite";

const Main = observer( () => {
    const [loadingStatus, setLoadingStatus] = useState(false)
    const [axiosValue, setAxiosValue] = useState([])
    const [axiosFetchValue, setAxiosFetchValue] = useState([])
    const {user} = useContext(Context)

    const {users} = useContext(Context)

    const  history = useHistory()

    async function axiosData() {
        await axios.get('https://jsonplaceholder.typicode.com/todos', {
            // timeout: 50000
        }).then(res => {
            setAxiosValue(res.data)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            // console.log(axiosValue)
        })
    }

     function fetchData() {
        try {

            // console.log(users)
             getAllUsers().then((data) => {
                users.setUsers(data)
            })


            // console.log('-------------')
            // console.log({users})
            // console.log('-------------')
            // await API.get('/users')
            //     .then(res => {
            //         console.log(res)
            //         setAxiosFetchValue(res.data)
            //     })

        } catch (e) {
            console.log(e)
        }
    }

    async function allData(){
        // await Promise.all([axiosData(),fetchData()])
        // await axiosData().then( async() => await fetchData())
        setLoadingStatus(true)
        await axiosData()
        fetchData()
        setLoadingStatus(false)
    }

    const logout = () =>{
        user.setUser({})
        user.setIsAuth(false)
        history.push('/auth')
    }

    useEffect(() => {
        allData()
    },[]);

    return (
        <div>
            {
                loadingStatus ? (
                    <p>Loading... </p>
                ) : (
                    <React.Fragment>
                        <button onClick={() => logout()}>Log out</button>
                        <div style={{width: '50%', float: 'left'}}>
                            <h1>Axios</h1>
                            {
                                axiosValue.map((post, index) => (
                                        <p key={index}>{post.title}</p>
                                    )
                                )
                            }
                        </div>
                        <div style={{width: '50%', float: 'left'}}>
                        <h1>Axios fetch</h1>
                            <table>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>USER NAME</th>
                                    <th>USER EMAIL</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.getUsers.map(u => (
                                                <tr key={u.user_id}>
                                                    <td>{u.user_id}</td>
                                                    <td>{u.name}</td>
                                                    <td>{u.email}</td>
                                                </tr>
                                            )
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </React.Fragment>
                )
            }
        </div>
    );
});

export default Main;
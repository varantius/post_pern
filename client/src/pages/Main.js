import React, {useEffect, useState} from 'react';
import {API} from '../http/index'
import axios from "axios";

const Main = () => {
    const [loadingStatus, setLoadingStatus] = useState(false)
    const [axiosValue, setAxiosValue] = useState([])
    const [axiosFetchValue, setAxiosFetchValue] = useState([])

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

    async function fetchData() {
        try {
            await API.get('/users')
                .then(res => {
                    setAxiosFetchValue(res.data)
                }).then(res => {
                    // console.log(axiosFetchValue)
                })

        } catch (e) {
            console.log(e)
        }
    }

    async function allData(){
        // await Promise.all([axiosData(),fetchData()])
        // await axiosData().then( async() => await fetchData())
        setLoadingStatus(true)
        await axiosData()
        await fetchData()
        setLoadingStatus(false)
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
                        {
                            axiosFetchValue.map((user, index) => (
                                    <p key={index}>{user.name}</p>
                                )
                            )

                        }
                        </div>
                    </React.Fragment>
                )
            }

        </div>
    );
};

export default Main;
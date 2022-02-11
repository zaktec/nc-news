import React, { useEffect, useState } from 'react'
import "../App.css";
import { getMessage } from '../utils/api';

const Home = () =>  {

 const [msg, setMsg] = useState("");

    useEffect(()  => {
        getMessage().then((res)=> {
       //  console.log(res)
         setMsg(res)

        });
    },[])

    return (
        <div className='HomeCss'>
        <h1>Home </h1>
        <p>{msg}</p>
        </div>
    
    )
}
export default Home;

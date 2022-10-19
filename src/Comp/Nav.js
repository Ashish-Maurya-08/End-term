import './Nav.css';

import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
function Nav(props){

    const [user,setuser]=useState("Login");

    useEffect(()=>{
        async function getUser(){
            if(props.user){
                setuser(props.user);  
            }
            else{
                setuser("Login")
            }
        }
        getUser();
    },[props.user])
    

    return(
        <>
        <div className="Nav">
            <div className='logo'><Link to='/'>My_WORLD</Link></div>
            <div className='NavLinks'>
            <Link to="/about" id='about'>About</Link>
            <Link to="/contact" id='contact'>Contact</Link>
            <Link to="/login" id='user'>{user}</Link>
            </div>
        </div>
        </>
    )
}

export default Nav;
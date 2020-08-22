
import UserGreeting from "./UserGreeting";
import GuestGreeting from './GuestGreeting';
import React from 'react'

export default function Greeting() {

    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn) {
        return <UserGreeting/>
    }
    return <GuestGreeting/>
}


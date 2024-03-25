"use client";

import { useEffect, useState } from "react";


function AddNewUser() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleUsernameChange(e) {
        setUsername(e.target.value)
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    // We don't have to specify full URL, just api/path.
    async function handleSubmit() {
        try {
            let response = await fetch('api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username, email, password
                })
            });

            // Await the JSON parsing
            const responseData = await response.json();
            console.log(responseData);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>

            <h1 className="heading">Add new user</h1>


            <form className="text-black" onSubmit={e => e.preventDefault()}>
                <input onChange={(e) => handleUsernameChange(e)} value={username} type="text" name="username" id="username" placeholder="username" />
                <input onChange={(e) => handleEmailChange(e)} value={email} type="text" name="email" id="email" placeholder="email" />
                <input onChange={(e) => handlePasswordChange(e)} value={password} type="text" name="password" id="password" placeholder="password" />
                <button className="bg-red-500 text-black" type="submit" onClick={handleSubmit}>Submit</button>
            </form>

        </>
    );

}

export default AddNewUser;

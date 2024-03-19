import React from "react";
import { useState } from "react";
import './password.css';


const Password = ({ Copy, Generator }) => {
    const [newpassword, setnewpassword] = useState('')
    var Password = '';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const number = '1234567890';

    const handlepassword = () => {
        for (var i = 1; i <= 4; i++) {
            Password += lowercase[Math.floor(Math.random() * lowercase.length)]
            Password += number[Math.floor(Math.random() * number.length)]
            Password += uppercase[Math.floor(Math.random() * uppercase.length)]
            setnewpassword(Password)
        }
    }
    const handlecopy=()=>{
       navigator.clipboard.writeText(newpassword);
        
      
    }

    return (

        <main>
            <header>
                <h2>Generate a</h2>
                <h1>Random Password</h1>
            </header>
            <section>
                <div class="password-output">
                    <input
                        id="input"
                        className="input-box"
                        type="text"
                        placeholder="Password"
                        value={newpassword}
                    />
                    <button id="copy-password-btn">
                        <span class="material-icons">
                            <img src={Copy} onClick={handlecopy} alt="copy"/>
                        </span>
                    </button>
                </div>
                <button id="generate-password-btn" class="btn">
                    <span class="material-icons" onClick={handlepassword}>
                        <img src={Generator} className="generator-style" alt="ge"/>
                        <span>


                            Generate Password</span>
                    </span>
                </button>
            </section>
        </main>


    )
}
export default Password
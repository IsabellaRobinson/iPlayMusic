// import { Link } from "@reach/router";
import querystring from "querystring";

import LoginButton from "./Button";
import "./Login.css";

export default function Login(){

    var options = querystring.stringify({
        response_type: "code",
        client_id: "b3fd8f3764a14b34ad82ba79c5458bee",
        scope: "user-read-private user-read-email",
        redirect_uri: "http://localhost:8888/callback",
        state: "kjfwljmnvlkf"
    });



    return(
        <article className ="login">

            <div className="login_title">
                <h1>Log In</h1>
            </div>

        <form className="login_Form">
{/* USERNAME */}
            <div>
                <label htmlFor="username">Username</label>

                <input type="text" id="username" placeholder="Enter your username"/>
                <img src="./user.png" alt="user icon"/>
            </div>

{/* PASSWORD */}
            <div>
                <label htmlFor="password">Password</label>

                <input type="password" name="password" placeholder="Enter your password"/>
                <img src="./key.png" alt="user key icon"/>
            </div>


{/* LOGIN A TAG */}
        <a href={`https://accounts.spotify.com/authorize?${options}`} className="Login-a">
                <LoginButton text="LOG IN" color="black">
                </LoginButton>
            </a>
        </form>

    {/* LOGIN FINGERPRINT */}
        <div className="login_print">
            
        <a href={`https://accounts.spotify.com/authorize?${options}`}>
            <img src="./finger-print.svg" alt=""/>
        </a>
            <p>One-Touch Login</p>
        </div>

       </article>

    );
}
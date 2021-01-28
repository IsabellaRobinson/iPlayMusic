import { Link } from "@reach/router";
import LoginButton from "./Button";
import "./Login.css";

export default function Login(){

    return(
        <article className ="login">

            <div className="login_title">
                <h1>Log In</h1>
            </div>

        <form className="login_Form">
            <div>
                <label htmlFor="username">Username</label>

                <input type="text" id="username" placeholder="Enter your username"/>
                <img src="./user.png" alt="user icon"/>
            </div>

            <div>
                <label htmlFor="password">Password</label>

                <input type="password" name="password" placeholder="Enter your password"/>
                <img src="./key.png" alt="user key icon"/>
            </div>

            <Link to="/Walktrough">
                <LoginButton text="LOG IN" color="black">
                </LoginButton>
            </Link>
            
        </form>



        <div className="login_print">
            <Link to="/Walktrough">
                <img src="./finger-print.svg" alt=""/>
            </Link>
            <p>One-Touch Login</p>
        </div>

       </article>

    );
}
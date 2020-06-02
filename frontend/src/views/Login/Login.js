import React from 'react';

import {
    Link,
} from 'react-router-dom'

class Login extends React.Component {
    render() {
        return (
            <div className="Login">
                <div className="login-tab">
                    <header className="header">
                        SIGN IN
                    </header>
                    <form>
                        <input name="login" type="text" placeholder="Your Login" required />
                        <input name="password" type="password" placeholder="Your Password" required />
                    </form>
                    <button>Login</button>
                    <p>
                        <Link to="/signup">Haven not registered yet?</Link>
                    </p>
                </div>
            </div>
        );
    }
}

export default Login;

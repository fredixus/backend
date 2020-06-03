import React from 'react';

import {
    Link,
} from 'react-router-dom'

class SignUp extends React.Component {
    state = {
        
    }

    render() {
        return (
            <div className="SignUp">
                <div className="signup-card">
                    <header className="header">
                        SIGN IN
                    </header>
                    <form>
                        <input name="name" type="text" placeholder="Your Name" required />
                        <input name="surname" type="text" placeholder="Your Surname" required />
                        <input name="country" type="text" placeholder="Choose a Country" required />
                        {/* Country input is to changed on select type */}
                        <input name="email" type="email" placeholder="Email" required />
                        <input name="login" type="text" placeholder="Your Login" required />
                        <input name="password" type="password" placeholder="Your Password" required />
                    </form>
                    <button>JOIN US</button>
                </div>
            </div>
        );
    }
}

export default SignUp;

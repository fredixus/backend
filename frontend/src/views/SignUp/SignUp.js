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
                    <header className="header">SIGN UP</header>
                    <form>
                        <div>
                            <input name="name" type="text" placeholder="Your Name" required />
                            <input name="surname" type="text" placeholder="Your Surname" required />

                        </div>

                        <input name="country" type="text" placeholder="Choose a Country" required />
                        {/* Country input is to changed on select type */}
                        <input name="email" type="email" placeholder="Email" required />
                        <div>
                            <input name="login" type="text" placeholder="Your Login" required />
                            <input name="password" type="password" placeholder="Your Password" required />
                        </div>
                    </form>

                    <Link to="/login">
                        <button>JOIN US</button>
                    </Link>

                </div>
            </div>
        );
    }
}

export default SignUp;

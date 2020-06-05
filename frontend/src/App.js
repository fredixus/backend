import React from 'react';
import './App.scss';
import Login from './views/Login/Login'
import SignUp from './views/SignUp/SignUp'

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
                </Router>
            </div >
        );
    }
}

export default App;

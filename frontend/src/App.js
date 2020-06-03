import React from 'react';
import './App.scss';
import Login from './views/Login/Login'
import Welcome from './views/Welcome'

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/login" component={Login} />
                </Router>
            </div >
        );
    }
}

export default App;

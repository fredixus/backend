import React from 'react';
import './App.scss';
import Login from './views/Login/Login'

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
                </Router>
            </div >
        );
    }
}

export default App;

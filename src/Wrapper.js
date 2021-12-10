import React from "react";
import Dashboard from "./Dashboard";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import callApi from './functions/callApi';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers/';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStoreWithMiddleware(reducers);


class Wrapper extends React.Component {
    render() {
        return (
            <Provider store={store} >
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Dashboard />} />
                    </Routes>
                </Router>
            </Provider>
        );        
    }
}

export default Wrapper;
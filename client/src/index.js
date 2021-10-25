import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthStore from "./store/AuthStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new AuthStore()
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

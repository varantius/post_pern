import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthStore from "./store/AuthStore";
import UsersStore from "./store/UsersStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new AuthStore(),
        users: new UsersStore()
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

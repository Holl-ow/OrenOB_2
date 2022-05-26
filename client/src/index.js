import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import ObjectStore from './store/ObjectStore'
import UserStore from './store/UserStore'

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Context.Provider value={{
      user: new UserStore(),
      object: new ObjectStore()
    }}>
      <App />
    </Context.Provider>

  </React.StrictMode>
);



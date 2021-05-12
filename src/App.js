import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/layouts/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Provider } from 'react-redux';
import { store } from './services/index'
const App = () => {
  return (
    <div className="col-md-10">
      <Provider store={store}>
        <Switch>
          <Route path='/' render={(props) => <Header {...props} />} />
        </Switch>
      </Provider>
    </div>
  )
}

export default App

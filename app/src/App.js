import { MainProvider } from '../src/context/provider'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

import CreateCustomer from './components/CreateCustomer'
import Dashboard from './components/Dashboard'
import EditCustomer from './components/EditCustomer'
import { Login } from './components/Login'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <MainProvider>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/create' component={CreateCustomer} />
          <Route exact path='/edit/:id' component={EditCustomer} />
          <Route exact path='/login' component={Login} />
        </MainProvider>
      </Switch>
    </BrowserRouter>
  )
}

export default App

import { MainProvider } from '../src/hooks/context/provider'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import CreateCustomer from './components/CreateCustomer'
import Dashboard from './components/Dashboard'
import EditCustomer from './components/EditCustomer'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <MainProvider>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/create' component={CreateCustomer} />
          <Route exact path='/edit/:id' component={EditCustomer} />
        </MainProvider>
      </Switch>
    </BrowserRouter>
  )
}

export default App

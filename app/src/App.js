import { MainProvider } from '../src/hooks/context/provider'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import CreateCustomer from './components/CreateCustomer'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <MainProvider>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/create' component={CreateCustomer} />
        </MainProvider>
      </Switch>
    </BrowserRouter>
  )
}

export default App

import CustomersViewOnly from '../components/CustomersViewOnly'
import CustomersView from '../components/CustomersView'
import Navbar from '../components/Navbar'
import { connect } from 'react-redux'

const Dashboard = (props) => {
  const { users } = props
  console.log('users obj', Object.keys(users).length)
  console.log('users norm', users)

  return (
    <div>
      <Navbar />
      <header className='bg-white shadow'>
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold text-gray-900'>Dashboard</h1>
        </div>
      </header>
      <main>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <div className='border-4 border-dashed border-gray-200 rounded-lg h-96'>
              {users ? <CustomersView /> : <CustomersViewOnly />}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, null)(Dashboard)

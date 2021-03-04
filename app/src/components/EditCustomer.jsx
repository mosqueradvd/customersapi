import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCustomers } from '../hooks/context/provider'
import Navbar from '../components/Navbar'

const EditCustomer = () => {
  let { id } = useParams()
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [email, setEmail] = useState('')

  const custom = useCustomers()

  const updateCustomer = async (e) => {
    const body = { name: name, country: country, email: email }
    await custom.editCustomer(id, body)
    console.log('body')
    e.preventDefault()
  }

  return (
    <>
      <Navbar />
      <div className='p-11'>
        <div className='hidden sm:block' aria-hidden='true'>
          <div className='py-5'>
            <div className='border-t border-gray-200'></div>
          </div>
        </div>

        <div className='mt-10 sm:mt-0'>
          <div className='md:grid md:grid-cols-3 md:gap-6'>
            <div className='md:col-span-1'>
              <div className='px-4 sm:px-0'>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>
                  Personal Information
                </h3>
                <p className='mt-1 text-sm text-gray-600'>
                  Use a permanent address where you can receive mail.
                </p>
              </div>
            </div>
            <div className='mt-5 md:mt-0 md:col-span-2'>
              <form>
                <div className='shadow overflow-hidden sm:rounded-md'>
                  <div className='px-4 py-5 bg-white sm:p-6'>
                    <div className='grid grid-cols-6 gap-6'>
                      <div className='col-span-6 sm:col-span-3'>
                        <label
                          htmlFor='first_name'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Full name
                        </label>
                        <input
                          type='text'
                          name='full_name'
                          id='full_name'
                          autoComplete='given-name'
                          onChange={(e) => setName(e.target.value)}
                          className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        />
                      </div>

                      <div className='col-span-6 sm:col-span-4'>
                        <label
                          htmlFor='email_address'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Email address
                        </label>
                        <input
                          type='text'
                          name='email_address'
                          id='email_address'
                          autoComplete='email'
                          onChange={(e) => setEmail(e.target.value)}
                          className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        />
                      </div>

                      <div className='col-span-6 sm:col-span-3'>
                        <label
                          htmlFor='country'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Country / Region
                        </label>
                        <select
                          id='country'
                          name='country'
                          autoComplete='country'
                          onChange={(e) => setCountry(e.target.value)}
                          className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Colombia</option>
                          <option>Ialy</option>
                          <option>Spain</option>
                          <option>Swedish</option>
                          <option>Japan</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                    <button
                      type='submit'
                      className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      onClick={updateCustomer}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditCustomer

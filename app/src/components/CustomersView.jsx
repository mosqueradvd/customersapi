import { useEffect, useState } from 'react'
import { useCustomers } from '../hooks/context/provider'
import { Link } from 'react-router-dom'

function CustomersView() {
  const custom = useCustomers()
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/customers')
      const data = await response.json()
      setCustomers(data)
    }

    fetchData()
  }, [])

  const deleteCustomer = async (id) => {
    await custom.deleteCustomer(id)
  }

  return (
    <>
      <div class='flex flex-col'>
        <div class='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div class='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div class='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <table class='min-w-full divide-y divide-gray-200'>
                <thead class='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Status
                    </th>
                    <th scope='col' class='relative px-6 py-3'>
                      <button class='sr-only'>Edit</button>
                    </th>
                  </tr>
                </thead>
                <tbody class='bg-white divide-y divide-gray-200'>
                  {!customers.length ? (
                    <p>Loading...</p>
                  ) : (
                    customers.map((customer) => (
                      <tr key={customer.id}>
                        <td class='px-6 py-4 whitespace-nowrap'>
                          <div class='flex items-center'>
                            <div class='flex-shrink-0 h-10 w-10'>
                              <img
                                class='h-10 w-10 rounded-full'
                                src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60'
                                alt=''
                              />
                            </div>
                            <div class='ml-4'>
                              <div class='text-sm font-medium text-gray-900'>
                                {customer.name}
                              </div>
                              <div class='text-sm text-gray-500'>
                                {customer.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class='px-6 py-4 whitespace-nowrap'>
                          <div class='text-sm text-gray-900'>
                            Regional Paradigm Technician
                          </div>
                          <div class='text-sm text-gray-500'>Optimization</div>
                        </td>
                        <td class='px-6 py-4 whitespace-nowrap'>
                          <span class='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                            Active
                          </span>
                        </td>
                        <td class='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                          <button
                            class='bg-red-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
                            onClick={() => deleteCustomer(customer.id)}
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              className='fill-current w-4 h-4 mr-2'
                              stroke='currentColor'
                            >
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M6 18L18 6M6 6l12 12'
                              />
                            </svg>
                            <span>Delete</span>
                          </button>
                        </td>
                        <td class='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                          <a
                            href='#'
                            class='text-indigo-600 hover:text-indigo-900'
                          >
                            <Link to={`/edit/${customer.id}`}>
                              <button class='bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  stroke='currentColor'
                                >
                                  <path
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                                  />
                                </svg>
                                <span>Edit</span>
                              </button>
                            </Link>
                          </a>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomersView

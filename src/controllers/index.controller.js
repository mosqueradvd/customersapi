const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '',
  database: 'customersapi',
  port: '5432'
})

const getCustomers = async (req, res) => {
  const response = await pool.query('SELECT * FROM customers')
  console.log('response', response.rows)
  res.status(200).json(response.rows)
}

const createCustomers = async (req, res) => {
  const { name, country, email } = req.body
  const response = await pool.query(
    'INSERT INTO customers (name, country, email) VALUES ($1, $2, $3)',
    [name, country, email]
  )
  console.log(response)
  res.json({
    msg: 'Customer created succesfully!',
    body: {
      customer: { name, country, email }
    }
  })
}

const getCustomerById = async (req, res) => {
  const id = req.params.id
  const response = await pool.query('SELECT * FROM customers WHERE id = $1', [
    id
  ])
  res.json(response.rows)
}

const updateCustomer = async (req, res) => {
  const id = req.params.id
  const { name, country, email } = req.body
  await pool.query(
    'UPDATE customers SET name = $1, country = $2, email = $3 WHERE id = $4',
    [name, country, email, id]
  )
  res.json('Customer updated succesfully!')
}

const deleteCustomer = async (req, res) => {
  const id = req.params.id
  await pool.query('DELETE FROM customers WHERE id = $1', [id])
  res.json(`Customer with id ${id} was successfully deleted`)
}

module.exports = {
  getCustomers,
  createCustomers,
  getCustomerById,
  deleteCustomer,
  updateCustomer
}

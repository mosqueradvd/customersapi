const { Router } = require('express')
const router = Router()

const {
  getCustomers,
  createCustomers,
  getCustomerById,
  deleteCustomer,
  updateCustomer
} = require('../controllers/index.controller')

router.get('/customers', getCustomers)
router.get('/customers/:id', getCustomerById)
router.post('/customers', createCustomers)
router.put('/customers/:id', updateCustomer)
router.delete('/customers/:id', deleteCustomer)

module.exports = router

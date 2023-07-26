const { addExpense, deleteExpense, getExpense } = require('../controller/expense');
const {addIncome, getIncomes, deleteIncome} = require('../controller/income');
const router = require('express').Router()


router.post('/add-incomes',addIncome)
    .get('/get-incomes',getIncomes)
    .delete('/delete-income/:id',deleteIncome)
    .post('/add-expenses',addExpense)
    .get('/get-expenses',getExpense)
    .delete('/delete-expense/:id',deleteExpense)

module.exports = router
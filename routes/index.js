const express = require('express')
const router = express.Router()
const { fetchTable } = require('../controllers/index')

router.get('/', async (request, result) => {
    const people = await fetchTable('people.json', '2eab1a30')

    result.render('index', { people })
})

module.exports = router

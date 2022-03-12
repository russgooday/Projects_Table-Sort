const express = require('express')
const router = express.Router()
const { fetchTable } = require('../controllers/index')

router.get('/', async (request, result) => {
    const people = await fetchTable('people.json', 'Api-Key')

    result.render('index', { people })
})

module.exports = router

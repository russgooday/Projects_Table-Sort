import { sortHandler } from './modules/handlers.js'
import { fetchTable } from './modules/fetchTable.js'
import { TableRow } from '../templates/Table-Row.js'

window.document.addEventListener('DOMContentLoaded', async () => {

    const table = document.getElementById('table-people')
    const tHead = table.tHead
    const tBody = table.tBodies[0]

    try {
        const people = await fetchTable('people.json', '2eab1a30')

        // populate the table on load
        tBody.insertAdjacentHTML('afterBegin', people.map(TableRow).join(''))

        tHead.addEventListener('click', sortHandler)

    } catch (err) { console.log(err) }
})

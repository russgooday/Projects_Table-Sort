import { sortHandler } from './modules/handlers.js'
import { fetchTable } from './modules/fetchTable.js'
import { TableRow } from '../templates/Table-Row.js'

window.document.addEventListener('DOMContentLoaded', async () => {

    const tableHeadings = document.querySelectorAll('#table-people th')
    const tableBody = document.querySelector('#table-people tbody')

    try {
        const people = await fetchTable('people.json', 'Api-Key')

        // populate the table on load
        tableBody.insertAdjacentHTML('afterBegin', people.map(TableRow).join(''))

        tableHeadings.forEach((heading) => heading.addEventListener('click', sortHandler))

    } catch (err) { console.log(err) }
})

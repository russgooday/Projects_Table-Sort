import { sortHandler } from './modules/handlers.js'

window.document.addEventListener('DOMContentLoaded', () => {

    const tableHeadings = document.querySelectorAll('#table-people th')

    tableHeadings.forEach((heading) => heading.addEventListener('click', sortHandler))
})

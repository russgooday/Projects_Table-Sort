// import Ascend and Descend comparator functions
import { ascend, descend, curry2 } from './functional.js'

const tBody = document.querySelector('#table-people tbody')

const appendRow = tBody.appendChild.bind(tBody) // bind appendChild method to tBody
const getTextFromColumn = curry2((column, row) => row.cells[column].textContent)

export const sortHandler = function (event) {
    const currentHeading = event.target

    if (!currentHeading.hasAttribute('data-ascend')) return

    const column = currentHeading.cellIndex
    const ascending = (currentHeading.dataset.ascend === 'true')
    const compare = (ascending) ? descend : ascend

    Array
        .from(tBody.rows)
        .sort(compare(getTextFromColumn(column)))
        .forEach(appendRow)

    currentHeading.dataset.ascend = !ascending // toggle order direction
}

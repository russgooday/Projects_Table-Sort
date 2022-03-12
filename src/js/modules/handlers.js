import { ascend, descend, getByPath } from './functional.js'

const tBody = document.querySelector('#table-people tbody')
const appendRow = tBody.appendChild.bind(tBody) // bind appendChild method to tBody

export const sortHandler = function (event) {
    const tableHead = event.target

    if (!tableHead.hasAttribute('data-ascend')) return

    const selectedColumn = getByPath(['cells', tableHead.cellIndex, 'textContent'])
    const ascending = (tableHead.dataset.ascend === 'true')
    const order = (ascending) ? descend : ascend

    Array
        .from(tBody.rows)
        .sort(order(selectedColumn))
        .forEach(appendRow)

    tableHead.dataset.ascend = !ascending // toggle order direction
}

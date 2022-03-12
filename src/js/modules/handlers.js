// import Ascend and Descend comparator functions
import { getByPath, ascend, descend } from './functional.js'

const tBody = document.querySelector('#table-people tbody')

const appendRow = tBody.appendChild.bind(tBody) // bind appendChild method to tBody

export const sortHandler = function (event) {
    const currentHeading = event.currentTarget
    console.log('clicked')

    if (!currentHeading.hasAttribute('data-ascend')) return

    const getTextFromColumn = getByPath(['cells', currentHeading.cellIndex, 'textContent'])
    const ascending = (currentHeading.dataset.ascend === 'true')
    const compare = (ascending) ? descend : ascend

    Array
        .from(tBody.rows)
        .sort(compare(getTextFromColumn))
        .forEach(appendRow)

    currentHeading.dataset.ascend = !ascending // toggle order direction
}

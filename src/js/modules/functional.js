// Cut down rendition of RamdaJs' optimised implentation
// switch cases in reverse order
export const curry2 = (fn) => {
    return function (x, y) {
        switch (arguments.length) {
        case 2:
            return fn(x, y)
        case 1:
            return (y) => fn(x, y)
        case 0:
            return fn
        default:
            return fn(x, y)
        }
    }
}

export const curry3 = (fn) => {
    return function (x, y, z) {
        switch (arguments.length) {
        case 3:
            return fn(x, y, z)
        case 2:
            return (z) => fn(x, y, z)
        case 1:
            return curry2((y, z) => fn(x, y, z))
        case 0:
            return fn
        default:
            return fn(x, y, z)
        }
    }
}

const shallowCopy = (source) => Object.assign(source.constructor(), source)

/**
 * With a given path attempts to search through an object for a property value.
 * @param {Array [String|Number]} ['names', 1] | { names: ['Joe', 'Bloggs'] } -> 'Bloggs'
 * @return {*} If found a value of any type or undefined
 */
export const getByPath = curry2((path, source) => {
    let value = source

    for (const key of path) {
        if (value === undefined) return
        value = value[key]
    }

    return (typeof value === 'object') ? shallowCopy(value) : value
})

export const inspect = (x) => (console.log(x), x)

/**
 * Comparator method
 * Case insensitive and numerical comparator method
 * e.g. sorting ['a', 'A'] -> ['a', 'A'] | ['101','2'] -> ['2', '101']
 */
const { compare } = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' })

/**
 * Ascend and Descend comparator functions
 * Expect a callback function, which will be called on arguments
 * 'a' and 'b' prior to comparing
 */
export const ascend = curry3((fn, a, b) => compare(fn(a), fn(b)))

export const descend = curry3((fn, a, b) => compare(fn(b), fn(a)))


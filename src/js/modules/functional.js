// Curry functions are a cut-down version
// of RamdaJs' implentation - minus placeholder support
export const curry2 = (fn) => {
    return function (x, y) {
        switch (arguments.length) {
        case 0:
            return fn
        case 1:
            return (y) => fn(x, y)
        default:
            return fn(x, y)
        }
    }
}

export const curry3 = (fn) => {
    return function (x, y, z) {
        switch (arguments.length) {
        case 0:
            return fn
        case 1:
            return curry2((y, z) => fn(x, y, z))
        case 2:
            return (z) => fn(x, y, z)
        default:
            return fn(x, y, z)
        }
    }
}

export const getByPath = curry2((keys, source) => {
    let value = source
    for (const key of keys) value = value?.[key]

    return value
})

export const inspect = (x) => (console.log(x), x)

// Comparator method
// unlike the typical (a < b) or (a.toLowerCase() < b.toLowerCase())
// the Intl.collator's compare method by default is case insensitive and
// with the 'numeric' option can be set to handled numbers aswell e.g. '2' < '10'
const { compare } = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' })

// Expects a callback, which will be called on both 'a' and 'b' arguments
// Being curried the callback can be fixed and the resulting binary function
// can itself be passed as a callback to Array.sort.
export const ascend = curry3((fn, a, b) => compare(fn(a), fn(b)))

export const descend = curry3((fn, a, b) => compare(fn(b), fn(a)))


const axios = require('axios')

const fetchTable = async (schema, apiKey) => {
    const response = await axios.get('https://api.mockaroo.com/api/5ae15890', {
        method: 'GET',
        headers: {
            schema,
            'Content-Type': 'application/json',
            'X-API-Key': apiKey
        }
    })

    return await response.data
}

module.exports = { fetchTable }

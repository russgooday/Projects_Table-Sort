export const fetchTable = async (schema, apiKey) => {
    const response = await fetch(
        'https://api.mockaroo.com/api/5ae15890', {
            method: 'GET',
            headers: {
                schema,
                'Content-Type': 'application/json',
                'X-API-Key': apiKey
            }
        }
    )
    return await response.json()
}

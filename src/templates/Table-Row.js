const TableRow = (person) => (`
    <tr>
        <td>${person.id}</td>
        <td>${person.first_name}</td>
        <td>${person.last_name}</td>
        <td>${person.email}</td>
        <td>${person.gender}</td>
        <td>${person.age}</td>
    </tr>
`)

export { TableRow }

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>URL</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.linkData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>
          <a href={row.url}>{row.url}</a>
        </td>
        <td>
          <button onClick={() => props.removeLink(row.id)}>Delete</button>
        </td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}

function Table(props) {
  return (
    <table>
      <TableHeader/>
      <TableBody linkData={props.data} removeLink={props.removeLink}/>
    </table>
  )
}

export default Table
import React from 'react'

const ListItems = ({ items }) => {
    
    const keys = Object.keys(items[0]);
    console.log(keys);
  return (
    <table>
        <thead>
            {
                keys.map(keyItem => <th key={keyItem}>{keyItem}</th>)
            }
        </thead>
        <tbody>
            {
                items.map(item => (
                    <tr key={item.id}>
                        {keys.map(keyItem => <td>{JSON.stringify(item[keyItem])}</td>)}
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}

export default ListItems
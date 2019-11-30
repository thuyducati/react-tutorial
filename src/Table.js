import React from 'react'

const TableHeader = () => (
    <thead className="headerStyles">
        <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Remove</th>
        </tr>
    </thead>
)

const TableBody = (props) => (
    <tbody>
        {
            props.characterData.map(
                (item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.job}</td>
                        <td>
                            <button onClick={() => props.removeCharacter(index)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                )
            )
        }
    </tbody>
)

const Table = ({ characterData, removeCharacter }) => (
    <table>
        <TableHeader />
        <TableBody
            characterData={characterData}
            removeCharacter={removeCharacter}
        />
    </table>
)

export default Table
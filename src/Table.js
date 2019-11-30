import React from 'react'
import './App.css'

const TableHeader = () => (
    <thead className="headerStyles">
        <tr>
            <th className="th">Name</th>
            <th className="th">Job</th>
            <th className="th">Remove</th>
        </tr>
    </thead>
)

const TableBody = (props) => (
    <tbody>
        {
            props.characterData.map(
                (item, index) => (
                    <tr key={index}>
                        <td className="td">{item.name}</td>
                        <td className="td">{item.job}</td>
                        <td className="td">
                            <button className="deleteBtn" onClick={() => props.removeCharacter(index)}>
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
    <table className="tableStyles">
        <TableHeader />
        <TableBody
            characterData={characterData}
            removeCharacter={removeCharacter}
        />
    </table>
)

export default Table
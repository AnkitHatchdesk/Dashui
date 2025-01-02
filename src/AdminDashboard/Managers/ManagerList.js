import React from 'react'

function ManagerList({managers}) {
    return (
        <>
            <tr>
                <td>{managers.fullName}</td>
                <td>Stafli | CSS Project | HTML Project | React Project | CDM Project | Node js Project | PCICM Project</td>
                <td>Nov, 30, 2019</td>
                
                <td className="action-buttons">
                    <button className="btn btn-warning btn-sm" title="Edit">
                        <i className="bi bi-pencil"></i>
                    </button>
                    <button className="btn btn-danger btn-sm" title="Delete">
                        <i className="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
          
        </>
    )
}

export default ManagerList

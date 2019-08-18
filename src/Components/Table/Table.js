import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import './Table.css'

const Table = () => {

  const services = useSelector(state => state.serviceList)

  const handleDelete = (id) => {
    console.log(id)
  }

  const handleEdit = (id) => {
    console.log(id)
  }

  return (
  <table className="table col-md-10">
    <thead className='thead-light'>
    <tr>
      <th scope="col">Услуга</th>
      <th scope="col">Стоимость</th>
      <th scope="col">Редактировать</th>
    </tr>
    </thead>
    <tbody>
      {services.map((services, index) => {
        return (
          <tr key={index}>
            <td>{services.name}</td>
            <td>{services.price}</td>
            <td>
              <button type="button" className="btn btn-outline-success btn-sm action-button" onClick={()=>handleEdit(index)}>
                <i className="fa fa-pencil" />
              </button>
              <button type="button" className="btn btn-outline-danger btn-sm action-button" onClick={()=>handleDelete(index)}>
                <i className="fa fa-trash-o" />
              </button>
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
 )
}

export default Table
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {removeService} from '../../Actions/'

import './Table.css'

const Table = () => {

  const services = useSelector(state => state.serviceList)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(removeService(id))
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
      {services.map((service) => {
        return (
          <tr key={service.id}>
            <td>{service.name}</td>
            <td>{service.price}</td>
            <td>
              <button type="button" className="btn btn-outline-success btn-sm action-button" onClick={()=>handleEdit(service.id)}>
                <i className="fa fa-pencil" />
              </button>
              <button type="button" className="btn btn-outline-danger btn-sm action-button" onClick={()=>handleDelete(service.id)}>
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
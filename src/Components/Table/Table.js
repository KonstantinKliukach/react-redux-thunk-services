import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import './Table.css'
import { editService } from '../../Actions/actionCreators';

const Table = () => {

  const services = []
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    
  }

  const handleEdit = (id, name, price) => {
    
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
              <button type="button" className="btn btn-outline-success btn-sm action-button" onClick={()=>handleEdit(service.id, service.name, service.price)}>
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
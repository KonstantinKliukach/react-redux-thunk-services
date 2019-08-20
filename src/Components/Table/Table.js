import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";

import { fetchItemsFromApi, removeItemFromApi } from '../../Actions'

import './Table.css'

const Table = () => {

  const { items, loading, error} = useSelector(state => state.serviceList);
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(removeItemFromApi(id))
  }

  useEffect(() => {
    dispatch(fetchItemsFromApi())
    }, [dispatch]
  )

  if (loading) {
    return <p>loading..</p>
  }

  if (error) {
    return <p>{error}</p>
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
      {items.map((service) => {
        return (
          <tr key={service.id}>
            <td>{service.name}</td>
            <td>{service.price}</td>
            <td>
              <Link to={`/services/${service.id}`}className="btn btn-outline-success btn-sm action-button">
                <i className="fa fa-pencil" />
              </Link>
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
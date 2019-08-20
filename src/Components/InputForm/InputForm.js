import React, { useEffect } from 'react'
import { Link, withRouter } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'

import { serviceChangeField, getItemFromApi, sendItemToApi } from '../../Actions'

import './InputForm.css'

const  InputForm = ({ history, match }) =>{
  const { item, loading, error} = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch()

  useEffect(() => {
    const { id } = match.params
    dispatch(getItemFromApi(id))
  }, [dispatch])

  const handleChange = e => {
    const {name, value} = e.target 
    dispatch(serviceChangeField(name, value))
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(sendItemToApi(item)).then(() => {
      if (!error)  {
        history.push('/services')
      }
    })
  }

  if (loading) {
    return <p>loading..</p>
  }

  if (error) {
    return <p>{error}</p>
  }
  
  return (
    <form className='input-form' onSubmit={handleSubmit}>
      <div className="form-row align-items-center">
        <div className="col-md-3">
          <label htmlFor="inputDate">Название услуги</label>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputDistance">Стоимость услуги</label>
        </div>
      </div>
      <div className="form-row align-items-center my-2">
        <div className="col-md-3">
          <input className="form-control" placeholder="Введите название услуги" name="name" value={item.name} onChange={handleChange}/>
        </div>
        <div className="col-md-4">
          <input className="form-control" placeholder="Введите стоимость услуги" name="price" value={item.price} onChange={handleChange}/>
        </div>
      </div>
      <div className="form-row align-items-center">
        <div className="col-md-7">
          <label htmlFor="inputDate">Введите описание услуги</label>
        </div>
      </div>
      <div className="form-row align-items-center">
          <div className="col-md-7">
            <input className="form-control" placeholder="Введите описание" name="content" value={item.content} onChange={handleChange}/>
          </div>
      </div>
      <div className="form-row align-items-center mt-4">
        <div className="col-md-3 d-flex ">
            <button type="submit" className="btn btn-outline-secondary mr-3">Ок</button>
            <Link to={'/services'} className="btn btn-outline-secondary">Отмена</Link>
        </div>
      </div>
    </form>
  )
}

export default withRouter(InputForm)

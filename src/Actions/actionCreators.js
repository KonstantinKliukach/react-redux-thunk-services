import { 
  FETCH_REQUEST,
  FETCH_ERROR, 
  FETCH_READY,

  REMOVE_SERVICE,

  FETCH_SERVICE_READY,

  SERVICE_ADD_REQUEST,
  SERVICE_ADD_ERROR,
  SERVICE_ADD_SUCCESS,

  SERVICE_CHANGE_FIELD,
} from '../Actions'


export const fetchServicesRequest = () => {
  return {type: FETCH_REQUEST};
};


export const fetchServicesError = (message) => {
  return {type: FETCH_ERROR, payload: {message}};
};
  
export const fetchServicesReady = (items) => {
  return {type: FETCH_READY, payload: {items}};
};

export const fetchServiceReady = (item) => {
  return {type: FETCH_SERVICE_READY, payload: {item}};
};

export const serviceAddRequest = () => {
  return {type: SERVICE_ADD_REQUEST};
};

export const serviceAddError = (message) => {
  
  return {type: SERVICE_ADD_ERROR, payload: {message}};
};
  
export const serviceAddSuccess = (items) => {
  return {type: SERVICE_ADD_SUCCESS, payload: {items}};
};

export const serviceChangeField = (name, value) => {
  return {type: SERVICE_CHANGE_FIELD, payload: {name, value}};
};

export const serviceRemove = (id) => {
  return {type: REMOVE_SERVICE, payload: {id}};
};

export const removeItemFromApi = (id) => async dispatch => {
  dispatch(fetchServicesRequest())
  try {
    const response = await fetch(`http://localhost:7070/api/services/${id}`, {
      method: 'DELETE'
    })
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(fetchItemsFromApi())
  } catch (e) {
    dispatch(fetchServicesError(e.message))
  }
}

export const fetchItemsFromApi = () => async dispatch => {
  dispatch(fetchServicesRequest())
  try {
    const response = await fetch(`http://localhost:7070/api/services`)
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(fetchServicesReady(data));
  
  } catch (e) {
    dispatch(fetchServicesError(e.message))
  }
}

export const getItemFromApi = (id) => async dispatch => {
  dispatch(serviceAddRequest())
  try {
    const response = await fetch(`http://localhost:7070/api/services/${id}`)
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(fetchServiceReady(data));
  
  } catch (e) {
    dispatch(serviceAddError(e.message))
  }
}
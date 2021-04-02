import axios from 'axios'

export const deleteCard = (id) => {
    return {
        type: 'DELETE_CARD',
        id: id
    }
}

//return a function instead to be able to perform the async task, Only with redux thunk can you return a JS function
export const fetchUsers = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((userdata) => {
                dispatch({ type: 'FETCH_USERS', payload: userdata.data })
            })
    }
}
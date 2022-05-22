import axios from "axios";

export const storeToken = (token) => {
    localStorage.setItem('token', JSON.stringify(token));
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export const loginUserAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({type: 'CHANGE_LOADING', value: true});
        axios.post('http://backend-dev.cakra-tech.co.id/api/login', data)
            .then((res) => {
                console.log('success login', res);
                dispatch({type: 'SET_LOGIN', value: res.data.token});
                dispatch({type: 'CHANGE_LOADING', value: false});
                storeToken(res.data.token);
                resolve(true);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                dispatch({type: 'CHANGE_LOADING', value: false});
                dispatch({type: 'SET_LOGIN', value: false});
                reject(false);
            })
    })
}

export const registerAPI = (data) => (dispatch) => {
    const promise = new Promise((resolve, reject) => {
        dispatch({type: 'CHANGE_LOADING', value: true});
        axios.post('http://backend-dev.cakra-tech.co.id/api/register', data)
            .then((res) => {
                console.log('success register', res);
                dispatch({type: 'CHANGE_LOADING', value: false});
                resolve(true);
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}

export const getCountryData = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        axios.get('http://backend-dev.cakra-tech.co.id/api/country', data)
        .then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        })
    })
}
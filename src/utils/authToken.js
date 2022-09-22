const getUserToken = () => {
    return localStorage.getItem('token');
}

const setUserToken = (token) => {
    return localStorage.setItem('token', token);
}

const clearUserToken = () => {
    console.log('clearing token', localStorage.getItem('token'));
  return localStorage.setItem('token', '');
}

export {getUserToken, setUserToken, clearUserToken}
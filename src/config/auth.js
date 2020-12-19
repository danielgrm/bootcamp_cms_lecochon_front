const TOKEN_KEY = 'token-do-caralho'

const getToken = () => localStorage.getItem(TOKEN_KEY)

const saveToken = (token) => localStorage.setItem(TOKEN_KEY, token)

const removeToken = () => localStorage.removeItem(TOKEN_KEY)

const isAuthenticated = () => {
    // pegar dentro do localstage
    // validar o token 
    // retornar se true ou false
    // return getToken() !== false
    return (localStorage.getItem(TOKEN_KEY) ? true : false);
}

export {
    isAuthenticated,
    getToken,
    saveToken,
    removeToken
}


//XXXXXXXXXXXXXXXXXXXXXXXXxcodigo roubado do liniker

// const TOKEN_KEY = 'pizza-delicous'

// const getToken = () => {
//     return (localStorage.getItem(TOKEN_KEY) ? true : false);
//     // const data = JSON.parse(localStorage.getItem(TOKEN_KEY))
//     // if (data && data.token) {
//     //     return true
//     // }
//     //  return false
// }
// // const getUser = () => {
// //     const data = JSON.parse(localStorage.getItem(TOKEN_KEY))
// //     if (data && data.user) {
// //         return data.user
// //     }
// //     return false
// // }

// const saveToken = (data) => localStorage.setItem(TOKEN_KEY, JSON.stringify(data));

// const removeToken = () => localStorage.removeItem(TOKEN_KEY);

// const isAuthenticated = () => {
//     // pegar dentro do localstage
//     // validar o token 
//     // retornar se true ou false
//     return getToken() !== false
// }

// export {
//     isAuthenticated,
//     getToken,
//     // getUser,
//     saveToken,
//     removeToken
// }
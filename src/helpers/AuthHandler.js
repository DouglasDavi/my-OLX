import Cookies from 'js-cookie' 

export const isLogged = () =>{
    let token = Cookies.get('token')
    return (token) ? true : false;   
}
//se não vier nada no rememberPassaword ele será false
export const doLogin = (token, rememberPassword = false) =>{
    if(rememberPassword){
        Cookies.set('token', token, {expires: 999})
    }else{
        Cookies.set('token', token)
    }
}
import axios from './axios';


var login={
    login(info){
        return axios({
            method:"get",
            url:"login",
            params:info
        })
    }
}
export default login;


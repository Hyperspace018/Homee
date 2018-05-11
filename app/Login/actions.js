import axios from 'axios';

const postUserLogin = (value) => {
  
  const { email, password } = value

  return{
    type:"POST_LOGIN",
    payload: axios({
      method: "POST",
      url: "https://api.backendless.com/9C2E4015-1686-CE6C-FFE9-C0980E239D00/C06C6410-D772-8A54-FFF2-A566229EC300/users/login",
      data: {
        "login": email,
        "password": password
      }
    })
  }

}

export{
  postUserLogin
}
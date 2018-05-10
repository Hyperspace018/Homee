import axios from 'axios';

const allOngoingHomeWork = () => {

  const url = "https://api.backendless.com/9C2E4015-1686-CE6C-FFE9-C0980E239D00/C06C6410-D772-8A54-FFF2-A566229EC300/data/Ongoing?where=owner%3D'4D1D9DF5-9A07-9166-FF9D-223A1CB44F00'";

  return{
    type: "ALL_HOMEWORK",
    payload: axios({
      method: "GET",
      url
    })
  }

}

const postOngoingHomeWork = (value) => {
  
  const url = "https://api.backendless.com/9C2E4015-1686-CE6C-FFE9-C0980E239D00/C06C6410-D772-8A54-FFF2-A566229EC300/data/Ongoing";
  
  return{
    type: "POST_HOMEWORK",
    payload: axios({
      method: "POST",
      url,
      data: value
    })
  }

}

export{
  allOngoingHomeWork,
  postOngoingHomeWork
}
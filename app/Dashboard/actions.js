import axios from 'axios';
import { AsyncStorage } from 'react-native';

const allOngoingHomeWork = (objectId) => {

  const url = "https://api.backendless.com/9C2E4015-1686-CE6C-FFE9-C0980E239D00/C06C6410-D772-8A54-FFF2-A566229EC300/data/Homeworks?where=owner%3D'"+objectId+"'%20AND%20state%3D'ongoing'";
  return{
    type: "ALL_HOMEWORK_ONGOING",
    payload: axios({
      method: "GET",
      url
    })
  }

}

const allDoneHomework = (objectId) => {

  const url = "https://api.backendless.com/9C2E4015-1686-CE6C-FFE9-C0980E239D00/C06C6410-D772-8A54-FFF2-A566229EC300/data/Homeworks?where=owner%3D'"+objectId+"'%20AND%20state%3D'done'";

  return{
    type: "ALL_HOMEWORK_DONE",
    payload: axios({
      method: "GET",
      url
    })
  }

}

const allPendingHomework = (objectId) => {
  
  const url = "https://api.backendless.com/9C2E4015-1686-CE6C-FFE9-C0980E239D00/C06C6410-D772-8A54-FFF2-A566229EC300/data/Homeworks?where=owner%3D'"+objectId+"'%20AND%20state%3D'pending'";

  return{
    type: "ALL_HOMEWORK_PEND",
    payload: axios({
      method: "GET",
      url
    })
  }

}

const postOngoingHomeWork = (value) => {
  
  const url = "https://api.backendless.com/9C2E4015-1686-CE6C-FFE9-C0980E239D00/C06C6410-D772-8A54-FFF2-A566229EC300/data/Homeworks";
  
  return{
    type: "POST_HOMEWORK",
    payload: axios({
      method: "POST",
      url: url,
      data: value
    })
  }

}

export{
  allOngoingHomeWork,
  allDoneHomework,
  allPendingHomework,
  postOngoingHomeWork
}
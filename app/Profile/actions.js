import axios from 'axios';

const allProfiles = (objectId) => {

  const url = "https://api.backendless.com/9C2E4015-1686-CE6C-FFE9-C0980E239D00/C06C6410-D772-8A54-FFF2-A566229EC300/data/Users/"+objectId;

  return{
    type: "ALL_PROFILE",
    payload: axios({
      method: "GET",
      url
    })
  }

}

const allOngoingHomeWork = (objectId) => {

  const url = "https://api.backendless.com/9C2E4015-1686-CE6C-FFE9-C0980E239D00/C06C6410-D772-8A54-FFF2-A566229EC300/data/Homeworks?where=owner%3D'"+objectId+"'%20AND%20state%3D'ongoing'&sortBy=created%20desc";

  return{
    type: "ALL_HOMEWORK_ONGOING",
    payload: axios({
      method: "GET",
      url
    })
  }

}

const allDoneHomework = (objectId) => {

  const url = "https://api.backendless.com/9C2E4015-1686-CE6C-FFE9-C0980E239D00/C06C6410-D772-8A54-FFF2-A566229EC300/data/Homeworks?where=owner%3D'"+objectId+"'%20AND%20state%3D'done'&sortBy=created%20desc";

  return{
    type: "ALL_HOMEWORK_DONE",
    payload: axios({
      method: "GET",
      url
    })
  }

}

const allPendingHomework = (objectId) => {
  
  const url = "https://api.backendless.com/9C2E4015-1686-CE6C-FFE9-C0980E239D00/C06C6410-D772-8A54-FFF2-A566229EC300/data/Homeworks?where=owner%3D'"+objectId+"'%20AND%20state%3D'pending'&sortBy=created%20desc";

  return{
    type: "ALL_HOMEWORK_PEND",
    payload: axios({
      method: "GET",
      url
    })
  }

}

export{
  allProfiles,
  allOngoingHomeWork,
  allDoneHomework,
  allPendingHomework
}
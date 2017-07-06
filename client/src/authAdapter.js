const baseUrl = ''

export default class AuthAdapter {
  static login (loginParams) {
    return fetch(``, {
      method: ,
      headers: ,
      body: JSON.stringify(loginParams)
    }).then(res => res.json())
  }

  static currentUser () {
    return fetch(``, {
      headers:
    }).then(res => res.json())
  }
}

function headers () {
  return {
    'content-type': ,
    'accept': ,
    'Authorization': 
  }
}

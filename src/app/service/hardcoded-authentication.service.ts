import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username, password){
    console.log('before gg'+this.isUserLoggedIn());
    if(username==='user' && password==='password'){
     sessionStorage.setItem('authenticaterUser',username);
     console.log('after'+this.isUserLoggedIn())
     return true;
  }
  return false;
}

isUserLoggedIn(){
  let user = sessionStorage.getItem('authenticaterUser')
  return !(user === null)
}

logout(){
  sessionStorage.removeItem('authenticaterUser')
}
}
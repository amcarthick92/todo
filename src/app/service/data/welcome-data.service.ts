import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public msg: string) { }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient

  ) { }
  executeHelloWorldBeanService() {
    // console.log( this.http.get('http://localhost:8080/hello-world/path-variable/kumar'));
    console.log("hhh");
    return this.http.get<HelloWorldBean>('http://localhost:8081/hello-world-bean');
  }
  executeHelloWorldBeanServiceWithPathVariable(name) {
    // console.log( this.http.get('http://localhost:8080/hello-world/path-variable/kumar'));
    let basicAuthHeaderString = this.createBasicHttpAuthentiocationHeader();
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<HelloWorldBean>(`http://localhost:8081/hello-world/path-variable/${name}`
    //, { headers}
    );
  }

  createBasicHttpAuthentiocationHeader() {
    let userName = 'user'
    let password = 'password'

    let basicAuthHeaderString = 'Basic ' + window.btoa(userName + ':' + password);
    return basicAuthHeaderString;
  }
}

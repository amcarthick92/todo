import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public msg:string){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient

  ) { }
  executeHelloWorldBeanService(){
    // console.log( this.http.get('http://localhost:8080/hello-world/path-variable/kumar'));
    console.log("hhh");
    return this.http.get<HelloWorldBean>('http://localhost:8081/hello-world-bean');
  }
  executeHelloWorldBeanServiceWithPathVariable(name){
    // console.log( this.http.get('http://localhost:8080/hello-world/path-variable/kumar'));
    return this.http.get<HelloWorldBean>(`http://localhost:8081//hello-world/path-variable/${name}`);
  }
}
 
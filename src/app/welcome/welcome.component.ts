import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
name='';
message ='Some Welcome message'
welcomeMessageFromService : string
  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService) { }

  ngOnInit() {
    this.name=(this.route.snapshot.params['name'])
  }
  // getWelcomeMessage(){
  //   this.service.executeHelloWorldBeanService().subscribe(
  //     response => this.handleSuccessfullResponse(response),
  //     error => this.handleErrorResponse(error)
  //   );

    getWelcomeMessageWithVariable(name){
     this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
     // this.service.executeHelloWorldBeanService().subscribe( 
     response => this.handleSuccessfullResponse(response),
        error => this.handleErrorResponse(error)
      );
    console.log("get last welcome message called!!");
    
  }
  handleSuccessfullResponse(response){
    console.log(response);
    this.welcomeMessageFromService = response.message;
    console.log(response.message);

  }
  handleErrorResponse(error){ 
    console.log(error);
    console.log(error.error);
    console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }
}

// Access to XMLHttpRequest at 'http://localhost:8081//hello-world/path-variable/amcarthick' 
// from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' 
// header is present on the requested resource.

// Access to XMLHttpRequest at 'http://localhost:8081//hello-world/path-variable/amcarthick' 
// from origin 'http://localhost:4200' has been blocked by CORS 
// policy: Response to preflight request doesn't pass access control check:
//  No 'Access-Control-Allow-Origin' header is present on the requested resource.
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
        response => this.handleSuccessfullResponse(response),
        error => this.handleErrorResponse(error)
      );
    console.log("get last welcome message called!!");
    
  }
  handleSuccessfullResponse(response){
    console.log(response);
    this.welcomeMessageFromService = response.mesage;
    console.log(response.mesage);

  }
  handleErrorResponse(error){ 
    console.log(error);
    console.log(error.error);
    console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }
}

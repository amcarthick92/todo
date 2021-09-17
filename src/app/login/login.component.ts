import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username ='user'
password='password';
invalidLogin=false;
errorMessage='Inavlid Credential';

  constructor(private route: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }
private hardcodedA
  ngOnInit() {
  }
  HandleLogin(){
    console.log(this.username)
    console.log(this.password)
   // if(this.username==='amcarthick' && this.password==='1234'){
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.route.navigate(['welcome',this.username])
      this.invalidLogin=false
    }else{
      this.invalidLogin=true
    }
  }

  handleBasicAuthLogin(){
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
     .subscribe(
        data =>{
          console.log("exec");
          this.route.navigate(['welcome',this.username])
          this.invalidLogin=false
        },
        error =>{
          this.invalidLogin=true
        }
     );
  }
}

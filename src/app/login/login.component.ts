import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username ='amcarthick'
password='1234';
invalidLogin=false;
errorMessage='Inavlid Credential';

  constructor(private route: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }
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
}

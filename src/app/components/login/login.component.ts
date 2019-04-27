import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { TokenService } from '../../service/token.service';
import { Router } from '@angular/router';
//import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };

  public error = null;

  constructor( 
    private Users: UserService,
    private Token: TokenService,
    private router: Router,
   // private Auth: AuthService
  ) { }

  onSubmit() {
    /*this.Jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );*/
    this.Users.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
  //  this.Token.handle(data.access_token);
    //this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error) {
    this.error = error.error.error;
  }
  ngOnInit() {
  }

}

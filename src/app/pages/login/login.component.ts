import { Component, OnInit, ErrorHandler } from '@angular/core';
import { UserService } from '../../service/user.service';
import { TokenService } from '../../service/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, ErrorHandler {

  public form = {
    email: null,
    password: null
  };
  public loading = false;
  public error = null;
  loggedin: boolean;

  constructor(
    private Users: UserService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService
  ) { }

  onSubmit() {
    this.Users.login(this.form).subscribe(
      data => {
        this.handleResponse(data)
        },
      error => {
        this.handleError(error)
      }
    );
  }

  handleResponse(data) {
    this.Token.handle(data.user);
    this.Auth.changeAuthStatus(true);
    if (this.Token.isUserAdmin()) {
      this.router.navigateByUrl('admin/Dashboard');
    } else if (this.Token.isUserdemo()) {
      this.router.navigateByUrl('demo/Dashboard');
    } else if (this.Token.isUserLecture()) {
      this.router.navigateByUrl('lecturer/Dashboard');
    } else {
      this.router.navigateByUrl('login');
    }
  }

  handleError(error) {
    this.error = error.error.error;

  }
  ngOnInit() {
    this.Auth.authStatus.subscribe(value => this.loggedin = value)
  }

  public showAlert(): void {
    alert('ngx-loading rocks!');
  }
}

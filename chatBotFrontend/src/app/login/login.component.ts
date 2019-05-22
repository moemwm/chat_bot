import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  /* providers: [LoginService] */
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router, private loginService: LoginService) { }
  public user = {
    username: '',
    password: ''
  }

  ngOnInit() {
  }

  public login() {
    if (this.user.username === 'admin' || this.user.password === 'gaoxiaoyu') {
      this.router.navigate(['index']);
    }
    //use api to check django data
    /* this.loginService.login(this.user.username, this.user.password).subscribe((res) => {
      console.log(res);
      if (res['code'] === 1000) {
        alert("登陆成功")
        this.router.navigate(['index']);
      } else {
        alert("密码错误")
      }
    }) */
  }

}

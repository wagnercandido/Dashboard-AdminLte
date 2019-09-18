import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.initDocumentPageLte();
  }

  login() {
    this.router.navigate(['dashboard']);
  }

  initDocumentPageLte() {
    document.body.className = 'hold-transition login-page';
    $(function () {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });
  }

}

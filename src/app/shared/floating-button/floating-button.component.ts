import { Component, OnInit } from '@angular/core';

declare const $;

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.css']
})
export class FloatingButtonComponent implements OnInit {

  options = [
    { title: 'Entrada', color: '#4caf50', icon: 'attach_money', router: '' },
    { title: 'Saída', color: '#e74938', icon: 'money_off', router: '' },
    { title: 'Despesa Cartão', color: '#009688', icon: 'credit_card', router: '' },
  ];

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

}

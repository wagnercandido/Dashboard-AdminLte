import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  options = [
    { icon: 'home', title: 'Dashboard', router: 'principal' },
    { icon: 'swap_vert', title: 'Transações', router: 'outro' },
    { icon: 'account_balance', title: 'Contas', router: 'contas' },
    { icon: 'credit_card', title: 'Cartões', router: 'cartoes' },
    { icon: 'insert_chart_outlined', title: 'Relatórios', router: 'relatorios' },
    { icon: 'bookmarks', title: 'Categorias', router: 'categorias' },
  ]

  constructor() { }

  ngOnInit() {
  }

}

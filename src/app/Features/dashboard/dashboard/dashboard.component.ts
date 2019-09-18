import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    this.initDocumentPageLte();
  }

  initDocumentPageLte() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition skin-blue sidebar-mini';
  }

  destroyDocumentPageLte() {
    document.body.className = '';
  }

  ngOnDestroy() {
    this.destroyDocumentPageLte();
  }

}

import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  private colmDfs;
  private gridApi;
  private gridColumnApi;
  private sortingOrd;

  constructor(private htttp: HttpClient){

  }

  ngOnInit(){

  }
}

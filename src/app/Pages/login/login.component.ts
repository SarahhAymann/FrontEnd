import { Component, OnInit } from '@angular/core';
import { PropertyDetailsService } from 'src/app/Services/property-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  title='Pagination';
  properties: any;
  page: number = 1;
  count: number = 0;
  tablesize: number = 10;
  tablesizes: any = [5,10,15,20];

  constructor(private pdetails:PropertyDetailsService) { }

  ngOnInit(): void {
    this.postList();
  }

  postList(): void{
    this.pdetails.getAllProperties().subscribe(response =>{
      this.page = response;
      console.log(this.page);
    });
  }
}

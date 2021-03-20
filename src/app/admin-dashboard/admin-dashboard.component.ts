import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  allCities:any;

  constructor(private homeService:HomeService) { }

  ngOnInit() {
    // this.homeService.getCities().subscribe(res=>{
    //   console.log(res);
    // })
  }


}

import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CarsService } from './services/cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  carsData = []

  constructor(private carsService: CarsService) {}
  
  ngOnInit(){
    this.carsService
    .getCars()
    .subscribe((res) => {
      console.log(res);
    })
  }
}

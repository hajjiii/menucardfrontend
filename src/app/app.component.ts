import { Component } from '@angular/core';
// import { error } from 'console';
import { ApiService } from './api.service';
// import { title } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  title = 'menu';
  myimage:string ="assets/pexels-ella-olsson-1640777.jpg";
  foods = [{food_name: 'test'},
            {price:'test'},
            {category: 'test'},
          ];

  constructor(private api:ApiService) {
    this.getFoods();
  }
  getFoods = () => {
    this.api.getAllFoods().subscribe(
      data => {
        this.foods = data;

      },
      error => {
        console.log(error);
        
      }
      
    );

  }
 
}

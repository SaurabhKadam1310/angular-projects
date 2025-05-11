import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Profile';
  constructor(){

  }
  ngOnInit(){
   
   //  let add = this.sum(3,2);
  }
  sum(a:number,b:number){
    return a+b;
   }
}

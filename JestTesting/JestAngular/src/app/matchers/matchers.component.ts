import { Component } from '@angular/core';

@Component({
  selector: 'app-matchers',
  templateUrl: './matchers.component.html',
  styleUrls: ['./matchers.component.css']
})
export class MatchersComponent {
   constructor(){}
   ngOnInit(){

   }
   compileAndroidCode(){
    throw new Error("You are using Angular Old version");
   }
}

import { Component } from '@angular/core';
import { FakeService } from '../services/fake.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  serviceData: any;
  errorMessage: any;
  greetings: any;
  constructor(private fakeService : FakeService){}

  ngOnInit(){
    this.getServiceData();
  }

  getServiceData(){
    this.fakeService.getData1().subscribe({
      next: (data:any)=>{
         this.serviceData = data;
         this.setGreetings();
      },
      error: (err:any)=>{
         this.errorMessage = err.statusText;
      },
      complete: ()=>{
       console.log("Finished");
       
      }
    });
  }

  setGreetings(){
    if(this.serviceData.time<10){
      this.greetings = "Good morning";
    }else if(this.serviceData.time < 20){
      this.greetings = "Good day"; 
    }else{
      this.greetings = "Good evening";
    }
  }

}

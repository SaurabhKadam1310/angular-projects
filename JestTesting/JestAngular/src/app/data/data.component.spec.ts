import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComponent } from './data.component';
import { FakeService } from '../services/fake.service';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;
  let fakeServiceMock: any;
  beforeEach(() => {
     fakeServiceMock = {
       getData1 : jest.fn()   //here we write the method used in data.component.ts
     }
    TestBed.configureTestingModule({
      declarations: [DataComponent],
      providers: [{
        provide: FakeService, useValue: fakeServiceMock
      }]  //here we provide FakeService but we use value of fakeServiceMock
    });
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getServiceData set serviceData', ()=>{
     const expectedRes = {
       name: "Saurabh Kadam"
     }
     jest.spyOn(fakeServiceMock,'getData1').mockReturnValue(of(expectedRes));
     fixture.detectChanges();
     expect(component.serviceData.name).toBe(expectedRes.name);
  });

  it('should getServiceData set errorMessage', ()=>{
    const errorResponse = new HttpErrorResponse({
      error : 'test 404 error',
      status: 404,
      statusText: 'Not found'
    })
    jest.spyOn(fakeServiceMock,'getData1').mockReturnValue(throwError(()=>(errorResponse)));
    //fixture.detectChanges();
    component.getServiceData(); //here we directly call without ngOnInit()
    expect(component.errorMessage).toContain('Not found');
  })

  it('should set greeting Good morning', ()=>{
     const expectedRes = {
       name: "Saurabh Kadam",
       time: 9
     }
     jest.spyOn(fakeServiceMock,'getData1').mockReturnValue(of(expectedRes));
     fixture.detectChanges();
     expect(component.greetings).toBe("Good morning");
  });

  it('should set greeting Good day', () => {
    const expectedRes = {
      name: "Saurabh Kadam",
      time: 12
    }
    jest.spyOn(fakeServiceMock, 'getData1').mockReturnValue(of(expectedRes));
    fixture.detectChanges();
    expect(component.greetings).toBe("Good day");
  });

  it('should set greeting Good evening', ()=>{
    const expectedRes = {
      name: "Saurabh Kadam",
      time: 22
    }
    jest.spyOn(fakeServiceMock, 'getData1').mockReturnValue(of(expectedRes));
    fixture.detectChanges();
    expect(component.greetings).toBe("Good evening");
  })

});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynchronousComponent } from './asynchronous.component';

describe('AsynchronousComponent', () => {
  let component: AsynchronousComponent;
  let fixture: ComponentFixture<AsynchronousComponent>;

  beforeEach(async() => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
     await TestBed.configureTestingModule({
      declarations: [AsynchronousComponent]
    }).compileComponents();
  })

  beforeEach(() => {
    // TestBed.configureTestingModule({
    //   declarations: [AsynchronousComponent]
    // });
    fixture = TestBed.createComponent(AsynchronousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set setimeout response setTimeoutCheck', ()=>{
     component.checkSetTimeout();
     expect(component.timeoutResponse).not.toBe('setTimeoutCheck');
     //jest.advanceTimersByTime(1000);
     jest.runAllTimers();  //anyone of above two will work
     expect(component.timeoutResponse).toBe('setTimeoutCheck');
     expect(setTimeout).toHaveBeenCalledTimes(1);
  })

});

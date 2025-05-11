

import { of, throwError } from 'rxjs';
import { FakeService } from './fake.service';
import { HttpErrorResponse } from '@angular/common/http';

describe('FakeService', () => {
  let service: FakeService;
  let httpClientSpy: any;
  beforeEach(() => {
    httpClientSpy = {
      get : jest.fn(),
      post : jest.fn() 
    }
     service = new FakeService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getData1', () => {
     const res = "TechopsWorld";
     const url = "https://jsonplaceholder.typicode.com/todos/1";
     jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
     service.getData1();
     expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
     expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  })

  it('should test getData2', (done) => {
    const res = "TechopsWorld";
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
    service.getData2().subscribe({
      next:(data) => {
        expect(data).toBe(res);
        done(); //It is asynchronous call that's why added done
      },
      error:(error)=>{
         console.log(error);
         
      }
    }); 
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
 });

 it('should test getData2 throw error', (done) => {
 // const res = "TechopsWorld";
 const errorResponse = new HttpErrorResponse({
  error : 'test 404 error',
  status : 404, statusText: 'Not found'
 });
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  jest.spyOn(httpClientSpy, 'get').mockReturnValue(throwError(() => errorResponse));
  service.getData2().subscribe({
    next:(data) => console.log(data),
    error:(error)=>{
      expect(error.message).toContain('test 404 error');
      done(); 
    }
  }); 
  expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  expect(httpClientSpy.get).toHaveBeenCalledWith(url);
})

//Post call

 it('should test postDatav1', ()=>{
    const command = 'testing';
    const res = 'techopsworld';
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    jest.spyOn(httpClientSpy, 'post').mockReturnValue(of(res));
    service.postData1(command);
    expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
 })

});

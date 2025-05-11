import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchersComponent]
    });
    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Strict equality //toBe()
  it('2 +2 = 4',()=>{
    expect(2+2).toBe(4);
  })

  // toEqual  Object testing
  it('Object values', ()=>{
     const data = {name : 'Technoscope'};
     expect(data).toEqual({name : 'Technoscope'}); // If here we write toBe instaed of toEqual then It failed because toBe check strict equality
  })

  //Truthiness
  it('null', ()=>{
     const n = null;
     expect(n).toBeNull();
     expect(n).toBeDefined();
     expect(n).not.toBeUndefined();
     expect(n).not.toBeTruthy();
     expect(n).toBeFalsy();
  });

  it('zero', ()=>{
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  })

  //Numbers
  it('two plus two', ()=>{
    const value = 2+2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    //toBe and toEqual are equivalent for Numbers but for object always use toEqual instead of toBe
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  it('Adding two floating numbers', ()=>{
    const floatVal = 0.1 + 0.2;
    //expect(floatVal).toEqual(0.3);
    // expect(floatVal).toBe(0.3);   for floating numbers toEqual and toBe matchers will not work as it check exact equality
    expect(floatVal).toBeCloseTo(0.3);
  });

  // Strings
  it('check word is present', ()=>{
    let str = "Hello Saurabh Kadam";
    expect(str).toMatch(/Kadam/); 
  });

  it('check word not present', ()=>{
    let str = "Hello welcome to Pune";
    expect(str).not.toMatch(/Khodashi/);
  });


  //Arrays and iterables
  it('Is shopping list has milk in it',()=>{
       const shoppingList = [
        "Fruit",
        "Banana",
        "milk",
        "grocery"
       ];
       expect(shoppingList).toContain("milk");
       expect(new Set(shoppingList)).toContain("milk");
  })

  //Exceptions

  it('compiling android goes as expected',()=>{
     expect(()=> component.compileAndroidCode()).toThrow();
     expect(()=>component.compileAndroidCode()).toThrow(Error);

    //You can also use the exact error msg or regexPattern
    expect(()=>component.compileAndroidCode()).toThrow('You are using Angular Old version');
    expect(()=>component.compileAndroidCode()).toThrow(/Angular/);
  })

});

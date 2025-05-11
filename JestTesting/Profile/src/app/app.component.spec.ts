import { AppComponent } from "./app.component";

describe('AppComponent', ()=>{
  let fixture:AppComponent;

  beforeEach(()=>{
    fixture = new AppComponent;
  })

  it('should have a title Profile', ()=>{
    expect(fixture.title).toEqual('Profile');
  })

  it('add 1+2 to equal 3', ()=>{
    expect(fixture.sum(1,2)).toBe(3);
  })

})


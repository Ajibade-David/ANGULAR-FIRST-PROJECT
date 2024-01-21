import { Component } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
  // typescript-defining the data types
  // string, number,boolean,object, array

  //inference
  //union


   // public private -access modifiers
   // properties
   // methods
  public name:string = 'David'
  public school:string = 'SQI'
  public age:number = 80
  public special:boolean = true
  // public name = 'David'
  // private school = 'SQI'
  // public age = 80

  ngOnInit(){
    console.log(this.name);
    console.log(this.school);
    
  }

  myname(){
    console.log(this.school);
    
  }
}

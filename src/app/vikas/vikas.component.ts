import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vikas',
  templateUrl: './vikas.component.html',
  styleUrls: ['./vikas.component.css']
})
export class VikasComponent implements OnInit {
 
  data={
    name: 'vikas',
    age: '21',
    gender: 'male',
    designation: 'hello',
    bio: 'ok'

  }

  constructor() { }

  ngOnInit(): void {

  }
  Getdata(value:any)
  {
    console.log("my value",value);
    alert(value);
    
  }

}

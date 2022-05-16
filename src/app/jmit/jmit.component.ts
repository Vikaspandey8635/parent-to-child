import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jmit',
  templateUrl: './jmit.component.html',
  styleUrls: ['./jmit.component.css']
})
export class JmitComponent implements OnInit {
  @Input() public myInput:any;
  @Output() myOutput:EventEmitter<string>=new EventEmitter();
  outputstring = "parent class is intitilized";


  constructor() { }

  ngOnInit(): void {
    console.log(this.myInput);

  }

  Datasend()
  {
    this.myOutput.emit(this.outputstring);
  }

}

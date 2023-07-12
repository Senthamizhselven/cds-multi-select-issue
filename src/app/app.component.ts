import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  errorForm?: FormGroup;
  options = [
    'India',
    'United States',
    'United Kingdom',
    'South Africa',
    'Brazil',
  ];

  ngOnInit(): void {
    this.errorForm = new FormGroup({
      multiSelect: new FormControl(),
      name: new FormControl()
    });
  }

  onSubmit = ()=>{
    alert("Selected countries: " + this.errorForm?.value.multiSelect)
  }
}

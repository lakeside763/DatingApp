import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  registerMode = false;

  values: any;

  dataObjects = [
    {
      Title: 'Traffic',
      Value: '600,000',
      color:  'yellow',
      icon: 'fa fa-camera'
    },
    {
      Title: 'Vehicle',
      Value: '450,000',
      color:  'green',
      icon: 'fa fa-user'
    },
    {
      Title: 'Aircraft',
      Value: '500,000',
      color:  'red',
      icon:  'fa fa-phone'
    }
];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

  getValues() {
    this.http.get('http://localhost:4000/api/values').subscribe(response => {
      this.values = response;
      console.log(this.values);
    }, error => {
      console.log(error);
    });
  }

}

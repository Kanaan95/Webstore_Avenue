import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  navigation_items = [
    {
      code: 'music',
      label: 'Music'
    }
    ,
    {
      code: 'games',
      label: 'Games'
    }
    ,
    {
      code: 'electronics',
      label: 'Electronics'
    }
    ,
    {
      code: 'users',
      label: 'Users'
    }
    ,
    {
      code: 'signup',
      label: 'Sign Up'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}

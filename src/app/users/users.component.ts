import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserVO } from '../signup/UserVO';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() ressources;

  @Output() onDelete = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  popupConfirm(user: UserVO) {
    this.onDelete.emit(user)
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { UserVO } from '../signup/UserVO';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  page: string;

  ressources: any[];

  userSelected: UserVO;


  constructor(private router: ActivatedRoute, private service: AppService) { }

  ngOnInit() {
    this.router.params.subscribe(
      params => {
        this.page = params['id'];
        this.getAll()
      }
    )
  }

  getAll() {
    this.service.get(this.page).subscribe(
      response => this.ressources = response
    )
  }

  openConfirmModal(user: UserVO) {
    console.log(user)
    var result = confirm("Are you sure you want to delete " + user.firstName + " " + user.lastName + "?");
    if (result) {
      this.deleteUser(user)
    }
  }

  deleteUser(user) {

    return this.service.delete(this.page, user.id).subscribe(
      () => {
        alert('User deleted');
        this.getAll();
      }
    )
  }

  popupModal(user: UserVO) {
    this.userSelected = user
  }


}

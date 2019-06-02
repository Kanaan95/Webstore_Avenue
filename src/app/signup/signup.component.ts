import { Component, OnInit } from '@angular/core';
import { UserVO } from './UserVO';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private url = "users";

  //Page title
  title;


  // Init form components
  formComponents = [
    {
      code: "firstName",
      label: "First Name",
      type: "input"
    },
    {
      code: "lastName",
      label: "Last Name",
      type: "input"
    },
    {
      code: "gender",
      label: "Gender",
      type: "select",
      options: [
        {
          code: "M",
          label: "Male"
        }
        ,
        {
          code: "F",
          label: "Female"
        }
      ]
    },

    {
      code: "email",
      label: "Email",
      type: "input"
    },
    {
      code: "address",
      label: "Address",
      type: "input"
    }
  ];

  // User object
  user = new UserVO()

  id;

  signupForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl(
      "",
      Validators.compose([Validators.required, Validators.email])
    ),
    address: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required)
  });

  constructor(
    private service: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      if (this.id) {
        this.title = "Edit User Form";
        this.service.get("users/" + this.id).subscribe(response => {
          Object.keys(response).forEach(r => {
            this.user[r] = response[r]
          })
        });
      } else this.title = "Sign Up Form";
    });

    // this.signupForm.controls
  }

  addUser() {
    this.service.post(this.url, this.user).subscribe(response => {
      alert('User Added')
      this.router.navigate(["/users"]);
    });
  }

  updateUser() {
    this.service.update("users/" + this.id, this.user).subscribe(response => {
      alert("User updated");
      this.router.navigate(["users"]);
    });
  }

  onClick() {
    if (this.signupForm.invalid) {
      Object.keys(this.signupForm.controls).forEach(fc => {
        this.signupForm.get(fc).markAsTouched()
        this.signupForm.get(fc).updateValueAndValidity()
      })
    }
    else
      if (this.id) this.updateUser();
      else this.addUser();
  }

  get firstName() {
    return this.signupForm.get("firstName");
  }

  get lastName() {
    return this.signupForm.get("lastName");
  }

  get email() {
    return this.signupForm.get("email");
  }

}

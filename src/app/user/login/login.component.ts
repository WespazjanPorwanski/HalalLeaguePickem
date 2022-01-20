import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {User} from "../user.model";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUser: User = {name: '', password: '', points: 0};

  constructor(private modalService: NgbModal, private loginService: LoginService) {
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.loginService.checkUser(result).subscribe(
        res => {
          console.log(res);
        }
      )
    });
  }

  ngOnInit(): void {
  }

}

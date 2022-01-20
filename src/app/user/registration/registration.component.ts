import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {RegistrationService} from "./registration.service";
import {User} from "../user.model";
import {CryptoService} from "../crypto.service";
import {LoginService} from "../login/login.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  closeResult = '';
  registerUser: User = {name: '', password: '', points: 0};

  constructor(private modalService: NgbModal,
              private loginService: LoginService,
              private registrationService: RegistrationService,
              private cryptoService: CryptoService) {
  }

  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      let newUser = {name: result.name, password: result.password, points: 0};
      newUser.password = this.cryptoService.encrypt(result.password);
      this.registrationService.addUserToDb(newUser)
      this.loginService.checkUser(result).subscribe(res => console.log('logged in'))
    });
  }


}

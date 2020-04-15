import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../authentication/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public fullName: string;
  public currentUser: any;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(
      x => this.currentUser = x);

    if (this.currentUser) {
      this.fullName = authenticationService.currentUserValue.firstName + ' ' +
        authenticationService.currentUserValue.lastName;
    } else {
      this.fullName = 'Profile';
    }
  }

  ngOnInit(): void {
  }

}

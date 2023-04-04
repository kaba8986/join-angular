import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.class';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  loading = false;
  newUser: User = new User();

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}

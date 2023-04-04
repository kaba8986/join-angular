import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-password-forgotten',
  templateUrl: './password-forgotten.component.html',
  styleUrls: ['./password-forgotten.component.scss']
})
export class PasswordForgottenComponent implements OnInit {

  loading = false;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}

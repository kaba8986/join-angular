import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loggedIn = false;
  loggedId: string;

  loggedUser: any;
  userLoaded = false;
  
  constructor(
    public _authService: AuthService,
    public _afAuth: AngularFireAuth,
  ) {

  }
}

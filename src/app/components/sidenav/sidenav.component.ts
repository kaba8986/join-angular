import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  loggedIn = false;
  loggedId: string;

  loggedUser: any;
  userLoaded = false;

  constructor(
    public _authService: AuthService,
    public _afAuth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
  }

}

import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user'; //Interface, not class



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  userName: string = "";
  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore, //Inject Firestore Service
    public afAuth: AngularFireAuth, //Incet FireAuth Service
    public router: Router,
    public ngZone: NgZone //NgZone service to remove outside scope warning
  ) { 
    /* Saving user data in localstorage when logged in 
    and setting up null when logged out */ 

    this.afAuth.authState.subscribe((user) => {
      if(user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    })
  }

  //Sign in with email / password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => { 
        // this.SetUserData(result.user);
        this.afAuth.authState.subscribe((user) => {
          if(user) {
            this.router.navigate(['summary']);
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      })
  }

  //Sign up with email / password
  SignUp(email: string, password: string, firstName: string, lastName: string) {
    console.log('Signup: ', firstName + " "  + lastName);
    return this.afAuth
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      /* Call the SendVerificationMail() function when new user sign up
      and return promise */
      this.SendVarificationMail();
      this.SetUserData(result.user, firstName, lastName);
    })
    .catch((error) => {
      window.alert(error.message);
    })
  }


  //Send email verification when new user signed up
  SendVarificationMail() {
    return this.afAuth.currentUser
    .then((u: any) => u.sendEmailVerification())
    .then(() => {
      this.router.navigate(['success']);
    })
  }


  //Reset forgot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
    .sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      this.router.navigate(['reset-password']);
    })
    .catch((error) => {
      window.alert(error.message);
    })
  }


  //Returns true when user is logged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }



  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore and AngularFirestoreDocument service */
  SetUserData(user: any, fN?: string, lN?: string) {
    console.log('Firstore: ', fN + " " + lN);
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: fN + " " + lN,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      tasks: user.tasks = []
    }

    return userRef.set(userData, {merge: true});
  }


  //Sign out
  SignOut() {
    return this.afAuth.signOut()
    .then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
      this.userName = "";
    })
  }
}

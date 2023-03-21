import {Component, EventEmitter, Output} from '@angular/core';
import {FirebaseService} from "./services/firebase.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testwebb';
  isSignedIn = false;

  @Output() isLogout = new EventEmitter<void>();

  constructor(public firebaseService: FirebaseService) {}

  ngOnInit(){
    if(localStorage.getItem('user') !== null)
      this.isSignedIn = true;
    else this.isSignedIn = false;
  }
  async onSignup(email: string, password: string) {
    await this.firebaseService.signup(email, password);
    if (this.firebaseService.isLoggedIn) this.isSignedIn = true;
  }

  async onSignin(email: string, password: string) {
    await this.firebaseService.signin(email, password);
    if (this.firebaseService.isLoggedIn) this.isSignedIn = true;
  }

  handleLogout() {
    this.firebaseService.logout();
    this.isLogout.emit();
    this.isSignedIn = false;
  }

}

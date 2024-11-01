import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from '@angular/fire/auth';


@Injectable({providedIn: 'root'})
export class LoginService {
    constructor(private auth: Auth) { }

    loginWithGoogle(){
        return signInWithPopup(this.auth, new GoogleAuthProvider());
    };

    login(email: string, password: string) {
        return signInWithEmailAndPassword(this.auth, email, password);
      }

    logout(){
        return signOut(this.auth);
    }
}
import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut } from '@angular/fire/auth';


@Injectable({providedIn: 'root'})
export class LoginService {
    constructor(private auth: Auth) { }

    loginWithGoogle(){
        return signInWithPopup(this.auth, new GoogleAuthProvider());
    };

    logout(){
        return signOut(this.auth);
    }
}
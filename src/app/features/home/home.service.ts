import { Injectable } from '@angular/core';
import { Auth, authState, signOut, User } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HomeService {

    user$: Observable<User | null>;

    constructor(private auth: Auth) {
        this.user$ = authState(this.auth);
    }

    logout() {
        return signOut(this.auth);
    }
}
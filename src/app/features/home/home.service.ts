import { inject, Injectable } from '@angular/core';
import { Auth, authState, signOut, User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HomeService {
    private readonly router = inject(Router);

    user$: Observable<User | null>;
    
    constructor(private auth: Auth) { 
        this.user$ = authState(this.auth);
    }
    
    logout(){
        return signOut(this.auth)
            .then(() => {
                console.log('deslogueado con exito');

                return this.router.navigate(['/login']);
            })
            .catch(error => console.error(error));
    }
}
import { inject, Injectable } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class HomeService {
    private readonly router = inject(Router);

    constructor(private auth: Auth) { }
    
    logout(){
        return signOut(this.auth)
            .then(() => {
                console.log('deslogueado con exito');

                return this.router.navigate(['/login']);
            })
            .catch(error => console.error(error));
    }
}
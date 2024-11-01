import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, updateProfile } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class RegisterService {
    constructor(private auth: Auth) { }

    registrarse(email: string, contraseña: string, nombreUsuario: string) {
        return createUserWithEmailAndPassword(this.auth, email, contraseña)
            .then(userCredential => {
                return updateProfile(userCredential.user, { displayName: nombreUsuario });
            });
    }

}
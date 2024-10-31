import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from './login.service';

@Component({
    selector: 'app-home',
    templateUrl: 'login.component.html',
    standalone: true,
    imports:[RouterLink, RouterLinkActive, ReactiveFormsModule]
})

export class LoginComponent implements OnInit {
    private readonly fb = inject(FormBuilder);
    private readonly service = inject(LoginService);
    private readonly router = inject(Router);

    constructor() { }

    protected readonly form = this.fb.group({
        nombreUsuario: [],
        contraseña:[],
    });
    
    ngOnInit() { }

    loginGoogle(){
        this.service.loginWithGoogle()
            .then(() => this.router.navigate(['/home']))
            .catch(error => console.error('Login error', error));
    };
}
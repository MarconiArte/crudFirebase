import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'login.component.html',
    standalone: true,
    imports:[RouterLink, RouterLinkActive, ReactiveFormsModule]
})

export class LoginComponent implements OnInit {
    private readonly fb = inject(FormBuilder);
    constructor() { }

    protected readonly form = this.fb.group({
        nombreUsuario: [],
        contraseña:[],
    });
    
    ngOnInit() { }
}
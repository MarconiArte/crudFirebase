import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
    standalone: true,
    imports:[RouterLink, RouterLinkActive, ReactiveFormsModule]
})

export class RegisterComponent implements OnInit {
    private readonly fb = inject(FormBuilder);
    constructor() { }

    protected readonly form = this.fb.group({
        nombre: [],
        apellido:[],
        email:[],
        nombreUsuario:[],
        contraseña:[],
    });

    ngOnInit() { }
}
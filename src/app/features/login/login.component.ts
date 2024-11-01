import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LoginService } from './login.service';
import {ToastModule} from 'primeng/toast'
import { MessageService } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { ChipModule } from 'primeng/chip';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'app-home',
    templateUrl: 'login.component.html',
    standalone: true,
    imports:[FormsModule, RouterLink, RouterLinkActive, ReactiveFormsModule,ToastModule, ButtonModule ,TooltipModule,ChipModule, InputTextModule, FloatLabelModule],
    providers: [MessageService]
})

export class LoginComponent implements OnInit {
    private readonly fb = inject(FormBuilder);
    private readonly service = inject(LoginService);
    private readonly router = inject(Router);

    constructor(private messageService: MessageService) { }

    protected readonly form = this.fb.group({
        email: [],
        contraseña:[],
    });
    
    ngOnInit() { }

    loginGoogle(){
        this.service.loginWithGoogle()
            .then(() => {
                this.messageService.add({
                    severity:'success', 
                    summary:'Inicio de Sessión', 
                    detail:'Inicio de sesión exitoso.'});

                setTimeout(() => {
                        this.router.navigate(['/home']);
                    }, 1000);
            })
            .catch(() => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error de Inicio de Sesión',
                    detail: 'Hubo un problema al iniciar sesión. Inténtalo de nuevo.'
                });
            });
    };
}
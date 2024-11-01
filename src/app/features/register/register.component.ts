import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RegisterService } from './register.service';

type Form = FormGroup<{
    email: FormControl<string | null>;
    contraseña: FormControl<string | null>;
}>;

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
    standalone: true,
    imports: [FormsModule,RouterLink, RouterLinkActive, ReactiveFormsModule, ToastModule],
    providers: [MessageService]
})

export class RegisterComponent implements OnInit {
    private readonly fb = inject(FormBuilder);
    private readonly service = inject(RegisterService);
    private readonly router = inject(Router);

    constructor(private messageService: MessageService) { }

    protected readonly form = this.fb.group({
        email: ["" as string, [Validators.required, Validators.email]],
        nombreUsuario: ["" as string, [Validators.required]],
        contraseña: ["" as string, [Validators.required]],
    });

    ngOnInit() { }

    registarse() {
        this.service.registrarse(this.form.value.email!, this.form.value.contraseña!, this.form.value.nombreUsuario!)
            .then(() => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Registro exitoso',
                    detail: 'Usuario creado correctamente.'
                });

                setTimeout(() => {
                    this.router.navigate(['/home']);
                }, 1000);
            })
            .catch(error => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error en el registro',
                    detail: error.message
                });
            });
    }
}
import { Component, inject, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { User } from '@angular/fire/auth';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    standalone: true,
    imports: [ToolbarModule, ButtonModule, SplitButtonModule, InputTextModule, AvatarModule, ToastModule],
    providers: [MessageService]
})

export class HomeComponent implements OnInit {
    private readonly service = inject(HomeService);
    private readonly router = inject(Router)

    protected user: User | null = null;
    constructor(private messageService: MessageService) { }

    ngOnInit() {
        this.service.user$.subscribe(user => {
            this.user = user;
        });
    }

    logout() {
        this.service.logout()
            .then(() => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Cerrar sesión',
                    detail: 'Ha cerrado sesión con éxito.'
                });
                setTimeout(() => {
                    this.router.navigate(['/login']);
                }, 1000);
            })
            .catch(error => console.log(error)
            );
    }
}
import { Component, inject, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { User } from '@angular/fire/auth';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    standalone:true,
})

export class HomeComponent implements OnInit {
    private readonly service = inject(HomeService);

    protected user: User | null = null;
    constructor() { }

    ngOnInit() { 
        this.service.user$.subscribe(user => {
            this.user = user;
        });
    }

    logout(){
        this.service.logout();
    }
}
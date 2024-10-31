import { Component, inject, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    standalone:true,
})

export class HomeComponent implements OnInit {
    private readonly service = inject(HomeService);

    constructor() { }

    ngOnInit() { }

    logout(){
        this.service.logout();
    }
}
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-product',
    templateUrl: 'product.component.html',
    standalone: true,
    imports:[ReactiveFormsModule, FormsModule]
})

export class ProductComponent implements OnInit {
    private readonly fb = inject(FormBuilder);

    constructor() { }

    ngOnInit() {
        this.form.valueChanges.subscribe(x => console.log(x))
     }

    protected readonly form = this.fb.group({
        nombre: [null as string | null, [Validators.required]],
        codigo: [null as string | null, [Validators.required]],
        precio: [null as number | null, [Validators.required]],
        nota: [null as string | null, [Validators.required]],
    }); 
}
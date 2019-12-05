import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-confirmar-token',
    templateUrl: './confirmar-token.component.html',
    styleUrls: ['./confirmar-token.component.css']
})
export class ConfirmarTokenComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    onClick() {
        this.router.navigate([`cadastro/endereco`]);
    }
}

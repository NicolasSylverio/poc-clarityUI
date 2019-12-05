import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ofertas-emprestimo',
    templateUrl: './ofertas-emprestimo.component.html',
    styleUrls: ['./ofertas-emprestimo.component.css']
})
export class OfertasEmprestimoComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    goParcela(valor: number) {
        this.router.navigate([`parcelas/${valor}`]);
    }
}

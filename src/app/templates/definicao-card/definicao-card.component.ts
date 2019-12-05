import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-definicao-card',
    templateUrl: './definicao-card.component.html',
    styleUrls: ['./definicao-card.component.css']
})
export class DefinicaoCardComponent implements OnInit {

    valor: number;
    parcela: number;
    valorParcela: number;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        this.valor = Number(this.activatedRoute.snapshot.paramMap.get('valor'));
        this.parcela = Number(this.activatedRoute.snapshot.paramMap.get('parcela'));

        if (this.valor <= 0) {
            this.valor = 500;
        }

        if (this.parcela <= 0) {
            this.parcela = 3;
        }

        this.valorParcela = this.valor / this.parcela;

    }

    ngOnInit(): void {
    }

    onClick() {
        this.router.navigate([`cadastro`]);
    }

}

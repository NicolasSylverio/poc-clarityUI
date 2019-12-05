import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-definicao-oferta',
    templateUrl: './definicao-oferta.component.html',
    styleUrls: ['./definicao-oferta.component.css']
})
export class DefinicaoOfertaComponent implements OnInit {

    valor: number;
    parcela: number;

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
    }

    ngOnInit() {
    }

}

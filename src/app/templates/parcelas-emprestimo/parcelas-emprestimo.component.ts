import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-parcelas-emprestimo',
    templateUrl: './parcelas-emprestimo.component.html',
    styleUrls: ['./parcelas-emprestimo.component.css']
})
export class ParcelasEmprestimoComponent implements OnInit {

    valor: number;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        this.valor = Number(this.activatedRoute.snapshot.paramMap.get('valor'));
    }

    ngOnInit() {
    }

    goDefinicaoOferta(parcela: number) {
        if (this.valor <= 0) {
            this.valor = 500;
        }
        this.router.navigate([`definicao/${this.valor}/${parcela}`]);
    }

goBack(){
    this.router.navigate([`ofertas`]);
}

}

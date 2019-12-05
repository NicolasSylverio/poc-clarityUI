import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dados-cadastrais-motivo',
    templateUrl: './dados-cadastrais-motivo.component.html',
    styleUrls: ['./dados-cadastrais-motivo.component.css']
})
export class DadosCadastraisMotivoComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    onClick() {
        this.router.navigate([`cadastro/motivo`]);
    }
}

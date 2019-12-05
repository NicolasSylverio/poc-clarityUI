import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dados-cadastrais-endereco',
    templateUrl: './dados-cadastrais-endereco.component.html',
    styleUrls: ['./dados-cadastrais-endereco.component.css']
})
export class DadosCadastraisEnderecoComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    onClick() {
        this.router.navigate([`cadastro/motivo`]);
    }
}

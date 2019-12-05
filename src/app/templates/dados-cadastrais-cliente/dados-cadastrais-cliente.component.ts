import { Component, OnInit } from '@angular/core';
import { Endereco } from '../../models/endereco/endereco.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dados-cadastrais-cliente',
    templateUrl: './dados-cadastrais-cliente.component.html',
    styleUrls: ['./dados-cadastrais-cliente.component.css']
})
export class DadosCadastraisClienteComponent implements OnInit {

    endereco: Endereco;

    constructor(
        private router: Router
    ) { }

    ngOnInit() {

    }

    onClick() {
        this.router.navigate([`token`]);
    }

}

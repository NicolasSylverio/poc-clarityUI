import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

import { CameraComponent } from './templates/camera/camera.component';
import { Chart1Component } from './templates/chart1/chart1.component'
import { Chart2Component } from './templates/chart2/chart2.component'
import { Chart3Component } from './templates/chart3/chart3.component'
import { Chart4Component } from './templates/chart4/chart4.component'
import { Chart5Component } from './templates/chart5/chart5.component'
import { Chart6Component } from './templates/chart6/chart6.component'
import { Chart7Component } from './templates/chart7/chart7.component'
import { Chart8Component } from './templates/chart8/chart8.component'
import { ChartMenuComponent } from './templates/chart-menu/chart-menu.component'
import { LogDetailsComponent } from './templates/log-details/log-details.component'
import { OfertasEmprestimoComponent } from './templates/ofertas-emprestimo/ofertas-emprestimo.component'
import { PageNotFoundComponent } from './templates/page-not-found/page-not-found.component'
import { ParcelasEmprestimoComponent } from './templates/parcelas-emprestimo/parcelas-emprestimo.component'
import { DadosCadastraisEnderecoComponent } from './templates/dados-cadastrais-endereco/dados-cadastrais-endereco.component';
import { DefinicaoOfertaComponent } from './templates/definicao-oferta/definicao-oferta.component';
import { DadosCadastraisClienteComponent } from './templates/dados-cadastrais-cliente/dados-cadastrais-cliente.component';
import { ConfirmarTokenComponent } from './templates/confirmar-token/confirmar-token.component';
import { DadosCadastraisMotivoComponent } from './templates/dados-cadastrais-motivo/dados-cadastrais-motivo.component';
import { HomeComponent } from './templates/home/home.component';
import { GeolocationComponent } from './templates/geolocation/geolocation.component';

const appRoutings: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'cadastro', component: DadosCadastraisClienteComponent },
    { path: 'cadastro/endereco', component: DadosCadastraisEnderecoComponent },
    { path: 'cadastro/motivo', component: DadosCadastraisMotivoComponent },

    { path: 'token', component: ConfirmarTokenComponent },

    { path: 'home', component: HomeComponent },
    { path: 'ofertas', component: OfertasEmprestimoComponent },

    { path: 'parcelas', component: ParcelasEmprestimoComponent },
    { path: 'parcelas/:valor', component: ParcelasEmprestimoComponent },

    { path: 'definicao', component: DefinicaoOfertaComponent },
    { path: 'definicao/:valor', component: DefinicaoOfertaComponent },
    { path: 'definicao/:valor/:parcela', component: DefinicaoOfertaComponent },

    { path: 'chart', component: ChartMenuComponent },
    { path: 'chart1', component: Chart1Component },
    { path: 'chart2', component: Chart2Component },
    { path: 'chart3', component: Chart3Component },
    { path: 'chart4', component: Chart4Component },
    { path: 'chart5', component: Chart5Component },
    { path: 'chart6', component: Chart6Component },
    { path: 'chart7', component: Chart7Component },
    { path: 'chart8', component: Chart8Component },

    { path: 'camera', component: CameraComponent },

    { path: 'log', component: LogDetailsComponent },

    { path: 'geolocation', component: GeolocationComponent },

    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutings, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRouting { }

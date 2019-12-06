import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { ChartsModule } from 'ng2-charts';
import { WebcamModule } from 'ngx-webcam';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { OpencagedataService } from './services/opencagedata.service';
import { CameraComponent } from './templates/camera/camera.component';
import { ChartMenuComponent } from './templates/chart-menu/chart-menu.component';
import { Chart1Component } from './templates/chart1/chart1.component';
import { Chart2Component } from './templates/chart2/chart2.component';
import { Chart3Component } from './templates/chart3/chart3.component';
import { Chart4Component } from './templates/chart4/chart4.component';
import { Chart5Component } from './templates/chart5/chart5.component';
import { Chart6Component } from './templates/chart6/chart6.component';
import { Chart7Component } from './templates/chart7/chart7.component';
import { Chart8Component } from './templates/chart8/chart8.component';
import { ConfirmarTokenComponent } from './templates/confirmar-token/confirmar-token.component';
import { DadosCadastraisClienteComponent } from './templates/dados-cadastrais-cliente/dados-cadastrais-cliente.component';
import { DadosCadastraisEnderecoComponent } from './templates/dados-cadastrais-endereco/dados-cadastrais-endereco.component';
import { DadosCadastraisMotivoComponent } from './templates/dados-cadastrais-motivo/dados-cadastrais-motivo.component';
import { DefinicaoCardComponent } from './templates/definicao-card/definicao-card.component';
import { DefinicaoOfertaComponent } from './templates/definicao-oferta/definicao-oferta.component';
import { FaleConoscoComponent } from './templates/fale-conosco/fale-conosco.component';
import { GeolocationComponent } from './templates/geolocation/geolocation.component';
import { HeaderComponent } from './templates/header/header.component';
import { HomeComponent } from './templates/home/home.component';
import { LogDetailsComponent } from './templates/log-details/log-details.component';
import { OfertasEmprestimoComponent } from './templates/ofertas-emprestimo/ofertas-emprestimo.component';
import { PageNotFoundComponent } from './templates/page-not-found/page-not-found.component';
import { ParcelasEmprestimoComponent } from './templates/parcelas-emprestimo/parcelas-emprestimo.component';

@NgModule({
    declarations: [
        AppComponent,
        Chart1Component,
        Chart2Component,
        Chart3Component,
        Chart4Component,
        Chart5Component,
        Chart6Component,
        Chart7Component,
        Chart8Component,
        ChartMenuComponent,
        ConfirmarTokenComponent,
        DadosCadastraisClienteComponent,
        DadosCadastraisEnderecoComponent,
        DadosCadastraisMotivoComponent,
        DefinicaoCardComponent,
        DefinicaoOfertaComponent,
        FaleConoscoComponent,
        HeaderComponent,
        HomeComponent,
        OfertasEmprestimoComponent,
        PageNotFoundComponent,
        ParcelasEmprestimoComponent,
        CameraComponent,
        LogDetailsComponent,
        GeolocationComponent
    ],
    imports: [
        AppRouting,
        BrowserAnimationsModule,
        BrowserModule,
        ChartsModule,
        ClarityModule,
        HttpClientModule,
        HttpClientJsonpModule,
        WebcamModule
    ],
    providers: [OpencagedataService],
    bootstrap: [AppComponent]
})
export class AppModule {}

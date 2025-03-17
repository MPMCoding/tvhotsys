import { Component, HostListener, ViewChild, ElementRef, importProvidersFrom  } from '@angular/core';
import { Router } from '@angular/router';
import { SlideShowService } from './slideshow.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
    standalone: true,
    imports: [
		CommonModule,
		FormsModule,
	],
    templateUrl: './slideshow.component.html',
})
export class SlideShowComponent { 
    @ViewChild('dadosListaVendaUnidade', { static: false }) dadosListaVendaUnidade!: ElementRef;
    @ViewChild('dadosListaVendaUnidadeColuna', { static: false }) dadosListaVendaUnidadeColuna!: ElementRef;
    @ViewChild('dadosListaVenda', { static: false }) dadosListaVenda!: ElementRef;
    @ViewChild('dadosListaVendaColuna', { static: false }) dadosListaVendaColuna!: ElementRef;
    @ViewChild('dadosListaAniversariante', { static: false }) dadosListaAniversariante!: ElementRef;
    @ViewChild('dadosListaAniversarianteColuna', { static: false }) dadosListaAniversarianteColuna!: ElementRef;

    loading: boolean        = false;
    visible: boolean        = true;
    isMaximized: boolean    = false;

    sessoes: any                = [];
    carregamento: number        = 0;
    sessoesCarregadas: any[]    = [];
    scrollInterval: any
    sessaoAtualIndex: number    = 0;
    limiteProcessamento: number = 6;
    passarSlideAutomatico: any;
    controleSessoes: any = 0;

    constructor(
        private router: Router, 
        private service: SlideShowService,
    ) {}

    ngOnInit() {
        this.carregamentoSessoes();
    }

    carregamentoSessoes(){
        this.service.getSessoes().then(
            (response: any) => {
                this.loading  	        = false
                this.sessoes            = response;
                this.carregarSessoes();
            },
            (error: any) =>{
              if(this.carregamento < 3)
                {
                  this.carregamento ++
                  this.carregamentoSessoes()
                }
            }
        );   
    }

    sessoesProntas: any = 0

    carregandoSessoes: boolean = false;

    async carregarSessoes() {
        if (this.carregandoSessoes) {
            return;
        }
        this.carregandoSessoes  = true;
        this.carregamentoSessao = true;

        this.pararSlideAutomatico();

        const limiteSuperior = this.sessaoAtualIndex + this.limiteProcessamento;

        for (let i = this.sessoesProntas; i <= limiteSuperior && i < this.sessoes.length; i++) 
        {
            const sessao = this.sessoes[i];

            if (sessao.layout !== 'F' && sessao.layout !== 'T' && sessao.id_sessao) {
                await this.enviarSessaoAoBackend(sessao);
                this.sessoesProntas = this.sessoesProntas +1;
            } else
            {
                this.sessoesCarregadas.push(sessao);
                this.sessoesProntas = this.sessoesProntas +1;
            }
        }

        this.carregandoSessoes  = false; 
        this.carregamentoSessao = false;
        this.iniciarSlideAutomatico();
        ///this.verificarCondicoesSlideAtual();
    }

    indexScroll: any = 0;

    enviarSessaoAoBackend(sessao: any): Promise<any> {
        const payload = {
            id_sessao: sessao?.id_sessao,
            tipo_dado: sessao?.tipo_dado,
            id_unidade_negocios: sessao?.id_unidade_negocios,
            unidade_negocios: sessao?.unidade_negocios,
            tipo: sessao?.tipo,
            periodo: sessao?.periodo,
            status_proposta: sessao?.status_proposta,
            produto: sessao?.produto,
            tipo_sessao: sessao?.tipo_sessao,
            limite_agente: sessao?.limite_agente,
            limite_unidade: sessao?.limite_unidade,
            tipo_sumalizacao: sessao?.tipo_sumalizacao,
            agrupar_agente: sessao?.agrupar_agente,
        };

        return this.service.enviarSessao(payload).then(
            (response: any) => {

                this.loading        = false;
                this.carregamento   = 0;

                if (response.ok === false)
                {
                    return response;
                }

                if (sessao?.tipo == 'S' && sessao?.tipo_sessao == 'A')
                {
                    if (!sessao.agrupar_agente)
                    {
                        response?.agentes.forEach((item: any) => {
                            item.nome           = sessao?.nome;
                            item.subtitulo      = sessao?.subtitulo;
                            item.layout         = sessao?.layout;
                            item.tipo           = sessao?.tipo;
                            item.tipo_sessao    = sessao?.tipo_sessao;
                            item.agrupar_agente = sessao?.agrupar_agente;
                            item.background     = sessao?.background;
                            item.id_scroll      = this.indexScroll;
                            item.data           = response?.data;
    
                            if (sessao?.layout === 'D' && item?.propostas?.length === 3) {
                                if (item?.agentes)
                                {
                                    const temp          = {...item?.propostas[0]};
                                    item.agentes[0]     = item?.propostas[1];
                                    item.agentes[1]     = temp;
                                } else
                                {
                                    const temp          = {...item?.propostas[0]};
                                    item.propostas[0]     = item?.propostas[1];
                                    item.propostas[1]     = temp;
                                }
                            }
    
                            this.sessoesCarregadas.push(item);
                            this.indexScroll        = this.indexScroll + 1;
                        });
                    } else
                    {
                        sessao.data                 = response.data;
                        let total                   = 0;
                        response?.agentes.forEach((item: any) => { 
                            total += item.valor_base_comissao;
                        });

                        sessao.valor_base_comissao = total;

                        if (sessao?.layout === 'D' && response.agentes?.length === 3) {
                            const temp              = {...response.agentes[0]};
                            response.agentes[0]     = response?.agentes[1];
                            response.agentes[1]     = temp;
                        }
                        sessao.propostas            = response.agentes;

                        this.sessoesCarregadas.push(sessao);
                    }
                } else
                {
                    if (sessao.layout === 'D' && response?.agentes?.length === 3) {
                        const temp          = {...response.agentes[0]};
                        response.agentes[0] = response.agentes[1];
                        response.agentes[1] = temp;
                    }

                    sessao.id_scroll    = this.indexScroll;
                    sessao.dados        = response;
                    sessao.data         = response?.data;
                    this.sessoesCarregadas.push(sessao);
                    this.indexScroll    = this.indexScroll + 1;
                }

                return response;
            },
            (error: any) => {
                if (this.carregamento < 3) 
                {
                    this.carregamento++;
                    return this.enviarSessaoAoBackend(sessao); 
                } else 
                {
                    this.sessoesProntas  = this.sessoesProntas - 1;
                    return Promise.reject(error); 
                }
            }
        );
    }

    voltarSessao() {
        this.pararSlideAutomatico();
        if (this.sessaoAtualIndex > 0) {
            this.sessaoAtualIndex--;
        }
        this.iniciarSlideAutomatico();
        this.verificarCondicoesSlideAtual();
        this.pararRolagem();
    }
    
    async avancarSessao() {
        this.pararSlideAutomatico();
        this.pararRolagem();

        if (this.carregandoSessoes)
        {
            return;
        }

        if ( (this.sessoesProntas < this.sessoes.length)) {
            await this.esperarCarregamentoProximoSlide();
        }

        setTimeout(() => {
            if (this.sessaoAtualIndex < this.sessoesCarregadas.length - 1) {

                this.sessaoAtualIndex++;

                const limiteSuperior = this.sessaoAtualIndex + this.limiteProcessamento;
                
                if (this.sessoesProntas <= limiteSuperior && this.sessaoAtualIndex < this.sessoes.length) {
                    this.carregarSessoes();
                }
            } else
            {
                this.sessoesCarregadas = []
                this.sessaoAtualIndex  = 0;
                this.sessoesProntas    = 0
                this.carregamentoSessoes();
            }
            this.verificarCondicoesSlideAtual();
            this.iniciarSlideAutomatico()
        }, 2);
    }

    carregamentoSessao: boolean = false;

    async esperarCarregamentoProximoSlide(): Promise<void> {
        let sessaoProntas       = this.sessoesProntas;
        const limiteSuperior    = this.sessaoAtualIndex + this.limiteProcessamento;

        while ( ( ( (this.sessoesProntas < this.sessoes.length) && (this.sessoesProntas <= limiteSuperior)) || this.carregandoSessoes ) && (sessaoProntas == this.sessoesProntas)) {
            this.carregamentoSessao = true;
            await new Promise(resolve => setTimeout(resolve, 500));
        }

        this.carregamentoSessao = false;
    }

    embaralharSessoes(): void {
        for (let i = this.sessoesCarregadas.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [this.sessoesCarregadas[i], this.sessoesCarregadas[j]] = [
            this.sessoesCarregadas[j],
            this.sessoesCarregadas[i],
          ];
        }
    }

    pararRolagem() {
        if (this.scrollInterval) {
            clearInterval(this.scrollInterval);
            this.scrollInterval = null;
        }
    
        let lista = this.dadosListaVenda?.nativeElement;
        if (lista) {
            lista.scrollTop = 0;
        }

        lista = this.dadosListaVendaColuna?.nativeElement;
        if (lista) {
            lista.scrollTop = 0;
        }

        lista = this.dadosListaVendaUnidade?.nativeElement;
        if (lista) {
            lista.scrollTop = 0;
        }

        lista = this.dadosListaVendaUnidadeColuna?.nativeElement;
        if (lista) {
            lista.scrollTop = 0;
        }

        lista = this.dadosListaAniversariante?.nativeElement;
        if (lista) {
            lista.scrollTop = 0;
        }

        lista = this.dadosListaAniversarianteColuna?.nativeElement;
        if (lista) {
            lista.scrollTop = 0;
        }
    }

    verificarCondicoesSlideAtual() {
        const sessaoAtual = this.sessoesCarregadas[this.sessaoAtualIndex];
        if  ( (sessaoAtual?.layout === 'L' && sessaoAtual?.dados?.agentes?.length > 5) ||
              (sessaoAtual?.layout === 'C' && sessaoAtual?.dados?.agentes?.length > 12) ||
              (sessaoAtual?.layout === 'L' && sessaoAtual?.propostas?.length > 5) ||
              (sessaoAtual?.layout === 'C' && sessaoAtual?.propostas?.length > 12) 
            ) 
        {
            this.iniciarRolagem(sessaoAtual?.id_scroll)
        }
    }

    iniciarRolagem(id_scroll: any) {
    
        let scrollInterval: any = 0;
        clearInterval(scrollInterval);
        this.pararSlideAutomatico();
    
        setTimeout(() => {
            const lista = document.getElementById(id_scroll);
    
            if (!lista) return;
            lista.scrollTop = 0;
            this.pararSlideAutomatico();
    
            let scrollStep = 1; // Pixels por vez
            let scrollSpeed = 50; // Tempo entre deslocamentos (ms)
    
            if (this.sessoesCarregadas[this.sessaoAtualIndex]?.layout == 'C') {
                scrollStep = 1.5;
            }
    
            setTimeout(() => {
                scrollInterval = setInterval(() => {
                    this.pararSlideAutomatico();
                    lista.scrollTop += scrollStep;
    
                    // Verifica se chegou ao final da lista
                    if (lista.scrollTop + lista.clientHeight >= lista.scrollHeight) {
                        // Aguarda 3 segundos antes de avançar o slide
                        lista.scrollTop = 0;
                        clearInterval(scrollInterval);
                        scrollInterval = null;
    
                        setTimeout(() => this.avancarSessao(), 3000);
                    }
                }, scrollSpeed);
                this.scrollInterval = scrollInterval;
            }, 50);
        }, 0); // Executa logo após o próximo ciclo do evento
    }

    iniciarSlideAutomatico(): void {
        this.pararSlideAutomatico();

        this.passarSlideAutomatico = setInterval(() => {
          this.avancarSessao();
        }, 10000); 
    }

    pararSlideAutomatico(): void {
        if (this.passarSlideAutomatico) {
            clearInterval(this.passarSlideAutomatico);
        }
    }

    @HostListener('document:keydown', ['$event'])
    onKeyDown(event: KeyboardEvent): void {
        if (event.key === 'ArrowRight') {
            this.pararSlideAutomatico();
            this.avancarSessao();
        } else if (event.key === 'ArrowLeft') {
            this.pararSlideAutomatico();
            this.voltarSessao();
        }
    }

    toggleMaximize() {
        this.isMaximized = !this.isMaximized;
        if (this.isMaximized) {
            this.enterFullScreen();
        } else {
            this.exitFullScreen();
        } 
    }

    enterFullScreen() {
        const elem: any = document.documentElement; 
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { // Firefox
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { // Chrome, Safari e Opera
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { // IE/Edge
          elem.msRequestFullscreen();
        }
    }
    
    exitFullScreen() {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if ((document as any).mozCancelFullScreen) { // Firefox
          (document as any).mozCancelFullScreen();
        } else if ((document as any).webkitExitFullscreen) { // Chrome, Safari e Opera
          (document as any).webkitExitFullscreen();
        } else if ((document as any).msExitFullscreen) { // IE/Edge
          (document as any).msExitFullscreen();
        }
    }

    transformReal(value: any, tipo: any) {
        if (typeof value === 'string') {
            value = parseFloat(value.replace(',', '.'));
        }
    
        if (value != null && value !== undefined && !isNaN(value)) {
            if (tipo === 'V') {
                if (value === 0) {
                    return 'R$0,00';
                } else {
                    return 'R$' + value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                }
            } else {
                return value === 0 ? '0' : value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            }
        } else {
            return value;
        }
    }

    transformNumeroReal(value: any) {
        if (value == '')
        {
          return value;
        }
    
        if (typeof value === 'string') {
            value = parseFloat(value.replace(',', '.'));
        }
        if (value != null && value !== undefined && !isNaN(value)) {
            if (value === 0) {
                return 'R$0,00';
            } else {
                return 'R$' + value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            }
        } else {
            return value;
        }
    }

    ngOnDestroy() {
        this.pararSlideAutomatico();
        this.pararRolagem();
        this.carregandoSessoes  = false;
        this.carregamentoSessao = false
    }

}
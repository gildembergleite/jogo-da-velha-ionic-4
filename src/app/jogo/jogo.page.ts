import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavParams } from '@ionic/angular'
import { ModalController } from '@ionic/angular'
import { HomePage } from 'src - Copia/app/home/home.page';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.page.html',
  styleUrls: ['./jogo.page.scss'],
})
export class JogoPage implements OnInit {
  player1 : string = this.navParams.get('player1')
  player2 : string = this.navParams.get('player2')
  marcadorp1 : string
  marcadorp2 : string
  esconder = false
  playerAtual = this.navParams.get('player1')
  numeroJogada = 1
  caracterPlayerRodada : string
  gridClicado : number
  playerVencedor = ""
  caracterGrid1 = ""
  caracterGrid2 = ""
  caracterGrid3 = ""
  caracterGrid4 = ""
  caracterGrid5 = ""
  caracterGrid6 = ""
  caracterGrid7 = ""
  caracterGrid8 = ""
  caracterGrid9 = ""

  constructor(
    public router: Router,
    public alertController: AlertController,
    public navParams: NavParams,
    public modalController : ModalController
  ) { }

  ngOnInit() {
  }

  voltar(){
    this.modalController.dismiss()
  }

  defineCaracterRodada() {
    if (this.playerAtual === this.player1) {
      this.caracterPlayerRodada = this.marcadorp1;
    } else {
      this.caracterPlayerRodada = this.marcadorp2;
    }
  }

  setaValor(gridClicado) {
    if (gridClicado == 1) {
      this.caracterGrid1 = this.caracterPlayerRodada;
    } else if (gridClicado == 2) {
      this.caracterGrid2 = this.caracterPlayerRodada;
    } else if (gridClicado == 3) {
      this.caracterGrid3 = this.caracterPlayerRodada;
    } else if (gridClicado == 4) {
      this.caracterGrid4 = this.caracterPlayerRodada;
    } else if (gridClicado == 5) {
      this.caracterGrid5 = this.caracterPlayerRodada;
    } else if (gridClicado == 6) {
      this.caracterGrid6 = this.caracterPlayerRodada;
    } else if (gridClicado == 7) {
      this.caracterGrid7 = this.caracterPlayerRodada;
    } else if (gridClicado == 8) {
      this.caracterGrid8 = this.caracterPlayerRodada;
    } else if (gridClicado == 9) {
      this.caracterGrid9 = this.caracterPlayerRodada;
    }
  }

  definirNumeroJogada() {
    this.numeroJogada += 1;
  }

  definirPlayerJogada() {
    if (this.playerAtual === this.player1) {
      this.playerAtual = this.player2;
    } else {
      this.playerAtual = this.player1;
    }
  }

  testaResultado() {
    if (this.caracterGrid1 != "" && this.caracterGrid2 != "" && this.caracterGrid3 != "" && this.caracterGrid1 == this.caracterGrid2 && this.caracterGrid1 == this.caracterGrid3 && this.caracterGrid2 == this.caracterGrid3) {
      console.log("Ganhou linha 1");
      this.playerVencedor = this.playerAtual;
    } else if (this.caracterGrid4 != "" && this.caracterGrid5 != "" && this.caracterGrid6 != "" && this.caracterGrid4 == this.caracterGrid5 && this.caracterGrid4 == this.caracterGrid6 && this.caracterGrid5 == this.caracterGrid6) {
      console.log("Ganhou linha 2");
      this.playerVencedor = this.playerAtual;
    } else if (this.caracterGrid7 != "" && this.caracterGrid8 != "" && this.caracterGrid9 != "" && this.caracterGrid7 == this.caracterGrid8 && this.caracterGrid7 == this.caracterGrid9 && this.caracterGrid8 == this.caracterGrid9) {
      console.log("Ganhou linha 3");
      this.playerVencedor = this.playerAtual;
    } else if (this.caracterGrid1 != "" && this.caracterGrid4 != "" && this.caracterGrid7 != "" && this.caracterGrid1 == this.caracterGrid4 && this.caracterGrid1 == this.caracterGrid7 && this.caracterGrid4 == this.caracterGrid7) {
      console.log("Ganhou coluna 1");
      this.playerVencedor = this.playerAtual;
    } else if (this.caracterGrid2 != "" && this.caracterGrid5 != "" && this.caracterGrid8 != "" && this.caracterGrid2 == this.caracterGrid5 && this.caracterGrid2 == this.caracterGrid8 && this.caracterGrid5 == this.caracterGrid8) {
      console.log("Ganhou coluna 2");
      this.playerVencedor = this.playerAtual;
    } else if (this.caracterGrid3 != "" && this.caracterGrid6 != "" && this.caracterGrid9 != "" && this.caracterGrid3 == this.caracterGrid6 && this.caracterGrid3 == this.caracterGrid9 && this.caracterGrid6 == this.caracterGrid9) {
      console.log("Ganhou coluna 3");
      this.playerVencedor = this.playerAtual;
    } else if (this.caracterGrid1 != "" && this.caracterGrid5 != "" && this.caracterGrid9 != "" && this.caracterGrid1 == this.caracterGrid5 && this.caracterGrid1 == this.caracterGrid9 && this.caracterGrid5 == this.caracterGrid9) {
      console.log("Ganhou Vertical 1");
      this.playerVencedor = this.playerAtual;
    } else if (this.caracterGrid3 != "" && this.caracterGrid5 != "" && this.caracterGrid7 != "" && this.caracterGrid3 == this.caracterGrid5 && this.caracterGrid3 == this.caracterGrid7 && this.caracterGrid5 == this.caracterGrid7) {
      console.log("Ganhou Vertical 2");
      this.playerVencedor = this.playerAtual;
    }
  }

  escolherMarcador(marcadorp1) {
    if (marcadorp1 == null) {
      this.selecioneCaracter();
    } else if (marcadorp1 === "X") {
      this.marcadorp2 = "O";
      this.esconder = true;
    } else {
      this.marcadorp2 = "X";
      this.esconder = true;
    }
  }

  async novoJogo(){
    const alert = await this.alertController.create({
      header: 'Novo jogo',
      message: 'Tem certeza que deseja iniciar uma nova partida?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.encerrarPartida();
          }
        },
        {
          text: 'Cancelar'
        }
      ]
    }
    );
    await alert.present();
  }

  async vencedor() {
    const alert = await this.alertController.create({
      header: 'Vitória!',
      subHeader: 'Vencedor: ' + this.playerVencedor,
      message: 'Deseja iniciar uma nova partida?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.encerrarPartida();
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            this.encerrarPartida();
            this.modalController.dismiss()
          }
        }
      ]
    }
    );
    await alert.present();
    this.encerrarPartida();
  }

  async selecioneCaracter() {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: 'Selecione uma opção!',
      buttons: [{
        text: 'Ok',
        handler: () => {
        }
      }
      ]
    }
    );
    await alert.present();
  }

  async deuVelha() {
    const alert = await this.alertController.create({
      header: 'Deu Velha!',
      message: 'Deseja jogar novamente?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.encerrarPartida();
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            this.encerrarPartida();
            this.modalController.dismiss()
          }
        }
      ]
    });
    await alert.present();
    this.encerrarPartida();
  }

  encerrarPartida() {
    this.playerAtual = "";
    this.playerVencedor = "";
    this.numeroJogada = 1;
    this.esconder = false;
    this.caracterGrid1 = "";
    this.caracterGrid2 = "";
    this.caracterGrid3 = "";
    this.caracterGrid4 = "";
    this.caracterGrid5 = "";
    this.caracterGrid6 = "";
    this.caracterGrid7 = "";
    this.caracterGrid8 = "";
    this.caracterGrid9 = "";
  }

  valorJaIncluso() {
    this.exibeResultado();
  }

  jogar(gridClicado) {
    this.defineCaracterRodada();
    this.setaValor(gridClicado);
    this.definirNumeroJogada();
    this.exibeResultado();
    this.definirPlayerJogada();
  }

  verificaSetado(gridClicado) {
    if (gridClicado == 1) {
      if (this.caracterGrid1 != "") {
        this.valorJaIncluso();
      } else {
        this.jogar(gridClicado);
      }
    } else if (gridClicado == 2) {
      if (this.caracterGrid2 != "") {
        this.valorJaIncluso();
      } else {
        this.jogar(gridClicado);
      }
    } else if (gridClicado == 3) {
      if (this.caracterGrid3 != "") {
        this.valorJaIncluso();
      } else {
        this.jogar(gridClicado);
      }
    }
    else if (gridClicado == 4) {
      if (this.caracterGrid4 != "") {
        this.valorJaIncluso();
      } else {
        this.jogar(gridClicado);
      }
    } else if (gridClicado == 5) {
      if (this.caracterGrid5 != "") {
        this.valorJaIncluso();
      } else {
        this.jogar(gridClicado);
      }
    } else if (gridClicado == 6) {
      if (this.caracterGrid6 != "") {
        this.valorJaIncluso();
      } else {
        this.jogar(gridClicado);
      }
    } else if (gridClicado == 7) {
      if (this.caracterGrid7 != "") {
        this.valorJaIncluso();
      } else {
        this.jogar(gridClicado);
      }
    } else if (gridClicado == 8) {
      if (this.caracterGrid8 != "") {
        this.valorJaIncluso();
      } else {
        this.jogar(gridClicado);
      }
    } else if (gridClicado == 9) {
      if (this.caracterGrid9 != "") {
        this.valorJaIncluso();
      } else {
        this.jogar(gridClicado);
      }
    }
  }

  exibeResultado() {
    this.testaResultado();
    if (this.playerVencedor == "" && this.numeroJogada >= 10) {
      this.deuVelha();
    } else if (this.playerVencedor != "") {
      this.vencedor();
    }
  }
}
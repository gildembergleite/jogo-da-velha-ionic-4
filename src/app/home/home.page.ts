import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular'
import { AlertController } from '@ionic/angular'
import { JogoPage } from './../jogo/jogo.page'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  player1 : string
  player2 : string

  constructor(
    public router: Router,
    public modalController : ModalController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit(){
  }

  async novoJogo() {
    if(this.player1 == null || this.player2 == null){
      //this.player1 = 'Player 1'
      const alert = await this.alertCtrl.create({
        header: 'Nome(s) nulo(s)',
        message: 'Insira o nome dos dois players.',
        buttons: ['OK']
      })
  
      await alert.present();
    }
    else{
      const modal = await this.modalController.create({
        component: JogoPage,
        componentProps: {
          'player1': this.player1,
          'player2': this.player2
        }
      });
      return await modal.present();
    }
    
  }

}

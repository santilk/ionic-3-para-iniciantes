import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MoovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
    titulo:"Santil Keferson Json",
    data:"Agosto 01, 2018",
    descricao:"Estou criando um app Ionic 3...",
    qntd_likes: 12,
    qntd_coments: 4,
    time_coment: "5h ago"
  }

  public lista_filmes = new Array<any>();

  public nome_usuario:string = "Santil Keferson do Código";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private movieProvider: MoovieProvider
            ) {
  }

  public somaDoisNumeros(num1:number, num2:number):void {
    //alert("A soma de " + num1 + "+" + num2 + " é: " + (num1+num2) );
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data =>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno);
      },
      error => {
        console.log(error);
      }
    )
  }

}

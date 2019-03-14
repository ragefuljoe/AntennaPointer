import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-point-up-intro',
  templateUrl: './point-up-intro.page.html',
  styleUrls: ['./point-up-intro.page.scss'],
})
export class PointUpIntroPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }
  findHeight(){
    this.navCtrl.navigateForward('/point-up-start');
  }
}

import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-point-north',
  templateUrl: './point-north.page.html',
  styleUrls: ['./point-north.page.scss'],
})
export class PointNorthPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  findNorth(){
    this.navCtrl.navigateForward('/point-north-start');
  }
}

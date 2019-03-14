import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';

@Component({
  selector: 'app-point-up-start',
  templateUrl: './point-up-start.page.html',
  styleUrls: ['./point-up-start.page.scss'],
})
export class PointUpStartPage implements OnInit {

  public orientation = 0;
  options: GyroscopeOptions = {
    frequency: 100
  };
  constructor(
    public gyroscope: Gyroscope,
    private navCtrl: NavController,
    public platform: Platform,
  ) {
    this.platform.ready().then(() => {
      console.log("platform ready");
      this.myGyroscope();
    });
  }

  ngOnInit() {

  }
  myGyroscope() {
    console.log('starting Gyroscope');
    this.gyroscope.watch(this.options)
      .subscribe((orientation: GyroscopeOrientation) => {
        this.orientation += (orientation.x) * 6;
        //logic to check when oritentation values are that of a 30 deg angle from horizon
      });

  }

  gettingClose() {
    //31-37, 15-21
    return (this.orientation > 31 && this.orientation < 37) || (this.orientation >= 15 && this.orientation < 21);
  }
  spotOn(){
    return (this.orientation >= 21 && this.orientation <= 31);
  }

  goToEnd() {
    this.navCtrl.navigateForward('/end');

  }
}

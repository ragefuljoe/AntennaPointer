import { Component, OnInit, OnDestroy } from '@angular/core';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation/ngx';
import { SatteliteService } from '../sattelite.service'
import { NavController} from '@ionic/angular';


@Component({
  selector: 'app-point-north-start',
  templateUrl: './point-north-start.page.html',
  styleUrls: ['./point-north-start.page.scss'],
})
export class PointNorthStartPage implements OnInit, OnDestroy {

  public locked = false;
  private subscription;
  public orientation;
  public satName = 'sattelite';
  constructor(
    private deviceOrientation: DeviceOrientation,
    private satService: SatteliteService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    // Watch the device compass heading change
    this.subscription = this.deviceOrientation.watchHeading().subscribe(
      (data: DeviceOrientationCompassHeading) => { console.log(data); this.orientation = data; }
    );
    this.satName = this.satService.getSatName();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

  gettingClose() {
    return (this.orientation.magneticHeading > 300 && this.orientation.magneticHeading < 358) || (this.orientation.magneticHeading > 2 && this.orientation.magneticHeading < 60);
  }
  spotOn(){
    return (this.orientation.magneticHeading >= 358) || (this.orientation.magneticHeading <=2);
  }
  findHeight(){
    this.navCtrl.navigateForward('/point-up-intro');
  }

}

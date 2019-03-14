import { Component, OnInit } from '@angular/core';
import { SatteliteService } from '../sattelite.service';
import { LoadingController } from '@ionic/angular';
import { NavController} from '@ionic/angular';


@Component({
  selector: 'app-fintsattelite',
  templateUrl: './fintsattelite.page.html',
  styleUrls: ['./fintsattelite.page.scss'],
})
export class FintsattelitePage implements OnInit {

  // public showLoading = true;
  public matchedSatt = {'satNum':0, 'satName':''};
  // public matchedSattName = '';

  constructor(
    private navCtrl: NavController,
    private satService: SatteliteService,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.presentLoadingWithOptions();
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      mode: 'ios',
      showBackdrop: false,
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    await loading.present();
    this.satService.findSattelite()
    .subscribe(
      data => {
        console.log(data);
        this.matchedSatt = data;
        // this.matchedSattName = data.satName;
        loading.dismiss();
      }
    );
  }

  findNorth(){
    this.navCtrl.navigateForward('/point-north');
  }

}

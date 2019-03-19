import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  launches: Observable<any>;
  data : Array<any>;

  constructor(public navCtrl: NavController, private httpClient: HttpClient) { 
    this.launches = this.httpClient.get('https://api.spacexdata.com/v3/launches/');
    this.launches
    .subscribe(data => {
      console.log(data);
      this.data = data
    })
  }

}

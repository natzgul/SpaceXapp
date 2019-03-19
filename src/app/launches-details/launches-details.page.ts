import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { SpacexService } from './../api/spacex.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-launches-details',
  templateUrl: './launches-details.page.html',
  styleUrls: ['./launches-details.page.scss'],
})

export class LaunchesDetailsPage implements OnInit {

  launchesDetails = null;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private spacexService: SpacexService, 
    private youtube: YoutubeVideoPlayer,
    private domSanitizer: DomSanitizer) { }

  ngOnInit() {

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.spacexService.getDetails(id).subscribe(result => {
      console.log(result);
      this.launchesDetails = result;
      this.launchesDetails.links.youtube_id = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.launchesDetails.links.youtube_id)
      console.log(this.launchesDetails.links.youtube_id)
    });
    
  }

  /*openVideo(){
    this.youtube.openVideo('https://www.youtube.com/watch?v=PhTbzc-BqKs&feature=youtu.be');
  }
  */
}

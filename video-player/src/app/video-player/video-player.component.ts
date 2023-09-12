import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-player',
  template: `
    <video controls [src]="signedVideoUrl" width="800" height="450" controlsList="nodownload">
      Your browser does not support the video tag.
    </video>
  `,
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @Input() signedVideoUrl: string = '';


  constructor() { }

  ngOnInit(): void {
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  videoUrl = '';
  inputVideoUrl = '';

  updateVideoUrl(newUrl: string): void {
    this.videoUrl = newUrl;
  }

  // video loop 設定を変更
  loopVideo: boolean = false;

  toggleLoop(): void {
    this.loopVideo = !this.loopVideo; // loopの状態を切り替える
  }
}

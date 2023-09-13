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
}

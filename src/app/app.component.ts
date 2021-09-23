import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ss-project';

  appMessage = "Message from AppComponent to FirstComponent";

  appMethod(){
    alert('Click Me! button works');
  }
}

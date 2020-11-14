import { Component } from '@angular/core';
import { CanvasService } from './canvas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fabric-demo';

  constructor(public canvasService: CanvasService) {};

  execCmd(event) {
    console.log('execCmd : event',event);
    if (event == 1) 
      this.canvasService.addCircle()
    else if (event == 2) 
      this.canvasService.addSquare()
    else if (event == 3) 
      this.canvasService.addTriangle();
  }
}

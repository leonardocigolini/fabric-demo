import { Component, OnInit } from '@angular/core';
import { CanvasService } from './../canvas.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  constructor(public canvasService: CanvasService) { }

  ngOnInit(): void {
    this.canvasService.createCanvas('canvas');
    this.canvasService.addText('this is a canvas');
  }

  addElement(elem) {
    if (elem.shape === 'circle')
      this.canvasService.addCircle();
    else if (elem.shape === 'square')
      this.canvasService.addSquare();
    else if (elem.shape === 'triangle')
      this.canvasService.addTriangle();
    else
      this.canvasService.addText('elemento sconosciuto');
  }

}

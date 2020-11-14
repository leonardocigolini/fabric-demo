import { Injectable } from '@angular/core';
import { fabric } from 'fabric';

//declare var fabric: any;

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  constructor() { }

  canvas: any;
  eleData: any;

  createCanvas(id) {
    this.canvas = new fabric.Canvas(id);
    this.canvas.on("drop", options => {
      options.e.preventDefault();
      this.onDrop(id, options.e, true)
    })

  };

  onDrop(id, event, flag) {
    console.log('onDrop: id',id, 'event', event, 'flag',flag, 'event.dataTransfer.types',event.dataTransfer.types);
    let eleData:any = [];
    for (let i=0; i< event.dataTransfer.types.length; i++) {
        let ind = event.dataTransfer.types[i]
        eleData[ind] = event.dataTransfer.getData(ind);
        console.log('ind',ind,'eleData',eleData[ind]);  // lcg
    }
    this.eleData = eleData;
    console.log('eleData',this.eleData);
    this.addElementByType();

  }

  addText(t) {
    this.canvas.add(new fabric.IText(t));
  }

  addElementByType() {
    const tp = this.eleData['shape'];
    if (tp === 'triangle')
      this.addTriangle()
    else if (tp == 'square')
      this.addSquare()
    else if (tp == 'circle')
      this.addCircle();
  }

  addSquare() {
    const elem = new fabric.Rect({
      left: 40,
      top: 40,
      width: 50,
      height: 50,      
      fill: 'transparent',
      stroke: 'green',
      strokeWidth: 5,
    });
    
    this.addElement(elem);
    
  }

  addTriangle() {
    const elem = new fabric.Triangle(
      { top: 300, left: 210, width: 100, height: 100, fill: 'blue' }
    );
    this.addElement(elem); 
  }

  addCircle() {
    const elem = new fabric.Circle({
      left: 40,
      top: 40,
      radius: 50,     
      fill: 'transparent',
      stroke: 'green',
      strokeWidth: 5,
    }); 

    this.addElement(elem);
  
  }

  addElement(elem) {
    this.canvas.add(elem);
    this.canvas.setActiveObject(elem);
  }
}

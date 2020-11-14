import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {

  items: any [];
  @Output() doCmd: EventEmitter<number>;

  constructor() {
      this.doCmd = new EventEmitter();
      this.items = new Array;
      this.items.push( { shape: 'circle' } );
      this.items.push( { shape: 'square' } );
      this.items.push( { shape: 'triangle' } );

  }

  ngOnInit(): void {
  }

  addElement(event, elem) {
      console.log('addElement: event',event,'elem',elem);
      if (elem.shape == 'circle')
        this.doCmd.emit(1)
      else if (elem.shape == 'square')
        this.doCmd.emit(2)
      else if (elem.shape == 'triangle')
        this.doCmd.emit(3)
    
  }

  dragStart(event, elem) {
    console.log('dragStart: event',event,'elem',elem);
    for (var ind in elem) {
      event.dataTransfer.setData(ind, elem[ind]);
    }
  }

}

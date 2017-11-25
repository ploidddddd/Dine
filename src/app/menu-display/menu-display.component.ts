import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-display',
  templateUrl: './menu-display.component.html',
  styleUrls: ['./menu-display.component.css']
})
export class MenuDisplayComponent implements OnInit {
  msg = 'BEVERAGES';
  x = 0;
  products: any[] = [
    {
      'prodID': 'abc1',
      'prodName': 'Coke',
      'prodDescription': 'HAHAHAHAHA',
      'prodPrice': 80.00,
    },
    {
      'prodID': 'abc2',
      'prodName': 'Sparkle',
      'prodDescription': 'HAHAHAHAHA',
      'prodPrice': 50.00,
    },
    {
      'prodID': 'abc3',
      'prodName': 'Royal',
      'prodDescription': 'HAHAHAHAHA',
      'prodPrice': 80.00,
    },
  ];

  constructor() { }

  ngOnInit() {
  }
  onClickMe() {
    this.x += 1;
  }
  onClickHere(){
    if(this.x > 0){
      this.x -= 1;
    } else {
      
    }
    
  }
   

}

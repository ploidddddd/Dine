import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-display',
  templateUrl: './menu-display.component.html',
  styleUrls: ['./menu-display.component.css']
})
export class MenuDisplayComponent implements OnInit {
  products: any[] = [
    {
      'prodID': 1,
      'prodName': 'Coke',
      'prodDescription': 'HAHAHAHAHA',
      'prodPrice': 80.00,
    },
    {
      'prodID': 2,
      'prodName': 'Sparkle',
      'prodDescription': 'HAHAHAHAHA',
      'prodPrice': 50.00,
    },
    {
      'prodID': 3,
      'prodName': 'Royal',
      'prodDescription': 'HAHAHAHAHA',
      'prodPrice': 80.00,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

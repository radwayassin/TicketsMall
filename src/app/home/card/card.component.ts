import { CardInterface } from './../../model/card-interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() c: CardInterface;
  constructor() {}

  ngOnInit(): void {}
}

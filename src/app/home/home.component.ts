import { CardInterface } from './../model/card-interface';
import { CardServiceService } from './../service/card-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  CardData: CardInterface[];
  constructor(private _CardServiceService: CardServiceService) {}

  ngOnInit() {
    this._CardServiceService.getData().subscribe((articles) => {
      this.CardData = articles;
    });
  }
}

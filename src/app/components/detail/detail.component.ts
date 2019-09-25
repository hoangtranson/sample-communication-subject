import { Component, OnInit } from '@angular/core';
import { EventBusService } from 'src/app/shared/event-bus.service';
import { Article } from 'src/app/shared/article.interface';
import { ObservableService } from 'src/app/shared/observable.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detail1: Article = {
      "id": 0,
      "title": "XXX",
      "body": "xxxxxxxxxxxxxxxxxxxxxxxxx"
  }

  detail2: Article;

  constructor(private eventBusService: EventBusService, private observableService: ObservableService) { }

  ngOnInit() {
    this.eventBusService.on('SelectArticleDetail', (data:Article) => {
      this.detail1 = data;
    });

    this.observableService.inventoryChanged$.subscribe( article => {
      this.detail2 = article;
    })
  }
}

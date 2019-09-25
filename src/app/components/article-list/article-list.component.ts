import { Component, OnInit, Input } from '@angular/core';
import { EventBusService } from 'src/app/shared/event-bus.service';
import { EventData } from '../../shared/event.class';
import { Article } from 'src/app/shared/article.interface';
import { ObservableService } from 'src/app/shared/observable.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @Input() list: Article;

  constructor(private eventBusService: EventBusService, private observableService: ObservableService) { }

  ngOnInit() {
  }

  viewArticle1(article: Article) {
    this.eventBusService.emit(new EventData('SelectArticleDetail', article));
  }

  viewArticle2(article: Article) {
    this.observableService.addToInventory(article);
  }
}

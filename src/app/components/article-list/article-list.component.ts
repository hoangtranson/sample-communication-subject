import { Component, OnInit, Input } from '@angular/core';
import { EventBusService } from 'src/app/shared/event-bus.service';
import { EventData } from '../../shared/event.class';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @Input() list;

  constructor(private eventBusService: EventBusService) { }

  ngOnInit() {
  }

  viewArticle(article) {
    this.eventBusService.emit(new EventData('SelectArticleDetail', article));
  }
}

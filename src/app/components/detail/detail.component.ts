import { Component, OnInit } from '@angular/core';
import { EventBusService } from 'src/app/shared/event-bus.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detail = {
      "id": 0,
      "title": "XXX",
      "body": "xxxxxxxxxxxxxxxxxxxxxxxxx"
  }

  constructor(private eventBusService: EventBusService) { }

  ngOnInit() {
    this.eventBusService.on('SelectArticleDetail', data => {
      this.detail = data;
    })
  }

}

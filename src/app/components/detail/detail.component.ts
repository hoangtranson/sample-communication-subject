import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {

  }

}

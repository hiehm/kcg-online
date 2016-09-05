import { Component, OnInit } from '@angular/core';
import { Title }             from '@angular/platform-browser';

@Component({
  selector: 'app-faq-detail',
  templateUrl: 'faq-detail.component.html',
})
export class FaqDetailComponent implements OnInit {

  public constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.setTitle('常見問題 FAQ - 高雄市政府線上即時服務平台');
  }
}
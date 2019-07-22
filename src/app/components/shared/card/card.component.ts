import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input("post") post: any;

  constructor() {}

  ngOnInit() {
    console.log("FROM CARD=====>", this.post);
  }
}

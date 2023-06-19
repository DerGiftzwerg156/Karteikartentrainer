import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.css']
})
export class CreateCollectionComponent implements OnInit {
  @Output() closeDialog = new EventEmitter<boolean>();

  name: string = "";
  description: string = "";

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  createCollection() {
    //   TODO login implemetieren
  }

}

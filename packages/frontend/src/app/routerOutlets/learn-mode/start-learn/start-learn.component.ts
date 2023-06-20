import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Collection} from "../../../../entitys/Collection";
import {StandardCard} from "../../../../entitys/StandardCard";
import {MultipleChoiceQuestionResponse} from "../../../../responses/MultipleChoiceQuestionResponse";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../../../entitys/User";
import {Token} from "../../../../entitys/Token";
import {CollectionService} from "../../../../services/collection.service";

@Component({
  selector: 'app-start-learn',
  templateUrl: './start-learn.component.html',
  styleUrls: ['./start-learn.component.css']
})
export class StartLearnComponent implements OnInit {
  @Output() startLearn = new EventEmitter<boolean>();

  // @ts-ignore
  collection: Collection;


  constructor(private route: ActivatedRoute, private collectionService: CollectionService) {
    this.collection = new Collection(1, new User(0, new Token(1, "abcde", 123), 'test@test.de', 'pw1234', true, 234), 'First Collection', '1 Dies ist nur eine Test Collection', "12345")
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const accesKey = routeParams.get('collectionId')!
    this.collectionService.getCollectionByAccessKey(accesKey).subscribe(res => {
      this.collection = res;
    })
  }

}

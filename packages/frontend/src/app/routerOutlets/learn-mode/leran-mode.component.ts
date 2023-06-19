import {Component, OnInit} from '@angular/core';
import {Collection} from "../../../entitys/Collection";
import {StandardCard} from "../../../entitys/StandardCard";
import {MultipleChoiceQuestionResponse} from "../../../responses/MultipleChoiceQuestionResponse";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-leran-mode',
  templateUrl: './leran-mode.component.html',
  styleUrls: ['./leran-mode.component.css']
})
export class LeranModeComponent implements OnInit{
  // @ts-ignore
  collection: Collection;

  // @ts-ignore
  standardCards: StandardCard[];

  // @ts-ignore
  multipleChoiceCards: MultipleChoiceQuestionResponse[];

  constructor(private route:ActivatedRoute) {
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const collectionId = Number(routeParams.get('collectionId'))
    //   TODO die Collection im Backend abfragen
  }

}

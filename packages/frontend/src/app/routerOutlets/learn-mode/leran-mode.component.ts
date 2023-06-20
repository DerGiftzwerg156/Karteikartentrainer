import {Component, OnInit} from '@angular/core';
import {Collection} from "../../../entitys/Collection";

@Component({
  selector: 'app-leran-mode',
  templateUrl: './leran-mode.component.html',
  styleUrls: ['./leran-mode.component.css']
})
export class LeranModeComponent {
  // @ts-ignore
  collection: Collection;
  startedLearn: boolean=false;

}

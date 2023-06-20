import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {LoggerService} from "../../../services/logger.service";
import {CollectionService} from "../../../services/collection.service";
import {Collection} from "../../../entitys/Collection";

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.css']
})
export class CreateCollectionComponent implements OnInit {
  @Output() closeDialog = new EventEmitter<boolean>();

  name: string = "";
  description: string = "";

  constructor(private router: Router, private logger: LoggerService, private collectionService: CollectionService) {
  }

  ngOnInit(): void {
  }

  createCollection() {
    // @ts-ignore
    this.collectionService.createNewCollection(new Collection(0, JSON.parse(sessionStorage.getItem("user")), this.name, this.description, "")).subscribe(res => {
      this.logger.showInfo("Collection erfolgreich erstellt!");
      let url = "/editCollection/" + res.id;
      this.router.navigate([url]);
      this.closeDialog.emit(true);
    });
  }

}

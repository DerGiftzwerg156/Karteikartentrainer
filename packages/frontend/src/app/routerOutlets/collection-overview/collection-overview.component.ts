import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Collection} from "../../../entitys/Collection";
import {User} from "../../../entitys/User";
import {Token} from "../../../entitys/Token";
import {Router} from "@angular/router";
import {LoggerService} from "../../../services/logger.service";
import {CollectionService} from "../../../services/collection.service";

@Component({
  selector: 'app-collection-overview',
  templateUrl: './collection-overview.component.html',
  styleUrls: ['./collection-overview.component.css']
})
export class CollectionOverviewComponent implements OnInit {
  collections: Collection[] = [];

  constructor(private router: Router, private logger: LoggerService, private collectionService: CollectionService) {
  }

  ngOnInit() {
    this.loadCollections();
  }

  loadCollections() {
    this.collectionService.getAllCollectionsByUser().subscribe(res => {
      this.collections = [];
      this.collections = res;
    })
  }

  editCollection(id: string) {
    this.router.navigate(['editCollection', id])
  }

  deleteCollection(collection: Collection) {
    this.collectionService.deleteCollection(collection).subscribe(()=>{
      this.loadCollections()
    });

  }
}

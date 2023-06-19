import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Collection} from "../../../entitys/Collection";
import {User} from "../../../entitys/User";
import {Token} from "../../../entitys/Token";
import {Router} from "@angular/router";
import {LoggerService} from "../../../services/logger.service";

@Component({
  selector: 'app-collection-overview',
  templateUrl: './collection-overview.component.html',
  styleUrls: ['./collection-overview.component.css']
})
export class CollectionOverviewComponent implements OnInit {
  collections: Collection[] = [
    new Collection(1, new User(0, new Token(1, "abcde", 123), 'test@test.de', 'pw1234', true, 234), 'First Collection', '1 Dies ist nur eine Test Collection', 12345),
    new Collection(2, new User(0, new Token(1, "abcde", 123), 'test@test.de', 'pw1234', true, 234), 'Second Collection', '2 Dies ist nur eine Test Collection', 12345)];

  constructor(private router: Router, private logger: LoggerService) {
  }

  ngOnInit() {
  }

  editCollection(id: number) {
    this.router.navigate(['editCollection', id])
  }

  deleteCollection(id: number) {

  }
}

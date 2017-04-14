import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class TagsServiceService {

  constructor(private http : Http) { }

  loadTags() {
    return this.http.get('https://guidemeesprit.herokuapp.com/api/tags')
      .map(res => res.json());
  }
}
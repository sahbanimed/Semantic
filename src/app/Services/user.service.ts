import { Injectable } from '@angular/core';
import { Http, RequestOptions,Response,Headers } from '@angular/http';
import { Observable } from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url="";
  constructor(public http : Http) { }

  register(ressource){
    return this.http.post(this.url, ressource).pipe(map(resp=>resp.json()));
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SpacexService {

  constructor(private http: HttpClient) { }

  getDetails(id) {  
    let url = 'https://api.spacexdata.com/v3/launches/'+id;
    return this.http.get(url);
  }

}
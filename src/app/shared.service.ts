import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl='https://192.168.225.211:8001/';

  constructor(private http:HttpClient) { }



  onRegister(val:any){
    return this.http.post(this.APIUrl + '/department/',val);
  }
}

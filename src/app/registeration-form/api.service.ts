import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  AddinDetails(data : any) {
    return this.http.post('https://localhost:44374/api/UserDetail/AddingUserDetails',data);
  }

  recievingData() {
    return this.http.get(`https://localhost:7024/api/TestData`).pipe(shareReplay())
  }
}

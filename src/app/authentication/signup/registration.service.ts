import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  url1 = 'http://localhost:3000/enroll';
  url2 = 'http://localhost:3000/enroll/login';

  constructor(private http1: HttpClient) {
  }

  register(userData): Observable<any> {
    return this.http1.post<any>(this.url1, userData);
  }

  login(userData): Observable<any> {
    return this.http1.post<any>(this.url1, userData);
  }

}
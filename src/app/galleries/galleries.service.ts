import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASE_LOCAL_URL, BASE_REMOTE_URL} from '../app.component';
import {BearerTokenService} from '../bearer-token.service';

const GET_GALLERIES_URL_LOCAL = BASE_LOCAL_URL + '/gallery/get/all';
const GET_GALLERIES_URL_REMOTE = BASE_REMOTE_URL + '/gallery/get/all';
const GET_GALLERy_BY_ID_URL_LOCAL = BASE_LOCAL_URL + '/gallery/getById/';
const GET_GALLERy_BY_ID_URL_REMOTE = BASE_REMOTE_URL + '/gallery/getById/';

@Injectable({
  providedIn: 'root'
})
export class GalleriesService {

  constructor(private http: HttpClient,
              private tokenService: BearerTokenService) { }

  getGalleries(): Observable<any> {
    return this.http.get(GET_GALLERIES_URL_REMOTE, {headers: this.tokenService.getBearerTokenAuthorizationHeader()});
  }

  getGalleryById(id: number): Observable<any> {
    return this.http.get(GET_GALLERy_BY_ID_URL_REMOTE + id);
  }

}

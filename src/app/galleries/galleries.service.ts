import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASE_URL} from '../app.component';
import {BearerTokenService} from '../bearer-token.service';

const GET_GALLERIES_URL = BASE_URL + '/gallery/get/all';
const GET_GALLERY_BY_ID_URL = BASE_URL + '/gallery/getById/';

const GET_ARTIFACTS_BY_GALLERY_ID = BASE_URL + '/secure/artifact/getByGalleryId/';
const UPDATE_GALLERY_URL = BASE_URL + '/gallery/update';

@Injectable({
  providedIn: 'root'
})
export class GalleriesService {

  constructor(private http: HttpClient,
              private tokenService: BearerTokenService) { }

  getGalleries(): Observable<any> {
    return this.http.get(GET_GALLERIES_URL, {headers: this.tokenService.getBearerTokenAuthorizationHeader()});
  }

  getGalleryById(id: number): Observable<any> {
    return this.http.get(GET_GALLERY_BY_ID_URL + id, {headers: this.tokenService.getBearerTokenAuthorizationHeader()});
  }

  getArtifactsByGalleryId(id: number): Observable<any> {
    return this.http.get(GET_ARTIFACTS_BY_GALLERY_ID + id, {headers: this.tokenService.getBearerTokenAuthorizationHeader()});
  }

  updateGallery(gallery): Observable<any> {
    return this.http.put(UPDATE_GALLERY_URL, gallery, {headers: this.tokenService.getBearerTokenAuthorizationHeader()});
  }

}

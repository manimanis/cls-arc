import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListeResponsablesService {

  constructor(private http: HttpClient,
    @Inject('API_BASE_URL') private API_BASE_URL: string,
    @Inject('API_RESPONSABLES') private API_PATH: string) { }

  fetchResponsables(searchStr = '', orderDir = '', pageNum = 0, pageRowCount = 10) {
    const params = `orderDir=${orderDir}&pageNum=${pageNum}&pageRowCount=${pageRowCount}&searchStr=${searchStr}`;
    return this.http
      .get(`${this.API_BASE_URL}/${this.API_PATH}?${params}`);
  }

  /**
   * Fetch the informtions for the specified responsable id
   * @param id number
   */
  fetchResponsable(id: number) {
    return this.http
      .get(`${this.API_BASE_URL}/${this.API_PATH}/${id}`);
  }
}

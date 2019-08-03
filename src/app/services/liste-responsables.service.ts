import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../shared/contact';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

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

  insertResponsable(contact: Contact) {
    return this.http
      .post(`${this.API_BASE_URL}/${this.API_PATH}`,
        JSON.stringify(contact))
      .pipe(
        catchError(this.handleErrors)
      );
  }

  updateResponsable(contact: Contact) {
    return this.http
      .put(`${this.API_BASE_URL}/${this.API_PATH}/${contact.numResponsable}`,
        JSON.stringify(contact))
      .pipe(
        catchError(this.handleErrors)
      );
  }

  deleteResponsable(contact: Contact) {
    return this.http
      .delete(`${this.API_BASE_URL}/${this.API_PATH}/${contact.numResponsable}`)
      .pipe(
        catchError(this.handleErrors)
      );
  }

  private handleErrors(error) {
    //this.isFetchingData = false;
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}

import { Injectable, Inject } from '@angular/core';
import { TypeContactCollection } from '../shared/type-contact-collection';
import { Subject, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { TypeContact } from '../shared/type-contact';

@Injectable({
  providedIn: 'root'
})
export class TypesContactsService {

  private typesContacts = new TypeContactCollection();
  private isFetchingData = false;
  typesContactsSubject = new Subject<TypeContactCollection>();

  constructor(private http: HttpClient,
    @Inject('API_BASE_URL') private API_BASE_URL: string,
    @Inject('API_TYPES_CONTACTS') private API_PATH: string) { }

  /**
   * Fetch contacts types either from network or locally if the operation is already done
   * @param fetchFromNetwork boolean
   */
  public fetchContactsTypes(fetchFromNetwork: boolean = false) {
    if (!this.isFetchingData && (fetchFromNetwork || this.typesContacts.isEmpty())) {
      this.isFetchingData = true;
      this.http
        .get(`${this.API_BASE_URL}/${this.API_PATH}`)
        .pipe(
          catchError(this.handleErrors)
        )
        .subscribe((data: any) => {
          this.typesContacts.clear();
          this.typesContacts.addManyTypesContacts(data.data);
          this.emitData();
        });
    }
  }

  public insertContactType(typeContact: TypeContact) {
    return this.http
      .post(`${this.API_BASE_URL}/${this.API_PATH}`,
        JSON.stringify(typeContact))
      .pipe(
        catchError(this.handleErrors)
      );
  }

  public updateContactType(typeContact: TypeContact) {
    return this.http
      .put(`${this.API_BASE_URL}/${this.API_PATH}/${typeContact.numTypeContact}`,
        JSON.stringify(typeContact))
      .pipe(
        tap((data: any) => {
          const tc = this.typesContacts.findByNumTypeContact(+data.data.numTypeContact);
          tc.setData(data.data);
        }),
        catchError(this.handleErrors)
      );
  }

  public updateAllContactsTypes() {
    return this.http
      .put(`${this.API_BASE_URL}/${this.API_PATH}`,
        JSON.stringify(this.typesContacts.items))
      .pipe(
        catchError(this.handleErrors)
      );
  }

  public deleteContactType(typeContact: TypeContact) {
    const httpParams = new HttpParams().set('numTypeContact', `${typeContact.numTypeContact}`);
    const options = {
      params: httpParams, headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    return this.http
      .delete(`${this.API_BASE_URL}/${this.API_PATH}/${typeContact.numTypeContact}`, options)
      .pipe(
        catchError(this.handleErrors)
      );
  }

  emitData() {
    this.typesContactsSubject.next(this.typesContacts);
  }

  private handleErrors(error) {
    this.isFetchingData = false;
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

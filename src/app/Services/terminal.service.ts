import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IData, IError, IIoError, ISocketError } from '../Interfaces/Interface';

@Injectable({
  providedIn: 'root',
})
export class TerminalService {
  //readonly Url = 'https://localhost:7207/api/Terminal';
  readonly Url = '/api/Terminal';
  constructor(private http: HttpClient) {}
  getAllTerminalData(): Observable<IData[] | null> {
    return this.http.get<IData[]>(this.Url + '/terminaldata');
  }
  getAllTerminalError(): Observable<IError[] | null> {
    return this.http.get<IError[]>(this.Url + '/error');
  }
  getAllTerminalIoError(): Observable<IIoError[] | null> {
    return this.http.get<IIoError[]>(this.Url + '/ioerror');
  }
  getAllTerminalSocketError(): Observable<ISocketError[] | null> {
    return this.http.get<ISocketError[]>(this.Url + '/socketerror');
  }
  getListById(id: number): Observable<IData | null> {
    return this.http.get<IData>(this.Url + `/terminaldata/${id}`);
  }
}

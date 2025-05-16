import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {
  
  private apiUrl = 'https://conteudos.kipperdev.com.br/aprenda-angular-do-zero'

  constructor(private client: HttpClient) { }

  getHelloWorld(): Observable<any>{
    return this.client.get(this.apiUrl)
  }
}

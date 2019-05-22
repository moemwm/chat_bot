import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';
 @Injectable()
export class LoginService {
    private loginUrl = '/api/v2/login';
    constructor(private http: HttpClient) { }
    public login(username: string, password: string) {
        return this.http.post(`${this.loginUrl}`, { 
            username,
            password
        });
    }
}

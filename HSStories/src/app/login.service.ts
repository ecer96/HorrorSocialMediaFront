import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    private url = 'http://localhost:7195/api/Auth/Login'

    constructor(private http: HttpClient) { }


    login(email: String, password: String) {
        return this.http.post<any>(this.url, { email, password })
    }


}

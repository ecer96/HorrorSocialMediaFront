import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    private url = "https://localhost:7195/api/CreateUser"

    constructor(private httpClient: HttpClient) { }

    Register(formData: FormData) {
        return this.httpClient.post<any>(this.url, formData);
    }
    }      
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models';

// Global variable
import { GlobalVariable } from '../globals/global';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${GlobalVariable.CONFIG.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${GlobalVariable.CONFIG.apiUrl}/users/${id}`);
    }

    register(user: User) {
        return this.http.post(`${GlobalVariable.CONFIG.apiUrl}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${GlobalVariable.CONFIG.apiUrl}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${GlobalVariable.CONFIG.apiUrl}/users/${id}`);
    }
}

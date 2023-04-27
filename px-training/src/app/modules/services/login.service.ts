import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private allowedUsers = {
        'Nischayy': 'test@123',
        'Abhinav': 'test@123',
        'Riya': 'test@123'
    }

    private userSubject: BehaviorSubject<any | null>;
    public user: Observable<any | null>;

    constructor(
        private router: Router
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.value;
    }

    login(username: string, password: string) {
        const loginResult = this.authenticate(username, password);

        if (loginResult) {
            localStorage.setItem('user', JSON.stringify(username));
            this.userSubject.next(username);
            return username;
        }

        return false;
    }

    authenticate(username: string, password: string) {
        const user = this.allowedUsers[username];

        const passwordMatch = user && user === password;

        return passwordMatch;
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }
}
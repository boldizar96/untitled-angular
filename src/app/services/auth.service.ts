import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    constructor(){}

    currUsr: string;

    authUser(user: any){
        let UserArray = []
        if(localStorage.getItem('Users')){
            UserArray = JSON.parse(localStorage.getItem('Users'));
        }
        this.currUsr = UserArray.find(u => u.email === user.email && u.password === user.password).userName;
        return UserArray.find(u => u.email === user.email && u.password === user.password);
    }

}
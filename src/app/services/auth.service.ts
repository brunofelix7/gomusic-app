import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Auth } from '../models/auth';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	user: User;
	isLogged: boolean;

	constructor(private myAuth: AngularFireAuth, private router: Router) {
		this.isLogged = false;
		this.myAuth.authState.subscribe(user => {
			if (user) {
				this.user = user;
				localStorage.setItem('user-firebase', JSON.stringify(this.user));
			} else {
				localStorage.setItem('user-firebase', null);
			}
		})
	}

	login(user: Auth) {
		this.myAuth.auth.signInWithEmailAndPassword(user.email, user.password)
			.then(response => {
				this.isLogged = true;
				this.router.navigate(['/dashboard']);
			}).catch(error => {
				this.isLogged = false;
				console.log('Something went wrong:', error.message);
			});
		return this.isLogged;
	}

	register(user: Auth) {
		this.myAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
			.then(response => {
				console.log('Success!', response);
			}).catch(error => {
				console.log('Something went wrong:', error.message);
			});
	}

	logout() {
		this.myAuth.auth.signOut();
		localStorage.removeItem('user-firebase');
		this.router.navigate(['/login']);
	}

	isLoggedIn() {
		return JSON.parse(localStorage.getItem('user-firebase')) != null;
	}

}

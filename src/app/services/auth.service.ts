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

	constructor(private myAuth: AngularFireAuth, private router: Router) {
		this.myAuth.authState.subscribe(user => {
			if (user) {
				this.user = user;
				localStorage.setItem('user-firebase', JSON.stringify(this.user));
			} else {
				localStorage.setItem('user-firebase', null);
				this.router.navigate(['/login']);
			}
		})
	}

	login(user: Auth) {
		return this.myAuth.auth.signInWithEmailAndPassword(user.email, user.password);
	}

	signup(user: Auth) {
		return this.myAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
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

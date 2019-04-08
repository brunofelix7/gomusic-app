import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	user: Auth;

	constructor(private authService: AuthService, private router: Router) {
		this.user = new Auth();
	}

	ngOnInit() {

	}

	signup() {
		this.authService.signup(this.user)
			.then(response => {
				this.router.navigate(['/login']);
			}).catch(error => {
				console.log('Something went wrong:', error.message);
			});
	}

}

import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user: Auth;
	message: string;

	constructor(private authService: AuthService, private router: Router) {
		this.user = new Auth();
	}

	ngOnInit() {
		if(this.authService.isLoggedIn()){
			this.router.navigate(['/dashboard']);
		}
	}

	login() {
		if(!this.authService.login(this.user)){
			this.message = 'Email ou Senha inválidos';
		}
	}

}
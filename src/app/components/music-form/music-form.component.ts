import { Component, OnInit } from '@angular/core';
import { Music } from 'src/app/models/music';
import { MusicService } from 'src/app/services/music.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-music-form',
	templateUrl: './music-form.component.html',
	styleUrls: ['./music-form.component.css']
})
export class MusicFormComponent implements OnInit {

	id: string;
	loading: boolean;
	music: Music;

	constructor(private service: MusicService, private router: Router, private ativatedRoute: ActivatedRoute) {
		this.loading = false;
		this.music = new Music();
		this.id = this.ativatedRoute.snapshot.params['id'];
	}

	ngOnInit() {
		if (this.id != null) {
			this.findById();
			return;
		}
	}

	cadastrar() {
		this.loading = true;
		this.service.save(this.music).then(
			response => {
				this.loading = false;
				this.router.navigate(['/musicas']);
			},
			error => {
				this.loading = false;
				console.log(error);
			});
	}

	atualizar() {
		this.loading = true;
		this.music.id = this.id;
		this.service.update(this.music).then(
			response => {
				this.loading = false;
				this.router.navigate(['/musicas']);
			},
			error => {
				this.loading = false;
				console.log(error);
			});
	}

	findById() {
		this.service.findById(this.id).then(
			res => {
				if(!res.exists){
					console.log('Not found');
					return;
				}
				let data = JSON.stringify(res.data());
				this.music = JSON.parse(data);
			},
			error => {
				console.log(error);
			}
		);
	}

}

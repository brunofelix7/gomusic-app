import { ArtistService } from './../../services/artist.service';
import { Artist } from './../../models/artist';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-artist-form',
	templateUrl: './artist-form.component.html',
	styleUrls: ['./artist-form.component.css']
})
export class ArtistFormComponent implements OnInit {

	id: string;
	loading: boolean;
	artist: Artist;

	constructor(private service: ArtistService, private router: Router, private ativatedRoute: ActivatedRoute) {
		this.loading = false;
		this.artist = new Artist();
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
		this.service.save(this.artist).then(
			response => {
				this.loading = false;
				this.router.navigate(['/artistas']);
			},
			error => {
				this.loading = false;
				console.log(error);
			});
	}

	atualizar() {
		this.loading = true;
		this.artist.id = this.id;
		this.service.update(this.artist).then(
			response => {
				this.loading = false;
				this.router.navigate(['/artistas']);
			},
			error => {
				this.loading = false;
				console.log(error);
			});
	}

	findById() {
		this.service.findById(this.id).then(
			res => {
				if (!res.exists) {
					console.log('Not found');
					return;
				}
				let data = JSON.stringify(res.data());
				this.artist = JSON.parse(data);
			},
			error => {
				console.log(error);
			}
		);
	}

}

import { AlbumService } from './../../services/album.service';
import { Album } from './../../models/album';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-album-form',
	templateUrl: './album-form.component.html',
	styleUrls: ['./album-form.component.css']
})
export class AlbumFormComponent implements OnInit {

	id: string;
	loading: boolean;
	album: Album;

	constructor(private service: AlbumService, private router: Router, private ativatedRoute: ActivatedRoute) {
		this.loading = false;
		this.album = new Album();
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
		this.service.save(this.album).then(
			response => {
				this.loading = false;
				this.router.navigate(['/albuns']);
			},
			error => {
				this.loading = false;
				console.log(error);
			});
	}

	atualizar() {
		this.loading = true;
		this.album.id = this.id;
		this.service.update(this.album).then(
			response => {
				this.loading = false;
				this.router.navigate(['/albuns']);
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
				this.album = JSON.parse(data);
			},
			error => {
				console.log(error);
			}
		);
	}

}

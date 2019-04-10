import { Component, OnInit } from '@angular/core';
import { ArtistService } from './../../services/artist.service';
import { Artist } from './../../models/artist';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-artist-list',
	templateUrl: './artist-list.component.html',
	styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

	id: string;
	loading: boolean;
	showModal: boolean;
	currentDelete: string;
	artist: Artist;
	artists: Artist[];

	constructor(private service: ArtistService, private router: Router, private ativatedRoute: ActivatedRoute) {
		this.loading = false;
		this.showModal = false;
		this.id = this.ativatedRoute.snapshot.params['id'];
	}

	ngOnInit() {
		this.loading = true;
		if (this.id != null) {
			this.delete();
			return;
		}
		this.service.list().subscribe(
			data => {
				this.loading = false;
				this.artists = data.map(e => {
					this.loading = false;
					return {
						id: e.payload.doc.id,
						...e.payload.doc.data()
					} as Artist;
				})
			},
			error => {
				this.loading = false;
			});
	}

	delete() {
		this.loading = true;
		this.service.delete(this.id).then(
			response => {
				this.loading = false;
				this.router.navigate(['/artistas']);
			},
			error => {
				this.loading = false;
				console.log(error);
			}
		);
	}

	isShow(id: string, name: string) {
		this.id = id;
		this.currentDelete = name;
		this.showModal = true;
	}

	confirm() {
		this.showModal = false;
		this.loading = false;
		this.router.navigate(['/artistas/deletar/' + this.id]);
	}

}

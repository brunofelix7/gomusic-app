import { Component, OnInit } from '@angular/core';
import { Music } from './../../models/music';
import { MusicService } from './../../services/music.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-music-list',
	templateUrl: './music-list.component.html',
	styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {

	id: string;
	loading: boolean;
	showModal: boolean;
	currentDelete: string;
	music: Music;
	musics: Music[];

	constructor(private service: MusicService, private router: Router, private ativatedRoute: ActivatedRoute) {
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
				this.musics = data.map(e => {
					this.loading = false;
					return {
						id: e.payload.doc.id,
						...e.payload.doc.data()
					} as Music;
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
				this.router.navigate(['/musicas']);
			},
			error => {
				this.loading = false;
				console.log(error);
			}
		);
	}

	isShow(id: string, title: string) {
		this.id = id;
		this.currentDelete = title;
		this.showModal = true;
	}

	confirm() {
		this.showModal = false;
		this.loading = false;
		this.router.navigate(['/musicas/deletar/' + this.id]);
	}

}

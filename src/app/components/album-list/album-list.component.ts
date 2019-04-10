import { Component, OnInit } from '@angular/core';
import { AlbumService } from './../../services/album.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/models/album';

@Component({
	selector: 'app-album-list',
	templateUrl: './album-list.component.html',
	styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

	id: string;
	loading: boolean;
	album: Album;
	albums: Album[];

	constructor(private service: AlbumService, private router: Router, private ativatedRoute: ActivatedRoute) {
		this.loading = false;
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
				this.albums = data.map(e => {
					this.loading = false;
					return {
						id: e.payload.doc.id,
						...e.payload.doc.data()
					} as Album;
				})
			},
			error => {
				this.loading = false;
				console.log(error);
			});
	}

	delete() {
		this.loading = true;
		this.service.delete(this.id).then(
			response => {
				this.loading = false;
				this.router.navigate(['/albuns']);
			},
			error => {
				this.loading = false;
				console.log(error);
			}
		);
	}

}

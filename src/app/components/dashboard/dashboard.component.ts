import { AlbumService } from './../../services/album.service';
import { MusicService } from './../../services/music.service';
import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { Artist } from 'src/app/models/artist';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	loading: boolean;
	countArtists: number;
	countMusics: number;
	countAlbuns: number

	constructor(private artistService: ArtistService, private musicService: MusicService, private albumService: AlbumService) {
		this.loading = false;
		this.countArtists = 0;
		this.countMusics = 0;
		this.countAlbuns = 0;
	}

	ngOnInit() {
		this.loading = true;
		this.artistService.count().subscribe(
			data => {
				this.loading = false;
				this.countArtists = data.length;
			},
			error => {
				this.loading = false;
				console.log(error);
			});
		this.musicService.count().subscribe(
			data => {
				this.loading = false;
				this.countMusics = data.length;
			},
			error => {
				this.loading = false;
				console.log(error);
			});
		this.albumService.count().subscribe(
			data => {
				this.loading = false;
				this.countAlbuns = data.length;
			},
			error => {
				this.loading = false;
				console.log(error);
			});
	}

}

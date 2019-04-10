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

	countArtists: number;
	countMusics: number;
	countAlbuns: number

	constructor(private artistService: ArtistService, private musicService: MusicService) {
		this.countArtists = 0;
		this.countMusics = 0;
		this.countAlbuns = 0;
	}

	ngOnInit() {
		this.artistService.count().subscribe(
			data => {
				this.countArtists = data.length;
			},
			error => {
				console.log(error);
			});
		this.musicService.count().subscribe(
			data => {
				this.countMusics = data.length;
			},
			error => {
				console.log(error);
			});
	}

}

import { Component, OnInit } from '@angular/core';
import { Music } from './../../models/music';
import { MusicService } from './../../services/music.service';

@Component({
	selector: 'app-music-list',
	templateUrl: './music-list.component.html',
	styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {

	music: Music;
	musics: Music[];

	constructor(private service: MusicService) {

	}

	ngOnInit() {
		this.service.list().subscribe(data => {
			this.musics = data.map(e => {
				return {
					id: e.payload.doc.id,
					...e.payload.doc.data()
				} as Music;
			})
		});
	}

}

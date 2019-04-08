import { Component, OnInit } from '@angular/core';
import { Music } from 'src/app/models/music';
import { MusicService } from 'src/app/services/music.service';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-music-form',
	templateUrl: './music-form.component.html',
	styleUrls: ['./music-form.component.css']
})
export class MusicFormComponent implements OnInit {

	music: Music;

	constructor(private service: MusicService) {
		this.music = new Music();
	}

	ngOnInit() {

	}

	cadastrar() {
		this.service.save(this.music).then(
			response => {
				console.log(response);
			},
			error => {
				console.log(error);
			});
	}

	/*findById() {
		this.service.findById("QJGceW8kzRfYohmMkr7Z").then(
			res => {
				if(!res.exists){
					console.log('Not found');
					return;
				}
				console.log(res.data());
			},
			error => {
				console.log(error);
			}
		);
	}*/

}

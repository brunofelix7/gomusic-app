import { Component, OnInit } from '@angular/core';
import { ArtistService } from './../../services/artist.service';
import { Artist } from './../../models/artist';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-artist-details',
	templateUrl: './artist-details.component.html',
	styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {

	id: string;
	artist: Artist;

	constructor(private service: ArtistService, private router: Router, private ativatedRoute: ActivatedRoute) { 
		this.artist = new Artist();
		this.id = this.ativatedRoute.snapshot.params['id'];
	}

	ngOnInit() {
		if (this.id != null) {
			this.findById();
			return;
		}
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

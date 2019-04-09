import { Component, OnInit } from '@angular/core';
import { ArtistService } from './../../services/artist.service';
import { Artist } from './../../models/artist';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-album-list',
	templateUrl: './album-list.component.html',
	styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

	constructor() {
		
	}

	ngOnInit() {
		
	}

}

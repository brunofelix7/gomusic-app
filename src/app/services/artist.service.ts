import { Artist } from './../models/artist';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
	providedIn: 'root'
})
export class ArtistService {

	constructor(private firestore: AngularFirestore) { 

	}

	save(artist: Artist) {
		return this.firestore.collection("artists").add(JSON.parse(JSON.stringify(artist)));
	}

	update(artist: Artist) {
		let id = artist.id;
		delete artist.id;
		return this.firestore.doc('artists/' + id).update(artist);
	}

	delete(id: string) {
		return this.firestore.doc('artists/' + id).delete();
	}

	findById(id: string) {
		return this.firestore.doc('artists/' + id).ref.get();
	}

	list() {
		return this.firestore.collection('artists', ref => ref.orderBy('name')).snapshotChanges();
	}

	count() {
		return this.firestore.collection('artists').snapshotChanges();
	}
	
}

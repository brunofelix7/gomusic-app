import { Injectable } from '@angular/core';
import { Album } from './../models/album';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
	providedIn: 'root'
})
export class AlbumService {

	constructor(private firestore: AngularFirestore) { 

	}

	save(album: Album) {
		return this.firestore.collection("albums").add(JSON.parse(JSON.stringify(album)));
	}

	update(album: Album) {
		let id = album.id;
		delete album.id;
		return this.firestore.doc('albums/' + id).update(album);
	}

	delete(id: string) {
		return this.firestore.doc('albums/' + id).delete();
	}

	findById(id: string) {
		return this.firestore.doc('albums/' + id).ref.get();
	}

	list() {
		return this.firestore.collection('albums', ref => ref.orderBy('title')).snapshotChanges();
	}

	count() {
		return this.firestore.collection('albums').snapshotChanges();
	}
	
}

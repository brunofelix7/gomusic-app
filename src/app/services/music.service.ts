import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Music } from './../models/music';

@Injectable({
	providedIn: 'root'
})
export class MusicService {

	constructor(private firestore: AngularFirestore) {

	}

	save(music: Music) {
		return this.firestore.collection("musics").add(JSON.parse(JSON.stringify(music)));
	}

	update(music: Music) {
		let id = music.id;
		delete music.id;
		return this.firestore.doc('musics/' + id).update(music);
	}

	delete(id: string) {
		return this.firestore.doc('musics/' + id).delete();
	}

	findById(id: string) {
		return this.firestore.doc('musics/' + id).ref.get();
	}

	list() {
		return this.firestore.collection('musics', ref => ref.orderBy('title')).snapshotChanges();
	}

}

import { Injectable } from '@angular/core';
import { Music } from './../models/music';
import { AngularFirestore } from '@angular/fire/firestore';

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
		delete music.id;
		this.firestore.doc('musics/' + music.id).update(music);
	}

	delete(id: string) {
		this.firestore.doc('musics/' + id).delete();
	}

	findById(id: string) {
		return this.firestore.doc('musics/' + id).ref.get();
	}

	list() {
		return this.firestore.collection('musics').snapshotChanges();
	}

}

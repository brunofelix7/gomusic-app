import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    file: File;
    selectedFile: FileList;
    uploadTask: AngularFireUploadTask;
    downloadPath: string;

    constructor(private storage: AngularFireStorage) {

    }

    chooseFiles(event) {
        this.selectedFile = event.target.files;
        if (this.selectedFile.item(0)) {
            this.upload();
        }
    }

    upload() {
        let file = this.selectedFile.item(0);
        let uniqkey = 'pic' + Math.floor(Math.random() * 1000000);
        this.uploadTask = this.storage.upload('/countries/' + uniqkey, file);
    }

}

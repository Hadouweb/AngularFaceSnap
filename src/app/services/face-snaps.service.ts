import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 0,
      title : 'Montagne',
      description : 'Une magnifique photo du ciel et d\'une montagne',
      createdDate : new Date(),
      snaps : 140,
      imageUrl : 'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg',
      location : 'Paris'
    },
    {
      id: 1,
      title : 'Mon chien',
      description : 'Une photo de mon petit chien',
      createdDate : new Date(),
      snaps : 0,
      imageUrl : 'https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg'
    },
    {
      id: 2,
      title : 'Moi sur Angular',
      description : 'Une photo moi sur Angular',
      createdDate : new Date(),
      snaps : 0,
      imageUrl : 'https://cdn.pixabay.com/photo/2015/09/17/17/25/code-944499_1280.jpg'
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    }
    return faceSnap;
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}

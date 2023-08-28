import { Component, OnInit} from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  mylastSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Montagne',
      'Une magnifique photo du ciel et d\'une montagne',
      new Date(),
      0,
      'https://fastly.picsum.photos/id/866/800/800.jpg?hmac=jOhh1fmt65azfYe6D-XbxCIcXW6JD-mjHYepnMJD110',
    );
    this.myOtherSnap = new FaceSnap(
      'Mon chien',
      'Une photo de mon petit chien',
      new Date(),
      0,
      'https://fastly.picsum.photos/id/237/800/800.jpg?hmac=vCdYL_CRxqCGRhpbwB6Q2uD9BMcs7wHZ0hb28qxtrYE',
    );
    this.mylastSnap = new FaceSnap(
      'Moi sur Angular',
      'Une photo moi sur Angular',
      new Date(),
      0,
      'https://fastly.picsum.photos/id/5/800/800.jpg?hmac=pkRT69hNPc8vc44_7ane1t0WgN5hH1eoYWzpkN-MTXs',
    );
  }


}

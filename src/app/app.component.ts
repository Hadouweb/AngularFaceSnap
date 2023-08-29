import { Component, OnInit} from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
      {
        title : 'Montagne',
        description : 'Une magnifique photo du ciel et d\'une montagne',
        createdDate : new Date(),
        snaps : 140,
        imageUrl : 'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg',
        location : 'Paris'
      },
      {
        title : 'Mon chien',
        description : 'Une photo de mon petit chien',
        createdDate : new Date(),
        snaps : 0,
        imageUrl : 'https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg'
      },
      {
        title : 'Moi sur Angular',
        description : 'Une photo moi sur Angular',
        createdDate : new Date(),
        snaps : 0,
        imageUrl : 'https://cdn.pixabay.com/photo/2015/09/17/17/25/code-944499_1280.jpg'
      },
    ]
  }


}

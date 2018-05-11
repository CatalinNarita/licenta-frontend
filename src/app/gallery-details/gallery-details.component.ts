import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GalleriesService} from '../galleries/galleries.service';

@Component({
  selector: 'app-gallery-details',
  templateUrl: './gallery-details.component.html',
  styleUrls: ['./gallery-details.component.css']
})
export class GalleryDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private galleriesService: GalleriesService,
              private router: Router) {
  }

  id: number;
  notFound = false;
  artifacts;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getArtifactsByGalleryId(this.id);
  }

  getArtifactsByGalleryId(id: number) {
    this.galleriesService.getArtifactsByGalleryId(id)
      .subscribe(data => {
          this.notFound = false;
          this.artifacts = data;
        },
        error => {
          if (error.status === 500) {
            this.notFound = true;
          }
        });
  }

}

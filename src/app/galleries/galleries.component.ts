import {Component, OnInit} from '@angular/core';
import {GalleriesService} from './galleries.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.css']
})
export class GalleriesComponent implements OnInit {

  galleries;
  showTable = false;

  constructor(private galleriesService: GalleriesService,
              private router: Router) {
  }

  ngOnInit() {
    this.getGalleries();
  }

  getGalleries() {
    this.galleriesService.getGalleries()
      .subscribe(data => {
        this.galleries = data;
        this.showTable = true;
      });
  }

  goToGalleryDetails(id: number) {
    this.router.navigate(['gallery-details', id]);
  }

}

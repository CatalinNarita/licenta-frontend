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
  selectedGallery;

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
    this.router.navigate(['galleries', id]);
  }

  enableEditMode(gallery) {
    gallery.editable = true;
    this.selectedGallery = gallery;
  }

  disableEditMode(gallery) {
    gallery.editable = false;
    let gallerytoBeUpdated = {
      id: this.selectedGallery.id,
      name: this.selectedGallery.name,
      category: this.selectedGallery.category,
    };
    this.galleriesService.updateGallery(gallerytoBeUpdated)
      .subscribe(data => console.log(data)),
      error => console.log(error);
  }

  deleteGallery(galleryId: number) {}



}

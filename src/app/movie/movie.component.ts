import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Movie } from './movie';

@Component({
  selector: 'wjs-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent {
  movie: Movie = {
    id: 1,
    title: 'Subiektywny przegląd sytuacji na froncie - meet.js Poznań',
    description: '"Nowy dzień, nowy framework". Jak żyć?',
    url: 'https://www.youtube.com/embed/Aybh_2pIi2I'
  }

  constructor(private sanitizer: DomSanitizer) {}

  get wrappedMovieUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.url);
  }
}
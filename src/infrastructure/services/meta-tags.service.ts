import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { MoviesDetails } from '@infrastructure/models';

@Injectable()
export class MetaTagsService {
  constructor(private title: Title, private meta: Meta) {}

  generate(data: MoviesDetails): void {
    const { title } = data;
    this.title.setTitle(title);
  }
}

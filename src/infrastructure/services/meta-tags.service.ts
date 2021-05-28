import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { HelpersService } from './helpers.service';
import { MetaTags } from '@infrastructure/models';

@Injectable()
export class MetaTagsService {
  constructor(
    private title: Title,
    private meta: Meta,
    private helpersService: HelpersService
  ) {}

  generate({
    urlPage,
    description,
    imagePath,
    imageSize,
    isHomePage = false,
    title,
  }: MetaTags): void {
    this.title.setTitle(
      isHomePage ? title : `${title} | The Movie Database (TMDb)`
    );
    this.meta.updateTag({
      name: 'title',
      content: isHomePage ? title : `${title} | The Movie Database (TMDb)`,
    });
    this.meta.updateTag({
      name: 'description',
      content: description,
    });
    // this.meta.addTags([
    //   { name: 'og:type', content: 'website' },
    //   { name: 'og:url', content: urlPage },
    //   {
    //     name: 'og:title',
    //     content: isHomePage ? title : `${title} | The Movie Database (TMDb)`,
    //   },
    //   {
    //     name: 'og:description',
    //     content: description,
    //   },
    //   {
    //     name: 'og:image',
    //     content: isHomePage
    //       ? imagePath
    //       : this.helpersService.mediaImage(imagePath!, imageSize),
    //   },
    //   { name: 'twitter:card', content: 'summary_large_image' },
    //   { name: 'twitter:url', content: urlPage },
    //   {
    //     name: 'twitter:title',
    //     content: isHomePage ? title : `${title} | The Movie Database (TMDb)`,
    //   },
    //   {
    //     name: 'twitter:description',
    //     content: description,
    //   },
    //   {
    //     name: 'twitter:image',
    //     content: isHomePage
    //       ? imagePath
    //       : this.helpersService.mediaImage(imagePath!, imageSize),
    //   },
    // ]);
  }
}

import { Injectable } from '@angular/core';

import { environment } from '@infrastructure/environments/environment';
import { Genre } from '@infrastructure/models';

@Injectable()
export class HelpersService {
  constructor() {}

  title(item: any): string {
    return item.title ? item.title : item.name;
  }

  mediaImage(path: string, size: string): string {
    if (!path) {
      return 'assets/images/default-image.png';
    }
    return `${environment.imageApi.secure_base_url}/${size}${path}`;
  }

  genres(genres: Genre[]): string {
    return genres.map((genre: Genre) => genre.name).join(' | ');
  }

  overview(overview: string): string {
    return overview.length > 110 ? overview.substring(0, 110) : overview;
  }

  convertMinutesToTime(data: any): string {
    const minutes = data % 60;
    const hours = (data - minutes) / 60;
    const totalMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}h ${totalMinutes}m`;
  }

  scrollTopPage(): void {
    window.scrollTo(0, 0);
  }
}

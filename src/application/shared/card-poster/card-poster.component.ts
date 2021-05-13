import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { MovieItem } from '@infrastructure/models';
import { HelpersService } from '@infrastructure/services/helpers.service';
import { Poster } from '@infrastructure/enums';

@Component({
  selector: 'app-card-poster',
  templateUrl: './card-poster.component.html',
  styleUrls: ['./card-poster.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPosterComponent implements OnInit {
  @Input()
  media!: MovieItem;
  posterSize: string = Poster.w154;
  constructor(public helpersService: HelpersService) {}

  ngOnInit(): void {}
}

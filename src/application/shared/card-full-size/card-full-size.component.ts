import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { MovieItem } from '@infrastructure/models';
import { HelpersService } from '@infrastructure/services/helpers.service';
import { Backdrop } from '@infrastructure/enums';

@Component({
  selector: 'app-card-full-size',
  templateUrl: './card-full-size.component.html',
  styleUrls: ['./card-full-size.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFullSizeComponent implements OnInit {
  @Input()
  indexItem!: number;
  @Input()
  media!: MovieItem;
  @Input()
  showOverview: boolean = false;

  sizeImage!: string;

  constructor(public helpersService: HelpersService) {}

  ngOnInit(): void {
    this.sizeImage = this.indexItem === 0 ? Backdrop.w780 : Backdrop.w300;
  }
}

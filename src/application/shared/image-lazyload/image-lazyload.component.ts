import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-image-lazyload',
  templateUrl: './image-lazyload.component.html',
  styleUrls: ['./image-lazyload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageLazyloadComponent implements OnInit {
  @Input() src!: string;
  @Input() alt!: string;
  @Output() isVisible = new EventEmitter();

  state = {
    visible: false,
    loaded: false,
  };

  constructor(private el: ElementRef, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.calcVisibility();
  }

  @HostListener('window:scroll', ['$event'])
  onscroll() {
    this.calcVisibility();
  }

  private setState(key: string, value: boolean) {
    this.state = { ...this.state, [key]: value };
    this.cd.detectChanges();
  }

  private calcVisibility() {
    const top = this.el.nativeElement.getBoundingClientRect().top;
    if (top <= window.innerHeight && !this.state.visible) {
      this.setState('visible', true);
    }
  }

  show() {
    this.setState('visible', true);
  }

  onLoad() {
    this.setState('loaded', true);
  }
}

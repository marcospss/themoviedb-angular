import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLazyloadComponent } from './image-lazyload.component';

describe('ImageLazyloadComponent', () => {
  let component: ImageLazyloadComponent;
  let fixture: ComponentFixture<ImageLazyloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageLazyloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageLazyloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

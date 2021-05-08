import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFullSizeComponent } from './card-full-size.component';

describe('CardFullSizeComponent', () => {
  let component: CardFullSizeComponent;
  let fixture: ComponentFixture<CardFullSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFullSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFullSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

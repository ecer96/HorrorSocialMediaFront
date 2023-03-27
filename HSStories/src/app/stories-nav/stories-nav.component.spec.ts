import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesNavComponent } from './stories-nav.component';

describe('StoriesNavComponent', () => {
  let component: StoriesNavComponent;
  let fixture: ComponentFixture<StoriesNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoriesNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoriesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

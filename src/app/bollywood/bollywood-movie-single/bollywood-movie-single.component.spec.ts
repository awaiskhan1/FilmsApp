import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BollywoodMovieSingleComponent } from './bollywood-movie-single.component';

describe('BollywoodMovieSingleComponent', () => {
  let component: BollywoodMovieSingleComponent;
  let fixture: ComponentFixture<BollywoodMovieSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BollywoodMovieSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BollywoodMovieSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

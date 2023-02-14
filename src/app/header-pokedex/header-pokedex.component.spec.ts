import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPokedexComponent } from './header-pokedex.component';

describe('HeaderPokedexComponent', () => {
  let component: HeaderPokedexComponent;
  let fixture: ComponentFixture<HeaderPokedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPokedexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

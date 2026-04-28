import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheProdutos } from './detalhe-produtos';

describe('DetalheProdutos', () => {
  let component: DetalheProdutos;
  let fixture: ComponentFixture<DetalheProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheProdutos],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalheProdutos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

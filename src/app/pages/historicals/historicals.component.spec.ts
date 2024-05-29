import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalsComponent } from './historicals.component';

describe('HistoricalsComponent', () => {
  let component: HistoricalsComponent;
  let fixture: ComponentFixture<HistoricalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoricalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

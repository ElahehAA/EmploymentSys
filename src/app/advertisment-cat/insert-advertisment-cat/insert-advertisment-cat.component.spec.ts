import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertAdvertismentCatComponent } from './insert-advertisment-cat.component';

describe('InsertAdvertismentCatComponent', () => {
  let component: InsertAdvertismentCatComponent;
  let fixture: ComponentFixture<InsertAdvertismentCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertAdvertismentCatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertAdvertismentCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

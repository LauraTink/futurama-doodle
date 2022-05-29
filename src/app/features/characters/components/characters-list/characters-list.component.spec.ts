import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from '@app/shared/shared.module';
import { CharactersService } from '../../services/characters.service';
import { CharactersListComponent } from './characters-list.component';

describe('CharactersListComponent', () => {
  let component: CharactersListComponent;
  let fixture: ComponentFixture<CharactersListComponent>;
  let mockService: jasmine.SpyObj<CharactersService>;

  beforeEach(async() => {
    mockService = jasmine.createSpyObj('InfoService', ['get']);

    await TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [CharactersListComponent],
      providers: [{ provide: CharactersService, useValue: mockService }],
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CharactersListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  });
});

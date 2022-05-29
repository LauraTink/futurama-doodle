import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpErrorResponse } from '@angular/common/http';

import { defer, of } from 'rxjs';

import { SharedModule } from '@app/shared/shared.module';
import { CharactersService } from '../../services/characters.service';
import { CharacterDetailsComponent } from './character-details.component';
import { Character } from '../../models/character.model';

describe('CharacterDetailsComponent', () => {
  let component: CharacterDetailsComponent;
  let fixture: ComponentFixture<CharacterDetailsComponent>;
  let mockService: jasmine.SpyObj<CharactersService>;

  beforeEach(async() => {
    mockService = jasmine.createSpyObj('InfoService', ['get']);

    await TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [CharacterDetailsComponent],
      providers: [{ provide: CharactersService, useValue: mockService }],
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CharacterDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  });

  it('should return character details', async () => {
   const one = {
      id: 1,
      name: {
        first: 'fry',
        middle: '',
        last: '',
      },
      age: 120,
      images: {
        headshot: '',
        main: '',
      },
      gender: '',
      species: '',
      homePlanet: '',
      occupation: '',
      sayings: ['two', 'one'],
    };
    const two = {
      id: 2,
      name: {
        first: 'bender',
        middle: '',
        last: '',
      },
      age: 120,
      images: {
        headshot: '',
        main: '',
      },
      gender: '',
      species: '',
      homePlanet: '',
      occupation: '',
      sayings: ['two', 'one'],
    };
    const expectedResult = [one, two] as Character[];

    mockService.get.and.returnValue(of(expectedResult));

    fixture.detectChanges();

    mockService.get().subscribe(result => {
      expect(result.length).toBe(2);
      expect(result).toEqual(expectedResult);
    });
  });

  it('should display an error if 404', async () => {
    const errorResponse = new HttpErrorResponse({
      error: '404 Not Found',
      status: 404,
      statusText: 'Not Found',
    });

    mockService.get.and.returnValue(defer(() => Promise.reject(errorResponse)));

    fixture.detectChanges();

    mockService.get().subscribe(() => {}, err => expect(err.message).toContain('404 Not Found'));
  });
});

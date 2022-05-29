import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpErrorResponse } from '@angular/common/http';

import { defer, of } from 'rxjs';

import { SharedModule } from '@app/shared/shared.module';
import { Info } from '../models/info.model';
import { InfoService } from '../services/info.service';
import { InfoComponent } from './info.component';
import { Character } from '@app/features/characters/models/character.model';

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;
  let mockService: jasmine.SpyObj<InfoService>;

  beforeEach(async() => {
    mockService = jasmine.createSpyObj('InfoService', ['get', 'getCharacters']);

    await TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [InfoComponent],
      providers: [{ provide: InfoService, useValue: mockService }],
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(InfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  });

  it('should return info', async () => {
    const expectedResult = [{
      id: 1,
      synopsis: 'test',
      yearsAired: '1999',
    }] as Info[];

    mockService.get.and.returnValue(of(expectedResult));

    fixture.detectChanges();

    mockService.get().subscribe(result => {
      expect(result.length).toBe(1);
      expect(result).toEqual(expectedResult);
    });
  });

  it('should return character list', async () => {
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

    mockService.getCharacters.and.returnValue(of(expectedResult));

    fixture.detectChanges();

    mockService.getCharacters().subscribe(result => {
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

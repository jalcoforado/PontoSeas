import { TestBed } from '@angular/core/testing';

import { NpsQuestionsService } from './survey.service';

describe('NpsQuestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NpsQuestionsService = TestBed.get(NpsQuestionsService);
    expect(service).toBeTruthy();
  });
});

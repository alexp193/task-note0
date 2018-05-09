import { TestBed, inject } from '@angular/core/testing';

import { NotesSrvService } from './notes-srv.service';

describe('NotesSrvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotesSrvService]
    });
  });

  it('should be created', inject([NotesSrvService], (service: NotesSrvService) => {
    expect(service).toBeTruthy();
  }));
});

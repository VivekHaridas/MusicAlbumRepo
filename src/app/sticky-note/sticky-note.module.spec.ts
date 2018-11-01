import { StickyNoteModule } from './sticky-note.module';

describe('StickyNoteModule', () => {
  let stickyNoteModule: StickyNoteModule;

  beforeEach(() => {
    stickyNoteModule = new StickyNoteModule();
  });

  it('should create an instance', () => {
    expect(stickyNoteModule).toBeTruthy();
  });
});

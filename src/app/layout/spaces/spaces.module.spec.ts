import { SpacesModule } from './spaces.module';

describe('SpacesModule', () => {
  let SpacesModule: SpacesModule;

  beforeEach(() => {
    SpacesModule = new SpacesModule();
  });

  it('should create an instance', () => {
    expect(SpacesModule).toBeTruthy();
  });
});

import { UpdateSpaceModule } from './update-space.module';

describe('UpdateSpaceModule', () => {
  let updateSpaceModule: UpdateSpaceModule;

  beforeEach(() => {
    updateSpaceModule = new UpdateSpaceModule();
  });

  it('should create an instance', () => {
    expect(updateSpaceModule).toBeTruthy();
  });
});

import { AddSpaceModule } from './add-space.module';

describe('AddSpaceModule', () => {
  let addSpaceModule: AddSpaceModule;

  beforeEach(() => {
    addSpaceModule = new AddSpaceModule();
  });

  it('should create an instance', () => {
    expect(addSpaceModule).toBeTruthy();
  });
});

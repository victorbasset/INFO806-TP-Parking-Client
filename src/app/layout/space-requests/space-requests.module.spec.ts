import { SpaceRequestsModule } from './space-requests.module';

describe('SpaceRequestsModule', () => {
  let spaceRequestsModule: SpaceRequestsModule;

  beforeEach(() => {
    spaceRequestsModule = new SpaceRequestsModule();
  });

  it('should create an instance', () => {
    expect(spaceRequestsModule).toBeTruthy();
  });
});

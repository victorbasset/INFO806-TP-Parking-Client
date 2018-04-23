import { MyspacesModule } from './myspaces.module';

describe('MyspaceModule', () => {
  let myspacesModule: MyspacesModule;

  beforeEach(() => {
    myspacesModule = new MyspacesModule();
  });

  it('should create an instance', () => {
    expect(myspacesModule).toBeTruthy();
  });
});

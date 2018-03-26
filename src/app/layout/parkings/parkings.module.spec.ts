import { ParkingsModule } from './parkings.module';

describe('ParkingsModule', () => {
  let parkingsModule: ParkingsModule;

  beforeEach(() => {
    parkingsModule = new ParkingsModule();
  });

  it('should create an instance', () => {
    expect(parkingsModule).toBeTruthy();
  });
});

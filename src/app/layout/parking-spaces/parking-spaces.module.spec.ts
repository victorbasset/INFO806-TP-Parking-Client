import { ParkingSpacesModule } from './parking-spaces.module';

describe('ParkingSpacesModule', () => {
  let parkingSpacesModule: ParkingSpacesModule;

  beforeEach(() => {
    parkingSpacesModule = new ParkingSpacesModule();
  });

  it('should create an instance', () => {
    expect(parkingSpacesModule).toBeTruthy();
  });
});

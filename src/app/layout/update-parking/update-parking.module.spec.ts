import { UpdateParkingModule } from './update-parking.module';

describe('UpdateParkingModule', () => {
  let updateParkingModule: UpdateParkingModule;

  beforeEach(() => {
    updateParkingModule = new UpdateParkingModule();
  });

  it('should create an instance', () => {
    expect(updateParkingModule).toBeTruthy();
  });
});

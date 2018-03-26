import { AddParkingModule } from './add-parking.module';

describe('AddParkingModule', () => {
  let addParkingModule: AddParkingModule;

  beforeEach(() => {
    addParkingModule = new AddParkingModule();
  });

  it('should create an instance', () => {
    expect(addParkingModule).toBeTruthy();
  });
});

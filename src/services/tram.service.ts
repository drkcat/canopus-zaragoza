import { Injectable } from '@nestjs/common';
import { ErrorResponse } from '../models/error.interface';

@Injectable()
export class TramService {
  // Stations
  public getStations(): ErrorResponse {
    return {
      statusCode: 501,
      error: 'Not Implemented',
      message: `#TODO`,
    };
  }

  // Station
  public getStation(id: string): ErrorResponse {
    return {
      statusCode: 501,
      error: 'Not Implemented',
      message: `#TODO`,
    };
  }
}
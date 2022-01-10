import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
  getApp(): string {
    return `
      <center>
        <h1>Service is not supported</h1>
        <p>
          We apologize for the inconvenience, the service is not supported for you.
        </p>
      </center>
    `;
  }
}

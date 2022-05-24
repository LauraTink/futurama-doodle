import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from "@app/shared/services/base.service";

@Injectable()
export class InfoService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }
}

/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {RequestHeader} from "tradex-models-common";

/**
 * dashboardListRequest schema
 */
export interface DashboardListRequest {
  headers?: RequestHeader;
  sourceIp?: string;
  deviceType?: null | string;
  [k: string]: any;
}

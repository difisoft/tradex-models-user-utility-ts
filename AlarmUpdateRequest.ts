/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "tradex-models-common";

/**
 * alarmUpdateRequest schema
 */
export type AlarmUpdateRequest = BaseRequest & {
  /**
   * id of alarm
   */
  alarmId?: number;
  /**
   * when the price equal to this value, the alarm will be trigger
   */
  value: number;
  /**
   * current value of the code
   */
  currentValue: number;
  /**
   * alarm once or multiple time
   */
  option: "ONCE" | "MULTIPLE";
  /**
   * email, sms or push notification
   */
  notificationMethod: "PUSH_NOTIFICATION" | "EMAIL" | "SMS";
  [k: string]: any;
};

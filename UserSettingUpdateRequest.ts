/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * userSettingUpdateRequest schema
 */
export type UserSettingUpdateRequest = BaseRequest & {
  /**
   * the json file that front-end use to store setting
   */
  data: {
    [k: string]: any;
  };
  [k: string]: any;
};

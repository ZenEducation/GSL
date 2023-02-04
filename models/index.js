// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AuthInfo } = initSchema(schema);

export {
  AuthInfo
};
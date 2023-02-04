// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Message, ChatGroup } = initSchema(schema);

export {
  Message,
  ChatGroup
};
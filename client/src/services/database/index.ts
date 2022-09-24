import Realm from 'realm';
import { ContactsSchema } from './schema/contacts';

export const connectToDB = async (schema: any) => {
  const realm = await Realm.open({
    path: 'myrealm',
    schema: [schema],
  });
  return realm;
};

export const writeContactToDB = async (realm: any, contact: any) => {
  const { name, chatHandle } = contact;
  realm?.write(() => {
    realm?.create(ContactsSchema.name, {
      _id: 1,
      name,
      chatHandle,
    });
  });
};

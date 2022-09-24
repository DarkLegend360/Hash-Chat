export const ContactsSchema = {
  name: 'Contacts',
  properties: {
    _id: 'int',
    name: 'string',
    chatHandle: 'string',
    status: 'string?',
    lastMessage: 'string?',
    lastMessageTime: 'string?',
    lastSeen: 'string?',
  },
  primaryKey: '_id',
};

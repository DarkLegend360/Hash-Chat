export const MessagesSchema = {
  name: 'Messages',
  properties: {
    _id: 'int',
    message: 'string',
    timeStamp: 'string',
  },
  primaryKey: '_id',
};

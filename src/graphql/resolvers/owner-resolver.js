const owners = [
  {
    id: 1,
    firstName: 'Bill',
    lastName: 'Gates',
  },
  {
    id: 2,
    firstName: 'Steve',
    lastName: 'Jobs',
  }
];

export default {
  // This doesn't work
  Query: {
    owners() {
      return owners;
    },
  },
};

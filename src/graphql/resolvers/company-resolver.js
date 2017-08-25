const companies = [
  {
    id: 1,
    name: 'Microsoft',
  },
  {
    id: 2,
    name: 'Apple',
  },
];

export default {
  // This works
  companies() {
    return companies;
  },
};
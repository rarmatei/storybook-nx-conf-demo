module.exports = {
  displayName: 'order-pizza-ui-pizza-image',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/order-pizza/ui-pizza-image',
};

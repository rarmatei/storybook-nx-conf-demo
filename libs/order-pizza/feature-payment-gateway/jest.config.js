module.exports = {
  displayName: 'order-pizza-feature-payment-gateway',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory:
    '../../../coverage/libs/order-pizza/feature-payment-gateway',
};

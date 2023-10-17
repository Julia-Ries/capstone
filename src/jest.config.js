// module.exports = {
// type: "module",
//   preset: 'react-scripts', // or any other preset you use
//   transform: {
//     '^.+\\.js$': 'babel-jest'
//   },
//   moduleNameMapper: {
//     '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
//   }
// };


module.exports = {
  transform: {
    '^.+\\.m?js$': 'babel-jest',
  },
};
module.exports = {
  name: 'invoices',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/invoices',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

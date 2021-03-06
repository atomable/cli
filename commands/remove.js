'use strict';  // eslint-disable-line

const getBucketName = require('../tasks/remove/get-bucket-name');
const emptyBucket = require('../tasks/remove/empty-bucket');
const deleteStack = require('../tasks/remove/delete-stack');
const log = require('../utils/log')('atomable');
const Command = require('../ember-cli/lib/models/command');
const SilentError = require('silent-error');

const command = Command.extend({
  name: 'remove',

  description: 'Removes the specified stack.',

  aliases: ['r', 'rm'],

  works: 'everywhere',

  availableOptions: [
    { name: 'region', type: String, aliases: ['r'], default: 'us-east-1' },
  ],
  anonymousOptions: [
    '<stackName>',
  ],

  run: (commandOptions, rawArgs) => {
    const stackName = rawArgs.shift();

    if (!stackName) {
      return Promise.reject(new SilentError(`The 'atomable ${this.name}' command requires a stackName argument to be specified. For more details, use 'atomable help'.`));
    }

    log.dim(`Deleting ${stackName} stack...`);

    return getBucketName(log, stackName, commandOptions.region)
      .then(bucketName => emptyBucket(log, bucketName, commandOptions.region))
      .then(() => deleteStack(log, stackName, commandOptions.region))
      .catch(log.red);
  },
});

command.overrideCore = true;
module.exports = command;

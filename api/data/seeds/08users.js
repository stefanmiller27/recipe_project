exports.seed = function(knex, Promise) {
    return knex('users').insert([
          { username: 'alpha', password: '$2a$08$spXjq4k2fqg0vpQ01tCLs.8PzkModHTKfMtsciYpI/FNWM6xlHL4K'},
          { username: 'beta', password: '$2a$08$spXjq4k2fqg0vpQ01tCLs.8PzkModHTKfMtsciYpI/FNWM6xlHL4K'},
          { username: 'omega', password: '$2a$08$spXjq4k2fqg0vpQ01tCLs.8PzkModHTKfMtsciYpI/FNWM6xlHL4K'},
    ]);
  };
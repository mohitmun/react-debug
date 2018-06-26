exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACC_KEY',

  updateJob: false,
  specs: [
    './tests/specs/twitter.js'
  ],
  exclude: [],

  capabilities: [{
  	// device: 'iPhone 6S',
  	// os_version: '9.1',

    device: 'iPhone 7',
    os_version: '10.3',
    real_mobile: 'true',

    // browser: 'safari',
    // browser_version: '10',

    build: 'twitter debug'
  }],

  logLevel: 'verbose',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 100 * 1000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  host: 'hub.browserstack.com',
  
  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd'
  },

// Set 'name' capability depending on test filename
  beforeSession: function (config, capabilities, specs) { 
    capabilities.name = specs && specs[0].split('/').pop() || undefined;
  }
}

module.exports = {
    "extends": "airbnb-base",
    "plugins": ["jasmine"],

    'rules': {
        'func-names': 0,
        'prefer-arrow-callback': 0
      },
    "env": {
        "jasmine": true,
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jquery": true
      },
};


# Webdriver.io No Internet Connection testing

Quick WDIO project done to determine if a "No internet" error can be reproduced on Chrome.

## Install
```
npm install
```

## Run
```
npm test
```

## Environment Variables Used

### WDIO_CAP_MULTIPLIER
Will multiply the times the baseCap gets sent.
Easy way to run multiple instances of the same capability.

Default: 5

### CONNECTION_DEBUG

Will send a sauce:throttleNetwork command which then makes test fail.

### SAUCE_BUILD_NAME

Build name that CI jobs can set.

## Other notes
JUnit XML files get created on the junit_xml folder.
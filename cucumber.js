module.exports = {
  default: {
    requireModule: [
      "ts-node/register"
    ],
    require: [
      "features/step-definitions/*.ts",
      "utils/*.ts"
    ],
    format: [
      "progress",
      "json:reports/cucumber-report.json"
    ],
    publishQuiet: true
  }
};
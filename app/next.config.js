const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");
const repository_name = "next_demo";

module.exports = (phase) => {
  const assetPrefix =
    phase === PHASE_PRODUCTION_BUILD ? "/" + repository_name : "/";
  return {
    assetPrefix: assetPrefix,
  };
};

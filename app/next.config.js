const repository_name = "next_demo";

module.exports = (phase) => {
  const assetPrefix = phase === "build" ? "/" + repository_name : "/";
  return {
    assetPrefix: assetPrefix,
  };
};

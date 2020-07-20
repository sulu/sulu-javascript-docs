import React from "react";
import ReactDOM from "react-dom";
import VersionSwitcher from "./VersionSwitcher";

const renderVersionSwitcher = (currentVersion, versions) => {
  const target = document.createElement("div");
  target.id = "version-switcher";
  document.body.appendChild(target);

  ReactDOM.render(
    <VersionSwitcher currentVersion={currentVersion} versions={versions} />,
    target
  );
};

if (
  globalThis &&
  globalThis.STYLEGUIDE_CURRENT_VERSION &&
  globalThis.STYLEGUIDE_AVAILABLE_VERSIONS
) {
  const currentVersion = globalThis.STYLEGUIDE_CURRENT_VERSION;
  const availableVersions = globalThis.STYLEGUIDE_AVAILABLE_VERSIONS;

  if (!availableVersions.includes(currentVersion)) {
    availableVersions.push(currentVersion);
  }

  availableVersions.sort().reverse();

  renderVersionSwitcher(currentVersion, availableVersions);
}

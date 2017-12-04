import path from 'path';
import pkgDir from 'pkg-dir';
import readPackage from './read_package.mjs';
import gitInfo from './git_info.mjs';

export default function moduleInfo(basepath) {
  const rootPath = basepath || pkgDir.sync(path.resolve(__dirname, '..'));

  return {
    pkg: readPackage(rootPath),
    git: gitInfo(rootPath),
  };
}

import fs from 'fs';
import path from 'path';

// read the file from the filesystem to avoid any node require cache
export default function readPackage(rootPath) {
  return JSON.parse(fs.readFileSync(path.resolve(rootPath, 'package.json'), { encoding: 'utf8' }));
}

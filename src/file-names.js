const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let renamed = [];
  for (let i = 0; i < names.length; i++) {
    let getNewFileNameWithIndex = (fileName, index, renamed) => {
      let composedName = `${fileName}(${index})`;
      if (!renamed.includes(composedName)) {
        return composedName;
      } else {
        return getNewFileNameWithIndex(fileName, index + 1, renamed);
      }
    };
    let getNewFileName = (fileName, renamed) => {
      if (!renamed.includes(fileName)) {
        return fileName;
      } else {
        return getNewFileNameWithIndex(fileName, 1, renamed);
      }
    };
    let newFileName = getNewFileName(names[i], renamed);
    renamed.push(newFileName);
  }
  return renamed;
}

module.exports = {
  renameFiles,
};

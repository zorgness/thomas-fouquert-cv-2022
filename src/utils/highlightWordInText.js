export const highLightWordInText = (_string, _charToReplace) => {
  let _replaceWith = [];
  _charToReplace.forEach((element) => {
    if (_string.includes(element)) {
      _replaceWith.push(`<strong class="word-strongify">${element}</strong>`);
    } else {
      _charToReplace = _charToReplace.filter((word) => word !== element);
    }
  });
  for (let i = 0; i < _charToReplace.length; i++) {
    _string = _string.replace(
      new RegExp(_charToReplace[i], "gi"),
      _replaceWith[i]
    );
  }
  return _string;
};

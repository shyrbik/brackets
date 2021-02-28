module.exports = function check(str, bracketsConfig) {
  let flag = true;

  let arrConfig = bracketsConfig.map((i) => i[0] + i[1]);

  let stringForCompare = str;
  do {
      for (let i = 0; i < arrConfig.length; i++) {
          str = str.replace(arrConfig[i], '');
      };

      if (str.length == 0) {
          return true;
      };
      if (stringForCompare === str) {
          return false;
      };

      stringForCompare = str;
  } while (flag);
};

module.exports = function check(str, bracketsConfig) {
    
    let confArr = bracketsConfig.map((i) => i[0] + i[1]);

    let stringForCompare = str;
    while (true) {
        for (let i = 0; i < confArr.length; i++) {
            str = str.replace(confArr[i], '');
        };

        if (str.length == 0) {
            return true;
        };
        if (stringForCompare === str) {
            return false;
        };

        stringForCompare = str;
    };
};

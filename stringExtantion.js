(() => {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this.toString();
        }
        return str + this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this.toString();
        }
        return this.toString() + str;
    };

    String.prototype.isEmpty = function () {
        return this.length === 0;
    };

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }

        if (this.length <= n) {
            return this.toString();
        }

        let str = this.toString();

        if (str.includes(' ')) {
            let words = str.split(' ');
            let result = [];

            for (let word of words) {
                let current = result.join(' ');
                if ((current + ' ' + word).trim().length + 3 <= n) {
                    result.push(word);
                } else {
                    break;
                }
            }

            if (result.length === 0) {
                return str.slice(0, n - 3) + '...';
            }

            return result.join(' ') + '...';
        }

        return str.slice(0, n - 3) + '...';
    };

    String.format = function (string, ...params) {
        for (let i = 0; i < params.length; i++) {
            string = string.split(`{${i}}`).join(params[i]);
        }
        return string;
    };
})()
let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
'quick', 'brown');
str = String.format('jumps {0} {1}',
'dog');
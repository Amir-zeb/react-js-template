export default class Utils {
    static generateId() {
        return Math.ceil(Math.random() * 10000000)
    }

    static matchPassword(pass, c_pass) {
        if (!!pass && c_pass !== pass) {
            return true;
        }
        return false;
    }

    static isValidEmail(value) {
        let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
        if (regex.test(value)) {
            return true;
        }
        return false;
    }

    static isNumber(str) {
        if (/^[0-9\b]+$/.test(str)) {
            return true;
        }
        return false;
    }

    static inRange(value, max) {
        if (value.length < max) {
            return true;
        }
        return false;
    }

    static capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
    }

    static removeUnderscore(str) {
        return str.split('_').join(" ");
    }

    static acceptCSV(str) {
        return ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
    }
}
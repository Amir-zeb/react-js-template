export default class Utils {
    static generateId() {
        return Math.ceil(Math.random() * 10000000)
    }
    
    static capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
    }   

    static removeUnderscore(str) {
        return str.split('_').join(" ");
    }

    static formatWithSuffix(number) {
        if(!(!!number)){
            return number;
        }
        if (number >= 1000000) {
            return (number / 1000000).toFixed(2) + 'M';
        } else if (number >= 1000) {
            return (number / 1000).toFixed(1) + 'K';
        }
        return number.toString();
    }
}
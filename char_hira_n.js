import { Char } from "./char.js";

export class CharHiraN extends Char {
    constructor() {
        super("ん", ["nn", "n'", "xn"]);
    }

    expectRoman() {
        if (this.nextChar === null) {
            return Char.prototype.expectRoman.call(this);
        }
        const nextCharFirstRoman = this.nextChar.expectRoman()[0];
        if (nextCharFirstRoman.match(/^(n|'|a|i|u|e|o|y)$/) !== null) {
            return Char.prototype.expectRoman.call(this);
        }
        if (
            this.nextExpectRomanIndex > 1 ||
            this.nextExpectRomanIndex === 1 && this.expectRomanArray[0][0] === "x"
        ) {
            return this.expectRomanArray[0];
        }
        return "n";
    }

    inputRoman(roman) {
        const result = Char.prototype.inputRoman.call(this, roman);
    
        if (result !== "unmatch" || this.nextExpectRomanIndex === 0 || this.nextChar === null) {
            return result;
        }
    
        if (this.nextChar.expectRoman()[0].match(/^(a|i|u|e|o|y)$/) !== null) {
            return "unmatch";
        }
    
        switch (this.nextChar.inputRoman(roman)) {
            case "unmatch": return "unmatch";
            case "incomplete": return this.nextChar;
            case "complete": return this.nextChar.nextChar === null ? "complete" : this.nextChar.nextChar;
        }
    }
}

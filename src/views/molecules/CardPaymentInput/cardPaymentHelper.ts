export const cardPaymentHelper = {
    maskInput(value:any, char:string) {
        return value.replace(/[0-9]/g, char);
    },
    
    formatCardNumber(value:string) {
        let masked = "";
        let count = 0;
    
        for (let char of value) {
            masked += char;
            count++;
            if (count % 4 === 0 && count !== value.length) {
                masked += " ";
            }
        }
    
        return masked;
    },
    maskCharacters(str:any) {
        let characters = str.split("");
        let groups = [];

        for (const i of characters.keys()) {
            if (i % 4 === 0) {
                groups.push("");
            }
            groups[groups.length - 1] += "*";
        }

        return groups.join(" ");
    },
    formatCardExpiry(value:string) {
        return value.replace(/[^0-9]/g, '')
        .replace(/(.{2})/, '$1/')
        .slice(0, 5);
    },

    formatCVC(value:string) {
        return this.maskInput(value, "*");
    },

    luhnCheck(val:any) {
        let checksum = 0;
        let j = 1;

        for (let i = val.length - 1; i >= 0; i--) {
        let calc = 0;
        calc = Number(val.charAt(i)) * j;
        if (calc > 9) {
            checksum = checksum + 1;
            calc = calc - 10;
        }
        checksum = checksum + calc;

        if (j == 1) {
            j = 2;
        } else {
            j = 1;
        }
        }
        return (checksum % 10) == 0;
    }

}
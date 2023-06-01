/* eslint-disable import/prefer-default-export */
export const convertToRoman = (number: any) => {
    if (Number.isNaN(number)) {
      return "";
    }
  
    const digits = String(number).split("");
  
      const key = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
             "","I","II","III","IV","V","VI","VII","VIII","IX"]
  
    let roman = "";
  
    let i = 2;
  
    // eslint-disable-next-line no-plusplus
    while (i--) roman = (key[+digits.pop + i * 10] || "") + roman;
    return roman;
  };
  
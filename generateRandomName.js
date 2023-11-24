// akdvh.txt


const generateRandomName = (len, ext = 'txt') => {
    let name = ''
    for (let i = 0; i < len; i++) {
        const randIndexAtASCII = 97 + (Math.random() * 26)
        const letter = String.fromCharCode(randIndexAtASCII)
        name += letter
    }
    return name + '.' + ext;
}
export default generateRandomName;

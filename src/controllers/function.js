/**
 * 生成key
 * @param {} text 
 * @param {*} key 
 */
exports.cipher = (text,key) => {
    let keyBuffer  = new Buffer(key)
    let textBuffer = new Buffer(text, 'utf8')
    let textCipheredBuffer = new Buffer(textBuffer.length)
    for (let i = 0; i < textBuffer.length; i++){
        textCipheredBuffer[i] = textBuffer[i];
        for (let j = 0; j < keyBuffer.length; j++) {
            textCipheredBuffer[i] ^= keyBuffer[j];
        }
    }
    return(textCipheredBuffer.toString('base64'))
}



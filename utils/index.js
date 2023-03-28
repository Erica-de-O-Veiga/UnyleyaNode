
const generateCode = function (){
    let text = '';
    const possible = 'ABCDEFGHIJLMNOPQRSTUVXZabcdefghijlmnopqrstuvxz0123456789';
    for(let i=0; i < 7; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
  module.exports = {generateCode}
/* 1- Escreva um programa que declare duas variáveis numéricas e realize as quatro
operações matemáticas básicas (+, -, *, /). Imprima os resultados no console.*/

const a = 2;
const b = 4;

let c = a + b;
let d = a - b;
let e = a * b;
let f = a / b;

console.log(`A Soma entre ${a} e ${b} é = ${c}`);
console.log(`A Subtração entre ${a} e ${b} é = ${d}`);
console.log(`A Multiplicação entre ${a} e ${b} é = ${e}`);
console.log(`A Divisão entre ${a} e ${b} é = ${f}`);


// 2- Faça um programa que mostre os números impares em um intervalo de 0 a 100.
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
/* 3- Faça um programa que mostre a quantidade de caracteres para o texto “Disciplina de
Programação para web”.*/
const string = 'Disciplina de Programação para web';
console.log(nome.length)

/* 4- Faça um programa que recebe o nome de uma variável e mostre o
<<primeiro>>.<<último nome>>@facens.br*/
let nome = 'Fabio Costa Camargo';

// Converte o nome para minúsculas e divide em palavras
let partesNome = nome.toLowerCase().split(" ");

//Pegar o primeiro nome
let primeiroNome = partesNome[0];
/// Pega o último nome
let ultimoNome = partesNome[partesNome.length -1];

// Gerar o email no formato desejado
let email = `${primeiroNome}.${ultimoNome}@facens.br`;

console.log(email);

/* 5- Escreva um programa que imprima os números de 1 a 10 no console usando um loop.
Os número devem ser separados com um traço, ex.: 1 – 2 – 3 - ... – 10. Observação:
após o número 10 não pode ter um traço.*/

for (let i = 1; i <= 10; i++) {
    if (i == 10) {
        console.log(`${i}`)
    } else {
        console.log(`${i} - `);
    }
}

//ou 
for (let j = 1; i <=10; i++) {
    const separador = 1 < 10 ? ' - ': '';
}
console.log(i + separador);

/* 6- Faça uma função que mostre o dobro do número passado. Caso o número seja menor
ou igual a zero deve mostrar a mensagem “Só é aceito números positivos maiores que
zero”.*/

function mostraDobro(n) {
    let dobro = n * 2;
    if (n > 0) {
        console.log(dobro);
    } else {
        console.log("Só aceita numeros positivos maiores que zero");
    }
}
mostraDobro(7);
mostraDobro(-2);
mostraDobro(0);

/* 7- Escreva uma função que receba uma string como argumento e retorne a string
invertida.*/

function inveterString(str) {
    console.log(str.split("").reverse().join(""));

}
let resutado = inveterString("Olá Mundo!");

/* 8- Escreva uma função que recebe uma string como argumento e retorna o número de
vogais presentes nessa string. Considere apenas vogais minúsculas (a, e, i, o, u).*/

function contaVogais(string) {
    let vogais = 'aeiou';
    let numVogais = 0;
    string = string.toLowerCase();

    for (let char of string) {
        if (vogais.includes(char)) {
            numVogais++;
        }
    }
    return numVogais;
}
let minhaString = 'Esta é uma string de exemplo';
let resultado = contaVogais(minhaString);
console.log(`O número de vogais na string é: ${resultado}`);

/* 9- Escreva uma função que recebe um endereço de e-mail como argumento e retorna
true se o e-mail for válido ou false caso contrário. Um e-mail válido deve conter um
único símbolo '@' e pelo menos um ponto '.' após o '@'.*/

function validarEmail(email) {
let indiceArroba= email.indexOf('@');
let indicePonto = email.indexOf('.', indiceArroba);

if(indiceArroba !== -1 && indicePonto !== -1 && indicePonto > indiceArroba + 1){
    return true;
}else{
    return false;
}
}
let meuEmail = 'fabio.costa@gmail.com';
if(validarEmail(meuEmail)) {
    console.log('E-mail Válido');
} else {
    console.log('E-mail inválido')
}

/* 10- Escreva uma função que verifique se uma determinada string é um palíndromo (ou
seja, pode ser lida da mesma forma tanto da esquerda para a direita quanto da direita
para a esquerda).
Exemplo: arara
*/

function verificarPalindromo(str) {
    // Remove espaços e converte para minúsculas para evitar problemas com espaços e maiúsculas
    const strSemEspacos = str.replace(/\s/g, '').toLowerCase();
    
    // Compara a string original com sua versão invertida
    return strSemEspacos === strSemEspacos.split('').reverse().join('');
}

// Exemplo de uso:
const exemplo1 = "arara";
const exemplo2 = "cachorro";

console.log(verificarPalindromo(exemplo1)); // Saída: true (é um palíndromo)
console.log(verificarPalindromo(exemplo2)); // Saída: false (não é um palíndromo)



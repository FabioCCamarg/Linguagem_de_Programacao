/* 1- Crie uma classe Usuario com os atributos nome e idade. Em seguida, crie um array de
objetos Usuario e crie um novo array apenas com os nomes dos usuários em letras
maiúsculas.Faça um programa que mostre os números impares em um intervalo de 0 a
100*/

class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

}
// Criando um array de objetos Usuario

const usuarios = [
    new Usuario('João', 25),
    new Usuario('Cris', 30),
    new Usuario('Claudia', 22)
]

// Criando um novo Array com us nomes dos Usuários em Letras maiúsculas.
const nomesMaiusculos = usuarios.map(usuario => usuario.nome.toUpperCase());
console.log('Nomes em maiúsculas', nomesMaiusculos);

// Mostrando os números ímpares no intervalo de 0 a 100

console.log('Números ímpares de 0 a 100');
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

/* 2- Continuando com a classe Usuario, filtre os usuários com idade superior a 18 anos*/

const usuariosMaioresDe18 = usuarios.filter(usuario => usuario.idade > 18);
console.log("Usuários com idade superior a 18 anos:", usuariosMaioresDe18);

/* 3- Utilizando a classe Usuario, encontre o primeiro usuário com idade entre 25 e 30 anos*/

const usuarioEntre25e30 = usuarios.find(usuario => usuario.idade >= 25 && usuario.idade <= 30);
console.log("Primeiro usuário com idade entre 25 e 30 anos:", usuarioEntre25e30);

/* 4- Crie um array de números e filtre apenas os números pares. Em seguida, mapeie esses
números para o dobro de seus valores*/

const numeros = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]
function buscaNumerosPares(value) {
    if (value % 2 == 0) {
        return value;
    }
}
//Filtrando números pares.
let numerosPares = numeros.filter(buscaNumerosPares);
console.log(numerosPares);

//Mapeando os números para o dobro do seus Valores.
let dobraValores = numerosPares.map(numerosPares => numerosPares * 2);
console.log(dobraValores);

/* 5- Crie uma classe Animal com os métodos emitirSom e correr. Crie subclasses Cachorro e Gato que herdam de Animal e implementam o método emitirSom de forma diferente para cada classe.*/

class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    emitirSom() {
        console.log('Som de generico de animal');
    }
    correr() {
        console.log(`${this.nome} está correndo`)
    }
}

//subclasse Cachorro que herda de Animal
class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome);
        this.raca = raca;
    }
    emitirSom() {
        console.log(`${this.nome} está latindo`);
    }
}

//Subclasse Gato que herda de Animal
class Gato extends Animal {
    constructor(nome, cor) {
        super(nome);
        this.cor = cor;
    }
    emitirSom() {
        console.log(`${this.nome} esta miando.`);
    }
}
const cachorro = new Cachorro("Max", "Labrador");
const gato = new Gato("Felix", "Preto");

cachorro.emitirSom();
cachorro.correr();

gato.emitirSom();
gato.correr();

/*/6- Crie uma classe Livro com os atributos titulo e paginas. Crie um array de objetos Livro e filtre os livros com mais de 300 páginas.*/

class Livro {
    constructor(titulo, paginas) {
        this.titulo = titulo;
        this.paginas = paginas;
    }
}
const livros = [
    new Livro('Guarda-chuva Azul', 200),
    new Livro('A Cabana', 350),
    new Livro('Os Asteriondes', 400),
    new Livro('A Arca', 250),
    new Livro('A escolha', 500),
];

//Filtrando livros com mais de 300 páginas
const filtroLivroMaisQue300PAgina = livros.filter(livro => livro.paginas > 300);

//Exibindo os resultados
console.log('Livros com mais de 300 Páginas:');

filtroLivroMaisQue300PAgina.forEach(livro => {
    console.log(`${livro.titulo} - ${livro.paginas} páginas`)
});

/* 7- Crie uma classe Carro com os atributos marca e ano. Crie um array de objetos Carro e encontre o primeiro carro da marca "Toyota" e filtre os carros fabricados após 2010.*/

class Carro {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
}
const carros = [
    new Carro('Toyota', 2015),
    new Carro('Honda', 2012),
    new Carro('Toyota', 2018),
    new Carro('Ford', 2009),
];

const carroToyotaApos2010 = carros.find(carro => carro.marca === 'Toyota' && carro.ano > 2010);
console.log(carroToyotaApos2010);

/* 8- Crie uma classe Produto com os atributos nome e preco. Crie um array de objetos Produto e mapeie esses 
produtos para um novo array com os preços aumentados em 10% .*/
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
const produtos = [
    new Produto('Tenis', 50),
    new Produto('Shorts', 30),
    new Produto('Camisa', 40),
];

const produtoComAumento = produtos.map(produto => {
    return {
        nome: produto.nome,
        preco: produto.preco,
    };
});

/* 9- Utilizando a classe Produto, encontre o primeiro produto com preço superior a R$
100,00 e altere o nome desse produto para "Produto Caro".*/

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

// lista de produtos
const listaDeProdutos = [
    new Produto("calçados", 80),
    new Produto("Tenis", 120),
    new Produto("Camisa", 90),
    new Produto("Joia", 110),
];

//Emcontrando o primeiro produto com preço superior a R$100,00
const produtoCaro = listaDeProdutos.find(produto => produto.preco > 100);

// verificando se um produto caro foi encontrado
if(produtoCaro) {
    //Alterando o nome do produto para "Produto Caro"
    produtoCaro.nome = "Produto Caro";
    console.log("Nome do produto caro alterado:", produtoCaro.nome);
} else {
    console.log("Nenum produto caro encontrado.");
}

// Imprimindo a lista de produtos após a modificação
console.log("Lista de produtos atualizada:", listaDeProdutos);

/* 10. Crie um array de números e filtre apenas os números divisíveis por 3. Em seguida,
mapeie esses números para o quadrado de seus valores.*/

const numeroS = [1, 3, 6, 9, 12, 15, 18, 21];

const numerosDivisiveisPor3 = numeroS.filter(num => num % 3 === 0);

const quadradosDosNumerosDivisiveisPor3 = numerosDivisiveisPor3.map(num => num ** 2);

console.log("Array original:", numeroS);
console.log("Números divisíveispor 3:", numerosDivisiveisPor3);
console.log("Quadrados dos números divisíveis por 3:", quadradosDosNumerosDivisiveisPor3);

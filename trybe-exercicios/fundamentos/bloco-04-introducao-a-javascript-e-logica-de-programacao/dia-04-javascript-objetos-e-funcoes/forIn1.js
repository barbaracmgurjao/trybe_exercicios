let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  let livros = leitor.livrosFavoritos;
  console.log(livros);
  for(let key in livros){
    console.log("O livro favorito de " + leitor.nome + ' ' + leitor.sobrenome + " se chama " + livros[key]['titulo']);
  }
  livros.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  });

    console.log(leitor.nome + " tem " + livros.length + " livros favoritos.")

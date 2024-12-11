# DOM - Document Object Model

O DOM (Document Object Model) é uma interface de programação para documentos HTML e XML. Ele representa a estrutura da página web como uma árvore de objetos, onde cada objeto representa uma parte do documento. O DOM permite que linguagens de script, como JavaScript, acessem e manipulem o conteúdo, a estrutura e o estilo de um documento de forma dinâmica.

## Estrutura do DOM

Imagine a estrutura de uma página HTML como uma árvore hierárquica:

- O elemento mais alto é o document, que representa toda a página.

- Dentro do document, temos elementos como html, head, body, e assim por diante.

- Esses elementos podem conter outros elementos, formando uma árvore de nós.

## Exemplos Práticos

### Acessar Elementos

Você pode acessar elementos do DOM usando métodos como getElementById ou querySelector.

    <!DOCTYPE html>
    <html>
    <head>
        <title>Exemplo DOM</title>
    </head>
    <body>
        <h1 id="titulo">Olá, DOM!</h1>
        <p>Este é um parágrafo.</p>
        <button id="meuBotao">Clique aqui</button>
        
        <script>
            // Acessar um elemento pelo ID
            var titulo = document.getElementById('titulo');
            console.log(titulo.textContent); // Saída: Olá, DOM!

            // Acessar um elemento usando querySelector
            var paragrafo = document.querySelector('p');
            console.log(paragrafo.textContent); // Saída: Este é um parágrafo.
        </script>
    </body>
    </html>

### Modificar Conteúdo

Você pode modificar o conteúdo e o estilo dos elementos do DOM.

    <!DOCTYPE html>
    <html>
    <head>
        <title>Exemplo DOM</title>
    </head>
    <body>
        <h1 id="titulo">Olá, DOM!</h1>
        <button id="meuBotao">Clique aqui</button>
        
        <script>
            var titulo = document.getElementById('titulo');
            var botao = document.getElementById('meuBotao');
            
            // Modificar o conteúdo de um elemento
            botao.addEventListener('click', function() {
                titulo.textContent = 'Você clicou no botão!';
            });
        </script>
    </body>
    </html>

### Alterar Estilos

Você pode alterar os estilos dos elementos do DOM.

    <!DOCTYPE html>
    <html>
    <head>
        <title>Exemplo DOM</title>
        <style>
            #titulo {
                color: blue;
            }
        </style>
    </head>
    <body>
        <h1 id="titulo">Olá, DOM!</h1>
        <button id="meuBotao">Mudar Cor</button>
        
        <script>
            var titulo = document.getElementById('titulo');
            var botao = document.getElementById('meuBotao');
            
            // Modificar o estilo de um elemento
            botao.addEventListener('click', function() {
                titulo.style.color = 'red';
            });
        </script>
    </body>
    </html>

## Benefícios do DOM

- Interatividade: Permite criar interfaces web interativas, onde os elementos podem responder às ações do usuário.

- Dinamicidade: Facilita a atualização do conteúdo e estilo da página sem recarregar todo o documento.

- Acessibilidade: Melhorar a acessibilidade ao permitir a manipulação dinâmica do conteúdo.
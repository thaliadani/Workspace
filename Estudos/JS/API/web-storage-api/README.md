# Web Storage API

A Web Storage API é uma interface que permite que os navegadores web armazenem dados localmente no dispositivo do usuário. Existem dois tipos principais de armazenamento na Web Storage API: localStorage e sessionStorage. Vamos ver a diferença entre os dois e alguns exemplos de como usá-los.

    localStorage

- Persistência: Armazena dados sem data de expiração. Os dados permanecem disponíveis mesmo depois que o navegador é fechado e reaberto.
  
- Capacidade: Normalmente até 5MB por domínio.

### Exemplo de uso:
  

    // Salvar um dado
    localStorage.setItem('nome', 'João');
    
    // Recuperar um dado
    const nome = localStorage.getItem('nome');
    console.log(nome); // Saída: João
    
    // Remover um dado
    localStorage.removeItem('nome');
    
    // Limpar todos os dados armazenados
    localStorage.clear();


    sessionStorage

- Persistência: Armazena dados apenas para a sessão atual. Os dados são perdidos quando a aba ou janela do navegador é fechada.
- Capacidade: Normalmente até 5MB por domínio.

### Exemplo de uso:

    // Salvar um dado
    sessionStorage.setItem('nome', 'Maria');
    
    // Recuperar um dado
    const nome = sessionStorage.getItem('nome');
    console.log(nome); // Saída: Maria
    
    // Remover um dado
    sessionStorage.removeItem('nome');
    
    // Limpar todos os dados armazenados
    sessionStorage.clear();

## Diferenças principais

**localStorage:** É usado para armazenar dados que precisam ser mantidos entre sessões de navegação.

**sessionStorage:** É usado para armazenar dados temporários que só precisam existir durante a duração de uma aba ou janela de navegação.

### Exemplos práticos

1. Manter preferências do usuário: Você pode usar localStorage para armazenar configurações de preferências do usuário, como tema escuro ou claro.

    // Salvar preferência do tema
    localStorage.setItem('tema', 'escuro');
    
    // Recuperar preferência do tema
    const tema = localStorage.getItem('tema');
    
    if (tema) {
    document.body.classList.add(tema);
    }

2. Salvar estado de uma página: Você pode usar sessionStorage para salvar o estado de uma página de formulário para que os dados não se percam caso o usuário recarregue a página.

    // Salvar dados do formulário
    document.querySelector('form').addEventListener('input', (event) => {
    sessionStorage.setItem('formData', event.target.value);
    });
    
    // Recuperar dados do formulário
    const formData = sessionStorage.getItem('formData');
    if (formData) {
    document.querySelector('form').value = formData;
    }

Esses são apenas exemplos básicos, mas a Web Storage API pode ser bastante poderosa para armazenar informações localmente no navegador do usuário de maneira segura e eficiente.

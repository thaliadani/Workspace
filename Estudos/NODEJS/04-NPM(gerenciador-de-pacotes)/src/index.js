//.gitignore - Utilizar para ignorar pasta node_modules.

// npm init - Criar o package.json.
// npm init -y - Criar o package.json com valores padrão.

//npm i - Restaurar o node_modules.
//npm i <pacote> - Instalar um pacote específico.
//npm i <pacote> -D - Instalar um pacote somente para desenvolvimento.
// npm delete <pacote> - Desinstalar um pacote.
// npm fund - Mostra os detalhes dos pacotes instalados.
// npm update <pacote> - Atualizar um pacote específico.

//node --watch index.js - Executar o arquivo index.js e reiniciar automaticamente ao salvar.

import chalk from 'chalk';
import logSymbols from 'log-symbols';

console.log(chalk.red.bgCyan.bold('Olá, mundo!'));

console.log(logSymbols.success, chalk.green.italic("Servidor iniciou com sucesso"));

console.log(logSymbols.error, chalk.red.italic("Servidor com problema"));
const formulario = document.querySelector('#formulario');
const adicionarTarefa = document.querySelector('#adicionar');
const listaDeTarefas = document.querySelector('#lista');

let tarefas: any[] = [];

formulario?.addEventListener('submit', (evento) => {
    evento.preventDefault();// Evita o comportamento padrão do formulário, que seria recarregar a página.

    const tituloDaTarefa = (document.querySelector('#tarefa') as HTMLInputElement).value;

    if (tituloDaTarefa.length < 3) {
        alert('A tarefa precisa ter no mínimo 3 caracteres.');
        return;
    }

    //Adicionando a tarefa no array de tarefas
    tarefas.push({
        titulo: tituloDaTarefa,
        feito: false
    });


    //Adicionando a tarefa no HTML
    const li = document.createElement('li');
    
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.addEventListener('change', (event) => {
        const liToToggle = (event.target as HTMLElement).parentElement

        const spanToToggle = liToToggle?.querySelector('span')

        const done = (event.target  as HTMLInputElement).checked
        if (done) {
            spanToToggle!.style.textDecoration = 'line-through';
        }else {
            spanToToggle!.style.textDecoration = 'none';
        }

        tarefas =tarefas.map(t => {
            if (t.titulo === spanToToggle?.textContent) {
                return{
                titulo: t.titulo,
                feito: !t.feito
            }
        }
        return t
        })
    })

    const span = document.createElement('span');
    span.textContent = tituloDaTarefa;
    
    const button = document.createElement('button');
    button.textContent = "-";
    button.addEventListener('click', (evento: MouseEvent) => {
        if (evento.target) {
            const liRemover = (evento.target as HTMLElement).parentElement;
    
            const tituloRemover = liRemover?.querySelector('span')?.textContent;
    
            tarefas = tarefas.filter(t => t.titulo !== tituloRemover);
    
            listaDeTarefas?.removeChild(liRemover!);
        }
    })

    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);

    listaDeTarefas?.appendChild(li);

    (document.querySelector('#tarefa') as HTMLInputElement).value = '';
    
});

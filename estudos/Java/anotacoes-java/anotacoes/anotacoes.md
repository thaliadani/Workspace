# Ambiente de Desenvolvimento Java

## [Link da aula](https://web.dio.me/course/ambiente-de-desenvolvimento-java/learning/21a69c4a-f23d-47b8-982b-582eba75d4f5?back=/track/potencia-tech-powered-ifood-java-beginners&tab=undefined&moduleId=undefined "Ambiente de Desenvolvimento Java")

## Instalações

- ### [JDK (Essencial)](https://www.oracle.com/br/java/technologies/javase/jdk11-archive-downloads.html "JDK")


- ### [VSCode](https://code.visualstudio.com/ "VSCode")
- ### [Eclipse](https://www.eclipse.org/downloads/ "Eclipse")
- ### [IntelliJ](https://www.jetbrains.com/idea/download/#section=windows"IntelliJ")

# Aprendendo a Sintaxe Java

## [Link da aula](https://web.dio.me/course/aprendendo-a-sintaxe-java/learning/564ed099-1bee-4481-9c2f-cd9b427b6331?back=/track/potencia-tech-powered-ifood-java-beginners&tab=path&moduleId=undefined "Aprendendo a Sintaxe Java")
 
 - ## Todas as classes começarão com letra maiúscula e a palavra complementar também
 
 - ## void : vai executar mas não vai retornar nada
 
# Anatomia das Classes
 
## Declarando variáveis e métodos

### Declarar uma variável em Java segue sempre a seguinte estrutura:

### Tipo NomeBemDefinido = Atribuição (opcional em alguns casos, sedo que se não for atribuído o  valor é 0). Exemplos:
 
     int idade = 23;
     int anoFabricacao = 2022;
     double altura = 1.62;
     boolean verdadeira = false;
     Dog spike;
 
## Identação 

## Escrever o código de forma hierárquica, facilitando a visualização e o entendimento do programa. Exemplo:

    public class BoletimEstudantil {
       public static void main(String[] args){
          int mediaFinal = 7;
             if(mediaFinal<6)
                 System.out.println("REPROVADO");
               else if(mediaFinal==6)
                 System.out.println("PROVA MINERVA");
               else 
                 System.out.println("APROVADO");
      }
     
    }

 
## Organizando Arquivos
 
 - ### com : Comercial
 - ### edu : Educação
 - ### org : organização
 - ### opensource : opensource 
 
 ## Exemplos:
 ### com.pimenta.modelo
 ### edu.thalia.primeirasemana
 
 
 ## Java Beans
 
 ## Formas de escrita universal para as classes, atributos, métodos e pacotes. 
 
 - ### Uma variável deve ser clara, sem abreviações ou definição sem sentido;
 
 - ### Uma variável é sempre no singular, ***exceto quando se referir a um array ou coleção***;
 
 - ### Defina um idioma único para suas variáveis. Se você for declara as variáveis em inglês,defina todas em inglês.
 
 ### Não recomendado
 
    double salMedio = 1500.23;
    String emails = "aluno@escola.com";
    String myName= "JOSEPH";

### Recomendado

    double salarioMedio = 1500.23;
    String email = "aluno@escola.com";
    String [] emails = {"aluno@escola.com","professor@escola.com"};
    String meuNome= "JOSEPH";
 
 # Tipos e Variáveis
 
 ![](2011-06-15-java-tipos-primitivos-01.png)

- ## O ponto nos números em java significa vírgula. Exemplo: _double_ salarioMinimo = 2.500;

- ## O ***float***  no final do número precisa  colocar F, pode ser maiúsculo ou minusculo. Exemplo: float pi = 3.14F;

- ## O ***long***  no final do número precisa  colocar L, pode ser maiúsculo ou minusculo. Exemplo: long cpf = 99765432109L;

- ## O ***final*** no inicio da variável e sendo a convenção de nome em caixa alta faz com que nunca altera o valor. Exemplo: final _double_ VALOR_DE_PI = 3.14;


# String em Java

## Como criar uma String

### Para o compilador, qualquer texto entre aspas duplas é uma String. Por esse motivo a criação de um objeto desse tipo não requer a utilização do operador new. Assim, uma String é criada de forma semelhante a um tipo primitivo, utilizando-se a sintaxe [tipo] [nome] = [valor], apesar de se tratar de um tipo por referência - um nome para um objeto em memória.

    1 String texto = "Qualquer texto entre aspas é uma String";

### Também não utilizamos o operador new porque ao fazê-lo forçamos a criação de uma nova String, anulando um recurso de otimização da linguagem que evita que o mesmo texto exista mais de uma vez na memória.

    2 String texto = new String("Qualquer texto entre aspas é uma String");

### Toda a vez que o código acima for executado uma nova String será criada contendo o texto "Qualquer texto entre aspas é uma String". Caso o Código 2 esteja dentro de um loop for repetido por mil vezes, mil objetos serão criados. Contudo, se o Código 1 estiver dentro de um loop for repetido por mil vezes, apenas um objeto será criado na primeira repetição e reutilizado em todas as demais. Lembre-se, para o Java qualquer texto entre aspas duplas é uma instância da classe String. A prova disso é que podemos escrever um texto entre aspas e invocar a partir dele um método qualquer da classe String.

     "Qualquer texto entre aspas é uma String".length();

### Note acima que o texto não foi atribuído a nenhuma variável, mas ainda assim é um objeto plenamente funcional para o compilador, a partir do qual podemos invocar quaisquer métodos da classe String.

## O valor especial null

### É possível declarar uma variável como sendo do tipo String sem inicializá-la com um valor.

       String texto;

### Nesse caso, se a variável texto for declarada dentro de uma classe, como membro, o valor padrão null será atribuído a ela.

     1    class Pessoa {
     2          String nome;
     3    }
     4
     5    class PessoaTeste {
     6      
     7          public static void main(String[] args) {
     8          Pessoa p = new Pessoa();
     9          System.out.println(p.nome);     
    10       }
    11    }    

### Quando a instância da classe Pessoa é criada na Linha 8, o valor padrão null é atribuído a variável nome e por esse motivo o método println exibirá o texto null no console, ao ser invocado na Linha 9.

### Caso a variável seja declarada dentro de um método, como variável local, um erro de compilação acontecerá se desejarmos utilizá-la, porque nenhuma variável local pode ser utilizada sem ter sido iniciada. Isso também vale para parâmetros de métodos.

     1    class PessoaTeste {
     2   
     3          public static void main(String[] args) { 
     4          String nome;
     5          System.out.println(nome);
     6       }
     7    }

### Quando a variável nome for utilizada na Linha 5 ocorrerá um erro de compilação informando que a variável nome foi apenas declarada, mas não foi iniciada com nenhum valor.

## Testando igualdade entre Strings

### A comparação entre Strings utilizando o operador de igualdade (==) retornará true se as duas referências apontarem para o mesmo objeto na memória.

### Por exemplo, no código abaixo o texto "Nome e apelido são iguais" será impresso apenas porque nome e apelido apontam para o mesmo objeto criado quando o compilador encontra o texto "Arthur".

    1    String nome = "Arthur";
    2    String apelido = nome;
    3
    4    if(nome == apelido) {
    5       System.out.println("Nome e apelido são iguais");
    6    }   

### O mesmo acontece no código abaixo, no qual temos duas vezes a ocorrência do literal "Arthur", os quais a JVM tratará como sendo o mesmo objeto. Uma vez que nome e apelido apontam para o mesmo objeto, a expressão lógica nome == apelido será avaliada como true.

    1    String nome = "Arthur";
    2    String apelido = "Arthur";
    3
    4    if(nome == apelido) {
    5       System.out.println("Nome e apelido são iguais");
    6    } 

### Contudo, no caso abaixo o texto "Nome e apelido são iguais" não será impresso, visto que nome e apelido apontam para objetos diferentes, sendo o primeiro criado com o comando new String("Arthur") e o segundo com o literal "Arthur". Lembre-se, o operador new força a criação de um novo objeto.

    1    String nome = new String("Arthur");
    2    String apelido = "Arthur";
    3
    4    if (nome == apelido) {
    5        System.out.println("Nome e apelido são iguais");
    6    }   

### Nesse caso, se invertêssemos as linhas 1 e 2 o efeito seria o mesmo, porque new sempre força a criação de um novo objeto.

### Na maior parte das vezes em que estivermos comparando dois textos estaremos interessados em saber se seus caracteres são iguais e não se estão armazenados no mesmo espaço em memória. Nesse caso devemos utilizar algum método de comparação da classe String e ela possui vários. O primeiro que veremos aqui se chama equals.

## Equals

### Equals é um método da classe Object utilizado para testar a relação de igualdade entre dois objetos. Esse método está presente em todas as classes, porque todas elas derivam de Object. A forma como essa comparação será feita pode ser determinada por quem está escrevendo a classe e no caso de String. 

    String nome1 = "Carlos";
    String nome2 = "Carla";
    
    if (nome1.equals(nome2)) {
        System.out.println("Os nomes são iguais!");
    } else {
        System.out.println("Os nomes são diferentes!");
    }

### Nesse caso a mensagem "Os nomes são diferentes!" será impressa, uma vez que nome1 contém uma sequencia de caracteres diferente de nome2.

### equalsIgnoreCase 

### Esse método ignora a distinção entre letras maiúsculas e minúsculas nas duas strings comparadas.

    String nome1 = "Carlos";
    String nome2 = "carlos";
    
    if(nome1.equalsIgnoreCase(nome2)) {
        System.out.println("Os nomes são iguais!");
    }

### Nesse novo exemplo os nomes são iguais, então o método equalsIgnoreCase retornará true.


### compareTo

### Esse método pode retornar 0 se as strings forem iguais, um número negativo se a string que invoca o compareTo for menor que a string que é passada como um argumento e um número positivo se a string que invoca o compareTo for maior que a string que é passada como argumento.

    String nome1 = "Carlos";
    String nome2 = "Carla";
 
    System.out.println("nome2.compareTo(nome1) = "+nome2.compareTo(nome1));
    System.out.println("nome1.compareTo(nome2) = "+nome1.compareTo(nome2));

### Neste caso, compareTo vai nos dar um número negativo no primeiro caso, porque Carla é menor que Carlos, e um número positivo no segundo caso porque Carlos é maior que Carla.

### compareToIgnoreCase

### É uma função que compara textos lexigraficamente, ignorando se as letras são maiúsculas ou minúsculas. No exemplo abaixo fazemos duas comparações, uma utilizando compareTo e a outra usando compareToIgnoreCase para analisarmos as diferenças.

    String texto = "A API de Strings é uma das mais utilizadas na linguagem Java";
    String linguagem = texto.substring(texto.indexOf("Java"), texto.length());
 
    if (linguagem.compareToIgnoreCase("java") == 0) {
        System.out.println("compareToIgnoreCase: Encontrei a linguagem! Ela é " + linguagem);
    }
        
    if(linguagem.compareTo("java") == 0) {
       System.out.println("compareTo: Encontrei a linguagem! Ela é " + linguagem);
    }

### Após a execução desse código apenas a mensagem "compareToIgnoreCase: Encontrei a linguagem! Ela é Java" será impressa, uma vez que para compareTo os textos "JAVA" e "java" são diferentes.

## Principais métodos da classe String

### A partir daqui listaremos os principais métodos da classe String com exemplos comentados. Existem muitos métodos nesta classe e aqui falaremos sobre os mais utilizados. 

### concat

### Existem duas formas de unir duas ou mais sequências de caracteres. A mais comum dentre elas é utilizando o operador de adição.

    String nomeCompleto = nome + sobrenome;

### Uma outra forma de fazer isso é utilizando o método concat. Isso é menos comum, mas ainda é possível.

    String nomeCompleto = nome.concat(sobrenome);

### Note que se o valor de nome for Carlos e sobrenome for Henrique, o resultado do código acima será CarlosHenrique, porque não há espaço entre os dois textos.

### String.valueOf

### valueOf é um método estático da classe String, que não precisa de uma instância para ser invocado. Ele converte um tipo primitivo em um objeto do tipo String.

    public class Testa_Metodo_valueOf {
    public static void main(String[] args) {
    
    double numero = 102939939.939;
    
    boolean booleano = true;
     
    System.out.println("Retorna Valor : " +    String.valueOf(numero));
    System.out.println("Retorna Valor: " + String.valueOf(booleano));
    }
    }

### Length

### Retorna o comprimento do texto em uma String. É impresso o comprimento do texto.

    String nomeCurso = "Java";
  
    System.out.printf("\nTamanho da variável nomeCurso: %d", nomeCurso.length());

### charAt

### Retorna o caractere em uma localização específica em uma String. Esse método possui um parâmetro do tipo inteiro que é usado como índice, retornando a partir dessa posição inserida nesse parâmetro. É importante lembrar que o índice sempre começa a ser contado do número 0 (zero) em diante. Sendo assim a posição do caractere a em Carlos é 1 e não 2, como se poderia deduzir.

### Nesse novo exemplo, a mensagem "O caractere A está na posição 1" será impressa, uma vez que o caractere A está na posição 1 da cadeia de caracteres.

    String nomeCurso = "JAVA";
 
    if(nomeCurso.charAt(1) == ‘A’) {
       System.out.println(“O caractere A está na posição 1”);
    }

### getChars

### Recupera um conjunto de caracteres de uma String. Esse método possui os seguintes parâmetros de entrada:

- ### srcBegin – Índice do primeiro caractere da string a ser copiada.
- ### srcEnd - Índice depois da última string a ser copiada.
- ### dst – O destino do array.
- ### dstBegin – o início do deslocamento no array de destino.

      String nomeCurso = "Curso Java Web";
      //É A DIFERENÇA DO 1º E 2º PARÂMETRO DO MÉTODO getChars
      //SE DIMINUIR OS 2 O RESULTADO TEM QUE SER O MESMO INICIADO NO ARRAY
      char[] numIndice = new char[7];
       
      nomeCurso.getChars(2, 9, numIndice, 0);
      System.out.print("Valores Copiados \n");
 
      for(char caracter : numIndice) {
          System.out.print("["+caracter+"]");
      }
 
      System.out.println("\n\n Abaixo Índice demonstrativo dos valores copiados\n");
 
      int[] b = {0,1,2,3,4,5,6};
      for(int i = 0; i < b.length; i++) {
          System.out.print("["+b[i]+"]");
      }

### startsWith e endsWith

### Os métodos startsWith e endsWith aceitam uma string e um número inteiro como argumentos, retornando um valor booleano que indica se a string inicia ou termina, respectivamente, com o texto informado a partir da posição dada.

    String[] nomes = {"iniciado", "iniciando", "finalizado", "finalizando"};
 
    for (String recebeNomes : nomes) {
         if (recebeNomes.startsWith("in"))
             System.out.printf("\"%s\" inicia com \"in\" \n", recebeNomes);
    }
 
    System.out.println();
 
    for (String recebeNomes : nomes) {
         if (recebeNomes.startsWith("ici", 2))
             System.out.printf("\"%s\" inicia com \"ici\" na posição 2 \n", recebeNomes);
    }
 
    System.out.println();
 
    for (String recebeNomes : nomes) {
         if (recebeNomes.endsWith("ado"))
             System.out.printf("\"%s\" termina com \"ado\" \n", recebeNomes);
    }

### indexOf e lastIndexOf

### Permitem a localização de caracteres e substrings especificados em strings.

### indexOf

### Localiza a primeira ocorrência de um caractere em uma string. Se o método localizar o caractere, é retornado o índice do caractere na String, caso contrário retorna -1. Existem duas versões do indexOf que procuram caracteres em uma String.

- ### 1ª versão – aceita um inteiro que é conhecido como o número do índice na String.

- ### 2ª versão – aceita dois argumentos inteiros – o caractere e o índice inicial em que a pesquisa da String deve iniciar.

### lastIndexOf

### Localiza a última ocorrência de um caractere em uma string. O método procura do fim da string em direção ao começo, se encontrar o caractere é retornado o seu índice na string, caso contrário retorna -1. Existem duas versões do lastIndexOf que pesquisam por caracteres em uma string.

- ### 1ª versão – utiliza um inteiro do caractere.
- ### 2ª versão – aceita 2 argumentos – um inteiro de caractere e o índice a partir do qual iniciar a pesquisa de trás para frente.

      String letras = "abcadefghijklmcopqrsdeftuvz";
      //TESTA indexOf PARA LOCALIZAR UM CARACTERE EM UM STRING
      System.out.printf("Último 'c' está localizado no index %d\n", letras.indexOf('c'));
      System.out.printf("Último 'a' está localizado no index %d \n", letras.indexOf('a', 1));  
 
      //-1 NÃO EXISTE
      System.out.printf("'$' está localizado no index %d\n\n", letras.indexOf('$'));
 
      //TESTA lastIndexOf PARA LOCALIZAR UM CARACTERE EM UMA STRING
      System.out.printf("Último 'c' está localizado no index %d\n", letras.lastIndexOf('c'));
      System.out.printf("Último 'a' está localizado no index %d\n", letras.lastIndexOf('a', 5));
      System.out.printf("Último '$' está localizado no index %d\n", letras.lastIndexOf('$'));
 
      //TESTA indexOf PARA LOCALIZAR UMA SUBSTRING EM UMA STRING
      System.out.printf("\"def\" está localizado no index %d\n", letras.indexOf("def"));
       
      //2 argumento string e outro o ponto inicial que começará a pesquisa
      System.out.printf("\"def\" está localizado no index %d\n", letras.indexOf("def", 7));
      System.out.printf("\"hello\" está localizado no index %d\n\n", letras.indexOf("hello"));

### substring

### Permite extrair substrings de strings e fornece 2 métodos substring para permitir que um novo objeto seja criado copiando parte de um objeto string existente. Cada método retorna um novo objeto desse tipo. Existem duas versões desse método que são:

- ### 1ª versão – recebe um argumento do tipo inteiro, que especifica a partir de que caractere a cópia deve começar. A substring retornada contém uma cópia dos caracteres desde esse índice até o último caractere na string.

- ### 2ª versão - recebe dois argumentos do tipo inteiro. A String retornada será composta pelo o primeiro argumento e se estende até o caractere anterior ao segundo argumento. Portanto, o comprimento da String é "argumento_2 - argumento_1". Em outras palavras, você pode dizer que o primeiro argumento é inclusivo e o segundo argumento é exclusivo

      String nome = "José Silveira";
      System.out.println("String : " + nome);
 
      String substring = nome.substring(5);
      System.out.println("String depois da 3º index: " + "["+substring+"]");
 
      substring = nome.substring(1, 6);
      System.out.println("Substring (1,6): " + "["+substring+"]");


### replace

### Retorna um novo objeto contendo a string original com um trecho especificado substituído por outra expressão indicada. Esse método deixa a string original inalterada. A versão sobrecarregada do método replace permite substituir substrings em vez de caracteres individuais.

    String nome = "mesquita";
    String nomeAlterado = nome.replace('e', 'o');
    System.out.println(nomeAlterado);

### toUpperCase

### Retorna uma nova string com o conteúdo da original convertido para letras maiúsculas, mantendo a original inalterada.

### toLowerCase

### De forma semelhante ao anterior, o toLowerCase retorna uma cópia de uma string com todas as letras convertidas para minúsculo, mantendo a original inalterada.

    String nomeA = "joaquina";
    String nomeB = "Paulo";
 
    System.out.println(nomeA.toUpperCase());
    System.out.println(nomeB.toLowerCase());

### trim

### Gera um novo objeto string, removendo todos os caracteres de espaço em branco que aparecem no início ou no fim da string em que o método opera. O método retorna um novo objeto string contendo a string sem espaço em branco inicial ou final. A string original permanece inalterada.

### toCharArray

### Cria um novo array de caracteres que contém uma cópia dos caracteres da variável apontada.

    String s1 = "olá";
    String s2 = "TCHAU";
    String s3 = " espaços ";
 
    System.out.println("s1 = "+ s1 + "\n" + "s2 = "+ s2 + "\n" + "s3 = "+s3);
 
    //MÉTODO REPLACE
    System.out.printf("Replace 'l' por 'L' no s1: %s\n\n", s1.replace('l', 'L'));
 
    //MÉTODO UPPER E LOWERCASE
    System.out.printf("s1.toUpperCase() = %s\n", s1.toUpperCase());
    System.out.printf("s2.toUpperCase() = %s\n\n", s2.toLowerCase());
 
    //MÉTODO TRIM - REMOVE OS ESPAÇOS
    System.out.printf("s3 depois do trim = \"%s\"\n\n", s3.trim());
 
    //CONVERTEU O olá PARA CHAR
    char[] charArray = s1.toCharArray();
    System.out.printf("s1 como um caracter array = ");
 
    for(char caracter : charArray) {
        System.out.print(caracter);

## Fonte: https://www.devmedia.com.br/string-em-java-entendendo-e-utilizando-essa-classe/25503


# Operadores

- ### == : Igual
- ### != : Diferente
- ### < : Menor
- ### > : Maior
- ### <= : Menor Igual
- ### >= : Maior Igual

## Classificação dos operadores

## Atribuição

### O operador de atribuição é utilizado para definir o valor inicial ou sobrescrever o valor de uma variável.

## Aritméticos

- ### + : Adição
- ### - : Subtração
- ### * : Multiplicação
- ### / : Divisão
- ### % : Módulo

### ***ATENÇÃO!*** O operador de adição, quando utilizados em variáveis do tipo texto realizará "concatenação de textos", pegar uma palavra e juntar com outra. Exemplo:

    String nomeCompleto = "LINGUAGEM" + "JAVA"
    
    
    String concatenacao = "?";
    
    concatenacao = 1+1+1+"1";    Resultado: 31
    
    concatenacao = 1+"1"+1+1;    Resultado: 1111
    
    concatenacao = 1+"1"+1+"1";  Resultado: 1111
    
    concatenacao = "1"+1+1+1;    Resultado: 1111
    
    concatenacao = "1"+(1+1+1);  Resultado: 13
   

## Unários

### Esses operadores são aplicados com um outro operador aritmético. Eles realizam alguns trabalhos básicos como incrementar, decrementar, inverter valores numéricos e booleanos.

- ### (+) Operador unário de valor positivo – números são positivos sem esse operador explicitamente;

- ### (-) Operador unário de valor negativo – nega um número ou expressão aritmética;

- ### (++) Operador unário de incremento de valor – incrementa o valor em 1 unidade;
- ### (--) Operador unário de decremento de valor – decrementa o valor em 1 unidade;

- ### (!) Operador unário lógico de negação – nega o valor de uma expressão boolean.

### Exemplos abaixo: 

    //classe Operadores.java
    int numero = 5;
	 	
    //Imprimindo o numero negativo
    System.out.println(- numero);

    //incrementando numero em mais 1 numero, imprime 6
    numero ++;
    System.out.println(numero);
        
    //incrementando numero em mais 1 numero, imprime 7
    System.out.println(numero ++);// ops algo de errado não está certo

    System.out.println(numero);// agora sim, numero virou 7

    //ordem de precedencia conta aqui
    System.out.println(++ numero);

    boolean verdadeiro = true;

    System.out.println("Inverteu " + !verdadeiro);
    
   ## Ternário

### O operador de condição ternária é uma forma resumida para definir uma condição e escolher por um dentre dois valores. Você deve pensar numa condição ternária, como se fosse uma condição IF normal, porém, de uma forma em que toda a sua estrutura estará escrita numa única linha.

### O operador ternário é representado pelos símbolos "?" e ":"  utilizados na seguinte estrutura de sintaxe: 

    <Expressão Condicional> ? <Caso condição seja true> : <Caso condição seja false>

### Exemplos abaixo:

    // classe Operadores.java
    int a, b;
 
    a = 5;
    b = 6;
 
    /* EXEMPLO DE CONDICIONAL UTILIZANDO UMA ESTRUTURA IF/ELSE
    if(a==b)
      resultado = "verdadeiro";
    else
      resultado = "falso";
    */
 
    //MESMA CONDICIONAL, MAS DESSA VEZ, UTILIZANDO O OPERADOR CONDICIONAL TERNÁRIO
    String resultado = (a==b) ? "true" : "false";
 
    System.out.println(valor);
 
   
   
   ### **O operador ternário é aplicado para qualquer tipo de valor.**

## Relacionais

### Os operadores relacionais, avaliam a relação entre duas variáveis ou expressões. Neste caso, mais precisamente, definem se o operando à esquerda é igual, diferente, menor, menor ou igual, maior, maior ou igual ao da direita, retornando um valor booleano como resultado.

- ### == Quando desejamos verificar se uma variável é IGUAL A outra.

- ### != Quando desejamos verificar se uma variável é DIFERENTE da outra.

- ### > Quando desejamos verificar se uma variável é MAIOR QUE a outra.

- ### >= Quando desejamos verificar se uma variável é MAIOR OU IGUAL a outra.

- ### < Quando desejamos verificar se uma variável é MENOR QUE outra.

- ### <= Quando desejamos verificar se uma variável é MENOR OU IGUAL a outra.

      //classe Operadores.java
      int numero1 = 1;
      int numero2 = 2;
 
      if(numero1 > numero2)
	     System.out.print("Numero 1 maior que numero 2");
     
      if(numero1 < numero2)
	     System.out.print("Numero 1 menor que numero 2");
 
      if(numero1 >= numero2)
	     System.out.print("Numero 1 maior ou igual que numero 2");

      if(numero1 <= numero2)
	     System.out.print("Numero 1 menor ou igual que numero 2");
 
      if(numero1 != numero2)
	     System.out.print("Numero 1 é diferente de numero 2");jav

### Comparações avançadas

### Quando se refere a comparação de conteúdos na linguagem, devemos ter um certo domínio, de como o Java trata o armazenamento destes valores na memória.

### **Quando estiver mais familiarizado com a linguagem, recomendamos se aprofundar no conceito de espaço em memória Stack versus Heap.**

### Vamos a alguns exemplos para ilustrar:

### Valor e referência: Precisamos entender que em Java tudo é objeto, logo, objetos diferentes podem ter as mesmas características, mas lembrando, são objetos diferentes.
      
       // ComparacaoAvancada.java
       public static void main(String[] args) {

        String nome1 = "JAVA";
        String nome2 = "JAVA";
        
        System.out.println(nome1 == nome2); //true

        String nome3 = new String("JAVA");
        
        System.out.println(nome1 == nome3); //false

        String nome4 = nome3;

        System.out.println(nome3 == nome4); //true
        
        //equals na parada
        System.out.println(nome1.equals(nome2)); //??
        System.out.println(nome2.equals(nome3)); //??
        System.out.println(nome3.equals(nome4)); //??

    }
### == versus equals: Existe uma relevância forte, em realizar comparações com == e equals na qual precisamos ter uma compreensão de quais as regras seguidas pela linguagem , exemplo:

    // ComparacaoAvancada.java
     public static void main(String[] args) {
             
        int numero1 = 130;
        int numero2 = 130;
        System.out.println(numero1 == numero2); //true
        
        Integer numero1 = 130;
        Integer numero2 = 130;

        System.out.println(numero1 == numero2); //false
        
        // A razão pela qual o resultado é false, é devido o Java tratar os valores
        // Como objetos a partir de agora.
        // Qual a solução ?
        // Quando queremos comparar objetos, usamos o método equals
        
         System.out.println(numero1.equals(numero2)); 
    }

## Lógicos

### Os operadores lógicos, representam o recurso que nos permite criar expressões lógicas maiores, a partir da junção de duas ou mais expressões. 
- ### &&  Operador Lógico "E"
- ### || Operador Lógico "OU"

      // Operadores.java
      boolean condicao1=true;
 
      boolean condicao2=false;
 
      /* Aqui estamos utilizando o operador lógico E para fazer a união de duas expressões. 
      É como se estivesse escrito:
        "Se Condicao1 e Condicao2 forem verdadeiras, executar código"
      */
 
      if(condicao1 && condicao2)
	     System.out.print("Os dois valores precisam ser verdadeiros");;
 
      //Se condicao1 OU condicao2 for verdadeira, executar código.
      if(condicao1 || condicao2)
	     System.out.print("Um dos valores precisa ser verdadeiro");

### Expressões lógicas avançadas

### Nós acabamos de aprender que existem os operadores lógicos "&"(E)  e "||" (OU), mas por que no exemplo acima, foram ilustradas as condições:
  
### if (condicao1 && condicao2)  e  if(condicao1 || condicao2) ?

### **A duplicidade nos operadores lógicos é um recurso conhecido como Operador Abreviado, isso quer dizer que, se a condição1 atender aos critérios, não será necessário validar a condição2.**

    // ComparacaoAvancada.java
    int numero1 = 1;
    int numero2 = 1;
 
    if(numero1== 2 & numero2 ++ == 2 )
       System.out.println("As 2 condições são verdadeiras");
 
    System.out.println("O numero 1 agora é " + numero1);
    System.out.println("O numero 2 agora é " + numero2);
 
    // Vamos mudar a linha 5 do código acima para: if(numero1== 2 && numero2 ++ == 2 )

### **O mesmo acontece com o operador | e || ,  considerando que operador, agora representa que se uma das alternativas for verdadeira, a outra nem precisa ser avaliada.**

# Métodos

### Todas as ações das aplicações são consideradas métodos.

### Uma classe é definida por atributos e métodos. Já vimos que atributos são, em sua grande maioria, variáveis de diferentes tipos e valores. Os métodos, por sua vez, correspondem a funções ou sub-rotinas disponíveis dentro de nossas classes.

## Critério de nomeação de Métodos

### Esses critérios não são obrigatórios, mas é recomendável que sejam seguidos, pois essas convenções facilitam a vida dos programadores ao trabalharem em códigos de forma colaborativa. Ao seguir estas convenções, tornamos o código mais legível para nós e também para outras pessoas. Para métodos, os critérios são: 

- ### Deve ser nomeado como verbo;

- ### Seguir o padrão camelCase (Todas as letras minúsculas com a exceção da primeira letra da segunda palavra).

### Exemplos sugeridos para nomenclatura de métodos:

    somar(int n1, int n2){}
    
    abrirConexao(){}
    
    concluirProcessamento() {}
    
    findById(int id){} // não se assuste, você verá muito método em inglês em sua jornada
    
    ​calcularImprimir(){} // há algo de errado neste método, ele deveria ter uma única finalidade
​         

### ***ATENÇÃO! Não existe em Java o conceito de métodos globais. Todos os métodos devem SEMPRE ser definidos dentro de uma classe.***

## Critério de definição de métodos

### Mas, como sabemos a melhor forma, de definir os métodos das nossas classes? Para chegar à essa conclusão, somos auxiliados por uma convenção estrutural para todos os métodos. Essa convenção é determinada pelos aspectos abaixo:

1. ### **Qual a proposta principal do método?** Você deve se perguntar constantemente até compreender a real finalidade do mesmo.

2. ### **Qual o tipo de retorno esperado após executar o método?** Você deve analisar se o método será responsável por retornar algum valor ou não.
 
### ***Caso o método não retorne nenhum valor, ele será representado pela palavra-chave void.***

1. ### **Quais os parâmetros serão necessários para execução do método?** Os métodos às vezes precisarão de argumentos como critérios para a execução.

2. ### **O método possui o risco de apresentar alguma exceção?** Exceções são comuns na execução de métodos, as vezes é necessário prever e tratar a possível existência de uma exceção.

3. ### **Qual a visibilidade do método?** Avaliar se será necessário que o método seja visível a toda aplicação, somente em pacotes, através de herança ou somente a nível a própria classe.

### Abaixo, temos um exemplo de uma classe com dois métodos e suas respectivas considerações:
    
    public class MyClass {
	
	public double somar(int num1, int num2){
		//LOGICA - FINALIDADE DO MÉTODO
		return ... ;
	}
	
	public void imprimir(String texto){
		//LOGICA - FINALIDADE DO MÉTODO
		//AQUI NÃO PRECISA DO RETURN
		//POIS NÃO SERÁ RETORNADO NENHUM RESULTADO
	}
	// throws Exception : indica que o método ao ser utilizado
	// poderá gerar uma exceção
	public double dividir(int dividendo, int divisor) throws Exception{}
	
	// este método não pode ser visto por outras classes no projeto
	private void metodoPrivado(){}
	
	//alguns equívocos estruturais
	public void validar(){
		//este método deveria retornar algum valor
		//no caso boolean (true ou false)
	}
	public void calcularEnviar(){
		//um método deve representar uma única responsabilidade
	}
	public void gravarCliente(String nome, String cpf, Integer telefone, ....){
		//este método tem a finalidade de gravar
		//informações de um cliente, por que não criar
		//um objeto cliente e passar como parâmetro ?
		//veja abaixo
	}
	public void gravarCliente(Cliente cliente){}
	//ou
	public void gravar(Cliente cliente){}
    }
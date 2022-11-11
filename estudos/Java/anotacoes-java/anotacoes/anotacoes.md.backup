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

- ## O **float**  no final do número precisa  colocar F, pode ser maiúsculo ou minusculo. Exemplo: float pi = 3.14F;

- ## O **long**  no final do número precisa  colocar L, pode ser maiúsculo ou minusculo. Exemplo: long cpf = 99765432109L;

- ## O **final** no inicio da variável e sendo a convenção de nome em caixa alta faz com que nunca altera o valor. Exemplo: final *double* VALOR_DE_PI = 3.14;


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

### **ATENÇÃO!** Não existe em Java o conceito de métodos globais. Todos os métodos devem SEMPRE ser definidos dentro de uma classe.***

## Critério de definição de métodos

### Mas, como sabemos a melhor forma, de definir os métodos das nossas classes? Para chegar à essa conclusão, somos auxiliados por uma convenção estrutural para todos os métodos. Essa convenção é determinada pelos aspectos abaixo:

1. ### **Qual a proposta principal do método?** Você deve se perguntar constantemente até compreender a real finalidade do mesmo.

2. ### **Qual o tipo de retorno esperado após executar o método?** Você deve analisar se o método será responsável por retornar algum valor ou não.
 
### **Caso o método não retorne nenhum valor, ele será representado pela palavra-chave void.**

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
   

# Escopo

### O escopo pode ser entendido como,o ambiente onde uma variável pode ser acessada. Em Java, o escopo de variáveis vai de acordo com o bloco onde ela foi declarada. 

### A variável é criada no primeiro acesso à ela, se tornando inacessível após o interpretador sair do bloco de execução, ao qual ela pertence. Portanto, esta variável não pode ser lida ou manipulada por rotinas e códigos que estão fora do seu bloco de declaração, ou seja, fora do escopo da variável. 

### Em uma Classe, podemos visualizar a diferença de escopos. Os atributos (variáveis) são declarados no corpo principal da Classe, sendo portanto, acessíveis por todos os métodos. 

### Caso você declare uma variável DENTRO DE UM MÉTODO, o escopo dessa variável está limitado apenas ao corpo desse método, ou seja, dentro das chaves que limitam o método.

### Uma parte fundamental na elaboração de algoritmos simples ou complexos é determinar a  localização do código em questão. Sem um domínio sobre escopo de códigos, seu projeto tende a conter falhas estruturais e comprometer a proposta principal da aplicação. 

    public class Conta {
	//variavel da classe conta
	double saldo=10.0;
	
	public void sacar(Double valor) {
		//variavel local de método
		double novoSaldo = saldo - valor;
	}
	public void imprimirSaldo(){
		//disponível em toda classe
		System.out.println(saldo);
		//somente o método sacar conhece esta variavel
		System.out.println(novoSaldo);
	
	}
	public double calcularDividaExponencial(){
		//variável local de método
		double valorParcela = 50.0;
		double valorMontante = 0.0; // começando a variável com valor zero
		for(int x=1; x<=5; x++) {//x variável de escopo de fluxo
			//esta variável será reiniciada a cada execução for
			double valorCalculado = valorParcela * x;
			valorMontante = valorMontante + valorCalculado;
		}
		//escopo de fluxo
		//x e valorCalculado nunca estarão disponíveis fora do for
		
		return valorMontante;
	  }
    }   
  
# Palavras reservadas

### Palavras reservadas, são identificadores de uma linguagem que já possuem uma finalidade específica, portanto, não podem ser utilizados para nomear variáveis, classes, métodos ou atributos. 

### A linguagem Java possui 52 palavras reservadas. Todas essas palavras são classificadas em grupos e escritas com letra minúscula, sendo identificadas com uma cor especial pela maioria das IDE's. Abaixo temos a lista de palavras agrupadas por suas finalidades.

## Controle de pacotes

- ### **import:** importa pacotes ou classes para dentro do código;

- ### **package:** especifica a que pacote, todas as classes de um arquivo pertencem.

### Modificadores de acesso

- ### **public:** acesso de qualquer classe;
​
- ### **private:** acesso apenas dentro da classe;
​
- ### **protected:** acesso por classes no mesmo pacote e subclasses.
​
## Primitivos

- ### **boolean:** um valor indicando verdadeiro ou falso;
​
- ### **byte:** um inteiro de 8 bits (signed);
​
- ### **char:** um character unicode (16-bit unsigned);
​
- ### **double:** um número de ponto flutuante de 64 bits (signed);
​
- ### **float:** um número de ponto flutuante de 32 bits (signed);
​
- ### **int:** um inteiro de 32 bits (signed);
​
- ### **long:** um inteiro de 64 bits (signed);
​
- ### **short:** um inteiro de 32 bits (signed);                                                        
​
- ### **void:** indica que o método não tem retorno de valor.

## Modificadores de classes, variáveis ou métodos

- ### **abstract:** classe que não pode ser instanciada ou método que precisa ser implementado, por uma subclasse não abstrata;
​
- ### **class:** especifica uma classe;
​
- ### **extends:** indica a superclasse que a subclasse está estendendo;
​
- ### **final:** impossibilita que uma classe seja estendida, que um método seja sobrescrito ou que uma variável seja reinicializada;
​
- ### **implements:** indica as interfaces que uma classe irá implementar;
​
- ### **interface:** especifica uma interface;
​
- ### *native:* indica que um método está escrito em uma linguagem dependente de plataforma, como o C;
​
- ### **new:** instancia um novo objeto, chamando seu construtor;
​
- ### **static:** faz um método ou variável pertencer à classe ao invés de às instâncias;
​
- ### *strictfp:* usado em frente a um método ou classe para indicar que os números de ponto flutuante seguirão as regras de ponto flutuante, em todas as expressões;
​
- ### **synchronized:** indica que um método só pode ser acessado por uma thread de cada vez
​
- ### **transient:** impede a serialização de campos;
​
- ### *volatile:* indica que uma variável pode ser alterada durante o uso de threads.;

## Controle de fluxo dentro de um bloco de código

- ### **break:** sai do bloco de código em que ele está;
​
- ### **case:** executa um bloco de código dependendo do teste do switch;
​
- ### **continue:** pula a execução do código que viria, após essa linha e vai para a próxima passagem do loop;
​
- ### **default:** executa esse bloco de código caso nenhum dos teste de switch-case seja verdadeiro;
​
- ### **do:** executa um bloco de código uma vez, e então realiza um teste em conjunto com o while para determinar se o bloco deverá ser executado novamente;
​
- ### **else:** executa um bloco de código alternativo caso o teste "if" seja falso;
​
- ### **for:** usado para realizar um loop condicional de um bloco de código;
​
- ### **if:** usado para realizar um teste lógico de verdadeiro ou falso;
​
- ### **instanceof:** determina se um objeto é uma instância de determinada classe, superclasse ou interface;
​
- ### **return:** retorna um método sem executar qualquer código, que venha depois desta linha (também pode retornar uma variável);
​
- ### **switch:** indica a variável a ser comparada nas expressões case;
​
- ### **while:** executa um bloco de código repetidamente enquanto a condição for verdadeira.

## Tratamento de erros

- ### *assert:* testa uma expressão condicional, para verificar uma suposição do programador;
​
- ### **catch:** declara o bloco de código usado para tratar uma exceção;
​
- ### **finally:** bloco de código, após um try-catch, que é executado independentemente do fluxo de programa seguido ao lidar com uma exceção;
​
- ### **throw:** usado para passar uma exceção para o método que o chamou;
​
- ### **throws:** indica que um método pode passar uma exceção para o método que o chamou;
​
- ### **try:** bloco de código que tentará ser executado, mas que pode causar uma exceção.

## Variáveis de referência

- ### **super:** refere-se a superclasse imediata;
​
- ### **this:** refere-se a instância atual do objeto.
​
## Palavras reservadas não utilizadas

- ### **const:** Não utilize para declarar constantes; use public static final;
​
- ### **goto:** não implementada na linguagem Java, por ser considerada prejudicial.

## Literais reservados

### De acordo com a Java Language Specification, null, true e false são tecnicamente chamados de valores literais, e não keywords. Se você tentar criar algum identificador com estes valores, você também terá um erro de compilação.

### Escopo de uso

      Uso                  Palavras                          Observação
    _____________________________________________________________________________
  
    Arquivo        package, import, static.
    _____________________________________________________________________________
    Classe         public ou protected ou            private (em caso de classe
                   private + final ou abstract       interna), final ou abstract 
                   + extends ou implements.        
    _____________________________________________________________________________            
    Método         public ou protected ou            void em caso de não ter 
                   private + static ou final         retorno  ou return se houver
                   ou abstract + void e return.
    _____________________________________________________________________________ 
    Atributo       public ou protected ou 
                   private + static ou final + 
                   tipo primitivo.                  


### Palavras "opostas"

### Assim como nas classificações gramaticais da língua portuguesa, existem algumas palavras que são completamente opostas (antônimas) na linguagem Java conforme tabela abaixo:

    Palavra        Palavra                               Explicação
    ____________________________________________________________________________________ 
    package        import             Enquanto package determina o diretório real da  
                                      classe, o import informa de onde será importada     
                                      a classe. Isso porque, podemos ter classes de
                                      mesmo nome.
    ____________________________________________________________________________________                                
    extends        implements         Enquanto extends determina que uma classe estende
                                      outra classe, implements determina que uma classe 
                                      implementa uma interface, porém nunca o contrário.
    ____________________________________________________________________________________ 
    final          abstract           Enquanto final determina fim de alteração de valor 
                                      ou lógica comportamental, abstract em métodos,
                                      exige que sub-classes precisarão definir comporta_
                                      _mento e um método abstrato. NOTA: Se uma classe 
                                      contém um único método abstrato, toda classe 
                                      precisa ser.
    ____________________________________________________________________________________                                 
    throws         throw              Esta é uma das situações mais complicadas, de
                                      compreensão destas duas palavras. Enquanto a  
                                      throws determina que um método pode lançar uma 
                                      exceção, throw é a implementação que dispara a 
                                      exceção. Vamos conhecer mais sobre este conceito 
                                      no assunto Exceções.

# Documentação

### Uma das maiores características da linguagem Java é que, desde suas primeiras versões, tínhamos em nossas mãos, uma documentação rica e detalhada dos recursos da linguagem.

### Conforme site oficial, podemos compreender e explorar, todos os recursos organizados por pacotes e classes bem específicas, sem nem mesmo escrever uma linha de código.

### Hoje, costuma-se afirmar que, para se tornar um desenvolvedor nível avançado, é um requisito imprescindível adquirir a habilidade de compreender, a documentação oficial da linguagem e dos frameworks que são incorporados nos projetos atuais.

### Aqui, temos o link da documentação de uma das principais classes da linguagem Java:

### [Java 7](https://docs.oracle.com/javase/7/docs/api/java/lang/String.html)
         
## Tags
### Mas e quais as informações, que obtemos através de classes documentadas, na linguagem ?    Java Documentation é composto por tags que, representam dados relevantes para a compreensão da proposta de uma classe e os conjuntos de seus métodos e atributos conforme tabela abaixo:

    Tag                     Descrição
    ______________________________________________________________________
    @autor                  Autor / Criador
    ______________________________________________________________________
    @version                Versão do recurso disponibilizado
    ______________________________________________________________________
    @since                  Versão / Data de início da disponibilização do 
                            recurso
    ______________________________________________________________________
    @param                  Descrição dos parâmetros dos métodos criados 
    ______________________________________________________________________
    @return                 Definição do tipo de retorno de um método
    ______________________________________________________________________
    @throws                 Se o método lança alguma exceção

### Abaixo, iremos ilustrar a classe Calculadora com um exemplo de documentação, destacando as tags mais utilizadas:

    /**
    * <h1>Calculadora</h1>
    * A Calculadora realiza operações matemáticas entre números inteiros
    * <p>
    * <b>Note:</b> Leia atentamente a documentação desta classes
    * para desfrutar dos recursos oferecidos pelo autor
    * 
    * @author  Gleyson Sampaio
    * @version 1.0
    * @since   01/01/2022
    */
    public class Calculadora {
    /**
    * Este método é utilizado para somar dois números inteiros
    * @param numeroUm este é o primeiro parâmetro do método
    * @param numeroDois este é o segundo parâmetro do método
    * @return int o resultado deste método é a soma dos dois números.
    */
    public int somar(int numeroUm, int numeroDois) {
        return  numeroUm + numeroDois;
       }
    }

## Tipos de comentários

### One Line

    // Olá, eu sou um comentário em uma única linha

### Mult Line

    /* Olá,
    * Eu sou um comentário
    * que posso ser mais detalhado
    * quando necessário
    */

### Documentation

    /** 
    * Estas duas estrelinhas acima
    * é para identificar que você
    * pretende elaborar um comentário
    * a nível de documentação.
    * Que incrível !!!
    */
  
Um comentário, não possui a finalidade de amenizar um algoritmo não estruturado, conforme as convenções da linguagem. 
  
    /*
    * Este método foi elaborado as pressas
    * por isso eu abrevei o nome das variáveis
    * mas olha, ele tem a finalidade de somar ou  multiplicar
    * dois números
    * /
    public int somaMultiplica (int n, int x, String m){
    int r = 0; // r é igual ao resultado
    if (m == "M"){ // M= multiplicação
        r= n * x;
    }else{
        // se não soma mesmo
        r = n + x
    }
    return r;
    }
 
## Javadoc

### Javadoc é um gerador de documentação criado pela Sun Microsystems , para documentar a API dos programas em Java, a partir do código-fonte. O resultado é expresso em HTML. É constituído, basicamente, por algumas marcações muitos simples, inseridas nos comentários do programa.

### Este sistema, é o padrão de documentação de classes em Java, onde muitas das IDEs desta linguagem irão automaticamente gerar um Javadoc em HTML.

### [Javadoc Wikipedia](https://pt.wikipedia.org/wiki/Javadoc)

### Criando nossa documentação no formato html, para disponibilizar via web.

    // No terminal execute o comando abaixo
  
    javadoc -encoding UTF-8 -docencoding ISO-8859-1  -d ../docs  src/*.java
    
  
# Terminal e Argumentos

### Nem sempre executamos nosso programa Java pela IDE, já pensou, nossos clientes tendo que instalar o Eclipse ou VsCode para rodar o sistema em sua empresa ?

### Com a JVM devidamente configurada, nós podemos criar um executável do nosso programa e disponibilizar o instalador para qualquer sistema operacional.

### No nosso caso, iremos aprender como executar um programa Java via terminal, como MS - DOS ou terminal do VsCode.

### Vamos criar uma classe chamada MinhaClasse.java com o código abaixo:

    public class MinhaClasse {
       public static void main(String[] args) {
           System.out.println("Oi, fui executado pelo Terminal");
       }
    }    
  
### Observe que nosso projeto Java criado por uma IDE, terá uma pasta chamada bin. É nesta pasta que ficarão os arquivos .class, o nosso bytecode.

![](image1.png)

### Mesmo usando uma IDE, nós sempre precisaremos identificar aonde se encontram as classes do nosso projeto, no meu caso está em: C:\estudos\dio-trilha-java-basico\java-terminal.

![](image2.png)

## Terminal

### Vamos ilustrar como executar uma classe, depois de compilada, sem precisar usar a IDE.

1. ### Abra o MS-DOS ou Power Shell;

2. ### Localize o diretório do seu projeto: cd C:\estudos\dio-trilha-java-basico\java-terminal;

3. ### Acesse a pasta bin: cd bin;

4. ### Agora digite o comando:java MinhaClasse (nome da sua classe sem a extensão .class).

![](image3.png)

## Argumentos

### Quando executamos uma classe, que contenha o método main, o mesmo permite que passemos um array [] de argumentos, do tipo String. Logo, podemos após a definição da classe a ser executada, informar estes parâmetros, exemplo:

    java MinhaClasse agumentoUm argumentoDois

### Exemplo:

    public class AboutMe {
       public static void main(String[] args) {
           //os argumentos começam com indice 0
           String nome = args [0];
           String sobrenome = args [1];
           int idade = Integer.valueOf(args[2]); //vamos falar sobre Wrappers
           double altura = Double.valueOf(args[3]);

           System.out.println("Ola, me chamo " + nome + " " + sobrenome);
           System.out.println("Tenho " + idade + " anos ");
           System.out.println("Minha altura é " + altura + "cm ");
       }
    }

### Passando valores aos argumentos pelo VsCode:

![](image4.png)

![](image5.png)

    {
        "version": "0.2.0",
        "configurations": [
            {
                "type": "java",
                "request": "launch",
                "mainClass": "AboutMe",
                "args": ["GLEYSON", "SAMPAIO", "28", "1.58"]
          }
       ]
    }

### Executando o programa agora no terminal:

    cd C:\estudos\dio-trilha-java-basico\java-terminal
    cd bin
 
    java AboutMe GLEYSON SAMPAIO 28 1.58

## Scanner

### Nos exemplos anteriores, percebemos que podemos receber, dados digitados pelo usuário do nosso sistema, porém, tudo precisa estar em uma linha e também é necessário informar os valores nas posições correspondentes. Esta abordagem pode deixar margens de execução, com erro do nosso programa. Para isso, com a finalidade de deixar as nossas entradas de dados mais seguras, agora vamos receber estes dados via Scanner.

### A classe Scanner, permite que o usuário tenha, uma interação mais assertiva com o nosso programa, veja como vamos mudar o nosso programa AboutMe para deixar mais intuitivo aos usuários:

    import java.util.Locale;
    import java.util.Scanner;
 
    public class AboutMe {
       public static void main(String[] args) {
          //criando o objeto scanner
          Scanner scanner = new Scanner(System.in).useLocale(Locale.US);
        
          System.out.println("Digite seu nome");
          String nome = scanner.next();
        
          System.out.println("Digite seu sobrenome");
        String sobrenome = scanner.next();

          System.out.println("Digite sua idade");
          int idade = scanner.nextInt();
        
          System.out.println("Digite sua altura");
          double altura = scanner.nextDouble();

        
          //imprimindo os dados obtidos pelo usuario
          System.out.println("Ola, me chamo " + nome + " " + sobrenome);
          System.out.println("Tenho " + idade + " anos ");
          System.out.println("Minha altura é " + altura + "cm ");
        
        
       }
    }

### [code.visualstudio.com](https://code.visualstudio.com/docs/java/java-debugging)

### [linuxtut.com](https://linuxtut.com/pass-parameters-when-debugging-vscode-java.-note-462e0)
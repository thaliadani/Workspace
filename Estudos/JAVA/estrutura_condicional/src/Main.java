import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println("Digite seu nome: ");
            String nome = scanner.nextLine();

            System.out.println("Digite sua idade:");
            int idade = scanner.nextInt();

            var podeVotar = idade >= 16 ? "pode" : "não pode";

            System.out.printf("Olá %s, você tem %d anos e %s votar.%n", nome, idade, podeVotar);

            System.out.println("Digite sua nota:");
            double nota = scanner.nextDouble();

            if (nota >= 7.0) {
                System.out.println("Aprovado");
            } else if (nota >= 5.0) {
                System.out.println("Recuperação");
            } else {
                System.out.println("Reprovado");
            }

            System.out.println("Digite sua altura:");
            double altura = scanner.nextDouble();

            System.out.println("Digite seu peso:");
            double peso = scanner.nextDouble();

            double imc = peso / (altura * altura);
            System.out.printf("Seu IMC é: %.2f%n", imc);

            if (imc < 18.5) {
                System.out.println("Abaixo do peso");
            } else if (imc < 24.9) {
                System.out.println("Peso normal");
            } else if (imc < 29.9) {
                System.out.println("Sobrepeso");
            } else {
                System.out.println("Obesidade");
            }


            System.out.println("----------------------");

            // switch case

            System.out.println("Digite um número de 1 a 5:");
            int numero = scanner.nextInt();

            switch (numero) {
                case 1 -> System.out.println("Você escolheu o número 1");
                case 2 -> System.out.println("Você escolheu o número 2");
                case 3 -> System.out.println("Você escolheu o número 3");
                case 4 -> System.out.println("Você escolheu o número 4");
                case 5 -> System.out.println("Você escolheu o número 5");
                default -> System.out.println("Número inválido. Por favor, escolha um número de 1 a 5.");
            }


            var message = switch (numero){
                case 1, 6 -> {
                    var greeting =  numero == 1 ? "1" : "6";
                    yield "Você escolheu o número " + greeting + ". Esse é um número especial!";

                }
                case 2 -> "Você escolheu o número 2";
                case 3 -> "Você escolheu o número 3";
                case 4 -> "Você escolheu o número 4";
                case 5 -> "Você escolheu o número 5";
                default -> "Número inválido. Por favor, escolha um número de 1 a 5.";
            };

            System.out.println(message);

            scanner.close();
        }

        // if, else if, else

    }
}
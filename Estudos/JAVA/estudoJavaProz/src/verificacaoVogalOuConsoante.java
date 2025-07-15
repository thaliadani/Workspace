import java.util.Scanner;

public class verificacaoVogalOuConsoante {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.print("Digite uma letra: ");
            char letra = scanner.next().toLowerCase().charAt(0);

            if (Character.isLetter(letra)) {
                switch (letra) {
                    case 'a', 'e', 'i', 'o', 'u' -> System.out.println("A letra '" + letra + "' é uma vogal.");
                    default -> System.out.println("A letra '" + letra + "' é uma consoante.");
                }
            } else {
                System.out.println("O caractere digitado não é uma letra válida.");
            }

            scanner.close();
        }
    }
}

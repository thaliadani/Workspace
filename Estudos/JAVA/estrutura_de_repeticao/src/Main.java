import java.util.Scanner;

@SuppressWarnings("t")
public  class Main {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            var count = 10;

            // for - loop with a condition

            for (int i = 0; i < count; i++) {
                if (i % 2 == 0) {
                    System.out.println("Par: " + i);
                } else {
                    System.out.println("Impar: " + i);
                }
            }

            System.out.println("---------------------------");

            // for - loop with a condition and a break statement

            for (int i = 0; i < count; i++) {
                if (i % 2 == 0) {
                    System.out.println("Par: " + i);
                } else {
                    System.out.println("Impar: " + i);
                }
                if (i == 5) {
                    break; // exit the loop when i is 5
                }
            }

            System.out.println("---------------------------");

            // for - loop with a condition and a continue statement

            for (int i = 0; i < count; i++) {
                if (i % 2 == 0) {
                    System.out.println("Par: " + i);
                    continue; // skip the rest of the loop when i is even
                }
                System.out.println("Impar: " + i);
            }

            System.out.println("---------------------------");

            // while

            int i = 0;
            count = 5;

            while (i < count) {
                if (i % 2 == 0) {
                    System.out.println("Par: " + i);
                } else {
                    System.out.println("Impar: " + i);
                }
                i++;
            }

            System.out.println("---------------------------");

            System.out.print("Digite um nome (ou 'exit' para sair): ");
            String name = scanner.nextLine();

            while (!name.equals("exit")) {
                if (name.equals("exit")) {
                    break; // exit the loop when the user types "exit"
                }
                System.out.println("Você digitou: " + name);
            }

            System.out.println("---------------------------");

            while (true) {
                if (name.equals("exit")) {
                    break; // exit the loop when the user types "exit"
                }
                System.out.println("Você digitou: " + name);
            }

            System.out.println("---------------------------");

            while (args.length > 0) {
                System.out.println("Argumento: " + args[0]);
                break; // exit the loop after printing the first argument
            }

            // do-while loop

            int j = 0;
            count = 5;

            do {
                if (j % 2 == 0) {
                    System.out.println("Par: " + j);
                } else {
                    System.out.println("Impar: " + j);
                }
                j++;
            } while (j < count);

            System.out.println("---------------------------");

            // do-while loop with a condition and a break statement

            do {
                if (j % 2 == 0) {
                    System.out.println("Par: " + j);
                } else {
                    System.out.println("Impar: " + j);
                }
                if (j == 3) {
                    break; // exit the loop when j is 3
                }
                j++;
            } while (j < count);
            
            scanner.close();
        }
    }
}
import java.util.Scanner;

public class MaiorElementoVetor {
    public static void main(String[] args) {

        try (Scanner sc = new Scanner(System.in)) {
            int tamanhoVetor = 5;
            int[] numeros = new int[tamanhoVetor];
            int maior = Integer.MIN_VALUE;
            
            System.out.println("Por favor, digite " + tamanhoVetor + " números:");
            
            for (int i = 0; i < numeros.length; i++) {
                System.out.print("Digite o " + (i + 1) + "º número: "); // Usamos print para o cursor ficar na mesma linha.
                int num = sc.nextInt();
                numeros[i] = num;
            }
            
            // --- Segundo laço: para encontrar o maior elemento ---
            // A sintaxe aqui também foi corrigida para 'int i = 0'.
            for (int i = 0; i < numeros.length; i++) {
                // Compara o número atual do vetor com o valor armazenado em 'maior'.
                if (numeros[i] > maior) {
                    // Se o número atual for maior, ele se torna o novo 'maior'.
                    maior = numeros[i];
                }
            }
            System.out.println("\nO maior número digitado foi: " + maior);
        }
    }
}
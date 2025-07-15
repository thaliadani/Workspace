//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        // Logical Operators

        var number = 10;
        var number2 = 20;

        System.out.println(number == number2);
        System.out.println(number != number2);
        System.out.println(number > number2);
        System.out.println(number < number2);
        System.out.println(number >= number2);
        System.out.println(number <= number2);

        System.out.println(number <= number2 || number == number2);
        System.out.println(number <= number2 && number == number2);


        System.out.println("----------------------");

        // Arithmetic Operators

        var a = 48;
        var b = 20;

        System.out.printf("%s + %s = %s \n", a, b, a + b);
        System.out.printf("%s - %s = %s \n", a, b, a - b);
        System.out.printf("%s * %s = %s \n", a, b, a * b);
        System.out.printf("%s / %s = %s \n", a, b, a / b);
        System.out.printf("Resto da divisão entre %s e %s = %s \n", a, b, a % b);

        System.out.printf("Raiz quadrada de %s é %s \n", a, Math.sqrt(a));
        System.out.printf("Raiz cúbica de %s é %s \n", a, Math.cbrt(a));
        System.out.printf("A potencia de %s é %s \n", a, Math.pow(a, 2));
        System.out.printf("O valor absoluto de %s é %s \n", a, Math.abs(a));
        System.out.printf("O valor máximo entre %s e %s é %s \n", a, b, Math.max(a, b));
        System.out.printf("O valor mínimo entre %s e %s é %s \n", a, b, Math.min(a, b));
        System.out.printf("O valor de %s é %s \n", a, Math.round(a));


        System.out.println("----------------------");

        // Increment and Decrement Operators

        var increment = 10;
        System.out.println(++increment);

        System.out.println(--increment);
        System.out.println(increment--);
        System.out.println(increment);


        System.out.println("----------------------");

        // Bitwise Operators

        var valor1 = 32;
        var binary1 = Integer.toBinaryString(valor1);
        System.out.printf("Primeiro número da operação %s (representação binária %s) \n", valor1, binary1);

        var valor2 = 6;
        var binary2 = Integer.toBinaryString(valor2);
        System.out.printf("Primeiro número da operação %s (representação binária %s) \n", valor2, binary2);

        System.out.printf("%s | %s = %s (representação binária %s) \n", valor1, valor2, (valor1 | valor2), Integer.toBinaryString(valor1 | valor2));

        System.out.printf("%s & %s = %s (representação binária %s) \n", valor1, valor2, (valor1 & valor2), Integer.toBinaryString(valor1 & valor2));

        System.out.printf("%s ^ %s = %s (representação binária %s) \n", valor1, valor2, (valor1 ^ valor2) , Integer.toBinaryString(valor1 ^ valor2));

        System.out.printf("~%s = %s (representação binária %s) \n", valor1, (~valor1), Integer.toBinaryString(~valor1));

        System.out.printf("%s << 2 = %s (representação binária %s) \n", valor1, (valor1 << 2) , Integer.toBinaryString(valor1 << 2));

        System.out.printf("%s >> 2 = %s (representação binária %s) \n", valor1, (valor1 >> 2) , Integer.toBinaryString(valor1 >> 2));

        System.out.printf("%s >>> 2 = %s (representação binária %s) \n", valor1, (valor1 >>> 2) , Integer.toBinaryString(valor1 >>> 2));

    }
}
package edu.thalia.tiposdevariaveis;

/**
 * The class TiposVariaveis has a main method that declares and initializes some variables.
 */
public class TiposVariaveis {
    /**
     * The function above is a Java program that prints the number 10 to the console
     * 
     * @param args This is the name of the array of String objects that contain any command-line
     * arguments.
     */
    public static void main (String [] args) {
         
        double salarioMinimo = 2.500;
        float pi = 3.14F;
        long  cpf = 99765432109l;

        short numeroCurto = 1;
        int numeroNormal = numeroCurto;
        short numeroCurto2 = (short) numeroNormal;
        
        int numero = 5;
        numero = 10;

        System.out.print(numero);

        final double VALOR_DE_PI = 3.14;
        //VALOR_DE_PI = 10.75;
        
        System.out.print(VALOR_DE_PI);

    }
}
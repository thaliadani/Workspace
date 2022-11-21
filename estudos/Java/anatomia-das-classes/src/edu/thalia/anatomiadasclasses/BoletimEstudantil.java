package edu.thalia.anatomiadasclasses;

import javax.lang.model.util.ElementScanner14;

/**
 * The class BoletimEstudantil has a main method that prints out a message based
 * on the value of the
 * variable mediaFinal
 */
public class BoletimEstudantil {
    /**
     * The function takes in a number and prints out a message based on the number
     */
    public static void main(String[] args) {
        int mediaFinal = 7;
        if (mediaFinal < 6)
            System.out.println("REPROVADO");
        else if (mediaFinal == 6)
            System.out.println("PROVA MINERVA");
        else
            System.out.println("APROVADO");
    }

}

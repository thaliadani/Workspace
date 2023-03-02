// The package name.
package edu.thalia.anatomiadasclasses;

/**
 * The class MinhaClass has a main method that calls the method nomeCompleto, which returns a string
 */
public class MinhaClass{
   
  /**
    * It prints the name of the person.
    * 
    * @param args This is the name of the array.
    */
   public static void main (String [] args) {
        String primeiroNome= " Gleyson";
        String segundoNome=" Sampaio";

        String nomeCompleto = nomeCompleto(primeiroNome, segundoNome);
        
        System.out.println(nomeCompleto);
     
   }
   
   /**
    * The function takes two strings as arguments, concatenates them, and returns the result
    * 
    * @param primeiroNome This is the first parameter.
    * @param segundoNome The second name of the person
    * @return The method is returning the concatenation of the two strings.
    */
   public static String nomeCompleto (String primeiroNome, String segundoNome){
     return "Resultado do metódo" + primeiroNome.concat("").concat(segundoNome);

   }

}

public class Main {
    public static void main(String[] args) {

        boolean b1 = true;
        boolean b2 = false;
        boolean b3 = true;
        boolean b4 = false;

        System.out.println("b1 && b2 " + (b1 && b2));
        System.out.println("b1 && b3 " + (b1 && b3));

        System.out.println("b2 || b4 " + (b2 || b4));
        System.out.println("b1 || b4 " + (b1 || b4));

        System.out.println("b1 ^ b3 " + (b1 ^ b3));
        System.out.println("b3 ^ b4 " + (b3 ^ b4));

        System.out.println("b1" + (!b1));
        System.out.println("b2" + (!b2));

//_________________________________________________________________

        int i1 = 10;
        int i2 = 5;
        float f1 = 4.5f;
        float f2 = 2.5f;

        System.out.println("((i1 + i2) < (f2-f1)) && true " + (((i1 + i2) < (f2-f1)) && true));

        System.out.println("(i1 > i2) || (f2 < f1) " + ((i1 > i2) || (f2 < f1)));

        System.out.println("i1 ^ i2 " + (i1 ^ i2));

//_________________________________________________________________

        char c1 = 'x';
        char c2 = 'y';
        char c3 = 'j';
        char c4 = 'j';

        System.out.println("c1 ^ c2 " + (c1 ^ c2));
        System.out.println("c3 ^ c4 " + (c3 ^ c4));

//_________________________________________________________________

        long l1 = 100000;
        byte by1 = 1;
        short sh1 = 25;

        System.out.println("by1 ^ l1 " + (by1 ^ l1));
        System.out.println("sh1 ^ by1 " + (sh1 ^ by1));

//_________________________________________________________________

        double salarioMensal = 11893.59d;
        double mediaSalario = 10500d;

        int quantidadeDependentes = 4;
        int mediaDependentes = 2;

        System.out.println((salarioMensal < mediaSalario) && (quantidadeDependentes >= mediaDependentes));

        boolean salarioBaixo = salarioMensal < mediaSalario;
        boolean muitosDependentes = quantidadeDependentes >= mediaDependentes;

        System.out.println((salarioBaixo) && (muitosDependentes));

        boolean recebeAuxilio = (salarioBaixo) && (muitosDependentes);

        System.out.println("recebeAuxilio" + recebeAuxilio);

    }
}
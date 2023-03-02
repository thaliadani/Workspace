public class Main {
    public static void main(String[] args) {
        int i1 = 10;
        int i2 = 20;
        int i3 = 24;

        String s1 = "Fulano";
        String s2 = "Fulano";
        String s3 = "Marcos";

        float f1 = 4.5f;
        float f2 = 2.5f;
        float f3 = 1.8f;

        boolean b1 = true;
        boolean b2 = false;

        char c1 = 'x';
        char c2 = 'y';
        char c3 = 'j';

        long l1 = 100000;
        byte by1 = 1;
        short sh1 = 25;

        System.out.println(i1 < i2);
        System.out.println(i2 == i2);
        System.out.println(i3 > i2);

        System.out.println(s1 == s2);
        System.out.println(s2 != s3);
        //System.out.println(s3 > i2);

        System.out.println(f1 < i2);
        System.out.println(f2 == i2);
        System.out.println(f3 > i2);

        //System.out.println(b1 < i2);
        //System.out.println(b2 > b1);

        System.out.println(c1 < i2);
        System.out.println(c2 == i2);
        System.out.println(c3 > i2);


    }
}
/**
 * A SmartTv has a boolean state (on or off), an integer channel, and an integer volume.
 */
public class SmartTv {
    
    boolean ligada = false;
    int canal = 1;
    int volume = 25;
    
    /**
     * This function changes the channel of the TV to the channel specified by the user.
     * 
     * @param novoCanal The new channel you want to change to.
     */
    public void mudarCanal(int novoCanal){
        canal = novoCanal;
    }

    /**
     * This function increases the value of the variable canal by one.
     */
    public void aumentarCanal(){
        canal++;
    }
    
    /**
     * > This function decreases the channel by one
     */
    public void diminuirCanal(){
        canal--;
    }

    /**
     * The function aumentarVolume() increases the volume by 1
     */
    public void aumentarVolume(){
        volume++;
        System.out.println("Aumentar volume para :" + volume);
        
    }

    /**
     * The function diminuirVolume() decreases the volume by one
     */
    public void diminuirVolume(){
        volume--;
        System.out.println("Diminuir volume para :" + volume);
    }

    /**
     * > This function sets the value of the variable ligada to true
     */
    public void ligar(){
        ligada = true;
    }
    
   /**
    * > The function desligar() sets the value of the variable ligada to false
    */
    public void desligar(){
        ligada = false;
    }
    }


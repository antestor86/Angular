public class Cat {
    private double originWeight;
    private double weight;

    public Cat(){
        weight = 1500.0; //+ 3000.0*Math.random();
        originWeight = weight;
    }

    public void mewow(){
        weight = weight - 1;
        System.out.println(weight);
    }
}

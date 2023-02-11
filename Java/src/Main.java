import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;


public class Main
{
    public static void main(String[] args){

        Container container = new Container();
        //container.count += 7843;
        int a = 34;
        double b = 43;
        System.out.println(8%2);


    }

    public static int sumDigits(Integer number){
        String words = number.toString();
        int sum = 0;
        for(int i = 0;i <= words.length();i++){
            sum += Integer.parseInt(String.valueOf(i));
        }
        return sum;
    }



}

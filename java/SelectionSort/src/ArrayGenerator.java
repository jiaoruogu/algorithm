import java.util.Random;

public class ArrayGenerator {

    private ArrayGenerator(){}

    public static Integer[] generateOrderedArray(int n) {

        Integer[] list = new Integer[n];
        for (int i = 0; i < n; i++) {
            list[i] = i;
        }
        return list;
    }

    // 长度为n，随机数组
    public static Integer[] generateRandomArray(int n, int bound) {

        Integer[] arr = new Integer[n];
        Random rnd = new Random();

        for (int i = 0; i < n; i++) {
            arr[i] = rnd.nextInt(bound);
        }
        return arr;
    }
}

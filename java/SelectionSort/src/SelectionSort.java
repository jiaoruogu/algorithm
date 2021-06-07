public class SelectionSort {

    private SelectionSort(){}

//    public static void sort(int[] arr) {
//
//        // arr[0...i) 是有序的； arr[i...n)是无序的
//        for (int i = 0; i < arr.length; i++) {
//            // 选择arr[i...n)中最小值的索引
//            int minIndex = i;
//            for (int j = i; j < arr.length; j++) {
//                if (arr[j] < arr[minIndex]) {
//                    minIndex = j;
//                }
//            }
//            swap(arr, i, minIndex);
//        }
//    }

    // 泛型约束
    public static <E extends Comparable<E>> void sort(E[] arr) {

        // arr[0...i) 是有序的； arr[i...n)是无序的
        for (int i = 0; i < arr.length; i++) {
            // 选择arr[i...n)中最小值的索引
            int minIndex = i;
            for (int j = i; j < arr.length; j++) {
                if (arr[j].compareTo(arr[minIndex]) < 0) {
                    minIndex = j;
                }
            }
            swap(arr, i, minIndex);
        }
    }

    private static <E> void swap(E[] arr, int i, int j) {
        E t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }

    public static void main(String[] args) {
//        int[] arr = {1, 3, 52, 523, 6, 247, 746, 9};
//        Integer[] arr = {1, 3, 52, 523, 6, 247, 746, 9};

        int[] dataSize = {10000, 100000};
        for (int n : dataSize) {
            Integer[] arr = ArrayGenerator.generateRandomArray(n, n);
            SortingHelper.sortTest("SelectionSort", arr);
        }

    }
}


public class LinearSearch {

    private LinearSearch() {
    }

    ;

    // 泛型方法
    public static <E> int search(E[] data, E target) {

        for (int i = 0; i < data.length; i++) {
            // 类对象判等使用equals
            if (data[i].equals(target)) {
                return i;
            }
        }

        return -1;
    }

    public static void main(String[] args) {

//        Integer[] data = {24, 18, 12, 9, 6};
//        // 泛型只能接受类对象，不能接受基本数据类型
//        int res = LinearSearch.search(data, 9);
//        System.out.println(res);
//
//        int res2 = LinearSearch.search(data, 99);
//        System.out.println(res2);
//
//        Student[] Students = {
//                new Student("Alice"),
//                new Student("Bobo"),
//                new Student("JJ"),
//        };
//
//        Student bobo = new Student("bobo");
//        int res3 = LinearSearch.search(Students, bobo);
//        System.out.println(res3);

        int[] dataSize = {100000, 1000000};
        for (int n : dataSize) {

            Integer[] list = ArrayGenerator.generateOrderedArray(n);


            long startTime = System.nanoTime();
            for (int k = 0; k < 1000; k++) {
                LinearSearch.search(list, n);
            }
            long endTime = System.nanoTime();

            double time = (endTime - startTime) / 1000000000.0;
            System.out.println("n = " + n + ", 100 runs :" + time + "s");
        }

    }

}

/**
 * 泛型只能接受类对象，不能接受基本数据类型
 * boolean byte char short int long float double
 * <p>
 * 每个基本数据类型都有对应的包装类
 * Boolean Byte Character Short Integer Long Float Double
 * <p>
 * 循环不变量
 * data[0...i-1]中没有找到目标  ---》循环不变量
 * 循环体：维持循环不变量
 * <p>
 * <p>
 * 写正确的代码   定义清除循环不变量
 * 维护循环不变量
 * <p>
 * 定义清除函数的功能
 * <p>
 * LinearSearch
 * 输入：数组，和目标元素
 * 输出：目标元素所在的索引；若不存在，返回-1
 */


/**
 * 循环不变量
 * data[0...i-1]中没有找到目标  ---》循环不变量
 * 循环体：维持循环不变量
 *
 *
 * 写正确的代码   定义清除循环不变量
 *              维护循环不变量
 *
 *              定义清除函数的功能
 *
 *              LinearSearch
 *              输入：数组，和目标元素
 *              输出：目标元素所在的索引；若不存在，返回-1
 */

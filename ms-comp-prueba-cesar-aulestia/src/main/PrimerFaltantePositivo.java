import java.util.ArrayList;
import java.util.Set;
import java.util.HashSet;

public class PrimerFaltantePositivo {
    public static void main(String [] args) {
        int[] arr1 = {3, 4, -1, 1};
        int[] arr2 = {1, 2, 0};

        System.out.println("Faltante en el arreglo 1: " + search(arr1));
        System.out.println("Faltante en el arreglo 2: " + search(arr2));
    }

    public static int search(int[] nums){
        Set<Integer> set = new HashSet();

        for (int num : nums) {
            if (num > 0) {
                set.add(num);
            }
        }

        int i = 1;
        while (true) {
            if (!set.contains(i)) {
                return i;
            }
            i++;
        }
    }
}

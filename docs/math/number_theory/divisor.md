## 约数

如果 $a|b$，则称 $a$ 是 $b$ 的约数，$b$ 是 $a$ 的倍数。

#### 模板题

[洛谷：找因数](https://www.luogu.com.cn/problem/B3953)

#### 代码实现

???+ example "参考实现"
    === "C++"
        ```cpp
        #include <bits/stdc++.h>
        using namespace std;

        int main() {
            int n;
            cin >> n;
            for (int i = 1; i <= n; i++) {
                if (n % i == 0) {
                    cout << i << "\n";
                }
            }
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.Scanner;

        public class Main {
            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                int n = sc.nextInt();
                for (int i = 1; i <= n; i++) {
                    if (n % i == 0) {
                        System.out.println(i);
                    }
                }
            }
        }
        ```

    === "Python"
        ```python
        n = int(input())
        for i in range(1, n + 1):
            if n % i == 0:
                print(i)
        ```

## 练习题单

??? tip "约数"
    - [洛谷：求正整数 2 和 n 之间的完全数](https://www.luogu.com.cn/problem/B2127)
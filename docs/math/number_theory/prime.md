## 素数

如果一个正整数 $a$ 只能被 $1$ 和 $a$ 本身整除，那么我们就称 $a$ 是一个素数。

#### 模板题

[自建OJ：判断素数](http://47.121.118.174/p/492)

#### 代码实现

???+ example "参考实现"
    === "C++"
        ```cpp
        #include <bits/stdc++.h>
        using namespace std;

        bool check(int x) {
            if (x == 1) return false;
            for (int i = 2; i * i <= x; i++) {
                if (x % i == 0) return false;
            }
            return true;
        }

        int main() {
            int n;
            cin >> n;
            if (check(n)) cout << "Yes";
            else cout << "No";
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.Scanner;

        public class Main {
            static boolean check(int x) {
                if (x == 1) return false;
                for (int i = 2; i * i <= x; i++) {
                    if (x % i == 0) return false;
                }
                return true;
            }

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                int n = sc.nextInt();
                if (check(n)) System.out.println("Yes");
                else System.out.println("No");
            }
        }
        ```

    === "Python"
        ```python
        def check(x: int) -> bool:
            if x == 1:
                return False
            for i in range(2, int(x**0.5) + 1):
                if x % i == 0:
                    return False
            return True

        n = int(input())
        if check(n):
            print("Yes")
        else:
            print("No")
        ```

## 练习题单

??? tip "素数"
    - [洛谷：素数个数](https://www.luogu.com.cn/problem/B2128)
    - [洛谷：素数对](https://www.luogu.com.cn/problem/B2132)
    - [洛谷：区间内的真素数](https://www.luogu.com.cn/problem/B2139)
    - [洛谷：哥德巴赫猜想](https://www.luogu.com.cn/problem/P1304)

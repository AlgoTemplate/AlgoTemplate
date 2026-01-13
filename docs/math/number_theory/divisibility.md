## 同余

$$(a + b) \mod m = \left( (a \mod m) + (b \mod m) \right) \mod m$$

$$(a \times b) \mod m = \left( (a \mod m) \times (b \mod m) \right) \mod m$$

$$(a - b) \mod m = \left( \left( (a - b) \mod m \right) + m \right) \mod m$$

#### 模板题

[洛谷：Hello, 2023](https://www.luogu.com.cn/problem/B3696)

#### 代码实现

???+ example "参考实现"
    === "C++"
        ```cpp
        #include <bits/stdc++.h>
        using namespace std;

        int main() {
            int n;
            cin >> n;
            cout << (n % 2023 + 2023) % 2023 << "\n";
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
                System.out.println((n % 2023 + 2023) % 2023);
            }
        }
        ```

    === "Python"
        ```python
        n = int(input())
        print(n % 2023)
        ```

## 练习题单

??? tip "整除与同余"
    - [洛谷：带余除法](https://www.luogu.com.cn/problem/B2010)
    - [洛谷：计算星期几](https://www.luogu.com.cn/problem/B2074)
    - [洛谷：阶乘求和](https://www.luogu.com.cn/problem/P12323)
    - [洛谷：星期计算](https://www.luogu.com.cn/problem/P13928)
    - [洛谷：传染病](https://www.luogu.com.cn/problem/B3944)
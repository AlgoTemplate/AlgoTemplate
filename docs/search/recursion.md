## 视频讲解

??? info "🎥 视频讲解"
    <iframe 
      src="https://player.bilibili.com/player.html?bvid=BV1HS65B2EDT"
      scrolling="no" 
      frameborder="0" 
      allowfullscreen="true"
      width="100%" 
      height="500">
    </iframe>


## 递归

递归是指在函数的定义中调用函数自身的方法。


#### 例题1

[洛谷：求 1+2+3+...+N 的值](https://www.luogu.com.cn/problem/B2142)

#### 代码实现

???+ example "参考实现"
    === "C++"
        ```cpp
        #include <bits/stdc++.h>
        using namespace std;

        int f(int u) {
            if (u == 1) return 1;
            return u + f(u - 1);
        }

        int main() {
            int n;
            cin >> n;
            cout << f(n);
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.Scanner;

        public class Main {

            static int f(int u) {
                if (u == 1) return 1;
                return u + f(u - 1);
            }

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                int n = sc.nextInt();
                System.out.println(f(n));
            }
        }
        ```

    === "Python"
        ```python
        def f(u: int) -> int:
            if u == 1:
                return 1
            return u + f(u - 1)

        n = int(input())
        print(f(n))
        ```

#### 例题2

[洛谷：求 f(x,n)](https://www.luogu.com.cn/problem/B2147)

#### 代码实现

???+ example "参考实现"
    === "C++"
        ```cpp
        #include <bits/stdc++.h>
        using namespace std;

        double f(double x, double n) {
            if (n == 1) return sqrt(n + x);
            return sqrt(n + f(x, n - 1));
        }

        int main() {
            double x, n;
            cin >> x >> n;
            cout << fixed << setprecision(2) << f(x, n);
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.Scanner;

        public class Main {

            static double f(double x, double n) {
                if (n == 1) return Math.sqrt(n + x);
                return Math.sqrt(n + f(x, n - 1));
            }

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                double x = sc.nextDouble();
                double n = sc.nextDouble();
                System.out.printf("%.2f", f(x, n));
            }
        }
        ```

    === "Python"
        ```python
        import math

        def f(x: float, n: int) -> float:
            if n == 1:
                return math.sqrt(n + x)
            return math.sqrt(n + f(x, n - 1))


        x, n = map(float, input().split())
        n = int(n)
        print(f"{f(x, n):.2f}")
        ```

#### 例题3

[洛谷：Roads Around The Farm S](https://www.luogu.com.cn/problem/P2907)

#### 代码实现

???+ example "参考实现"
    === "C++"
        ```cpp
        #include <bits/stdc++.h>
        using namespace std;

        int n, k;
        int ans = 0;

        void f(int u, int k) {
            int x = (u + k) / 2;
            int y = u - x;
            if (u % 2 == k % 2 && x > 0 && y > 0) {
                f(x, k);
                f(y, k);
            } else {
                ans++;
            }
        }

        int main() {
            cin >> n >> k;
            f(n, k);
            cout << ans;
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.Scanner;

        public class Main {

            static int ans = 0;

            static void f(int u, int k) {
                int x = (u + k) / 2;
                int y = u - x;
                if (u % 2 == k % 2 && x > 0 && y > 0) {
                    f(x, k);
                    f(y, k);
                } else {
                    ans++;
                }
            }

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                int n = sc.nextInt();
                int k = sc.nextInt();
                f(n, k);
                System.out.println(ans);
            }
        }
        ```

    === "Python"
        ```python
        ans = 0

        def f(u: int, k: int):
            global ans
            x = (u + k) // 2
            y = u - x
            if u % 2 == k % 2 and x > 0 and y > 0:
                f(x, k)
                f(y, k)
            else:
                ans += 1


        n, k = map(int, input().split())
        f(n, k)
        print(ans)
        ```

## 练习题单

??? tip "递归"
    - [洛谷：计算阶乘](https://www.luogu.com.cn/problem/P5739)
    - [自建OJ：斐波拉契数列](http://47.121.118.174/p/261)
    - [洛谷：阿克曼（Ackermann）函数](https://www.luogu.com.cn/problem/B2144)
    - [洛谷：Hermite 多项式](https://www.luogu.com.cn/problem/B2146)
    - [洛谷：再求 f(x,n)](https://www.luogu.com.cn/problem/B2148)
    - [自建OJ：魔法水晶](http://47.121.118.174/p/806)
    - [洛谷：P1010 幂次方](https://www.luogu.com.cn/problem/P1010)


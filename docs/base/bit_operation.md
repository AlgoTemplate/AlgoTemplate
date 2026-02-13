## 位运算

在计算机中，所有数据都是以二进制形式存储的。位运算就是直接对二进制位进行操作的运算。

#### 例题1

[自建OJ：统计二进制中1的个数](http://47.121.118.174/p/50)

#### 参考代码

???+ example "参考实现"
    === "C++"
        ```cpp
        #include <bits/stdc++.h>
        using namespace std;

        int main() {
            int n;
            cin >> n;

            int ans = 0;
            for (int i = 30; i >= 0; i--) {
                if ((n >> i) & 1) {
                    ans++;
                }
            }

            cout << ans;
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

                int ans = 0;
                for (int i = 30; i >= 0; i--) {
                    if (((n >> i) & 1) == 1) {
                        ans++;
                    }
                }

                System.out.println(ans);
            }
        }
        ```

    === "Python"
        ```python
        n = int(input())
        ans = 0

        for i in range(30, -1, -1):
            if (n >> i) & 1:
                ans += 1

        print(ans)
        ```


#### 例题2

[自建OJ：位运算的操作](http://47.121.118.174/p/71)

#### 参考实现

???+ example "参考实现"
    === "C++"
        ```cpp
        #include <bits/stdc++.h>
        using namespace std;

        int n, q;

        int main() {
            cin >> n >> q;
            for (int i = 1; i <= q; i++) {
                int x;
                cin >> x;

                if (x == 1) {
                    int k;
                    cin >> k;
                    cout << ((n >> k) & 1) << endl;
                }

                if (x == 2) {
                    int l, r;
                    cin >> l >> r;
                    int p = (1 << (r + 1)) - 1;
                    int t = (1 << l) - 1;
                    p -= t;
                    cout << (n ^ p) << endl;
                    n ^= p;
                }

                if (x == 3) {
                    int l, r;
                    cin >> l >> r;
                    int p = (1 << (r + 1)) - 1;
                    int t = (1 << l) - 1;
                    p -= t;
                    cout << (n | p) << endl;
                    n |= p;
                }

                if (x == 4) {
                    int l, r;
                    cin >> l >> r;
                    int p = (1 << (r + 1)) - 1;
                    int t = (1 << l) - 1;
                    p -= t;
                    p = ~p;
                    cout << (n & p) << endl;
                    n &= p;
                }

                if (x == 5) {
                    cout << (n & -n) << endl;
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
                int q = sc.nextInt();

                while (q-- > 0) {
                    int x = sc.nextInt();

                    if (x == 1) {
                        int k = sc.nextInt();
                        System.out.println((n >> k) & 1);
                    }

                    if (x == 2) {
                        int l = sc.nextInt();
                        int r = sc.nextInt();
                        int p = (1 << (r + 1)) - 1;
                        int t = (1 << l) - 1;
                        p -= t;
                        System.out.println(n ^ p);
                        n ^= p;
                    }

                    if (x == 3) {
                        int l = sc.nextInt();
                        int r = sc.nextInt();
                        int p = (1 << (r + 1)) - 1;
                        int t = (1 << l) - 1;
                        p -= t;
                        System.out.println(n | p);
                        n |= p;
                    }

                    if (x == 4) {
                        int l = sc.nextInt();
                        int r = sc.nextInt();
                        int p = (1 << (r + 1)) - 1;
                        int t = (1 << l) - 1;
                        p -= t;
                        p = ~p;
                        System.out.println(n & p);
                        n &= p;
                    }

                    if (x == 5) {
                        System.out.println(n & -n);
                    }
                }
            }
        }
        ```

    === "Python"
        ```python
        n, q = map(int, input().split())

        for _ in range(q):
            x = int(input().split()[0])

            if x == 1:
                k = int(input())
                print((n >> k) & 1)

            if x == 2:
                l, r = map(int, input().split())
                p = (1 << (r + 1)) - 1
                t = (1 << l) - 1
                p -= t
                print(n ^ p)
                n ^= p

            if x == 3:
                l, r = map(int, input().split())
                p = (1 << (r + 1)) - 1
                t = (1 << l) - 1
                p -= t
                print(n | p)
                n |= p

            if x == 4:
                l, r = map(int, input().split())
                p = (1 << (r + 1)) - 1
                t = (1 << l) - 1
                p -= t
                p = ~p
                print(n & p)
                n &= p

            if x == 5:
                print(n & -n)
        ```


#### 例题3

[自建OJ：相或为 k](http://47.121.118.174/p/600)

#### 参考代码

???+ example "参考实现"
    === "C++"
        ```cpp
        #include <bits/stdc++.h>
        using namespace std;

        int T, n, k, a;

        int main() {
            cin >> T;
            while (T--) {
                cin >> n >> k;
                int s = 0;

                while (n--) {
                    cin >> a;
                    // 如果 a 的所有 1 位都在 k 中
                    if ((a & k) == a)
                        s |= a;
                }

                if (s == k)
                    cout << "Yes\n";
                else
                    cout << "No\n";
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
                int T = sc.nextInt();

                while (T-- > 0) {
                    int n = sc.nextInt();
                    int k = sc.nextInt();
                    int s = 0;

                    for (int i = 0; i < n; i++) {
                        int a = sc.nextInt();
                        if ((a & k) == a) {
                            s |= a;
                        }
                    }

                    if (s == k)
                        System.out.println("Yes");
                    else
                        System.out.println("No");
                }
            }
        }
        ```

    === "Python"
        ```python
        T = int(input())

        for _ in range(T):
            n, k = map(int, input().split())
            s = 0

            arr = list(map(int, input().split()))
            for a in arr:
                if (a & k) == a:
                    s |= a

            if s == k:
                print("Yes")
            else:
                print("No")
        ```

## 练习题单

??? tip "位运算"
    - [自建OJ：输出二进制补码](http://47.121.118.174/p/447)
    - [自建OJ：判断2的幂](http://47.121.118.174/p/96)
    - [洛谷：电池分组](https://www.luogu.com.cn/problem/P12156)
    - [洛谷：小卡和质数](https://www.luogu.com.cn/problem/P8845)
    - [洛谷：2025](https://www.luogu.com.cn/problem/B4261)
    - [自建OJ：前缀异或和](http://47.121.118.174/p/825)
    - [洛谷：选数异或](https://www.luogu.com.cn/problem/P8773)
    - [洛谷：[蓝桥杯 2025 省 Python B] 异或和](https://www.luogu.com.cn/problem/P12177)
    - [洛谷：[CSP-J 2025] 异或和](https://www.luogu.com.cn/problem/P14359)
   




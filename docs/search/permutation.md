## 全排列

全排列是指把一组元素按不同顺序全部排列出来的所有可能情况。

#### 例题1

[自建OJ：递归实现指数型枚举](http://47.121.118.174/p/64)

#### 代码实现

???+ example "参考实现"
    === "C++"
        ```cpp
        #include <bits/stdc++.h>
        using namespace std;

        int n;
        bool st[10];
        int path[10];

        void dfs(int u) {
            if (u > n) {
                for (int i = 1; i <= n; i++) {
                    cout << path[i] << " ";
                }
                cout << "\n";
                return;
            }

            for (int i = 1; i <= n; i++) {
                if (!st[i]) {
                    st[i] = true;
                    path[u] = i;
                    dfs(u + 1);
                    st[i] = false;
                }
            }
        }

        int main() {
            cin >> n;
            dfs(1);
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.Scanner;

        public class Main {

            static int n;
            static boolean[] st = new boolean[10];
            static int[] path = new int[10];

            static void dfs(int u) {
                if (u > n) {
                    for (int i = 1; i <= n; i++) {
                        System.out.print(path[i] + " ");
                    }
                    System.out.println();
                    return;
                }

                for (int i = 1; i <= n; i++) {
                    if (!st[i]) {
                        st[i] = true;
                        path[u] = i;
                        dfs(u + 1);
                        st[i] = false;
                    }
                }
            }

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                n = sc.nextInt();
                dfs(1);
            }
        }
        ```

    === "Python"
        ```python
        n = int(input())

        st = [False] * 10
        path = [0] * 10

        def dfs(u):
            if u > n:
                for i in range(1, n + 1):
                    print(path[i], end=" ")
                print()
                return

            for i in range(1, n + 1):
                if not st[i]:
                    st[i] = True
                    path[u] = i
                    dfs(u + 1)
                    st[i] = False

        dfs(1)
        ```


#### 例题2

[洛谷：带分数](https://www.luogu.com.cn/problem/P8599)

#### 代码实现
???+ example "参考实现"

    === "C++"
        ```cpp
        #include <bits/stdc++.h>
        using namespace std;

        int st[10], path[10];
        int n = 0;
        int ans = 0;

        long long calc(int l, int r) {
            long long res = 0;
            for (int i = l; i <= r; i++) {
                res = res * 10 + path[i];
            }
            return res;
        }

        void dfs(int u) {
            if (u > 9) {
                for (int i = 1; i <= 7; i++) {
                    for (int j = i + 1; j <= 8; j++) {

                        long long a = calc(1, i);
                        long long b = calc(i + 1, j);
                        long long c = calc(j + 1, 9);

                        if (a * c + b == (long long)n * c) {
                            ans++;
                        }

                    }
                }
                return;
            }

            for (int i = 1; i <= 9; i++) {
                if (!st[i]) {
                    st[i] = 1;
                    path[u] = i;
                    dfs(u + 1);
                    st[i] = 0;
                }
            }
        }

        int main() {
            cin >> n;
            dfs(1);
            cout << ans;
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.Scanner;

        public class Main {

            static int[] st = new int[10];
            static int[] path = new int[10];
            static int n;
            static int ans = 0;

            static long calc(int l, int r) {
                long res = 0;
                for (int i = l; i <= r; i++) {
                    res = res * 10 + path[i];
                }
                return res;
            }

            static void dfs(int u) {
                if (u > 9) {
                    for (int i = 1; i <= 7; i++) {
                        for (int j = i + 1; j <= 8; j++) {
                            long a = calc(1, i);
                            long b = calc(i + 1, j);
                            long c = calc(j + 1, 9);

                            if (a * c + b == (long)n * c) {
                                ans++;
                            }

                        }
                    }
                    return;
                }
                for (int i = 1; i <= 9; i++) {
                    if (st[i] == 0) {
                        st[i] = 1;
                        path[u] = i;
                        dfs(u + 1);
                        st[i] = 0;
                    }
                }

            }

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                n = sc.nextInt();
                dfs(1);
                System.out.println(ans);

            }

        }
        ```

    === "Python"
        ```python
        st = [0] * 10
        path = [0] * 10

        n = int(input())
        ans = 0

        def calc(l, r):
            res = 0
            for i in range(l, r + 1):
                res = res * 10 + path[i]
            return res

        def dfs(u):
            global ans

            if u > 9:

                for i in range(1, 8):
                    for j in range(i + 1, 9):

                        a = calc(1, i)
                        b = calc(i + 1, j)
                        c = calc(j + 1, 9)

                        if a * c + b == n * c:
                            ans += 1
                return
            for i in range(1, 10):
                if st[i] == 0:
                    st[i] = 1
                    path[u] = i
                    dfs(u + 1)
                    st[i] = 0
        dfs(1)
        print(ans)
        ```

## 练习题单

??? tip "全排列"
    - [洛谷：三连击（升级版）](https://www.luogu.com.cn/problem/P1618)


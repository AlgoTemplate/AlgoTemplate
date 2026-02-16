## 记忆化搜索

记忆化搜索是在DFS的基础上，用数组或哈希表记录已经计算过的状态，使每个状态只计算一次。

#### 例题1

[自建OJ：斐波拉契数列](http://47.121.118.174/p/826)

#### 代码实现

???+ example "参考实现"
    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        const int Mod = 998244353;
        const int N = 1e5 + 10;

        int dp[N];

        int fib(int n) {
            if (n == 0) return 0;
            if (n == 1) return 1;
            if (dp[n] != -1) return dp[n];
            return dp[n] = (fib(n - 1) + fib(n - 2)) % Mod;
        }

        int main() {
            int t;
            cin >> t;
            memset(dp, -1, sizeof dp);
            while (t--) {
                int n;
                cin >> n;
                cout << fib(n) << "\n";
            }
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.Scanner;
        import java.util.Arrays;

        public class Main {

            static final int Mod = 998244353;
            static final int N = 100010;

            static int[] dp = new int[N];

            static int fib(int n) {
                if (n == 0) return 0;
                if (n == 1) return 1;
                if (dp[n] != -1) return dp[n];
                dp[n] = (fib(n - 1) + fib(n - 2)) % Mod;
                return dp[n];
            }

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                int t = sc.nextInt();
                Arrays.fill(dp, -1);
                while (t-- > 0) {
                    int n = sc.nextInt();
                    System.out.println(fib(n));
                }
            }

        }
        ```

    === "Python"
        ```python
        import sys

        sys.setrecursionlimit(200000)

        Mod = 998244353
        N = 100010

        dp = [-1] * N

        def fib(n: int) -> int:
            if n == 0:
                return 0
            if n == 1:
                return 1
            if dp[n] != -1:
                return dp[n]
            dp[n] = (fib(n - 1) + fib(n - 2)) % Mod
            return dp[n]


        t = int(input())

        for _ in range(t):
            n = int(input())
            print(fib(n))
        ```


#### 例题2

[自建OJ：求解组合数2](http://47.121.118.174/p/86)

#### 代码实现

???+ example "参考实现"
    === "C++"
        ```cpp
        #include <bits/stdc++.h>
        using namespace std;

        const int N = 3010;
        const int mod = 1000000007;

        int dp[N][N];

        int C(int a, int b) {
            if (a == b || b == 0) return 1;
            if (dp[a][b] != -1) return dp[a][b];
            return dp[a][b] = (C(a - 1, b) + C(a - 1, b - 1)) % mod;
        }

        int main() {
            int n, m;
            cin >> n >> m;
            memset(dp, -1, sizeof(dp));
            cout << C(n, m);
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.Scanner;
        import java.util.Arrays;

        public class Main {

            static final int N = 3010;
            static final int mod = 1000000007;

            static int[][] dp = new int[N][N];

            static int C(int a, int b) {
                if (a == b || b == 0) return 1;
                if (dp[a][b] != -1) return dp[a][b];
                return dp[a][b] = (C(a - 1, b) + C(a - 1, b - 1)) % mod;
            }

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                int n = sc.nextInt();
                int m = sc.nextInt();
                for (int i = 0; i < N; i++) {
                    Arrays.fill(dp[i], -1);
                }
                System.out.println(C(n, m));
            }

        }
        ```

    === "Python"
        ```python
        import sys

        sys.setrecursionlimit(10000)

        mod = 1000000007
        N = 3010

        dp = [[-1] * N for _ in range(N)]

        def C(a: int, b: int) -> int:
            if a == b or b == 0:
                return 1
            if dp[a][b] != -1:
                return dp[a][b]
            dp[a][b] = (C(a - 1, b) + C(a - 1, b - 1)) % mod
            return dp[a][b]


        n, m = map(int, input().split())

        print(C(n, m))
        ```
## 练习
#### 练习1

[洛谷：数字三角形](https://www.luogu.com.cn/problem/P1216)

请将以下的搜索代码改成记忆化搜索并通过上题。

#### 代码实现

??? example "参考实现"
    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        const int N = 1010;

        int a[N][N];
        int n;

        int dfs(int x, int y) {
            if (x == n) return a[x][y];
            return max(dfs(x + 1, y), dfs(x + 1, y + 1)) + a[x][y];
        }

        int main() {
            cin >> n;
            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= i; j++) {
                    cin >> a[i][j];
                }
            }
            cout << dfs(1, 1);
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.Scanner;

        public class Main {

            static final int N = 1010;

            static int[][] a = new int[N][N];
            static int n;

            static int dfs(int x, int y) {
                if (x == n) return a[x][y];
                return Math.max(dfs(x + 1, y), dfs(x + 1, y + 1)) + a[x][y];
            }

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                n = sc.nextInt();
                for (int i = 1; i <= n; i++) {
                    for (int j = 1; j <= i; j++) {
                        a[i][j] = sc.nextInt();
                    }
                }
                System.out.println(dfs(1, 1));
            }

        }
        ```

    === "Python"
        ```python
        import sys

        sys.setrecursionlimit(10000)

        N = 1010

        a = [[0] * N for _ in range(N)]

        n = int(input())

        for i in range(1, n + 1):
            row = list(map(int, input().split()))
            for j in range(1, i + 1):
                a[i][j] = row[j - 1]

        def dfs(x: int, y: int) -> int:
            if x == n:
                return a[x][y]
            return max(dfs(x + 1, y), dfs(x + 1, y + 1)) + a[x][y]

        print(dfs(1, 1))
        ```
#### 练习2

[洛谷：最长上升子序列](https://www.luogu.com.cn/problem/B3637)

#### 代码实现
??? example "参考实现"
    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        const int N = 5005;

        int n;
        int a[N];

        int dfs(int u) {
            int best = 1;
            for (int i = u + 1; i <= n; i++) {
                if (a[i] > a[u]) {
                    best = max(best, dfs(i) + 1);
                }
            }
            return best;
        }

        int main() {
            cin >> n;
            for (int i = 1; i <= n; i++) {
                cin >> a[i];
            }
            int ans = 0;
            for (int i = 1; i <= n; i++) {
                ans = max(ans, dfs(i));
            }
            cout << ans;
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.Scanner;

        public class Main {

            static final int N = 5005;

            static int n;
            static int[] a = new int[N];

            static int dfs(int u) {
                int best = 1;
                for (int i = u + 1; i <= n; i++) {
                    if (a[i] > a[u]) {
                        best = Math.max(best, dfs(i) + 1);
                    }
                }
                return best;
            }

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                n = sc.nextInt();
                for (int i = 1; i <= n; i++) {
                    a[i] = sc.nextInt();
                }
                int ans = 0;
                for (int i = 1; i <= n; i++) {
                    ans = Math.max(ans, dfs(i));
                }
                System.out.println(ans);
            }

        }
        ```

    === "Python"
        ```python
        import sys

        sys.setrecursionlimit(1000000)

        N = 5005
        a = [0] * N

        n = int(input())

        arr = list(map(int, input().split()))
        for i in range(1, n + 1):
            a[i] = arr[i - 1]

        def dfs(u: int) -> int:
            best = 1
            for i in range(u + 1, n + 1):
                if a[i] > a[u]:
                    best = max(best, dfs(i) + 1)
            return best

        ans = 0
        for i in range(1, n + 1):
            ans = max(ans, dfs(i))

        print(ans)
        ```

#### 练习3
[自建OJ：最长公共子序列](http://47.121.118.174/p/827)
#### 代码实现
??? example "参考实现"
    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        string s1, s2;
        int n, m;
        int dfs(int x, int y){
            if(x > n || y > m) return 0;
            if(s1[x] == s2[y]){
                return dfs(x + 1, y + 1) + 1;
            }
            return max(dfs(x + 1, y), dfs(x, y + 1));
        }
        int main(){
            cin >> s1 >> s2;
            n = s1.size();
            m = s2.size();
            s1 = " " + s1;
            s2 = " " + s2;
            cout << dfs(1, 1);
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.Scanner;
        public class Main{
            static String s1, s2;
            static int n, m;
            static int dfs(int x, int y){
                if(x > n || y > m) return 0;
                if(s1.charAt(x) == s2.charAt(y)){
                    return dfs(x + 1, y + 1) + 1;
                }
                return Math.max(dfs(x + 1, y), dfs(x, y + 1));
            }
            public static void main(String[] args){
                Scanner sc = new Scanner(System.in);
                s1 = sc.next();
                s2 = sc.next();
                n = s1.length();
                m = s2.length();
                s1 = " " + s1;
                s2 = " " + s2;
                System.out.println(dfs(1, 1));
            }
        }
        ```

    === "Python"
        ```python
        import sys
        sys.setrecursionlimit(1000000)
        s1 = input().strip()
        s2 = input().strip()
        n = len(s1)
        m = len(s2)
        s1 = " " + s1
        s2 = " " + s2
        def dfs(x: int, y: int) -> int:
            if x > n or y > m:
                return 0
            if s1[x] == s2[y]:
                return dfs(x + 1, y + 1) + 1
            return max(dfs(x + 1, y), dfs(x, y + 1))
        print(dfs(1, 1))
        ```
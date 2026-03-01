## 01 背包

#### 例题1

[自建OJ：01 背包](http://47.121.118.174/p/85)

#### 代码实现

??? example "记忆化搜索"
    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        const int N = 1005;

        int n, m;
        int v[N], w[N];
        int dp[N][N];

        int dfs(int i, int j) {
            if (i == 0) return 0;
            if (dp[i][j] != -1) return dp[i][j];
            int ans = 0;
            if (j >= v[i]) ans = dfs(i - 1, j - v[i]) + w[i];
            ans = max(ans, dfs(i - 1, j));
            return dp[i][j] = ans;
        }

        int main() {
            memset(dp, -1, sizeof dp);
            cin >> n >> m;
            for (int i = 1; i <= n; i++) cin >> v[i] >> w[i];
            cout << dfs(n, m);
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main {

            static final int N = 1005;

            static int n, m;
            static int[] v = new int[N];
            static int[] w = new int[N];
            static int[][] dp = new int[N][N];

            static int dfs(int i, int j) {
                if (i == 0) return 0;
                if (dp[i][j] != -1) return dp[i][j];
                int ans = 0;
                if (j >= v[i]) ans = dfs(i - 1, j - v[i]) + w[i];
                ans = Math.max(ans, dfs(i - 1, j));
                return dp[i][j] = ans;
            }

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                for (int i = 0; i < N; i++) Arrays.fill(dp[i], -1);
                n = sc.nextInt();
                m = sc.nextInt();
                for (int i = 1; i <= n; i++) {
                    v[i] = sc.nextInt();
                    w[i] = sc.nextInt();
                }
                System.out.println(dfs(n, m));
            }

        }
        ```

    === "Python"
        ```python
        import sys
        sys.setrecursionlimit(1000000)

        input = sys.stdin.readline

        N = 1005

        n, m = map(int, input().split())
        v = [0] * N
        w = [0] * N
        dp = [[-1] * N for _ in range(N)]

        for i in range(1, n + 1):
            v[i], w[i] = map(int, input().split())

        def dfs(i, j):
            if i == 0:
                return 0
            if dp[i][j] != -1:
                return dp[i][j]
            ans = 0
            if j >= v[i]:
                ans = dfs(i - 1, j - v[i]) + w[i]
            ans = max(ans, dfs(i - 1, j))
            dp[i][j] = ans
            return ans

        print(dfs(n, m))
        ```

??? example "动态规划实现"
    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        const int N = 1005;

        int n, m;
        int v[N], w[N];
        int dp[N][N];

        int main() {
            cin >> n >> m;
            for (int i = 1; i <= n; i++) cin >> v[i] >> w[i];
            for (int i = 1; i <= n; i++) {
                for (int j = 0; j <= m; j++) {
                    dp[i][j] = dp[i - 1][j];
                    if (j >= v[i]) dp[i][j] = max(dp[i][j], dp[i - 1][j - v[i]] + w[i]);
                }
            }
            cout << dp[n][m];
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main {

            static final int N = 1005;

            static int n, m;
            static int[] v = new int[N];
            static int[] w = new int[N];
            static int[][] dp = new int[N][N];

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                n = sc.nextInt();
                m = sc.nextInt();
                for (int i = 1; i <= n; i++) {
                    v[i] = sc.nextInt();
                    w[i] = sc.nextInt();
                }
                for (int i = 1; i <= n; i++) {
                    for (int j = 0; j <= m; j++) {
                        dp[i][j] = dp[i - 1][j];
                        if (j >= v[i]) {
                            dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - v[i]] + w[i]);
                        }
                    }
                }
                System.out.println(dp[n][m]);
            }

        }
        ```

    === "Python"
        ```python
        import sys

        input = sys.stdin.readline

        N = 1005

        n, m = map(int, input().split())
        v = [0] * N
        w = [0] * N
        dp = [[0] * N for _ in range(N)]

        for i in range(1, n + 1):
            v[i], w[i] = map(int, input().split())

        for i in range(1, n + 1):
            for j in range(0, m + 1):
                dp[i][j] = dp[i - 1][j]
                if j >= v[i]:
                    dp[i][j] = max(dp[i][j], dp[i - 1][j - v[i]] + w[i])

        print(dp[n][m])
        ```
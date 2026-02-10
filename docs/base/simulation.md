## 模拟

模拟算法，就是严格按照题目给出的规则，一步一步“照做”，用程序把现实过程或操作过程原样复现出来。一般模拟算法对代码实现能力要求较高，需要注意细节。

#### 例题1

[自建OJ：唱跳与篮球](http://47.121.118.174/p/13)

#### 代码实现

???+ example "参考实现"
    === "C++"
        ```cpp
        #include <bits/stdc++.h>
        using namespace std;

        int month[] = {-1, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        int bh[] = {13, 1, 2, 3, 5, 4, 4, 2, 2, 2};

        bool leap(int year) {
            return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
        }

        int main() {
            int y, m, d, ans = 0;
            cin >> y >> m >> d;

            for (int year = 2000; year <= y; year++) {
                if (leap(year)) month[2] = 29;
                else month[2] = 28;

                for (int mo = 1; mo <= 12; mo++) {
                    for (int day = 1; day <= month[mo]; day++) {
                        int y1 = year / 1000;
                        int y2 = year / 100 % 10;
                        int y3 = year / 10 % 10;
                        int y4 = year % 10;
                        int m1 = mo / 10;
                        int m2 = mo % 10;
                        int d1 = day / 10;
                        int d2 = day % 10;

                        if (bh[y1] + bh[y2] + bh[y3] + bh[y4]
                            + bh[m1] + bh[m2]
                            + bh[d1] + bh[d2] > 50) {
                            ans++;
                        }

                        if (year == y && mo == m && day == d) {
                            cout << ans;
                            return 0;
                        }
                    }
                }
            }
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.Scanner;

        public class Main {

            static int[] month = {-1, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
            static int[] bh = {13, 1, 2, 3, 5, 4, 4, 2, 2, 2};

            static boolean leap(int year) {
                return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
            }

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                int y = sc.nextInt();
                int m = sc.nextInt();
                int d = sc.nextInt();
                int ans = 0;

                for (int year = 2000; year <= y; year++) {
                    month[2] = leap(year) ? 29 : 28;

                    for (int mo = 1; mo <= 12; mo++) {
                        for (int day = 1; day <= month[mo]; day++) {
                            int y1 = year / 1000;
                            int y2 = year / 100 % 10;
                            int y3 = year / 10 % 10;
                            int y4 = year % 10;
                            int m1 = mo / 10;
                            int m2 = mo % 10;
                            int d1 = day / 10;
                            int d2 = day % 10;

                            if (bh[y1] + bh[y2] + bh[y3] + bh[y4]
                                + bh[m1] + bh[m2]
                                + bh[d1] + bh[d2] > 50) {
                                ans++;
                            }

                            if (year == y && mo == m && day == d) {
                                System.out.println(ans);
                                return;
                            }
                        }
                    }
                }
            }
        }
        ```

    === "Python"
        ```python
        month = [-1, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        bh = [13, 1, 2, 3, 5, 4, 4, 2, 2, 2]

        def leap(year: int) -> bool:
            return year % 400 == 0 or (year % 4 == 0 and year % 100 != 0)

        y, m, d = map(int, input().split())
        ans = 0

        for year in range(2000, y + 1):
            month[2] = 29 if leap(year) else 28
            for mo in range(1, 13):
                for day in range(1, month[mo] + 1):
                    y1 = year // 1000
                    y2 = year // 100 % 10
                    y3 = year // 10 % 10
                    y4 = year % 10
                    m1 = mo // 10
                    m2 = mo % 10
                    d1 = day // 10
                    d2 = day % 10

                    if (bh[y1] + bh[y2] + bh[y3] + bh[y4]
                        + bh[m1] + bh[m2]
                        + bh[d1] + bh[d2] > 50):
                        ans += 1

                    if year == y and mo == m and day == d:
                        print(ans)
                        exit()
        ```

#### 例题2

[自建OJ：Z字形扫描](http://47.121.118.174/p/541)

#### 代码实现

???+ example "参考实现"
    === "C++"
        ```cpp
        #include <bits/stdc++.h>
        using namespace std;

        const int N = 5e2 + 10;
        int a[N][N];
        int n;

        int main() {
            cin >> n;
            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= n; j++) {
                    cin >> a[i][j];
                }
            }

            for (int i = 1; i <= 2 * n - 1; i++) {
                if (i % 2 == 1) {
                    int x = i, y = 1;
                    for (int j = 1; j <= i; j++) {
                        if (x >= 1 && x <= n && y >= 1 && y <= n) {
                            cout << a[x][y] << " ";
                        }
                        x--;
                        y++;
                    }
                } else {
                    int x = 1, y = i;
                    for (int j = 1; j <= i; j++) {
                        if (x >= 1 && x <= n && y >= 1 && y <= n) {
                            cout << a[x][y] << " ";
                        }
                        x++;
                        y--;
                    }
                }
            }
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.Scanner;

        public class Main {

            static final int N = 500 + 10;
            static int[][] a = new int[N][N];

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                int n = sc.nextInt();

                for (int i = 1; i <= n; i++) {
                    for (int j = 1; j <= n; j++) {
                        a[i][j] = sc.nextInt();
                    }
                }

                for (int i = 1; i <= 2 * n - 1; i++) {
                    if (i % 2 == 1) {
                        int x = i, y = 1;
                        for (int j = 1; j <= i; j++) {
                            if (x >= 1 && x <= n && y >= 1 && y <= n) {
                                System.out.print(a[x][y] + " ");
                            }
                            x--;
                            y++;
                        }
                    } else {
                        int x = 1, y = i;
                        for (int j = 1; j <= i; j++) {
                            if (x >= 1 && x <= n && y >= 1 && y <= n) {
                                System.out.print(a[x][y] + " ");
                            }
                            x++;
                            y--;
                        }
                    }
                }
            }
        }
        ```

    === "Python"
        ```python
        n = int(input())
        a = [[0] * (n + 1) for _ in range(n + 1)]

        for i in range(1, n + 1):
            row = list(map(int, input().split()))
            for j in range(1, n + 1):
                a[i][j] = row[j - 1]

        for i in range(1, 2 * n):
            if i % 2 == 1:
                x, y = i, 1
                for _ in range(i):
                    if 1 <= x <= n and 1 <= y <= n:
                        print(a[x][y], end=" ")
                    x -= 1
                    y += 1
            else:
                x, y = 1, i
                for _ in range(i):
                    if 1 <= x <= n and 1 <= y <= n:
                        print(a[x][y], end=" ")
                    x += 1
                    y -= 1
        ```


## 练习题单

??? tip "模拟"
    - [自建OJ：消除类游戏](http://47.121.118.174/p/546)
    - [自建OJ：俄罗斯方块](http://47.121.118.174/p/548)
    - [自建OJ：火车购票](http://47.121.118.174/p/555)
    - [自建OJ：日期相加](http://47.121.118.174/p/595)
    - [自建OJ：回文日期](http://47.121.118.174/p/599)
    - [洛谷：不完整的算式](https://www.luogu.com.cn/problem/P12219)
    - [洛谷：田忌赛马](https://www.luogu.com.cn/problem/B3928)
    - [洛谷：黑白方块](https://www.luogu.com.cn/problem/B4040)
    - [洛谷：多项式输出](https://www.luogu.com.cn/problem/P1067)


## 视频讲解

??? info "🎥 视频讲解"
    <iframe 
      src="https://player.bilibili.com/player.html?bvid=BV1BTr5BuEAr"
      scrolling="no" 
      frameborder="0" 
      allowfullscreen="true"
      width="100%" 
      height="500">
    </iframe>

## 枚举

枚举是指用循环的方式遍历问题中的全部情况，然后一一验证是否符合要求。

#### 例题1

[洛谷：求回文数](https://www.luogu.com.cn/problem/B3882)

#### 代码实现

???+ example "参考实现"
    === "C++"
        ```cpp
        #include <bits/stdc++.h>
        using namespace std;

        bool check(int x) {
            string s = " " + to_string(x);
            int l = 1, r = s.size() - 1;
            while (l < r) {
                if (s[l] != s[r]) return false;
                l++;
                r--;
            }
            return true;
        }

        int main() {
            int n, ans = 0;
            cin >> n;
            for (int i = 1; i <= n; i++) {
                if (check(i)) ans++;
            }
            cout << ans;
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.Scanner;

        public class Main {

            static boolean check(int x) {
                String s = " " + Integer.toString(x);
                int l = 1, r = s.length() - 1;
                while (l < r) {
                    if (s.charAt(l) != s.charAt(r)) {
                        return false;
                    }
                    l++;
                    r--;
                }
                return true;
            }

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                int n = sc.nextInt();
                int ans = 0;
                for (int i = 1; i <= n; i++) {
                    if (check(i)) ans++;
                }
                System.out.println(ans);
            }
        }
        ```

    === "Python"
        ```python
        def check(x: int) -> bool:
            s = " " + str(x)
            l, r = 1, len(s) - 1
            while l < r:
                if s[l] != s[r]:
                    return False
                l += 1
                r -= 1
            return True


        n = int(input())
        ans = 0
        for i in range(1, n + 1):
            if check(i):
                ans += 1
        print(ans)
        ```


#### 例题2

[洛谷：好数](https://www.luogu.com.cn/problem/P10424)

#### 代码实现

???+ example "参考实现"
    === "C++"
        ```cpp
        #include <bits/stdc++.h>
        using namespace std;

        bool check(int x) {
            int cnt = 1; // 从个位开始，第 1 位
            while (x) {
                int d = x % 10;
                if (cnt % 2 == 0) { // 偶数位
                    if (d % 2 != 0) return false;
                } else { // 奇数位
                    if (d % 2 == 0) return false;
                }
                x /= 10;
                cnt++;
            }
            return true;
        }

        int main() {
            int n, ans = 0;
            cin >> n;
            for (int i = 1; i <= n; i++) {
                if (check(i)) ans++;
            }
            cout << ans;
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.Scanner;

        public class Main {

            static boolean check(int x) {
                int cnt = 1; // 从个位开始
                while (x > 0) {
                    int d = x % 10;
                    if (cnt % 2 == 0) { // 偶数位
                        if (d % 2 != 0) return false;
                    } else { // 奇数位
                        if (d % 2 == 0) return false;
                    }
                    x /= 10;
                    cnt++;
                }
                return true;
            }

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                int n = sc.nextInt();
                int ans = 0;
                for (int i = 1; i <= n; i++) {
                    if (check(i)) ans++;
                }
                System.out.println(ans);
            }
        }
        ```

    === "Python"
        ```python
        def check(x: int) -> bool:
            cnt = 1  # 从个位开始
            while x > 0:
                d = x % 10
                if cnt % 2 == 0:  # 偶数位
                    if d % 2 != 0:
                        return False
                else:  # 奇数位
                    if d % 2 == 0:
                        return False
                x //= 10
                cnt += 1
            return True


        n = int(input())
        ans = 0
        for i in range(1, n + 1):
            if check(i):
                ans += 1
        print(ans)
        ```
#### 例题3

[自建OJ：小蓝的漆房](http://47.121.118.174/p/597)

#### 代码实现

???+ example "参考实现"
    === "C++"
        ```cpp
        #include <bits/stdc++.h>
        using namespace std;

        int n, k, t;
        int a[10010];

        int main() {
            cin >> t;
            while (t--) {
                cin >> n >> k;
                for (int i = 1; i <= n; i++) {
                    cin >> a[i];
                }

                int ans = 0x3f3f3f3f;
                for (int color = 1; color <= 60; color++) {
                    int cnt = 0;
                    for (int j = 1; j <= n; j++) {
                        if (a[j] != color) {
                            cnt++;
                            j += k - 1;
                        }
                    }
                    ans = min(ans, cnt);
                }

                cout << ans << '\n';
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

                int t = sc.nextInt();
                while (t-- > 0) {
                    int n = sc.nextInt();
                    int k = sc.nextInt();
                    int[] a = new int[n + 1];

                    for (int i = 1; i <= n; i++) {
                        a[i] = sc.nextInt();
                    }

                    int ans = 0x3f3f3f3f;
                    for (int color = 1; color <= 60; color++) {
                        int cnt = 0;
                        for (int j = 1; j <= n; j++) {
                            if (a[j] != color) {
                                cnt++;
                                j += k - 1;
                            }
                        }
                        ans = Math.min(ans, cnt);
                    }

                    System.out.println(ans);
                }
            }
        }
        ```

    === "Python"
        ```python
        t = int(input())
        for _ in range(t):
            n, k = map(int, input().split())
            a = [0] + list(map(int, input().split()))

            ans = 10**9
            for color in range(1, 61):
                cnt = 0
                j = 1
                while j <= n:
                    if a[j] != color:
                        cnt += 1
                        j += k
                    else:
                        j += 1
                ans = min(ans, cnt)

            print(ans)
        ```

## 练习题单

??? tip "枚举"
    - [洛谷：评委打分](https://www.luogu.com.cn/problem/P8830)
    - [洛谷：最大正方形](https://www.luogu.com.cn/problem/P1387)
    - [洛谷：涂条纹](https://www.luogu.com.cn/problem/P3392)
    - [洛谷：黑白方块](https://www.luogu.com.cn/problem/B4040)
    - [洛谷：回文拼接](https://www.luogu.com.cn/problem/B4039)
    - [自建OJ：钥匙与箱子](http://47.121.118.174/p/601)
    - [洛谷：递增三元组](https://www.luogu.com.cn/problem/P8667)


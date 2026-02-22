## 左右指针

左右指针是指两个指针分别从序列的两端开始，向中间移动，用来查找满足条件的元素或区间。

#### 例题1

[自建OJ：两数之和](http://47.121.118.174/p/54)

#### 代码实现

??? example "参考实现"
    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        const int N = 200005;

        int n, x;
        int a[N];

        int main() {
            cin >> n >> x;

            for (int i = 1; i <= n; i++) {
                cin >> a[i];
            }

            int l = 1;
            int r = n;
            int ans = 0;

            while (l < r) {
                if (a[l] + a[r] == x) {
                    ans++;
                    l++;
                }
                else if (a[l] + a[r] > x) {
                    r--;
                }
                else {
                    l++;
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

            static final int N = 200005;

            static int n, x;
            static int[] a = new int[N];

            public static void main(String[] args) {

                Scanner sc = new Scanner(System.in);

                n = sc.nextInt();
                x = sc.nextInt();

                for (int i = 1; i <= n; i++) {
                    a[i] = sc.nextInt();
                }

                int l = 1;
                int r = n;
                int ans = 0;

                while (l < r) {
                    if (a[l] + a[r] == x) {
                        ans++;
                        l++;
                    }
                    else if (a[l] + a[r] > x) {
                        r--;
                    }
                    else {
                        l++;
                    }
                }

                System.out.println(ans);

            }

        }
        ```

    === "Python"
        ```python
        import sys

        input = sys.stdin.readline

        N = 200005

        a = [0] * N

        n, x = map(int, input().split())

        arr = list(map(int, input().split()))
        for i in range(1, n + 1):
            a[i] = arr[i - 1]

        l = 1
        r = n
        ans = 0

        while l < r:
            if a[l] + a[r] == x:
                ans += 1
                l += 1
            elif a[l] + a[r] > x:
                r -= 1
            else:
                l += 1

        print(ans)
        ```

## 快慢指针

快慢指针又名滑动窗口，用一个快指针和一个慢指针同步移动，来找到符合答案的区间。

#### 例题2

[自建OJ：和不超过S的最长序列](http://47.121.118.174/p/820)

#### 代码实现
??? example "参考实现"
    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        const int N = 100005;

        int a[N], ans = 0;

        int main() {
            int n, m;
            cin >> n >> m;
            for (int i = 1; i <= n; i++) {
                cin >> a[i];
            }
            int l = 1, r = 0, sum = 0;
            for (; l <= n; l++) {
                while (r < n) {
                    r++;
                    sum += a[r];
                    if (sum > m) {
                        sum -= a[r];
                        r--;
                        break;
                    }
                }
                ans = max(ans, r - l + 1);
                sum -= a[l];
            }
            cout << ans;
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.Scanner;

        public class Main {

            static final int N = 100005;

            static int[] a = new int[N];
            static int ans = 0;

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                int n = sc.nextInt();
                int m = sc.nextInt();
                for (int i = 1; i <= n; i++) {
                    a[i] = sc.nextInt();
                }
                int l = 1, r = 0, sum = 0;
                for (; l <= n; l++) {
                    while (r < n) {
                        r++;
                        sum += a[r];
                        if (sum > m) {
                            sum -= a[r];
                            r--;
                            break;
                        }
                    }
                    ans = Math.max(ans, r - l + 1);
                    sum -= a[l];
                }
                System.out.println(ans);
            }

        }
        ```

    === "Python"
        ```python
        import sys

        input = sys.stdin.readline

        N = 100005

        a = [0] * N
        ans = 0

        n, m = map(int, input().split())
        arr = list(map(int, input().split()))
        for i in range(1, n + 1):
            a[i] = arr[i - 1]

        l, r, sum = 1, 0, 0
        while l <= n:
            while r < n:
                r += 1
                sum += a[r]
                if sum > m:
                    sum -= a[r]
                    r -= 1
                    break
            ans = max(ans, r - l + 1)
            sum -= a[l]
            l += 1

        print(ans)
        ```



#### 例题3

[自建OJ：无重复字符的最长子串](http://47.121.118.174/p/74)

#### 代码实现


??? example "参考实现"
    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        const int N = 200005;

        int n, ans = 0;
        string a;
        int cnt[200];

        int main() {
            cin >> n >> a;
            a = " " + a;
            int l = 1, r = 0;
            for (; l <= n; l++) {
                while (r < n) {
                    r++;
                    cnt[a[r]]++;
                    if (cnt[a[r]] > 1) {
                        cnt[a[r]]--;
                        r--;
                        break;
                    }
                }
                ans = max(ans, r - l + 1);
                cnt[a[l]]--;
            }
            cout << ans;
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.Scanner;

        public class Main {

            static final int N = 200005;

            static int n, ans = 0;
            static String a;
            static int[] cnt = new int[200];

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                n = sc.nextInt();
                a = sc.next();
                a = " " + a;
                int l = 1, r = 0;
                for (; l <= n; l++) {
                    while (r < n) {
                        r++;
                        cnt[a.charAt(r)]++;
                        if (cnt[a.charAt(r)] > 1) {
                            cnt[a.charAt(r)]--;
                            r--;
                            break;
                        }
                    }
                    ans = Math.max(ans, r - l + 1);
                    cnt[a.charAt(l)]--;
                }
                System.out.println(ans);
            }

        }
        ```

    === "Python"
        ```python
        import sys

        input = sys.stdin.readline

        cnt = [0] * 200

        n = int(input())
        a = input().strip()
        a = " " + a

        ans = 0
        l, r = 1, 0

        while l <= n:
            while r < n:
                r += 1
                cnt[ord(a[r])] += 1
                if cnt[ord(a[r])] > 1:
                    cnt[ord(a[r])] -= 1
                    r -= 1
                    break
            ans = max(ans, r - l + 1)
            cnt[ord(a[l])] -= 1
            l += 1

        print(ans)
        ```
## 练习题单

??? tip "左右指针"
    - [自建OJ：判断字符串是否为回文](http://47.121.118.174/p/319)
    - [洛谷：玩具](https://www.luogu.com.cn/problem/P12218)
    - [洛谷：消消乐](https://www.luogu.com.cn/problem/P12341)

??? tip "快慢指针"
    - [自建OJ：美丽区间](http://47.121.118.174/p/436)
    - [自建OJ：和不超过S的最长序列](http://47.121.118.174/p/820)
    - [自建OJ：宝箱](http://47.121.118.174/p/168)
    - [自建OJ：等腰三角形](http://47.121.118.174/p/15)
    - [自建OJ：神奇子数组](http://47.121.118.174/p/435)
    - [自建OJ：满足条件的子序列数量](http://47.121.118.174/p/679)
    - [自建OJ：相似公约数](http://47.121.118.174/p/433)
    - [自建OJ：数三角形](http://47.121.118.174/p/794)


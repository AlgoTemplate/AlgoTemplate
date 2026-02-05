## 队列

队列是一种先进先出（FIFO）的数据结构。

#### 模板题

[自建OJ：模拟队列](http://47.121.118.174/p/57)

#### 代码实现

???+ example "手写实现"
    === "C++"
        ```cpp
        #include <bits/stdc++.h>
        using namespace std;

        const int N = 1e5 + 10;
        int q[N];
        int hh, tt;
        int n;

        int main() {
            cin >> n;
            while (n--) {
                string s;
                cin >> s;
                if (s == "push") {
                    int x;
                    cin >> x;
                    q[tt++] = x;
                } else if (s == "pop") {
                    if (hh != tt) {
                        hh++;
                    }
                } else if (s == "empty") {
                    if (hh == tt) {
                        cout << "YES\n";
                    } else {
                        cout << "NO\n";
                    }
                } else { // query
                    if (hh == tt) {
                        cout << "empty\n";
                    } else {
                        cout << q[hh] << "\n";
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

            static final int N = 100000 + 10;
            static int[] q = new int[N];
            static int hh = 0, tt = 0;

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                int n = sc.nextInt();

                while (n-- > 0) {
                    String s = sc.next();
                    if (s.equals("push")) {
                        int x = sc.nextInt();
                        q[tt++] = x;
                    } else if (s.equals("pop")) {
                        if (hh != tt) {
                            hh++;
                        }
                    } else if (s.equals("empty")) {
                        if (hh == tt) {
                            System.out.println("YES");
                        } else {
                            System.out.println("NO");
                        }
                    } else { // query
                        if (hh == tt) {
                            System.out.println("empty");
                        } else {
                            System.out.println(q[hh]);
                        }
                    }
                }
            }
        }
        ```

    === "Python"
        ```python
        N = 100000 + 10
        q = [0] * N
        hh = 0
        tt = 0

        n = int(input())
        for _ in range(n):
            s = input().split()
            if s[0] == "push":
                q[tt] = int(s[1])
                tt += 1
            elif s[0] == "pop":
                if hh != tt:
                    hh += 1
            elif s[0] == "empty":
                if hh == tt:
                    print("YES")
                else:
                    print("NO")
            else:  # query
                if hh == tt:
                    print("empty")
                else:
                    print(q[hh])
        ```


???+ example "模板库实现"
    === "C++"
        ```cpp
        #include <bits/stdc++.h>
        using namespace std;

        queue<int> q;

        int main()
        {
            int m;
            cin >> m;

            while (m--)
            {
                string s;
                cin >> s;

                int x;

                if (s == "empty")
                {
                    if (q.empty())
                    {
                        cout << "YES\n";
                    }
                    else
                    {
                        cout << "NO\n";
                    }
                }
                else if (s == "push")
                {
                    cin >> x;
                    q.push(x);
                }
                else if (s == "query")
                {
                    if (q.empty())
                    {
                        cout << "empty\n";
                    }
                    else
                    {
                        cout << q.front() << "\n";
                    }
                }
                else if (s == "pop")
                {
                    if (!q.empty())
                    {
                        q.pop();
                    }
                }
            }

            return 0;
        }

        ```

    === "Java"
        ```java
        import java.util.LinkedList;
        import java.util.Queue;
        import java.util.Scanner;

        public class Main {

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                Queue<Integer> q = new LinkedList<>();

                int m = sc.nextInt();
                while (m-- > 0) {
                    String s = sc.next();
                    if (s.equals("empty")) {
                        if (q.isEmpty()) System.out.println("YES");
                        else System.out.println("NO");
                    } else if (s.equals("push")) {
                        int x = sc.nextInt();
                        q.offer(x);
                    } else if (s.equals("query")) {
                        if (q.isEmpty()) System.out.println("empty");
                        else System.out.println(q.peek());
                    } else if (s.equals("pop")) {
                        if (!q.isEmpty()) q.poll();
                    }
                }
            }
        }
        ```

    === "Python"
        ```python
        from collections import deque

        q = deque()

        m = int(input())
        for _ in range(m):
            s = input().split()
            if s[0] == "empty":
                print("YES" if not q else "NO")
            elif s[0] == "push":
                q.append(int(s[1]))
            elif s[0] == "query":
                if not q:
                    print("empty")
                else:
                    print(q[0])
            elif s[0] == "pop":
                if q:
                    q.popleft()
        ```

## 练习题单

??? tip "队列"
    - [洛谷：分布式队列](https://www.luogu.com.cn/problem/P11043)
    - [洛谷：[CSP-J 2019] 公交换乘](https://www.luogu.com.cn/problem/P5661)
    - [洛谷：占卜](https://www.luogu.com.cn/problem/P10457)

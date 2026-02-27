## 广度优先搜索

BFS（广度优先搜索）是一种从起点开始，按距离从近到远逐层扩展节点，并使用队列实现的图或状态遍历算法。常用于等权值最短路、最小操作次数等问题。


#### 例题1

[自建OJ：离开中山路](http://47.121.118.174/p/131)


#### 代码实现

??? example "参考实现"
    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        const int N = 1005;

        int n;
        char g[N][N];
        int dist[N][N];
        int dx[] = {0,1,0,-1}, dy[] = {1,0,-1,0};

        struct Node {
            int x, y;
        };

        int main() {
            cin >> n;
            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= n; j++) {
                    cin >> g[i][j];
                    dist[i][j] = -1;
                }
            }
            int x1, y1, x2, y2;
            cin >> x1 >> y1 >> x2 >> y2;
            queue<Node> q;
            q.push({x1, y1});
            dist[x1][y1] = 0;
            while (!q.empty()) {
                Node t = q.front(); q.pop();
                int x = t.x, y = t.y;
                if (x == x2 && y == y2) {
                    cout << dist[x][y];
                    return 0;
                }
                for (int i = 0; i < 4; i++) {
                    int nx = x + dx[i], ny = y + dy[i];
                    if (nx < 1 || nx > n || ny < 1 || ny > n) continue;
                    if (g[nx][ny] == '1') continue;
                    if (dist[nx][ny] != -1) continue;
                    dist[nx][ny] = dist[x][y] + 1;
                    q.push({nx, ny});
                }
            }
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main {

            static final int N = 1005;

            static int n;
            static char[][] g = new char[N][N];
            static int[][] dist = new int[N][N];
            static int[] dx = {0,1,0,-1}, dy = {1,0,-1,0};

            static class Node {
                int x, y;
                Node(int x, int y) {
                    this.x = x;
                    this.y = y;
                }
            }

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                n = sc.nextInt();
                for (int i = 1; i <= n; i++) {
                    String s = sc.next();
                    for (int j = 1; j <= n; j++) {
                        g[i][j] = s.charAt(j - 1);
                        dist[i][j] = -1;
                    }
                }
                int x1 = sc.nextInt(), y1 = sc.nextInt();
                int x2 = sc.nextInt(), y2 = sc.nextInt();
                Queue<Node> q = new LinkedList<>();
                q.add(new Node(x1, y1));
                dist[x1][y1] = 0;
                while (!q.isEmpty()) {
                    Node t = q.poll();
                    int x = t.x, y = t.y;
                    if (x == x2 && y == y2) {
                        System.out.println(dist[x][y]);
                        return;
                    }
                    for (int i = 0; i < 4; i++) {
                        int nx = x + dx[i], ny = y + dy[i];
                        if (nx < 1 || nx > n || ny < 1 || ny > n) continue;
                        if (g[nx][ny] == '1') continue;
                        if (dist[nx][ny] != -1) continue;
                        dist[nx][ny] = dist[x][y] + 1;
                        q.add(new Node(nx, ny));
                    }
                }
            }

        }
        ```

    === "Python"
        ```python
        import sys
        from collections import deque

        input = sys.stdin.readline

        N = 1005

        g = [[''] * N for _ in range(N)]
        dist = [[-1] * N for _ in range(N)]

        dx = [0,1,0,-1]
        dy = [1,0,-1,0]

        n = int(input())

        for i in range(1, n + 1):
            s = input().strip()
            for j in range(1, n + 1):
                g[i][j] = s[j - 1]
                dist[i][j] = -1

        x1, y1, x2, y2 = map(int, input().split())

        q = deque()
        q.append((x1, y1))
        dist[x1][y1] = 0

        while q:
            x, y = q.popleft()
            if x == x2 and y == y2:
                print(dist[x][y])
                break
            for i in range(4):
                nx, ny = x + dx[i], y + dy[i]
                if nx < 1 or nx > n or ny < 1 or ny > n:
                    continue
                if g[nx][ny] == '1':
                    continue
                if dist[nx][ny] != -1:
                    continue
                dist[nx][ny] = dist[x][y] + 1
                q.append((nx, ny))
        ```

#### 例题2

[自建OJ：最少操作数](http://47.121.118.174/p/494)

#### 代码实现
??? example "参考实现"
    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        const int N = 400010;

        int a, b;
        int d[N];

        int main() {
            cin >> a >> b;
            memset(d, -1, sizeof d);
            queue<int> q;
            q.push(a);
            d[a] = 0;
            while (!q.empty()) {
                int t = q.front(); q.pop();
                if (t == b) {
                    cout << d[t];
                    return 0;
                }
                if (t + 1 < N && d[t + 1] == -1) {
                    d[t + 1] = d[t] + 1;
                    q.push(t + 1);
                }
                if (t - 1 >= 0 && d[t - 1] == -1) {
                    d[t - 1] = d[t] + 1;
                    q.push(t - 1);
                }
                if (t * 2 < N && d[t * 2] == -1) {
                    d[t * 2] = d[t] + 1;
                    q.push(t * 2);
                }
            }
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main {

            static final int N = 400010;
            static int[] d = new int[N];

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                int a = sc.nextInt(), b = sc.nextInt();
                Arrays.fill(d, -1);
                Queue<Integer> q = new LinkedList<>();
                q.add(a);
                d[a] = 0;
                while (!q.isEmpty()) {
                    int t = q.poll();
                    if (t == b) {
                        System.out.println(d[t]);
                        return;
                    }
                    if (t + 1 < N && d[t + 1] == -1) {
                        d[t + 1] = d[t] + 1;
                        q.add(t + 1);
                    }
                    if (t - 1 >= 0 && d[t - 1] == -1) {
                        d[t - 1] = d[t] + 1;
                        q.add(t - 1);
                    }
                    if (t * 2 < N && d[t * 2] == -1) {
                        d[t * 2] = d[t] + 1;
                        q.add(t * 2);
                    }
                }
            }

        }
        ```

    === "Python"
        ```python
        import sys
        from collections import deque

        input = sys.stdin.readline

        N = 400010
        d = [-1] * N

        a, b = map(int, input().split())

        q = deque()
        q.append(a)
        d[a] = 0

        while q:
            t = q.popleft()
            if t == b:
                print(d[t])
                break
            if t + 1 < N and d[t + 1] == -1:
                d[t + 1] = d[t] + 1
                q.append(t + 1)
            if t - 1 >= 0 and d[t - 1] == -1:
                d[t - 1] = d[t] + 1
                q.append(t - 1)
            if t * 2 < N and d[t * 2] == -1:
                d[t * 2] = d[t] + 1
                q.append(t * 2)
        ```

#### 例题3
[洛谷：奇怪的电梯](https://www.luogu.com.cn/problem/P1135)
#### 代码实现
??? example "参考实现"
    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        const int N = 210;

        int n, A, B;
        int k[N];
        int dist[N];

        int main() {
            cin >> n >> A >> B;
            for (int i = 1; i <= n; i++) cin >> k[i];
            memset(dist, -1, sizeof dist);
            queue<int> q;
            q.push(A);
            dist[A] = 0;
            while (!q.empty()) {
                int u = q.front(); q.pop();
                if (u == B) {
                    cout << dist[u];
                    return 0;
                }
                int up = u + k[u];
                if (up >= 1 && up <= n && dist[up] == -1) {
                    dist[up] = dist[u] + 1;
                    q.push(up);
                }
                int down = u - k[u];
                if (down >= 1 && down <= n && dist[down] == -1) {
                    dist[down] = dist[u] + 1;
                    q.push(down);
                }
            }
            cout << -1;
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main {

            static final int N = 210;

            static int n, A, B;
            static int[] k = new int[N];
            static int[] dist = new int[N];

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                n = sc.nextInt();
                A = sc.nextInt();
                B = sc.nextInt();
                for (int i = 1; i <= n; i++) k[i] = sc.nextInt();
                Arrays.fill(dist, -1);
                Queue<Integer> q = new LinkedList<>();
                q.add(A);
                dist[A] = 0;
                while (!q.isEmpty()) {
                    int u = q.poll();
                    if (u == B) {
                        System.out.println(dist[u]);
                        return;
                    }
                    int up = u + k[u];
                    if (up >= 1 && up <= n && dist[up] == -1) {
                        dist[up] = dist[u] + 1;
                        q.add(up);
                    }
                    int down = u - k[u];
                    if (down >= 1 && down <= n && dist[down] == -1) {
                        dist[down] = dist[u] + 1;
                        q.add(down);
                    }
                }
                System.out.println(-1);
            }

        }
        ```

    === "Python"
        ```python
        import sys
        from collections import deque

        input = sys.stdin.readline

        N = 210

        n, A, B = map(int, input().split())
        k = [0] + list(map(int, input().split()))
        dist = [-1] * N

        q = deque()
        q.append(A)
        dist[A] = 0

        while q:
            u = q.popleft()
            if u == B:
                print(dist[u])
                sys.exit()
            up = u + k[u]
            if 1 <= up <= n and dist[up] == -1:
                dist[up] = dist[u] + 1
                q.append(up)
            down = u - k[u]
            if 1 <= down <= n and dist[down] == -1:
                dist[down] = dist[u] + 1
                q.append(down)

        print(-1)
        ```

## 练习题单

??? tip "广度优先搜索"
    - [洛谷：马的遍历](https://www.luogu.com.cn/problem/P1443)
    - [自建OJ：岛屿的数量](http://47.121.118.174/p/33)
    - [自建OJ：吃豆子](http://47.121.118.174/p/7)
    - [自建OJ：细胞](http://47.121.118.174/p/163)
    - [自建OJ：餐厅](http://47.121.118.174/p/525)
    - [自建OJ：起火迷宫](http://47.121.118.174/p/524)
    - [自建OJ：获得的新技能](http://47.121.118.174/p/682)
    - [自建OJ：找倍数](http://47.121.118.174/p/523)
    - [自建OJ：八数码](http://47.121.118.174/p/30)
    - [洛谷：旋转九宫格](https://www.luogu.com.cn/problem/P10578)
    - [洛谷：十字键盘](https://www.luogu.com.cn/problem/P14338)

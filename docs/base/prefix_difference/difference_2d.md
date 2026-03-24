#### 例题1

[自建OJ：二维差分](http://47.121.118.174/p/41)

#### 代码实现

???+ example "参考实现"

    === "C++"
        ```c++
        #include <iostream>
        using namespace std;
        int a[1010][1010];
        int b[1010][1010];
        int main()
        {
            int n,m,q;
            scanf("%d %d %d",&n,&m,&q);
            for(int i=1;i<=n;i++){
                for(int j=1;j<=m;j++){
                    scanf("%d",&a[i][j]);
                }
            }
            for(int i=1;i<=n;i++){
                for(int j=1;j<=m;j++){
                    b[i][j]=a[i][j]-a[i-1][j]-a[i][j-1]+a[i-1][j-1];
                }
            }
            for(int i=1;i<=q;i++){
                int x1,y1,x2,y2,d;
                scanf("%d %d %d %d %d",&x1,&y1,&x2,&y2,&d);
                b[x1][y1]+=d;
                b[x2+1][y1]-=d;
                b[x1][y2+1]-=d;
                b[x2+1][y2+1]+=d; 
            }
            for(int i=1;i<=n;i++){
                for(int j=1;j<=m;j++){
                    b[i][j]=b[i][j]+b[i-1][j]+b[i][j-1]-b[i-1][j-1];
                    printf("%d ",b[i][j]);
                }
                printf("\n"); 
            } 
        }
        ```
    === "Java"
        ```java
        import java.util.Scanner;

        public class Main {
            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                int n = sc.nextInt();
                int m = sc.nextInt();
                int q = sc.nextInt();
                int[][] a = new int[n + 1][m + 1];
                int[][] b = new int[n + 1][m + 1];

                for (int i = 1; i <= n; i++) {
                    for (int j = 1; j <= m; j++) {
                        a[i][j] = sc.nextInt();
                    }
                }

                for (int i = 1; i <= n; i++) {
                    for (int j = 1; j <= m; j++) {
                        b[i][j] = a[i][j] - a[i - 1][j] - a[i][j - 1] + a[i - 1][j - 1];
                    }
                }

                for (int i = 1; i <= q; i++) {
                    int x1 = sc.nextInt();
                    int y1 = sc.nextInt();
                    int x2 = sc.nextInt();
                    int y2 = sc.nextInt();
                    int d = sc.nextInt();
                    b[x1][y1] += d;
                    b[x2 + 1][y1] -= d;
                    b[x1][y2 + 1] -= d;
                    b[x2 + 1][y2 + 1] += d;
                } 
                for (int i = 1; i <= n; i++) {
                    for (int j = 1; j <= m; j++) {
                        b[i][j] = b[i][j] + b[i - 1][j] + b[i][j - 1] - b[i - 1][j - 1];
                        System.out.print(b[i][j] + " "); 
                    } 
                    System.out.println();
                }
            }  
        }
        ```
    === "Python"
        ```python
        n, m, q = map(int, input().split())
        a = [[0] * (m + 1) for _ in range(n + 1)]
        b = [[0] * (m + 1) for _ in range(n + 1)]

        for i in range(1, n + 1):
            row = list(map(int, input().split()))
            for j in range(1, m + 1):
                a[i][j] = row[j - 1]
                b[i][j] = a[i][j] - a[i - 1][j] - a[i][j - 1] + a[i - 1][j - 1]

        for _ in range(q):
            x1, y1, x2, y2, d = map(int, input().split())
            b[x1][y1] += d
            b[x2 + 1][y1] -= d
            b[x1][y2 + 1] -= d
            b[x2 + 1][y2 + 1] += d

        for i in range(1, n + 1):
            for j in range(1, m + 1):
                b[i][j] = b[i][j] + b[i - 1][j] + b[i][j - 1] - b[i - 1][j - 1]
                print(b[i][j], end=" ")
            print()
        ```
        
## 练习题单

??? tip "二维差分"
    - [ ] [洛谷：地毯](https://www.luogu.com.cn/problem/P3397)
    - [ ] [洛谷：棋盘](https://www.luogu.com.cn/problem/P13879)
    - [ ] [洛谷：油漆面积](https://www.luogu.com.cn/problem/P8648)
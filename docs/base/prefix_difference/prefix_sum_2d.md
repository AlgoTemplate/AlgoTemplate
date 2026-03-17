#### 例题1

[自建OJ：二维前缀和](http://47.121.118.174/p/42)

#### 代码实现
???+ example "参考实现"

    === "C++"
        ```c++
        #include <iostream>
        using namespace std;
        int a[1010][1010];
        int s[1010][1010];
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
                    s[i][j]=a[i][j]+s[i-1][j]+s[i][j-1]-s[i-1][j-1];
                } 
            }
            for(int i=1;i<=q;i++){
                int x1,y1,x2,y2;
                scanf("%d %d %d %d",&x1,&y1,&x2,&y2)
                printf("%d\n",s[x2][y2]-s[x1-1][y2]-s[x2][y1-1]+s[x1-1][y1-1]); 
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
                int[][] s = new int[n + 1][m + 1];

                for (int i = 1; i <= n; i++) {
                    for (int j = 1; j <= m; j++) {
                        a[i][j] = sc.nextInt();  
                    }  
                }
                for (int i = 1; i <= n; i++) {
                    for (int j = 1; j <= m; j++) {
                        s[i][j] = a[i][j] + s[i - 1][j] + s[i][j - 1] - s[i - 1][j - 1];
                    } 
                }
                for (int i = 1; i <= q; i++) {
                    int x1 = sc.nextInt();
                    int y1 = sc.nextInt();
                    int x2 = sc.nextInt();
                    int y2 = sc.nextInt();
                    System.out.println(s[x2][y2] - s[x1 - 1][y2] - s[x2][y1 - 1] + s[x1 - 1][y1 - 1]); 
                }
            }  
        }
        ```
    === "Python"
        ```python
        n, m, q = map(int, input().split())
        a = [[0] * (m + 1) for _ in range(n + 1)]
        s = [[0] * (m + 1) for _ in range(n + 1)]

        for i in range(1, n + 1):
            row = list(map(int, input().split()))
            for j in range(1, m + 1):
                a[i][j] = row[j - 1]
                s[i][j] = a[i][j] + s[i - 1][j] + s[i][j - 1] - s[i - 1][j - 1]

        for _ in range(q):
            x1, y1, x2, y2 = map(int, input().split())
            result = s[x2][y2] - s[x1 - 1][y2] - s[x2][y1 - 1] + s[x1 - 1][y1 - 1]
            print(result)
        ```

#### 例题2
[洛谷：领地选择](https://www.luogu.com.cn/problem/P2004)

#### 代码实现

??? example "参考实现"

    === "C++"
        ```cpp
        #include <bits/stdc++.h>
        using namespace std;

        const int N=1005;

        int mp[N][N];
        int sum[N][N];

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            int n,m,c;
            cin>>n>>m>>c;

            for(int i=1;i<=n;i++){
                for(int j=1;j<=m;j++){
                    cin>>mp[i][j];
                }
            }

            for(int i=1;i<=n;i++){
                for(int j=1;j<=m;j++){
                    sum[i][j]=mp[i][j]+sum[i-1][j]+sum[i][j-1]-sum[i-1][j-1];
                }
            }

            int ii=1,jj=1,mx=INT_MIN;

            for(int i=1;i<=n-c+1;i++){
                for(int j=1;j<=m-c+1;j++){
                    int x=sum[i+c-1][j+c-1]
                          -sum[i-1][j+c-1]
                          -sum[i+c-1][j-1]
                          +sum[i-1][j-1];

                    if(x>mx){
                        mx=x;
                        ii=i;
                        jj=j;
                    }
                }
            }

            cout<<ii<<" "<<jj<<"\n";

            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main {

            static final int N=1005;
            static int[][] mp=new int[N][N];
            static int[][] sum=new int[N][N];

            public static void main(String[] args){
                Scanner sc=new Scanner(System.in);

                int n=sc.nextInt();
                int m=sc.nextInt();
                int c=sc.nextInt();

                for(int i=1;i<=n;i++){
                    for(int j=1;j<=m;j++){
                        mp[i][j]=sc.nextInt();
                    }
                }

                for(int i=1;i<=n;i++){
                    for(int j=1;j<=m;j++){
                        sum[i][j]=mp[i][j]+sum[i-1][j]+sum[i][j-1]-sum[i-1][j-1];
                    }
                }

                int ii=1,jj=1,mx=Integer.MIN_VALUE;

                for(int i=1;i<=n-c+1;i++){
                    for(int j=1;j<=m-c+1;j++){
                        int x=sum[i+c-1][j+c-1]
                              -sum[i-1][j+c-1]
                              -sum[i+c-1][j-1]
                              +sum[i-1][j-1];

                        if(x>mx){
                            mx=x;
                            ii=i;
                            jj=j;
                        }
                    }
                }

                System.out.println(ii+" "+jj);
            }
        }
        ```

    === "Python"
        ```python
        n,m,c=map(int,input().split())

        mp=[[0]*(m+1)]
        for _ in range(n):
            mp.append([0]+list(map(int,input().split())))

        sum=[[0]*(m+1) for _ in range(n+1)]

        for i in range(1,n+1):
            for j in range(1,m+1):
                sum[i][j]=mp[i][j]+sum[i-1][j]+sum[i][j-1]-sum[i-1][j-1]

        ii,jj=1,1
        mx=-10**18

        for i in range(1,n-c+2):
            for j in range(1,m-c+2):
                x=sum[i+c-1][j+c-1]-sum[i-1][j+c-1]-sum[i+c-1][j-1]+sum[i-1][j-1]
                if x>mx:
                    mx=x
                    ii,jj=i,j

        print(ii,jj)
        ```

## 练习题单
??? tip "二维前缀和"
    - [ ] [洛谷：最大正方形](https://www.luogu.com.cn/problem/P1387)
    - [ ] [自建OJ：闪耀的灯光](http://47.121.118.174/p/617)
    - [ ] [自建OJ：ROG](http://47.121.118.174/p/618)
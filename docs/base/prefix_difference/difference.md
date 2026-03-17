## 一维差分

可以在 $O(1)$ 的时间内对区间 $[l, r]$ 中的每个数加上一个数 $c$。
#### 例题1

[自建OJ：一维差分](http://47.121.118.174/p/22)

#### 代码实现
???+ example "参考实现"

    === "C++"
        ```c++
        #include<bits/stdc++.h>
        using namespace std;
        const int N=2e5+10;
        int a[N],b[N];
        int n,m;
        int main(){
            scanf("%d%d",&n,&m);
            for(int i=1;i<=n;i++){
                scanf("%d",&a[i]);
                b[i]=a[i]-a[i-1];
            }
            for(int i=1;i<=m;i++){
                int l,r,d;
                scanf("%d%d%d",&l,&r,&d);
                b[l]+=d;
                b[r+1]-=d;
            }
            for(int i=1;i<=n;i++){
                b[i]=b[i-1]+b[i];
                printf("%d ",b[i]);
            }
        } 
        ```
    === "Java"
        ```java
        import java.util.Scanner;

        public class Main {
            public static void main(String[] args) {
                Scanner in = new Scanner(System.in);
                int n = in.nextInt();
                int m = in.nextInt();
                long[] a = new long[n + 1];
                long[] b = new long[n + 2];

                for (int i = 1; i <= n; i++) {
                    a[i] = in.nextLong(); // 输入序列
                    b[i] = a[i] - a[i - 1];
                }

                while (m-- > 0) {
                    int l = in.nextInt();
                    int r = in.nextInt();
                    int d = in.nextInt();
                    b[l] += d;
                    b[r + 1] -= d;
                }

                for (int i = 1; i <= n; i++) {
                    b[i] = b[i - 1] + b[i];
                    System.out.print(b[i] + " ");
                }
                System.out.println();
            }
        }
        ```
    === "Python"
        ```python
        import os
        import sys
        n,m=map(int,input().split())
        a=[0]+list(map(int,input().split()))+[0]#len=n+2
        b=[0]*(n+2)
        for i in range(1,n+1):
            b[i]=a[i]-a[i-1]#差分方程

        for i in  range(0,m):
            l,r,d=map(int,input().split())
            b[l]+=d
            b[r+1]-=d

        for i in range(1,n+1):
            b[i]=b[i]+b[i-1]
            print(b[i],end=" ")
        ```
#### 例题2

[自建OJ：最少操作次数](http://47.121.118.174/p/335)


## 练习题单

??? tip "一维差分"
    - [ ] [洛谷：语文成绩](https://www.luogu.com.cn/problem/P2367)
    - [ ] [洛谷：植树节](https://www.luogu.com.cn/problem/P11853)
    - [ ] [洛谷：Mieszanie kolorów](https://www.luogu.com.cn/problem/P9094)
    - [ ] [洛谷：铺设道路](https://www.luogu.com.cn/problem/P5019)
    - [ ] [洛谷：商品库存管理](https://www.luogu.com.cn/problem/P10903)
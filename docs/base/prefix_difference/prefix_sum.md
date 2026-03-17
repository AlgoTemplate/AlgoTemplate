## 一维前缀和

一维前缀和可以通过 $O(n)$ 的预处理，在 $O(1)$ 的时间内求出数组中一段区间的和。


#### 例题1

[自建OJ：一维前缀和](http://47.121.118.174/p/79)


#### 代码实现
???+ example "参考实现"

    === "C++"
        ```c++
        #include <iostream>
        using namespace std;
        int a[100010];
        int s[100010];
        int main()
        {
            int n,q;
            scanf("%d %d",&n,&q);
            for(int i=1;i<=n;i++){
                scanf("%d",&a[i]);
                s[i]=a[i]+s[i-1];
            }
            for(int i=1;i<=q;i++){
                int l,r;
                scanf("%d%d",&l,&r);
                printf("%d\n",s[r]-s[l-1]);
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
                int n = sc.nextInt();
                int q = sc.nextInt();
                int[] a = new int[n + 1];
                int[] s = new int[n + 1];

                for (int i = 1; i <= n; i++) {
                    a[i] = sc.nextInt();
                    s[i] = a[i] + s[i - 1];
                }

                for (int i = 1; i <= q; i++) {
                    int l = sc.nextInt();
                    int r = sc.nextInt();
                    System.out.println(s[r] - s[l - 1]);
                }
            }
        }
        ```
    === "Python"
        ```python
        n, q = map(int, input().split())
        a = list(map(int, input().split()))
        s = [0] * (n + 1)

        for i in range(1, n + 1):
            s[i] = a[i - 1] + s[i - 1]

        for _ in range(q):
            l, r = map(int, input().split())
            print(s[r] - s[l - 1])
        ```

#### 例题2

[自建OJ：求和](http://47.121.118.174/p/106)

#### 代码实现

??? example "参考实现"

    === "C++"
        ```cpp
        #include<iostream>
        using namespace std;

        const int N = 2e5+10;

        int a[N],s[N];
        int n;

        int main(){
            cin>>n;

            for(int i=1;i<=n;i++) cin>>a[i];

            for(int i=1;i<=n;i++){
                s[i]=s[i-1]+a[i];
            }

            long long res=0;

            for(int i=1;i<n;i++){
                res=res+1ll*a[i]*(s[n]-s[i]);
            }

            cout<<res;

            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main {

            static final int N = 200010;
            static int[] a = new int[N];
            static long[] s = new long[N];

            public static void main(String[] args){
                Scanner sc=new Scanner(System.in);

                int n=sc.nextInt();

                for(int i=1;i<=n;i++){
                    a[i]=sc.nextInt();
                }

                for(int i=1;i<=n;i++){
                    s[i]=s[i-1]+a[i];
                }

                long res=0;

                for(int i=1;i<n;i++){
                    res+=1L*a[i]*(s[n]-s[i]);
                }

                System.out.println(res);
            }
        }
        ```

    === "Python"
        ```python
        n=int(input())
        a=[0]+list(map(int,input().split()))

        s=[0]*(n+1)
        for i in range(1,n+1):
            s[i]=s[i-1]+a[i]

        res=0
        for i in range(1,n):
            res+=a[i]*(s[n]-s[i])

        print(res)
        ```

## 练习题单

???+ tip "一维前缀和"
    - [ ] [洛谷：dx 分计算](https://www.luogu.com.cn/problem/P10233)
    - [ ] [自建OJ：水壶](http://47.121.118.174/p/160)
    - [ ] [自建OJ：等和三分划分方案数](http://47.121.118.174/p/513)
    - [ ] [自建OJ：买花](http://47.121.118.174/p/170)
    - [ ] [自建OJ：前缀异或和](http://47.121.118.174/p/825)
    - [ ] [洛谷：分数线](https://www.luogu.com.cn/problem/B4192)
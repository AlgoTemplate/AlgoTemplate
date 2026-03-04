## 埃氏筛

#### 例题1

[自建OJ：筛素数](http://47.121.118.174/p/17)

#### 代码实现

??? example "埃式筛"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        const int N=1e6+7;
        int primes[N],st[N];
        int n,cnt;
        int main(){
            cin>>n;
            for(int i=2;i<=n;i++){
                if(st[i]==0){
                    primes[cnt++]=i;
                    for(int j=i+i;j<=n;j+=i) st[j]=1;
                }
            }
            cout<<cnt<<endl;
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main {

            static final int N = 1000007;
            static int[] primes = new int[N];
            static boolean[] st = new boolean[N];

            public static void main(String[] args){
                Scanner sc = new Scanner(System.in);
                int n = sc.nextInt();
                int cnt = 0;

                for(int i=2;i<=n;i++){
                    if(!st[i]){
                        primes[cnt++] = i;
                        for(int j=i+i;j<=n;j+=i) st[j] = true;
                    }
                }

                System.out.println(cnt);
            }
        }
        ```

    === "Python"
        ```python
        import sys
        input = sys.stdin.readline

        n = int(input())
        st = [False] * (n + 1)
        cnt = 0

        for i in range(2, n + 1):
            if not st[i]:
                cnt += 1
                for j in range(i + i, n + 1, i):
                    st[j] = True

        print(cnt)
        ```

## 练习题单

??? tip "埃式筛"
    - [ ] [洛谷：魔法科考试](https://www.luogu.com.cn/problem/P12157)
    - [ ] [洛谷：哥德巴赫猜想（升级版）](https://www.luogu.com.cn/problem/solution/P1579)
    - [ ] [自建OJ：最小质因子](http://47.121.118.174/p/18)
    




#### 例题1

[洛谷：售货员的难题](https://www.luogu.com.cn/problem/P1171)


#### 代码实现

??? example "记忆化搜索"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        const int N=21;
        const int INF=0x3f3f3f3f;

        int n;
        int a[N][N];

        int dp[1<<N][N];

        int dfs(int S,int pre){
            if(S==(1<<n)-1){
                return a[pre][0];
            }

            if(dp[S][pre]!=-1){
                return dp[S][pre];
            }

            int res=INF;

            for(int i=0;i<n;i++){
                if((S&(1<<i))==0){
                    res=min(res,dfs(S|(1<<i),i)+a[pre][i]);
                }
            }

            return dp[S][pre]=res;
        }

        int main(){
            memset(dp,-1,sizeof dp);

            cin>>n;

            for(int i=0;i<n;i++){
                for(int j=0;j<n;j++){
                    cin>>a[i][j];
                }
            }

            cout<<dfs(1,0);

            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main{

            static final int N=21;
            static final int INF=0x3f3f3f3f;

            static int n;

            static int[][] a=new int[N][N];
            static int[][] dp=new int[1<<N][N];

            static int dfs(int S,int pre){
                if(S==(1<<n)-1){
                    return a[pre][0];
                }

                if(dp[S][pre]!=-1){
                    return dp[S][pre];
                }

                int res=INF;

                for(int i=0;i<n;i++){
                    if((S&(1<<i))==0){
                        res=Math.min(res,dfs(S|(1<<i),i)+a[pre][i]);
                    }
                }

                return dp[S][pre]=res;
            }

            public static void main(String[] args){
                Scanner in=new Scanner(System.in);

                n=in.nextInt();

                for(int i=0;i<n;i++){
                    for(int j=0;j<n;j++){
                        a[i][j]=in.nextInt();
                    }
                }

                for(int i=0;i<(1<<N);i++){
                    Arrays.fill(dp[i],-1);
                }

                System.out.print(dfs(1,0));
            }
        }
        ```

    === "Python"
        ```python
        import sys
        sys.setrecursionlimit(10**7)

        INF=10**9

        n=int(input())

        a=[list(map(int,input().split())) for _ in range(n)]

        dp=[[-1]*n for _ in range(1<<n)]

        def dfs(S,pre):
            if S==(1<<n)-1:
                return a[pre][0]

            if dp[S][pre]!=-1:
                return dp[S][pre]

            res=INF

            for i in range(n):
                if (S>>i)&1==0:
                    res=min(res,dfs(S|(1<<i),i)+a[pre][i])

            dp[S][pre]=res
            return res

        print(dfs(1,0))
        ```
``
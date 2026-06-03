#### 第一题

[新型锁](https://www.lanqiao.cn/problems/21263/learning/)

#### 代码实现

??? example "5分"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        typedef long long ll;

        const int N=5010;
        const int mod=1e9+7;

        ll dp[N][10][10];

        ll dfs(int u,int c3,int c5){
            if(u>2025){
                return 1;
            }

            if(dp[u][c3][c5]!=-1){
                return dp[u][c3][c5];
            }

            ll res=0;

            for(int i=0;i<=4;i++){
                for(int j=0;j<=2;j++){
                    if(max(i,c3)==4 && max(j,c5)==2){
                        res=(res+dfs(u+1,i,j))%mod;
                    }
                }
            }

            return dp[u][c3][c5]=res;
        }

        int main(){
            memset(dp,-1,sizeof dp);

            cout<<dfs(1,4,2);
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main{

            static final int N=5010;
            static final long mod=1000000007L;

            static long[][][] dp=new long[N][10][10];

            static long dfs(int u,int c3,int c5){
                if(u>2025){
                    return 1;
                }

                if(dp[u][c3][c5]!=-1){
                    return dp[u][c3][c5];
                }

                long res=0;

                for(int i=0;i<=4;i++){
                    for(int j=0;j<=2;j++){
                        if(Math.max(i,c3)==4 && Math.max(j,c5)==2){
                            res=(res+dfs(u+1,i,j))%mod;
                        }
                    }
                }

                return dp[u][c3][c5]=res;
            }

            public static void main(String[] args){
                for(int i=0;i<N;i++){
                    for(int j=0;j<10;j++){
                        Arrays.fill(dp[i][j],-1);
                    }
                }

                System.out.print(dfs(1,4,2));
            }
        }
        ```

    === "Python"
        ```python
        from functools import lru_cache

        MOD=10**9+7

        @lru_cache(None)
        def dfs(u,c3,c5):
            if u>2025:
                return 1

            res=0

            for i in range(5):
                for j in range(3):
                    if max(i,c3)==4 and max(j,c5)==2:
                        res=(res+dfs(u+1,i,j))%MOD

            return res

        print(dfs(1,4,2))
        ```
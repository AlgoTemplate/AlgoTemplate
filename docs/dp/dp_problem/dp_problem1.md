

#### 第一题

[自建OJ：划分问题2](http://47.121.118.174/p/47)

#### 代码实现

??? example "动态规划（整数划分方案数）"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        const int N=1e3+10,mod=1e9+7;

        int n,f[N][N];

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            cin>>n;
            f[0][0]=1;

            for(int i=1;i<=n;i++){
                for(int j=0;j<=n;j++){
                    f[i][j]=f[i-1][j];
                    if(j-i>=0) f[i][j]=(f[i][j]+f[i-1][j-i])%mod;
                }
            }

            cout<<f[n][n]<<"\n";
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.io.*;
        import java.util.*;

        public class Main{
            static final int N=1000+10,mod=1000000007;
            static int[][] f=new int[N][N];

            public static void main(String[] args)throws Exception{
                BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
                int n=Integer.parseInt(br.readLine());

                f[0][0]=1;

                for(int i=1;i<=n;i++){
                    for(int j=0;j<=n;j++){
                        f[i][j]=f[i-1][j];
                        if(j-i>=0){
                            f[i][j]=(f[i][j]+f[i-1][j-i])%mod;
                        }
                    }
                }

                System.out.println(f[n][n]);
            }
        }
        ```

    === "Python"
        ```python
        import sys
        input=sys.stdin.readline

        mod=10**9+7
        n=int(input())

        f=[[0]*(n+1) for _ in range(n+1)]
        f[0][0]=1

        for i in range(1,n+1):
            for j in range(0,n+1):
                f[i][j]=f[i-1][j]
                if j-i>=0:
                    f[i][j]=(f[i][j]+f[i-1][j-i])%mod

        print(f[n][n])
        ```
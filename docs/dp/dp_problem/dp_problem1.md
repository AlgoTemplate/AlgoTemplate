

#### 第一题

[自建OJ：划分问题2](http://47.121.118.174/p/47)

#### 代码实现

??? example "参考实现）"

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

#### 第二题

[自建OJ：数组分割](http://47.121.118.174/p/465)

#### 代码实现

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        const int N=1e3+10,mod=1e9+7;

        int a[N],n;
        int dp[N][2];

        void solve(){
            cin>>n;
            long long sum=0;
            for(int i=1;i<=n;i++){
                cin>>a[i];
                sum+=a[i];
            }

            if(sum%2){
                cout<<0<<"\n";
                return;
            }

            memset(dp,0,sizeof dp);
            dp[0][0]=1;

            for(int i=1;i<=n;i++){
                for(int j=0;j<=1;j++){
                    dp[i][j]=(dp[i-1][j]+dp[i-1][(j+a[i])%2])%mod;
                }
            }

            cout<<dp[n][0]<<"\n";
        }

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            int t;cin>>t;
            while(t--) solve();
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.io.*;
        import java.util.*;

        public class Main{
            static final int N=1000+10,mod=1000000007;
            static int[] a=new int[N];
            static int[][] dp=new int[N][2];

            static void solve(BufferedReader br)throws Exception{
                int n=Integer.parseInt(br.readLine());
                StringTokenizer st=new StringTokenizer(br.readLine());

                long sum=0;
                for(int i=1;i<=n;i++){
                    a[i]=Integer.parseInt(st.nextToken());
                    sum+=a[i];
                }

                if(sum%2==1){
                    System.out.println(0);
                    return;
                }

                for(int i=0;i<=n;i++){
                    dp[i][0]=dp[i][1]=0;
                }
                dp[0][0]=1;

                for(int i=1;i<=n;i++){
                    for(int j=0;j<=1;j++){
                        dp[i][j]=(dp[i-1][j]+dp[i-1][(j+a[i])%2])%mod;
                    }
                }

                System.out.println(dp[n][0]);
            }

            public static void main(String[] args)throws Exception{
                BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
                int t=Integer.parseInt(br.readLine());
                while(t-->0) solve(br);
            }
        }
        ```

    === "Python"
        ```python
        import sys
        input=sys.stdin.readline

        mod=10**9+7
        N=1010

        for _ in range(int(input())):
            n=int(input())
            a=[0]+list(map(int,input().split()))
            s=sum(a)

            if s%2:
                print(0)
                continue

            dp=[[0]*2 for _ in range(n+1)]
            dp[0][0]=1

            for i in range(1,n+1):
                for j in range(2):
                    dp[i][j]=(dp[i-1][j]+dp[i-1][(j+a[i])%2])%mod

            print(dp[n][0])
        ```
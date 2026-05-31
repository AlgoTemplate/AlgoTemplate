

#### 第一题

[自建OJ：划分问题2](http://47.121.118.174/p/47)

#### 代码实现

??? example "参考实现"

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
#### 第三题

[自建OJ：选数异或](http://47.121.118.174/p/467)

#### 代码实现

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        const int N=1e5+10;
        const int MOD=998244353;

        int n,x;
        int a[N];
        int dp[N][70];

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            cin>>n>>x;
            for(int i=1;i<=n;i++) cin>>a[i];

            dp[0][0]=1;

            for(int i=1;i<=n;i++){
                for(int j=0;j<=63;j++){
                    dp[i][j]=(dp[i-1][j]+dp[i-1][j^a[i]])%MOD;
                }
            }

            cout<<dp[n][x]<<"\n";
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.io.*;
        import java.util.*;

        public class Main{
            static final int N=100010;
            static final int MOD=998244353;

            static int[] a=new int[N];
            static int[][] dp=new int[N][70];

            public static void main(String[] args)throws Exception{
                BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
                StringTokenizer st=new StringTokenizer(br.readLine());

                int n=Integer.parseInt(st.nextToken());
                int x=Integer.parseInt(st.nextToken());

                st=new StringTokenizer(br.readLine());
                for(int i=1;i<=n;i++){
                    a[i]=Integer.parseInt(st.nextToken());
                }

                dp[0][0]=1;

                for(int i=1;i<=n;i++){
                    for(int j=0;j<=63;j++){
                        dp[i][j]=(dp[i-1][j]+dp[i-1][j^a[i]])%MOD;
                    }
                }

                System.out.print(dp[n][x]);
            }
        }
        ```

    === "Python"
        ```python
        import sys
        input=sys.stdin.readline

        MOD=998244353

        n,x=map(int,input().split())
        a=[0]+list(map(int,input().split()))

        dp=[[0]*70 for _ in range(n+1)]
        dp[0][0]=1

        for i in range(1,n+1):
            for j in range(64):
                dp[i][j]=(dp[i-1][j]+dp[i-1][j^a[i]])%MOD

        print(dp[n][x])
        ```
#### 第四题

[自建OJ：砝码称重](http://47.121.118.174/p/553)

#### 代码实现

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        const int N=1e2+10;

        int w[N],dp[N][100010];
        int n;

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            cin>>n;

            int sum=0;
            for(int i=1;i<=n;i++){
                cin>>w[i];
                sum+=w[i];
            }

            dp[0][0]=1;

            for(int i=1;i<=n;i++){
                for(int j=0;j<=sum;j++){
                    dp[i][j]|=dp[i-1][j];
                    dp[i][j]|=dp[i-1][abs(j-w[i])];
                    if(j+w[i]<=sum){
                        dp[i][j]|=dp[i-1][j+w[i]];
                    }
                }
            }

            int ans=0;
            for(int i=1;i<=sum;i++){
                if(dp[n][i]) ans++;
            }

            cout<<ans;
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.io.*;
        import java.util.*;

        public class Main{
            static final int N=110;

            static int[] w=new int[N];
            static int[][] dp=new int[N][100010];

            public static void main(String[] args)throws Exception{
                BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
                int n=Integer.parseInt(br.readLine());

                StringTokenizer st=new StringTokenizer(br.readLine());

                int sum=0;
                for(int i=1;i<=n;i++){
                    w[i]=Integer.parseInt(st.nextToken());
                    sum+=w[i];
                }

                dp[0][0]=1;

                for(int i=1;i<=n;i++){
                    for(int j=0;j<=sum;j++){
                        dp[i][j]|=dp[i-1][j];
                        dp[i][j]|=dp[i-1][Math.abs(j-w[i])];
                        if(j+w[i]<=sum){
                            dp[i][j]|=dp[i-1][j+w[i]];
                        }
                    }
                }

                int ans=0;
                for(int i=1;i<=sum;i++){
                    if(dp[n][i]==1) ans++;
                }

                System.out.print(ans);
            }
        }
        ```

    === "Python"
        ```python
        import sys
        input=sys.stdin.readline

        n=int(input())
        w=[0]+list(map(int,input().split()))

        s=sum(w)

        dp=[[0]*100010 for _ in range(n+1)]
        dp[0][0]=1

        for i in range(1,n+1):
            for j in range(s+1):
                dp[i][j]|=dp[i-1][j]
                dp[i][j]|=dp[i-1][abs(j-w[i])]
                if j+w[i]<=s:
                    dp[i][j]|=dp[i-1][j+w[i]]

        ans=0
        for i in range(1,s+1):
            if dp[n][i]:
                ans+=1

        print(ans)
        ```

#### 第五题

[自建OJ：安全序列](http://47.121.118.174/p/466)

#### 代码实现

??? example "选和不选"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        const int MOD=1e9+7;

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            int n,k;
            cin>>n>>k;

            vector<int> dp(n+1);
            dp[0]=1;

            for(int i=1;i<=n;i++){
                dp[i]=dp[i-1];
                if(i-k-1>=1){
                    dp[i]=(dp[i]+dp[i-k-1])%MOD;
                }else{
                    dp[i]=(dp[i-1]+1)%MOD;
                }
            }

            cout<<dp[n]<<"\n";
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.io.*;
        import java.util.*;

        public class Main{
            static final int MOD=1000000007;

            public static void main(String[] args)throws Exception{
                BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
                StringTokenizer st=new StringTokenizer(br.readLine());

                int n=Integer.parseInt(st.nextToken());
                int k=Integer.parseInt(st.nextToken());

                int[] dp=new int[n+1];
                dp[0]=1;

                for(int i=1;i<=n;i++){
                    dp[i]=dp[i-1];
                    if(i-k-1>=1){
                        dp[i]=(dp[i]+dp[i-k-1])%MOD;
                    }else{
                        dp[i]=(dp[i-1]+1)%MOD;
                    }
                }

                System.out.println(dp[n]);
            }
        }
        ```

    === "Python"
        ```python
        MOD=10**9+7

        n,k=map(int,input().split())

        dp=[0]*(n+1)
        dp[0]=1

        for i in range(1,n+1):
            dp[i]=dp[i-1]
            if i-k-1>=1:
                dp[i]=(dp[i]+dp[i-k-1])%MOD
            else:
                dp[i]=(dp[i-1]+1)%MOD

        print(dp[n])
        ```
??? example "必须选第 i 个"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        const int N=1e6+10;
        const int MOD=1e9+7;

        int n,k;
        int dp[N],s[N];

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            cin>>n>>k;

            int ans=1;
            for(int i=1;i<=n;i++){
                dp[i]=1;
                if(i>k+1){
                    dp[i]=(dp[i]+s[i-k-1])%MOD;
                }
                s[i]=(s[i-1]+dp[i])%MOD;
                ans=(ans+dp[i])%MOD;
            }

            cout<<ans;
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.io.*;
        import java.util.*;

        public class Main{
            static final int N=1000000+10;
            static final int MOD=1000000007;

            static int[] dp=new int[N];
            static int[] s=new int[N];

            public static void main(String[] args)throws Exception{
                BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
                StringTokenizer st=new StringTokenizer(br.readLine());

                int n=Integer.parseInt(st.nextToken());
                int k=Integer.parseInt(st.nextToken());

                int ans=1;
                for(int i=1;i<=n;i++){
                    dp[i]=1;
                    if(i>k+1){
                        dp[i]=(dp[i]+s[i-k-1])%MOD;
                    }
                    s[i]=(s[i-1]+dp[i])%MOD;
                    ans=(ans+dp[i])%MOD;
                }

                System.out.print(ans);
            }
        }
        ```

    === "Python"
        ```python
        MOD=10**9+7

        n,k=map(int,input().split())

        dp=[0]*(n+1)
        s=[0]*(n+1)

        ans=1
        for i in range(1,n+1):
            dp[i]=1
            if i>k+1:
                dp[i]=(dp[i]+s[i-k-1])%MOD
            s[i]=(s[i-1]+dp[i])%MOD
            ans=(ans+dp[i])%MOD

        print(ans)
        ```
#### 第六题

[自建OJ：数组选数](http://47.121.118.174/p/737)

#### 代码实现

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        const int N=2e5+10;

        int n;
        int a[N],dp[N];

        void solve(){
            cin>>n;

            for(int i=1;i<=n;i++){
                cin>>a[i];
                dp[i]=0;
            }

            dp[1]=a[1];
            for(int i=2;i<=n;i++){
                dp[i]=max(dp[i-1],dp[i-2]+a[i]);
            }

            cout<<dp[n]<<"\n";
        }

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            int t;
            cin>>t;
            while(t--) solve();

            return 0;
        }
        ```

    === "Java"
        ```java
        import java.io.*;
        import java.util.*;

        public class Main{
            static final int N=200000+10;

            static int[] a=new int[N];
            static int[] dp=new int[N];

            static void solve(BufferedReader br)throws Exception{
                int n=Integer.parseInt(br.readLine());
                StringTokenizer st=new StringTokenizer(br.readLine());

                for(int i=1;i<=n;i++){
                    a[i]=Integer.parseInt(st.nextToken());
                    dp[i]=0;
                }

                dp[1]=a[1];
                for(int i=2;i<=n;i++){
                    dp[i]=Math.max(dp[i-1],dp[i-2]+a[i]);
                }

                System.out.println(dp[n]);
            }

            public static void main(String[] args)throws Exception{
                BufferedReader br=new BufferedReader(new InputStreamReader(System.in));

                int t=Integer.parseInt(br.readLine());
                while(t-->0){
                    solve(br);
                }
            }
        }
        ```

    === "Python"
        ```python
        import sys
        input=sys.stdin.readline

        for _ in range(int(input())):
            n=int(input())
            a=[0]+list(map(int,input().split()))
            dp=[0]*(n+1)

            dp[1]=a[1]
            for i in range(2,n+1):
                dp[i]=max(dp[i-1],dp[i-2]+a[i])

            print(dp[n])
        ```

#### 第七题

[自建OJ：在明日玩原神](http://47.121.118.174/p/472)

#### 代码实现

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        const int N=1e5+10;

        int n;
        int a[N],b[N];
        int dp[N][3][3];

        void solve(){
            cin>>n;

            for(int i=1;i<=n;i++) cin>>a[i];
            for(int i=1;i<=n;i++) cin>>b[i];

            for(int i=1;i<=n;i++){
                dp[i][1][0]=max(dp[i-1][0][1]+a[i],dp[i-1][0][2]+a[i]);
                dp[i][2][0]=dp[i-1][1][0]+a[i];
                dp[i][0][1]=max(dp[i-1][1][0]+b[i],dp[i-1][2][0]+b[i]);
                dp[i][0][2]=dp[i-1][0][1]+b[i];
            }

            cout<<max({dp[n][0][1],dp[n][0][2],dp[n][1][0],dp[n][2][0]});
        }

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            solve();
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main{
            static final int N=100000+10;

            static int[] a=new int[N];
            static int[] b=new int[N];
            static int[][][] dp=new int[N][3][3];

            public static void main(String[] args){
                Scanner in=new Scanner(System.in);

                int n=in.nextInt();

                for(int i=1;i<=n;i++) a[i]=in.nextInt();
                for(int i=1;i<=n;i++) b[i]=in.nextInt();

                for(int i=1;i<=n;i++){
                    dp[i][1][0]=Math.max(dp[i-1][0][1]+a[i],dp[i-1][0][2]+a[i]);
                    dp[i][2][0]=dp[i-1][1][0]+a[i];
                    dp[i][0][1]=Math.max(dp[i-1][1][0]+b[i],dp[i-1][2][0]+b[i]);
                    dp[i][0][2]=dp[i-1][0][1]+b[i];
                }

                int ans=Math.max(
                    Math.max(dp[n][0][1],dp[n][0][2]),
                    Math.max(dp[n][1][0],dp[n][2][0])
                );

                System.out.print(ans);
            }
        }
        ```

    === "Python"
        ```python
        import sys
        input=sys.stdin.readline

        n=int(input())
        a=[0]+list(map(int,input().split()))
        b=[0]+list(map(int,input().split()))

        dp=[[[0]*3 for _ in range(3)] for _ in range(n+1)]

        for i in range(1,n+1):
            dp[i][1][0]=max(dp[i-1][0][1]+a[i],dp[i-1][0][2]+a[i])
            dp[i][2][0]=dp[i-1][1][0]+a[i]
            dp[i][0][1]=max(dp[i-1][1][0]+b[i],dp[i-1][2][0]+b[i])
            dp[i][0][2]=dp[i-1][0][1]+b[i]

        print(max(
            dp[n][0][1],
            dp[n][0][2],
            dp[n][1][0],
            dp[n][2][0]
        ))
        ```
#### 第八题

[洛谷：摆花](https://www.luogu.com.cn/problem/P1077)

#### 代码实现

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        const int mod=1e6+7;

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            int n,m;
            cin>>n>>m;

            vector<int> a(n+1);
            vector<vector<int>> f(n+1,vector<int>(m+1));

            f[0][0]=1;

            for(int i=1;i<=n;i++) cin>>a[i];

            for(int i=1;i<=n;i++){
                for(int j=0;j<=m;j++){
                    for(int k=0;k<=min(j,a[i]);k++){
                        f[i][j]=(f[i][j]+f[i-1][j-k])%mod;
                    }
                }
            }

            cout<<f[n][m];
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main{
            static final int mod=1000007;

            public static void main(String[] args){
                Scanner in=new Scanner(System.in);

                int n=in.nextInt();
                int m=in.nextInt();

                int[] a=new int[n+1];
                int[][] f=new int[n+1][m+1];

                f[0][0]=1;

                for(int i=1;i<=n;i++) a[i]=in.nextInt();

                for(int i=1;i<=n;i++){
                    for(int j=0;j<=m;j++){
                        for(int k=0;k<=Math.min(j,a[i]);k++){
                            f[i][j]=(f[i][j]+f[i-1][j-k])%mod;
                        }
                    }
                }

                System.out.print(f[n][m]);
            }
        }
        ```

    === "Python"
        ```python
        mod=1000007

        n,m=map(int,input().split())
        a=[0]+list(map(int,input().split()))

        f=[[0]*(m+1) for _ in range(n+1)]
        f[0][0]=1

        for i in range(1,n+1):
            for j in range(m+1):
                for k in range(min(j,a[i])+1):
                    f[i][j]=(f[i][j]+f[i-1][j-k])%mod

        print(f[n][m])
        ```

#### 第九题

[自建OJ：数组切分](http://47.121.118.174/p/551)

#### 代码实现

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        const int N=10010;
        const int mod=1e9+7;

        int n;
        int a[N];
        int dp[N];

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            cin>>n;
            for(int i=1;i<=n;i++) cin>>a[i];

            dp[0]=1;

            for(int i=1;i<=n;i++){
                int mi=N,mx=0;
                for(int j=i;j>=1;j--){
                    mi=min(mi,a[j]);
                    mx=max(mx,a[j]);

                    if(mx-mi+1==i-j+1){
                        dp[i]=(dp[i]+dp[j-1])%mod;
                    }
                }
            }

            cout<<dp[n];
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main{
            static final int N=10010;
            static final int mod=1000000007;

            public static void main(String[] args){
                Scanner in=new Scanner(System.in);

                int n=in.nextInt();

                int[] a=new int[N];
                int[] dp=new int[N];

                for(int i=1;i<=n;i++) a[i]=in.nextInt();

                dp[0]=1;

                for(int i=1;i<=n;i++){
                    int mi=N,mx=0;

                    for(int j=i;j>=1;j--){
                        mi=Math.min(mi,a[j]);
                        mx=Math.max(mx,a[j]);

                        if(mx-mi+1==i-j+1){
                            dp[i]=(dp[i]+dp[j-1])%mod;
                        }
                    }
                }

                System.out.print(dp[n]);
            }
        }
        ```

    === "Python"
        ```python
        mod=10**9+7
        N=10010

        n=int(input())
        a=[0]+list(map(int,input().split()))

        dp=[0]*N
        dp[0]=1

        for i in range(1,n+1):
            mi=N
            mx=0

            for j in range(i,0,-1):
                mi=min(mi,a[j])
                mx=max(mx,a[j])

                if mx-mi+1==i-j+1:
                    dp[i]=(dp[i]+dp[j-1])%mod

        print(dp[n])
        ```
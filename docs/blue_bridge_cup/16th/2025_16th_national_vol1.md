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
#### 第二题

[互质藏卡](https://www.lanqiao.cn/problems/21262/learning/)

#### 代码实现

??? example "5分"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        typedef long long ll;

        const int N=17600;
        const int mod=1e9+7;

        bool check(int x){
            for(int i=2;i*i<=x;i++){
                if(x%i==0) return false;
            }
            return true;
        }

        int calc(int x){
            int res=1;
            ll a=x;

            while(a<=N){
                a=a*x;
                if(a>N) break;
                res++;
            }

            return res;
        }

        int main(){
            ll ans=1;

            for(int i=2;i<=N;i++){
                if(check(i)){
                    int t=calc(i);
                    ans=ans*t%mod;
                }
            }

            cout<<ans;
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main{

            static final int N=17600;
            static final long mod=1000000007L;

            static boolean check(int x){
                for(int i=2;i*i<=x;i++){
                    if(x%i==0) return false;
                }
                return true;
            }

            static int calc(int x){
                int res=1;
                long a=x;

                while(a<=N){
                    a*=x;
                    if(a>N) break;
                    res++;
                }

                return res;
            }

            public static void main(String[] args){
                long ans=1;

                for(int i=2;i<=N;i++){
                    if(check(i)){
                        int t=calc(i);
                        ans=ans*t%mod;
                    }
                }

                System.out.print(ans);
            }
        }
        ```

    === "Python"
        ```python
        N=17600
        MOD=10**9+7

        def check(x):
            i=2
            while i*i<=x:
                if x%i==0:
                    return False
                i+=1
            return True

        def calc(x):
            res=1
            a=x

            while a<=N:
                a*=x
                if a>N:
                    break
                res+=1

            return res

        ans=1

        for i in range(2,N+1):
            if check(i):
                ans=ans*calc(i)%MOD

        print(ans)
        ```
#### 第三题
[数字轮盘](https://www.lanqiao.cn/problems/21261/learning/)
#### 代码实现

??? example "4分"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        #define fi first
        #define se second
        using namespace std;

        typedef long long ll;

        int testcase=1;

        void solve(){
            int n,k;
            cin>>n>>k;

            k%=n;

            int d=n+1;
            for(int i=k;i>=1;i--,d--);

            int res=0;

            if(k==0){
                cout<<0<<"\n";
                return;
            }

            while(d!=1 && res<=n){
                d=((d-2)%n+n)%n;
                if(d==0) d=n;
                res++;
            }

            if(res==n+1) res=-1;

            cout<<res<<"\n";
        }

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            int t;
            cin>>t;

            for(;testcase<=t;testcase++){
                solve();
            }

            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main{

            static int testcase=1;

            static void solve(Scanner in){
                int n=in.nextInt();
                int k=in.nextInt();

                k%=n;

                int d=n+1;
                for(int i=k;i>=1;i--,d--);

                int res=0;

                if(k==0){
                    System.out.println(0);
                    return;
                }

                while(d!=1 && res<=n){
                    d=((d-2)%n+n)%n;
                    if(d==0) d=n;
                    res++;
                }

                if(res==n+1) res=-1;

                System.out.println(res);
            }

            public static void main(String[] args){
                Scanner in=new Scanner(System.in);

                int t=in.nextInt();

                for(;testcase<=t;testcase++){
                    solve(in);
                }
            }
        }
        ```

    === "Python"
        ```python
        import sys
        input=sys.stdin.readline

        t=int(input())

        for _ in range(t):
            n,k=map(int,input().split())

            k%=n

            d=n+1
            for _ in range(k):
                d-=1

            res=0

            if k==0:
                print(0)
                continue

            while d!=1 and res<=n:
                d=((d-2)%n+n)%n
                if d==0:
                    d=n
                res+=1

            if res==n+1:
                res=-1

            print(res)
        ```
??? example "10分"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        #define fi first
        #define se second
        using namespace std;

        typedef long long ll;

        int testcase=1;

        void solve(){
            int n,k;
            cin>>n>>k;

            k%=n;

            int h=((1-k)%n+n)%n;

            if(k==0){
                cout<<0<<"\n";
                return;
            }

            if(n%2==0 && h%2==0){
                cout<<-1<<"\n";
                return;
            }

            if(h%2==1){
                cout<<h/2<<"\n";
                return;
            }

            cout<<h/2+n/2<<"\n";
        }

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            int t;
            cin>>t;

            for(;testcase<=t;testcase++){
                solve();
            }

            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main{

            static int testcase=1;

            static void solve(Scanner in){
                int n=in.nextInt();
                int k=in.nextInt();

                k%=n;

                int h=((1-k)%n+n)%n;

                if(k==0){
                    System.out.println(0);
                    return;
                }

                if(n%2==0 && h%2==0){
                    System.out.println(-1);
                    return;
                }

                if(h%2==1){
                    System.out.println(h/2);
                    return;
                }

                System.out.println(h/2+n/2);
            }

            public static void main(String[] args){
                Scanner in=new Scanner(System.in);

                int t=in.nextInt();

                for(;testcase<=t;testcase++){
                    solve(in);
                }
            }
        }
        ```

    === "Python"
        ```python
        import sys
        input=sys.stdin.readline

        t=int(input())

        for _ in range(t):
            n,k=map(int,input().split())

            k%=n

            h=((1-k)%n+n)%n

            if k==0:
                print(0)
                continue

            if n%2==0 and h%2==0:
                print(-1)
                continue

            if h%2==1:
                print(h//2)
                continue

            print(h//2+n//2)
        ```

#### 第四题

[斐波那契字符串](https://www.lanqiao.cn/problems/21260/learning/)

#### 代码实现

??? example "10分"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        #define fi first
        #define se second
        using namespace std;

        typedef long long ll;

        const int N=1e5+10;
        const int mod=1e9+7;

        struct node{
            ll c0,c1,ans;
        }f[N];

        int testcase=1;

        void init(){
            f[1]={1,0,0};
            f[2]={0,1,0};

            for(int i=3;i<N;i++){
                f[i].c0=(f[i-1].c0+f[i-2].c0)%mod;
                f[i].c1=(f[i-1].c1+f[i-2].c1)%mod;
                f[i].ans=(f[i-1].ans+f[i-2].ans+f[i-1].c0*f[i-2].c1)%mod;
            }
        }

        void solve(){
            int n;
            cin>>n;

            cout<<f[n].ans<<"\n";
        }

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            int t;
            cin>>t;

            init();

            for(;testcase<=t;testcase++){
                solve();
            }

            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main{

            static final int N=100010;
            static final long mod=1000000007L;

            static class Node{
                long c0,c1,ans;

                Node(long c0,long c1,long ans){
                    this.c0=c0;
                    this.c1=c1;
                    this.ans=ans;
                }
            }

            static Node[] f=new Node[N];

            static void init(){
                for(int i=0;i<N;i++){
                    f[i]=new Node(0,0,0);
                }

                f[1]=new Node(1,0,0);
                f[2]=new Node(0,1,0);

                for(int i=3;i<N;i++){
                    f[i].c0=(f[i-1].c0+f[i-2].c0)%mod;
                    f[i].c1=(f[i-1].c1+f[i-2].c1)%mod;
                    f[i].ans=(f[i-1].ans+f[i-2].ans+f[i-1].c0*f[i-2].c1)%mod;
                }
            }

            public static void main(String[] args){
                Scanner in=new Scanner(System.in);

                int t=in.nextInt();

                init();

                while(t-->0){
                    int n=in.nextInt();
                    System.out.println(f[n].ans);
                }
            }
        }
        ```

    === "Python"
        ```python
        MOD=10**9+7
        N=100010

        c0=[0]*N
        c1=[0]*N
        ans=[0]*N

        c0[1]=1
        c1[2]=1

        for i in range(3,N):
            c0[i]=(c0[i-1]+c0[i-2])%MOD
            c1[i]=(c1[i-1]+c1[i-2])%MOD
            ans[i]=(ans[i-1]+ans[i-2]+c0[i-1]*c1[i-2])%MOD

        t=int(input())

        for _ in range(t):
            n=int(input())
            print(ans[n])
        ```
#### 例题1

[自建OJ：字符串哈希匹配字符串](http://47.121.118.174/p/80)

#### 代码实现

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        typedef long long ll;

        const int N=200010;
        const ll P=131;
        const ll mod=998244353;

        ll prefix[N],powP[N];
        int n,q;
        string s;

        ll getHash(int l,int r){
            return (prefix[r]-prefix[l-1]*powP[r-l+1]%mod+mod)%mod;
        }

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            cin>>n>>q;
            cin>>s;
            s=" "+s;

            powP[0]=1;
            for(int i=1;i<=n;i++){
                powP[i]=powP[i-1]*P%mod;
                prefix[i]=(prefix[i-1]*P+s[i])%mod;
            }

            while(q--){
                int l1,r1,l2,r2;
                cin>>l1>>r1>>l2>>r2;
                ll h1=getHash(l1,r1);
                ll h2=getHash(l2,r2);
                if(h1==h2) cout<<"Yes\n";
                else cout<<"No\n";
            }
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.io.*;
        import java.util.*;

        public class Main{
            static final int N=200010;
            static final long P=131;
            static final long mod=998244353;

            static long[] prefix=new long[N];
            static long[] powP=new long[N];

            static long getHash(int l,int r){
                return (prefix[r]-prefix[l-1]*powP[r-l+1]%mod+mod)%mod;
            }

            public static void main(String[] args)throws Exception{
                BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
                StringTokenizer st=new StringTokenizer(br.readLine());
                int n=Integer.parseInt(st.nextToken());
                int q=Integer.parseInt(st.nextToken());

                String s=br.readLine();
                s=" "+s;

                powP[0]=1;
                for(int i=1;i<=n;i++){
                    powP[i]=powP[i-1]*P%mod;
                    prefix[i]=(prefix[i-1]*P+s.charAt(i))%mod;
                }

                StringBuilder sb=new StringBuilder();
                while(q-->0){
                    st=new StringTokenizer(br.readLine());
                    int l1=Integer.parseInt(st.nextToken());
                    int r1=Integer.parseInt(st.nextToken());
                    int l2=Integer.parseInt(st.nextToken());
                    int r2=Integer.parseInt(st.nextToken());

                    long h1=getHash(l1,r1);
                    long h2=getHash(l2,r2);
                    if(h1==h2) sb.append("Yes\n");
                    else sb.append("No\n");
                }
                System.out.print(sb.toString());
            }
        }
        ```

    === "Python"
        ```python
        import sys
        input=sys.stdin.readline

        N=200010
        P=131
        mod=998244353

        prefix=[0]*N
        powP=[0]*N

        def getHash(l,r):
            return (prefix[r]-prefix[l-1]*powP[r-l+1]%mod+mod)%mod

        n,q=map(int,input().split())
        s=" "+input().strip()

        powP[0]=1
        for i in range(1,n+1):
            powP[i]=powP[i-1]*P%mod
            prefix[i]=(prefix[i-1]*P+ord(s[i]))%mod

        for _ in range(q):
            l1,r1,l2,r2=map(int,input().split())
            h1=getHash(l1,r1)
            h2=getHash(l2,r2)
            if h1==h2:
                print("Yes")
            else:
                print("No")
        ```

#### 例题2

[自建OJ：判定回文串2](http://47.121.118.174/p/517)

#### 代码实现

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        typedef long long ll;

        const int N=2e5+10,mod=1e9+7,P=131;

        ll pre[N],suf[N],base[N];
        int n,q;
        string s;

        void init(){
            base[0]=1;
            for(int i=1;i<=n;i++){
                base[i]=base[i-1]*P%mod;
                pre[i]=(pre[i-1]*P+s[i])%mod;
            }
            for(int i=n;i>=1;i--){
                suf[i]=(suf[i+1]*P+s[i])%mod;
            }
        }

        ll getP(int l,int r){
            return (pre[r]-pre[l-1]*base[r-l+1]%mod+mod)%mod;
        }

        ll getS(int l,int r){
            return (suf[l]-suf[r+1]*base[r-l+1]%mod+mod)%mod;
        }

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            cin>>n>>q;
            cin>>s;
            s=" "+s;

            init();

            while(q--){
                int l,r;
                cin>>l>>r;
                if(getP(l,r)==getS(l,r)) cout<<"Yes\n";
                else cout<<"No\n";
            }
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.io.*;
        import java.util.*;

        public class Main{
            static final int N=200000+10;
            static final long mod=1000000007;
            static final long P=131;

            static long[] pre=new long[N];
            static long[] suf=new long[N];
            static long[] base=new long[N];

            static int n,q;
            static String s;

            static void init(){
                base[0]=1;
                for(int i=1;i<=n;i++){
                    base[i]=base[i-1]*P%mod;
                    pre[i]=(pre[i-1]*P+s.charAt(i))%mod;
                }
                for(int i=n;i>=1;i--){
                    suf[i]=(suf[i+1]*P+s.charAt(i))%mod;
                }
            }

            static long getP(int l,int r){
                return (pre[r]-pre[l-1]*base[r-l+1]%mod+mod)%mod;
            }

            static long getS(int l,int r){
                return (suf[l]-suf[r+1]*base[r-l+1]%mod+mod)%mod;
            }

            public static void main(String[] args)throws Exception{
                BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
                StringTokenizer st=new StringTokenizer(br.readLine());
                n=Integer.parseInt(st.nextToken());
                q=Integer.parseInt(st.nextToken());

                s=" "+br.readLine();

                init();

                StringBuilder sb=new StringBuilder();
                while(q-->0){
                    st=new StringTokenizer(br.readLine());
                    int l=Integer.parseInt(st.nextToken());
                    int r=Integer.parseInt(st.nextToken());
                    if(getP(l,r)==getS(l,r)) sb.append("Yes\n");
                    else sb.append("No\n");
                }
                System.out.print(sb.toString());
            }
        }
        ```

    === "Python"
        ```python
        import sys
        input=sys.stdin.readline

        N=200000+10
        mod=10**9+7
        P=131

        pre=[0]*N
        suf=[0]*N
        base=[0]*N

        def init():
            base[0]=1
            for i in range(1,n+1):
                base[i]=base[i-1]*P%mod
                pre[i]=(pre[i-1]*P+ord(s[i]))%mod
            for i in range(n,0,-1):
                suf[i]=(suf[i+1]*P+ord(s[i]))%mod

        def getP(l,r):
            return (pre[r]-pre[l-1]*base[r-l+1]%mod+mod)%mod

        def getS(l,r):
            return (suf[l]-suf[r+1]*base[r-l+1]%mod+mod)%mod

        n,q=map(int,input().split())
        s=" "+input().strip()

        init()

        for _ in range(q):
            l,r=map(int,input().split())
            if getP(l,r)==getS(l,r):
                print("Yes")
            else:
                print("No")
        ```
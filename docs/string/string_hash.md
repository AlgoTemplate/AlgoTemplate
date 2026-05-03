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

        ll prefix[N],powP[N];
        int n,q;
        string s;

        ll getHash(int l,int r){
            return prefix[r]-prefix[l-1]*powP[r-l+1];
        }

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            cin>>n>>q;
            cin>>s;
            s=" "+s;

            powP[0]=1;
            for(int i=1;i<=n;i++){
                powP[i]=powP[i-1]*P;
                prefix[i]=prefix[i-1]*P+s[i];
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

            static long[] prefix=new long[N];
            static long[] powP=new long[N];

            static long getHash(int l,int r){
                return prefix[r]-prefix[l-1]*powP[r-l+1];
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
                    powP[i]=powP[i-1]*P;
                    prefix[i]=prefix[i-1]*P+s.charAt(i);
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

        prefix=[0]*N
        powP=[0]*N

        def getHash(l,r):
            return prefix[r]-prefix[l-1]*powP[r-l+1]

        n,q=map(int,input().split())
        s=" "+input().strip()

        powP[0]=1
        for i in range(1,n+1):
            powP[i]=powP[i-1]*P
            prefix[i]=prefix[i-1]*P+ord(s[i])

        for _ in range(q):
            l1,r1,l2,r2=map(int,input().split())
            h1=getHash(l1,r1)
            h2=getHash(l2,r2)
            if h1==h2:
                print("Yes")
            else:
                print("No")
        ```
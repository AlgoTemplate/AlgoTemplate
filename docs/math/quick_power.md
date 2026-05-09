#### 例题1

[自建OJ：快速幂](http://47.121.118.174/p/98)


??? note "快速幂"

    <video controls preload="auto" style="width:100%; border-radius:12px;">
        <source src="./MP4/FastPower.mp4" type="video/mp4">
        你的浏览器不支持 video 标签
    </video>


#### 参考实现

??? example "代码实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        typedef long long ll;

        ll ksm(ll a,ll b,ll p){
            ll res=1;
            while(b){
                if(b&1) res=res*a%p;
                a=a*a%p;
                b>>=1;
            }
            return res;
        }

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            ll a,b,p;
            cin>>a>>b>>p;
            cout<<ksm(a,b,p);
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.io.*;
        import java.util.*;

        public class Main{
            static long ksm(long a,long b,long p){
                long res=1;
                while(b>0){
                    if((b&1)==1) res=res*a%p;
                    a=a*a%p;
                    b>>=1;
                }
                return res;
            }

            public static void main(String[] args)throws Exception{
                BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
                StringTokenizer st=new StringTokenizer(br.readLine());

                long a=Long.parseLong(st.nextToken());
                long b=Long.parseLong(st.nextToken());
                long p=Long.parseLong(st.nextToken());

                System.out.print(ksm(a,b,p));
            }
        }
        ```

    === "Python"
        ```python
        def ksm(a,b,p):
            res=1
            while b:
                if b&1:
                    res=res*a%p
                a=a*a%p
                b>>=1
            return res

        a,b,p=map(int,input().split())
        print(ksm(a,b,p))
        ```


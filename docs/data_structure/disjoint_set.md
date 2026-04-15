#### 例题1

[自建OJ：并查集](http://47.121.118.174/p/92)

#### 代码实现

??? example "无优化"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        const int N=1e5+5;

        int f[N];

        int find(int x){
            if(f[x]==x) return x;
            return find(f[x]);
        }

        bool same(int x,int y){
            return find(x)==find(y);
        }

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            int n,m;
            cin>>n>>m;
            for(int i=1;i<=n;i++) f[i]=i;

            for(int i=1;i<=m;i++){
                string op;
                int x,y;
                cin>>op>>x>>y;
                if(op=="M"){
                    f[find(x)]=find(y);
                }else{
                    if(same(x,y)) cout<<"Yes\n";
                    else cout<<"No\n";
                }
            }
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.io.*;
        import java.util.*;

        public class Main{
            static final int N=100000+5;
            static int[] f=new int[N];

            static int find(int x){
                if(f[x]==x) return x;
                return find(f[x]);
            }

            static boolean same(int x,int y){
                return find(x)==find(y);
            }

            public static void main(String[] args)throws Exception{
                BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
                StringTokenizer st=new StringTokenizer(br.readLine());
                int n=Integer.parseInt(st.nextToken());
                int m=Integer.parseInt(st.nextToken());

                for(int i=1;i<=n;i++) f[i]=i;

                StringBuilder sb=new StringBuilder();
                for(int i=1;i<=m;i++){
                    st=new StringTokenizer(br.readLine());
                    String op=st.nextToken();
                    int x=Integer.parseInt(st.nextToken());
                    int y=Integer.parseInt(st.nextToken());
                    if(op.equals("M")){
                        f[find(x)]=find(y);
                    }else{
                        if(same(x,y)) sb.append("Yes\n");
                        else sb.append("No\n");
                    }
                }
                System.out.print(sb.toString());
            }
        }
        ```

    === "Python"
        ```python
        import sys
        input=sys.stdin.readline

        N=100000+5
        f=list(range(N))

        def find(x):
            if f[x]==x:
                return x
            return find(f[x])

        def same(x,y):
            return find(x)==find(y)

        n,m=map(int,input().split())
        for _ in range(m):
            op,x,y=input().split()
            x=int(x);y=int(y)
            if op=="M":
                f[find(x)]=find(y)
            else:
                if same(x,y):
                    print("Yes")
                else:
                    print("No")
        ```

#### 例题2

[自建OJ：连通块中点的数量](http://47.121.118.174/p/52)


#### 代码实现

## 练习题单


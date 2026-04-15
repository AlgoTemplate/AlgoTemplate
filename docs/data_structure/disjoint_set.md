## 视频讲解
??? info "🎥 视频讲解1"
    <iframe 
      src="https://player.bilibili.com/player.html?bvid=BV1yTQnBfEDB"
      scrolling="no" 
      frameborder="0" 
      allowfullscreen="true"
      width="100%" 
      height="500">
    </iframe>
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

??? example "路径压缩"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        const int N=1e5+10;
        int f[N],n,m;

        int find(int x){
            if(x==f[x]) return x;
            return f[x]=find(f[x]);
        }

        void merge(int x,int y){
            int fx=find(x),fy=find(y);
            if(fx!=fy) f[fx]=fy;
        }

        bool same(int x,int y){
            return find(x)==find(y);
        }

        int main(){
            cin>>n>>m;
            for(int i=1;i<=n;i++) f[i]=i;
            for(int i=1;i<=m;i++){
                string op;
                int x,y;
                cin>>op>>x>>y;
                if(op=="M") merge(x,y);
                else cout<<(same(x,y)?"Yes\n":"No\n");
            }
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.io.*;
        import java.util.*;

        public class Main{
            static int N=100010;
            static int[] f=new int[N];
            static int n,m;

            static int find(int x){
                if(x==f[x]) return x;
                return f[x]=find(f[x]);
            }

            static void merge(int x,int y){
                int fx=find(x),fy=find(y);
                if(fx!=fy) f[fx]=fy;
            }

            static boolean same(int x,int y){
                return find(x)==find(y);
            }

            public static void main(String[] args)throws Exception{
                BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
                StringTokenizer st=new StringTokenizer(br.readLine());
                n=Integer.parseInt(st.nextToken());
                m=Integer.parseInt(st.nextToken());

                for(int i=1;i<=n;i++) f[i]=i;

                for(int i=0;i<m;i++){
                    st=new StringTokenizer(br.readLine());
                    String op=st.nextToken();
                    int x=Integer.parseInt(st.nextToken());
                    int y=Integer.parseInt(st.nextToken());
                    if(op.equals("M")) merge(x,y);
                    else System.out.println(same(x,y)?"Yes":"No");
                }
            }
        }
        ```

    === "Python"
        ```python
        import sys
        input=sys.stdin.readline

        N=100010
        f=list(range(N))

        def find(x):
            if f[x]!=x:
                f[x]=find(f[x])
            return f[x]

        def merge(x,y):
            fx,fy=find(x),find(y)
            if fx!=fy:
                f[fx]=fy

        def same(x,y):
            return find(x)==find(y)

        n,m=map(int,input().split())
        for _ in range(m):
            op,x,y=input().split()
            x=int(x);y=int(y)
            if op=="M":
                merge(x,y)
            else:
                print("Yes" if same(x,y) else "No")
        ```

#### 例题2

[自建OJ：连通块中点的数量](http://47.121.118.174/p/52)


#### 代码实现

## 练习题单


#### Dijkstra算法


#### 例题1

[自建OJ：dijkstra求最短路1](http://47.121.118.174/p/26)

#### 代码实现
??? example "最短路（朴素 Dijkstra）"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        const int N=2e5+10;
        const int INF=2e9;

        struct edge{
            int to,w;
        };

        vector<edge> g[N];

        int n,m;
        int dis[N];
        bool vis[N];

        void add(int a,int b,int c){
            g[a].push_back({b,c});
        }

        void dijkstra(){
            for(int i=1;i<=n;i++) dis[i]=INF;

            dis[1]=0;

            for(int i=1;i<=n;i++){
                int u=-1;

                for(int j=1;j<=n;j++){
                    if(!vis[j] && (u==-1 || dis[j]<dis[u])){
                        u=j;
                    }
                }

                vis[u]=true;

                for(auto e:g[u]){
                    int v=e.to,d=e.w;
                    dis[v]=min(dis[v],dis[u]+d);
                }
            }
        }

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            cin>>n>>m;

            for(int i=1;i<=m;i++){
                int a,b,c;
                cin>>a>>b>>c;
                add(a,b,c);
            }

            dijkstra();

            if(dis[n]==INF) dis[n]=-1;

            cout<<dis[n];
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main{

            static final int N=200010;
            static final int INF=(int)2e9;

            static class Edge{
                int to,w;
                Edge(int t,int w){
                    this.to=t;
                    this.w=w;
                }
            }

            static ArrayList<Edge>[] g=new ArrayList[N];

            static int n,m;
            static int[] dis=new int[N];
            static boolean[] vis=new boolean[N];

            static void add(int a,int b,int c){
                g[a].add(new Edge(b,c));
            }

            static void dijkstra(){
                Arrays.fill(dis,INF);

                dis[1]=0;

                for(int i=1;i<=n;i++){
                    int u=-1;

                    for(int j=1;j<=n;j++){
                        if(!vis[j] && (u==-1 || dis[j]<dis[u])){
                            u=j;
                        }
                    }

                    vis[u]=true;

                    for(Edge e:g[u]){
                        int v=e.to,d=e.w;
                        dis[v]=Math.min(dis[v],dis[u]+d);
                    }
                }
            }

            public static void main(String[] args){
                Scanner in=new Scanner(System.in);

                n=in.nextInt();
                m=in.nextInt();

                for(int i=0;i<N;i++) g[i]=new ArrayList<>();

                for(int i=1;i<=m;i++){
                    int a=in.nextInt();
                    int b=in.nextInt();
                    int c=in.nextInt();
                    add(a,b,c);
                }

                dijkstra();

                if(dis[n]==INF) dis[n]=-1;

                System.out.print(dis[n]);
            }
        }
        ```

    === "Python"
        ```python
        import sys
        input=sys.stdin.readline

        INF=2_000_000_000

        n,m=map(int,input().split())

        g=[[] for _ in range(n+1)]

        for _ in range(m):
            a,b,c=map(int,input().split())
            g[a].append((b,c))

        dis=[INF]*(n+1)
        vis=[False]*(n+1)

        dis[1]=0

        for _ in range(n):
            u=-1
            for i in range(1,n+1):
                if not vis[i] and (u==-1 or dis[i]<dis[u]):
                    u=i

            vis[u]=True

            for v,w in g[u]:
                dis[v]=min(dis[v],dis[u]+w)

        if dis[n]==INF:
            dis[n]=-1

        print(dis[n])
        ```
#### 例题2

[自建OJ：dijkstra求最短路2](http://47.121.118.174/p/27)

#### 代码实现

??? example "最短路（堆优化 Dijkstra）"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        const int N=2e5+10;
        const int INF=2e9;

        struct edge{
            int to,w;
        };

        struct node{
            int dis,u;
            bool operator<(const node &o) const{
                return dis>o.dis;
            }
        };

        vector<edge> g[N];
        priority_queue<node> pq;

        int n,m;
        int dis[N];
        bool vis[N];

        void add(int a,int b,int c){
            g[a].push_back({b,c});
        }

        void dijkstra(){
            for(int i=1;i<=n;i++) dis[i]=INF;

            dis[1]=0;
            pq.push({0,1});

            while(!pq.empty()){
                auto cur=pq.top();pq.pop();
                int u=cur.u;

                if(vis[u]) continue;
                vis[u]=true;

                for(auto e:g[u]){
                    int v=e.to,d=e.w;

                    if(dis[u]+d<dis[v]){
                        dis[v]=dis[u]+d;
                        pq.push({dis[v],v});
                    }
                }
            }
        }

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            cin>>n>>m;

            for(int i=1;i<=m;i++){
                int a,b,c;
                cin>>a>>b>>c;
                add(a,b,c);
            }

            dijkstra();

            if(dis[n]==INF) dis[n]=-1;

            cout<<dis[n];
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main{

            static final int N=200010;
            static final int INF=(int)2e9;

            static class Edge{
                int to,w;
                Edge(int t,int w){
                    this.to=t;
                    this.w=w;
                }
            }

            static class Node implements Comparable<Node>{
                int dis,u;

                Node(int d,int u){
                    this.dis=d;
                    this.u=u;
                }

                public int compareTo(Node o){
                    return this.dis-o.dis;
                }
            }

            static ArrayList<Edge>[] g=new ArrayList[N];
            static PriorityQueue<Node> pq=new PriorityQueue<>();

            static int n,m;
            static int[] dis=new int[N];
            static boolean[] vis=new boolean[N];

            static void add(int a,int b,int c){
                g[a].add(new Edge(b,c));
            }

            static void dijkstra(){
                Arrays.fill(dis,INF);

                dis[1]=0;
                pq.add(new Node(0,1));

                while(!pq.isEmpty()){
                    Node cur=pq.poll();
                    int u=cur.u;

                    if(vis[u]) continue;
                    vis[u]=true;

                    for(Edge e:g[u]){
                        int v=e.to,d=e.w;

                        if(dis[u]+d<dis[v]){
                            dis[v]=dis[u]+d;
                            pq.add(new Node(dis[v],v));
                        }
                    }
                }
            }

            public static void main(String[] args){
                Scanner in=new Scanner(System.in);

                n=in.nextInt();
                m=in.nextInt();

                for(int i=0;i<N;i++) g[i]=new ArrayList<>();

                for(int i=1;i<=m;i++){
                    int a=in.nextInt();
                    int b=in.nextInt();
                    int c=in.nextInt();
                    add(a,b,c);
                }

                dijkstra();

                if(dis[n]==INF) dis[n]=-1;

                System.out.print(dis[n]);
            }
        }
        ```

    === "Python"
        ```python
        import sys
        import heapq
        input=sys.stdin.readline

        INF=2_000_000_000

        n,m=map(int,input().split())

        g=[[] for _ in range(n+1)]

        for _ in range(m):
            a,b,c=map(int,input().split())
            g[a].append((b,c))

        dis=[INF]*(n+1)
        vis=[False]*(n+1)

        dis[1]=0
        pq=[(0,1)]

        while pq:
            d,u=heapq.heappop(pq)

            if vis[u]:
                continue
            vis[u]=True

            for v,w in g[u]:
                if dis[u]+w<dis[v]:
                    dis[v]=dis[u]+w
                    heapq.heappush(pq,(dis[v],v))

        print(-1 if dis[n]==INF else dis[n])
        ```
#### 例题3

[自建OJ：营救](http://47.121.118.174/p/980)

#### 代码实现

??? example "最短路径变形（最小化路径最大边权）"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        typedef long long ll;

        const int N=1e4+10;
        const int INF=0x3f3f3f3f;

        struct edge{
            int to,d;
        };

        struct node{
            int u,d;
            bool operator<(const node &o) const{
                return d>o.d;
            }
        };

        vector<edge> g[N];

        bool vis[N];
        int dis[N];
        int n,m,s,t;

        void add(int a,int b,int c){
            g[a].push_back({b,c});
        }

        void dijkstra(){
            memset(dis,0x3f,sizeof dis);

            dis[s]=0;

            priority_queue<node> q;
            q.push({s,0});

            while(!q.empty()){
                auto cur=q.top();q.pop();
                int u=cur.u;

                if(vis[u]) continue;
                vis[u]=true;

                for(auto e:g[u]){
                    int v=e.to,d=e.d;

                    if(dis[v]>max(dis[u],d)){
                        dis[v]=max(dis[u],d);
                        q.push({v,dis[v]});
                    }
                }
            }
        }

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            cin>>n>>m>>s>>t;

            for(int i=1;i<=m;i++){
                int a,b,c;
                cin>>a>>b>>c;
                add(a,b,c);
                add(b,c,a);
            }

            dijkstra();

            cout<<dis[t];
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main{

            static final int N=10010;
            static final int INF=0x3f3f3f3f;

            static class Edge{
                int to,d;
                Edge(int t,int d){
                    this.to=t;
                    this.d=d;
                }
            }

            static class Node implements Comparable<Node>{
                int u,d;

                Node(int u,int d){
                    this.u=u;
                    this.d=d;
                }

                public int compareTo(Node o){
                    return this.d-o.d;
                }
            }

            static ArrayList<Edge>[] g=new ArrayList[N];
            static boolean[] vis=new boolean[N];
            static int[] dis=new int[N];

            static int n,m,s,t;

            static void add(int a,int b,int c){
                g[a].add(new Edge(b,c));
            }

            static void dijkstra(){
                Arrays.fill(dis,INF);

                dis[s]=0;

                PriorityQueue<Node> pq=new PriorityQueue<>();
                pq.add(new Node(s,0));

                while(!pq.isEmpty()){
                    Node cur=pq.poll();
                    int u=cur.u;

                    if(vis[u]) continue;
                    vis[u]=true;

                    for(Edge e:g[u]){
                        int v=e.to,d=e.d;

                        if(dis[v]>Math.max(dis[u],d)){
                            dis[v]=Math.max(dis[u],d);
                            pq.add(new Node(v,dis[v]));
                        }
                    }
                }
            }

            public static void main(String[] args){
                Scanner in=new Scanner(System.in);

                n=in.nextInt();
                m=in.nextInt();
                s=in.nextInt();
                t=in.nextInt();

                for(int i=0;i<N;i++) g[i]=new ArrayList<>();

                for(int i=1;i<=m;i++){
                    int a=in.nextInt();
                    int b=in.nextInt();
                    int c=in.nextInt();
                    add(a,b,c);
                    add(b,c,a);
                }

                dijkstra();

                System.out.print(dis[t]);
            }
        }
        ```

    === "Python"
        ```python
        import sys
        import heapq
        input=sys.stdin.readline

        INF=10**9

        n,m,s,t=map(int,input().split())

        g=[[] for _ in range(n+1)]

        for _ in range(m):
            a,b,c=map(int,input().split())
            g[a].append((b,c))
            g[b].append((a,c))

        vis=[False]*(n+1)
        dis=[INF]*(n+1)

        dis[s]=0
        pq=[(0,s)]

        while pq:
            d,u=heapq.heappop(pq)

            if vis[u]:
                continue
            vis[u]=True

            for v,w in g[u]:
                if dis[v]>max(dis[u],w):
                    dis[v]=max(dis[u],w)
                    heapq.heappush(pq,(dis[v],v))

        print(dis[t])
        ```
??? example "二分答案 + DFS 可达性判断"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        typedef long long ll;

        const int N=1e4+10;

        struct edge{
            int to,d;
        };

        vector<edge> g[N];

        bool vis[N];
        bool flag=false;

        int n,m,s,t;

        void add(int a,int b,int c){
            g[a].push_back({b,c});
        }

        void dfs(int u,int mid){
            if(flag) return;
            if(u==t){
                flag=true;
                return;
            }

            vis[u]=true;

            for(auto e:g[u]){
                int v=e.to;
                int d=e.d;

                if(d>mid || vis[v]) continue;

                dfs(v,mid);
            }
        }

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            cin>>n>>m>>s>>t;

            for(int i=1;i<=m;i++){
                int a,b,c;
                cin>>a>>b>>c;
                add(a,b,c);
                add(b,a,c);
            }

            int l=1,r=10000;

            while(l<r){
                int mid=(l+r)>>1;

                memset(vis,false,sizeof vis);
                flag=false;

                dfs(s,mid);

                if(flag){
                    r=mid;
                }else{
                    l=mid+1;
                }
            }

            cout<<l;
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main{

            static final int N=10010;

            static class Edge{
                int to,d;
                Edge(int t,int d){
                    this.to=t;
                    this.d=d;
                }
            }

            static ArrayList<Edge>[] g=new ArrayList[N];
            static boolean[] vis=new boolean[N];
            static boolean flag=false;

            static int n,m,s,t;

            static void add(int a,int b,int c){
                g[a].add(new Edge(b,c));
            }

            static void dfs(int u,int mid){
                if(flag) return;
                if(u==t){
                    flag=true;
                    return;
                }

                vis[u]=true;

                for(Edge e:g[u]){
                    int v=e.to;
                    int d=e.d;

                    if(d>mid || vis[v]) continue;

                    dfs(v,mid);
                }
            }

            public static void main(String[] args){
                Scanner in=new Scanner(System.in);

                n=in.nextInt();
                m=in.nextInt();
                s=in.nextInt();
                t=in.nextInt();

                for(int i=0;i<N;i++) g[i]=new ArrayList<>();

                for(int i=1;i<=m;i++){
                    int a=in.nextInt();
                    int b=in.nextInt();
                    int c=in.nextInt();
                    add(a,b,c);
                    add(b,c,a);
                }

                int l=1,r=10000;

                while(l<r){
                    int mid=(l+r)>>1;

                    Arrays.fill(vis,false);
                    flag=false;

                    dfs(s,mid);

                    if(flag) r=mid;
                    else l=mid+1;
                }

                System.out.print(l);
            }
        }
        ```

    === "Python"
        ```python
        import sys
        sys.setrecursionlimit(10**7)
        input=sys.stdin.readline

        n,m,s,t=map(int,input().split())

        g=[[] for _ in range(n+1)]

        for _ in range(m):
            a,b,c=map(int,input().split())
            g[a].append((b,c))
            g[b].append((a,c))

        vis=[]
        flag=False

        def dfs(u,mid):
            global flag
            if flag:
                return
            if u==t:
                flag=True
                return

            vis[u]=True

            for v,d in g[u]:
                if d>mid or vis[v]:
                    continue
                dfs(v,mid)

        def check(mid):
            global vis,flag
            vis=[False]*(n+1)
            flag=False
            dfs(s,mid)
            return flag

        l,r=1,10000

        while l<r:
            mid=(l+r)//2
            if check(mid):
                r=mid
            else:
                l=mid+1

        print(l)
        ```
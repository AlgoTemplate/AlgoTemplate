#### Dijkstra算法


#### 例题1

[自建OJ：dijkstra求最短路1](http://47.121.118.174/p/26)

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

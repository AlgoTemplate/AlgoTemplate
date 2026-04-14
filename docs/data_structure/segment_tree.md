## 视频讲解

??? info "🎥 视频讲解"
    <iframe 
      src="https://player.bilibili.com/player.html?bvid=BV1cmQtB1EXu"
      scrolling="no" 
      frameborder="0" 
      allowfullscreen="true"
      width="100%" 
      height="500">
    </iframe>

#### 例题1

[自建OJ：单点修改，区间求和](http://47.121.118.174/p/107)

??? note "建树"

    <video controls preload="auto" style="width:100%; border-radius:12px;">
        <source src="./MP4/SegmentTreeBuild.mp4" type="video/mp4">
        你的浏览器不支持 video 标签
    </video>

??? note "建树+修改"

    <video controls preload="auto" style="width:100%; border-radius:12px;">
        <source src="./MP4/SegmentTreeModify.mp4" type="video/mp4">
        你的浏览器不支持 video 标签
    </video>

#### 代码实现
??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        typedef long long ll;
        const int N=2e5+10;
        int a[N];
        ll sum[N<<2];
        int n,q;

        void update(int id){
            sum[id]=sum[id<<1]+sum[id<<1|1];
        }

        void build(int id,int l,int r){
            if(l==r){
                sum[id]=a[l];
                return;
            }
            int mid=(l+r)>>1;
            build(id<<1,l,mid);
            build(id<<1|1,mid+1,r);
            update(id);
        }

        void modify(int id,int l,int r,int pos,int x){
            if(l==r){
                sum[id]+=x;
                return;
            }
            int mid=(l+r)>>1;
            if(pos<=mid) modify(id<<1,l,mid,pos,x);
            else modify(id<<1|1,mid+1,r,pos,x);
            update(id);
        }

        ll query(int id,int l,int r,int ql,int qr){
            if(l==ql&&r==qr) return sum[id];
            int mid=(l+r)>>1;
            if(qr<=mid) return query(id<<1,l,mid,ql,qr);
            else if(ql>mid) return query(id<<1|1,mid+1,r,ql,qr);
            else return query(id<<1,l,mid,ql,mid)+query(id<<1|1,mid+1,r,mid+1,qr);
        }

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            cin>>n>>q;
            for(int i=1;i<=n;i++) cin>>a[i];
            build(1,1,n);

            for(int i=1;i<=q;i++){
                int op,x,y;
                cin>>op>>x>>y;
                if(op==1) modify(1,1,n,x,y);
                else cout<<query(1,1,n,x,y)<<"\n";
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
            static int[] a=new int[N];
            static long[] sum=new long[N<<2];
            static int n,q;

            static void update(int id){
                sum[id]=sum[id<<1]+sum[id<<1|1];
            }

            static void build(int id,int l,int r){
                if(l==r){
                    sum[id]=a[l];
                    return;
                }
                int mid=(l+r)>>1;
                build(id<<1,l,mid);
                build(id<<1|1,mid+1,r);
                update(id);
            }

            static void modify(int id,int l,int r,int pos,int x){
                if(l==r){
                    sum[id]+=x;
                    return;
                }
                int mid=(l+r)>>1;
                if(pos<=mid) modify(id<<1,l,mid,pos,x);
                else modify(id<<1|1,mid+1,r,pos,x);
                update(id);
            }

            static long query(int id,int l,int r,int ql,int qr){
                if(l==ql&&r==qr) return sum[id];
                int mid=(l+r)>>1;
                if(qr<=mid) return query(id<<1,l,mid,ql,qr);
                else if(ql>mid) return query(id<<1|1,mid+1,r,ql,qr);
                else return query(id<<1,l,mid,ql,mid)+query(id<<1|1,mid+1,r,mid+1,qr);
            }

            public static void main(String[] args)throws Exception{
                BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
                StringTokenizer st=new StringTokenizer(br.readLine());
                n=Integer.parseInt(st.nextToken());
                q=Integer.parseInt(st.nextToken());

                st=new StringTokenizer(br.readLine());
                for(int i=1;i<=n;i++) a[i]=Integer.parseInt(st.nextToken());

                build(1,1,n);

                StringBuilder sb=new StringBuilder();
                for(int i=1;i<=q;i++){
                    st=new StringTokenizer(br.readLine());
                    int op=Integer.parseInt(st.nextToken());
                    int x=Integer.parseInt(st.nextToken());
                    int y=Integer.parseInt(st.nextToken());
                    if(op==1) modify(1,1,n,x,y);
                    else sb.append(query(1,1,n,x,y)).append('\n');
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
        a=[0]*N
        sumv=[0]*(N<<2)

        def update(id):
            sumv[id]=sumv[id<<1]+sumv[id<<1|1]

        def build(id,l,r):
            if l==r:
                sumv[id]=a[l]
                return
            mid=(l+r)//2
            build(id<<1,l,mid)
            build(id<<1|1,mid+1,r)
            update(id)

        def modify(id,l,r,pos,x):
            if l==r:
                sumv[id]+=x
                return
            mid=(l+r)//2
            if pos<=mid:
                modify(id<<1,l,mid,pos,x)
            else:
                modify(id<<1|1,mid+1,r,pos,x)
            update(id)

        def query(id,l,r,ql,qr):
            if l==ql and r==qr:
                return sumv[id]
            mid=(l+r)//2
            if qr<=mid:
                return query(id<<1,l,mid,ql,qr)
            elif ql>mid:
                return query(id<<1|1,mid+1,r,ql,qr)
            else:
                return query(id<<1,l,mid,ql,mid)+query(id<<1|1,mid+1,r,mid+1,qr)

        n,q=map(int,input().split())
        arr=list(map(int,input().split()))
        for i in range(1,n+1):
            a[i]=arr[i-1]

        build(1,1,n)

        for _ in range(q):
            op,x,y=map(int,input().split())
            if op==1:
                modify(1,1,n,x,y)
            else:
                print(query(1,1,n,x,y))
        ```

#### 例题2

[自建OJ：单点修改、区间最值](http://47.121.118.174/p/108)

#### 代码实现
??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        const int N=2e5+10;

        struct node{
            int minv,cnt;
        }seg[N<<2];

        int n,q,a[N];

        node merge(const node &l,const node &r){
            if(l.minv<r.minv) return {l.minv,l.cnt};
            else if(l.minv>r.minv) return {r.minv,r.cnt};
            else return {l.minv,l.cnt+r.cnt};
        }

        void update(int id){
            seg[id]=merge(seg[id<<1],seg[id<<1|1]);
        }

        void build(int id,int l,int r){
            if(l==r){
                seg[id]={a[l],1};
                return;
            }
            int mid=(l+r)>>1;
            build(id<<1,l,mid);
            build(id<<1|1,mid+1,r);
            update(id);
        }

        void modify(int id,int l,int r,int pos,int x){
            if(l==r){
                seg[id]={x,1};
                return;
            }
            int mid=(l+r)>>1;
            if(pos<=mid) modify(id<<1,l,mid,pos,x);
            else modify(id<<1|1,mid+1,r,pos,x);
            update(id);
        }

        node query(int id,int l,int r,int ql,int qr){
            if(l==ql&&r==qr) return seg[id];
            int mid=(l+r)>>1;
            if(qr<=mid) return query(id<<1,l,mid,ql,qr);
            else if(ql>mid) return query(id<<1|1,mid+1,r,ql,qr);
            return merge(query(id<<1,l,mid,ql,mid),query(id<<1|1,mid+1,r,mid+1,qr));
        }

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            cin>>n>>q;
            for(int i=1;i<=n;i++) cin>>a[i];
            build(1,1,n);

            for(int i=1;i<=q;i++){
                int op;cin>>op;
                if(op==1){
                    int x,d;cin>>x>>d;
                    modify(1,1,n,x,d);
                }else{
                    int l,r;cin>>l>>r;
                    node ans=query(1,1,n,l,r);
                    cout<<ans.minv<<" "<<ans.cnt<<"\n";
                }
            }
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.io.*;
        import java.util.*;

        public class Main {
            static final int N = 200005;

            static class Node {
                int minv, cnt;
                Node(int m, int c) { minv = m; cnt = c; }
            }

            static Node[] seg = new Node[N << 2];
            static int[] a = new int[N];
            static int n, q;

            static Node merge(Node l, Node r) {
                if (l == null) return r;
                if (r == null) return l;
                if (l.minv < r.minv) return new Node(l.minv, l.cnt);
                else if (l.minv > r.minv) return new Node(r.minv, r.cnt);
                else return new Node(l.minv, l.cnt + r.cnt);
            }

            static void update(int id) {
                seg[id] = merge(seg[id << 1], seg[id << 1 | 1]);
            }

            static void build(int id, int l, int r) {
                if (l == r) {
                    seg[id] = new Node(a[l], 1);
                    return;
                }
                int mid = (l + r) >> 1;
                build(id << 1, l, mid);
                build(id << 1 | 1, mid + 1, r);
                update(id);
            }

            static void modify(int id, int l, int r, int pos, int x) {
                if (l == r) {
                    seg[id] = new Node(x, 1);
                    return;
                }
                int mid = (l + r) >> 1;
                if (pos <= mid) modify(id << 1, l, mid, pos, x);
                else modify(id << 1 | 1, mid + 1, r, pos, x);
                update(id);
            }

            static Node query(int id, int l, int r, int ql, int qr) {
                if (ql <= l && r <= qr) return seg[id];
                int mid = (l + r) >> 1;
                Node res = null;
                if (ql <= mid) res = merge(res, query(id << 1, l, mid, ql, qr));
                if (qr > mid) res = merge(res, query(id << 1 | 1, mid + 1, r, ql, qr));
                return res;
            }

            public static void main(String[] args) throws Exception {
                // 使用 FastReader 防止读取瓶颈
                FastReader fr = new FastReader(System.in);
                n = fr.nextInt();
                q = fr.nextInt();

                for (int i = 1; i <= n; i++) a[i] = fr.nextInt();

                build(1, 1, n);

                PrintWriter out = new PrintWriter(System.out);
                while (q-- > 0) {
                    int op = fr.nextInt();
                    if (op == 1) {
                        int x = fr.nextInt();
                        int d = fr.nextInt();
                        modify(1, 1, n, x, d); 
                    } else {
                        int l = fr.nextInt();
                        int r = fr.nextInt();
                        Node ans = query(1, 1, n, l, r); 
                        out.println(ans.minv + " " + ans.cnt);
                    }
                }
                out.flush();
            }

            static class FastReader {
                StringTokenizer st;
                BufferedReader br;
                public FastReader(InputStream s) { br = new BufferedReader(new InputStreamReader(s)); }
                public String next() throws Exception {
                    while (st == null || !st.hasMoreElements()) st = new StringTokenizer(br.readLine());
                    return st.nextToken();
                }
                public int nextInt() throws Exception { return Integer.parseInt(next()); }
            }
        }
        ```

    === "Python"
        ```python
        import sys
        input=sys.stdin.readline

        N=200000+10
        a=[0]*N
        seg=[(0,0)]*(N<<2)

        def merge(l,r):
            if l[0]<r[0]:
                return (l[0],l[1])
            elif l[0]>r[0]:
                return (r[0],r[1])
            else:
                return (l[0],l[1]+r[1])

        def update(id):
            seg[id]=merge(seg[id<<1],seg[id<<1|1])

        def build(id,l,r):
            if l==r:
                seg[id]=(a[l],1)
                return
            mid=(l+r)//2
            build(id<<1,l,mid)
            build(id<<1|1,mid+1,r)
            update(id)

        def modify(id,l,r,pos,x):
            if l==r:
                seg[id]=(x,1)
                return
            mid=(l+r)//2
            if pos<=mid:
                modify(id<<1,l,mid,pos,x)
            else:
                modify(id<<1|1,mid+1,r,pos,x)
            update(id)

        def query(id,l,r,ql,qr):
            if l==ql and r==qr:
                return seg[id]
            mid=(l+r)//2
            if qr<=mid:
                return query(id<<1,l,mid,ql,qr)
            elif ql>mid:
                return query(id<<1|1,mid+1,r,ql,qr)
            else:
                return merge(query(id<<1,l,mid,ql,mid),query(id<<1|1,mid+1,r,mid+1,qr))

        n,q=map(int,input().split())
        arr=list(map(int,input().split()))
        for i in range(1,n+1):
            a[i]=arr[i-1]

        build(1,1,n)

        for _ in range(q):
            op=int(input())
            if op==1:
                x,d=map(int,input().split())
                modify(1,1,n,x,d)
            else:
                l,r=map(int,input().split())
                ans=query(1,1,n,l,r)
                print(ans[0],ans[1])
        ```
## 练习题单

- [ ] [自建OJ：区间修改、单点查询](http://47.121.118.174/p/58)
- [ ] [自建OJ：加弦](http://47.121.118.174/p/686)
- [ ] [洛谷：最大数](https://www.luogu.com.cn/problem/P1198)
- [ ] [自建OJ：区间最大子段和](http://47.121.118.174/p/110)
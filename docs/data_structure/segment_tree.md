#### 例题1

[自建OJ：单点修改，区间求和](http://47.121.118.174/p/107)

??? note "建树"
    <div style="display:flex; justify-content:center;">
        <img src="./GIF/SegmentTreeBuild.gif" style="max-width:900px; width:100%; border-radius:12px;">
    </div>

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
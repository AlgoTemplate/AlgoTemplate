## 序列二分
1. `getL()` 是有序序列中 $=x$ 的最左边的数的位置，若 $x$ 不存在则输出 `-1`。
2. `getR() `是有序序列中 $=x$ 的最右边的数的位置，若 $x$ 不存在则输出 `-1`。
3. `lower_bound()` 是有序序列中 $\ge x$ 的第一个数的位置，如果 $x>$ 序列最后一个数，则返回 $n$。
4. `upper_bound()` 是有序序列中 $>x$ 的第一个数的位置，如果 $x\ge$ 序列最后一个数，则返回 $n$。

注：C++ 与 Python 语言有自带的 `lower_bound()` 和 `upper_bound()` 函数。
#### 模版题
[蓝桥OJ:整数查找](https://www.lanqiao.cn/problems/18492/learning/)
???+ example "参考实现"

    === "C++"
        ```cpp
        #include <iostream>

        using namespace std;

        const int N = 1e5 + 10;

        int n, q;
        int a[N];

        int main()
        {
            cin >> n >> q;

            for(int i = 1; i <= n; i ++) cin >> a[i];

            while(q --)
            {
                int t, l, r, x;
                cin >> t >> l >> r >> x;
                if(t == 1)
                {
                    while(l < r)
                    {
                        int mid = l + r >> 1;
                        if(a[mid] >= x) r = mid;
                        else l = mid + 1;
                    }
                    if(a[l] != x) cout << -1 << endl;
                    else cout << l << endl;
                }
                else if(t == 2)
                {
                    while(l < r)
                    {
                        int mid = l + r + 1 >> 1;
                        if(a[mid] <= x) l = mid;
                        else r = mid - 1;
                    }
                    if(a[l] != x) cout << -1 << endl;
                    else cout << l << endl;
                }
                else if(t == 3)
                {
                    while(l < r)
                    {
                        int mid = l + r >> 1;
                        if(a[mid] >= x) r = mid;
                        else l = mid + 1;
                    }
                    if(a[l] < x) cout << -1 << endl;
                    else cout << l << endl;
                }
                else
                {
                    while(l < r)
                    {
                        int mid = l + r >> 1;
                        if(a[mid] > x) r = mid;
                        else l = mid + 1;
                    }
                    if(a[l] <= x) cout << -1 << endl;
                    else cout << l << endl;
                }
            }
            return 0;
        }
        ```
    === "Java"
        ```java
        import java.io.BufferedReader;
        import java.io.IOException;
        import java.io.InputStreamReader;
        import java.io.PrintWriter;
        import java.util.StringTokenizer;

        public class Main {

            public static void main(String[] args) {
                int t=1;
                while(t-->0) solve();

                out.flush();
            }
            static int N=(int)(1e5+10);
            static int a[]=new int[N];
            static int n;
            static int getL(int a[],int l,int r,int x){
              while(l<r){
                int mid=l+r>>1;
                if(x<=a[mid]){
                  r=mid;
                }else{
                  l=mid+1;
                }
              }
              if(a[l]!=x) return -1;
              return l;
            }
            static int getR(int a[],int l,int r,int x){
              while(l<r){
                int mid=l+r+1>>1;
                if(x<a[mid]){
                  r=mid-1;
                }else{
                  l=mid;
                }
              }
              if(a[l]!=x) return -1;
              return l;
            }
            static int lower_bound(int a[],int l,int r,int x){
              if(a[r]<x) return -1;
              while(l<r){
                int mid=l+r>>1;
                if(x<=a[mid]){
                  r=mid;
                }else{
                  l=mid+1;
                }
              }
              return l;
            }
            static int upper_bound(int a[],int l,int r,int x){
              if(a[r]<=x) return -1;
              while(l<r){
                int mid=l+r>>1;
                if(x<a[mid]){
                  r=mid;
                }else{
                  l=mid+1;
                }
              }
              return l;
            }
            static void solve(){
              n=in.nextInt();
              int q=in.nextInt();
              for(int i=1;i<=n;i++){
                a[i]=in.nextInt();
              }
              while(q-->0){
                int op=in.nextInt();
                int l=in.nextInt();
                int r=in.nextInt();
                int x=in.nextInt();
                if(op==1){
                  out.println(getL(a,l,r,x));
                }else if(op==2){
                  out.println(getR(a,l,r,x));
                }else if(op==3){
                  out.println(lower_bound(a,l,r,x));
                }else{
                  out.println(upper_bound(a,l,r,x));
                }
              }
            }
            static FastReader in = new FastReader();
            static PrintWriter out=new PrintWriter(System.out);
            static class FastReader{
                static BufferedReader br;
                static StringTokenizer st;
                FastReader(){
                    br=new BufferedReader(new InputStreamReader(System.in));
                }
                String next(){
                    String str="";
                    while(st==null||!st.hasMoreElements()){
                        try {
                            str=br.readLine();
                        } catch (IOException e) {
                            throw new RuntimeException(e);
                        }
                        st=new StringTokenizer(str);
                    }
                    return st.nextToken();
                }
                int nextInt(){
                    return Integer.parseInt(next());
                }
                double nextDouble(){
                    return Double.parseDouble(next());
                }
                long nextLong(){
                    return Long.parseLong(next());
                }
            }
        }
        ```
    === "Python"
        ```python
        def main():
            import sys
            input = sys.stdin.read
            data = input().split()
            
            idx = 0
            n = int(data[idx])
            q = int(data[idx + 1])
            idx += 2
            
            a = [0] * (n + 1)
            for i in range(1, n + 1):
                a[i] = int(data[idx])
                idx += 1
            
            for _ in range(q):
                t = int(data[idx])
                l = int(data[idx + 1])
                r = int(data[idx + 2])
                x = int(data[idx + 3])
                idx += 4
                
                if t == 1:
                    while l < r:
                        mid = (l + r) // 2
                        if a[mid] >= x:
                            r = mid
                        else:
                            l = mid + 1
                    if a[l] != x:
                        print(-1)
                    else:
                        print(l)
                elif t == 2:
                    while l < r:
                        mid = (l + r + 1) // 2
                        if a[mid] <= x:
                            l = mid
                        else:
                            r = mid - 1
                    if a[l] != x:
                        print(-1)
                    else:
                        print(l)
                elif t == 3:
                    while l < r:
                        mid = (l + r) // 2
                        if a[mid] >= x:
                            r = mid
                        else:
                            l = mid + 1
                    if a[l] < x:
                        print(-1)
                    else:
                        print(l)
                elif t == 4:
                    while l < r:
                        mid = (l + r) // 2
                        if a[mid] > x:
                            r = mid
                        else:
                            l = mid + 1
                    if a[l] <= x:
                        print(-1)
                    else:
                        print(l)

        if __name__ == "__main__":
            main()
        ```
## 答案二分
答案二分是二分的一个应用，当我们需要在一个区间内找到一个数，使得这个数满足某种性质，而这个数是单调的，我们就可以使用答案二分。
### 模版题
[自建OJ:二分答案](https://hydro.ac/d/shallowdream/p/33/files)
???+ example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        typedef long long ll;
        const int N=1e5+10;
        ll a[N];
        ll n,m;
        int main(){
            cin>>n>>m;
            for(int i=1;i<=n;i++) cin>>a[i];
            ll ans=0;
            for(int i=1;i<=10000;i++){
                int cnt=1;
                ll sum=0;
                for(int j=1;j<=n;j++){
                    if(a[j]>i){
                        cnt=-1;
                        break;
                    }
                    if(sum+a[j]<=i){
                        sum=sum+a[j];
                    }else{
                        sum=a[j];
                        cnt++;
                    }
                }
                if(cnt!=-1){
                    if(cnt<=m){
                        cout<<i;
                        break;
                    }
                }
            }
        }
        ```
    === "Java"
        ```java
                import java.util.Scanner;

        public class Main {
            static final int N = 100010;
            static int[] a = new int[N];
            static long n, k;

            // 检查是否可以将所有元素至少提升到 mid，使用的操作数不超过 k
            static boolean check(long mid) {
                long x = k;
                for (int i = 1; i <= n; i++) {
                    if (a[i] < mid) {
                        x -= (mid - a[i]);
                    }
                    if (x < 0) {
                        return false;  // 操作次数不足
                    }
                }
                return true;  // 可以达到 mid
            }

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                n = sc.nextLong();
                k = sc.nextLong();
                for (int i = 1; i <= n; i++) {
                    a[i] = sc.nextInt();
                }

                long l = 1, r = (long) 1e14;
                while (l < r) {
                    long mid = (l + r + 1) / 2;
                    if (check(mid)) {
                        l = mid;
                    } else {
                        r = mid - 1;
                    }
                }

                System.out.println(l);
            }
        }
        ```
    === "Python"
        ```python
        def check(mid):
            x = k
            for i in range(1, n + 1):
                if a[i] < mid:
                    x -= (mid - a[i])
                if x < 0:
                    return False  # 操作次数不足
            return True  # 可以将所有元素提升到至少 mid

        # 读取输入
        n, k = map(int, input().split())
        a = [0] + list(map(int, input().split()))  # 下标从 1 开始

        l, r = 1, int(1e14)
        while l < r:
            mid = (l + r + 1) // 2
            if check(mid):
                l = mid
            else:
                r = mid - 1

        print(l)
        ```

## 浮点数二分
浮点数二分与整数二分的区别在于，浮点数二分的区间是一个连续的区间，而整数二分的区间是一个离散的区间，其选择的模板题实现也是基于答案二分的思想。
### 模板题
[蓝桥OJ:M次方根](https://www.lanqiao.cn/problems/1542/learning)

+++ example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        typedef long long ll; 
        typedef pair<int,int> PII;
        const int N=1e5+10;
        int n,m;
        bool check(double x){
            double ans=1;
            for(int i=1;i<=m;i++){
                ans=ans*x;
            }
            return ans<=n;
        }
        double eps=1e-9;
        void solve(){
            scanf("%d%d",&n,&m);
            double l=1,r=n;
            while(l+eps<r){
                double mid=(l+r)/2;
                if(check(mid)){
                    l=mid;
                }else{
                    r=mid;
                }
            }
            printf("%.7lf",l);
        }
        int main(){
            ios::sync_with_stdio(false);cin.tie(0);
            int t=1;
            // scanf("%d",&t);
            // cin>>t;
            while(t--) solve();
        }
        ```
    === "Java"
        ```java
        import java.io.BufferedReader;
        import java.io.IOException;
        import java.io.InputStreamReader;
        import java.io.PrintWriter;
        import java.util.StringTokenizer;

        public class Main {
            public static void main(String[] args) {
                solve();
                out.flush();
            }
            static double N,M;
            static double eps=1e-9;
            static boolean check(double x){
              double res=1;
              for(int i=1;i<=M;i++){
                  res=res*x;
              }
              return res>=N;
            }
            static void solve(){
              N=in.nextDouble();
              M=in.nextDouble();
              double l=1,r=N;
              while(l+eps<r){
                double mid=(l+r)/2;
                if(check(mid)){
                  r=mid;
                }else{
                  l=mid;
                }
              }
              out.printf("%.7f",l);
            }

            static FastReader in = new FastReader();
            static PrintWriter out=new PrintWriter(System.out);
            static class FastReader{
                static BufferedReader br;
                static StringTokenizer st;
                FastReader(){
                    br=new BufferedReader(new InputStreamReader(System.in));
                }
                String next(){
                    String str="";
                    while(st==null||!st.hasMoreElements()){
                        try {
                            str=br.readLine();
                        } catch (IOException e) {
                            throw new RuntimeException(e);
                        }
                        st=new StringTokenizer(str);
                    }
                    return st.nextToken();
                }
                int nextInt(){
                    return Integer.parseInt(next());
                }
                double nextDouble(){
                    return Double.parseDouble(next());
                }
                long nextLong(){
                    return Long.parseLong(next());
                }
            }
        }
        ```
    === "Python"
        ```python
        def check(x, y):
            result = 1.0
            for _ in range(int(y)):
                result *= x
            return result

        def find_root(x, y):
            l, r = 0.0, 10000.0
            while r - l > 1e-8:
                mid = (l + r) / 2
                if check(mid, y) >= x:
                    r = mid
                else:
                    l = mid
            return l

        if __name__ == "__main__":
            x, y = map(float, input().split())
            result = find_root(x, y)
            print(f"{result:.7f}")
        ```
### 练习题单
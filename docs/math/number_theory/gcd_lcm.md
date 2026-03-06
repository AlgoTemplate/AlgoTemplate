## 视频讲解

??? info "🎥 视频讲解"
    <iframe 
      src="https://player.bilibili.com/player.html?bvid=BV1czPezbEVV"
      scrolling="no" 
      frameborder="0" 
      allowfullscreen="true"
      width="100%" 
      height="500">
    </iframe>

??? info "🎥 视频讲解"
    <iframe 
      src="https://player.bilibili.com/player.html?bvid=BV1B8PqzwEyw"
      scrolling="no" 
      frameborder="0" 
      allowfullscreen="true"
      width="100%" 
      height="500">
    </iframe>
    

#### 例题1

[自建OJ：最大公约数](http://47.121.118.174/p/490)

#### 代码实现

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        int gcd(int a,int b){
            if(b==0) return a;
            return gcd(b,a%b);
        }

        int main(){
            int a,b;
            cin>>a>>b;
            cout<<gcd(a,b)<<"\n";
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main {

            static int gcd(int a,int b){
                if(b==0) return a;
                return gcd(b,a%b);
            }

            public static void main(String[] args){
                Scanner sc=new Scanner(System.in);
                int a=sc.nextInt();
                int b=sc.nextInt();
                System.out.println(gcd(a,b));
            }
        }
        ```

    === "Python"
        ```python
        import sys
        input = sys.stdin.readline

        def gcd(a,b):
            if b==0:
                return a
            return gcd(b,a%b)

        a,b = map(int,input().split())
        print(gcd(a,b))
        ```

#### 例题2

[自建OJ：最小公倍数](http://47.121.118.174/p/491)

#### 代码实现

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        long long gcd(long long a,long long b){
            if(b==0) return a;
            return gcd(b,a%b);
        }

        int main(){
            long long a,b;
            cin>>a>>b;
            cout<<a*b/gcd(a,b)<<"\n";
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main {

            static long gcd(long a,long b){
                if(b==0) return a;
                return gcd(b,a%b);
            }

            public static void main(String[] args){
                Scanner sc=new Scanner(System.in);
                long a=sc.nextLong();
                long b=sc.nextLong();
                System.out.println(a*b/gcd(a,b));
            }
        }
        ```

    === "Python"
        ```python
        import sys
        input = sys.stdin.readline

        def gcd(a,b):
            if b==0:
                return a
            return gcd(b,a%b)

        a,b = map(int,input().split())
        print(a*b//gcd(a,b))
        ```
#### 例题3

[自建OJ：1~n的最小公倍数](http://47.121.118.174/p/24)

#### 代码实现

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        const int mod=1e9+7;
        map<int,int> mp;
        long long ans=1;

        void divide(int x){
            for(int i=2;i*i<=x;i++){
                int cnt=0;
                while(x%i==0){
                    cnt++;
                    x/=i;
                }
                mp[i]=max(mp[i],cnt);
            }
            if(x>1) mp[x]=max(mp[x],1);
        }

        int main(){
            int n;
            cin>>n;
            for(int i=2;i<=n;i++) divide(i);
            for(auto key:mp){
                int x=key.first,y=key.second;
                for(int i=1;i<=y;i++) ans=ans*x%mod;
            }
            cout<<ans;
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main {

            static final long mod = 1000000007;
            static HashMap<Integer,Integer> mp = new HashMap<>();
            static long ans = 1;

            static void divide(int x){
                for(int i=2;i*i<=x;i++){
                    int cnt=0;
                    while(x%i==0){
                        cnt++;
                        x/=i;
                    }
                    if(cnt>0){
                        mp.put(i, Math.max(mp.getOrDefault(i,0), cnt));
                    }
                }
                if(x>1){
                    mp.put(x, Math.max(mp.getOrDefault(x,0), 1));
                }
            }

            public static void main(String[] args){
                Scanner sc=new Scanner(System.in);
                int n=sc.nextInt();
                for(int i=2;i<=n;i++) divide(i);
                for(Map.Entry<Integer,Integer> e:mp.entrySet()){
                    int x=e.getKey(), y=e.getValue();
                    for(int i=1;i<=y;i++) ans=ans*x%mod;
                }
                System.out.println(ans);
            }
        }
        ```

    === "Python"
        ```python
        import sys
        input = sys.stdin.readline
        mod = 10**9+7

        mp = {}
        ans = 1

        def divide(x):
            i = 2
            while i * i <= x:
                cnt = 0
                while x % i == 0:
                    cnt += 1
                    x //= i
                if cnt:
                    mp[i] = max(mp.get(i,0), cnt)
                i += 1
            if x > 1:
                mp[x] = max(mp.get(x,0), 1)

        n = int(input())
        for i in range(2, n+1):
            divide(i)

        for x, y in mp.items():
            for _ in range(y):
                ans = ans * x % mod

        print(ans)
        ```

#### 练习题单

??? tip "最大公约数"
    - [ ] [自建OJ：相邻互质](http://47.121.118.174/p/441)
    - [ ] [自建OJ：序列](http://47.121.118.174/p/176)
    - [ ] [洛谷：等差数列](https://www.luogu.com.cn/problem/P8682)


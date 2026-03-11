#### 例题1

[自建OJ：递归实现指数型枚举](http://47.121.118.174/p/35)

#### 代码实现
??? example "参考实现"
    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        const int N=20;
        int n;
        bool vis[N];

        void dfs(int u){
            if(u>n){
                for(int i=1;i<=n;i++){
                    if(vis[i]) cout<<i<<" ";
                }
                cout<<"\n";
                return;
            }
            vis[u]=false;
            dfs(u+1);
            vis[u]=true;
            dfs(u+1);
        }

        int main(){
            cin>>n;
            dfs(1);
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main {

            static int n;
            static boolean[] vis=new boolean[20];

            static void dfs(int u){
                if(u>n){
                    for(int i=1;i<=n;i++){
                        if(vis[i]) System.out.print(i+" ");
                    }
                    System.out.println();
                    return;
                }
                vis[u]=false;
                dfs(u+1);
                vis[u]=true;
                dfs(u+1);
            }

            public static void main(String[] args){
                Scanner sc=new Scanner(System.in);
                n=sc.nextInt();
                dfs(1);
            }

        }
        ```

    === "Python"
        ```python
        import sys
        input=sys.stdin.readline

        n=int(input())
        vis=[False]*20

        def dfs(u):
            if u>n:
                for i in range(1,n+1):
                    if vis[i]:
                        print(i,end=" ")
                print()
                return
            vis[u]=False
            dfs(u+1)
            vis[u]=True
            dfs(u+1)

        dfs(1)
        ```

#### 例题2

[自建OJ：删数游戏](http://47.121.118.174/p/128)

#### 代码实现

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        string s;
        bool vis[15];
        int n,ans;

        bool isprime(int x){
            if(x<=1) return false;
            for(int i=2;i*i<=x;i++){
                if(x%i==0) return false;
            }
            return true;
        }

        void dfs(int u){
            if(u>n){
                int x=0;
                for(int i=1;i<=n;i++){
                    if(vis[i]) x=x*10+(s[i-1]-'0');
                }
                if(isprime(x)) ans++;
                return;
            }
            vis[u]=false;
            dfs(u+1);
            vis[u]=true;
            dfs(u+1);
        }

        int main(){
            int N;
            cin>>N;
            s=to_string(N);
            n=s.size();
            dfs(1);
            cout<<ans;
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main {

            static String s;
            static boolean[] vis=new boolean[15];
            static int n,ans;

            static boolean isprime(int x){
                if(x<=1) return false;
                for(int i=2;i*i<=x;i++){
                    if(x%i==0) return false;
                }
                return true;
            }

            static void dfs(int u){
                if(u>n){
                    int x=0;
                    for(int i=1;i<=n;i++){
                        if(vis[i]) x=x*10+(s.charAt(i-1)-'0');
                    }
                    if(isprime(x)) ans++;
                    return;
                }
                vis[u]=false;
                dfs(u+1);
                vis[u]=true;
                dfs(u+1);
            }

            public static void main(String[] args){
                Scanner sc=new Scanner(System.in);
                int N=sc.nextInt();
                s=String.valueOf(N);
                n=s.length();
                dfs(1);
                System.out.println(ans);
            }

        }
        ```

    === "Python"
        ```python
        import sys
        input=sys.stdin.readline

        def isprime(x):
            if x<=1:
                return False
            i=2
            while i*i<=x:
                if x%i==0:
                    return False
                i+=1
            return True

        N=int(input())
        s=str(N)
        n=len(s)
        vis=[False]*15
        ans=0

        def dfs(u):
            global ans
            if u>n:
                x=0
                for i in range(1,n+1):
                    if vis[i]:
                        x=x*10+int(s[i-1])
                if isprime(x):
                    ans+=1
                return
            vis[u]=False
            dfs(u+1)
            vis[u]=True
            dfs(u+1)

        dfs(1)
        print(ans)
        ```

## 练习题单

???+ tip "子集枚举"
    - [ ] [自建OJ：选择数字之和1](http://47.121.118.174/p/832)
    - [ ] [洛谷：取数游戏](https://www.luogu.com.cn/problem/P1123)
    - [ ] [洛谷：PEKRKET](https://www.luogu.com.cn/problem/P2036)
    - [ ] [洛谷：五子棋对弈](https://www.luogu.com.cn/problem/P10386)
    - [ ] [洛谷：打开所有的灯](https://www.luogu.com.cn/problem/P2040)
    - [ ] [自建OJ：选择数字之和3](http://47.121.118.174/p/834)


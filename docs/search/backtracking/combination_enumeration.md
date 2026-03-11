#### 例题1

[自建OJ：递归实现组合型枚举](http://47.121.118.174/p/34)

#### 代码实现

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        int n,m;
        int path[30];

        void dfs(int x,int start){
            if(x>m){
                for(int i=1;i<=m;i++) cout<<path[i]<<" ";
                cout<<"\n";
                return;
            }
            for(int i=start;i<=n;i++){
                path[x]=i;
                dfs(x+1,i+1);
            }
        }

        int main(){
            cin>>n>>m;
            dfs(1,1);
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main {

            static int n,m;
            static int[] path=new int[30];

            static void dfs(int x,int start){
                if(x>m){
                    for(int i=1;i<=m;i++) System.out.print(path[i]+" ");
                    System.out.println();
                    return;
                }
                for(int i=start;i<=n;i++){
                    path[x]=i;
                    dfs(x+1,i+1);
                }
            }

            public static void main(String[] args){
                Scanner sc=new Scanner(System.in);
                n=sc.nextInt();
                m=sc.nextInt();
                dfs(1,1);
            }

        }
        ```

    === "Python"
        ```python
        import sys
        input=sys.stdin.readline

        n,m=map(int,input().split())
        path=[0]*30

        def dfs(x,start):
            if x>m:
                for i in range(1,m+1):
                    print(path[i],end=" ")
                print()
                return
            for i in range(start,n+1):
                path[x]=i
                dfs(x+1,i+1)

        dfs(1,1)
        ```
## 练习题单

???+ tip "组合型枚举"
    - [ ] [自建OJ：选数](http://47.121.118.174/p/139)

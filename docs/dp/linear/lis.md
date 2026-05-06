#### 例题1

[自建OJ：最长上升子序列](http://47.121.118.174/p/831)

#### 代码实现

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        int n,a[5005],f[5005],mx;

        int main(){
            ios::sync_with_stdio(false);
            cin.tie(0);

            cin>>n;
            for(int i=1;i<=n;i++){
                cin>>a[i];
                f[i]=1;
                for(int j=1;j<i;j++){
                    if(a[j]<a[i]){
                        f[i]=max(f[i],f[j]+1);
                    }
                }
                mx=max(mx,f[i]);
            }

            cout<<mx;
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.io.*;
        import java.util.*;

        public class Main{
            static int[] a=new int[5005];
            static int[] f=new int[5005];

            public static void main(String[] args)throws Exception{
                BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
                int n=Integer.parseInt(br.readLine());
                StringTokenizer st=new StringTokenizer(br.readLine());

                int mx=0;
                for(int i=1;i<=n;i++){
                    a[i]=Integer.parseInt(st.nextToken());
                    f[i]=1;
                    for(int j=1;j<i;j++){
                        if(a[j]<a[i]){
                            f[i]=Math.max(f[i],f[j]+1);
                        }
                    }
                    mx=Math.max(mx,f[i]);
                }

                System.out.print(mx);
            }
        }
        ```

    === "Python"
        ```python
        import sys
        input=sys.stdin.readline

        n=int(input())
        a=[0]+list(map(int,input().split()))
        f=[0]*(n+1)

        mx=0
        for i in range(1,n+1):
            f[i]=1
            for j in range(1,i):
                if a[j]<a[i]:
                    f[i]=max(f[i],f[j]+1)
            mx=max(mx,f[i])

        print(mx)
        ```

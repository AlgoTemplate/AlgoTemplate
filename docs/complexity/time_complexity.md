一般情况下，我们认为计算机的评测机一秒钟可以执行 $2\times 10^8$ 次操作。

#### $O(1)$

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        int main(){
            long long n;
            cin>>n;
            cout<<n*(n+1)/2;
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main {

            public static void main(String[] args){
                Scanner sc=new Scanner(System.in);
                long n=sc.nextLong();
                System.out.println(n*(n+1)/2);
            }

        }
        ```

    === "Python"
        ```python
        n=int(input())
        print(n*(n+1)//2)
        ```
#### $O(\log n)$

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        int main(){
            long long n;
            cin>>n;

            long long x=1;
            int cnt=0;

            while(x<n){
                x*=2;
                cnt++;
            }

            cout<<cnt;
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main {

            public static void main(String[] args){
                Scanner sc=new Scanner(System.in);

                long n=sc.nextLong();
                long x=1;
                int cnt=0;

                while(x<n){
                    x*=2;
                    cnt++;
                }

                System.out.println(cnt);
            }

        }
        ```

    === "Python"
        ```python
        n=int(input())

        x=1
        cnt=0

        while x<n:
            x*=2
            cnt+=1

        print(cnt)
        ```
#### $O(\sqrt{n})$

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        bool isprime(int n){
            if(n<=1) return false;
            for(int i=2;i*i<=n;i++){
                if(n%i==0) return false;
            }
            return true;
        }

        int main(){
            int n;
            cin>>n;
            if(isprime(n)) cout<<"YES";
            else cout<<"NO";
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main {

            static boolean isprime(int n){
                if(n<=1) return false;
                for(int i=2;i*i<=n;i++){
                    if(n%i==0) return false;
                }
                return true;
            }

            public static void main(String[] args){
                Scanner sc=new Scanner(System.in);
                int n=sc.nextInt();
                if(isprime(n)) System.out.println("YES");
                else System.out.println("NO");
            }

        }
        ```

    === "Python"
        ```python
        def isprime(n):
            if n<=1:
                return False
            i=2
            while i*i<=n:
                if n%i==0:
                    return False
                i+=1
            return True

        n=int(input())
        if isprime(n):
            print("YES")
        else:
            print("NO")
        ```

#### $O(n)$

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        const int N=1e5+10;
        int a[N];

        int main(){
            int n;
            cin>>n;
            for(int i=1;i<=n;i++) cin>>a[i];
            long long sum=0,ans=LLONG_MIN;
            for(int i=1;i<=n;i++){
                sum+=a[i];
                ans=max(ans,sum);
            }
            cout<<ans;
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main {

            static final int N=100010;
            static int[] a=new int[N];

            public static void main(String[] args){
                Scanner sc=new Scanner(System.in);
                int n=sc.nextInt();
                for(int i=1;i<=n;i++) a[i]=sc.nextInt();
                long sum=0,ans=Long.MIN_VALUE;
                for(int i=1;i<=n;i++){
                    sum+=a[i];
                    ans=Math.max(ans,sum);
                }
                System.out.println(ans);
            }

        }
        ```

    === "Python"
        ```python
        import sys
        input=sys.stdin.readline

        n=int(input())
        a=list(map(int,input().split()))

        s=0
        ans=-10**18
        for x in a:
            s+=x
            ans=max(ans,s)

        print(ans)
        ```

#### $O(n\log n)$

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        int main(){
            int n;
            cin>>n;

            vector<int> a(n);
            for(int i=0;i<n;i++) cin>>a[i];

            sort(a.begin(),a.end());

            for(int x:a) cout<<x<<" ";
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main {

            public static void main(String[] args){
                Scanner sc=new Scanner(System.in);
                int n=sc.nextInt();

                int[] a=new int[n];
                for(int i=0;i<n;i++) a[i]=sc.nextInt();

                Arrays.sort(a);

                for(int x:a) System.out.print(x+" ");
            }

        }
        ```

    === "Python"
        ```python
        n=int(input())
        a=list(map(int,input().split()))

        a.sort()

        print(*a)
        ```

#### $O(n^2)$
??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        int main(){
            int n;
            cin>>n;

            int cnt=0;
            for(int i=1;i<=n;i++){
                for(int j=1;j<=n;j++){
                    cnt++;
                }
            }

            cout<<cnt;
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main {

            public static void main(String[] args){
                Scanner sc=new Scanner(System.in);
                int n=sc.nextInt();

                int cnt=0;
                for(int i=1;i<=n;i++){
                    for(int j=1;j<=n;j++){
                        cnt++;
                    }
                }

                System.out.println(cnt);
            }

        }
        ```

    === "Python"
        ```python
        n=int(input())

        cnt=0
        for i in range(n):
            for j in range(n):
                cnt+=1

        print(cnt)
        ```

#### $O(2^n)$

??? example "参考实现"

    === "C++"
        ```cpp
        #include <bits/stdc++.h>
        using namespace std;

        int n, a[20], ans;

        void dfs(int i, int sum){
            if(i==n){
                ans=max(ans,sum);
                return;
            }
            dfs(i+1,sum);      // 不选第 i 个
            dfs(i+1,sum+a[i]); // 选第 i 个
        }

        int main(){
            cin >> n;
            for(int i=0;i<n;i++) cin >> a[i];
            dfs(0,0);
            cout << ans << "\n";
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main {
            static int n;
            static int[] a = new int[20];
            static int ans = 0;

            static void dfs(int i, int sum){
                if(i==n){
                    ans = Math.max(ans,sum);
                    return;
                }
                dfs(i+1,sum);       // 不选第 i 个
                dfs(i+1,sum+a[i]);  // 选第 i 个
            }

            public static void main(String[] args){
                Scanner sc = new Scanner(System.in);
                n = sc.nextInt();
                for(int i=0;i<n;i++) a[i] = sc.nextInt();
                dfs(0,0);
                System.out.println(ans);
            }
        }
        ```

    === "Python"
        ```python
        n = int(input())
        a = list(map(int,input().split()))
        ans = 0

        def dfs(i,sum):
            global ans
            if i==n:
                ans = max(ans,sum)
                return
            dfs(i+1,sum)       # 不选第 i 个
            dfs(i+1,sum+a[i])  # 选第 i 个

        dfs(0,0)
        print(ans)
        ```
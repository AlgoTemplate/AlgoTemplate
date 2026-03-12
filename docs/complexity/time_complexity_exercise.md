以下练习均按照 1 秒钟评测机执行 $2\times 10^8$ 次操作为标准。

#### 练习1

$n=10000$ 的前提下，以下程序会超时吗？

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        int main(){
            int n,x;
            cin>>n>>x;

            vector<int>a(n);
            for(int i=0;i<n;i++) cin>>a[i];

            sort(a.begin(),a.end());

            int ans=0;

            for(int i=0;i<n;i++){
                for(int j=i+1;j<n;j++){
                    int t=x-a[i]-a[j];

                    int l=j+1,r=n-1;
                    while(l<=r){
                        int mid=(l+r)/2;
                        if(a[mid]==t){
                            ans++;
                            break;
                        }
                        if(a[mid]<t) l=mid+1;
                        else r=mid-1;
                    }
                }
            }

            cout<<ans;
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
                int x=sc.nextInt();

                int[] a=new int[n];
                for(int i=0;i<n;i++) a[i]=sc.nextInt();

                Arrays.sort(a);

                int ans=0;

                for(int i=0;i<n;i++){
                    for(int j=i+1;j<n;j++){
                        int t=x-a[i]-a[j];

                        int l=j+1,r=n-1;
                        while(l<=r){
                            int mid=(l+r)/2;
                            if(a[mid]==t){
                                ans++;
                                break;
                            }
                            if(a[mid]<t) l=mid+1;
                            else r=mid-1;
                        }
                    }
                }

                System.out.println(ans);
            }

        }
        ```

    === "Python"
        ```python
        import bisect

        n,x=map(int,input().split())
        a=list(map(int,input().split()))

        a.sort()

        ans=0

        for i in range(n):
            for j in range(i+1,n):
                t=x-a[i]-a[j]
                l=j+1
                r=n-1
                while l<=r:
                    mid=(l+r)//2
                    if a[mid]==t:
                        ans+=1
                        break
                    if a[mid]<t:
                        l=mid+1
                    else:
                        r=mid-1

        print(ans)
        ```


??? note "答案"
    会，该算法的时间复杂度是 $O(n^2\log n)$。将 $n$ 带入后发现得到的值大于 $2\times 10^8$，因此会超时。

#### 练习2

$n=20000$ 的前提下，以下程序会超时吗？

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        int main(){
            int n;
            cin>>n;

            int ans=0;
            for(int i=0;i<n;i++){
                for(int j=i;j<n;j++){
                    ans++;
                }
            }

            cout<<ans;
        }
        ```
    === "Java"
        ```java
        import java.util.*;

        public class Main{
            public static void main(String[] args){
                Scanner sc=new Scanner(System.in);
                int n=sc.nextInt();

                int ans=0;
                for(int i=0;i<n;i++){
                    for(int j=0;j<n;j++){
                        ans++;
                    }
                }

                System.out.println(ans);
            }
        }
        ```
    === "Python"
        ```python
        n=int(input())

        ans=0
        for i in range(n):
            for j in range(n):
                ans+=1

        print(ans)
        ```

??? note "答案"
    不会，该算法时间复杂度为 $O(n^2)$。但实际上循环了 $\dfrac{n\times(n-1)}{2}$ 次。因此没有超时的风险。

#### 练习3

$n=100000$ 的前提下，以下程序会超时吗？

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        int main(){
            int n;
            cin>>n;

            int ans=0;

            for(int i=1;i<=n;i++){
                ans+=log2(i);
            }

            cout<<ans;
        }
        ```
    === "Java"
        ```java
        import java.util.*;

        public class Main{
            public static void main(String[] args){
                Scanner sc=new Scanner(System.in);
                int n=sc.nextInt();

                int ans=0;

                for(int i=1;i<=n;i++){
                    ans+=Math.log(i)/Math.log(2);
                }

                System.out.println(ans);
            }
        }
        ```
    === "Python"
        ```python
        import math

        n=int(input())

        ans=0
        for i in range(1,n+1):
            ans+=math.log2(i)

        print(int(ans))
        ```

??? note "答案"
    不会，该算法时间复杂度为 $O(n\log n)$。

    当 $n=10^5$ 时：

    $$
    n\log n \approx 10^5\times17
    $$

    远小于 $2\times10^8$，因此不会超时。

#### 练习4

$n=10^7$ 的前提下，以下程序会超时吗？

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        int main(){
            int n;
            cin>>n;

            int ans=0;
            for(int i=0;i<n;i++){
                ans++;
            }

            cout<<ans;
        }
        ```

??? note "答案"
    不会，该算法复杂度为 $O(n)$。

    当 $n=10^7$ 时：

    $$
    10^7 < 2\times10^8
    $$

    因此不会超时。

#### 练习5

$n=100000$ 的前提下，以下程序会超时吗？

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        int main(){
            int n;
            cin>>n;

            long long ans=0;

            for(int i=1;i<=n;i++){
                for(int j=1;j<=i;j++){
                    ans++;
                }
            }

            cout<<ans;
        }
        ```
    === "Java"
        ```java
        import java.util.*;

        public class Main{
            public static void main(String[] args){
                Scanner sc=new Scanner(System.in);
                int n=sc.nextInt();

                long ans=0L;
                for(int i=1;i<=n;i++){
                    for(int j=1;j<=i;j++){
                        ans++;
                    }
                }

                System.out.println(ans);
            }
        }
        ```
    === "Python"
        ```python
        n=int(input())

        ans=0
        for i in range(1,n+1):
            for j in range(1,i+1):
                ans+=1

        print(ans)
        ```

??? note "答案"
    该算法复杂度为 $O(n^2)$（严格来说常数为 $1/2$）.

    当 $n=10^5$ 时：

    $$
    \frac{n^2}{2}\approx5\times10^9
    $$

    大于 $2\times10^8$，因此 **会超时**。

#### 练习6

$n=10^5$ 的前提下，以下程序会超时吗？

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        int main(){
            int n;
            cin>>n;

            long long ans=0;

            for(int i=1;i<=n;i++){
                for(int j=1;j*j<=i;j++){
                    ans++;
                }
            }

            cout<<ans;
        }
        ```
    === "Java"
        ```java
        import java.util.*;

        public class Main{
            public static void main(String[] args){
                Scanner sc=new Scanner(System.in);
                int n=sc.nextInt();

                long ans=0L;
                for(int i=1;i<=n;i++){
                    for(int j=1;j*j<=i;j++){
                        ans++;
                    }
                }

                System.out.println(ans);
            }
        }
        ```
    === "Python"
        ```python
        import math

        n=int(input())

        ans=0
        for i in range(1,n+1):
            j=1
            while j*j<=i:
                ans+=1
                j+=1

        print(ans)
        ```

??? note "答案"
    该算法复杂度约为 $O(n\sqrt n)$。

    当 $n=10^5$ 时：

    $$
    10^5\times316\approx3.16\times10^7
    $$

    小于 $2\times10^8$，因此 **不会超时**。

#### 练习7

$n=20$ 的前提下，以下程序会超时吗？

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        int main(){
            int n;
            cin>>n;

            int ans=0;

            for(int i=0;i<(1<<n);i++){
                ans++;
            }

            cout<<ans;
        }
        ```
    === "Java"
        ```java
        import java.util.*;

        public class Main{
            public static void main(String[] args){
                Scanner sc=new Scanner(System.in);
                int n=sc.nextInt();

                long ans=0L;
                for(long i=0;i<(1L<<n);i++){
                    ans++;
                }

                System.out.println(ans);
            }
        }
        ```
    === "Python"
        ```python
        n=int(input())

        ans=0
        for i in range(1<<n):
            ans+=1

        print(ans)
        ```

??? note "答案"
    该算法复杂度为 $O(2^n)$。

    当 $n=20$ 时：

    $$
    2^{20}\approx10^6
    $$

    小于 $2\times10^8$，因此 **不会超时**。

#### 练习8

$n=25$ 的前提下，以下程序会超时吗？

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        int main(){
            int n;
            cin>>n;

            long long ans=0;

            for(int i=0;i<(1<<n);i++){
                for(int j=0;j<n;j++){
                    ans++;
                }
            }

            cout<<ans;
        }
        ```
    === "Java"
        ```java
        import java.util.*;

        public class Main{
            public static void main(String[] args){
                Scanner sc=new Scanner(System.in);
                int n=sc.nextInt();

                long ans=0L;
                for(long i=0;i<(1L<<n);i++){
                    for(int j=0;j<n;j++){
                        ans++;
                    }
                }

                System.out.println(ans);
            }
        }
        ```
    === "Python"
        ```python
        n=int(input())

        ans=0
        for i in range(1<<n):
            for j in range(n):
                ans+=1

        print(ans)
        ```

??? note "答案"
    该算法复杂度为 $O(n2^n)$。

    当 $n=25$ 时：

    $$
    25\times2^{25}\approx8\times10^8
    $$

    大于 $2\times10^8$，因此 **会超时**。

#### 练习9

$n=10^5$ 的前提下，以下程序会超时吗？

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        int main(){
            int n;
            cin>>n;

            long long ans=0;

            for(int i=1;i<=n;i++){
                for(int j=1;j<=n/i;j++){
                    ans++;
                }
            }

            cout<<ans;
        }
        ```
    === "Java"
        ```java
        import java.util.*;

        public class Main{
            public static void main(String[] args){
                Scanner sc=new Scanner(System.in);
                int n=sc.nextInt();

                long ans=0L;
                for(int i=1;i<=n;i++){
                    for(int j=1;j<=n/i;j++){
                        ans++;
                    }
                }

                System.out.println(ans);
            }
        }
        ```
    === "Python"
        ```python
        n=int(input())

        ans=0
        for i in range(1,n+1):
            for j in range(1, n//i + 1):
                ans+=1

        print(ans)
        ```

??? note "答案"
    该算法复杂度约为 $O(n\log n)$，因为

    $$
    \sum_{i=1}^{n}\left\lfloor\frac{n}{i}\right\rfloor \approx n\log n
    $$

    当 $n=10^5$ 时：

    $$
    10^5\times17
    $$

    远小于 $2\times10^8$，因此 **不会超时**。
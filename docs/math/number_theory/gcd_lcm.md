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

#### 练习题单

??? tip "最大公约数"
    - [ ] [自建OJ：相邻互质](http://47.121.118.174/p/441)
    - [ ] [自建OJ：序列](http://47.121.118.174/p/176)
    - [ ] [洛谷：等差数列](https://www.luogu.com.cn/problem/P8682)

??? tip "最小公倍数"
    - [ ] [自建OJ：1~n的最小公倍数](http://47.121.118.174/p/24)

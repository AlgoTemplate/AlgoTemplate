## 分解质因数

唯一分解定理：任何一个大于 1 的整数都可以唯一分解为有限个质数的乘积，这个过程叫做分解质因数

$$
n = p_1^{a_1} \times p_2^{a_2} \times \cdots \times p_k^{a_k}
$$

#### 例题1

[自建OJ：质因数分解](http://47.121.118.174/p/561)

#### 代码实现
??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        int l,r;
        int v[40];

        void divide(int x){
            int len=0;
            cout<<x<<"=";
            for(int i=2;i*i<=x;i++){
                while(x%i==0){
                    x/=i;
                    v[++len]=i;
                }
            }
            if(x>1) v[++len]=x;
            for(int i=1;i<len;i++) cout<<v[i]<<"*";
            cout<<v[len]<<"\n";
        }

        int main(){
            cin>>l>>r;
            for(int i=l;i<=r;i++) divide(i);
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main {

            static int[] v = new int[40];

            static void divide(int x){
                int len=0;
                System.out.print(x + "=");
                for(int i=2;i*i<=x;i++){
                    while(x%i==0){
                        x/=i;
                        v[++len]=i;
                    }
                }
                if(x>1) v[++len]=x;
                for(int i=1;i<len;i++) System.out.print(v[i] + "*");
                System.out.println(v[len]);
            }

            public static void main(String[] args){
                Scanner sc=new Scanner(System.in);
                int l=sc.nextInt();
                int r=sc.nextInt();
                for(int i=l;i<=r;i++) divide(i);
            }
        }
        ```

    === "Python"
        ```python
        import sys
        input = sys.stdin.readline

        def divide(x):
            original = x
            v = []
            print(f"{original}=", end="")
            i = 2
            while i * i <= x:
                while x % i == 0:
                    v.append(i)
                    x //= i
                i += 1
            if x > 1:
                v.append(x)
            print("*".join(map(str, v)))

        l, r = map(int, input().split())
        for i in range(l, r + 1):
            divide(i)
        ```
## 练习题单
??? tip "分解质因数"
    - [ ] [自建OJ：因子化简](http://47.121.118.174/p/562)
    - [ ] [自建OJ：双子数](http://47.121.118.174/p/836)

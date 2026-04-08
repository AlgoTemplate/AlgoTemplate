#### 枚举题单（苯环）

[寻找质数](https://www.luogu.com.cn/problem/P12138)

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        bool isprime(int x){
            if(x<2) return false;
            for(int i=2;i*i<=x;i++){
                if(x%i==0) return false;
            }
            return true;
        }

        int main(){
            int cnt=0;
            for(int i=2;;i++){
                if(isprime(i)) cnt++;
                if(cnt==2025){
                    cout<<i;
                    break;
                }
            }
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.io.*;

        public class Main{
            static boolean isprime(int x){
                if(x<2) return false;
                for(int i=2;i*i<=x;i++){
                    if(x%i==0) return false;
                }
                return true;
            }

            public static void main(String[] args){
                int cnt=0;
                for(int i=2;;i++){
                    if(isprime(i)) cnt++;
                    if(cnt==2025){
                        System.out.print(i);
                        break;
                    }
                }
            }
        }
        ```

    === "Python"
        ```python
        def isprime(x):
            if x<2:
                return False
            i=2
            while i*i<=x:
                if x%i==0:
                    return False
                i+=1
            return True

        cnt=0
        i=2
        while True:
            if isprime(i):
                cnt+=1
            if cnt==2025:
                print(i)
                break
            i+=1
        ```
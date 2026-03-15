
#### 例题1

[自建OJ：排序](http://47.121.118.174/p/837)

#### 代码实现

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        const int N=1e5+10;
        int n,a[N];

        int main(){
            cin>>n;
            for(int i=1;i<=n;i++) cin>>a[i];
            sort(a+1,a+n+1);
            for(int i=1;i<=n;i++) cout<<a[i]<<" ";
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main {

            static final int N=100010;
            static int n;
            static int[] a=new int[N];

            public static void main(String[] args){
                Scanner sc=new Scanner(System.in);
                n=sc.nextInt();
                for(int i=1;i<=n;i++) a[i]=sc.nextInt();
                Arrays.sort(a,1,n+1);
                for(int i=1;i<=n;i++) System.out.print(a[i]+" ");
            }

        }
        ```

    === "Python"
        ```python
        import sys
        input=sys.stdin.readline

        n=int(input())
        a=list(map(int,input().split()))

        a.sort()

        for x in a:
            print(x,end=" ")
        ```
#### 例题2

[自建OJ：区间排序](http://47.121.118.174/p/114)

#### 代码实现
??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        int n,m,a[110];

        int main(){
            cin>>n>>m;
            for(int i=1;i<=n;i++) cin>>a[i];
            while(m--){
                int l,r;
                cin>>l>>r;
                sort(a+l,a+r+1);
            }
            for(int i=1;i<=n;i++) cout<<a[i]<<" ";
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main {

            static int n,m;
            static int[] a=new int[110];

            public static void main(String[] args){
                Scanner sc=new Scanner(System.in);
                n=sc.nextInt();
                m=sc.nextInt();
                for(int i=1;i<=n;i++) a[i]=sc.nextInt();
                while(m-->0){
                    int l=sc.nextInt();
                    int r=sc.nextInt();
                    Arrays.sort(a,l,r+1);
                }
                for(int i=1;i<=n;i++) System.out.print(a[i]+" ");
            }

        }
        ```

    === "Python"
        ```python
        import sys
        input=sys.stdin.readline

        n,m=map(int,input().split())
        a=[0]+list(map(int,input().split()))

        for _ in range(m):
            l,r=map(int,input().split())
            a[l:r+1]=sorted(a[l:r+1])

        for i in range(1,n+1):
            print(a[i],end=" ")
        ```

#### 例题3

[自建OJ：成绩排序](http://47.121.118.174/p/354)

#### 代码实现

??? example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        struct stu{
            string name;
            int score;
        }a[30];

        int n;

        bool cmp(const stu &x,const stu &y){
            if(x.score!=y.score) return x.score>y.score;
            return x.name<y.name;
        }

        int main(){
            cin>>n;

            for(int i=1;i<=n;i++){
                cin>>a[i].name>>a[i].score;
            }

            sort(a+1,a+n+1,cmp);

            for(int i=1;i<=n;i++){
                cout<<a[i].name<<" "<<a[i].score<<"\n";
            }

            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.*;

        public class Main {

            static class Stu{
                String name;
                int score;

                Stu(String name,int score){
                    this.name=name;
                    this.score=score;
                }
            }

            public static void main(String[] args){
                Scanner sc=new Scanner(System.in);

                int n=sc.nextInt();
                Stu[] a=new Stu[n];

                for(int i=0;i<n;i++){
                    String name=sc.next();
                    int score=sc.nextInt();
                    a[i]=new Stu(name,score);
                }

                Arrays.sort(a,(x,y)->{
                    if(x.score!=y.score) return y.score-x.score;
                    return x.name.compareTo(y.name);
                });

                for(Stu s:a){
                    System.out.println(s.name+" "+s.score);
                }
            }
        }
        ```

    === "Python"
        ```python
        n=int(input())
        a=[]

        for _ in range(n):
            name,score=input().split()
            score=int(score)
            a.append((name,score))

        a.sort(key=lambda x:(-x[1],x[0]))

        for name,score in a:
            print(name,score)
        ```


## 练习题单

???+ tip "排序"
    - [ ] [自建OJ：男左女右](http://47.121.118.174/p/125)
    - [ ] [洛谷：明明的随机数](https://www.luogu.com.cn/problem/P1059)
    - [ ] [洛谷：接水](https://www.luogu.com.cn/problem/P1223)
    - [ ] [洛谷：三国游戏](https://www.luogu.com.cn/problem/P13887)
    - [ ] [自建OJ：谁考了第k名](http://47.121.118.174/p/353)
    - [ ] [自建OJ：绝对值排序](http://47.121.118.174/p/124)
    - [ ] [自建OJ：奇偶排序](http://47.121.118.174/p/515)
    - [ ] [自建OJ：检测点查询](http://47.121.118.174/p/593)


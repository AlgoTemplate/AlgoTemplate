??? example "gen.cpp，gen.java，gen.py（数据生成器）"
    === "C++"

        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        mt19937 rnd(time(0));
        int getInt(int x,int y){
            return rnd()%(y-x+1)+x;
        }
        int main(){
            freopen("1.in","w",stdout);
            int n=getInt(5,10);
            cout<<n<<"\n";
            for(int i=1;i<=n;i++){
                cout<<getInt(1,10)<<" ";
            }
        } 
        ```
    === "Java"

        ```java
        import java.io.*;
        import java.util.*;

        public class gen{
            // 高质量随机数
            static Random rnd = new Random();

            // 生成 [x,y] 的随机数
            static int getInt(int x,int y){
                return rnd.nextInt(y-x+1)+x;
            }

            public static void main(String[] args) throws Exception{
                // 输出到 1.in
                PrintWriter out = new PrintWriter(new FileWriter("1.in"));

                int n = getInt(5,10); // 随机数据规模
                out.println(n);

                // 生成 n 个随机数
                for(int i=1;i<=n;i++){
                    out.print(getInt(1,10)+" ");
                }

                out.close();
            }
        }
        ```
    === "Python"

        ```python
        import random

        # 生成测试数据到 1.in
        with open("1.in", "w", encoding="utf-8") as f:
            n = random.randint(5, 10)
            f.write(str(n) + "\n")
            for _ in range(n):
                f.write(str(random.randint(1, 10)) + " ")
        ```
??? example "brute.cpp，brute.java，brute.py（暴力代码）"
    === "C++"

        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        mt19937 rnd(time(0));
        int getInt(int x,int y){
            return rnd()%(y-x+1)+x;
        }
        int main(){
            freopen("1.in","r",stdin);
            freopen("1.ans","w",stdout);
            int n,x;
            cin>>n;
            int ans=0;
            for(int i=1;i<=n;i++){
                cin>>x;
                cout<<x<<"\n";
            }
        //	cout<<ans;
        } 
        ```
    === "Java"

        ```java
        import java.io.*;
        import java.util.*;

        public class brute{
            public static void main(String[] args) throws Exception{
                // 读入数据，输出暴力答案到 1.ans
                BufferedReader br = new BufferedReader(new FileReader("1.in"));
                PrintWriter out = new PrintWriter(new FileWriter("1.ans"));

                int n = Integer.parseInt(br.readLine().trim());
                StringTokenizer st = new StringTokenizer(br.readLine());

                // 示例：直接输出（这里写暴力解）
                for(int i=1;i<=n;i++){
                    int x = Integer.parseInt(st.nextToken());
                    out.println(x);
                }

                br.close();
                out.close();
            }
        }
        ```
    === "Python"

        ```python
        # 读取输入
        with open("1.in", "r", encoding="utf-8") as f:
            n = int(f.readline().strip())
            a = list(map(int, f.readline().split()))

        # 输出暴力答案
        with open("1.ans", "w", encoding="utf-8") as f:
            for x in a:
                f.write(str(x) + "\n")
        ```
??? example "std.cpp，std.java，std.py（预期的标准代码）"
    === "C++"

        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        mt19937 rnd(time(0));
        int getInt(int x,int y){
            return rnd()%(y-x+1)+x;
        }
        int main(){
            freopen("1.in","r",stdin);
            freopen("1.ans","w",stdout);
            int n,x;
            cin>>n;
            int ans=0;
            for(int i=1;i<=n;i++){
                cin>>x;
                cout<<x<<"\n";
            }
        //	cout<<ans;
        } 
        ```
    === "Java"

        ```java
        import java.io.*;
        import java.util.*;

        public class std{
            public static void main(String[] args) throws Exception{
                // 读入数据，输出标准答案到 1.out
                BufferedReader br = new BufferedReader(new FileReader("1.in"));
                PrintWriter out = new PrintWriter(new FileWriter("1.out")); // ⚠️ 注意是 1.out

                int n = Integer.parseInt(br.readLine().trim());
                StringTokenizer st = new StringTokenizer(br.readLine());

                // 示例：直接输出（这里写正解）
                for(int i=1;i<=n;i++){
                    int x = Integer.parseInt(st.nextToken());
                    out.println(x);
                }

                br.close();
                out.close();
            }
        }
        ```
    === "Python"

        ```python
        # 读取输入
        with open("1.in", "r", encoding="utf-8") as f:
            n = int(f.readline().strip())
            a = list(map(int, f.readline().split()))

        # 输出标准答案
        with open("1.out", "w", encoding="utf-8") as f:
            for x in a:
                f.write(str(x) + "\n")
        ```
??? example "check.cpp，Main.java，check.py（检查代码）"
    === "C++"

        ```cpp
        #include <windows.h>
        #include <iostream>;
        using namespace std;
        int main(){
            for(int i=1;i<=100;i++){
                system("gen.exe");
                system("brute.exe");
                system("std.exe");
                if(system("fc 1.out 1.ans")){
                    cout<<"WA! on test "<<i<<"\n";
                    return 0;
                }else{
                    cout<<"AC on test "<<i<<"\n";
                }
            }
        }
        ```
    === "Java"

        ```java
        import java.io.*;
        import java.nio.file.*;

        public class Main{

            // 比较两个文件是否完全一致
            static boolean sameFile(String f1,String f2) throws Exception{
                byte[] a = Files.readAllBytes(Paths.get(f1));
                byte[] b = Files.readAllBytes(Paths.get(f2));
                if(a.length!=b.length) return false;
                for(int i=0;i<a.length;i++){
                    if(a[i]!=b[i]) return false;
                }
                return true;
            }

            public static void main(String[] args) throws Exception{
                for(int i=1;i<=100;i++){
                    // 运行数据生成器
                    Process p1 = Runtime.getRuntime().exec("java gen");
                    p1.waitFor();

                    // 运行暴力
                    Process p2 = Runtime.getRuntime().exec("java brute");
                    p2.waitFor();

                    // 运行标准解
                    Process p3 = Runtime.getRuntime().exec("java std");
                    p3.waitFor();

                    // 比较输出
                    if(!sameFile("1.out","1.ans")){
                        System.out.println("WA! on test "+i);
                        return;
                    }else{
                        System.out.println("AC on test "+i);
                    }
                }
            }
        }
        ```
    === "Python"

        ```python
        import subprocess

        # 比较两个文件是否完全一致
        def same_file(f1, f2):
            with open(f1, "rb") as a, open(f2, "rb") as b:
                return a.read() == b.read()

        for i in range(1, 101):
            # 运行生成器
            subprocess.run(["python", "gen.py"], check=True)

            # 运行暴力
            subprocess.run(["python", "brute.py"], check=True)

            # 运行标准
            subprocess.run(["python", "std.py"], check=True)

            # 比较结果
            if not same_file("1.out", "1.ans"):
                print(f"WA! on test {i}")
                break
            else:
                print(f"AC on test {i}")
        ```
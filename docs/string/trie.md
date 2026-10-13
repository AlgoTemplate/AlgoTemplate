## 字典树

字典树（Trie）通过共享字符串的公共前缀来存储字符串，每条边表示一个字符，从根节点出发的一条路径对应一个前缀。


#### 例题1

[自建OJ：字典树模板](http://47.121.118.174/p/1483)

#### 代码实现

??? example "参考实现"
    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;
        const int N=1e6+10;
        int p[N][27];
        int pre[N];
        int cnt[N];
        int id=1,n;
        string s;
        void inser(string s){
            int u=1;
            for(char v:s){
                int c=v-'a';
                if(p[u][c]==0){
                    p[u][c]=++id;
                }
                u=p[u][c];
                pre[u]++;
            }
            cnt[u]++;
        }
        int query1(string s){
            int u=1;
            for(char v:s){
                int c=v-'a';
                if(p[u][c]==0){
                    return 0;
                }
                u=p[u][c];
            }
            return pre[u];
        }
        int query2(string s){
            int u=1;
            for(char v:s){
                int c=v-'a';
                if(p[u][c]==0){
                    return 0;
                }
                u=p[u][c];
            }
            return cnt[u];
        }
        int main(){
            cin>>n;
            for(int i=1,op;i<=n;i++){
                cin>>op>>s;
                if(op==1) inser(s);
                else if(op==2) cout<<query1(s)<<"\n";
                else cout<<query2(s)<<"\n";
            }
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.io.*;
        import java.util.*;

        public class Main {
            static final int N = 1000010;
            static int[][] p = new int[N][];
            static int[] pre = new int[N];
            static int[] cnt = new int[N];
            static int id = 1;

            static void inser(String s) {
                int u = 1;
                for (int i = 0; i < s.length(); i++) {
                    int c = s.charAt(i) - 'a';
                    if (p[u] == null) p[u] = new int[26];
                    if (p[u][c] == 0) p[u][c] = ++id;
                    u = p[u][c];
                    pre[u]++;
                }
                cnt[u]++;
            }

            static int query1(String s) {
                int u = 1;
                for (int i = 0; i < s.length(); i++) {
                    int c = s.charAt(i) - 'a';
                    if (p[u] == null || p[u][c] == 0) return 0;
                    u = p[u][c];
                }
                return pre[u];
            }

            static int query2(String s) {
                int u = 1;
                for (int i = 0; i < s.length(); i++) {
                    int c = s.charAt(i) - 'a';
                    if (p[u] == null || p[u][c] == 0) return 0;
                    u = p[u][c];
                }
                return cnt[u];
            }

            public static void main(String[] args) throws IOException {
                BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
                int n = Integer.parseInt(br.readLine().trim());
                StringBuilder ans = new StringBuilder();
                for (int i = 0; i < n; i++) {
                    StringTokenizer st = new StringTokenizer(br.readLine());
                    int op = Integer.parseInt(st.nextToken());
                    String s = st.nextToken();
                    if (op == 1) inser(s);
                    else if (op == 2) ans.append(query1(s)).append('\n');
                    else ans.append(query2(s)).append('\n');
                }
                System.out.print(ans);
            }
        }
        ```

    === "Python"
        ```python
        import sys

        input = sys.stdin.readline
        p = [{}, {}]
        pre = [0, 0]
        cnt = [0, 0]

        def inser(s):
            u = 1
            for v in s:
                if v not in p[u]:
                    p[u][v] = len(p)
                    p.append({})
                    pre.append(0)
                    cnt.append(0)
                u = p[u][v]
                pre[u] += 1
            cnt[u] += 1

        def query1(s):
            u = 1
            for v in s:
                if v not in p[u]:
                    return 0
                u = p[u][v]
            return pre[u]

        def query2(s):
            u = 1
            for v in s:
                if v not in p[u]:
                    return 0
                u = p[u][v]
            return cnt[u]

        n = int(input())
        ans = []
        for _ in range(n):
            op, s = input().split()
            if op == '1':
                inser(s)
            elif op == '2':
                ans.append(str(query1(s)))
            else:
                ans.append(str(query2(s)))
        sys.stdout.write('\n'.join(ans))
        ```

## 练习题单

???+ tip "字典树"
    - [ ] [自建OJ：字符串（string）](http://47.121.118.174/p/1452)
    - [ ] [自建OJ：错误的点名](http://47.121.118.174/p/1495)
    - [ ] [自建OJ：魔族密码](http://47.121.118.174/p/1496)
    - [ ] [自建OJ：字符串的公共前缀](http://47.121.118.174/p/1497)
    - [ ] [自建OJ：不是前缀的串](http://47.121.118.174/p/1498)

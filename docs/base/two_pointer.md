## 快慢指针
快慢指针指两个指针朝向同一个方向，但是一个指针比另一个指针快。

#### 模板题

[蓝桥OJ：最长不重复字符串](https://www.lanqiao.cn/problems/3265/learning/)

???+ example "参考实现"

    === "C++"
        ```cpp
        #include<bits/stdc++.h>
        using namespace std;

        const int N=1e6+10;
        int s[N];

        int main()
        {
          string a;
          cin>>a;
          int res=0;
          for(int i=0,j=0;i<a.size();i++)
          {
            s[a[i]]++;
            while(s[a[i]]>1)
            {
              s[a[j]]--;
              j++;
            }
            res=max(res,i-j+1);
          }
          cout<<res<<endl;
          return 0;
        }
        ```
    === "Java"
        ```java
        import java.util.Scanner;
        public class Main {
            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                String a = sc.nextLine();
                int[] s = new int[200];
                int res = 0;
                for (int i = 0, j = 0; i < a.length(); i++) {
                    s[a.charAt(i)]++;
                    while (s[a.charAt(i)] > 1) {
                        s[a.charAt(j)]--;
                        j++;
                    }
                    res = Math.max(res, i - j + 1);
                } 
                System.out.println(res);
            } 
        }
        ```
    === "Python"
        ```python
        a=input()
        s=[0]*200
        res=0
        j=0
        for i in range(len(a)):
            s[ord(a[i])]+=1
            while s[ord(a[i])]>1:
                s[ord(a[j])]-=1
                j+=1
            res=max(res,i-j+1)
        print(res)
        ```

## 左右指针
左右指针指两个指针分别指向数组的开头和结尾，然后向中间移动。

#### 模板题
[蓝桥OJ：两数之和的个数](https://www.lanqiao.cn/problems/19841/learning/)

???+ example "参考实现"

    === "C++"
        ```cpp
        #include <iostream>
        #include <vector>

        using namespace std;

        int main() {
            int n, x;
            cin >> n >> x;
            vector<int> a(n);
            for (int i = 0; i < n; ++i) {
                cin >> a[i];
            }

            int left = 0; // 左指针
            int right = n - 1; // 右指针
            int count = 0; // 计数满足条件的对数

            while (left < right) {
                int sum = a[left] + a[right];
                if (sum == x) {
                    // 找到一对满足条件的元素
                    count++;
                    left++;
                    right--;
                } else if (sum < x) {
                    // 如果和小于x，移动左指针
                    left++;
                } else {
                    // 如果和大于x，移动右指针
                    right--;
                }
            }

            cout << count << endl;

            return 0;
        }
        ```
    === "Java"
        ```java
        import java.io.*;
        import java.util.*;
        
        public class Main {
            static int N = (int)(1e5+10);
            static int n,x;
            static int[] a = new int[N];
            public static void main(String[] args) {
                solve();
                out.flush();
            }
        
            static void solve() {
                n = in.nextInt(); x = in.nextInt();
                for(int i=1;i<=n;i++) {
                    a[i] = in.nextInt();
                }
                int l = 1,r = n;
                int ans = 0;
                while(l<r) {
                    if(a[l]+a[r]==x) {
                        ans++;
                        l++;
                    }else if(a[l]+a[r]>x){
                        r--;
                    }else{
                        l++;
                    }
                }
                out.println(ans);
            }
        
            static FastReader in = new FastReader();
            static PrintWriter out = new PrintWriter(System.out);
        
            static class FastReader {
                static BufferedReader br;
                static StringTokenizer st;
        
                FastReader() {
                    br = new BufferedReader(new InputStreamReader(System.in));
                }
        
                String next() {
                    String str = "";
                    while(st==null||!st.hasMoreElements()){
                        try {
                            str = br.readLine();
                        }catch(IOException e){
                            throw new RuntimeException(e);
                        }
                        st = new StringTokenizer(str);
                    }
                    return st.nextToken();
                }
        
                int nextInt() {
                    return Integer.parseInt(next());
                }
        
                double nextDouble() {
                    return Double.parseDouble(next());
                }
        
                long nextLong() {
                    return Long.parseLong(next());
                }
            }
        }
        ```
    === "Python"
        ```python
        import os
        import sys
        
        # 请在此输入您的代码
        n,x=map(int,input().split())
        a=list(map(int,input().split()))
        i=0
        j=n-1
        count=0
        while i<j :
          sum=a[j]+a[i]
          if sum==x :
             count +=1
             i +=1
             j -=1
          else :
            if sum<x :
                i +=1
            else: j-=1
        print(count)
        ```
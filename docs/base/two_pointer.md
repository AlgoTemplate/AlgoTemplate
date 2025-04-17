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
        #include<bits/stdc++.h>
        using namespace std;


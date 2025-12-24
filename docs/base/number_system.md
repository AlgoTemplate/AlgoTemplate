## K 进制转 10 进制

将一个 K 进制数转换为 10 进制数。

#### 模板题

[自建OJ: K 进制转 10 进制](http://47.121.118.174/p/378)

???+ example "参考实现"

    === "C++"
        ```cpp
        // K 进制字符串转 10 进制
        #include <bits/stdc++.h>
        using namespace std;

        int charToVal(char c) {
            if (isdigit(c)) return c - '0';
            return c - 'A' + 10;  // A~Z -> 10~35
        }

        long long convertToDecimal(const string &s, int base) {
            long long res = 0;
            for (char c : s) {
                res = res * base + charToVal(c);
            }
            return res;
        }

        int main() {
            string s;
            int base;
            cin >> s >> base;
            cout << convertToDecimal(s, base) << '\n';
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.Scanner;

        public class Main {

            // 字符转对应数值（0~9, A~Z）
            static int charToVal(char c) {
                if (c >= '0' && c <= '9') return c - '0';
                return c - 'A' + 10;
            }

            // K 进制转 10 进制
            static long convertToDecimal(String s, int base) {
                long res = 0;
                for (int i = 0; i < s.length(); i++) {
                    res = res * base + charToVal(s.charAt(i));
                }
                return res;
            }

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                String s = sc.next();
                int base = sc.nextInt();
                System.out.println(convertToDecimal(s, base));
            }
        }
        ```

    === "Python"
        ```python
        # K 进制字符串转 10 进制

        def char_to_val(c):
            if c.isdigit():
                return ord(c) - ord('0')
            return ord(c) - ord('A') + 10

        def convert_to_decimal(s, base):
            res = 0
            for c in s:
                res = res * base + char_to_val(c)
            return res

        s, base = input().split()
        base = int(base)
        print(convert_to_decimal(s, base))
        ```

## 10 进制转 K 进制

将一个 10 进制数转换为 K 进制数。

#### 模板题

[自建OJ: 10 进制转 K 进制](http://47.121.118.174/p/377)

???+ example "参考实现"

    === "C++"
        ```cpp
        // 10 进制转 K 进制（K <= 36）
        #include <bits/stdc++.h>
        using namespace std;

        string convertToBase(long long n, int base) {
            if (n == 0) return "0";
            string digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            string res;
            while (n > 0) {
                res = digits[n % base] + res;
                n /= base;
            }
            return res;
        }

        int main() {
            long long n;
            int base;
            cin >> n >> base;
            cout << convertToBase(n, base) << '\n';
            return 0;
        }
        ```

    === "Java"
        ```java
        import java.util.Scanner;

        public class Main {

            // 10 进制转 K 进制（K <= 36）
            static String convertToBase(long n, int base) {
                if (n == 0) return "0";
                String digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                StringBuilder res = new StringBuilder();

                while (n > 0) {
                    res.append(digits.charAt((int)(n % base)));
                    n /= base;
                }

                return res.reverse().toString();
            }

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                long n = sc.nextLong();
                int base = sc.nextInt();
                System.out.println(convertToBase(n, base));
            }
        }
        ```

    === "Python"
        ```python
        # 10 进制转 K 进制（K <= 36）

        def convert_to_base(n, base):
            if n == 0:
                return "0"
            digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            res = []
            while n > 0:
                res.append(digits[n % base])
                n //= base
            return ''.join(reversed(res))

        n, base = map(int, input().split())
        print(convert_to_base(n, base))
        ```

## 练习题单

??? tip "进制转换"
    - [洛谷：进制转换](https://www.luogu.com.cn/problem/P1143)
    - [洛谷：十进制转二进制](https://www.luogu.com.cn/problem/B2161)
    - [洛谷：二进制转十进制](https://www.luogu.com.cn/problem/B2162)
    - [洛谷：进制判断](https://www.luogu.com.cn/problem/P12287)
    - [洛谷：穿越时空之门](https://www.luogu.com.cn/problem/P10999)

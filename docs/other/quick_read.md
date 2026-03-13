
#### Java
??? note "快读"
    ```java
    import java.io.BufferedReader;
    import java.io.IOException;
    import java.io.InputStreamReader;
    import java.io.PrintWriter;
    import java.util.*;

    public class Main {
        static int zu;
        static int n, m, k;

        public static void main(String[] args) {
            int t = 1;
            for (zu = 1; zu <= t; zu++) solve();
            out.flush();
        }

        static void solve() {
            n = in.nextInt();
            out.println(n);
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
                while (st == null || !st.hasMoreElements()) {
                    try {
                        str = br.readLine();
                    } catch (IOException e) {
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
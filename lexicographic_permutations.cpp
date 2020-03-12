#include <bits/stdc++.h>

using namespace std;

int main() {
    
    vector<int> xs { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
    int i = 0;
    do {
        i++;
        if(i == 1e6) {
            for(auto i : xs)
                cout << i;
            cout << endl;
            break;
        }
    } while(next_permutation(xs.begin(), xs.end()));
    
    return 0;
}

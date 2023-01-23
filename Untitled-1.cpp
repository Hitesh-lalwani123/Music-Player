#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    cout<<endl;
    int a[n];
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
    int x=0;
    for(int i=1;i<n-1;i++){
        if(a[i]!=a[i-1] || a[i]!=a[i+1]){
            x++;
            //cout<<i<<endl;
        }
        else{
            continue;
        }
    }
    if(a[0]!=a[1]){
        x++;
    }
    if(a[n-1]!=a[n-2]){
        x++;
    }
    cout<<endl;
    cout<<x;
    return 0;
}
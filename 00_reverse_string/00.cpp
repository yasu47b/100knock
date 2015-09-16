#include <iostream>
#include <cstring>
#include <algorithm>

using namespace std;

int main()
{
  char str[] = "stressed";
  reverse(str, str + strlen(str));
  cout << str << endl;
}

#include <iostream>
#include <math.h>
#include <vector>
using namespace std;
vector<int> ElementsDistributer(int num)
{
  vector<int> arr;
  while (num > 0)
  {
    arr.push_back(num % 10);
    num = (num / 10);
  }
  return arr;
}
int main()
{
  vector<int> v = ElementsDistributer(1010);
  for (auto i : v)
  {
    cout << i << " ";
  }
}
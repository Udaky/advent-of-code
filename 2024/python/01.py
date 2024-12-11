import sys
from collections import defaultdict, Counter
infile = sys.argv[1] if len(sys.argv) >= 2 else '01.in'
d = open(infile).read().strip()

lines = d.split('\n')
left = []
right = []
rc = Counter()

for line in lines:
    l, r = line.split()
    l, r = int(l), int(r)
    left.append(l)
    right.append(r)
    rc[r] += 1
left = sorted(left)
right = sorted(right)
p1 = 0
for l, r in zip(left, right):
    p1 += abs(l-r)
print(p1)

p2 = 0
for l in left:
    p2 += l * rc.get(l, 0)
print(p2)

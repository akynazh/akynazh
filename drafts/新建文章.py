from encodings import utf_8
import os
from time import strftime, localtime

names = os.listdir("D:/site/content/posts")
filenames = ["Book", "Study", "Life"]

# for name in names:
#     filenames.append(os.path.splitext(name)[0])

i = 0
print("欧尼酱，请选择文章分类：")
for filename in filenames:
    print("{}: {}".format(i, filename))
    i += 1
cp = input()
cp = int(cp)
category = filenames[cp]

print("欧尼酱，请输入文章标题：")
title = input()

file = open("D:/site/content/drafts/" + title + ".md", "w", encoding="utf8")
file.write("---\n")
file.write("title: " + title + "\n")
file.write("date: " + strftime('%Y-%m-%dT%H:%M:%S+08:00', localtime()) + "\n")
file.write("categories: [" + category + "]\n")
file.write("tags: []\n")
file.write("---\n")
file.write("\n")
file.write("\n")
file.write("\n")
file.write("**From My Blog: [akynazh](https://akynazh.site)**.\n")
file.write("\n**Over.**")

file.close()

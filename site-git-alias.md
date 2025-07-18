## Git Alias

Git 别名（alias）允许你为常用的 Git 命令创建简短的、易于记忆的替代名称。

```sh
# 单命令别名
git config --global alias.co checkout
# git co main

# 多命令别名
git config --global alias.commitall '!git add -A && git commit -am'
# git commitall "Initial commit"

# 运行外部脚本
git config --global alias.deploy '!sh ~/scripts/deploy.sh'
# git deploy

#查看别名配置
git config --global --get-regexp alias

# 删除别名
git config --global --unset alias.co
```

也可以直接编辑 Git 配置文件来添加别名。全局配置文件通常位于 `~/.gitconfig`，本地配置文件通常位于仓库根目录下的 `.git/config`。

```ini
[alias]
    co = checkout
    ci = commit
    br = branch
    st = status
    commitall = !git add -A && git commit -am
    bra = !git branch -a
    pf = !git push -f
    tags = !git tag
    stashes = !git stash list
```

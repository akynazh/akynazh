@echo off
setlocal enabledelayedexpansion
set i=0
set /p "type=请输入要更改的文件的类型"

for %%x in (*.%type%) do (
	ren "%%x" "!i!.%type%" 
	set /a "i+=1"
)
pause

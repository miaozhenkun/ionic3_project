@echo off
SETLOCAL

echo ===========================
echo 欢迎使用ANDROID自动签名工具
echo ===========================

set defaultKey=default.keystore
set defaultTargetApk=release.apk
set defaultApkPath=..\..\..\platforms\android\build\outputs\apk\android-release-unsigned.apk
set defaultKeyPwd=sinosoftionicapp

CHOICE /M 是否使用默认的秘钥文件【%defaultKey%】?

IF %errorlevel%==1 goto :UseDefaultKey
IF %errorlevel%==2 goto :InputSignPath

:UseDefaultKey
	echo 使用默认秘钥文件【%defaultKey%】
	echo 默认秘钥库的密码短语为：
	echo ***************************
	echo %defaultKeyPwd%
	echo ***************************
	set signpath=%defaultKey%

	goto SelectApkPath

:InputSignPath
	set /p signpath=请输入签名文件路径：
	IF NOT EXIST %signpath% (
		echo 签名文件【%signpath%】不存在，请重新输入
		goto InputSignPath
	) ELSE (
		goto SelectApkPath
	)
	

:SelectApkPath
	CHOICE /M "是否使用默认的apk路径【%defaultApkPath%】，请确保已执行命令【ionic build android --release】生成未签名apk?"
	IF %errorlevel%==1 goto :UseDefaultApkPath
	IF %errorlevel%==2 goto :InputApkPath

:UseDefaultApkPath
	echo 使用默认apk路径【%defaultApkPath%】
	set apkpath=%defaultApkPath%
	goto Sign
	
	
:InputApkPath
	set /p apkpath=请输入待签名apk的路径：
	IF NOT EXIST %apkpath% (
		echo apk文件【%apkpath%】不存在，请重新输入
		goto InputApkPath
	) ELSE (
		goto Sign
	)

:Sign
	echo 秘钥文件：%signpath%
	echo 待签名apk：%apkpath%
	jarsigner -verbose -keystore %signpath% -signedjar %defaultTargetApk% %apkpath% %signpath%
	echo 签名apk已生成【%defaultTargetApk%】
	goto Exit

:Exit

endlocal

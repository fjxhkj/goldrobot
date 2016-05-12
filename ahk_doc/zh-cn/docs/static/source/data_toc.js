toc = [
  {label:"AutoHotkey",path:"AutoHotkey.htm"},
  {label:"Tutorial (快速入门教程)",path:"Tutorial.htm"},
  {label:"FAQ (常见问题)",path:"FAQ.htm"},
  {label:"命令和函数索引",path:"commands/index.htm"},
  {label:"优秀脚本展示",path:"scripts/index.htm"},
  {label:"更新记录",path:"AHKL_ChangeLog.htm"},
  {label:"基本用法和语法",children:
  [
    {label:"热键",path:"Hotkeys.htm"},
    {label:"热字串和自动替换",path:"Hotstrings.htm"},
    {label:"重映射按键和鼠标按钮",path:"misc/Remap.htm"},
    {label:"按键列表(键盘,鼠标,手柄)",path:"KeyList.htm"},
    {label:"脚本",path:"Scripts.htm"},
    {label:"变量和表达式",path:"Variables.htm"},
    {label:"函数",path:"Functions.htm"},
    {label:"调试客户端(DBGp)",path:"AHKL_DBGPClients.htm"},
    {label:"对象",path:"Objects.htm",children:
    [
      {label:"基本用法",path:"Objects.htm#Usage"},
      {label:"扩展用法",path:"Objects.htm#Extended_Usage"},
      {label:"自定义对象",path:"Objects.htm#Custom_Objects"},
      {label:"默认基对象",path:"Objects.htm#Default_Base_Object"},
      {label:"实现",path:"Objects.htm#Implementation"},
      {label:"对象",path:"objects/Object.htm"},
      {label:"枚举器对象",path:"objects/Enumerator.htm"},
      {label:"文件对象",path:"objects/File.htm"},
      {label:"函数对象",path:"objects/Functor.htm"}
    ]}
  ]},
  {label:"迁移到 AutoHotkey_L 1.1",children:
  [
    {label:"AutoHotkey_L 新特性",path:"AHKL_Features.htm"},
    {label:"脚本兼容性",path:"Compat.htm"}
  ]},
  {label:"环境变量管理",children:
  [
    {label:"ClipWait",path:"commands/ClipWait.htm"},
    {label:"EnvGet",path:"commands/EnvGet.htm"},
    {label:"EnvSet",path:"commands/EnvSet.htm"},
    {label:"EnvUpdate",path:"commands/EnvUpdate.htm"}
  ]},
  {label:"本机代码交互",children:
  [
    {label:"DllCall",path:"commands/DllCall.htm"},
    {label:"NumGet",path:"commands/NumGet.htm"},
    {label:"NumPut",path:"commands/NumPut.htm"},
    {label:"RegisterCallback",path:"commands/RegisterCallback.htm"},
    {label:"StrPut()/StrGet()",path:"commands/StrPutGet.htm"},
    {label:"COM",children:
    [
      {label:"ComObjActive",path:"commands/ComObjActive.htm"},
      {label:"ComObjArray",path:"commands/ComObjArray.htm"},
      {label:"ComObjConnect",path:"commands/ComObjConnect.htm"},
      {label:"ComObjCreate",path:"commands/ComObjCreate.htm"},
      {label:"ComObjGet",path:"commands/ComObjGet.htm"},
      {label:"ComObjError",path:"commands/ComObjError.htm"},
      {label:"ComObjFlags",path:"commands/ComObjFlags.htm"},
      {label:"ComObjQuery",path:"commands/ComObjQuery.htm"},
      {label:"ComObjType",path:"commands/ComObjType.htm"},
      {label:"ComObjValue",path:"commands/ComObjValue.htm"},
      {label:"ObjAddRef / ObjRelease",path:"commands/ObjAddRef.htm"}
    ]}
  ]},
  {label:"文件,目录和磁盘管理",children:
  [
    {label:"Drive",path:"commands/Drive.htm"},
    {label:"DriveGet",path:"commands/DriveGet.htm"},
    {label:"DriveSpaceFree",path:"commands/DriveSpaceFree.htm"},
    {label:"FileAppend",path:"commands/FileAppend.htm"},
    {label:"FileCopy",path:"commands/FileCopy.htm"},
    {label:"FileCopyDir",path:"commands/FileCopyDir.htm"},
    {label:"FileCreateDir",path:"commands/FileCreateDir.htm"},
    {label:"FileCreateShortcut",path:"commands/FileCreateShortcut.htm"},
    {label:"FileDelete",path:"commands/FileDelete.htm"},
    {label:"FileEncoding",path:"commands/FileEncoding.htm"},
    {label:"FileGetAttrib",path:"commands/FileGetAttrib.htm"},
    {label:"FileGetShortcut",path:"commands/FileGetShortcut.htm"},
    {label:"FileGetSize",path:"commands/FileGetSize.htm"},
    {label:"FileGetTime",path:"commands/FileGetTime.htm"},
    {label:"FileGetVersion",path:"commands/FileGetVersion.htm"},
    {label:"FileInstall",path:"commands/FileInstall.htm"},
    {label:"FileMove",path:"commands/FileMove.htm"},
    {label:"FileMoveDir",path:"commands/FileMoveDir.htm"},
    {label:"FileOpen()",path:"commands/FileOpen.htm"},
    {label:"FileReadLine",path:"commands/FileReadLine.htm"},
    {label:"FileRead",path:"commands/FileRead.htm"},
    {label:"FileRecycle",path:"commands/FileRecycle.htm"},
    {label:"FileRecycleEmpty",path:"commands/FileRecycleEmpty.htm"},
    {label:"FileRemoveDir",path:"commands/FileRemoveDir.htm"},
    {label:"FileSelectFile",path:"commands/FileSelectFile.htm"},
    {label:"FileSelectFolder",path:"commands/FileSelectFolder.htm"},
    {label:"FileSetAttrib",path:"commands/FileSetAttrib.htm"},
    {label:"FileSetTime",path:"commands/FileSetTime.htm"},
    {label:"IfExist/IfNotExist",path:"commands/IfExist.htm"},
    {label:"IniDelete",path:"commands/IniDelete.htm"},
    {label:"IniRead",path:"commands/IniRead.htm"},
    {label:"IniWrite",path:"commands/IniWrite.htm"},
    {label:"Loop(文件和文件夹)",path:"commands/LoopFile.htm"},
    {label:"Loop(读取文件内容)",path:"commands/LoopReadFile.htm"},
    {label:"SetWorkingDir",path:"commands/SetWorkingDir.htm"},
    {label:"SplitPath",path:"commands/SplitPath.htm"}
  ]},
  {label:"流程控制",children:
  [
    {label:"#Include/#IncludeAgain",path:"commands/_Include.htm"},
    {label:"{ ... } (区块)",path:"commands/Block.htm"},
    {label:"Break",path:"commands/Break.htm"},
    {label:"Catch",path:"commands/Catch.htm"},
    {label:"Continue",path:"commands/Continue.htm"},
    {label:"Critical",path:"commands/Critical.htm"},
    {label:"Else",path:"commands/Else.htm"},
    {label:"Exit",path:"commands/Exit.htm"},
    {label:"ExitApp",path:"commands/ExitApp.htm"},
    {label:"Finally",path:"commands/Finally.htm"},
    {label:"For-loop",path:"commands/For.htm"},
    {label:"Gosub",path:"commands/Gosub.htm"},
    {label:"Goto",path:"commands/Goto.htm"},
    {label:"If 命令",path:"commands/IfExpression.htm",children:
    [
      {label:"If (传统型)",path:"commands/IfEqual.htm"},
      {label:"If (表达式)",path:"commands/IfExpression.htm"},
      {label:"If var [not] between Low and High",path:"commands/IfBetween.htm"},
      {label:"If var is [not] type",path:"commands/IfIs.htm"},
      {label:"If var [not] in/contains MatchList",path:"commands/IfIn.htm"},
      {label:"IfExist/IfNotExist",path:"commands/IfExist.htm"},
      {label:"IfInString/IfNotInString",path:"commands/IfInString.htm"},
      {label:"IfMsgBox",path:"commands/IfMsgBox.htm"},
      {label:"IfWinActive/IfWinNotActive",path:"commands/WinActive.htm"},
      {label:"IfWinExist/IfWinNotExist",path:"commands/WinExist.htm"}
    ]},
    {label:"Loop 命令",path:"commands/Loop.htm",children:
    [
      {label:"Loop",path:"commands/Loop.htm"},
      {label:"Loop (文件和文件夹)",path:"commands/LoopFile.htm"},
      {label:"Loop (解析字符串)",path:"commands/LoopParse.htm"},
      {label:"Loop (读取文件内容)",path:"commands/LoopReadFile.htm"},
      {label:"Loop (注册表)",path:"commands/LoopReg.htm"}
    ]},
    {label:"OnExit",path:"commands/OnExit.htm"},
    {label:"Pause",path:"commands/Pause.htm"},
    {label:"Reload",path:"commands/Reload.htm"},
    {label:"Return",path:"commands/Return.htm"},
    {label:"SetBatchLines",path:"commands/SetBatchLines.htm"},
    {label:"SetTimer",path:"commands/SetTimer.htm"},
    {label:"Sleep",path:"commands/Sleep.htm"},
    {label:"Suspend",path:"commands/Suspend.htm"},
    {label:"Thread",path:"commands/Thread.htm"},
    {label:"Throw",path:"commands/Throw.htm"},
    {label:"Try",path:"commands/Try.htm"},
    {label:"Until",path:"commands/Until.htm"},
    {label:"While 循环",path:"commands/While.htm"}
  ]},
  {label:"内置函数",path:"Functions.htm",children:
  [
    {label:"Asc",path:"Functions.htm#Asc"},
    {label:"Chr",path:"Functions.htm#Chr"},
    {label:"FileExist",path:"Functions.htm#FileExist"},
    {label:"Format",path:"commands/Format.htm"},
    {label:"GetKeyName/VK/SC",path:"Functions.htm#GetKeyName"},
    {label:"GetKeyState",path:"Functions.htm#GetKeyState"},
    {label:"InStr",path:"Functions.htm#InStr"},
    {label:"IsByRef",path:"Functions.htm#IsByRef"},
    {label:"IsFunc",path:"Functions.htm#IsFunc"},
    {label:"IsLabel",path:"Functions.htm#IsLabel"},
    {label:"NumGet",path:"commands/NumGet.htm"},
    {label:"NumPut",path:"commands/NumPut.htm"},
    {label:"OnClipboardChange",path:"commands/OnClipboardChange.htm"},
    {label:"OnExit",path:"commands/OnExit.htm"},
    {label:"OnMessage",path:"commands/OnMessage.htm"},
    {label:"Ord",path:"Functions.htm#Ord"},
    {label:"RegExMatch",path:"commands/RegExMatch.htm"},
    {label:"RegExReplace",path:"commands/RegExReplace.htm"},
    {label:"RegisterCallback",path:"commands/RegisterCallback.htm"},
    {label:"StrLen",path:"commands/StringLen.htm"},
    {label:"StrPut/StrGet",path:"commands/StrPutGet.htm"},
    {label:"StrReplace",path:"commands/StringReplace.htm"},
    {label:"StrSplit",path:"commands/StringSplit.htm"},
    {label:"SubStr",path:"Functions.htm#SubStr"},
    {label:"VarSetCapacity",path:"commands/VarSetCapacity.htm"},
    {label:"WinActive",path:"commands/WinActive.htm"},
    {label:"WinExist",path:"commands/WinExist.htm"}
  ]},
  {label:"GUI, MsgBox, InputBox & 其他对话框",children:
  [
    {label:"FileSelectFile",path:"commands/FileSelectFile.htm"},
    {label:"FileSelectFolder",path:"commands/FileSelectFolder.htm"},
    {label:"Gui",path:"commands/Gui.htm"},
    {label:"Gui control types",path:"commands/GuiControls.htm"},
    {label:"GuiControl",path:"commands/GuiControl.htm"},
    {label:"GuiControlGet",path:"commands/GuiControlGet.htm"},
    {label:"Gui ListView control",path:"commands/ListView.htm"},
    {label:"Gui TreeView control",path:"commands/TreeView.htm"},
    {label:"IfMsgBox",path:"commands/IfMsgBox.htm"},
    {label:"InputBox",path:"commands/InputBox.htm"},
    {label:"Menu",path:"commands/Menu.htm"},
    {label:"MsgBox",path:"commands/MsgBox.htm"},
    {label:"OnMessage",path:"commands/OnMessage.htm"},
    {label:"Progress",path:"commands/Progress.htm"},
    {label:"SplashImage",path:"commands/Progress.htm"},
    {label:"SplashTextOn/SplashTextOff",path:"commands/SplashTextOn.htm"},
    {label:"ToolTip",path:"commands/ToolTip.htm"},
    {label:"TrayTip",path:"commands/TrayTip.htm"}
  ]},
  {label:"键盘鼠标",children:
  [
    {label:"热键和热字串",path:"Hotkeys.htm",children:
    [
      {label:"#HotkeyInterval",path:"commands/_HotkeyInterval.htm"},
      {label:"#HotkeyModifierTimeout",path:"commands/_HotkeyModifierTimeout.htm"},
      {label:"#Hotstring",path:"commands/_Hotstring.htm"},
      {label:"#If",path:"commands/_If.htm"},
      {label:"#IfTimeOut",path:"commands/_IfTimeout.htm"},
      {label:"#IfWinActive/Exist",path:"commands/_IfWinActive.htm"},
      {label:"#InputLevel",path:"commands/_InputLevel.htm"},
      {label:"#MaxHotkeysPerInterval",path:"commands/_MaxHotkeysPerInterval.htm"},
      {label:"#MaxThreads",path:"commands/_MaxThreads.htm"},
      {label:"#MaxThreadsBuffer",path:"commands/_MaxThreadsBuffer.htm"},
      {label:"#MaxThreadsPerHotkey",path:"commands/_MaxThreadsPerHotkey.htm"},
      {label:"#MenuMaskKey",path:"commands/_MenuMaskKey.htm"},
      {label:"#UseHook",path:"commands/_UseHook.htm"},
      {label:"Hotkey",path:"commands/Hotkey.htm"},
      {label:"ListHotkeys",path:"commands/ListHotkeys.htm"},
      {label:"Suspend",path:"commands/Suspend.htm"}
    ]},
    {label:"#InstallKeybdHook",path:"commands/_InstallKeybdHook.htm"},
    {label:"#InstallMouseHook",path:"commands/_InstallMouseHook.htm"},
    {label:"#KeyHistory",path:"commands/_KeyHistory.htm"},
    {label:"BlockInput",path:"commands/BlockInput.htm"},
    {label:"Click",path:"commands/Click.htm"},
    {label:"ControlClick",path:"commands/ControlClick.htm"},
    {label:"ControlSend, ControlSendRaw",path:"commands/ControlSend.htm"},
    {label:"CoordMode",path:"commands/CoordMode.htm"},
    {label:"GetKeyState",path:"commands/GetKeyState.htm"},
    {label:"按键列表(键盘、鼠标、手柄)",path:"KeyList.htm"},
    {label:"KeyHistory",path:"commands/KeyHistory.htm"},
    {label:"KeyWait",path:"commands/KeyWait.htm"},
    {label:"Input",path:"commands/Input.htm"},
    {label:"MouseClick",path:"commands/MouseClick.htm"},
    {label:"MouseClickDrag",path:"commands/MouseClickDrag.htm"},
    {label:"MouseGetPos",path:"commands/MouseGetPos.htm"},
    {label:"MouseMove",path:"commands/MouseMove.htm"},
    {label:"Send, SendRaw, SendInput, SendPlay, SendEvent",path:"commands/Send.htm"},
    {label:"SendLevel",path:"commands/SendLevel.htm"},
    {label:"SendMode",path:"commands/SendMode.htm"},
    {label:"SetDefaultMouseSpeed",path:"commands/SetDefaultMouseSpeed.htm"},
    {label:"SetKeyDelay",path:"commands/SetKeyDelay.htm"},
    {label:"SetMouseDelay",path:"commands/SetMouseDelay.htm"},
    {label:"SetNumScrollCapsLockState",path:"commands/SetNumScrollCapsLockState.htm"},
    {label:"SetStoreCapslockMode",path:"commands/SetStoreCapslockMode.htm"}
  ]},
  {label:"数学函数",children:
  [
    {label:"Abs",path:"Functions.htm#Abs"},
    {label:"Ceil",path:"Functions.htm#Ceil"},
    {label:"Exp",path:"Functions.htm#Exp"},
    {label:"Floor",path:"Functions.htm#Floor"},
    {label:"Log",path:"Functions.htm#Log"},
    {label:"Ln",path:"Functions.htm#Ln"},
    {label:"Mod",path:"Functions.htm#Mod"},
    {label:"Random",path:"commands/Random.htm"},
    {label:"Round",path:"Functions.htm#Round"},
    {label:"SetFormat",path:"commands/SetFormat.htm"},
    {label:"Sqrt",path:"Functions.htm#Sqrt"},
    {label:"Sin/Cos/Tan",path:"Functions.htm#Sin"},
    {label:"ASin/ACos/ATan",path:"Functions.htm#ASin"},
    {label:"Transform",path:"commands/Transform.htm"}
  ]},
  {label:"屏幕管理",children:
  [
    {label:"ImageSearch",path:"commands/ImageSearch.htm"},
    {label:"PixelGetColor",path:"commands/PixelGetColor.htm"},
    {label:"PixelSearch",path:"commands/PixelSearch.htm"}
  ]},
  {label:"杂项命令",children:
  [
    {label:"#NoTrayIcon",path:"commands/_NoTrayIcon.htm"},
    {label:"#SingleInstance",path:"commands/_SingleInstance.htm"},
    {label:"#Warn",path:"commands/_Warn.htm"},
    {label:"AutoTrim",path:"commands/AutoTrim.htm"},
    {label:"Edit",path:"commands/Edit.htm"},
    {label:"ListLines",path:"commands/ListLines.htm"},
    {label:"ListVars",path:"commands/ListVars.htm"},
    {label:"OutputDebug",path:"commands/OutputDebug.htm"},
    {label:"SysGet",path:"commands/SysGet.htm"},
    {label:"Transform",path:"commands/Transform.htm"},
    {label:"URLDownloadToFile",path:"commands/URLDownloadToFile.htm"},
    {label:"VarSetCapacity",path:"commands/VarSetCapacity.htm"}
  ]},
  {label:"进程管理",children:
  [
    {label:"Process",path:"commands/Process.htm"},
    {label:"Run/RunWait",path:"commands/Run.htm"},
    {label:"RunAs",path:"commands/RunAs.htm"},
    {label:"Shutdown",path:"commands/Shutdown.htm"}
  ]},
  {label:"注册表管理",children:
  [
    {label:"Loop (注册表)",path:"commands/LoopReg.htm"},
    {label:"RegDelete",path:"commands/RegDelete.htm"},
    {label:"RegRead",path:"commands/RegRead.htm"},
    {label:"RegWrite",path:"commands/RegWrite.htm"},
    {label:"SetRegView",path:"commands/SetRegView.htm"}
  ]},
  {label:"声音管理",children:
  [
    {label:"SoundBeep",path:"commands/SoundBeep.htm"},
    {label:"SoundGet",path:"commands/SoundGet.htm"},
    {label:"SoundGetWaveVolume",path:"commands/SoundGetWaveVolume.htm"},
    {label:"SoundPlay",path:"commands/SoundPlay.htm"},
    {label:"SoundSet",path:"commands/SoundSet.htm"},
    {label:"SoundSetWaveVolume",path:"commands/SoundSetWaveVolume.htm"}
  ]},
  {label:"字符串命令",children:
  [
    {label:"Format()",path:"commands/Format.htm"},
	{label:"FormatTime",path:"commands/FormatTime.htm"},
    {label:"IfInString/IfNotInString",path:"commands/IfInString.htm"},
    {label:"If var [not] in/contains MatchList",path:"commands/IfIn.htm"},
    {label:"InStr()",path:"Functions.htm#InStr"},
    {label:"Loop (parse a string)",path:"commands/LoopParse.htm"},
    {label:"RegExMatch()",path:"commands/RegExMatch.htm"},
    {label:"RegExReplace()",path:"commands/RegExReplace.htm"},
    {label:"SetEnv (var = value)",path:"commands/SetEnv.htm"},
    {label:"SetFormat",path:"commands/SetFormat.htm"},
    {label:"Sort",path:"commands/Sort.htm"},
    {label:"StringCaseSense",path:"commands/StringCaseSense.htm"},
    {label:"StringGetPos",path:"commands/StringGetPos.htm"},
    {label:"StringLeft/StringRight",path:"commands/StringLeft.htm"},
    {label:"StringLen",path:"commands/StringLen.htm"},
    {label:"StringLower/StringUpper",path:"commands/StringLower.htm"},
    {label:"StringMid",path:"commands/StringMid.htm"},
    {label:"StringReplace",path:"commands/StringReplace.htm"},
    {label:"StringSplit",path:"commands/StringSplit.htm"},
    {label:"StringTrimLeft/StringTrimRight",path:"commands/StringTrimLeft.htm"},
    {label:"StrLen()",path:"commands/StringLen.htm"},
    {label:"StrPut()/StrGet()",path:"commands/StrPutGet.htm"},
    {label:"StrReplace()",path:"commands/StringReplace.htm"},
    {label:"StrSplit()",path:"commands/StringSplit.htm"},
    {label:"SubStr()",path:"Functions.htm#SubStr"},
    {label:"Trim()",path:"commands/Trim.htm"}
  ]},
  {label:"窗口管理",children:
  [
    {label:"控件操作",children:
    [
      {label:"Control",path:"commands/Control.htm"},
      {label:"ControlClick",path:"commands/ControlClick.htm"},
      {label:"ControlFocus",path:"commands/ControlFocus.htm"},
      {label:"ControlGet",path:"commands/ControlGet.htm"},
      {label:"ControlGetFocus",path:"commands/ControlGetFocus.htm"},
      {label:"ControlGetPos",path:"commands/ControlGetPos.htm"},
      {label:"ControlGetText",path:"commands/ControlGetText.htm"},
      {label:"ControlMove",path:"commands/ControlMove.htm"},
      {label:"ControlSend/ControlSendRaw",path:"commands/ControlSend.htm"},
      {label:"ControlSetText",path:"commands/ControlSetText.htm"},
      {label:"Menu",path:"commands/Menu.htm"},
      {label:"PostMessage/SendMessage",path:"commands/PostMessage.htm"},
      {label:"SetControlDelay",path:"commands/SetControlDelay.htm"},
      {label:"WinMenuSelectItem",path:"commands/WinMenuSelectItem.htm"}
    ]},
    {label:"窗口组操作",children:
    [
      {label:"GroupActivate",path:"commands/GroupActivate.htm"},
      {label:"GroupAdd",path:"commands/GroupAdd.htm"},
      {label:"GroupClose",path:"commands/GroupClose.htm"},
      {label:"GroupDeactivate",path:"commands/GroupDeactivate.htm"}
    ]},
    {label:"#WinActivateForce",path:"commands/_WinActivateForce.htm"},
    {label:"DetectHiddenText",path:"commands/DetectHiddenText.htm"},
    {label:"DetectHiddenWindows",path:"commands/DetectHiddenWindows.htm"},
    {label:"IfWinActive/IfWinNotActive",path:"commands/WinActive.htm"},
    {label:"IfWinExist/IfWinNotExist",path:"commands/WinExist.htm"},
    {label:"SetTitleMatchMode",path:"commands/SetTitleMatchMode.htm"},
    {label:"SetWinDelay",path:"commands/SetWinDelay.htm"},
    {label:"StatusBarGetText",path:"commands/StatusBarGetText.htm"},
    {label:"StatusBarWait",path:"commands/StatusBarWait.htm"},
    {label:"WinActivate",path:"commands/WinActivate.htm"},
    {label:"WinActivateBottom",path:"commands/WinActivateBottom.htm"},
    {label:"WinClose",path:"commands/WinClose.htm"},
    {label:"WinGet",path:"commands/WinGet.htm"},
    {label:"WinGetActiveStats",path:"commands/WinGetActiveStats.htm"},
    {label:"WinGetActiveTitle",path:"commands/WinGetActiveTitle.htm"},
    {label:"WinGetClass",path:"commands/WinGetClass.htm"},
    {label:"WinGetPos",path:"commands/WinGetPos.htm"},
    {label:"WinGetText",path:"commands/WinGetText.htm"},
    {label:"WinGetTitle",path:"commands/WinGetTitle.htm"},
    {label:"WinHide",path:"commands/WinHide.htm"},
    {label:"WinKill",path:"commands/WinKill.htm"},
    {label:"WinMaximize",path:"commands/WinMaximize.htm"},
    {label:"WinMinimize",path:"commands/WinMinimize.htm"},
    {label:"WinMinimizeAll, WinMinimizeAllUndo",path:"commands/WinMinimizeAll.htm"},
    {label:"WinMove",path:"commands/WinMove.htm"},
    {label:"WinRestore",path:"commands/WinRestore.htm"},
    {label:"WinSet",path:"commands/WinSet.htm"},
    {label:"WinSetTitle",path:"commands/WinSetTitle.htm"},
    {label:"WinShow",path:"commands/WinShow.htm"},
    {label:"WinWait",path:"commands/WinWait.htm"},
    {label:"WinWaitActive, WinWaitNotActive",path:"commands/WinWaitActive.htm"},
    {label:"WinWaitClose",path:"commands/WinWaitClose.htm"}
  ]},
  {label:"#指令",children:
  [
    {label:"#AllowSameLineComments",path:"commands/_AllowSameLineComments.htm"},
    {label:"#ClipboardTimeout",path:"commands/_ClipboardTimeout.htm"},
    {label:"#CommentFlag",path:"commands/_CommentFlag.htm"},
    {label:"#ErrorStdOut",path:"commands/_ErrorStdOut.htm"},
    {label:"#EscapeChar",path:"commands/_EscapeChar.htm"},
    {label:"#HotkeyInterval",path:"commands/_HotkeyInterval.htm"},
    {label:"#HotkeyModifierTimeout",path:"commands/_HotkeyModifierTimeout.htm"},
    {label:"#Hotstring",path:"commands/_Hotstring.htm"},
    {label:"#If",path:"commands/_If.htm"},
    {label:"#IfWinActive/Exist",path:"commands/_IfWinActive.htm"},
    {label:"#IfTimeout",path:"commands/_IfTimeout.htm"},
    {label:"#Include/#IncludeAgain",path:"commands/_Include.htm"},
    {label:"#InputLevel",path:"commands/_InputLevel.htm"},
    {label:"#InstallKeybdHook",path:"commands/_InstallKeybdHook.htm"},
    {label:"#InstallMouseHook",path:"commands/_InstallMouseHook.htm"},
    {label:"#KeyHistory",path:"commands/_KeyHistory.htm"},
    {label:"#MaxHotkeysPerInterval",path:"commands/_MaxHotkeysPerInterval.htm"},
    {label:"#MaxMem",path:"commands/_MaxMem.htm"},
    {label:"#MaxThreads",path:"commands/_MaxThreads.htm"},
    {label:"#MaxThreadsBuffer",path:"commands/_MaxThreadsBuffer.htm"},
    {label:"#MaxThreadsPerHotkey",path:"commands/_MaxThreadsPerHotkey.htm"},
    {label:"#MenuMaskKey",path:"commands/_MenuMaskKey.htm"},
    {label:"#NoEnv",path:"commands/_NoEnv.htm"},
    {label:"#NoTrayIcon",path:"commands/_NoTrayIcon.htm"},
    {label:"#Persistent",path:"commands/_Persistent.htm"},
    {label:"#SingleInstance",path:"commands/_SingleInstance.htm"},
    {label:"#UseHook",path:"commands/_UseHook.htm"},
    {label:"#Warn",path:"commands/_Warn.htm"},
    {label:"#WinActivateForce",path:"commands/_WinActivateForce.htm"}
  ]}
];

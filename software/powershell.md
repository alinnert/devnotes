# PowerShell

[Repository](https://github.com/PowerShell/PowerShell)

## Version auslesen

~~~ powershell
$PSVersionTable
~~~

Für genauere Details:

~~~ powershell
$PSVersionTable.PSVersion
~~~

## Umgebungsvariablen

~~~ powershell
$env:PATH
$env:USERPROFILE
~~~

## Funktionen

### Simple Funktion

~~~ powershell
function npst {
  npm start
}
~~~

### Mit Parameter

~~~ powershell
function fnName {
  param (
    [string] $param1,
    [string] $param2
  )

  Write-Host "Param 1: $($param1), Param 2: $($param2)"
  command $param1 $param2
}
~~~

## cmdlets

~~~ powershell
function Write-Hello {
  [CmdletBinding()]
  param (
    [string] $message
  )

  process {
    Write-Output "Hello, $message!"
  }
}
~~~

[Liste erlaubter Verben](https://learn.microsoft.com/en-us/powershell/scripting/developer/cmdlet/approved-verbs-for-windows-powershell-commands)
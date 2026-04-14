$files = Get-ChildItem -Path "src/data/post" -Filter "*.md*" -Recurse
foreach ($f in $files) {
    try {
        $c = [System.IO.File]::ReadAllText($f.FullName)
        # Match 'image: ' plus optional quotes and the old path
        # Using [regex] for robust replacement
        $pattern = 'image:\s+[''"]?~/data/post/[^/]+/[^/]+/([^/''"]+)[''"]?'
        $replacement = 'image: ./$1'
        $nc = [regex]::Replace($c, $pattern, $replacement)
        
        if ($c -ne $nc) {
            [System.IO.File]::WriteAllText($f.FullName, $nc)
            Write-Host "Fixed: $($f.FullName)"
        }
    } catch {
        Write-Warning "Failed to process $($f.FullName): $($_.Exception.Message)"
    }
}

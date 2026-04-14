$files = Get-ChildItem -Path "src/data/post" -Filter "*.md*" -Recurse
foreach ($f in $files) {
    try {
        $c = [System.IO.File]::ReadAllText($f.FullName)
        if ($c -match 'image:\s+(./[^''"\s]+)') {
            $imgPath = $Matches[1]
            $imgFileName = $imgPath.TrimStart('./')
            $fullImgPath = Join-Path $f.DirectoryName $imgFileName
            
            if (-not (Test-Path $fullImgPath)) {
                Write-Warning "Missing image: $imgFileName referenced in $($f.FullName)"
                
                # Check if an alternative exists (e.g., .png instead of .jpg)
                $stem = [System.IO.Path]::GetFileNameWithoutExtension($imgFileName)
                $altImages = Get-ChildItem -Path $f.DirectoryName -File | Where-Object { $_.BaseName -eq $stem -and $_.Extension -ne [System.IO.Path]::GetExtension($imgFileName) }
                
                if ($altImages.Count -gt 0) {
                    $newImgName = $altImages[0].Name
                    $nc = $c -replace "image:\s+\./$imgFileName", "image: ./$newImgName"
                    [System.IO.File]::WriteAllText($f.FullName, $nc)
                    Write-Host "Auto-fixed: Changed $imgFileName to $newImgName in $($f.FullName)"
                } else {
                    Write-Error "CRITICAL: No image found for $stem in $($f.DirectoryName)"
                }
            }
        }
    } catch {
        Write-Warning "Failed to process $($f.FullName): $($_.Exception.Message)"
    }
}

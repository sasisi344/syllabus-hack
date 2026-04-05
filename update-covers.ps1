$replacements = @{
    'trend' = '~/data/post/trend/common-cover.png'
    'career' = '~/data/post/career/common-cover.png'
    'method' = '~/data/post/method/common-cover.png'
    'theory' = '~/data/post/theory/common-cover.png'
    'strategy' = '~/data/post/strategy/common-cover.png'
    'term' = '~/data/post/term/common-cover.png'
}

foreach ($cat in $replacements.Keys) {
    $newImg = $replacements[$cat]
    $path = "src/data/post/$cat"
    if (Test-Path $path) {
        Write-Host "Updating covers for category: $cat"
        Get-ChildItem $path -Recurse -Filter "index.md" | ForEach-Object {
            $content = Get-Content $_.FullName -Raw
            if ($content -match "image: ~/assets/images/post/common/") {
                $newContent = $content -replace "image: ~/assets/images/post/common/[^ \r\n]*", "image: $newImg"
                Set-Content $_.FullName $newContent -Encoding UTF8
            }
        }
    }
}

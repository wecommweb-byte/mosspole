Add-Type -AssemblyName System.Drawing
$destDir = "c:\Users\Junaid\Documents\Moss Pole\public\images\resized"
Get-ChildItem "c:\Users\Junaid\Documents\Moss Pole\public\images" -Filter "Moss*.jpg" | ForEach-Object {
    try {
        $img = [System.Drawing.Image]::FromFile($_.FullName)
        $newWidth = 400
        $newHeight = [int]($newWidth * ($img.Height / $img.Width))
        $bmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
        $graph = [System.Drawing.Graphics]::FromImage($bmp)
        $graph.DrawImage($img, 0, 0, $newWidth, $newHeight)
        $bmp.Save((Join-Path $destDir $_.Name), [System.Drawing.Imaging.ImageFormat]::Jpeg)
        $img.Dispose()
        $bmp.Dispose()
        $graph.Dispose()
        Write-Host "Resized $_.Name"
    } catch {
        Write-Host "Failed to resize $_.Name : $_"
    }
}

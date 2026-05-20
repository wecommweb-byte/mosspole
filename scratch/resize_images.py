import os
from PIL import Image

src_dir = r"c:\Users\Junaid\Documents\Moss Pole\public\images\New images"
dest_dir = r"c:\Users\Junaid\Documents\Moss Pole\public\images\resized"

if not os.path.exists(dest_dir):
    os.makedirs(dest_dir)

for filename in os.listdir(src_dir):
    if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
        src_path = os.path.join(src_dir, filename)
        dest_path = os.path.join(dest_dir, filename)
        try:
            with Image.open(src_path) as img:
                img.thumbnail((400, 400))
                img.save(dest_path, "JPEG", quality=80)
                print(f"Resized {filename} to {dest_path}")
        except Exception as e:
            print(f"Failed to resize {filename}: {e}")

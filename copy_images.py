import shutil
import os

source_dir = r"C:\Users\Junaid\.gemini\antigravity\brain\35b8988e-19b5-4271-ad83-51960edebb47"
dest_dir = r"c:\Users\Junaid\Documents\Moss Pole\public\images"

files_to_copy = [
    ("media__1779145421954.jpg", "lifestyle_1.jpg"),
    ("media__1779145421978.jpg", "lifestyle_2.jpg"),
    ("media__1779145422009.jpg", "lifestyle_3.jpg"),
    ("media__1779145422022.jpg", "lifestyle_4.jpg")
]

for src_name, dest_name in files_to_copy:
    src_path = os.path.join(source_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    print(f"Copying {src_path} to {dest_path}")
    if os.path.exists(src_path):
        shutil.copy(src_path, dest_path)
        print("Success")
    else:
        print("Source path does not exist")

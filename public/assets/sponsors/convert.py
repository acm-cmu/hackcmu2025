import os
from PIL import Image

def convert_png_to_webp(folder):
    for filename in os.listdir(folder):
        if filename.lower().endswith('.png'):
            image_path = os.path.join(folder, filename)
            base_name = os.path.splitext(filename)[0]
            webp_path = os.path.join(folder, base_name + ".webp")
            
            with Image.open(image_path) as img:
                img.save(webp_path, "WEBP")
            
            print(f"Converted {filename} -> {base_name}.webp")

if __name__ == "__main__":
    target_folder = "."  # current directory
    convert_png_to_webp(target_folder)

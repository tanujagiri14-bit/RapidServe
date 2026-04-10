from PIL import Image, ImageDraw, ImageFont

img = Image.new('RGBA', (1024, 512), color = (0, 0, 0, 0)) # transparent
d = ImageDraw.Draw(img)

try:
    font = ImageFont.truetype("arial.ttf", 64)
except:
    font = ImageFont.load_default()

text = "Activities done by\nOur RapidServe"
text_bbox = d.textbbox((0, 0), text, font=font, align="center")
text_width = text_bbox[2] - text_bbox[0]
text_height = text_bbox[3] - text_bbox[1]

x = (1024 - text_width) / 2
y = (512 - text_height) / 2

d.text((x, y), text, fill=(255, 255, 255, 255), font=font, align="center")

img.save('static/models/information/static/activities.png')

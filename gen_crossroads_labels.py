from PIL import Image, ImageDraw, ImageFont

texts = {
    'crossroads_games': 'Games',
    'crossroads_contact': 'Contact Us',
    'crossroads_services': 'Services',
    'crossroads_account': 'Account'
}

for filename, text in texts.items():
    img = Image.new('RGBA', (512, 128), color = (0, 0, 0, 0)) # transparent
    d = ImageDraw.Draw(img)
    try:
        font = ImageFont.truetype("comic.ttf", 64)
    except:
        font = ImageFont.load_default()
    
    text_bbox = d.textbbox((0, 0), text, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    
    x = (512 - text_width) / 2
    y = (128 - text_height) / 2 - text_bbox[1] # Use bounding box offset to center properly
    
    d.text((x, y), text, fill=(255, 255, 255, 255), font=font)
    img.save(f'static/models/crossroads/{filename}.png')

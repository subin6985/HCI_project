from flask import Flask, session, send_file, request
from flask_cors import CORS
from io import BytesIO
from PIL import Image, ImageDraw, ImageFont
import random, secrets
import logging

# 로깅 설정
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)
app.secret_key = 'aksi#dkic!s12'

captcha_code = None

# 한글 자음 리스트
KOREAN_CONSONANTS = [
    'ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
]

def generate_security_code(length=6):
    return ''.join(random.choices(KOREAN_CONSONANTS, k=length))

def create_security_image_response(code):
    width, height = 300, 100
    image = Image.new('RGB', (width, height), (255, 255, 255))
    draw = ImageDraw.Draw(image)
    font_path = "C:Windows/Fonts/malgun.ttf"
    font = ImageFont.truetype(font_path, size=40)

    ascent, descent = font.getmetrics()
    total_char_height = ascent + descent

    char_bbox = font.getbbox('ㄱ')
    char_width = char_bbox[2] - char_bbox[0]
    char_height = char_bbox[3] - char_bbox[1]
    start_x = -5
    y = -15

    # 보안문자 랜덤 위치와 기울기 적용
    for i, char in enumerate(code):
        x = start_x + i * (char_width + 5)
        angle = random.randint(-30, 30)

        # 보안문자를 회전시키고 랜덤 위치에 그리기
        text_image = Image.new('RGBA', (char_width * 2, total_char_height * 2), (255, 255, 255, 0))
        text_draw = ImageDraw.Draw(text_image)
        text_draw.text((char_width // 2, ascent), char, font=font, fill=(0, 0, 0), archor = "mm")

        # 텍스트 회전
        rotated_text = text_image.rotate(angle, expand=True)
        image.paste(rotated_text, (x, y), rotated_text)

    # 랜덤 선 추가
    for _ in range(5):
        x1, y1 = random.randint(0, width), random.randint(0, height)
        x2, y2 = random.randint(0, width), random.randint(0, height)
        draw.line(((x1, y1), (x2, y2)), fill=(100, 100, 100), width=2)

    # 랜덤 점 추가
    for _ in range(50):
        x, y = random.randint(0, width), random.randint(0, height)
        draw.point((x, y), fill=(150, 150, 150))

    # 이미지 버퍼에 저장
    buffer = BytesIO()
    image.save(buffer, 'PNG')
    buffer.seek(0)
    return send_file(buffer, mimetype='image/png')

@app.route('/generate-captcha')
def generate_captcha():
    global captcha_code
    captcha_code = generate_security_code()
    session['captcha_code'] = captcha_code
    return create_security_image_response(captcha_code)

@app.route('/verify-captcha', methods=['POST'])
def verify_captcha():
    user_input = request.form['captcha']  # 사용자가 입력한 값
    logging.info(f"보안코드: {session.get('captcha_code')}")

    if user_input == captcha_code:
        return "보안문자가 올바릅니다!", 200
    else:
        return "보안문자가 틀렸습니다. 다시 시도해주세요.", 400

if __name__ == "__main__":
    app.run(debug=True)

from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

# Serve static files (CSS, JS, images)
@app.route('/css/<filename>')
def serve_css(filename):
    return send_from_directory('css', filename)

@app.route('/images/<filename>')
def serve_images(filename):
    return send_from_directory('images', filename)

@app.route('/games/<game_name>')
def serve_game(game_name):
    return render_template(f'games/{game_name}.html')


if __name__ == '__main__':
    app.run(debug=True)

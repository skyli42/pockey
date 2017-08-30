from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

if __name__ == '__main__':
    socketio.run(app)

@app.route("/")
def index():
	return render_template("index.html")

@app.route("/display")
def display():
	return render_template("display.html")

@app.route("/player")
def player():
	return render_template("player.html")

@socketio.on("connection")
def start():
	print("connection", flush = True)
	
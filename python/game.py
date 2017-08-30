from rink import Rink
from puck import Puck
from point import Point
from vector import Vector
from player import Player

class Game:
	def __init__(self):
		self.players = {}
		self.rink = Rink()
		self.r = 500
		self.puck = Puck(Point(4700 / 2, 2000 / 2), self.r / 20);
		self.score = 0
	def update(self):
		pass
	def movePlayer(self, id, data):
		pass
	def addPlayer(self, id):
		pass
	def removePlayer(self, id):
		pass
	def collision(self):
		pass
	def playerCollision(self):
		pass
	def puckCollision(self):
		pass
	def puckDeflect():
		pass
	def shot(self, player):
		pass
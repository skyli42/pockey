class Shape:
	def __init__(self, position = (0.0, 0.0), mass = 0.0, velocity = (0.0, 0.0), angle = 0.0, typ = None, size = 0.0, corner = None):
		"""
		position: tuple of (x, y)
		mass: float
		velocity: tuple of (dx, dy)
		angle: float
			in radians maybe
		typ:String
			type of shape
		size:float
			"radius" of shape (radius for circle, 1/2 width for line)
		corner: int
			if corner, quadrant of corner
		"""
		self.position = position #center of shape
		self.mass = mass
		self.velocity = velocity
		self.angle = angle
		self.typ = typ
		self.size = size
		self.corner = corner

		assert not (self.corner != None and self.typ != "corner" or self.corner == None and self.typ == "corner")
		
	def momentum(self):
		return self.mass*self.velocity
	def move(self):
		self.position = tuple([sum(x) for x in zip(self.position, self.velocity)])


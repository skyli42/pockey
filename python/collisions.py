collisions = {}
import math
from shape import Shape

def dist(p1, p2):
	return math.sqrt((p1[0]-p2[0])**2+(p1[1]-p2[1])**2)

# def circle_circle(c1, c2):
# 	return dist(c1.position, c2.position) <= c1.size+c2.size
def circle_corner(c, cnr):
	pass
def circle_line(c, l):
	p1 = ()
	p2 = ()

collision_funcs = {}
collision_funcs["corner"] = circle_corner
collision_funcs["line"] = circle_line
def collide(dyn, static):
	assert static.typ in ["corner", "line"], "Unknown or incorrect static type: %s" %static.typ
	assert dyn.typ == "circle", "Unknown or incorrect static type: %s" %dyn.type
	return collision_funcs[static.typ](dyn, static)


import cv2 as cv
import numpy as np

img = cv.imread('human1.jpg')
assert img is not None, "file could not be read, check with os.path.exists()"

# Cartoon filter (?)
kernel = np.ones((5,5),np.uint8)
gray = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
gray = cv.GaussianBlur(gray,(5,5),-1)
edges = cv.adaptiveThreshold(gray, 255, cv.ADAPTIVE_THRESH_MEAN_C, cv.THRESH_BINARY,9,10)
edges = cv.morphologyEx(edges, cv.MORPH_OPEN, kernel)
color = cv.bilateralFilter(img, 10, 10, 245)
cartoon = cv.bitwise_and(color, color, mask=edges)

cv.imshow("cartoon",cartoon)
cv.waitKey(0)
cv.destroyAllWindows()
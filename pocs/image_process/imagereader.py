import easyocr
import cv2

reader = easyocr.Reader(['en','en'])

def rotate_image(image, angel):

    rotation_matrix = cv2.getRotationMatrix2D((image.shape[1] / 2, image.shape[0] / 2), angel, 1)

    rotated_image = cv2.warpAffine(image, rotation_matrix, (image.shape[1], image.shape[0]))
    return rotated_image

def extract_text_from_image(image):
    result = reader.readtext(image)
    data = [item[1] for item in result]
    return data

def checkDataAndReturn_Text(data, indx, image):

    if len(data[0]) < 3:
        angles = [90, 180, 270]
        if indx < len(angles):
            imager = cv2.imread(image)
            if imager is None:
                raise ValueError(f"Cannot read the image from {image}")

            rotated_image = rotate_image(imager, angles[indx])
            data1 = extract_text_from_image(rotated_image)
            return checkDataAndReturn_Text(data1, indx + 1, image)
        else:
            return data
    return data

image_path = r'C:\Users\DELL\Pictures\Screenshots\Screenshot 2024-04-25 133607.png'
text = extract_text_from_image(image_path)
data = checkDataAndReturn_Text(text, 0, image_path)
doc_type = "aadhar"
da = {}

if doc_type == "aadhar" :
    da['name'] = data[3]
    da['DOB'] = data[4].split(':')[1]
    da['Gender'] = data[5].split('/')[1]
    da['aadhar number'] = data[6]
elif doc_type == 'pan' :
    da['pan number'] = data[8]
    da['name'] = data[11]
    da['father name'] = data[13]
    da ['DOB'] = data[17]
elif doc_type == 'voter':
    da['Voter Id'] = data[4]
    da['name'] = data[9]
    da['father_name'] = data[13]
    da['gender'] = data[16].split(' ')[1]
    da['DOB']  = data[17].split(':')[1]

print (doc_type, da)

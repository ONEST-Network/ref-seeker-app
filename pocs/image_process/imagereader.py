import easyocr
reader = easyocr.Reader(['en','en']) # this needs to run only once to load the model into memory
result = reader.readtext(r'C:\Users\DELL\Downloads\vott\pan.jpg')

data = [item[1] for item in result]  # Extracting the third element from each tuple
doc_type = "pan"
da = {}

# print(data)

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

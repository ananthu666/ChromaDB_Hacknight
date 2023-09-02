import main3
import chat2
from main3 import collect
from chat2 import sum
# from reciepymaker import parralax

def header(request_data):
            query = str(request_data)
            print(query)
            res=collect(query,10)
            res1=sum(res)
            # print('printing the recipy')
            # print(res1)
            res3=res1.split('\n\n')
            print(res3[3])
            # res2=['1','2','3','4','5']
            return res,res3
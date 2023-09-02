# main
import chromadb

client = chromadb.PersistentClient(path="chroma_storage")

collection = client.get_collection(name="my_collection")

def collect(input_data,n):

    q=collection.query(		

        query_texts=input_data,
        n_results=n
    )


    data = q['documents']

    food=[]
    inner_string = data[0]

    key_value= str(inner_string).split(',')

    for key_value1 in key_value:
        key_value = key_value1.strip("['")

        key_value_pairs = str(key_value).split(';') 

        document_dict = {}
        for pair in key_value_pairs:
            key, value = str (pair).split(':')

            document_dict[key.strip("' ")] = value.strip("' ")


        food.append(document_dict["food_name"])
    print(food)

    return food
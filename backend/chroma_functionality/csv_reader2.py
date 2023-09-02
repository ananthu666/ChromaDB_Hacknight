import os
import argparse
import csv
from tqdm import tqdm
import chromadb

def main():
    documents = []
    metadatas = []
    csv_files_directory = "documents_dir"  # Replace with the actual path
    collection_name = "my_collection"
    persist_directory = "chroma_storage"
    
    csv_files = [file for file in os.listdir(csv_files_directory) if file.lower().endswith(".csv")]
    
    for csv_file_name in csv_files:
        csv_file_path = os.path.join(csv_files_directory, csv_file_name)
        with open(csv_file_path, "r", newline="") as csv_file:
            csv_reader = csv.reader(csv_file)
            column_names = next(csv_reader)  # Read the first row as column names
            for row_number, row in enumerate(tqdm(csv_reader, desc=f"Reading {csv_file_name}")):
                # Combine the column names and values into a document
                document = ";".join([f"{column}: {value}" for column, value in zip(column_names, row)])
                documents.append(document)
                metadatas.append({"filename": csv_file_name, "row_number": row_number})

    client = chromadb.PersistentClient(path=persist_directory)
    collection = client.get_or_create_collection(name=collection_name)
    count = collection.count()
    ids = [str(i) for i in range(count, count + len(documents))]   

    for i in tqdm(range(0, len(documents), 100), desc="Adding documents", unit_scale=100):
        collection.add(
            ids=ids[i : i + 100],
            documents=documents[i : i + 100],
            metadatas=metadatas[i : i + 100],
        )

    new_count = collection.count()
    print(f"Added {new_count - count} documents")

if __name__ == "__main__":
    main()

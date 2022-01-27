import pandas as pd

df = pd.read_csv("Lexique.tsv", sep='\t')
words = df["lemme"]

mask = (df['lemme'].str.len() == 5)
words = words.loc[mask]
words = words.drop_duplicates()
words = words.str.normalize('NFKD').str.encode(
    'ascii', errors='ignore').str.decode('utf-8')
print(words)
words.to_csv('parsed.csv', index=False)

# don't forget to change header from lemme to word

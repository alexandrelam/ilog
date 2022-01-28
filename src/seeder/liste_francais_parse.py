import pandas as pd

df = pd.read_csv('liste_francais.csv', encoding='latin-1')
df = df[df.word.str.isalpha()]
df = df["word"]
df = df.str.lower()
mask = (df.str.len() == 5)
df = df.loc[mask]
df = df.str.normalize('NFKD').str.encode(
    'ascii', errors='ignore').str.decode('utf-8')
df.to_csv('parsed.csv', index=False)

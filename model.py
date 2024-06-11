# Importing libraries 
import numpy as np 
import pandas as pd 
import joblib
from flask import Flask
from scipy.stats import mode 
import matplotlib.pyplot as plt 
from mlxtend.plotting import plot_confusion_matrix
import seaborn as sns 
from sklearn.model_selection import  RandomizedSearchCV, train_test_split , GridSearchCV
from sklearn.preprocessing import LabelEncoder 
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split, cross_val_score 
from sklearn.svm import SVC 
from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB 
from sklearn.ensemble import RandomForestClassifier 
from sklearn.metrics import classification_report,confusion_matrix,accuracy_score,  precision_score, recall_score, f1_score 
train_data = pd.read_csv("/Users/vishalshrivastava/Development/MS_Hackathon/dataset/Training.csv")
train_data.head
train_data = train_data.drop(["Unnamed: 133"],axis=1)

train_data.keys()
print(train_data['diagnosis'])
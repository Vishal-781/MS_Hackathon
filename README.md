Disease Prediction Model
This project demonstrates how to train a K-Nearest Neighbors (KNN) model using a dataset of symptoms to predict diseases. Additionally, it provides instructions to set up a Flask API to serve the trained model for predictions.

Here's a README file that provides step-by-step instructions on how to train the KNN model using your dataset and then run the Flask API at the backend to make predictions.

Disease Prediction Model
This project demonstrates how to train a K-Nearest Neighbors (KNN) model using a dataset of symptoms to predict diseases. Additionally, it provides instructions to set up a Flask API to serve the trained model for predictions.

Prerequisites
Ensure you have the following installed:

Python 3.x
Required Python packages: numpy, pandas, joblib, flask, scipy, matplotlib, mlxtend, seaborn, scikit-learn
You can install the required packages using pip:

command

pip install numpy pandas joblib flask scipy matplotlib mlxtend seaborn scikit-learn

1. Training the Model:
 The training dataset is used from Kaggle.
 Remove unnecessary columns and handle missing values if any.
2. Train the KNN Model:
  Use GridSearchCV to find the best hyperparameters for the KNN model.
  Train the model with the best parameters.
  Save the trained model using joblib.
These all things are done in single script that is the model.py
python3 train_model.py
You can run model.py to train model OR you can use model.ipynb to run it on jupyter notebook.

After this we have to run Flask API 


Running the Flask API use command :


python3 main.py 

this will run api at http://127.0.0.1:5000/


## Running the model:
We use [ollama](https://www.ollama.com/) to run our model

1. Install ollama for respective OS from [here](https://www.ollama.com/download)

2. Then run the command `ollama run llama3`
> [!NOTE]
> The model is large and requires decent PC to run.

3. The model's endpoint is exposed at port `11434`

## Running the Chat bot:
The Chat bot is just a static html page and can be run however one wishes, some ways are using `python`, `apache`, `nginx` etc, servers to serve the directory.
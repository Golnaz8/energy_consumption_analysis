
[![Python 3.7](https://img.shields.io/badge/python-3.7-blue.svg)](https://www.python.org/downloads/release/python-370/) 
[![Spark](https://img.shields.io/badge/Spark-3.5.4-E25A1C.svg)](https://spark.apache.org/downloads.html)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-2.x-orange.svg)](https://www.tensorflow.org/install)
[![Keras Tuner](https://img.shields.io/badge/Keras_Tuner-latest-blueviolet.svg)](https://keras.io/keras_tuner/)
[![matplotlib](https://img.shields.io/badge/matplotlib-3.4.2-orange.svg)](https://matplotlib.org/stable/users/installing.html) 
[![pandas](https://img.shields.io/badge/pandas-1.3.3-red.svg)](https://pandas.pydata.org/) 
[![Jupyter Notebook](https://img.shields.io/badge/Jupyter_Notebook-6.3.0-brightgreen.svg)](https://jupyter.org/install) 
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) 
[![Node.js](https://img.shields.io/badge/Node.js-16.x-green)](https://nodejs.org/) 
[![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey)](https://expressjs.com/) 
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.2-purple)](https://getbootstrap.com/) 
[![HTML](https://img.shields.io/badge/HTML-5-orange)](https://developer.mozilla.org/en-US/docs/Web/HTML) 
[![CSS](https://img.shields.io/badge/CSS-3-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS) 



# energy_consumption_analysis

## Table of Contents

- [Overview](#overview)
- [Objectives](#objectives)
- [Data Sources](#data-sources)
- [Data Overview](#data-overview)
- [Usage Guide](#usage-guide)
- [Technologies Used](#technologies-used)
- [Credits](#credits)
- [License](#license)


## Overview

 This project aims to analyze and predict trends in energy consumption within the Greater Toronto Area (GTA). By examining historical data, the project identifies key patterns and factors influencing energy use across different seasons and customer segments. Our approach integrates a full-cycle data science pipeline encompassing data engineering, exploratory analysis, machine learning, and a dynamic web presentation for the results.


## Objectives

### Primary Objectives
- **Analyze Seasonal and Temporal Trends**: Explore how energy consumption varies across different times of the year and on a daily/hourly basis.
- **Develop Predictive Models**: Create models that can forecast future energy demands accurately.
- **Investigate Influencing Factors**: Assess the impact of customer type, pricing plans, and premise count on overall energy consumption.

### Secondary Objectives
- **Identify High-Demand Areas**: Determine which FSAs have the highest energy usage and analyze their specific characteristics.
- **Dynamic Web Presentation**: Present the findings interactively on a web page using advanced front-end technologies like CSS, Bootstrap, and JavaScript for enhanced user engagement.

## Data Sources

### Primary Data Source
- **Electricity Consumption Data**: Includes hourly energy usage data by Forward Sortation Areas (FSAs) throughout the GTA.

### External Data Sources
- **Independent Electricity System Operator (IESO)**: Provides supplemental real-time and historical electricity demand, grid conditions, and supply metrics. This data helps in capturing broader market-level trends such as peak demand periods, availability of renewable energy sources, and pricing fluctuations.

## Data Overview

### Variables
- **FSA**: Forward Sortation Area - Represents a specific postal code region which helps in geographical segmentation.
- **DATE**: The specific date on which energy usage data was recorded.
- **HOUR**: The hour of the day for which the data applies, critical for analyzing hourly consumption patterns.
- **YEAR, MONTH, DAY**: Extracted components from the DATE for detailed temporal analysis.
- **CUSTOMER_TYPE**: Classification of the customer, e.g., Residential, SGS <50kW, which helps in segmenting data according to consumer category.
- **PRICE_PLAN**: Type of pricing plan applicable, e.g., Time-of-Use (TOU), Tiered, which can influence consumption patterns.
- **TOTAL_CONSUMPTION**: The total amount of energy consumed during the specified period measured in kilowatt-hours (kWh).
- **PREMISE_COUNT**: The number of premises contributing to the total consumption figure, useful for normalization.
- **AVG_CONSUMPTION_PER_PREMISE**: Average energy consumption per premise, calculated to assess individual consumption efficiency.



## Machine Learning Models Used

This project utilizes various machine learning models to predict outcomes and extract insights from the data, leveraging the power of both Spark MLlib and TensorFlow frameworks.

### Spark MLlib Models
#### Linear Regression:
- **Purpose**: Used to predict continuous outcomes based on linear relationships between the target and predictor variables.
- **Implementation**: Implemented using PySpark’s MLlib, which is suitable for handling large datasets distributed across a cluster.
- **Features and Pipeline**:
  - **VectorAssembler**: Combines multiple columns into a single feature vector.
  - **StringIndexer**: Converts string labels into numerical indices.
  - **Regression Model**: The linear regression algorithm predicts the target variable.

#### Random Forest Regressor:
- **Purpose**: Offers robustness against overfitting by averaging multiple deep decision trees trained on different parts of the dataset.
- **Implementation**: Utilized for its ability to handle nonlinear data with a complex structure, providing feature importance scores that help in understanding predictor influence.
- **Pipeline Components**:
  - **Feature Vectorization**: Similar to above, using `VectorAssembler`.
  - **Model Training**: Fits the data to a random forest regression model within the PySpark framework.

### TensorFlow and Keras Tuner
#### Neural Network Models:
- **Purpose**: To capture complex nonlinear patterns in the data, especially useful in high-dimensional datasets.
- **Implementation**: Built with TensorFlow, which provides extensive support for deep learning models.
- **Keras Tuner**:
  - **Objective**: Used to tune hyperparameters of the neural networks to optimize model performance.
  - **Configuration**: Setup involves defining the search space for layers, nodes, and learning rates, among others.

### Model Evaluation
- **Regression Evaluator**:
  - **Usage**: Employed to assess the performance of regression models using metrics like RMSE (Root Mean Squared Error) and R-squared.
  - **Tool**: Spark MLlib’s evaluation modules provide straightforward implementations for these metrics.


## Usage Guide

### 1. Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Golnaz8/energy_consumption_analysis.git
   cd energy_consumption_analysis

2. **Create virtual environment (for Python)**:
    ```bash
    python -m venv env
    source env/bin/activate 

3. **Install the required dependencies (for Python)**:
    ```bash
    pip install matplotlib pandas numpy pyspark tensorflow keras-tuner

4. **Initialize the project**:
    ```bash
    npm init -y

5. **Install the required dependencies (for JavaScript)**:
    ```bash
    npm install express sequelize mysql2 dotenv cors leaflet bootstrap

6. **Set up environment variables**:
    Create a .env file in the project root directory. Add the following variables to configure your database connection:

    DB_USER=your-database-username

    DB_PASSWORD=your-database-password

    DB_NAME=your-database-name


### 2. Running the server:

To start the server, run:

    node server.js


### 3. Using Google Colab
Here’s how you can utilize Google Colab for this project:

#### Accessing the Notebooks
1. **Open Google Colab**: Visit [Google Colab](https://colab.research.google.com) and sign in with your Google account.

2. **Upload the Notebook**:
   - Click on `File` > `Upload notebook` > `Choose file`.
   - Navigate to the `.ipynb` file on your local machine and select it to upload to Colab.

3. **Connecting to Google Drive**:
   - In a new cell, type and run the following code to mount your Google Drive:
     ```python
     from google.colab import drive
     drive.mount('/content/drive')
     ```


## Technologies Used
This project leverages several technologies to process and analyze election data efficiently:

- **Python**: The core language used for scripting the analysis, providing robust support for data manipulation and file handling.
- **Pandas**: A powerful library for data manipulation and analysis, used to handle, clean, and analyze the school and student data effectively.
- **Matplotlib**: A comprehensive library used for generating plots, charts, and visual representations of the data, enhancing the readability of the analysis.
- **Jupyter Notebook**: An interactive computing environment that facilitates data exploration, visualization, and narrative analysis, making it easy to document and present findings.
- **JavaScript**: A versatile programming language used to add interactivity and dynamic functionality to the project.
- **Node.js**: A runtime environment that enables server-side scripting and supports building scalable backend services for the project.
- **Express.js**: A lightweight web application framework for Node.js, used to build the server-side API and handle requests efficiently.
- **PySpark**: Utilized for large-scale data processing.
- **TensorFlow and Keras Tuner**: Advanced machine learning libraries used to build and tune neural network models, enhancing predictive analytics.
- **Bootstrap**: A popular front-end framework used to create responsive and visually appealing user interfaces.
- **HTML**: The foundational language for creating the structure and layout of web pages.
- **CSS**: A styling language used to design and enhance the visual presentation of web pages.
- **Visual Studio Code**: Chosen as the preferred Integrated Development Environment (IDE) for coding, debugging, and managing the project files.
- **GitHub**: Hosts the repository online, allowing for backup, sharing, and documentation hosting, including this README file.




## Github URL
https://github.com/Golnaz8/energy_consumption_analysis

## Credits

This project was independently developed by the following developers:
<br><br />

**Neda Jamal**:

- **Github**: [@Neda2020](https://github.com/Neda2020)
  <br><br />

**Navdeep Grewal**:

- **Github**: [@Nav-hue](https://github.com/Nav-hue)
  <br><br />

**Golnaz Berenjian**:

- **Github**: [@Golnaz8](https://github.com/Golnaz8)
- **LinkedIn**: [@Golnaz Berenjian](www.linkedin.com/in/golnaz-berenjian)
  <br><br />


## License

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
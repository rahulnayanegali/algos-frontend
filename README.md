# Sorting Algorithms Simulations

This repository contains a web application that visualizes various sorting algorithms. It allows you to enter an integer array and observe the step-by-step sorting process in real-time.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies by running the command: `npm install`.

## Usage

1. Run the application with the command: `npm start`.
2. Open your web browser and visit `http://localhost:3000`.
3. Enter an integer array in the input field provided.
4. Click on the sorting algorithm buttons to visualize the sorting process.
5. Observe the changes in the array elements as the algorithm progresses.
6. The visualization will stop once the sorting is completed.

## Available Sorting Algorithms

The following sorting algorithms are available in this application:

- Cycle Sort
- Insertion Sort
- Selection Sort
- Bubble Sort
- Quick Sort

## How It Works

- The input array is displayed on the screen, with each element represented by a number.
- When a sorting algorithm is selected, the application communicates with a backend server to perform the sorting.
- The server sends periodic updates about the current state of the array.
- The application updates the displayed array to reflect the changes and highlights the elements that are being swapped or compared.
- Once the sorting is complete, the visualization stops, and the final sorted array is displayed.

## Contributing

If you want to contribute to this project, you can follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request, describing the changes you made.
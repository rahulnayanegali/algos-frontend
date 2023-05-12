export const algoDescription = {
  cycleSort: {
    name: "Cycle Sort",
    key: "cycleSort",
    description1:
      "The basic idea behind cycle sort is to reduce the number of writes by minimizing the distance each element needs to be moved. This is achieved by finding the correct position for each element and swapping it directly with the element at that position. By doing so, cycle sort achieves a lower number of writes compared to other sorting algorithms such as bubble sort or insertion sort, which may require multiple writes to move an element to its final position.",
    description2:
      "Cycle sort has a time complexity of O(n^2) in the worst case, where n is the number of elements to be sorted. However, its performance can be improved in some cases by optimizing the number of swaps required. It is particularly useful when the data set contains a significant number of duplicate elements, as it can efficiently handle these cases.",
  },

  insertionSort: {
    name: "Insertion Sort",
    key: "insertionSort",
    description1:
      "The basic idea behind insertion sort is to compare the current element with the elements in the sorted part of the array, starting from the rightmost element, and shifting the larger elements to the right until the correct position is found for the current element. The algorithm then inserts the current element into its correct position in the sorted part of the array.",
    description2:
      "Insertion sort is a simple sorting algorithm that works by dividing an array into two parts - a sorted part and an unsorted part. Initially, the sorted part consists of only the first element of the array, while the rest of the array is unsorted. The algorithm then iterates over the unsorted part of the array, taking each element in turn and inserting it into its correct position in the sorted part of the array. Insertion sort has a time complexity of O(n^2), making it less efficient than other sorting algorithms such as quicksort or mergesort for large arrays. However, it is often faster than other sorting algorithms for small arrays or partially sorted arrays.",
  },

  quickSort: {
    name: "Quick Sort",
    key: "quickSort",
    description1:
      "The basic idea behind QuickSort is to divide the array into two sub-arrays, based on a pivot element. The pivot element is chosen from the array, and all the other elements are divided into two sub-arrays based on whether they are smaller or larger than the pivot element. This process is repeated recursively for each of the sub-arrays until the entire array is sorted.",
    description2:
      "QuickSort has an average case time complexity of O(n log n) and a worst-case time complexity of O(n^2), where n is the number of elements in the array. However, in practice, QuickSort is often faster than other sorting algorithms, such as merge sort, due to its efficient use of memory and cache locality.",
  },

  bubbleSort: {
    name: "Bubble Sortt",
    key: "bubbleSort",

    description1:
      "Bubble sort is a simple sorting algorithm that compares adjacent elements of an array and swaps them if the element on the right is smaller than the one on the left. It is an in-place sorting algorithm i.e. no extra space is needed for this sort, the array itself is modified",

    description2:
      "This algorithm has a worst-case time complexity of O(n2). The bubble sort has a space complexity of O(1). The number of swaps in bubble sort equals the number of inversion pairs in the given array. When the array elements are few and the array is nearly sorted, bubble sort is effective and efficient.",
  },
};

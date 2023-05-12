import React from "react";

function Descriptions({ sortAPI }) {
  if (sortAPI === "insertionSort") {
    return (
      <div className="description">
        <p>
          The basic idea behind insertion sort is to compare the current element
          with the elements in the sorted part of the array, starting from the
          rightmost element, and shifting the larger elements to the right until
          the correct position is found for the current element. The algorithm
          then inserts the current element into its correct position in the
          sorted part of the array.
        </p>
        <p>
          Insertion sort is a simple sorting algorithm that works by dividing an
          array into two parts - a sorted part and an unsorted part. Initially,
          the sorted part consists of only the first element of the array, while
          the rest of the array is unsorted. The algorithm then iterates over
          the unsorted part of the array, taking each element in turn and
          inserting it into its correct position in the sorted part of the
          array. Insertion sort has a time complexity of{" "}
          <span style={{ fontWeight: "bold" }}>O(n^2)</span>, making it less
          efficient than other sorting algorithms such as quicksort or mergesort
          for large arrays. However, it is often faster than other sorting
          algorithms for small arrays or partially sorted arrays.",
        </p>
      </div>
    );
  }

  if (sortAPI === "cycleSort") {
    return (
      <div className="description">
        <p>
          The basic idea behind cycle sort is to reduce the number of writes by
          minimizing the distance each element needs to be moved. This is
          achieved by finding the correct position for each element and swapping
          it directly with the element at that position. By doing so, cycle sort
          achieves a lower number of writes compared to other sorting algorithms
          such as bubble sort or insertion sort, which may require multiple
          writes to move an element to its final position.
        </p>
        <p>
          Cycle sort has a time complexity of{" "}
          <span style={{ fontWeight: "bold" }}>O(n^2)</span> in the worst case,
          where n is the number of elements to be sorted. However, its
          performance can be improved in some cases by optimizing the number of
          swaps required. It is particularly useful when the data set contains a
          significant number of duplicate elements, as it can efficiently handle
          these cases.
        </p>
      </div>
    );
  }

  if (sortAPI === "quickSort") {
    return (
      <div className="description">
        <p>
          The basic idea behind QuickSort is to divide the array into two
          sub-arrays, based on a pivot element. The pivot element is chosen from
          the array, and all the other elements are divided into two sub-arrays
          based on whether they are smaller or larger than the pivot element.
          This process is repeated recursively for each of the sub-arrays until
          the entire array is sorted.
        </p>
        <p>
          QuickSort has an average case time complexity of{" "}
          <span style={{ fontWeight: "bold" }}>O (n log n)</span> and a
          worst-case time complexity of O(n^2), where n is the number of
          elements in the array. However, in practice, QuickSort is often faster
          than other sorting algorithms, such as merge sort, due to its
          efficient use of memory and cache locality.
        </p>
      </div>
    );
  }

  if (sortAPI === "bubbleSort") {
    return (
      <div className="description">
        <p>
          Bubble sort is a simple sorting algorithm that compares adjacent
          elements of an array and swaps them if the element on the right is
          smaller than the one on the left. It is an in-place sorting algorithm
          i.e. no extra space is needed for this sort, the array itself is
          modified
        </p>
        <p>
          This algorithm has a worst-case time complexity of{" "}
          <span style={{ fontWeight: "bold" }}>O(n2)</span>. The bubble sort has
          a space complexity of O(1). The number of swaps in bubble sort equals
          the number of inversion pairs in the given array. When the array
          elements are few and the array is nearly sorted, bubble sort is
          effective and efficient.
        </p>
      </div>
    );
  }

  if (sortAPI === "selectionSort") {
    return (
      <div className="description">
        <p>
          Selection sort is a simple sorting algorithm that sorts an array by
          repeatedly finding the minimum element from unsorted part of the array
          and putting it at the beginning. This process is repeated until all
          the elements are sorted.
        </p>
        <p>
          Selection sort has a time complexity of <span style={{ fontWeight: "bold" }}>O(n^2)</span> in the worst case,
          where n is the number of elements to be sorted. However, it is still
          preferred over other algorithms like bubble sort or insertion sort for
          its simplicity and ease of implementation. Selection sort also has the
          advantage of making only O(n) swaps, which can be advantageous in
          situations where the cost of swapping elements is high.
        </p>
      </div>
    );
  }
}

export default Descriptions;

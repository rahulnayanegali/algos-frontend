import React from "react";

function Descriptions() {
  return (
    <div className="description">
      <p>
        The basic idea behind insertion sort is to compare the current element
        with the elements in the sorted part of the array, starting from the
        rightmost element, and shifting the larger elements to the right until
        the correct position is found for the current element. The algorithm
        then inserts the current element into its correct position in the sorted
        part of the array.
      </p>
      <p>
        Insertion sort is a simple sorting algorithm that works by dividing an
        array into two parts - a sorted part and an unsorted part. Initially,
        the sorted part consists of only the first element of the array, while
        the rest of the array is unsorted. The algorithm then iterates over the
        unsorted part of the array, taking each element in turn and inserting it
        into its correct position in the sorted part of the array. Insertion
        sort has a time complexity of{" "}
        <span style={{ fontWeight: "bold" }}>O(n^2)</span>, making it less
        efficient than other sorting algorithms such as quicksort or mergesort
        for large arrays. However, it is often faster than other sorting
        algorithms for small arrays or partially sorted arrays.",
      </p>
    </div>
  );
}

export default Descriptions;

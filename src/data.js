export const algoDescriptions = {
    'name': 'Cycle Sort',
    'key': 'cycleSort',
    'description1': 'The basic idea behind cycle sort is to reduce the number of writes by minimizing the distance each element needs to be moved. This is achieved by finding the correct position for each element and swapping it directly with the element at that position. By doing so, cycle sort achieves a lower number of writes compared to other sorting algorithms such as bubble sort or insertion sort, which may require multiple writes to move an element to its final position.',
    'description2': 'Cycle sort has a time complexity of O(n^2) in the worst case, where n is the number of elements to be sorted. However, its performance can be improved in some cases by optimizing the number of swaps required. It is particularly useful when the data set contains a significant number of duplicate elements, as it can efficiently handle these cases.'
}
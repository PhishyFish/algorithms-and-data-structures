def binary_search(arr, num)
  start = 0
  stop = arr.length - 1

  while start <= stop
    mid = start + (stop - start) / 2

    if arr[mid] < num
      start = mid + 1
    elsif arr[mid] > num
      stop = mid - 1
    else
      return mid
    end
  end

  nil
end

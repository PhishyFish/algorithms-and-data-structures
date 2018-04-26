def binary_search(arr, num)
  start = 0
  stop = arr.length - 1

  while start <= stop
    mid = (start + stop) / 2

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

def binary_search_recursive(arr, num)
  return nil if arr.empty?

  start = 0
  stop = arr.length - 1
  mid = (start + stop) / 2

  if arr[mid] < num
    mid + 1 + binary_search_recursive(arr[mid + 1..stop], num)
  elsif arr[mid] > num
    binary_search_recursive(arr[start..mid - 1], num)
  else
    mid
  end
end

require 'byebug'
class LRUCache

  attr_accessor :size, :cache, :tracker

  def initialize(size)
    @size = size
    @cache = []
    # @tracker = Hash.new(0)
  end

  def count
    @cache.count
  end

  def add(el)
    if @cache.include?(el)
      @cache.delete(el)
      @cache << el
      # increase_usage(el)
      # @cache
    elsif @cache.count >= @size
      @cache.shift
      # increase_usage(el)
      @cache << el
    else
      # @cache.map! { |x| x == least_used ? el : x }
      # @tracker.delete(least_used)
      @cache << el
    end
  end

  def show
    # @tracker.sort_by { |_, v| v }.to_h.keys
    p @cache
    nil
  end

  # def increase_usage(target)
  #   @tracker[target] += 1
  # end

  # def least_used
  #   @tracker.sort_by { |_, v| v }.first.first
  # end
end

johnny_cache = LRUCache.new(4)

  p johnny_cache.add("I walk the line")
  p johnny_cache.add(5)
  p johnny_cache.count # => returns 2
  p johnny_cache.add([1,2,3])
  p johnny_cache.add(5)
  # p johnny_cache.tracker
  p johnny_cache.add(-5)
  p johnny_cache.tracker
  p johnny_cache.add({a: 1, b: 2, c: 3})
  p johnny_cache.cache
  p johnny_cache.add([1,2,3,4])
  p johnny_cache.cache

  p johnny_cache.add("I walk the line")
  p johnny_cache.add(:ring_of_fire)
  p johnny_cache.add("I walk the line")
  p johnny_cache.add({a: 1, b: 2, c: 3})

  #=> [[1, 2, 3, 4], :ring_of_fire, "I walk the line", {:a=>1, :b=>2, :c=>3}]

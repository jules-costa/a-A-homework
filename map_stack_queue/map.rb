class Map

  attr_accessor :my_map

  def initialize
    @my_map = []
  end

  def assign(k, v)
    if my_map.empty?
      my_map << [k, v]
    else
      my_map.each do |pair|
        k == pair.first ? pair[1] = v : my_map << [k, v] unless my_map.include?([k, v])
      end
    end
  end

  def lookup(k)
    my_map.select { |pair| pair.first == k }
  end

  def remove(k)
    my_map.reject! { |pair| pair.first == k }
  end

  def show
    my_map
  end

end

m = Map.new
p m.assign(1, 2)
p m.assign(3, 4)
p m.assign(1, 3)
# p m.show
p m.assign(3, 2)
# p m.show
p m.remove(3)
# m.show
p m.lookup(1)
# m.show
